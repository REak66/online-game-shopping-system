import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminService } from '../../../core/services/admin.service';
import { OrderService } from '../../../core/services/order.service';
import { SpinComponent } from '../../../shared/components/spin/spin.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, SpinComponent],
  template: `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="sidebar-brand"><i class="fas fa-gear"></i> Admin Panel</div>
        <nav class="sidebar-nav">
          <a routerLink="/admin" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-item"><i class="fas fa-chart-bar"></i> Dashboard</a>
          <a routerLink="/admin/products" routerLinkActive="active" class="nav-item"><i class="fas fa-box"></i> Products</a>
          <a routerLink="/admin/categories" routerLinkActive="active" class="nav-item"><i class="fas fa-tag"></i> Categories</a>
          <a routerLink="/admin/orders" routerLinkActive="active" class="nav-item"><i class="fas fa-receipt"></i> Orders</a>
          <a routerLink="/admin/users" routerLinkActive="active" class="nav-item"><i class="fas fa-users"></i> Users</a>
          <div class="divider"></div>
          <a routerLink="/" class="nav-item"><i class="fas fa-house"></i> Back to Store</a>
        </nav>
      </aside>
      <main class="admin-main">
        <div class="admin-header">
          <h1>Dashboard</h1>
          <p>Welcome back, Admin!</p>
        </div>

        <app-spin *ngIf="loading" size="lg" tip="Loading dashboard..."></app-spin>

        <!-- Stats Cards -->
        <div class="stats-grid" *ngIf="stats">
          <div class="stat-card blue">
            <div class="stat-icon"><i class="fas fa-users"></i></div>
            <div class="stat-info">
              <h3>{{ stats.totalUsers }}</h3>
              <p>Total Users</p>
            </div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon"><i class="fas fa-box"></i></div>
            <div class="stat-info">
              <h3>{{ stats.totalProducts }}</h3>
              <p>Products</p>
            </div>
          </div>
          <div class="stat-card purple">
            <div class="stat-icon"><i class="fas fa-receipt"></i></div>
            <div class="stat-info">
              <h3>{{ stats.totalOrders }}</h3>
              <p>Total Orders</p>
            </div>
          </div>
          <div class="stat-card orange">
            <div class="stat-icon"><i class="fas fa-dollar-sign"></i></div>
            <div class="stat-info">
              <h3>\${{ stats.totalSales | number:'1.0-0' }}</h3>
              <p>Total Revenue</p>
            </div>
          </div>
        </div>

        <!-- Recent Orders -->
        <div class="section-card">
          <div class="section-header">
            <h2>Recent Orders</h2>
            <a routerLink="/admin/orders" class="see-all">View All →</a>
          </div>
          <div class="table-wrapper">
            <table class="data-table" *ngIf="stats?.recentOrders?.length">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let order of stats.recentOrders">
                  <td class="order-id">#{{ order._id.slice(-8).toUpperCase() }}</td>
                  <td>{{ getOrderUser(order) }}</td>
                  <td>\${{ order.totalPrice | number:'1.2-2' }}</td>
                  <td><span class="status-badge" [class]="'status-' + order.status">{{ order.status }}</span></td>
                  <td>{{ order.createdAt | date:'shortDate' }}</td>
                </tr>
              </tbody>
            </table>
            <div class="empty-table" *ngIf="!stats?.recentOrders?.length">No orders yet</div>
          </div>
        </div>

        <!-- Monthly Sales Summary -->
        <div class="section-card chart-section" *ngIf="stats?.monthlySales?.length">
          <div class="chart-header">
            <div>
              <h2 class="chart-title">Monthly Revenue</h2>
              <p class="chart-subtitle">Last 12 months of sales performance</p>
            </div>
            <div class="chart-pill">
              <span class="pill-label">Period Total</span>
              <span class="pill-value">\${{ getPeriodTotal() | number:'1.0-0' }}</span>
            </div>
          </div>
          <div class="chart-body">
            <div class="y-labels">
              <span>{{ getYLabel(1.0) }}</span>
              <span>{{ getYLabel(0.75) }}</span>
              <span>{{ getYLabel(0.5) }}</span>
              <span>{{ getYLabel(0.25) }}</span>
              <span>\$0</span>
            </div>
            <div class="chart-canvas">
              <div class="gridlines">
                <div class="gridline"></div>
                <div class="gridline"></div>
                <div class="gridline"></div>
                <div class="gridline"></div>
                <div class="gridline"></div>
              </div>
              <div class="bars-row">
                <div class="bar-col" *ngFor="let month of stats.monthlySales.slice(-12); let i = index" [style.animation-delay]="(i * 0.04) + 's'">
                  <div class="bar-fill" [style.height.px]="getBarHeight(month.sales)">
                    <span class="bar-tip">\${{ month.sales | number:'1.0-0' }}</span>
                  </div>
                  <span class="bar-label">{{ getMonthName(month._id.month) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .admin-layout { display: flex; min-height: 100vh; }
    .admin-sidebar {
      width: 240px; background: #0d0f1e; color: white; padding: 24px 0;
      position: sticky; top: 0; height: 100vh;
      border-right: 1px solid rgba(255,255,255,0.07);
      animation: sidebarIn 0.4s cubic-bezier(0.16,1,0.3,1) both;
    }
    @keyframes sidebarIn { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
    .sidebar-brand { padding: 0 24px 24px; font-size: 1.2rem; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.08); margin-bottom: 16px; }
    .sidebar-nav { display: flex; flex-direction: column; }
    .nav-item {
      display: block; padding: 12px 24px; color: #9ca3af; text-decoration: none;
      transition: all 0.22s; font-weight: 500; border-left: 3px solid transparent;
    }
    .nav-item:hover, .nav-item.active { background: rgba(79,110,247,0.1); color: #a5b4fc; border-left-color: #4f6ef7; transform: translateX(3px); }
    .nav-item i { width: 18px; text-align: center; margin-right: 4px; font-size: 0.85rem; }
    .divider { height: 1px; background: rgba(255,255,255,0.07); margin: 12px 0; }
    .admin-main {
      flex: 1; padding: 32px; background: #0f1123; overflow-y: auto;
      animation: pageIn 0.45s cubic-bezier(0.16,1,0.3,1) 0.15s both;
    }
    @keyframes pageIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
    .admin-header { margin-bottom: 32px; }
    .admin-header h1 { font-size: 1.8rem; font-weight: 700; color: #e8eaf6; }
    .admin-header p { color: #9ca3af; }
    .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 32px; }
    .stat-card {
      background: #1e2235; border-radius: 16px; padding: 24px;
      display: flex; align-items: center; gap: 16px;
      border: 1px solid rgba(255,255,255,0.06);
      animation: statIn 0.55s cubic-bezier(0.34,1.56,0.64,1) both;
      transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s;
    }
    .stat-card:nth-child(1) { animation-delay: 0.10s; }
    .stat-card:nth-child(2) { animation-delay: 0.18s; }
    .stat-card:nth-child(3) { animation-delay: 0.26s; }
    .stat-card:nth-child(4) { animation-delay: 0.34s; }
    @keyframes statIn { from{opacity:0;transform:translateY(24px) scale(0.92)} to{opacity:1;transform:translateY(0) scale(1)} }
    .stat-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); }
    .stat-icon { font-size: 2rem; color: inherit; display: flex; align-items: center; justify-content: center; }
    .stat-info h3 { font-size: 1.8rem; font-weight: 800; color: #e8eaf6; }
    .stat-info p { color: #9ca3af; font-size: 0.85rem; }
    .stat-card.blue { border-left: 4px solid #4f6ef7; }
    .stat-card.green { border-left: 4px solid #4ade80; }
    .stat-card.purple { border-left: 4px solid #8b5cf6; }
    .stat-card.orange { border-left: 4px solid #F59E0B; }
    .section-card {
      background: #1e2235; border-radius: 16px; padding: 24px;
      border: 1px solid rgba(255,255,255,0.06); margin-bottom: 24px;
      animation: cardIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.25s both;
    }
    @keyframes cardIn { from{opacity:0;transform:translateY(16px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
    .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .section-header h2, .section-card h2 { font-size: 1.2rem; font-weight: 700; margin-bottom: 20px; color: #e8eaf6; }
    .see-all { color: #a5b4fc; text-decoration: none; font-size: 0.9rem; font-weight: 600; transition: color 0.2s; }
    .see-all:hover { color: #e0e4ff; }
    .table-wrapper { overflow-x: auto; }
    .data-table { width: 100%; border-collapse: collapse; }
    .data-table th {
      text-align: left; padding: 12px 16px; background: rgba(255,255,255,0.03);
      font-size: 0.8rem; font-weight: 600; color: #9ca3af; text-transform: uppercase;
    }
    .data-table td { padding: 14px 16px; border-top: 1px solid rgba(255,255,255,0.06); font-size: 0.9rem; color: #c9cbdf; }
    .data-table tbody tr { transition: background 0.18s; }
    .data-table tbody tr:hover { background: rgba(255,255,255,0.03); }
    .order-id { font-weight: 700; color: #a5b4fc; }
    .status-badge {
      padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; text-transform: capitalize;
    }
    .status-pending { background: rgba(251,191,36,0.15); color: #fbbf24; }
    .status-processing { background: rgba(79,110,247,0.15); color: #a5b4fc; }
    .status-delivered { background: rgba(34,197,94,0.15); color: #4ade80; }
    .status-cancelled { background: rgba(239,68,68,0.15); color: #f87171; }
    .status-paid { background: rgba(6,182,212,0.15); color: #67e8f9; }
    .empty-table { text-align: center; padding: 40px; color: #9ca3af; }
    /* Chart Section */
    .chart-section h2 { margin-bottom: 0; }
    .chart-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 28px; }
    .chart-title { font-size: 1.2rem; font-weight: 700; color: #e8eaf6; }
    .chart-subtitle { color: #9ca3af; font-size: 0.82rem; margin-top: 4px; }
    .chart-pill { background: linear-gradient(135deg, rgba(79,110,247,0.12), rgba(139,92,246,0.1)); border: 1px solid rgba(165,180,252,0.2); border-radius: 12px; padding: 10px 18px; text-align: right; }
    .pill-label { display: block; font-size: 0.66rem; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af; margin-bottom: 3px; }
    .pill-value { font-size: 1.4rem; font-weight: 800; background: linear-gradient(135deg, #a5b4fc, #c084fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .chart-body { display: flex; gap: 10px; }
    .y-labels { display: flex; flex-direction: column; justify-content: space-between; align-items: flex-end; padding-bottom: 24px; min-width: 48px; }
    .y-labels span { font-size: 0.66rem; color: #6b7280; }
    .chart-canvas { flex: 1; position: relative; }
    .gridlines { position: absolute; top: 0; left: 0; right: 0; bottom: 24px; display: flex; flex-direction: column; justify-content: space-between; pointer-events: none; }
    .gridline { width: 100%; height: 1px; background: rgba(255,255,255,0.05); }
    @keyframes barColIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
    .bars-row { display: flex; align-items: flex-end; gap: 6px; height: 190px; position: relative; }
    .bar-col { display: flex; flex-direction: column; align-items: center; gap: 6px; flex: 1; animation: barColIn 0.45s cubic-bezier(0.16,1,0.3,1) both; }
    .bar-fill { width: 100%; background: linear-gradient(to top, #4f6ef7, #8b5cf6); border-radius: 6px 6px 0 0; min-height: 4px; position: relative; transition: background 0.25s, box-shadow 0.25s; cursor: pointer; }
    .bar-col:hover .bar-fill { background: linear-gradient(to top, #5c7cff, #a78bfa); box-shadow: 0 0 18px rgba(99,122,255,0.4); }
    .bar-tip { position: absolute; bottom: calc(100% + 6px); left: 50%; transform: translateX(-50%); background: rgba(22,27,52,0.95); color: #e8eaf6; font-size: 0.7rem; font-weight: 700; padding: 4px 8px; border-radius: 6px; white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity 0.18s; border: 1px solid rgba(165,180,252,0.2); }
    .bar-col:hover .bar-tip { opacity: 1; }
    .bar-label { font-size: 0.68rem; color: #6b7280; font-weight: 600; height: 18px; display: flex; align-items: center; }
    @media (max-width: 1024px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
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
    }
    @media (max-width: 768px) {
      .chart-header { flex-direction: column; gap: 16px; align-items: stretch; }
      .chart-pill { text-align: left; display: flex; justify-content: space-between; align-items: center; }
      .pill-label { display: inline; margin-bottom: 0; margin-right: 8px; }
      .chart-body { flex-direction: column; gap: 8px; }
      .y-labels { flex-direction: row; justify-content: space-between; padding-bottom: 0; min-width: auto; order: 2; }
      .chart-canvas { order: 1; }
      .bars-row { height: 140px; }
      .gridlines { bottom: 0; }
      .bar-label { font-size: 0.58rem; }
    }
    @media (max-width: 480px) {
      .stats-grid { grid-template-columns: 1fr; }
      .admin-main { padding: 14px 12px 76px; }
      .bars-row { height: 100px; gap: 4px; }
      .bar-col { min-width: 0; }
      .bar-label { font-size: 0.52rem; }
      .y-labels span { font-size: 0.58rem; }
      .chart-pill { padding: 8px 12px; }
      .pill-value { font-size: 1.1rem; }
    }
  `]
})
export class AdminDashboardComponent implements OnInit {
  stats: any = null;
  loading = true;
  maxSales = 0;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getDashboardStats().subscribe({
      next: (res) => {
        this.stats = res.stats;
        this.loading = false;
        if (this.stats?.monthlySales?.length) {
          this.maxSales = Math.max(...this.stats.monthlySales.map((m: any) => m.sales));
        }
      },
      error: () => { this.loading = false; }
    });
  }

  getOrderUser(order: any): string {
    if (!order.user) return 'Unknown';
    return typeof order.user === 'string' ? order.user : order.user.name;
  }

  getBarHeight(sales: number): number {
    if (!this.maxSales) return 4;
    return Math.max(4, (sales / this.maxSales) * 160);
  }

  getMonthName(month: number): string {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return months[month - 1] || '';
  }

  getPeriodTotal(): number {
    if (!this.stats?.monthlySales) return 0;
    return this.stats.monthlySales.reduce((sum: number, m: any) => sum + m.sales, 0);
  }

  getYLabel(fraction: number): string {
    const val = this.maxSales * fraction;
    if (val >= 1000) return '$' + (val >= 10000 ? Math.round(val / 1000) : (val / 1000).toFixed(1)) + 'K';
    return '$' + Math.round(val);
  }
}
