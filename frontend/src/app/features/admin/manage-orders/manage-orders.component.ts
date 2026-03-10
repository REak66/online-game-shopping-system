import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { OrderService } from '../../../core/services/order.service';
import { Order } from '../../../core/models';
import { SelectComponent, SelectOption } from '../../../shared/components/select/select.component';
import { NotificationService } from '../../../shared/services/notification.service';
import { SpinComponent } from '../../../shared/components/spin/spin.component';
import { ConfirmService } from '../../../shared/services/confirm.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-manage-orders',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, SelectComponent, SpinComponent],
  template: `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="sidebar-brand"><i class="fas fa-gear"></i> Admin Panel</div>
        <nav class="sidebar-nav">
          <a routerLink="/admin" class="nav-item"><i class="fas fa-chart-bar"></i> Dashboard</a>
          <a routerLink="/admin/products" class="nav-item"><i class="fas fa-box"></i> Products</a>
          <a routerLink="/admin/categories" class="nav-item"><i class="fas fa-tag"></i> Categories</a>
          <a routerLink="/admin/orders" routerLinkActive="active" class="nav-item"><i class="fas fa-receipt"></i> Orders</a>
          <a routerLink="/admin/users" class="nav-item"><i class="fas fa-users"></i> Users</a>
          <div class="divider"></div>
          <a routerLink="/" class="nav-item"><i class="fas fa-house"></i> Back to Store</a>
        </nav>
      </aside>
      <main class="admin-main">
        <div class="page-header">
          <h1>Manage Orders</h1>
          <div class="header-actions">
            <button class="btn-export btn-pdf" (click)="exportPDF()" title="Export as PDF">
              <i class="fas fa-file-pdf"></i> PDF
            </button>
            <button class="btn-export btn-excel" (click)="exportExcel()" title="Export as Excel">
              <i class="fas fa-file-excel"></i> Excel
            </button>
          </div>
        </div>

        <!-- Toolbar: search + filters + status -->
        <div class="toolbar">
          <div class="search-wrap">
            <i class="fas fa-search search-icon"></i>
            <input
              type="text"
              class="search-input"
              placeholder="Search by customer name..."
              [(ngModel)]="searchText"
              (ngModelChange)="onSearchChange($event)"
            />
            <button *ngIf="searchText" class="search-clear" (click)="clearSearch()">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="date-range">
            <input type="date" class="date-input" [(ngModel)]="dateFrom" (change)="loadOrders()" placeholder="From" />
            <span class="date-sep">→</span>
            <input type="date" class="date-input" [(ngModel)]="dateTo" (change)="loadOrders()" placeholder="To" />
            <button *ngIf="dateFrom || dateTo" class="btn-clear-date" (click)="clearDates()">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <app-select [(ngModel)]="filterStatus" [options]="filterStatusOptions" [clearable]="false" (selectionChange)="loadOrders()"></app-select>
        </div>

        <div class="section-card">
          <app-spin *ngIf="loading" size="lg" tip="Loading orders..."></app-spin>
          <table class="data-table" *ngIf="!loading">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let order of orders; trackBy: trackById">
                <td class="order-id">#{{ order._id.slice(-8).toUpperCase() }}</td>
                <td>{{ getUser(order) }}</td>
                <td>{{ order.orderItems.length }}</td>
                <td>\${{ order.totalPrice | number:'1.2-2' }}</td>
                <td>
                  <app-select [ngModel]="order.status" [options]="orderStatusOptions" [clearable]="false" [disabled]="updatingOrders.has(order._id)" (selectionChange)="updateStatus(order._id, $event)"></app-select>
                </td>
                <td>{{ order.createdAt | date:'shortDate' }}</td>
                <td class="actions-cell">
                  <a [routerLink]="['/orders', order._id]" class="btn-view">View</a>
                  <button class="btn-delete" (click)="deleteOrder(order._id)" [disabled]="deletingOrders.has(order._id)" title="Delete order">
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr *ngIf="orders.length === 0">
                <td colspan="7" class="empty">No orders found</td>
              </tr>
            </tbody>
          </table>

          <!-- Pagination -->
          <div class="pagination" *ngIf="!loading && totalPages > 1">
            <button class="page-btn" (click)="goToPage(1)" [disabled]="currentPage === 1" title="First">
              <i class="fas fa-angles-left"></i>
            </button>
            <button class="page-btn" (click)="goToPage(currentPage - 1)" [disabled]="currentPage === 1" title="Previous">
              <i class="fas fa-angle-left"></i>
            </button>
            <ng-container *ngFor="let p of pageNumbers">
              <button
                class="page-btn page-num"
                [class.active]="p === currentPage"
                (click)="goToPage(p)"
              >{{ p }}</button>
            </ng-container>
            <button class="page-btn" (click)="goToPage(currentPage + 1)" [disabled]="currentPage === totalPages" title="Next">
              <i class="fas fa-angle-right"></i>
            </button>
            <button class="page-btn" (click)="goToPage(totalPages)" [disabled]="currentPage === totalPages" title="Last">
              <i class="fas fa-angles-right"></i>
            </button>
            <span class="page-info">Page {{ currentPage }} of {{ totalPages }} ({{ totalOrders }} orders)</span>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .admin-layout { display: flex; min-height: 100vh; }
    .admin-sidebar { width: 240px; background: #0d0f1e; color: white; padding: 24px 0; position: sticky; top: 0; height: 100vh; border-right: 1px solid rgba(255,255,255,0.07); animation: sidebarIn 0.4s cubic-bezier(0.16,1,0.3,1) both; }
    @keyframes sidebarIn { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
    .sidebar-brand { padding: 0 24px 24px; font-size: 1.2rem; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.08); margin-bottom: 16px; }
    .sidebar-nav { display: flex; flex-direction: column; }
    .nav-item { display: block; padding: 12px 24px; color: #9ca3af; text-decoration: none; transition: all 0.22s; font-weight: 500; border-left: 3px solid transparent; }
    .nav-item:hover, .nav-item.active { background: rgba(79,110,247,0.1); color: #a5b4fc; border-left-color: #4f6ef7; transform: translateX(3px); }
    .nav-item i { width: 18px; text-align: center; margin-right: 4px; font-size: 0.85rem; }
    .divider { height: 1px; background: rgba(255,255,255,0.07); margin: 12px 0; }
    .admin-main { flex: 1; padding: 32px; background: #0f1123; overflow-x: hidden; min-width: 0; animation: pageIn 0.45s cubic-bezier(0.16,1,0.3,1) 0.15s both; }
    @keyframes pageIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

    /* Page header */
    .page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 16px; }
    .page-header h1 { font-size: 1.8rem; font-weight: 700; color: #e8eaf6; }
    .header-actions { display: flex; gap: 10px; }
    .btn-export { display: flex; align-items: center; gap: 6px; padding: 9px 16px; border: none; border-radius: 8px; font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: opacity 0.2s, transform 0.15s; }
    .btn-export:hover { opacity: 0.85; transform: translateY(-1px); }
    .btn-pdf   { background: #e74c3c; color: #fff; }
    .btn-excel { background: #27ae60; color: #fff; }

    /* Toolbar */
    .toolbar { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }
    .search-wrap { position: relative; flex: 1; min-width: 200px; }
    .search-icon { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #6b7280; font-size: 0.85rem; pointer-events: none; }
    .search-input { width: 100%; padding: 10px 36px 10px 36px; border: 2px solid rgba(255,255,255,0.1); border-radius: 8px; background: rgba(255,255,255,0.05); color: #e8eaf6; font-size: 0.9rem; outline: none; transition: border-color 0.25s; box-sizing: border-box; }
    .search-input::placeholder { color: #6b7280; }
    .search-input:focus { border-color: #4f6ef7; }
    .search-clear { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; color: #6b7280; cursor: pointer; padding: 4px; line-height: 1; transition: color 0.2s; }
    .search-clear:hover { color: #e8eaf6; }
    .date-range { display: flex; align-items: center; gap: 6px; }
    .date-input { padding: 9px 10px; border: 2px solid rgba(255,255,255,0.1); border-radius: 8px; background: rgba(255,255,255,0.05); color: #e8eaf6; font-size: 0.85rem; outline: none; transition: border-color 0.25s; }
    .date-input:focus { border-color: #4f6ef7; }
    .date-input::-webkit-calendar-picker-indicator { filter: invert(1); opacity: 0.5; cursor: pointer; }
    .date-sep { color: #6b7280; font-size: 0.9rem; }
    .btn-clear-date { background: none; border: none; color: #6b7280; cursor: pointer; padding: 4px 8px; font-size: 0.9rem; transition: color 0.2s; }
    .btn-clear-date:hover { color: #e8eaf6; }

    /* Table */
    .section-card { background: #1e2235; border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.06); overflow-x: auto; animation: cardIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
    @keyframes cardIn { from{opacity:0;transform:translateY(16px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
    .data-table { width: 100%; border-collapse: collapse; min-width: 700px; }
    .data-table th { text-align: left; padding: 12px 16px; background: rgba(255,255,255,0.03); font-size: 0.8rem; font-weight: 600; color: #9ca3af; text-transform: uppercase; }
    .data-table td { padding: 14px 16px; border-top: 1px solid rgba(255,255,255,0.06); font-size: 0.9rem; color: #c9cbdf; }
    .data-table tbody tr { transition: background 0.18s; }
    .data-table tbody tr:hover { background: rgba(255,255,255,0.03); }
    .order-id { font-weight: 700; color: #a5b4fc; }
    .actions-cell { display: flex; align-items: center; gap: 12px; }
    .btn-view { color: #a5b4fc; text-decoration: none; font-weight: 600; font-size: 0.85rem; transition: color 0.2s, transform 0.2s; display: inline-block; }
    .btn-view:hover { color: #e0e4ff; transform: translateX(2px); }
    .btn-delete { background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.3); color: #ef4444; border-radius: 6px; padding: 5px 9px; cursor: pointer; font-size: 0.82rem; transition: background 0.2s, transform 0.15s; }
    .btn-delete:hover:not(:disabled) { background: rgba(239,68,68,0.25); transform: scale(1.08); }
    .btn-delete:disabled { opacity: 0.4; cursor: not-allowed; }
    .empty { text-align: center; color: #9ca3af; padding: 40px; }

    /* Pagination */
    .pagination { display: flex; align-items: center; gap: 6px; margin-top: 20px; flex-wrap: wrap; }
    .page-btn { min-width: 34px; height: 34px; padding: 0 8px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; background: rgba(255,255,255,0.04); color: #9ca3af; cursor: pointer; font-size: 0.85rem; transition: all 0.2s; display: flex; align-items: center; justify-content: center; }
    .page-btn:hover:not(:disabled) { background: rgba(79,110,247,0.15); color: #a5b4fc; border-color: rgba(79,110,247,0.4); }
    .page-btn:disabled { opacity: 0.35; cursor: not-allowed; }
    .page-btn.active { background: #4f6ef7; color: #fff; border-color: #4f6ef7; font-weight: 700; }
    .page-info { margin-left: 8px; font-size: 0.8rem; color: #6b7280; }

    @media (max-width: 1024px) {
      .admin-sidebar { width: 200px; }
      .admin-main { padding: 24px 20px; }
    }
    @media (max-width: 768px) {
      .admin-layout { flex-direction: column; }
      .admin-sidebar {
        width: 100%; height: 58px; position: fixed; bottom: 0; left: 0; right: 0;
        top: auto; flex-direction: row; padding: 0;
        border-right: none; border-top: 1px solid rgba(255,255,255,0.07);
        z-index: 200;
      }
      .sidebar-brand { display: none; }
      .divider { display: none; }
      .sidebar-nav {
        flex-direction: row; width: 100%; height: 100%; padding: 0;
        overflow-x: auto; scrollbar-width: none;
      }
      .sidebar-nav::-webkit-scrollbar { display: none; }
      .nav-item {
        flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
        min-width: 54px; padding: 6px 4px; gap: 2px;
        border-left: none; border-top: 2px solid transparent; border-radius: 0;
        font-size: 0.6rem; text-align: center;
      }
      .nav-item:hover, .nav-item.active { transform: none; border-left-color: transparent; border-top-color: #4f6ef7; }
      .nav-item i { font-size: 1.1rem; width: auto; margin-right: 0; display: block; }
      .admin-main { padding: 18px 14px 76px; }
      .toolbar { flex-direction: column; align-items: stretch; }
      .search-wrap { min-width: unset; }
      .date-range { flex-wrap: wrap; }
    }
    @media (max-width: 480px) {
      .admin-main { padding: 14px 12px 76px; }
      .page-header h1 { font-size: 1.4rem; }
      .section-card { padding: 16px; }
    }
  `]
})
export class ManageOrdersComponent implements OnInit, OnDestroy {
  orders: Order[] = [];
  loading = true;
  filterStatus = '';
  updatingOrders = new Set<string>();
  deletingOrders = new Set<string>();

  // search & date
  searchText = '';
  dateFrom = '';
  dateTo = '';
  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  // pagination
  currentPage = 1;
  totalPages = 1;
  totalOrders = 0;
  readonly pageSize = 10;

  get pageNumbers(): number[] {
    const delta = 2;
    const range: number[] = [];
    for (let i = Math.max(1, this.currentPage - delta); i <= Math.min(this.totalPages, this.currentPage + delta); i++) {
      range.push(i);
    }
    return range;
  }

  readonly filterStatusOptions: SelectOption[] = [
    { value: '',            label: 'All Statuses' },
    { value: 'pending',     label: 'Pending' },
    { value: 'paid',        label: 'Paid' },
    { value: 'processing',  label: 'Processing' },
    { value: 'cancelled',   label: 'Cancelled' }
  ];

  readonly orderStatusOptions: SelectOption[] = [
    { value: 'pending',     label: 'Pending' },
    { value: 'paid',        label: 'Paid' },
    { value: 'processing',  label: 'Processing' },
    { value: 'cancelled',   label: 'Cancelled' }
  ];

  constructor(
    private orderService: OrderService,
    private notification: NotificationService,
    private confirm: ConfirmService
  ) {}

  ngOnInit() {
    this.searchSubject.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.currentPage = 1;
      this.loadOrders();
    });
    this.loadOrders();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchChange(value: string) {
    this.searchSubject.next(value);
  }

  clearSearch() {
    this.searchText = '';
    this.currentPage = 1;
    this.loadOrders();
  }

  clearDates() {
    this.dateFrom = '';
    this.dateTo = '';
    this.currentPage = 1;
    this.loadOrders();
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages || page === this.currentPage) return;
    this.currentPage = page;
    this.loadOrders();
  }

  loadOrders() {
    const params: any = { page: this.currentPage, limit: this.pageSize };
    if (this.filterStatus) params.status = this.filterStatus;
    if (this.searchText.trim()) params.search = this.searchText.trim();
    if (this.dateFrom) params.dateFrom = this.dateFrom;
    if (this.dateTo) params.dateTo = this.dateTo;
    this.loading = true;
    this.orderService.getAllOrders(params).subscribe({
      next: (res) => {
        this.orders = res.orders || [];
        this.totalOrders = res.total || 0;
        this.totalPages = res.pages || 1;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  trackById(_index: number, order: any): string {
    return order._id;
  }

  getUser(order: any): string {
    if (!order.user) return 'Unknown';
    return typeof order.user === 'string' ? order.user : order.user.name || order.user.email;
  }

  updateStatus(orderId: string, status: string) {
    if (!status || this.updatingOrders.has(orderId)) return;
    const order = this.orders.find((o: any) => (o as any)._id === orderId);
    if (!order) return;
    const previousStatus = (order as any).status;
    if (previousStatus === status) return;
    (order as any).status = status;
    this.updatingOrders.add(orderId);
    this.orderService.updateOrderStatus(orderId, status).subscribe({
      next: () => { this.updatingOrders.delete(orderId); },
      error: () => {
        (order as any).status = previousStatus;
        this.updatingOrders.delete(orderId);
        this.notification.error('Failed to update order status. Please try again.');
      }
    });
  }

  async deleteOrder(orderId: string) {
    const confirmed = await this.confirm.confirm({
      title: 'Delete Order?',
      description: 'This action cannot be undone.',
      okText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    });
    if (!confirmed) return;
    this.deletingOrders.add(orderId);
    this.orderService.deleteOrder(orderId).subscribe({
      next: () => {
        this.deletingOrders.delete(orderId);
        this.orders = this.orders.filter((o: any) => (o as any)._id !== orderId);
        this.totalOrders = Math.max(0, this.totalOrders - 1);
        this.totalPages = Math.max(1, Math.ceil(this.totalOrders / this.pageSize));
        if (this.currentPage > this.totalPages) {
          this.currentPage = this.totalPages;
          this.loadOrders();
        }
        this.notification.success('Order deleted successfully.');
      },
      error: () => {
        this.deletingOrders.delete(orderId);
        this.notification.error('Failed to delete order. Please try again.');
      }
    });
  }

  /** Build flat rows for export from currently loaded orders */
  private buildExportRows(): any[][] {
    return this.orders.map(o => [
      '#' + (o as any)._id.slice(-8).toUpperCase(),
      this.getUser(o),
      (o as any).orderItems.length,
      '$' + (o as any).totalPrice.toFixed(2),
      (o as any).status,
      new Date((o as any).createdAt).toLocaleDateString()
    ]);
  }

  exportPDF() {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Orders Report', 14, 15);
    autoTable(doc, {
      head: [['Order ID', 'Customer', 'Items', 'Total', 'Status', 'Date']],
      body: this.buildExportRows(),
      startY: 22,
      styles: { fontSize: 9 },
      headStyles: { fillColor: [79, 110, 247] }
    });
    doc.save('orders.pdf');
  }

  exportExcel() {
    const headers = ['Order ID', 'Customer', 'Items', 'Total', 'Status', 'Date'];
    const rows = this.buildExportRows();
    const ws = XLSX.utils.aoa_to_sheet([headers, ...rows]);
    ws['!cols'] = [{ wch: 14 }, { wch: 20 }, { wch: 7 }, { wch: 10 }, { wch: 12 }, { wch: 12 }];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Orders');
    XLSX.writeFile(wb, 'orders.xlsx');
  }
}

