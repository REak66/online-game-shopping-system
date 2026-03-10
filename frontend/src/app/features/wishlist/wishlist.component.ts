import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { WishlistService } from '../../core/services/wishlist.service';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';
import { Product } from '../../core/models';
import { NotificationService } from '../../shared/services/notification.service';
import { SpinComponent } from '../../shared/components/spin/spin.component';
import { SkeletonComponent } from '../../shared/components/skeleton/skeleton.component';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterModule, SpinComponent, SkeletonComponent],
  template: `
    <div class="page-container">
      <h1 class="page-title">My Wishlist <i class="fas fa-heart" style="color:#ec4899;font-size:1.6rem"></i></h1>

      <app-spin *ngIf="loading" size="lg" tip="Loading wishlist..."></app-spin>

      <div class="wishlist-grid" *ngIf="loading">
        <app-skeleton type="product-card" [count]="6" [active]="true"></app-skeleton>
      </div>

      <div class="wishlist-grid" *ngIf="!loading && products.length > 0">
        <div class="wishlist-card" *ngFor="let product of products">
          <div class="card-image">
            <img [src]="product.image ? 'http://localhost:5050' + product.image : 'https://via.placeholder.com/300x200?text=No+Image'"
              [alt]="product.name"
              onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'" />
            <button class="remove-btn" (click)="removeFromWishlist(product._id)" title="Remove from wishlist">
              <i class="fas fa-xmark"></i>
            </button>
          </div>
          <div class="card-info">
            <h3><a [routerLink]="['/products', product._id]">{{ product.name }}</a></h3>
            <div class="rating">
              <span class="stars">{{ getStars(product.rating) }}</span>
              <span class="rating-val">{{ product.rating | number:'1.1-1' }}</span>
            </div>
            <div class="price-row">
              <span class="price">\${{ product.price | number:'1.2-2' }}</span>
              <button class="btn-cart" (click)="addToCart(product)"><i class="fas fa-cart-shopping"></i> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <div class="empty-state" *ngIf="!loading && products.length === 0">
        <div class="empty-icon"><i class="fas fa-heart"></i></div>
        <h2>Your wishlist is empty</h2>
        <p>Save your favorite products for later!</p>
        <a routerLink="/products" class="btn-shop">Browse Products</a>
      </div>

    </div>
  `,
  styles: [`
    .page-container {
      max-width: 1200px; margin: 0 auto; padding: 40px 20px;
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
    .wishlist-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 24px;
    }
    .wishlist-card {
      background: #1e2235; border-radius: 16px; overflow: hidden;
      border: 1px solid rgba(255,255,255,0.06);
      transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1), border-color 0.25s, box-shadow 0.25s;
      animation: cardIn 0.5s cubic-bezier(0.16,1,0.3,1) both;
    }
    .wishlist-card:nth-child(1) { animation-delay: 0.05s; }
    .wishlist-card:nth-child(2) { animation-delay: 0.10s; }
    .wishlist-card:nth-child(3) { animation-delay: 0.15s; }
    .wishlist-card:nth-child(4) { animation-delay: 0.20s; }
    .wishlist-card:nth-child(n+5) { animation-delay: 0.25s; }
    @keyframes cardIn { from{opacity:0;transform:translateY(20px) scale(0.96)} to{opacity:1;transform:translateY(0) scale(1)} }
    .wishlist-card:hover { transform: translateY(-6px) scale(1.01); border-color: rgba(79,110,247,0.35); box-shadow: 0 16px 40px rgba(0,0,0,0.35); }
    .card-image { position: relative; height: 200px; overflow: hidden; }
    .card-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
    .wishlist-card:hover .card-image img { transform: scale(1.07); }
    .remove-btn {
      position: absolute; top: 12px; right: 12px;
      width: 32px; height: 32px;
      background: rgba(0,0,0,0.6); border: none; border-radius: 50%;
      cursor: pointer; color: #f87171; font-weight: 700;
      transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1);
    }
    .remove-btn:hover { background: rgba(239,68,68,0.85); color: white; transform: scale(1.15); }
    .card-info { padding: 16px; }
    .card-info h3 { font-weight: 600; margin-bottom: 8px; }
    .card-info h3 a { color: #e8eaf6; text-decoration: none; transition: color 0.2s; }
    .card-info h3 a:hover { color: #a5b4fc; }
    .rating { display: flex; align-items: center; gap: 6px; margin-bottom: 12px; }
    .stars { color: #F59E0B; }
    .rating-val { font-size: 0.85rem; color: #9ca3af; }
    .price-row { display: flex; justify-content: space-between; align-items: center; }
    .price { font-size: 1.2rem; font-weight: 700; color: #e8eaf6; }
    .btn-cart {
      background: linear-gradient(135deg, #4f6ef7, #8b5cf6); color: white; border: none;
      padding: 8px 14px; border-radius: 8px; cursor: pointer;
      font-size: 0.85rem; font-weight: 600;
      transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1);
    }
    .btn-cart:hover { opacity: 0.88; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(79,110,247,0.4); }
    .empty-state { text-align: center; padding: 80px 20px; animation: pageIn 0.5s ease both; }
    .empty-icon { font-size: 4rem; margin-bottom: 16px; color: #ec4899; animation: float 3s ease-in-out infinite; }
    @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
    .empty-state h2 { font-size: 1.5rem; font-weight: 700; margin-bottom: 12px; color: #e8eaf6; }
    .empty-state p { color: #9ca3af; margin-bottom: 24px; }
    .btn-shop {
      display: inline-block; padding: 12px 28px;
      background: linear-gradient(135deg, #4f6ef7, #8b5cf6);
      color: white; border-radius: 10px; text-decoration: none; font-weight: 600;
      transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1);
    }
    .btn-shop:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(79,110,247,0.4); }
    .toast {
      position: fixed; bottom: 30px; right: 30px;
      background: #1e2235; color: #e8eaf6; padding: 14px 24px;
      border-radius: 12px; z-index: 9999; font-weight: 600;
      border: 1px solid rgba(79,110,247,0.35);
      animation: toastIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both;
    }
    @keyframes toastIn { from{transform:translateX(80px) scale(0.9);opacity:0} to{transform:translateX(0) scale(1);opacity:1} }
    @media (max-width: 900px) {
      .page-container { padding: 28px 16px 80px; }
      .page-title { font-size: 1.6rem; }
    }
    @media (max-width: 768px) {
      .page-container { padding: 20px 14px 80px; }
      .page-title { font-size: 1.4rem; margin-bottom: 20px; }
      .wishlist-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
      .card-image { height: 155px; }
      .toast { bottom: 84px; right: 16px; left: 16px; text-align: center; }
    }
    @media (max-width: 480px) {
      .wishlist-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
      .card-image { height: 130px; }
      .card-info { padding: 12px; }
      .card-info h3 { font-size: 0.88rem; }
      .price { font-size: 1rem; }
      .btn-cart { padding: 7px 10px; font-size: 0.78rem; }
    }
    @media (max-width: 360px) {
      .wishlist-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class WishlistComponent implements OnInit {
  products: Product[] = [];
  loading = true;

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
    private msgService: NotificationService
  ) {}

  ngOnInit() {
    this.wishlistService.getWishlist().subscribe({
      next: (res) => { this.products = res.wishlist?.products || []; this.loading = false; },
      error: () => { this.loading = false; }
    });
    this.wishlistService.wishlist$.subscribe((w: any) => {
      if (w) this.products = w.products || [];
    });
  }

  getStars(rating: number): string {
    return '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
  }

  removeFromWishlist(productId: string) {
    this.wishlistService.removeFromWishlist(productId).subscribe({
      next: () => this.msgService.success('Removed from wishlist')
    });
  }

  addToCart(product: Product) {
    if (!this.authService.isLoggedIn) { this.router.navigate(['/auth/login']); return; }
    this.cartService.addToCart(product._id).subscribe({
      next: () => this.msgService.success('Added to cart!'),
      error: (err: any) => this.msgService.error(err.error?.message || 'Failed to add to cart')
    });
  }

}
