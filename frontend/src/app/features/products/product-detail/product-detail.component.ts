import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../core/services/product.service';
import { CartService } from '../../../core/services/cart.service';
import { WishlistService } from '../../../core/services/wishlist.service';
import { AuthService } from '../../../core/services/auth.service';
import { StarRatingComponent } from '../../../shared/components/star-rating/star-rating.component';
import { SpinComponent } from '../../../shared/components/spin/spin.component';
import { SkeletonComponent } from '../../../shared/components/skeleton/skeleton.component';
import { NotificationService } from '../../../shared/services/notification.service';
import { Product } from '../../../core/models';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, StarRatingComponent, SpinComponent, SkeletonComponent],
  template: `
    <div class="page-container" *ngIf="!loading && product">
      <!-- Breadcrumb -->
      <nav class="breadcrumb">
        <a routerLink="/">Home</a> /
        <a routerLink="/products">Products</a> /
        <span>{{ product.name }}</span>
      </nav>

      <div class="product-layout">
        <!-- Image Gallery -->
        <div class="gallery">
          <div class="main-image">
            <img [src]="selectedImage || 'https://via.placeholder.com/500x400?text=No+Image'"
              [alt]="product.name"
              onerror="this.src='https://via.placeholder.com/500x400?text=No+Image'" />
          </div>
          <div class="thumbnails" *ngIf="product.images && product.images.length > 1">
            <img *ngFor="let img of product.images" [src]="img" [alt]="product.name"
              class="thumb" [class.active]="selectedImage === img"
              (click)="selectedImage = img" />
          </div>
        </div>

        <!-- Product Info -->
        <div class="product-details">
          <div class="category-badge" *ngIf="categoryName">{{ categoryName }}</div>
          <h1>{{ product.name }}</h1>

          <div class="rating-row">
            <app-star-rating [rating]="product.rating"></app-star-rating>
            <span class="rating-text">{{ product.rating | number:'1.1-1' }}</span>
            <span class="reviews-count">({{ product.numReviews }} reviews)</span>
          </div>

          <div class="price-row">
            <span class="price">\${{ product.price | number:'1.2-2' }}</span>
            <span class="stock-badge" [class.in-stock]="product.stock > 0" [class.out-stock]="product.stock === 0">
              {{ product.stock > 0 ? 'In Stock (' + product.stock + ')' : 'Out of Stock' }}
            </span>
          </div>

          <p class="description">{{ product.description }}</p>

          <div class="quantity-row" *ngIf="product.stock > 0">
            <label>Quantity:</label>
            <div class="qty-control">
              <button (click)="decreaseQty()">−</button>
              <span>{{ quantity }}</span>
              <button (click)="increaseQty()">+</button>
            </div>
          </div>

          <div class="action-buttons">
            <button class="btn-cart" (click)="addToCart()" [disabled]="product.stock === 0">
              {{ product.stock === 0 ? 'Out of Stock' : '' }}<i class="fas fa-cart-shopping" *ngIf="product.stock > 0"></i>{{ product.stock === 0 ? '' : ' Add to Cart' }}
            </button>
            <button class="btn-wishlist" (click)="toggleWishlist()">
              <i class="fas fa-heart" [style.color]="inWishlist ? '#ef4444' : '#5a5e7a'"></i>
            </button>
          </div>

          <div class="product-meta">
            <div class="meta-item"><span>Category:</span> <strong>{{ categoryName }}</strong></div>
            <div class="meta-item"><span>Status:</span>
              <strong [class.text-green]="product.status === 'active'">{{ product.status }}</strong></div>
          </div>
        </div>
      </div>

      <!-- Reviews Section -->
      <div class="reviews-section">
        <h2>Customer Reviews</h2>

        <!-- Add Review Form -->
        <div class="review-form" *ngIf="isLoggedIn">
          <h3>Write a Review</h3>
          <div class="star-input">
            <span *ngFor="let s of [1,2,3,4,5]" class="star-btn"
              [class.active]="s <= reviewRating" (click)="reviewRating = s"><i class="fas fa-star"></i></span>
          </div>
          <textarea [(ngModel)]="reviewComment" placeholder="Share your experience..." rows="4" class="review-textarea"></textarea>
          <button class="btn-submit-review" (click)="submitReview()" [disabled]="!reviewRating || !reviewComment">
            Submit Review
          </button>
        </div>
        <div class="login-prompt" *ngIf="!isLoggedIn">
          <a routerLink="/auth/login">Login to write a review</a>
        </div>

        <!-- Reviews List -->
        <div class="reviews-list">
          <div class="review-item" *ngFor="let review of product.reviews || []">
            <div class="review-header">
              <div class="reviewer-avatar">
                <img *ngIf="getReviewAvatar(review.user)" [src]="getAvatarUrl(getReviewAvatar(review.user))" alt="" class="av-img" (error)="onAvatarError($event)" />
                <span [style.display]="getReviewAvatar(review.user) ? 'none' : 'flex'">{{ review.name.charAt(0).toUpperCase() }}</span>
              </div>
              <div>
                <strong>{{ review.name }}</strong>
                <div class="review-date">{{ review.createdAt | date:'mediumDate' }}</div>
              </div>
              <app-star-rating [rating]="review.rating" style="margin-left: auto;"></app-star-rating>
            </div>
            <p class="review-comment">{{ review.comment }}</p>
          </div>
          <div class="no-reviews" *ngIf="!product.reviews || product.reviews.length === 0">
            <p>No reviews yet. Be the first to review!</p>
          </div>
        </div>
      </div>
    </div>

    <app-spin *ngIf="loading" size="lg" tip="Loading product..."></app-spin>

    <!-- Skeleton detail layout -->
    <div class="page-container sk-detail" *ngIf="loading">
      <div class="sk-breadcrumb">
        <app-skeleton type="title" [active]="true" width="22%"></app-skeleton>
      </div>
      <div class="product-layout">
        <div class="gallery">
          <app-skeleton type="image" [active]="true" height="400px" [round]="true"></app-skeleton>
          <div class="sk-thumbs">
            <app-skeleton *ngFor="let t of [1,2,3]" type="image" [active]="true" width="80px" height="80px" [round]="true"></app-skeleton>
          </div>
        </div>
        <div class="product-details">
          <app-skeleton type="button" [active]="true" width="72px"></app-skeleton>
          <app-skeleton type="title" [active]="true" width="75%"></app-skeleton>
          <app-skeleton type="title" [active]="true" width="50%"></app-skeleton>
          <app-skeleton type="title" [active]="true" width="30%"></app-skeleton>
          <app-skeleton type="text" [active]="true" [rows]="3"></app-skeleton>
          <app-skeleton type="rect" [active]="true" height="52px"></app-skeleton>
          <div style="display:flex;gap:12px;margin-top:16px">
            <app-skeleton type="rect" [active]="true" height="52px"></app-skeleton>
            <app-skeleton type="image" [active]="true" width="52px" height="52px" [round]="true"></app-skeleton>
          </div>
        </div>
      </div>
    </div>

    <div class="not-found" *ngIf="!loading && !product">
      <h2>Product not found</h2>
      <a routerLink="/products" class="btn-back">← Back to Products</a>
    </div>
  `,
  styles: [`
    .page-container { max-width: 1200px; margin: 0 auto; padding: 40px 20px; }

    /* ── Skeleton helpers ── */
    .sk-detail app-skeleton { display: block; margin-bottom: 14px; }
    .sk-breadcrumb { margin-bottom: 32px; }
    .sk-thumbs { display: flex; gap: 12px; margin-top: 12px; }
    .sk-thumbs app-skeleton { margin-bottom: 0; }

    .breadcrumb { font-size: 0.85rem; color: #9ca3af; margin-bottom: 32px; }
    .breadcrumb a { color: #6b7280; text-decoration: none; }
    .breadcrumb a:hover { color: #2563EB; }
    .product-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-bottom: 60px; }
    .gallery .main-image {
      border-radius: 20px;
      overflow: hidden;
      background: #f9fafb;
      height: 400px;
    }
    .gallery .main-image img { width: 100%; height: 100%; object-fit: cover; }
    .thumbnails { display: flex; gap: 12px; margin-top: 12px; }
    .thumb {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 10px;
      cursor: pointer;
      border: 2px solid transparent;
      transition: border-color 0.2s;
    }
    .thumb.active, .thumb:hover { border-color: #2563EB; }
    .category-badge {
      display: inline-block;
      background: #dbeafe;
      color: #2563EB;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 700;
      margin-bottom: 12px;
      text-transform: uppercase;
    }
    .product-details h1 { font-size: 1.8rem; font-weight: 800; color: #e8eaf6; margin-bottom: 12px; }
    .rating-row { display: flex; align-items: center; gap: 8px; margin-bottom: 16px; }
    .rating-text { font-weight: 700; color: #F59E0B; }
    .reviews-count { color: #9ca3af; font-size: 0.85rem; }
    .price-row { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
    .price { font-size: 2rem; font-weight: 800; color: #e8eaf6; }
    .stock-badge {
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 700;
    }
    .in-stock { background: rgba(34,197,94,0.15); color: #4ade80; }
    .out-stock { background: rgba(239,68,68,0.15); color: #f87171; }
    .description { color: #9ca3af; line-height: 1.7; margin-bottom: 24px; }
    .quantity-row { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
    .quantity-row label { font-weight: 600; color: #c9cbdf; }
    .qty-control {
      display: flex;
      align-items: center;
      gap: 16px;
      background: rgba(255,255,255,0.07);
      border-radius: 12px;
      padding: 4px;
    }
    .qty-control button {
      width: 36px;
      height: 36px;
      border: none;
      background: rgba(255,255,255,0.1);
      border-radius: 8px;
      cursor: pointer;
      font-size: 1.2rem;
      font-weight: 600;
      transition: background 0.2s;
    }
    .qty-control button:hover { background: rgba(79,110,247,0.2); color: #a5b4fc; }
    .qty-control span { font-weight: 700; font-size: 1.1rem; min-width: 24px; text-align: center; color: #e8eaf6; }
    .action-buttons { display: flex; gap: 12px; margin-bottom: 24px; }
    .btn-cart {
      flex: 1;
      padding: 14px;
      background: linear-gradient(135deg, #4f6ef7, #8b5cf6);
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .btn-cart:hover:not(:disabled) { opacity: 0.85; }
    .btn-cart:disabled { background: rgba(255,255,255,0.1); cursor: not-allowed; }
    .btn-wishlist {
      width: 52px; height: 52px;
      border: 2px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      background: rgba(255,255,255,0.05);
      font-size: 1.3rem;
      cursor: pointer;
      transition: all 0.2s;
      display: flex; align-items: center; justify-content: center;
    }
    .btn-wishlist:hover { border-color: #f87171; background: rgba(239,68,68,0.08); }
    .product-meta { border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px; }
    .meta-item { display: flex; gap: 8px; margin-bottom: 8px; font-size: 0.9rem; color: #9ca3af; }
    .meta-item strong { color: #c9cbdf; }
    .text-green { color: #4ade80; }
    .reviews-section { margin-top: 60px; }
    .reviews-section h2 { font-size: 1.5rem; font-weight: 700; margin-bottom: 24px; }
    .review-form {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 32px;
    }
    .review-form h3 { font-weight: 700; margin-bottom: 16px; color: #e8eaf6; }
    .star-input { display: flex; gap: 8px; margin-bottom: 16px; }
    .star-btn {
      font-size: 1.8rem;
      color: rgba(255,255,255,0.15);
      cursor: pointer;
      transition: color 0.2s, transform 0.15s;
    }
    .star-btn:hover { transform: scale(1.2); }
    .star-btn.active i, .star-btn:hover i { color: #F59E0B; }
    .review-textarea {
      width: 100%;
      padding: 12px;
      border: 2px solid rgba(255,255,255,0.1);
      border-radius: 10px;
      font-size: 0.95rem;
      outline: none;
      resize: vertical;
      box-sizing: border-box;
      margin-bottom: 16px;
      background: rgba(255,255,255,0.05);
      color: #e8eaf6;
    }
    .review-textarea:focus { border-color: #4f6ef7; }
    .btn-submit-review {
      padding: 10px 24px;
      background: linear-gradient(135deg, #4f6ef7, #8b5cf6);
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
    }
    .btn-submit-review:disabled { opacity: 0.5; cursor: not-allowed; }
    .login-prompt { color: #9ca3af; margin-bottom: 24px; }
    .login-prompt a { color: #a5b4fc; }
    .reviews-list { display: flex; flex-direction: column; gap: 20px; }
    .review-item {
      background: #1e2235;
      border-radius: 16px;
      padding: 20px;
      border: 1px solid rgba(255,255,255,0.06);
    }
    .review-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
    .reviewer-avatar {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #4f6ef7, #8b5cf6);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      overflow: hidden;
      flex-shrink: 0;
    }
    .reviewer-avatar .av-img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; display: block; }
    .reviewer-avatar span { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
    .review-date { font-size: 0.8rem; color: #9ca3af; }
    .review-comment { color: #c9cbdf; line-height: 1.6; }
    .no-reviews { text-align: center; padding: 40px; color: #9ca3af; }
    .not-found { text-align: center; padding: 80px; }
    .btn-back {
      color: #a5b4fc;
      text-decoration: none;
      font-weight: 600;
      display: inline-block;
      margin-top: 16px;
    }
    .toast {
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: #1e2235;
      color: #e8eaf6;
      padding: 14px 24px;
      border-radius: 12px;
      z-index: 9999;
      font-weight: 600;
      border: 1px solid rgba(255,255,255,0.1);
    }
    @media (max-width: 1100px) {
      .product-layout { gap: 36px; }
    }
    @media (max-width: 900px) {
      .product-layout { grid-template-columns: 1fr; gap: 28px; }
      .gallery .main-image { height: 320px; }
    }
    @media (max-width: 768px) {
      .product-layout { gap: 24px; }
      .gallery .main-image { height: 260px; }
      .thumb { width: 60px; height: 60px; }
      .price { font-size: 1.6rem; }
      .toast { bottom: 84px; right: 16px; left: 16px; text-align: center; }
      .page-container { padding: 20px 14px 80px; }
    }
    @media (max-width: 580px) {
      .gallery .main-image { height: 220px; }
      .thumb { width: 52px; height: 52px; }
      .price { font-size: 1.4rem; }
      .action-buttons { flex-direction: column; }
      .action-buttons button { width: 100%; justify-content: center; }
    }
    @media (max-width: 400px) {
      .gallery .main-image { height: 190px; }
      .price { font-size: 1.25rem; }
    }
  `]
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  loading = true;
  quantity = 1;
  selectedImage = '';
  inWishlist = false;
  reviewRating = 0;
  reviewComment = '';
  private readonly apiBase = environment.apiUrl.replace('/api', '');

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private authService: AuthService,
    private router: Router,
    private msgService: NotificationService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productService.getProduct(params['id']).subscribe({
        next: (res) => {
          this.product = res.product;
          this.selectedImage = res.product.image ? 'http://localhost:5050' + res.product.image : '';
          this.loading = false;
          this.inWishlist = this.wishlistService.isInWishlist(res.product._id);
        },
        error: () => { this.loading = false; }
      });
    });
  }

  get isLoggedIn(): boolean { return this.authService.isLoggedIn; }

  getAvatarUrl(avatar?: string): string {
    if (!avatar) return '';
    if (avatar.startsWith('http')) return avatar;
    return `${this.apiBase}${avatar}`;
  }

  getReviewAvatar(user: string | { name: string; avatar?: string }): string {
    if (typeof user === 'string') return '';
    return user.avatar || '';
  }

  onAvatarError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    const fallback = img.nextElementSibling as HTMLElement;
    if (fallback) fallback.style.display = 'flex';
  }

  get categoryName(): string {
    if (!this.product?.category) return '';
    return typeof this.product.category === 'string' ? '' : (this.product.category as any).name;
  }

  decreaseQty() { if (this.quantity > 1) this.quantity--; }
  increaseQty() { if (this.product && this.quantity < this.product.stock) this.quantity++; }

  addToCart() {
    if (!this.isLoggedIn) { this.router.navigate(['/auth/login']); return; }
    this.cartService.addToCart(this.product!._id, this.quantity).subscribe({
      next: () => {
        this.msgService.success('Added to cart!');
        this.router.navigate(['/cart']);
      },
      error: (err) => this.msgService.error(err.error?.message || 'Failed to add to cart')
    });
  }

  toggleWishlist() {
    if (!this.isLoggedIn) { this.router.navigate(['/auth/login']); return; }
    if (this.inWishlist) {
      this.wishlistService.removeFromWishlist(this.product!._id).subscribe({
        next: () => { this.inWishlist = false; this.msgService.info('Removed from wishlist'); }
      });
    } else {
      this.wishlistService.addToWishlist(this.product!._id).subscribe({
        next: () => { this.inWishlist = true; this.msgService.success('Added to wishlist!'); }
      });
    }
  }

  submitReview() {
    if (!this.reviewRating || !this.reviewComment) return;
    this.productService.addReview(this.product!._id, { rating: this.reviewRating, comment: this.reviewComment }).subscribe({
      next: () => {
        this.msgService.success('Review submitted!');
        this.reviewRating = 0;
        this.reviewComment = '';
        this.productService.getProduct(this.product!._id).subscribe(res => this.product = res.product);
      },
      error: (err) => this.msgService.error(err.error?.message || 'Failed to submit review')
    });
  }
}
