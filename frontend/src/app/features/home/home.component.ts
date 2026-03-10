import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { CategoryService } from '../../core/services/category.service';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { OrderService } from '../../core/services/order.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { SkeletonComponent } from '../../shared/components/skeleton/skeleton.component';
import { SelectComponent, SelectOption } from '../../shared/components/select/select.component';
import { NotificationService } from '../../shared/services/notification.service';
import { Product, Category } from '../../core/models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent, SkeletonComponent, SelectComponent, FormsModule],
  template: `
    <!-- ══ HERO BANNER (full-width above layout) ══ -->
    <section class="hero-banner" *ngIf="heroProducts.length > 0 || loadingProducts">
      <div class="hero-skeleton" *ngIf="loadingProducts"></div>
      <ng-container *ngIf="!loadingProducts && heroProducts.length > 0">
        <!-- Slides -->
        <div class="hero-slides">
          <div class="hero-slide"
               *ngFor="let p of heroProducts; let i = index"
               [class.active]="i === heroIndex">
            <img [src]="getProductImage(p)"
                 [alt]="p.name"
                 onerror="this.src='https://placehold.co/1200x420/1e2235/4f6ef7?text=Featured+Game'" />
            <div class="hero-gradient"></div>
            <div class="hero-content">
              <div class="hero-badges">
                <span class="hbadge hbadge-hot" *ngIf="p.featured"><i class="fas fa-fire"></i> Featured</span>
                <span class="hbadge hbadge-new" *ngIf="isNew(p)"><i class="fas fa-certificate"></i> New</span>
                <span class="hbadge hbadge-cat">
                  <i [class]="getCategoryIconClass($any(p.category)?.name || '')"></i>
                  {{ $any(p.category)?.name || 'Game' }}
                </span>
              </div>
              <h1 class="hero-title">{{ p.name }}</h1>
              <div class="hero-rating">
                <span class="hr-stars">
                  <i class="fas fa-star" *ngFor="let s of [1,2,3,4,5]; let si = index"
                     [class.filled]="si < (p.rating || 0)"
                     [class.half]="si === floorRating(p.rating) && (p.rating % 1) >= 0.5"></i>
                </span>
                <span class="hr-score">{{ (p.rating || 0).toFixed(1) }}</span>
                <span class="hr-reviews">({{ p.numReviews | number }} reviews)</span>
              </div>
              <p class="hero-desc">{{ (p.description || 'Experience the most immersive gameplay of the season.') | slice:0:110 }}…</p>
              <div class="hero-actions">
                <a [routerLink]="['/products', p._id]" class="btn-hero-buy">
                  <i class="fas fa-bolt"></i> Get for \${{ p.price | number:'1.2-2' }}
                </a>
                <button class="btn-hero-wish" (click)="onAddToWishlist(p)" title="Add to wishlist">
                  <i class="fas fa-heart"></i>
                </button>
              </div>
            </div>
            <!-- Live indicator -->
            <div class="hero-live"><span class="live-dot"></span> Live Deal</div>
          </div>
        </div>
        <!-- Dot indicators (mobile) -->
        <div class="hero-dots" *ngIf="heroProducts.length > 1">
          <button class="dot" *ngFor="let p of heroProducts; let i = index"
                  [class.active]="i === heroIndex" (click)="goToSlide(i)"></button>
        </div>
        <!-- Thumbnail strip (desktop) -->
        <div class="hero-thumbs" *ngIf="heroProducts.length > 1">
          <button class="hero-thumb"
                  *ngFor="let p of heroProducts; let i = index"
                  [class.active]="i === heroIndex"
                  (click)="goToSlide(i)">
            <img [src]="getProductImage(p)" [alt]="p.name"
                 onerror="this.src='https://placehold.co/120x70/1e2235/4f6ef7?text=Game'" />
            <div class="thumb-overlay"></div>
            <span class="thumb-name">{{ p.name | slice:0:18 }}{{ p.name.length > 18 ? '…' : '' }}</span>
            <div class="thumb-active-bar"></div>
          </button>
        </div>
      </ng-container>
    </section>

    <!-- ── Just Dropped (horizontal scroll) ── -->
    <section class="arrivals-section" *ngIf="!loadingProducts && newArrivals.length > 0">
      <div class="arrivals-inner">
        <div class="section-header">
          <div class="sh-left">
            <span class="sh-accent sh-accent-green"></span>
            <h2>Just Dropped</h2>
            <span class="badge-new-tag"><i class="fas fa-certificate"></i> NEW</span>
          </div>
          <div class="sh-arrivals-right">
            <span class="arrivals-count">{{ newArrivals.length }} titles</span>
            <a routerLink="/products" class="see-all-link">See All <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
        <div class="arrivals-scroll-wrap">
          <div class="arrivals-scroll" #arrivalsScroll>
            <a *ngFor="let p of newArrivals" [routerLink]="['/products', p._id]" class="arrival-card">
              <div class="arrival-img-wrap">
                <img [src]="getProductImage(p)" [alt]="p.name"
                     onerror="this.src='https://placehold.co/210x135/1e2235/4f6ef7?text=Game'" />
                <div class="arrival-img-overlay"></div>
                <span class="arrival-new-badge" *ngIf="isNew(p)"><i class="fas fa-certificate"></i></span>
                <span class="arrival-price" [class.arrival-price-free]="p.price === 0">
                  {{ p.price === 0 ? 'Free' : '$' + (p.price | number:'1.2-2') }}
                </span>
                <div class="arrival-hover-actions">
                  <button class="arrival-btn-cart" (click)="$event.preventDefault(); $event.stopPropagation(); onAddToCart(p)" title="Add to cart">
                    <i class="fas fa-cart-plus"></i>
                  </button>
                  <button class="arrival-btn-wish" (click)="$event.preventDefault(); $event.stopPropagation(); onAddToWishlist(p)" title="Wishlist">
                    <i class="fas fa-heart"></i>
                  </button>
                </div>
              </div>
              <div class="arrival-info">
                <p class="arrival-name">{{ p.name | slice:0:28 }}{{ p.name.length > 28 ? '\u2026' : '' }}</p>
                <div class="arrival-meta">
                  <i [class]="getCategoryIconClass($any(p.category)?.name || '')"></i>
                  <span>{{ $any(p.category)?.name || 'Game' }}</span>
                </div>
                <div class="arrival-footer">
                  <div class="arrival-stars">
                    <span *ngFor="let s of [1,2,3,4,5]" class="star" [class.filled]="s <= p.rating">★</span>
                    <span class="arrival-rating-val">{{ (p.rating || 0).toFixed(1) }}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="arrivals-fade-right"></div>
        </div>
      </div>
    </section>

    <div class="page-layout">

      <!-- ════ CENTER FEED ════ -->
      <div class="center-feed">

        <!-- ── Stats bar ── -->
        <div class="stats-bar" *ngIf="!loadingProducts && allProducts.length > 0">
          <div class="stat-chip">
            <span class="stat-icon stat-icon-blue"><i class="fas fa-gamepad"></i></span>
            <div class="stat-text">
              <span class="stat-val">{{ allProducts.length }}</span>
              <span class="stat-lbl">Games</span>
            </div>
          </div>
          <div class="stat-sep"></div>
          <div class="stat-chip">
            <span class="stat-icon stat-icon-purple"><i class="fas fa-tags"></i></span>
            <div class="stat-text">
              <span class="stat-val">{{ categories.length }}</span>
              <span class="stat-lbl">Genres</span>
            </div>
          </div>
          <div class="stat-sep"></div>
          <div class="stat-chip">
            <span class="stat-icon stat-icon-red"><i class="fas fa-fire"></i></span>
            <div class="stat-text">
              <span class="stat-val">{{ featuredProducts.length }}</span>
              <span class="stat-lbl">Featured</span>
            </div>
          </div>
          <div class="stat-sep"></div>
          <div class="stat-chip">
            <span class="stat-icon stat-icon-gold"><i class="fas fa-star"></i></span>
            <div class="stat-text">
              <span class="stat-val">{{ avgRating | number:'1.1-1' }}</span>
              <span class="stat-lbl">Avg Rating</span>
            </div>
          </div>
        </div>

        <!-- ── Category Filter Pills ── -->
        <div class="filter-pills-wrap" *ngIf="!loadingCategories">
        <div class="filter-pills">
          <button class="pill" [class.active]="activeCategory === 'all'" (click)="filterBy('all')">
            <i class="fas fa-th-large"></i> All
          </button>
          <button class="pill" *ngFor="let cat of categories"
                  [class.active]="activeCategory === cat._id"
                  (click)="filterBy(cat._id)">
            <i [class]="getCategoryIconClass(cat.name)"></i> {{ cat.name }}
          </button>
        </div>
        </div>

        <!-- ── Games Grid ── -->
        <section class="games-section">
          <div class="section-header">
            <div class="sh-left">
              <span class="sh-accent"></span>
              <h2>{{ activeCategoryName }}</h2>
              <span class="item-count" *ngIf="filteredProducts.length > 0">({{ filteredProducts.length }})</span>
            </div>
            <div class="sh-right">
              <div class="sort-wrap">
                <app-select [(ngModel)]="sortOrder" [options]="homeSortOptions" [clearable]="false" (selectionChange)="onSortChange($event)"></app-select>
              </div>
              <a routerLink="/products" class="see-all-link">See All <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div class="games-grid" *ngIf="loadingProducts">
            <app-skeleton type="product-card" [count]="8" [active]="true"></app-skeleton>
          </div>

          <div class="games-grid" *ngIf="!loadingProducts && filteredProducts.length > 0">
            <app-product-card
              *ngFor="let product of filteredProducts"
              [product]="product"
              (addToCart)="onAddToCart($event)"
              (addToWishlist)="onAddToWishlist($event)"
              (quickView)="onQuickView($event)">
            </app-product-card>
          </div>

          <div class="empty-state" *ngIf="!loadingProducts && filteredProducts.length === 0">
            <div class="empty-icon"><i class="fas fa-gamepad"></i></div>
            <p class="empty-title">No games found</p>
            <p class="empty-text">{{ activeCategory === 'all' ? 'Check back soon for new titles!' : 'No games in this category yet.' }}</p>
            <div class="empty-actions">
              <button class="btn-pill" (click)="filterBy('all')" *ngIf="activeCategory !== 'all'">
                <i class="fas fa-th-large"></i> View All Games
              </button>
              <a routerLink="/products" class="btn-pill btn-pill-outline">
                <i class="fas fa-search"></i> Browse Store
              </a>
            </div>
          </div>
        </section>



      </div> <!-- /center-feed -->

      <!-- ════ RIGHT PANEL ════ -->
      <aside class="right-panel">

        <!-- Library / Balance Card -->
        <div class="rp-card finance-card">
          <div class="finance-header">
            <div class="finance-header-left">
              <span class="finance-avatar"><i class="fas fa-wallet"></i></span>
              <span class="rp-title">Your Library</span>
            </div>
            <button class="rp-more">···</button>
          </div>
          <div class="finance-body">
            <div class="finance-chips">
            <span class="fchip fchip-blue"><i class="fas fa-gamepad"></i> Owned</span>
            <span class="fchip fchip-pink"><i class="fas fa-heart"></i> Wishlist</span>
            <span class="fchip fchip-gold"><i class="fas fa-star"></i> Featured</span>
            <button class="fchip fchip-add">+ Add</button>
            </div>
          <div class="balance-label">Total Spent</div>
          <div class="balance-val">\${{ totalSpentWhole }}<span>.{{ totalSpentCents }}</span></div>
          <div class="balance-trend" [class.negative-trend]="spentTrend < 0">
            <i class="fas" [class.fa-arrow-trend-up]="spentTrend >= 0" [class.fa-arrow-trend-down]="spentTrend < 0"></i>
            {{ spentTrend >= 0 ? '+' : '' }}{{ spentTrend | number:'1.0-0' }}% this month
          </div>
          <div class="sparkline">
            <svg viewBox="0 0 160 50" preserveAspectRatio="none">
              <polyline points="0,40 30,35 60,38 90,20 120,25 160,10"
                fill="none" stroke="#4f6ef7" stroke-width="2.5"/>
              <polyline points="0,40 30,35 60,38 90,20 120,25 160,10 160,50 0,50"
                fill="url(#spark-grad)" stroke="none" opacity="0.18"/>
              <defs>
                <linearGradient id="spark-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#4f6ef7"/>
                  <stop offset="100%" stop-color="transparent"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <a routerLink="/cart" class="btn-topup"><i class="fas fa-cart-shopping"></i> Go to Cart +</a>
          </div>
        </div>

        <!-- Categories -->
        <div class="rp-card">
          <div class="rp-card-header">
            <span class="rp-title">Categories</span>
            <a routerLink="/products" class="rp-see-all">See All ›</a>
          </div>
          <ng-container *ngIf="loadingCategories">
            <app-skeleton type="rect" [count]="6" [active]="true" height="36px" [round]="true"></app-skeleton>
          </ng-container>
          <div class="cat-list" *ngIf="!loadingCategories">
            <a *ngFor="let cat of categories"
               [routerLink]="['/products']" [queryParams]="{category: cat._id}"
               class="cat-row">
              <span class="cat-icon-sm"><i [class]="getCategoryIconClass(cat.name)"></i></span>
              <span class="cat-row-name">{{ cat.name }}</span>
              <span class="cat-arrow">›</span>
            </a>
            <a routerLink="/products" class="cat-row cat-all">
              <span class="cat-icon-sm cat-icon-all"><i class="fas fa-store"></i></span>
              <span class="cat-row-name">All Products</span>
              <span class="cat-arrow">›</span>
            </a>
          </div>
        </div>

        <!-- Top Rated -->
        <div class="rp-card" *ngIf="topRated.length > 0">
          <div class="rp-card-header">
            <span class="rp-title"><i class="fas fa-trophy" style="color:#f59e0b;margin-right:6px;font-size:0.85rem"></i>Top Rated</span>
            <a routerLink="/products" class="rp-see-all">See All ›</a>
          </div>
          <div class="history-list">
            <a *ngFor="let p of topRated; let i = index" [routerLink]="['/products', p._id]" class="history-row">
              <div class="rank-badge" [class.rank-gold]="i===0" [class.rank-silver]="i===1" [class.rank-bronze]="i===2">
                {{ i + 1 }}
              </div>
              <div class="history-thumb">
                <img [src]="getProductImage(p)" [alt]="p.name"
                     onerror="this.src='https://placehold.co/40x40/1e2235/4f6ef7?text=G'" />
              </div>
              <div class="history-info">
                <span class="history-name">{{ p.name | slice:0:20 }}{{ p.name.length > 20 ? '…' : '' }}</span>
                <span class="history-stars">
                  <span *ngFor="let s of [1,2,3,4,5]" class="star-sm" [class.filled]="s <= p.rating">★</span>
                  <span class="rv-sm">({{ p.numReviews }})</span>
                </span>
              </div>
              <span class="history-price">\${{ p.price | number:'1.2-2' }}</span>
            </a>
          </div>
        </div>

        <!-- New Arrivals mini list -->
        <div class="rp-card" *ngIf="newArrivals.length > 0">
          <div class="rp-card-header">
            <span class="rp-title"><i class="fas fa-certificate" style="color:#22c55e;margin-right:6px;font-size:0.85rem"></i>New Arrivals</span>
            <a routerLink="/products" class="rp-see-all">See All ›</a>
          </div>
          <div class="history-list">
            <a *ngFor="let p of newArrivals.slice(0,4)" [routerLink]="['/products', p._id]" class="history-row">
              <div class="history-thumb">
                <img [src]="getProductImage(p)" [alt]="p.name"
                     onerror="this.src='https://placehold.co/40x40/1e2235/4f6ef7?text=G'" />
              </div>
              <div class="history-info">
                <span class="history-name">{{ p.name | slice:0:20 }}{{ p.name.length > 20 ? '…' : '' }}</span>
                <span class="history-meta">
                  <i [class]="getCategoryIconClass($any(p.category)?.name || '')"></i>
                  {{ $any(p.category)?.name || 'Game' }}
                </span>
              </div>
              <span class="history-price">\${{ p.price | number:'1.2-2' }}</span>
            </a>
          </div>
        </div>

      </aside>
    </div> <!-- /page-layout -->
  `,
  styles: [`
    :host { display: block; overflow-x: hidden; }
    /* ══ Hero Banner (full-width) ══ */
    .hero-banner {
      position: relative; width: 100%;
      height: 520px; overflow: hidden;
      background: #0d0f1c;
    }
    .hero-skeleton {
      height: 100%;
      background: linear-gradient(90deg,#1e2235 25%,#252840 50%,#1e2235 75%);
      background-size: 200% 100%;
      animation: shimmer 1.4s infinite;
    }
    @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

    .hero-slides { position: relative; height: 100%; overflow: hidden; }
    .hero-slide {
      position: absolute; inset: 0;
      opacity: 0; pointer-events: none;
      transform: translateX(60px);
      transition: opacity 0.7s cubic-bezier(0.4,0,0.2,1),
                  transform 0.7s cubic-bezier(0.4,0,0.2,1);
    }
    .hero-slide.active {
      opacity: 1; pointer-events: auto;
      transform: translateX(0);
      animation: slideIn 0.7s cubic-bezier(0.4,0,0.2,1) both;
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(80px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    .hero-slide img {
      width: 100%; height: 100%; object-fit: cover;
      transform: scale(1.04);
      transition: transform 8s ease;
    }
    .hero-slide.active img { transform: scale(1); }
    .hero-gradient {
      position: absolute; inset: 0;
      background:
        linear-gradient(90deg, rgba(10,12,24,0.98) 0%, rgba(10,12,24,0.82) 35%, rgba(10,12,24,0.35) 58%, transparent 78%),
        linear-gradient(to top, rgba(10,12,24,0.85) 0%, rgba(10,12,24,0.2) 30%, transparent 55%),
        radial-gradient(ellipse at top right, rgba(0,0,0,0.5) 0%, transparent 60%);
    }
    .hero-content {
      position: absolute; bottom: 0; left: 0;
      padding: 40px 48px; max-width: 560px;
    }
    .hero-slide.active .hero-badges {
      animation: heroItemIn 0.6s cubic-bezier(0.4,0,0.2,1) 0.15s both;
    }
    .hero-slide.active .hero-title {
      animation: heroItemIn 0.6s cubic-bezier(0.4,0,0.2,1) 0.28s both;
    }
    .hero-slide.active .hero-rating {
      animation: heroItemIn 0.6s cubic-bezier(0.4,0,0.2,1) 0.34s both;
    }
    .hero-slide.active .hero-desc {
      animation: heroItemIn 0.6s cubic-bezier(0.4,0,0.2,1) 0.42s both;
    }
    .hero-slide.active .hero-actions {
      animation: heroItemIn 0.6s cubic-bezier(0.4,0,0.2,1) 0.52s both;
    }
    @keyframes heroItemIn {
      from { opacity: 0; transform: translateY(22px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .hero-badges { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 14px; }
    .hbadge {
      padding: 4px 12px; border-radius: 50px;
      font-size: 0.72rem; font-weight: 700;
      display: flex; align-items: center; gap: 5px;
      backdrop-filter: blur(8px);
    }
    .hbadge-hot { background: rgba(239,68,68,0.25); color: #ef4444; border: 1px solid rgba(239,68,68,0.4); }
    .hbadge-new { background: rgba(34,197,94,0.2); color: #22c55e; border: 1px solid rgba(34,197,94,0.35); }
    .hbadge-cat { background: rgba(79,110,247,0.2); color: #a5b4fc; border: 1px solid rgba(79,110,247,0.35); }
    .hero-title {
      font-size: clamp(1.6rem, 3vw, 2.4rem);
      font-weight: 900; color: #fff;
      line-height: 1.15; margin-bottom: 12px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.5);
    }
    .hero-desc {
      font-size: 0.92rem; color: rgba(255,255,255,0.72);
      line-height: 1.6; margin-bottom: 24px;
      text-shadow: 0 1px 6px rgba(0,0,0,0.4);
    }
    .hero-actions { display: flex; gap: 12px; align-items: center; }
    .btn-hero-buy {
      display: flex; align-items: center; gap: 8px;
      padding: 13px 30px; border-radius: 50px;
      background: linear-gradient(135deg, #4f6ef7, #7c3aed);
      color: #fff; font-size: 0.95rem; font-weight: 700;
      text-decoration: none;
      box-shadow: 0 6px 24px rgba(79,110,247,0.45);
      transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s;
      animation: btnPulse 2.8s ease-in-out infinite;
    }
    @keyframes btnPulse {
      0%, 100% { box-shadow: 0 6px 24px rgba(79,110,247,0.45); }
      50%       { box-shadow: 0 6px 36px rgba(124,58,237,0.7), 0 0 60px rgba(79,110,247,0.25); }
    }
    .btn-hero-buy:hover {
      transform: translateY(-3px) scale(1.03);
      box-shadow: 0 14px 36px rgba(79,110,247,0.65);
      animation: none;
    }
    .btn-hero-wish {
      width: 46px; height: 46px; border-radius: 50%;
      background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
      color: #ec4899; font-size: 1rem; cursor: pointer;
      backdrop-filter: blur(8px);
      transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1);
    }
    .btn-hero-wish:hover { background: rgba(236,72,153,0.2); transform: scale(1.12); }
    .hero-live {
      position: absolute; top: 20px; right: 20px;
      background: rgba(0,0,0,0.55); backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.12);
      padding: 6px 14px; border-radius: 50px;
      font-size: 0.75rem; font-weight: 600; color: #e0e4ff;
      display: flex; align-items: center; gap: 7px;
    }
    .live-dot {
      width: 7px; height: 7px; border-radius: 50%; background: #22c55e;
      animation: blink 1.2s infinite;
    }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
    /* Nav arrows */
    .hero-nav {
      position: absolute; top: 50%; transform: translateY(-50%);
      width: 44px; height: 44px; border-radius: 50%;
      background: rgba(13,15,28,0.6); backdrop-filter: blur(12px);
      border: 1px solid rgba(255,255,255,0.12);
      color: #fff; font-size: 0.95rem; cursor: pointer;
      transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1); z-index: 10;
      display: flex; align-items: center; justify-content: center;
    }
    .hero-nav:hover { background: rgba(79,110,247,0.6); border-color: rgba(79,110,247,0.8); transform: translateY(-50%) scale(1.1); box-shadow: 0 0 20px rgba(79,110,247,0.4); }
    .hero-prev { left: 18px; }
    .hero-next { right: 18px; }
    /* Hero Rating */
    .hero-rating {
      display: flex; align-items: center; gap: 8px;
      margin-bottom: 14px;
    }
    .hr-stars { display: flex; gap: 2px; }
    .hr-stars i { font-size: 0.78rem; color: rgba(255,255,255,0.2); }
    .hr-stars i.filled { color: #f59e0b; }
    .hr-stars i.half { color: #f59e0b; opacity: 0.6; }
    .hr-score { font-size: 0.9rem; font-weight: 800; color: #f59e0b; }
    .hr-reviews { font-size: 0.75rem; color: rgba(255,255,255,0.45); }
    /* Dots (mobile only) */
    .hero-dots {
      position: absolute; bottom: 20px; left: 48px;
      display: flex; gap: 7px; z-index: 10;
    }
    .dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: rgba(255,255,255,0.3); border: none; cursor: pointer;
      transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
    }
    .dot.active { width: 24px; border-radius: 4px; background: #4f6ef7; }
    /* Thumbnail strip */
    .hero-thumbs {
      position: absolute; right: 20px; top: 50%;
      transform: translateY(-50%);
      display: flex; flex-direction: column; gap: 8px;
      z-index: 10;
    }
    .hero-thumb {
      position: relative; width: 112px; height: 66px;
      border-radius: 10px; overflow: hidden;
      border: 2px solid rgba(255,255,255,0.1);
      cursor: pointer; padding: 0;
      opacity: 0.45;
      transition: opacity 0.3s ease, border-color 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
    }
    .hero-thumb:hover { opacity: 0.75; transform: scale(1.06); }
    .hero-thumb.active {
      opacity: 1;
      border-color: #4f6ef7;
      transform: scale(1.06);
      box-shadow: 0 0 0 2px rgba(79,110,247,0.4), 0 4px 16px rgba(0,0,0,0.5);
    }
    .hero-thumb img {
      width: 100%; height: 100%; object-fit: cover;
    }
    .thumb-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%);
    }
    .thumb-name {
      position: absolute; bottom: 4px; left: 6px; right: 6px;
      font-size: 0.6rem; font-weight: 700; color: rgba(255,255,255,0.9);
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      line-height: 1;
    }
    .thumb-active-bar {
      position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
      background: #4f6ef7;
      opacity: 0; transition: opacity 0.3s ease;
    }
    .hero-thumb.active .thumb-active-bar { opacity: 1; }
    /* ══ Page Layout ══ */
    .page-layout {
      display: flex; gap: 24px;
      max-width: 1400px; margin: 0 auto;
      padding: 24px 24px 80px;
      align-items: flex-start;
      animation: pageIn 0.45s cubic-bezier(0.16,1,0.3,1) both;
    }
    @keyframes pageIn {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .center-feed { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 24px; }

    /* ── Stats Bar ── */
    .stats-bar {
      display: flex; align-items: center; gap: 0;
      background: linear-gradient(135deg, #1a1d30 0%, #1e2235 100%);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 18px; padding: 16px 22px;
      animation: slideDown 0.4s 0.1s both;
      box-shadow: 0 4px 20px rgba(0,0,0,0.25);
    }
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-10px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .stat-chip {
      display: flex; align-items: center; gap: 12px;
      flex: 1; justify-content: center;
    }
    .stat-icon {
      width: 36px; height: 36px; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.9rem; flex-shrink: 0;
    }
    .stat-icon-blue  { background: rgba(79,110,247,0.18); color: #4f6ef7; box-shadow: 0 0 12px rgba(79,110,247,0.2); }
    .stat-icon-purple{ background: rgba(124,58,237,0.18); color: #a78bfa; box-shadow: 0 0 12px rgba(124,58,237,0.2); }
    .stat-icon-red   { background: rgba(239,68,68,0.15);  color: #f87171; box-shadow: 0 0 12px rgba(239,68,68,0.15); }
    .stat-icon-gold  { background: rgba(245,158,11,0.15); color: #fbbf24; box-shadow: 0 0 12px rgba(245,158,11,0.15); }
    .stat-text { display: flex; flex-direction: column; gap: 1px; }
    .stat-val { font-size: 1.15rem; font-weight: 800; color: #fff; line-height: 1; }
    .stat-lbl { font-size: 0.7rem; color: #5a5e7a; font-weight: 500; }
    .stat-sep { width: 1px; height: 36px; background: rgba(255,255,255,0.06); flex-shrink: 0; }

    /* ── Filter Pills ── */
    .filter-pills-wrap {
      position: relative;
      overflow: hidden;
    }
    .filter-pills-wrap::after {
      content: '';
      position: absolute; top: 0; right: 0; bottom: 0;
      width: 40px;
      background: linear-gradient(to right, transparent, #161929);
      pointer-events: none;
    }
    .filter-pills {
      display: flex; gap: 10px;
      overflow-x: auto;
      padding-bottom: 2px;
      padding-top: 2px;
      scrollbar-width: none;
      animation: slideDown 0.4s 0.15s both;
    }
    .filter-pills::-webkit-scrollbar { display: none; }
    .pill {
      display: flex; align-items: center; gap: 6px;
      padding: 8px 18px; border-radius: 50px;
      font-size: 0.82rem; font-weight: 600;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      color: #a0a4c0; cursor: pointer;
      transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1);
      white-space: nowrap; flex-shrink: 0;
    }
    .pill:hover:not(.active) { background: rgba(255,255,255,0.09); color: #d0d4f0; transform: translateY(-2px); }
    .pill.active {
      background: linear-gradient(135deg, rgba(79,110,247,0.28), rgba(124,58,237,0.22));
      border-color: rgba(79,110,247,0.55); color: #fff;
      box-shadow: 0 4px 18px rgba(79,110,247,0.3), inset 0 0 0 1px rgba(79,110,247,0.15);
    }

    /* ── Section Headers ── */
    .section-header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
    .sh-left { display: flex; align-items: center; gap: 10px; }
    .sh-accent {
      display: block; width: 4px; height: 24px; border-radius: 4px;
      background: linear-gradient(180deg, #4f6ef7, #7c3aed);
      flex-shrink: 0;
      box-shadow: 0 0 10px rgba(79,110,247,0.5);
    }
    .sh-accent-green { background: linear-gradient(180deg, #22c55e, #16a34a); box-shadow: 0 0 10px rgba(34,197,94,0.4); }
    .sh-left h2 { font-size: 1.15rem; font-weight: 800; color: #fff; letter-spacing: -0.3px; margin: 0; }
    .item-count { font-size: 0.78rem; color: #5a5e7a; background: rgba(255,255,255,0.05); padding: 3px 10px; border-radius: 50px; border: 1px solid rgba(255,255,255,0.07); }
    .badge-new-tag {
      font-size: 0.62rem; font-weight: 800;
      background: linear-gradient(135deg, #22c55e, #16a34a);
      color: #fff; padding: 3px 9px; border-radius: 6px;
      letter-spacing: 0.8px; display: flex; align-items: center; gap: 4px;
      box-shadow: 0 2px 10px rgba(34,197,94,0.4);
      animation: badgePop 0.4s cubic-bezier(0.34,1.56,0.64,1) both;
    }
    @keyframes badgePop {
      from { transform: scale(0.6); opacity: 0; }
      to   { transform: scale(1);   opacity: 1; }
    }
    .sh-right { display: flex; align-items: center; gap: 12px; }
    .sort-wrap { display: flex; align-items: center; gap: 6px; }
    .sort-icon { color: #5a5e7a; font-size: 0.8rem; }
    .sort-select {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.09);
      border-radius: 50px; padding: 7px 16px;
      color: #a0a4c0; font-size: 0.82rem; cursor: pointer; outline: none;
      transition: border-color 0.2s, background 0.2s;
    }
    .sort-select:focus { border-color: rgba(79,110,247,0.4); background: rgba(79,110,247,0.06); }
    .see-all-link {
      color: #4f6ef7; font-size: 0.82rem; font-weight: 700;
      text-decoration: none; display: flex; align-items: center; gap: 5px;
      padding: 6px 12px; border-radius: 50px;
      border: 1px solid rgba(79,110,247,0.25);
      transition: all 0.2s;
    }
    .see-all-link:hover { background: rgba(79,110,247,0.1); border-color: rgba(79,110,247,0.45); gap: 8px; }

    /* ── Games Section ── */
    .games-section { display: flex; flex-direction: column; gap: 18px; }
    .games-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
      gap: 18px;
    }
    .games-grid > *:nth-child(1)  { animation: cardIn 0.5s 0.05s both; }
    .games-grid > *:nth-child(2)  { animation: cardIn 0.5s 0.10s both; }
    .games-grid > *:nth-child(3)  { animation: cardIn 0.5s 0.15s both; }
    .games-grid > *:nth-child(4)  { animation: cardIn 0.5s 0.20s both; }
    .games-grid > *:nth-child(5)  { animation: cardIn 0.5s 0.25s both; }
    .games-grid > *:nth-child(6)  { animation: cardIn 0.5s 0.30s both; }
    .games-grid > *:nth-child(n+7){ animation: cardIn 0.5s 0.32s both; }
    @keyframes cardIn {
      from { opacity: 0; transform: translateY(18px) scale(0.96); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    /* Empty state */
    .empty-state { text-align: center; padding: 60px 20px; }
    .empty-icon { font-size: 3rem; color: rgba(79,110,247,0.3); margin-bottom: 16px; }
    .empty-title { font-size: 1.1rem; font-weight: 700; color: #e0e4ff; margin-bottom: 8px; }
    .empty-text { color: #5a5e7a; font-size: 0.9rem; margin-bottom: 22px; }
    .empty-actions { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
    .btn-pill {
      display: inline-flex; align-items: center; gap: 7px;
      padding: 11px 22px; border-radius: 50px;
      background: linear-gradient(135deg, #4f6ef7, #7c3aed);
      color: #fff; font-size: 0.88rem; font-weight: 600;
      border: none; cursor: pointer;
      text-decoration: none;
      transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.22s;
      box-shadow: 0 4px 16px rgba(79,110,247,0.35);
    }
    .btn-pill:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 8px 24px rgba(79,110,247,0.5); }
    .btn-pill-outline {
      background: transparent;
      border: 1px solid rgba(79,110,247,0.4);
      color: #4f6ef7;
      box-shadow: none;
    }
    .btn-pill-outline:hover { background: rgba(79,110,247,0.1); box-shadow: none; }

    /* ── Just Dropped (horizontal scroll) ── */
    .arrivals-section {
      width: 100%;
      background: linear-gradient(135deg, rgba(26,29,48,0.7) 0%, rgba(22,25,41,0.5) 100%);
      border-top: 1px solid rgba(34,197,94,0.12);
      border-bottom: 1px solid rgba(34,197,94,0.12);
      padding: 20px 0;
    }
    .arrivals-inner {
      display: flex; flex-direction: column; gap: 16px;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .sh-arrivals-right { display: flex; align-items: center; gap: 12px; }
    .arrivals-count {
      font-size: 0.75rem; color: #5a5e7a; font-weight: 600;
      background: rgba(255,255,255,0.04); padding: 4px 10px;
      border-radius: 50px; border: 1px solid rgba(255,255,255,0.06);
    }
    .arrivals-scroll-wrap { position: relative; overflow: hidden; width: 100%; }
    .arrivals-scroll {
      display: flex; gap: 14px;
      overflow-x: auto;
      width: 100%;
      padding: 10px 4px 8px 4px;
      // scrollbar-width: thin;
      // scrollbar-color: rgba(34, 197, 94, 0) transparent;
    }
    .arrivals-scroll::-webkit-scrollbar { height: 3px; }
    .arrivals-scroll::-webkit-scrollbar-track { background: transparent; }
    .arrivals-scroll::-webkit-scrollbar-thumb { background: rgba(34,197,94,0.4); border-radius: 2px; }
    .arrivals-fade-right {
      position: absolute; top: 0; right: 0; bottom: 8px; width: 60px;
      background: linear-gradient(to right, transparent, rgba(22,25,41,0.95));
      pointer-events: none;
    }
    .arrival-card {
      flex-shrink: 0; width: 210px;
      background: #1a1d30; border: 1px solid rgba(255,255,255,0.07);
      border-radius: 16px; overflow: hidden;
      text-decoration: none;
      position: relative; z-index: 1;
      transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.28s, border-color 0.28s, z-index 0s;
    }
    .arrival-card:hover {
      transform: translateY(-6px) scale(1.02);
      box-shadow: 0 20px 44px rgba(0,0,0,0.45), 0 0 0 1px rgba(34,197,94,0.25);
      border-color: rgba(34,197,94,0.35);
      z-index: 10;
    }
    .arrival-img-wrap { position: relative; height: 132px; overflow: hidden; }
    .arrival-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
    .arrival-card:hover .arrival-img-wrap img { transform: scale(1.12); }
    .arrival-img-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to top, rgba(26,29,48,0.9) 0%, rgba(26,29,48,0.2) 50%, transparent 100%);
      pointer-events: none;
    }
    .arrival-new-badge {
      position: absolute; top: 8px; left: 8px;
      background: rgba(34,197,94,0.9); color: #fff;
      font-size: 0.65rem; padding: 3px 7px; border-radius: 4px; z-index: 2;
      animation: newBadgePulse 2s ease-in-out infinite;
    }
    @keyframes newBadgePulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
      50%       { box-shadow: 0 0 0 5px rgba(34,197,94,0); }
    }
    .arrival-price {
      position: absolute; bottom: 8px; right: 8px;
      background: rgba(15,17,30,0.82); backdrop-filter: blur(8px);
      color: #fff; font-size: 0.76rem; font-weight: 800;
      padding: 4px 10px; border-radius: 8px; z-index: 2;
      border: 1px solid rgba(79,110,247,0.35);
    }
    .arrival-price-free {
      background: rgba(15,17,30,0.82);
      border-color: rgba(34,197,94,0.45);
      color: #34d399;
    }
    /* Hover action buttons on arrival card image */
    .arrival-hover-actions {
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center; gap: 10px;
      opacity: 0;
      background: rgba(10,12,24,0.52);
      transition: opacity 0.22s ease;
      z-index: 3;
    }
    .arrival-card:hover .arrival-hover-actions { opacity: 1; }
    .arrival-btn-cart, .arrival-btn-wish {
      width: 40px; height: 40px; border-radius: 50%;
      border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.9rem;
      transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.22s;
    }
    .arrival-btn-cart {
      background: linear-gradient(135deg, #4f6ef7, #7c3aed);
      color: #fff;
      box-shadow: 0 4px 14px rgba(79,110,247,0.5);
      transform: translateY(8px);
    }
    .arrival-card:hover .arrival-btn-cart { transform: translateY(0); }
    .arrival-btn-cart:hover { transform: scale(1.12) !important; box-shadow: 0 6px 20px rgba(79,110,247,0.7); }
    .arrival-btn-wish {
      background: rgba(236,72,153,0.2);
      color: #f472b6;
      border: 1px solid rgba(236,72,153,0.35);
      box-shadow: 0 4px 14px rgba(236,72,153,0.2);
      transform: translateY(8px);
    }
    .arrival-card:hover .arrival-btn-wish { transform: translateY(0); transition-delay: 0.04s; }
    .arrival-btn-wish:hover { transform: scale(1.12) !important; background: rgba(236,72,153,0.35); }
    .arrival-info { padding: 11px 13px 14px; }
    .arrival-name { font-size: 0.85rem; font-weight: 700; color: #e0e4ff; margin: 0 0 6px 0; line-height: 1.3; }
    .arrival-meta {
      font-size: 0.7rem; color: #5a5e7a;
      display: flex; align-items: center; gap: 5px;
      margin-bottom: 8px;
    }
    .arrival-footer { display: flex; align-items: center; justify-content: space-between; }
    .arrival-stars { display: flex; align-items: center; gap: 1px; }
    .star { font-size: 0.8rem; color: rgba(255,255,255,0.13); }
    .star.filled { color: #f59e0b; }
    .arrival-rating-val { font-size: 0.7rem; font-weight: 700; color: #f59e0b; margin-left: 4px; }

    /* ── Right Panel ── */
    .right-panel {
      width: 300px; flex-shrink: 0;
      display: flex; flex-direction: column; gap: 16px;
      position: sticky; top: 20px;
      animation: panelIn 0.5s ease 0.15s both;
    }
    @keyframes panelIn {
      from { opacity: 0; transform: translateX(20px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    .rp-card {
      background: #1a1d30; border-radius: 18px;
      border: 1px solid rgba(255,255,255,0.07);
      padding: 18px;
      transition: transform 0.22s ease, box-shadow 0.22s ease;
    }
    .rp-card:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); }
    .rp-card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
    .rp-title { font-size: 0.92rem; font-weight: 700; color: #fff; display: flex; align-items: center; }
    .rp-more { background: none; border: none; color: #5a5e7a; font-size: 1.2rem; cursor: pointer; letter-spacing: 2px; transition: color 0.2s; }
    .rp-more:hover { color: #a0a4c0; }
    .rp-see-all { font-size: 0.78rem; font-weight: 600; color: #4f6ef7; text-decoration: none; padding: 4px 10px; border-radius: 50px; border: 1px solid rgba(79,110,247,0.25); transition: all 0.2s; }
    .rp-see-all:hover { background: rgba(79,110,247,0.1); border-color: rgba(79,110,247,0.4); }
    /* Finance card header */
    .finance-card { padding: 0; overflow: hidden; }
    .finance-header {
      display: flex; justify-content: space-between; align-items: center;
      padding: 16px 18px 14px;
      background: linear-gradient(135deg, rgba(79,110,247,0.15) 0%, rgba(124,58,237,0.12) 100%);
      border-bottom: 1px solid rgba(255,255,255,0.07);
      margin-bottom: 0;
    }
    .finance-header-left { display: flex; align-items: center; gap: 10px; }
    .finance-avatar {
      width: 32px; height: 32px; border-radius: 10px;
      background: linear-gradient(135deg, #4f6ef7, #7c3aed);
      display: flex; align-items: center; justify-content: center;
      font-size: 0.85rem; color: #fff;
      box-shadow: 0 4px 12px rgba(79,110,247,0.4);
    }
    .finance-body { padding: 16px 18px 18px; }
    /* Finance */
    .finance-chips { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 16px; }
    .fchip {
      padding: 5px 12px; border-radius: 50px;
      font-size: 0.73rem; font-weight: 600;
      transition: transform 0.2s; display: flex; align-items: center; gap: 5px;
    }
    .fchip:hover { transform: scale(1.05); cursor: pointer; }
    .fchip-blue { background: rgba(79,110,247,0.15); color: #818cf8; border: 1px solid rgba(79,110,247,0.2); }
    .fchip-pink { background: rgba(236,72,153,0.12); color: #f472b6; border: 1px solid rgba(236,72,153,0.2); }
    .fchip-gold { background: rgba(245,158,11,0.12); color: #fbbf24; border: 1px solid rgba(245,158,11,0.2); }
    .fchip-add { background: rgba(255,255,255,0.06); color: #a0a4c0; border: 1px dashed rgba(255,255,255,0.18); cursor: pointer; }
    .balance-label { font-size: 0.7rem; color: #5a5e7a; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px; }
    .balance-val { font-size: 2.1rem; font-weight: 900; color: #fff; line-height: 1; letter-spacing: -1px; }
    .balance-val span { font-size: 1rem; color: #6b7280; font-weight: 600; }
    .balance-trend { font-size: 0.77rem; color: #22c55e; margin: 7px 0 14px; font-weight: 600; display: flex; align-items: center; gap: 5px; }
    .balance-trend.negative-trend { color: #ef4444; }
    .sparkline { height: 50px; }
    .sparkline svg { width: 100%; height: 100%; }
    .btn-topup {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      margin-top: 16px; padding: 13px;
      border-radius: 12px;
      background: linear-gradient(135deg,#4f6ef7,#7c3aed);
      color: #fff; font-weight: 700; font-size: 0.88rem;
      text-decoration: none;
      transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1);
      box-shadow: 0 4px 18px rgba(79,110,247,0.4);
      letter-spacing: 0.2px;
    }
    .btn-topup:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(79,110,247,0.55); }
    /* Category list */
    .cat-list { display: flex; flex-direction: column; gap: 2px; }
    .cat-row {
      display: flex; align-items: center; gap: 10px;
      padding: 9px 10px; border-radius: 10px;
      text-decoration: none; color: #a0a4c0;
      font-size: 0.86rem; transition: all 0.2s;
    }
    .cat-row:hover { background: rgba(79,110,247,0.08); color: #c4c8f0; padding-left: 14px; border-color: rgba(79,110,247,0.15); }
    .cat-all { color: #4f6ef7; }
    .cat-all:hover { background: rgba(79,110,247,0.12); }
    .cat-icon-sm { font-size: 0.95rem; flex-shrink: 0; width: 18px; text-align: center; }
    .cat-icon-all { color: #4f6ef7; }
    .cat-row-name { flex: 1; font-weight: 500; }
    .cat-arrow { color: #3d4165; font-size: 0.85rem; transition: color 0.2s; }
    .cat-row:hover .cat-arrow { color: #4f6ef7; }
    /* History / lists */
    .history-list { display: flex; flex-direction: column; gap: 8px; }
    .history-row {
      display: flex; align-items: center; gap: 10px;
      padding: 7px 8px; border-radius: 10px;
      text-decoration: none;
      transition: background 0.2s;
    }
    .history-row:hover { background: rgba(255,255,255,0.04); }
    .history-thumb { width: 40px; height: 40px; border-radius: 10px; overflow: hidden; flex-shrink: 0; }
    .history-thumb img { width: 100%; height: 100%; object-fit: cover; }
    .history-info { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px; }
    .history-name { font-size: 0.82rem; font-weight: 600; color: #e0e4ff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .history-meta { font-size: 0.72rem; color: #5a5e7a; display: flex; align-items: center; gap: 5px; }
    .history-stars { display: flex; align-items: center; gap: 2px; }
    .star-sm { font-size: 0.72rem; color: rgba(255,255,255,0.15); }
    .star-sm.filled { color: #f59e0b; }
    .rv-sm { font-size: 0.68rem; color: #5a5e7a; margin-left: 3px; }
    .history-price { font-size: 0.82rem; font-weight: 700; color: #4f6ef7; white-space: nowrap; flex-shrink: 0; }
    /* Rank badges */
    .rank-badge {
      width: 22px; height: 22px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.68rem; font-weight: 800; flex-shrink: 0;
      background: rgba(255,255,255,0.08); color: #a0a4c0;
    }
    .rank-gold { background: rgba(245,158,11,0.2); color: #f59e0b; }
    .rank-silver { background: rgba(148,163,184,0.2); color: #94a3b8; }
    .rank-bronze { background: rgba(180,120,60,0.2); color: #b4783c; }

    /* ── Toast ── */
    .toast {
      position: fixed; bottom: 32px; right: 32px;
      background: rgba(26,29,48,0.95);
      backdrop-filter: blur(16px);
      color: #fff;
      border: 1px solid rgba(34,197,94,0.4);
      padding: 14px 20px; border-radius: 16px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.05);
      z-index: 9999; font-weight: 600; font-size: 0.88rem;
      display: flex; align-items: center; gap: 10px;
      animation: toastIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both;
      min-width: 220px;
    }
    .toast i { font-size: 1.1rem; color: #22c55e; }
    .toast.toast-error { border-color: rgba(239,68,68,0.45); }
    .toast.toast-error i { color: #f87171; }
    @keyframes toastIn { from{transform:translateX(90px) scale(0.88);opacity:0} to{transform:translateX(0) scale(1);opacity:1} }

    /* ── Responsive ── */
    @media (max-width: 1100px) { .right-panel { display: none; } }
    @media (max-width: 900px) {
      .stats-bar { padding: 12px 14px; }
      .stat-chip { gap: 8px; }
      .stat-icon { width: 30px; height: 30px; font-size: 0.78rem; }
      .hero-thumbs { display: none; }
      .hero-dots { display: flex; left: 50%; transform: translateX(-50%); }
      .arrivals-section { padding: 14px 0; }
      .arrivals-inner { padding: 0 16px; }
    }
    @media (min-width: 901px) {
      .hero-dots { display: none; }
    }
    @media (max-width: 768px) {
      .hero-banner { height: 340px; }
      .hero-content { padding: 24px 22px; max-width: 100%; }
      .page-layout { padding: 16px 14px 80px; gap: 18px; }
      .toast { bottom: 84px; right: 16px; left: 16px; min-width: unset; font-size: 0.83rem; }
      .filter-pills .pill { padding: 7px 14px; font-size: 0.79rem; }
      .section-header { gap: 8px; }
      .sh-left h2 { font-size: 1rem; }
      .sort-select { padding: 6px 12px; font-size: 0.79rem; }
    }
    @media (max-width: 580px) {
      .hero-banner { height: 260px; }
      .hero-title { font-size: 1.25rem; }
      .hero-content { padding: 18px 16px; }
      .hero-desc {
        font-size: 0.8rem; margin-bottom: 16px;
        display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .hero-rating { margin-bottom: 8px; }
      .hr-score { font-size: 0.8rem; }
      .hr-reviews { display: none; }
      .btn-hero-buy { padding: 10px 20px; font-size: 0.85rem; }
      .btn-hero-wish { width: 40px; height: 40px; }
      .stats-bar { gap: 0; padding: 10px 10px; }
      .stat-text .stat-lbl { display: none; }
      .stat-val { font-size: 1rem; }
      .stat-icon { width: 28px; height: 28px; font-size: 0.72rem; }
      .games-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
      .page-layout { padding: 12px 12px 80px; }
      .arrival-card { width: 170px; }
      .arrival-img-wrap { height: 108px; }
      .arrivals-section { padding: 12px 0; }
      .arrivals-inner { padding: 0 14px; }
      .hbadge { font-size: 0.65rem; padding: 3px 9px; }
      .hero-live { font-size: 0.68rem; padding: 4px 10px; top: 12px; right: 12px; }
      /* Sort controls: smaller on mobile */
      .sort-select { padding: 5px 10px; font-size: 0.76rem; }
      .see-all-link { padding: 5px 8px; font-size: 0.76rem; gap: 4px; }
      .sh-right { gap: 8px; }
      .sort-icon { display: none; }
    }
    @media (max-width: 430px) {
      /* Stack section header so title row and controls row are separate */
      .section-header { flex-direction: column; align-items: flex-start; gap: 6px; }
      .sh-right {
        width: 100%;
        display: flex; justify-content: space-between; align-items: center;
      }
      /* Compact arrivals on very narrow phones */
      .arrival-card { width: 150px; }
      .arrival-img-wrap { height: 96px; }
      .arrival-name { font-size: 0.8rem; }
      /* Tighter hero */
      .hero-banner { height: 240px; }
      .hero-content { padding: 14px 14px; }
      .btn-hero-buy { padding: 9px 16px; font-size: 0.82rem; }
    }
    @media (max-width: 400px) {
      .games-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
      .hero-banner { height: 220px; }
      .stats-bar { padding: 8px; }
      .stat-chip { gap: 6px; }
      .page-layout { padding: 10px 10px 80px; }
    }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
  featuredProducts: Product[] = [];
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  newArrivals: Product[] = [];
  topRated: Product[] = [];
  categories: Category[] = [];

  loadingProducts = true;
  loadingCategories = true;

  // Hero carousel
  heroProducts: Product[] = [];
  heroIndex = 0;
  heroProgress = 0;
  private heroTimer: any;
  private progressTimer: any;
  private readonly SLIDE_DURATION = 5000;

  // Total Spent
  totalSpentWhole = '0';
  totalSpentCents = '00';
  spentTrend = 0;

  // Filter / sort
  activeCategory = 'all';
  sortOrder = 'default';

  readonly homeSortOptions: SelectOption[] = [
    { value: 'default',    label: 'Default' },
    { value: 'price-asc',  label: 'Price ↑' },
    { value: 'price-desc', label: 'Price ↓' },
    { value: 'rating',     label: 'Top Rated' },
    { value: 'newest',     label: 'Newest' }
  ];

  get activeCategoryName(): string {
    if (this.activeCategory === 'all') return 'All Games';
    return this.categories.find(c => c._id === this.activeCategory)?.name || 'Games';
  }

  get avgRating(): number {
    if (!this.allProducts.length) return 0;
    return this.allProducts.reduce((s, p) => s + (p.rating || 0), 0) / this.allProducts.length;
  }

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private cartService: CartService,
    private authService: AuthService,
    private wishlistService: WishlistService,
    private orderService: OrderService,
    private router: Router,
    private msgService: NotificationService
  ) {}

  ngOnInit() {
    this.productService.getFeaturedProducts().subscribe({
      next: (res) => {
        this.featuredProducts = res.products || [];
        this.heroProducts = this.featuredProducts.slice(0, 5);
        if (this.heroProducts.length > 1) this.startCarousel();
        this.loadingProducts = false;
      },
      error: () => { this.loadingProducts = false; }
    });

    this.productService.getProducts({ limit: 48 }).subscribe({
      next: (res) => {
        this.allProducts = res.products || [];
        this.computeFiltered();
        this.newArrivals = [...this.allProducts]
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, 8);
        this.topRated = [...this.allProducts]
          .sort((a, b) => (b.rating - a.rating) || (b.numReviews - a.numReviews))
          .slice(0, 5);
      },
      error: () => {}
    });

    this.categoryService.getCategories().subscribe({
      next: (res) => { this.categories = (res.categories || []).slice(0, 8); this.loadingCategories = false; },
      error: () => { this.loadingCategories = false; }
    });

    if (this.authService.isLoggedIn) {
      this.orderService.getMyOrders().subscribe({
        next: (res) => {
          const orders: any[] = res.orders || res || [];
          const completed = orders.filter((o: any) => o.status !== 'cancelled');
          const total = completed.reduce((sum: number, o: any) => sum + (o.totalPrice || 0), 0);
          const formatted = total.toFixed(2).split('.');
          this.totalSpentWhole = Number(formatted[0]).toLocaleString();
          this.totalSpentCents = formatted[1];

          const now = new Date();
          const thisMonthTotal = completed.filter((o: any) => {
            const d = new Date(o.createdAt);
            return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
          }).reduce((sum: number, o: any) => sum + (o.totalPrice || 0), 0);

          const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
          const lastMonthTotal = completed.filter((o: any) => {
            const d = new Date(o.createdAt);
            return d.getFullYear() === lastMonthDate.getFullYear() && d.getMonth() === lastMonthDate.getMonth();
          }).reduce((sum: number, o: any) => sum + (o.totalPrice || 0), 0);

          this.spentTrend = lastMonthTotal === 0
            ? (thisMonthTotal > 0 ? 100 : 0)
            : Math.round(((thisMonthTotal - lastMonthTotal) / lastMonthTotal) * 100);
        },
        error: () => {}
      });
    }
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  // ── Carousel ──
  private startCarousel() {
    this.heroProgress = 0;
    this.stopCarousel();
    const step = 100 / (this.SLIDE_DURATION / 100);
    this.progressTimer = setInterval(() => {
      this.heroProgress += step;
      if (this.heroProgress >= 100) {
        this.heroProgress = 0;
        this.heroIndex = (this.heroIndex + 1) % this.heroProducts.length;
      }
    }, 100);
  }

  private stopCarousel() {
    clearInterval(this.heroTimer);
    clearInterval(this.progressTimer);
  }

  prevHero() {
    this.heroIndex = (this.heroIndex - 1 + this.heroProducts.length) % this.heroProducts.length;
    this.heroProgress = 0;
  }

  nextHero() {
    this.heroIndex = (this.heroIndex + 1) % this.heroProducts.length;
    this.heroProgress = 0;
  }

  goToSlide(i: number) {
    this.heroIndex = i;
    this.heroProgress = 0;
  }

  // ── Filter / Sort ──
  filterBy(categoryId: string) {
    this.activeCategory = categoryId;
    this.computeFiltered();
  }

  onSortChange(_val?: any) {
    this.computeFiltered();
  }

  private computeFiltered() {
    let list = this.activeCategory === 'all'
      ? [...this.allProducts]
      : this.allProducts.filter(p => {
          const catId = typeof p.category === 'string' ? p.category : p.category?._id;
          return catId === this.activeCategory;
        });

    switch (this.sortOrder) {
      case 'price-asc':  list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'rating':     list.sort((a, b) => b.rating - a.rating); break;
      case 'newest':     list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()); break;
    }
    this.filteredProducts = list;
  }

  // ── Helpers ──
  getProductImage(p: Product): string {
    if (!p.image) return 'https://placehold.co/300x180/1e2235/4f6ef7?text=Game';
    return p.image.startsWith('http') ? p.image : 'http://localhost:5050' + p.image;
  }

  isNew(p: Product): boolean {
    return (Date.now() - new Date(p.createdAt).getTime()) < 7 * 24 * 60 * 60 * 1000;
  }

  getCategoryIconClass(name: string): string {
    const icons: { [key: string]: string } = {
      action:     'fas fa-bolt',
      indie:      'fas fa-star',
      adventure:  'fas fa-map',
      rpg:        'fas fa-hat-wizard',
      strategy:   'fas fa-chess',
      shooter:    'fas fa-crosshairs',
      casual:     'fas fa-dice',
      racing:     'fas fa-flag-checkered',
      puzzle:     'fas fa-puzzle-piece',
      simulation: 'fas fa-earth-americas',
      horror:     'fas fa-skull',
      fighting:   'fas fa-hand-fist',
      platform:   'fas fa-gamepad',
      sports:     'fas fa-futbol',
      electronics:'fas fa-mobile-screen',
      clothing:   'fas fa-shirt',
      books:      'fas fa-book',
      beauty:     'fas fa-spa',
      food:       'fas fa-pizza-slice',
      toys:       'fas fa-gamepad',
      jewelry:    'fas fa-ring',
      garden:     'fas fa-seedling',
      automotive: 'fas fa-car'
    };
    return icons[(name || '').toLowerCase()] || 'fas fa-gamepad';
  }

  onAddToCart(product: Product) {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/auth/login']);
      return;
    }
    this.cartService.addToCart(product._id).subscribe({
      next: () => this.msgService.success('Added to cart!'),
      error: (err) => this.msgService.error(err.error?.message || 'Failed to add to cart')
    });
  }

  onAddToWishlist(product: Product) {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/auth/login']);
      return;
    }
    this.wishlistService.addToWishlist(product._id).subscribe({
      next: () => this.msgService.success('Added to wishlist!'),
      error: (err) => this.msgService.error(err.error?.message || 'Failed to add to wishlist')
    });
  }

  onQuickView(product: Product) {
    this.router.navigate(['/products', product._id]);
  }

  floorRating(rating: number): number {
    return Math.floor(rating || 0);
  }
}
