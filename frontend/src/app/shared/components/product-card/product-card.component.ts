import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../../core/models';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule, StarRatingComponent],
  template: `
    <div class="pc" [class.out-of-stock]="product.stock === 0">
      <div class="pc-img-wrap">
        <img [src]="product.image ? 'http://localhost:5050' + product.image : 'https://placehold.co/300x180/1e2235/4f6ef7?text=Game'"
          [alt]="product.name" class="pc-img"
          onerror="this.src='https://placehold.co/300x180/1e2235/4f6ef7?text=Game'" />
        <div class="pc-img-overlay"></div>
        <div class="pc-badges">
          <span class="badge b-hot" *ngIf="product.featured">HOT</span>
          <span class="badge b-new" *ngIf="isNew">NEW</span>
          <span class="badge b-out" *ngIf="product.stock === 0">SOLD</span>
        </div>
        <div class="pc-actions">
          <button class="pa-btn pa-btn-wish" (click)="onWishlist($event)" title="Wishlist">
            <i class="fas fa-heart"></i>
          </button>
          <button class="pa-btn" (click)="onQuickView($event)" title="Quick view">
            <i class="fas fa-eye"></i>
          </button>
        </div>
        <!-- Stock bar -->
        <div class="pc-stock-bar" *ngIf="product.stock > 0 && product.stock <= 10">
          <div class="stock-fill" [style.width.%]="product.stock * 10"></div>
        </div>
      </div>

      <div class="pc-body">
        <div class="pc-genre" *ngIf="categoryName">
          <i class="fas fa-tag pc-genre-icon"></i> {{ categoryName }}
        </div>
        <h3 class="pc-name">
          <a [routerLink]="['/products', product._id]">{{ product.name }}</a>
        </h3>
        <div class="pc-meta">
          <div class="pc-rating">
            <app-star-rating [rating]="product.rating"></app-star-rating>
            <span class="rv">({{ product.numReviews }})</span>
          </div>
        </div>
        <div class="pc-footer">
          <div class="pc-price">
            <span class="eth-price">\${{ product.price | number:'1.2-2' }}</span>
            <span class="usd-price" *ngIf="product.stock > 0">{{ product.stock }} left</span>
            <span class="usd-price out" *ngIf="product.stock === 0">Out of stock</span>
          </div>
          <div class="pc-btns">
            <button class="btn-history" [routerLink]="['/products', product._id]">
              <i class="fas fa-info-circle"></i>
            </button>
            <button class="btn-cart" (click)="onAddToCart($event)" [disabled]="product.stock === 0">
              <i class="fas fa-cart-shopping"></i>
              {{ product.stock === 0 ? 'Sold' : 'Add' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; width: 100%; }
    .pc {
      background: rgba(20, 20, 40, 0.35);
      backdrop-filter: blur(40px) saturate(1.4);
      -webkit-backdrop-filter: blur(40px) saturate(1.4);
      border-radius: 18px; overflow: hidden;
      border: 1px solid rgba(255,255,255,0.12);
      box-shadow:
        0 25px 60px -12px rgba(0,0,0,0.5),
        0 0 80px -20px rgba(138,43,226,0.15),
        inset 0 1px 1px rgba(255,255,255,0.1);
      transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.28s ease, border-color 0.28s ease;
      animation: cardEnter 0.5s cubic-bezier(0.16,1,0.3,1) both;
    }
    @keyframes cardEnter {
      from { opacity: 0; transform: translateY(24px) scale(0.96); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    .pc:hover {
      transform: translateY(-8px) scale(1.01);
      box-shadow:
        0 30px 70px -12px rgba(0,0,0,0.6),
        0 0 100px -20px rgba(138,43,226,0.25),
        inset 0 1px 1px rgba(255,255,255,0.15);
      border-color: rgba(79,110,247,0.4);
    }
    /* Image */
    .pc-img-wrap {
      position: relative; height: 185px; overflow: hidden;
    }
    .pc-img {
      width: 100%; height: 100%; object-fit: cover;
      transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1);
    }
    .pc:hover .pc-img { transform: scale(1.1); }
    .pc-img-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to top, rgba(20,20,40,0.7) 0%, rgba(20,20,40,0.08) 50%, transparent 100%);
      pointer-events: none;
    }
    /* Stock bar */
    .pc-stock-bar {
      position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
      background: rgba(255,255,255,0.1);
    }
    .stock-fill {
      height: 100%;
      background: linear-gradient(90deg, #f59e0b, #ef4444);
      transition: width 0.4s ease;
    }
    /* Badges */
    .pc-badges {
      position: absolute; top: 10px; left: 10px;
      display: flex; gap: 5px;
    }
    .badge {
      padding: 3px 9px; border-radius: 50px;
      font-size: 0.62rem; font-weight: 800; letter-spacing: 0.6px;
      animation: badgeIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both;
    }
    @keyframes badgeIn {
      from { opacity: 0; transform: scale(0) translateY(-6px); }
      to   { opacity: 1; transform: scale(1) translateY(0); }
    }
    .b-hot { background: linear-gradient(135deg, #ef4444, #dc2626); color: #fff; box-shadow: 0 2px 8px rgba(239,68,68,0.4); }
    .b-new { background: linear-gradient(135deg, #22c55e, #16a34a); color: #fff; box-shadow: 0 2px 8px rgba(34,197,94,0.4); }
    .b-out { background: rgba(100,100,120,0.85); color: #ddd; }
    /* Action buttons */
    .pc-actions {
      position: absolute; top: 10px; right: 10px;
      display: flex; flex-direction: column; gap: 6px;
      opacity: 0; transform: translateX(12px);
      transition: opacity 0.28s ease, transform 0.28s cubic-bezier(0.16,1,0.3,1);
    }
    .pc:hover .pc-actions { opacity: 1; transform: translateX(0); }
    .pa-btn {
      width: 32px; height: 32px;
      background: rgba(20,20,40,0.35); backdrop-filter: blur(40px);
      -webkit-backdrop-filter: blur(40px);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 50%; color: #a0a4c0;
      display: flex; align-items: center; justify-content: center;
      transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1); cursor: pointer;
    }
    .pa-btn:hover { background: #4f6ef7; color: #fff; border-color: transparent; transform: scale(1.18); box-shadow: 0 4px 12px rgba(79,110,247,0.45); }
    .pa-btn-wish:hover { background: #ec4899; box-shadow: 0 4px 12px rgba(236,72,153,0.45); }
    .pa-btn i { font-size: 0.8rem; }
    /* Body */
    .pc-body { padding: 22px 14px 14px; }
    .pc-genre {
      font-size: 0.68rem; font-weight: 600; color: rgba(255,255,255,0.55);
      text-transform: uppercase; letter-spacing: 0.6px;
      margin-bottom: 6px; display: flex; align-items: center; gap: 4px;
    }
    .pc-genre-icon { color: #818cf8; font-size: 0.6rem; }
    .pc-name { font-size: 0.93rem; font-weight: 700; margin-bottom: 8px; line-height: 1.35; }
    .pc-name a { color: #ffffff; text-decoration: none; transition: color 0.2s; }
    .pc-name a:hover { color: #a5b4fc; }
    .pc-meta { margin-bottom: 12px; }
    .pc-rating { display: flex; align-items: center; gap: 5px; }
    .rv { font-size: 0.7rem; color: rgba(255,255,255,0.45); }
    /* Footer */
    .pc-footer { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
    .pc-price { display: flex; flex-direction: column; gap: 1px; }
    .eth-price { font-size: 1.08rem; font-weight: 800; color: #a5b4fc; }
    .usd-price { font-size: 0.72rem; color: rgba(255,255,255,0.45); }
    .usd-price.out { color: #fca5a5; }
    .pc-btns { display: flex; gap: 6px; }
    .btn-history {
      width: 34px; height: 34px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 10px; color: rgba(255,255,255,0.5);
      font-size: 0.82rem;
      display: flex; align-items: center; justify-content: center;
      transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1); cursor: pointer;
    }
    .btn-history:hover { background: rgba(255,255,255,0.1); color: #e0e4ff; transform: scale(1.08); }
    .btn-cart {
      display: flex; align-items: center; gap: 6px;
      padding: 8px 14px;
      background: linear-gradient(135deg,#4f6ef7,#7c3aed);
      border: none; border-radius: 10px; color: #fff;
      font-size: 0.78rem; font-weight: 700;
      transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1); cursor: pointer;
      box-shadow: 0 3px 10px rgba(79,110,247,0.3);
    }
    .btn-cart:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(79,110,247,0.5); }
    .btn-cart:active:not(:disabled) { transform: scale(0.95); }
    .btn-cart:disabled { background: rgba(20,20,40,0.4); color: #4a4e6a; cursor: not-allowed; box-shadow: none; }
    .out-of-stock { opacity: 0.55; }
    /* Touch screens: always show action buttons, disable hover lift */
    @media (hover: none) {
      .pc-actions { opacity: 1; transform: translateX(0); }
      .pc:hover { transform: none; box-shadow: none; border-color: rgba(255,255,255,0.07); }
      .pc:hover .pc-img { transform: none; }
    }
    /* Small screens */
    @media (max-width: 580px) {
      .pc-img-wrap { height: 155px; }
      .pc-body { padding: 14px 12px 12px; }
      .pc-name { font-size: 0.86rem; }
      .eth-price { font-size: 1rem; }
      .btn-cart { padding: 7px 11px; font-size: 0.75rem; gap: 4px; }
      .btn-history { width: 30px; height: 30px; font-size: 0.75rem; border-radius: 8px; }
    }
    @media (max-width: 430px) {
      .pc-body { padding: 12px 10px 10px; }
      .pc-name { font-size: 0.84rem; }
      .eth-price { font-size: 0.96rem; }
      .btn-cart { padding: 6px 9px; font-size: 0.73rem; gap: 3px; }
      .btn-history { width: 28px; height: 28px; font-size: 0.72rem; border-radius: 8px; }
      .pc-btns { gap: 4px; }
    }
    @media (max-width: 400px) {
      .pc-img-wrap { height: 135px; }
      .pc-genre { font-size: 0.62rem; }
      .pc-name { font-size: 0.82rem; margin-bottom: 6px; }
      .pc-meta { margin-bottom: 8px; }
      .pc-body { padding: 11px 9px 9px; }
      .eth-price { font-size: 0.92rem; }
      .btn-cart { padding: 6px 8px; font-size: 0.71rem; }
      .btn-history { width: 26px; height: 26px; }
      .pc-btns { gap: 4px; }
    }

    :host-context(body.light-mode) .out-of-stock { opacity: 0.5; }
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();
  @Output() addToWishlist = new EventEmitter<Product>();
  @Output() quickView = new EventEmitter<Product>();

  get categoryName(): string {
    if (!this.product.category) return '';
    return typeof this.product.category === 'string'
      ? ''
      : (this.product.category as any).name;
  }

  get isNew(): boolean {
    const created = new Date(this.product.createdAt);
    const now = new Date();
    return (now.getTime() - created.getTime()) < 7 * 24 * 60 * 60 * 1000;
  }

  onAddToCart(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.addToCart.emit(this.product);
  }

  onWishlist(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.addToWishlist.emit(this.product);
  }

  onQuickView(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.quickView.emit(this.product);
  }
}
