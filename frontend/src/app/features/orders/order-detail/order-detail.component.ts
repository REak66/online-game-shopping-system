import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';
import { Order } from '../../../core/models';
import { NotificationService } from '../../../shared/services/notification.service';
import { SpinComponent } from '../../../shared/components/spin/spin.component';
import { SkeletonComponent } from '../../../shared/components/skeleton/skeleton.component';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, SpinComponent, SkeletonComponent],
  template: `
    <div class="page-container" *ngIf="order">
      <nav class="breadcrumb">
        <a routerLink="/orders">Orders</a> / Order #{{ order._id.slice(-8).toUpperCase() }}
      </nav>

      <div class="order-layout">
        <div class="order-main">
          <div class="order-status-card">
            <h1>Order Details</h1>
            <div class="status-row">
              <span>Status: </span>
              <span class="status-badge" [class]="'status-' + order.status">{{ order.status }}</span>
            </div>
            <p class="order-date">Placed on {{ order.createdAt | date:'fullDate' }}</p>
          </div>

          <div class="section-card">
            <h2>Order Items</h2>
            <div class="order-items">
              <div class="order-item" *ngFor="let item of order.orderItems">
                <img [src]="item.image ? 'http://localhost:5050' + item.image : 'https://via.placeholder.com/80x80?text=?'"
                  [alt]="item.name"
                  onerror="this.src='https://via.placeholder.com/80x80?text=?'"
                  class="item-img" />
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>\${{ item.price | number:'1.2-2' }} x {{ item.quantity }}</p>
                </div>
                <span class="item-total">\${{ (item.price * item.quantity) | number:'1.2-2' }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="order-sidebar">
          <div class="summary-card">
            <h2>Payment Summary</h2>
            <div class="summary-row"><span>Payment Method</span><span>{{ order.paymentMethod }}</span></div>
            <div class="summary-row"><span>Items</span><span>\${{ order.itemsPrice | number:'1.2-2' }}</span></div>
            <div class="summary-row"><span>Tax</span><span>\${{ order.taxPrice | number:'1.2-2' }}</span></div>
            <div class="summary-divider"></div>
            <div class="summary-total"><span>Total</span><span>\${{ order.totalPrice | number:'1.2-2' }}</span></div>
          </div>

          <button class="btn-cancel" (click)="cancelOrder()"
            *ngIf="canCancel" [disabled]="cancelling">
            <ng-container *ngIf="!cancelling"><i class="fas fa-xmark" style="margin-right:4px"></i>Cancel Order</ng-container>
            <ng-container *ngIf="cancelling">Cancelling...</ng-container>
          </button>

        </div>
      </div>
    </div>

    <app-spin *ngIf="loading" size="lg" tip="Loading order..."></app-spin>

    <!-- Skeleton order detail layout -->
    <div class="page-container" *ngIf="loading">
      <app-skeleton type="title" [active]="true" width="28%"></app-skeleton>
      <div class="order-layout" style="margin-top:24px">
        <div class="order-main">
          <div class="order-status-card">
            <app-skeleton type="title" [active]="true" width="40%"></app-skeleton>
            <app-skeleton type="text" [active]="true" [rows]="2"></app-skeleton>
          </div>
          <div class="section-card">
            <app-skeleton type="title" [active]="true" width="30%"></app-skeleton>
            <app-skeleton type="cart-item" [count]="3" [active]="true"></app-skeleton>
          </div>
        </div>
        <div class="order-sidebar">
          <div class="summary-card">
            <app-skeleton type="title" [active]="true" width="55%"></app-skeleton>
            <app-skeleton type="text" [active]="true" [rows]="4"></app-skeleton>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 1100px; margin: 0 auto; padding: 40px 20px;
      animation: pageIn 0.45s cubic-bezier(0.16,1,0.3,1) both;
    }
    @keyframes pageIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
    .breadcrumb { font-size: 0.85rem; color: #9ca3af; margin-bottom: 24px; }
    .breadcrumb a { color: #9ca3af; text-decoration: none; transition: color 0.2s; }
    .breadcrumb a:hover { color: #a5b4fc; }
    .order-layout { display: grid; grid-template-columns: 1fr 320px; gap: 32px; }
    .order-main { display: flex; flex-direction: column; gap: 20px; }
    .order-status-card, .section-card, .summary-card {
      background: #1e2235; border-radius: 16px; padding: 24px;
      border: 1px solid rgba(255,255,255,0.06);
      animation: cardIn 0.5s cubic-bezier(0.16,1,0.3,1) both;
    }
    .order-status-card { animation-delay: 0.08s; }
    .section-card:nth-child(1) { animation-delay: 0.14s; }
    .section-card:nth-child(2) { animation-delay: 0.20s; }
    .summary-card { animation-delay: 0.16s; }
    @keyframes cardIn { from{opacity:0;transform:translateY(16px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
    .order-status-card h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 12px; color: #e8eaf6; }
    .status-row { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; font-size: 0.9rem; color: #9ca3af; }
    .status-badge {
      padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; text-transform: capitalize;
    }
    .status-pending { background: rgba(251,191,36,0.15); color: #fbbf24; }
    .status-processing { background: rgba(79,110,247,0.15); color: #a5b4fc; }
    .status-delivered { background: rgba(34,197,94,0.15); color: #4ade80; }
    .status-cancelled { background: rgba(239,68,68,0.15); color: #f87171; }
    .status-paid { background: rgba(6,182,212,0.15); color: #67e8f9; }
    .order-date { color: #9ca3af; font-size: 0.85rem; }
    .section-card h2 { font-size: 1.1rem; font-weight: 700; margin-bottom: 16px; color: #e8eaf6; }
    .order-items { display: flex; flex-direction: column; gap: 16px; }
    .order-item { display: flex; align-items: center; gap: 16px; }
    .item-img { width: 72px; height: 72px; object-fit: cover; border-radius: 10px; transition: transform 0.3s; }
    .order-item:hover .item-img { transform: scale(1.05); }
    .item-info { flex: 1; }
    .item-info h3 { font-weight: 600; font-size: 0.95rem; margin-bottom: 4px; color: #e8eaf6; }
    .item-info p { color: #9ca3af; font-size: 0.85rem; }
    .item-total { font-weight: 700; color: #e8eaf6; }
    .section-card p { color: #c9cbdf; line-height: 1.8; }
    .summary-card h2 { font-size: 1.1rem; font-weight: 700; margin-bottom: 16px; color: #e8eaf6; }
    .summary-row { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 0.9rem; color: #9ca3af; }
    .summary-divider { height: 1px; background: rgba(255,255,255,0.07); margin: 12px 0; }
    .summary-total { display: flex; justify-content: space-between; font-weight: 800; font-size: 1rem; color: #e8eaf6; }
    .btn-cancel {
      width: 100%; margin-top: 16px; padding: 12px;
      background: transparent; color: #f87171;
      border: 2px solid rgba(239,68,68,0.5); border-radius: 10px;
      cursor: pointer; font-weight: 600;
      transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1);
    }
    .btn-cancel:hover:not(:disabled) { background: rgba(239,68,68,0.12); transform: translateY(-1px); border-color: #f87171; }
    .btn-cancel:active:not(:disabled) { transform: scale(0.97); }
    .btn-cancel:disabled { opacity: 0.5; cursor: not-allowed; }
    .alert-success { margin-top: 12px; padding: 10px; background: rgba(34,197,94,0.1); color: #4ade80; border-radius: 8px; font-size: 0.85rem; }
    .alert-error { margin-top: 12px; padding: 10px; background: rgba(220,38,38,0.1); color: #f87171; border-radius: 8px; font-size: 0.85rem; }
    .loading { display: flex; justify-content: center; padding: 80px; }
    .spinner {
      width: 40px; height: 40px;
      border: 4px solid rgba(255,255,255,0.1); border-top-color: #4f6ef7;
      border-radius: 50%; animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    @media (max-width: 900px) {
      .page-container { padding: 28px 16px 80px; }
    }
    @media (max-width: 768px) {
      .order-layout { grid-template-columns: 1fr; }
      .page-container { padding: 20px 14px 80px; }
      .page-title { font-size: 1.5rem; }
      .order-meta { flex-wrap: wrap; gap: 8px; }
    }
    @media (max-width: 580px) {
      .item-img { width: 56px; height: 56px; }
      .order-item { gap: 12px; }
      .section-card { padding: 18px; }
    }
    @media (max-width: 400px) {
      .item-img { width: 48px; height: 48px; }
      .section-card { padding: 14px; }
      .page-title { font-size: 1.25rem; }
    }
  `]
})
export class OrderDetailComponent implements OnInit {
  order: Order | null = null;
  loading = true;
  cancelling = false;

  constructor(private route: ActivatedRoute, private orderService: OrderService, private msgService: NotificationService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderService.getOrder(params['id']).subscribe({
        next: (res) => { this.order = res.order; this.loading = false; },
        error: () => { this.loading = false; }
      });
    });
  }

  get canCancel(): boolean {
    return !!this.order && !['delivered', 'cancelled', 'paid'].includes(this.order.status);
  }

  cancelOrder() {
    if (!this.order) return;
    this.cancelling = true;
    this.orderService.cancelOrder(this.order._id).subscribe({
      next: (res) => {
        this.order = res.order;
        this.cancelling = false;
        this.msgService.success('Order cancelled successfully');
      },
      error: (err) => {
        this.cancelling = false;
        this.msgService.error(err.error?.message || 'Failed to cancel order');
      }
    });
  }
}
