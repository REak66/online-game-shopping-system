import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';
import { Order } from '../../../core/models';
import { SpinComponent } from '../../../shared/components/spin/spin.component';
import { SkeletonComponent } from '../../../shared/components/skeleton/skeleton.component';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, RouterModule, SpinComponent, SkeletonComponent],
  template: `
    <div class="page-container">
      <h1 class="page-title">My Orders</h1>

      <app-spin *ngIf="loading" size="lg" tip="Loading orders..."></app-spin>

      <div class="orders-list" *ngIf="loading">
        <app-skeleton type="order-row" [count]="5" [active]="true"></app-skeleton>
      </div>

      <div class="orders-list" *ngIf="!loading && orders.length > 0">
        <div class="order-card" *ngFor="let order of orders">
          <div class="order-header">
            <div>
              <span class="order-number">#{{ order._id.slice(-8).toUpperCase() }}</span>
              <span class="order-date">{{ order.createdAt | date:'mediumDate' }}</span>
            </div>
            <span class="status-badge" [class]="'status-' + order.status">{{ order.status }}</span>
          </div>
          <div class="order-items">
            <div class="order-item" *ngFor="let item of order.orderItems.slice(0, 3)">
              <img [src]="item.image ? 'http://localhost:5050' + item.image : 'https://via.placeholder.com/50x50?text=?'"
                [alt]="item.name" class="item-img"
                onerror="this.src='https://via.placeholder.com/50x50?text=?'" />
              <span class="item-name">{{ item.name }}</span>
              <span class="item-qty">x{{ item.quantity }}</span>
            </div>
            <div class="more-items" *ngIf="order.orderItems.length > 3">
              +{{ order.orderItems.length - 3 }} more items
            </div>
          </div>
          <div class="order-footer">
            <span class="total">\${{ order.totalPrice | number:'1.2-2' }}</span>
            <a [routerLink]="['/orders', order._id]" class="btn-view">View Details →</a>
          </div>
        </div>
      </div>

      <div class="empty-state" *ngIf="!loading && orders.length === 0">
        <div class="empty-icon"><i class="fas fa-box"></i></div>
        <h2>No orders yet</h2>
        <p>Start shopping to create your first order!</p>
        <a routerLink="/products" class="btn-shop">Shop Now</a>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 900px; margin: 0 auto; padding: 40px 20px;
      animation: pageIn 0.45s cubic-bezier(0.16,1,0.3,1) both;
    }
    @keyframes pageIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
    .page-title { font-size: 2rem; font-weight: 700; margin-bottom: 32px; color: #e8eaf6; }
    .loading { display: flex; justify-content: center; padding: 60px; }
    .spinner {
      width: 40px; height: 40px;
      border: 4px solid rgba(255,255,255,0.1); border-top-color: #4f6ef7;
      border-radius: 50%; animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .orders-list { display: flex; flex-direction: column; gap: 20px; }
    .order-card {
      background: #1e2235; border-radius: 16px; padding: 24px;
      border: 1px solid rgba(255,255,255,0.06);
      transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1), border-color 0.25s, box-shadow 0.25s;
      animation: cardIn 0.5s cubic-bezier(0.16,1,0.3,1) both;
    }
    .order-card:nth-child(1) { animation-delay: 0.05s; }
    .order-card:nth-child(2) { animation-delay: 0.10s; }
    .order-card:nth-child(3) { animation-delay: 0.15s; }
    .order-card:nth-child(4) { animation-delay: 0.20s; }
    .order-card:nth-child(n+5) { animation-delay: 0.25s; }
    @keyframes cardIn { from{opacity:0;transform:translateY(18px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
    .order-card:hover { transform: translateY(-4px); border-color: rgba(79,110,247,0.3); box-shadow: 0 12px 30px rgba(0,0,0,0.3); }
    .order-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
    .order-number { font-weight: 700; color: #e8eaf6; margin-right: 12px; }
    .order-date { color: #9ca3af; font-size: 0.85rem; }
    .status-badge { padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; text-transform: capitalize; }
    .status-pending { background: rgba(251,191,36,0.15); color: #fbbf24; }
    .status-processing { background: rgba(79,110,247,0.15); color: #a5b4fc; }
    .status-delivered { background: rgba(34,197,94,0.15); color: #4ade80; }
    .status-cancelled { background: rgba(239,68,68,0.15); color: #f87171; }
    .status-paid { background: rgba(6,182,212,0.15); color: #67e8f9; }
    .order-items { display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px; }
    .order-item { display: flex; align-items: center; gap: 12px; }
    .item-img { width: 44px; height: 44px; object-fit: cover; border-radius: 8px; }
    .item-name { flex: 1; font-size: 0.9rem; color: #c9cbdf; }
    .item-qty { color: #9ca3af; font-size: 0.85rem; }
    .more-items { font-size: 0.8rem; color: #9ca3af; padding-left: 56px; }
    .order-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.07); padding-top: 16px; }
    .total { font-size: 1.2rem; font-weight: 700; color: #e8eaf6; }
    .btn-view {
      color: #a5b4fc; text-decoration: none; font-weight: 600; font-size: 0.9rem;
      transition: color 0.2s, transform 0.2s; display: inline-flex; align-items: center; gap: 4px;
    }
    .btn-view:hover { color: #e0e4ff; transform: translateX(3px); }
    .empty-state { text-align: center; padding: 80px 20px; }
    .empty-icon { font-size: 4rem; margin-bottom: 16px; color: #5a5e7a; animation: float 3s ease-in-out infinite; }
    @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
    .empty-state h2 { font-size: 1.5rem; font-weight: 700; margin-bottom: 12px; color: #e8eaf6; }
    .empty-state p { color: #9ca3af; margin-bottom: 24px; }
    .btn-shop {
      display: inline-block; padding: 12px 28px;
      background: linear-gradient(135deg, #4f6ef7, #8b5cf6); color: white;
      border-radius: 10px; text-decoration: none; font-weight: 600;
      transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1);
    }
    .btn-shop:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(79,110,247,0.4); }
    @media (max-width: 900px) {
      .page-container { padding: 28px 16px 80px; }
      .page-title { font-size: 1.6rem; }
    }
    @media (max-width: 768px) {
      .page-container { padding: 20px 14px 80px; }
      .page-title { font-size: 1.4rem; margin-bottom: 20px; }
      .order-card { padding: 16px; }
      .order-header { flex-wrap: wrap; gap: 8px; }
      .order-footer { flex-wrap: wrap; gap: 10px; }
    }
    @media (max-width: 580px) {
      .page-title { font-size: 1.25rem; }
      .order-items-preview { flex-wrap: wrap; gap: 8px; }
      .item-img { width: 40px; height: 40px; }
      .btn-view { width: 100%; text-align: center; justify-content: center; }
    }
    @media (max-width: 400px) {
      .order-header .badge { font-size: 0.72rem; padding: 3px 8px; }
      .order-card { padding: 12px; }
    }
  `]
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  loading = true;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getMyOrders().subscribe({
      next: (res) => { this.orders = res.orders || []; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
