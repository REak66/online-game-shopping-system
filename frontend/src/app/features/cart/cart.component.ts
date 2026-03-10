import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';
import { Cart, CartItem } from '../../core/models';
import { SpinComponent } from '../../shared/components/spin/spin.component';
import { SkeletonComponent } from '../../shared/components/skeleton/skeleton.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, SpinComponent, SkeletonComponent],
  template: `
    <div class="page-container">
      <h1 class="page-title">Shopping Cart</h1>

      <div class="cart-layout" *ngIf="cart && cart.items.length > 0">
        <!-- Cart Items -->
        <div class="cart-items">
          <div class="cart-item" *ngFor="let item of cart.items">
            <img [src]="getProductImage(item)" [alt]="getProductName(item)"
              class="item-image"
              onerror="this.src='https://via.placeholder.com/100x100?text=No+Image'" />
            <div class="item-details">
              <h3 class="item-name">
                <a [routerLink]="['/products', getProductId(item)]">{{ getProductName(item) }}</a>
              </h3>
              <p class="item-price">\${{ item.price | number:'1.2-2' }} each</p>
            </div>
            <div class="item-qty">
              <button (click)="updateQty(item, item.quantity - 1)" [disabled]="item.quantity <= 1"><i class="fas fa-minus"></i></button>
              <span>{{ item.quantity }}</span>
              <button (click)="updateQty(item, item.quantity + 1)"><i class="fas fa-plus"></i></button>
            </div>
            <div class="item-subtotal">\${{ (item.price * item.quantity) | number:'1.2-2' }}</div>
            <button class="remove-btn" (click)="removeItem(item._id)"><i class="fas fa-xmark"></i></button>
          </div>

          <div class="cart-actions">
            <button class="btn-clear" (click)="clearCart()"><i class="fas fa-trash-can"></i> Clear Cart</button>
            <a routerLink="/products" class="btn-continue"><i class="fas fa-arrow-left"></i> Continue Shopping</a>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="order-summary">
          <h2>Order Summary</h2>
          <div class="summary-row">
            <span>Subtotal ({{ cart.items.length }} items)</span>
            <span>\${{ cart.totalPrice | number:'1.2-2' }}</span>
          </div>
          <div class="summary-row">
            <span>Tax (10%)</span>
            <span>\${{ (cart.totalPrice * 0.1) | number:'1.2-2' }}</span>
          </div>
          <div class="summary-divider"></div>
          <div class="summary-total">
            <span>Total</span>
            <span>\${{ getTotal() | number:'1.2-2' }}</span>
          </div>
          <button class="btn-checkout" (click)="checkout()">
            Proceed to Checkout →
          </button>
          <div class="security-note"><i class="fas fa-lock"></i> Secure checkout powered by SSL</div>
        </div>
      </div>

      <!-- Empty Cart -->
      <div class="empty-cart" *ngIf="!cart || cart.items.length === 0">
        <div class="empty-icon"><i class="fas fa-cart-shopping"></i></div>
        <h2>Your cart is empty</h2>
        <p>Add some products to your cart and start shopping!</p>
        <a routerLink="/products" class="btn-shop">Start Shopping</a>
      </div>

      <app-spin *ngIf="loading" size="lg" tip="Loading cart..."></app-spin>

      <!-- Skeleton cart layout -->
      <div class="sk-cart-wrap" *ngIf="loading">
        <div class="cart-layout">
          <div class="cart-items">
            <app-skeleton type="cart-item" [count]="3" [active]="true"></app-skeleton>
          </div>
          <div class="order-summary">
            <app-skeleton type="title" [active]="true" width="50%"></app-skeleton>
            <app-skeleton type="text" [active]="true" [rows]="3"></app-skeleton>
            <app-skeleton type="rect" [active]="true" height="52px"></app-skeleton>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 1200px; margin: 0 auto; padding: 40px 20px;
      animation: pageIn 0.45s cubic-bezier(0.16,1,0.3,1) both;
    }
    @keyframes pageIn {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .page-title { font-size: 2rem; font-weight: 700; color: #e8eaf6; margin-bottom: 32px; }
    .cart-layout { display: grid; grid-template-columns: 1fr 360px; gap: 32px; }
    .cart-items { display: flex; flex-direction: column; gap: 16px; }
    .cart-item {
      display: flex;
      align-items: center;
      gap: 20px;
      background: #1e2235;
      border-radius: 16px;
      padding: 20px;
      border: 1px solid rgba(255,255,255,0.06);
      transition: transform 0.22s ease, box-shadow 0.22s ease;
      animation: itemIn 0.45s cubic-bezier(0.16,1,0.3,1) both;
    }
    .cart-item:nth-child(1) { animation-delay: 0.05s; }
    .cart-item:nth-child(2) { animation-delay: 0.10s; }
    .cart-item:nth-child(3) { animation-delay: 0.15s; }
    .cart-item:nth-child(4) { animation-delay: 0.20s; }
    .cart-item:nth-child(n+5) { animation-delay: 0.25s; }
    @keyframes itemIn {
      from { opacity: 0; transform: translateX(-18px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    .cart-item:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.25); }
    .item-image { width: 90px; height: 90px; object-fit: cover; border-radius: 12px; }
    .item-details { flex: 1; }
    .item-name { font-weight: 600; margin-bottom: 4px; }
    .item-name a { color: #e8eaf6; text-decoration: none; }
    .item-name a:hover { color: #a5b4fc; }
    .item-price { color: #9ca3af; font-size: 0.9rem; }
    .item-qty {
      display: flex;
      align-items: center;
      gap: 12px;
      background: rgba(255,255,255,0.07);
      border-radius: 10px;
      padding: 4px;
    }
    .item-qty button {
      width: 32px;
      height: 32px;
      border: none;
      background: rgba(255,255,255,0.1);
      border-radius: 8px;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 600;
      color: #e8eaf6;
    }
    .item-qty button:disabled { opacity: 0.4; cursor: not-allowed; }
    .item-qty span { font-weight: 700; min-width: 20px; text-align: center; color: #e8eaf6; }
    .item-subtotal { font-weight: 700; font-size: 1.1rem; min-width: 80px; text-align: right; color: #e8eaf6; }
    .remove-btn {
      background: none;
      border: none;
      color: #9ca3af;
      cursor: pointer;
      font-size: 1rem;
      padding: 8px;
      border-radius: 8px;
      transition: all 0.2s;
    }
    .remove-btn:hover { background: rgba(239,68,68,0.15); color: #f87171; }
    .cart-actions { display: flex; justify-content: space-between; padding: 12px 0; }
    .btn-clear {
      background: none;
      border: 2px solid #f87171;
      color: #f87171;
      padding: 8px 20px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s;
    }
    .btn-clear:hover { background: rgba(239,68,68,0.15); }
    .btn-continue { color: #a5b4fc; text-decoration: none; font-weight: 600; display: flex; align-items: center; }
    .order-summary {
      background: #1e2235;
      border-radius: 20px;
      padding: 28px;
      border: 1px solid rgba(255,255,255,0.06);
      height: fit-content;
      position: sticky;
      top: 80px;
    }
    .order-summary h2 { font-size: 1.3rem; font-weight: 700; margin-bottom: 20px; color: #e8eaf6; }
    .summary-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 14px;
      color: #9ca3af;
      font-size: 0.95rem;
    }
    .summary-divider { height: 1px; background: rgba(255,255,255,0.08); margin: 16px 0; }
    .summary-total {
      display: flex;
      justify-content: space-between;
      font-size: 1.2rem;
      font-weight: 800;
      color: #e8eaf6;
      margin-bottom: 24px;
    }
    .btn-checkout {
      width: 100%;
      padding: 16px;
      background: linear-gradient(135deg, #4f6ef7, #8b5cf6);
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1);
      margin-bottom: 12px;
      box-shadow: 0 4px 18px rgba(79,110,247,0.35);
    }
    .btn-checkout:hover { transform: translateY(-2px); box-shadow: 0 8px 26px rgba(79,110,247,0.5); }
    .security-note { text-align: center; font-size: 0.8rem; color: #9ca3af; }
    .empty-cart {
      text-align: center; padding: 100px 20px;
      animation: pageIn 0.5s ease both;
    }
    .empty-icon { font-size: 5rem; margin-bottom: 20px; color: #5a5e7a; animation: float 3s ease-in-out infinite; }
    @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
    .empty-cart h2 { font-size: 1.5rem; font-weight: 700; margin-bottom: 12px; color: #e8eaf6; }
    .empty-cart p { color: #9ca3af; margin-bottom: 24px; }
    .btn-shop {
      display: inline-block;
      padding: 14px 32px;
      background: linear-gradient(135deg, #4f6ef7, #8b5cf6);
      color: white;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 700;
      transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1);
      box-shadow: 0 4px 18px rgba(79,110,247,0.35);
    }
    .btn-shop:hover { transform: translateY(-2px); box-shadow: 0 8px 26px rgba(79,110,247,0.5); }
    @media (max-width: 900px) {
      .cart-layout { grid-template-columns: 1fr; }
      .order-summary { position: static; }
      .page-container { padding: 28px 16px 80px; }
    }
    @media (max-width: 600px) {
      .page-container { padding: 16px 14px 80px; }
      .page-title { font-size: 1.5rem; margin-bottom: 20px; }
      .cart-item { flex-wrap: wrap; gap: 10px; padding: 14px; }
      .item-image { width: 64px; height: 64px; border-radius: 10px; }
      .item-subtotal { min-width: auto; }
      .cart-actions { flex-direction: column; gap: 10px; align-items: stretch; }
      .btn-continue { justify-content: center; padding: 10px; border: 1px solid rgba(165,180,252,0.3); border-radius: 8px; }
      .order-summary { padding: 20px 16px; }
      .btn-checkout { padding: 14px; font-size: 0.95rem; }
    }
    @media (max-width: 400px) {
      .cart-item { gap: 8px; padding: 12px; }
      .item-image { width: 56px; height: 56px; }
      .item-qty { gap: 8px; }
      .item-qty button { width: 28px; height: 28px; font-size: 1rem; }
    }
  `]
})
export class CartComponent implements OnInit {
  cart: Cart | null = null;
  loading = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = true;
    if (this.authService.isLoggedIn) {
      this.cartService.getCart().subscribe({
        next: () => { this.loading = false; },
        error: () => { this.loading = false; }
      });
    } else {
      this.loading = false;
    }
    this.cartService.cart$.subscribe(cart => { this.cart = cart; });
  }

  getProductName(item: CartItem): string {
    if (!item.product) return 'Unknown Product';
    return typeof item.product === 'string' ? 'Product' : (item.product as any).name;
  }

  getProductImage(item: CartItem): string {
    if (!item.product || typeof item.product === 'string') return '';
    const img = (item.product as any).image;
    return img ? 'http://localhost:5050' + img : '';
  }

  getProductId(item: CartItem): string {
    if (!item.product) return '';
    return typeof item.product === 'string' ? item.product : (item.product as any)._id;
  }

  updateQty(item: CartItem, qty: number) {
    if (qty < 1) return;
    this.cartService.updateCartItem(item._id, qty).subscribe();
  }

  removeItem(itemId: string) {
    this.cartService.removeFromCart(itemId).subscribe();
  }

  clearCart() {
    this.cartService.clearCart().subscribe();
  }

  getTotal(): number {
    if (!this.cart) return 0;
    const tax = this.cart.totalPrice * 0.1;
    return this.cart.totalPrice + tax;
  }

  checkout() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: '/checkout' } });
      return;
    }
    this.router.navigate(['/checkout']);
  }
}
