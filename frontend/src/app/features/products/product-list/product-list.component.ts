import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../core/services/product.service';
import { CategoryService } from '../../../core/services/category.service';
import { CartService } from '../../../core/services/cart.service';
import { WishlistService } from '../../../core/services/wishlist.service';
import { AuthService } from '../../../core/services/auth.service';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { SkeletonComponent } from '../../../shared/components/skeleton/skeleton.component';
import { SelectComponent, SelectOption } from '../../../shared/components/select/select.component';
import { NotificationService } from '../../../shared/services/notification.service';
import { Product, Category } from '../../../core/models';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ProductCardComponent, SkeletonComponent, SelectComponent],
  template: `
    <div class="page-container">
      <div class="page-header">
        <h1>{{ pageTitle }}</h1>
        <p>{{ total }} products found</p>
      </div>

      <!-- Mobile filter toggle -->
      <button class="btn-filter-toggle" (click)="filterOpen = !filterOpen">
        <i class="fas fa-sliders"></i>
        {{ filterOpen ? 'Hide Filters' : 'Show Filters' }}
        <span class="filter-badge" *ngIf="activeFilterCount > 0">{{ activeFilterCount }}</span>
      </button>

      <!-- Mobile overlay backdrop -->
      <div class="sidebar-overlay" [class.active]="filterOpen" (click)="filterOpen = false"></div>

      <div class="content-layout">
        <!-- Sidebar Filters -->
        <aside class="sidebar" [class.sidebar-open]="filterOpen">
          <!-- Mobile drawer header -->
          <div class="sidebar-header">
            <span class="sidebar-title">
              <i class="fas fa-sliders"></i> Filters
              <span class="filter-count" *ngIf="activeFilterCount > 0">{{ activeFilterCount }}</span>
            </span>
            <button class="sidebar-close" (click)="filterOpen = false" aria-label="Close">
              <i class="fas fa-xmark"></i>
            </button>
          </div>

          <!-- Single unified card -->
          <div class="sidebar-card">
            <!-- Categories -->
            <div class="filter-section">
              <div class="filter-heading"><i class="fas fa-layer-group"></i><span>Categories</span></div>
              <div class="filter-options">
                <label class="filter-option" [class.active]="!selectedCategory">
                  <input type="radio" name="category" value="" [(ngModel)]="selectedCategory" (change)="onFilterChange()" />
                  <span class="radio-dot"></span>
                  <span class="option-text">All Categories</span>
                </label>
                <label class="filter-option" *ngFor="let cat of categories"
                  [class.active]="selectedCategory === cat._id">
                  <input type="radio" name="category" [value]="cat._id" [(ngModel)]="selectedCategory" (change)="onFilterChange()" />
                  <span class="radio-dot"></span>
                  <span class="option-text">{{ cat.name }}</span>
                </label>
              </div>
            </div>

            <div class="sep"></div>

            <!-- Price Range -->
            <div class="filter-section">
              <div class="filter-heading"><i class="fas fa-tag"></i><span>Price Range</span></div>
              <div class="price-inputs">
                <input type="number" [(ngModel)]="minPrice" placeholder="Min" class="price-input" min="0" />
                <span class="price-sep">–</span>
                <input type="number" [(ngModel)]="maxPrice" placeholder="Max" class="price-input" min="0" />
              </div>
              <button class="btn-apply" (click)="onFilterChange()">
                <i class="fas fa-check"></i> Apply
              </button>
            </div>

            <div class="sep"></div>

            <!-- Sort By -->
            <div class="filter-section">
              <div class="filter-heading"><i class="fas fa-arrow-up-wide-short"></i><span>Sort By</span></div>
              <app-select [(ngModel)]="sortBy" [options]="sortOptions" [clearable]="false" (selectionChange)="onFilterChange()"></app-select>
            </div>
          </div>

          <button class="btn-reset" (click)="resetFilters()">
            <i class="fas fa-rotate-left"></i> Reset Filters
          </button>
        </aside>

        <!-- Products Area -->
        <main class="products-area">
          <div class="products-toolbar">
            <div class="search-bar" [class.focused]="plSearchFocused">
              <i class="fas fa-magnifying-glass pl-search-icon"></i>
              <input type="text" [(ngModel)]="searchQuery"
                (keyup.enter)="onFilterChange()"
                (focus)="plSearchFocused = true" (blur)="plSearchFocused = false"
                placeholder="Search games..." class="search-input"
                autocomplete="off" />
              <button class="pl-clear-btn" *ngIf="searchQuery"
                (click)="searchQuery = ''; onFilterChange()" tabindex="-1" title="Clear">
                <i class="fas fa-xmark"></i>
              </button>
              <button (click)="onFilterChange()" class="search-btn">
                <i class="fas fa-magnifying-glass"></i>
              </button>
            </div>
            <div class="view-info">
              Showing {{ products.length }} of {{ total }}
            </div>
          </div>

          <div class="products-grid" *ngIf="loading">
            <app-skeleton *ngFor="let i of [1,2,3,4,5,6,7,8]" type="image" [active]="true" height="260px"></app-skeleton>
          </div>

          <div class="products-grid" *ngIf="!loading && products.length > 0">
            <app-product-card
              *ngFor="let product of products"
              [product]="product"
              (addToCart)="onAddToCart($event)"
              (addToWishlist)="onAddToWishlist($event)"
              (quickView)="onQuickView($event)">
            </app-product-card>
          </div>

          <div class="empty-state" *ngIf="!loading && products.length === 0">
            <div class="empty-icon"><i class="fas fa-magnifying-glass"></i></div>
            <h3>No products found</h3>
            <p>Try adjusting your filters or search terms</p>
            <button class="btn-reset" (click)="resetFilters()">Clear Filters</button>
          </div>

          <!-- Pagination -->
          <div class="pagination" *ngIf="totalPages > 1">
            <button class="page-btn" (click)="changePage(currentPage - 1)" [disabled]="currentPage === 1">←</button>
            <button class="page-btn" *ngFor="let p of getPages()"
              [class.active]="p === currentPage" (click)="changePage(p)">{{ p }}</button>
            <button class="page-btn" (click)="changePage(currentPage + 1)" [disabled]="currentPage === totalPages">→</button>
          </div>
        </main>
      </div>
    </div>
  `,
  styles: [`
    /* ════════ Page ════════ */
    .page-container {
      max-width: 1400px; margin: 0 auto; padding: 28px 24px 60px;
      animation: fadeInUp 0.45s cubic-bezier(0.16,1,0.3,1) both;
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .page-header { margin-bottom: 20px; }
    .page-header h1 { font-size: 1.8rem; font-weight: 800; color: var(--text-white, #1a1d2e); }
    .page-header p { color: var(--text-muted, #7b7fa8); margin-top: 4px; font-size: 0.9rem; }

    /* ════════ Mobile toggle button ════════ */
    .btn-filter-toggle {
      display: none; align-items: center; gap: 8px;
      padding: 9px 18px; margin-bottom: 16px;
      background: var(--bg-card, #fff);
      border: 1.5px solid var(--border, #e2e6f0);
      border-radius: 50px; color: var(--text-secondary, #6b7280);
      font-size: 0.88rem; font-weight: 600;
      cursor: pointer; transition: all 0.22s;
      box-shadow: 0 1px 4px rgba(0,0,0,0.07);
    }
    .btn-filter-toggle:hover { background: rgba(79,110,247,0.07); color: #4f6ef7; border-color: rgba(79,110,247,0.35); }
    .filter-badge {
      background: linear-gradient(135deg, #4f6ef7, #7c3aed);
      color: #fff; font-size: 0.68rem; font-weight: 700;
      min-width: 18px; height: 18px; padding: 0 5px;
      border-radius: 50px; display: inline-flex;
      align-items: center; justify-content: center;
    }

    /* ════════ Overlay ════════ */
    .sidebar-overlay {
      display: none; position: fixed; inset: 0;
      background: rgba(0,0,0,0.6); z-index: 499;
      backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px);
    }
    .sidebar-overlay.active { display: block; animation: overlayIn 0.22s ease both; }
    @keyframes overlayIn { from { opacity: 0; } to { opacity: 1; } }

    /* ════════ Layout ════════ */
    .content-layout { display: grid; grid-template-columns: 260px 1fr; gap: 26px; }

    /* ════════ Sidebar ════════ */
    .sidebar {
      position: sticky; top: 80px; height: fit-content;
      display: flex; flex-direction: column; gap: 10px;
    }

    /* Mobile drawer header (hidden on desktop) */
    .sidebar-header {
      display: none; align-items: center; justify-content: space-between;
      padding: 16px 18px; flex-shrink: 0;
      border-bottom: 1.5px solid var(--border, #e8eaf4);
      background: var(--bg-card, #fff);
    }
    .sidebar-title {
      font-size: 0.95rem; font-weight: 700;
      color: var(--text-white, #1a1d2e);
      display: flex; align-items: center; gap: 8px;
    }
    .sidebar-title i { color: #4f6ef7; }
    .filter-count {
      background: linear-gradient(135deg, #4f6ef7, #7c3aed);
      color: #fff; font-size: 0.68rem; font-weight: 700;
      min-width: 18px; height: 18px; padding: 0 5px;
      border-radius: 50px; display: inline-flex;
      align-items: center; justify-content: center; margin-left: 2px;
    }
    .sidebar-close {
      width: 30px; height: 30px; flex-shrink: 0;
      background: rgba(0,0,0,0.04); border: 1.5px solid var(--border, #e4e6f0);
      border-radius: 8px; color: #8b91b4; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.8rem; transition: all 0.18s;
    }
    .sidebar-close:hover { background: rgba(239,68,68,0.09); color: #ef4444; border-color: rgba(239,68,68,0.35); }

    /* ════════ Single unified sidebar card ════════ */
    .sidebar-card {
      background: var(--bg-card, #ffffff);
      border: 1.5px solid var(--border, #e8eaf4);
      border-radius: 18px; overflow: hidden;
      box-shadow: 0 2px 16px rgba(100,116,200,0.08), 0 1px 4px rgba(0,0,0,0.05);
      animation: sidebarCardIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.08s both;
    }
    /* Mobile drawer inherits sidebar-card scroll area */

    .filter-section { padding: 18px 18px 16px; animation: filterOptIn 0.4s cubic-bezier(0.16,1,0.3,1) both; }
    .filter-section:nth-child(1) { animation-delay: 0.12s; }
    .filter-section:nth-child(3) { animation-delay: 0.19s; }
    .filter-section:nth-child(5) { animation-delay: 0.26s; }

    /* Section divider */
    .sep { height: 1.5px; background: var(--border, #eceef8); margin: 0; }

    /* Section heading */
    .filter-heading {
      display: flex; align-items: center; gap: 7px;
      font-size: 0.68rem; font-weight: 700;
      color: var(--text-muted, #9499c0); text-transform: uppercase; letter-spacing: 1.1px;
      margin-bottom: 13px;
    }
    .filter-heading i { color: #4f6ef7; font-size: 0.76rem; width: 14px; text-align: center; }
    .filter-heading span { color: var(--text-muted, #9499c0); }

    /* ════════ Category list ════════ */
    .filter-options {
      display: flex; flex-direction: column; gap: 1px;
      max-height: 228px; overflow-y: auto;
      scrollbar-width: thin; scrollbar-color: #d0d4ee transparent;
    }
    .filter-options::-webkit-scrollbar { width: 3px; }
    .filter-options::-webkit-scrollbar-thumb { background: #d0d4ee; border-radius: 4px; }

    .filter-option {
      display: flex; align-items: center; gap: 10px;
      padding: 8px 10px; border-radius: 9px;
      cursor: pointer; transition: background 0.14s;
      animation: filterOptIn 0.35s cubic-bezier(0.16,1,0.3,1) both;
    }
    .filter-option:nth-child(1)  { animation-delay: 0.15s; }
    .filter-option:nth-child(2)  { animation-delay: 0.19s; }
    .filter-option:nth-child(3)  { animation-delay: 0.23s; }
    .filter-option:nth-child(4)  { animation-delay: 0.27s; }
    .filter-option:nth-child(5)  { animation-delay: 0.31s; }
    .filter-option:nth-child(6)  { animation-delay: 0.35s; }
    .filter-option:nth-child(n+7){ animation-delay: 0.38s; }
    .filter-option input[type="radio"] { display: none; }

    /* Visible dot — clear on any background */
    .radio-dot {
      width: 15px; height: 15px; flex-shrink: 0;
      border-radius: 50%;
      border: 2px solid #c4c9e4;
      background: transparent;
      box-sizing: border-box;
      transition: all 0.2s cubic-bezier(0.34,1.56,0.64,1);
    }

    .option-text {
      font-size: 0.875rem;
      color: var(--text-secondary, #6b7280);
      transition: color 0.14s; line-height: 1; flex: 1;
    }

    /* Hover */
    .filter-option:hover { background: rgba(79,110,247,0.05); }
    .filter-option:hover .radio-dot { border-color: #8b9ef7; }
    .filter-option:hover .option-text { color: #4f6ef7; }

    /* Active */
    .filter-option.active { background: rgba(79,110,247,0.09); }
    .filter-option.active .radio-dot {
      border-width: 4px; border-color: #4f6ef7;
      box-shadow: 0 0 0 3px rgba(79,110,247,0.15);
      animation: radioPop 0.35s cubic-bezier(0.34,1.56,0.64,1) both;
    }
    .filter-option.active .option-text { color: #4f6ef7; font-weight: 600; }

    /* ════════ Price Range ════════ */
    .price-inputs { display: flex; align-items: center; gap: 8px; margin-bottom: 11px; }
    .price-sep { color: #b0b6d4; flex-shrink: 0; font-size: 0.9rem; }
    .price-input {
      flex: 1; min-width: 0;
      padding: 9px 11px;
      background: rgba(79,110,247,0.05);
      border: 1.5px solid var(--border, #e4e6f4);
      border-radius: 10px;
      color: var(--text-white, #1a1d2e); font-size: 0.875rem; outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .price-input::placeholder { color: #b8bcd8; }
    .price-input:focus {
      border-color: rgba(79,110,247,0.5);
      box-shadow: 0 0 0 3px rgba(79,110,247,0.1);
    }
    .price-input::-webkit-outer-spin-button,
    .price-input::-webkit-inner-spin-button { -webkit-appearance: none; }
    .price-input[type=number] { -moz-appearance: textfield; }

    .btn-apply {
      width: 100%; padding: 10px;
      background: linear-gradient(135deg, #4f6ef7, #7c3aed);
      color: #fff; border: none; border-radius: 10px;
      cursor: pointer; font-weight: 700; font-size: 0.85rem;
      display: flex; align-items: center; justify-content: center; gap: 7px;
      letter-spacing: 0.3px;
      position: relative; overflow: hidden;
      transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
      box-shadow: 0 4px 14px rgba(79,110,247,0.25);
    }
    .btn-apply::after {
      content: ''; position: absolute;
      top: 0; left: -100%; width: 45%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
      transform: skewX(-18deg); pointer-events: none;
    }
    .btn-apply:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(79,110,247,0.38); }
    .btn-apply:hover::after { animation: btnShine 0.55s ease forwards; }
    .btn-apply:active { transform: none; box-shadow: 0 4px 14px rgba(79,110,247,0.25); }

    /* ════════ Sort By ════════ */
    .select-wrap { position: relative; }
    .sort-select {
      width: 100%; padding: 10px 34px 10px 12px;
      background: rgba(79,110,247,0.05);
      border: 1.5px solid var(--border, #e4e6f4);
      border-radius: 10px;
      color: var(--text-white, #1a1d2e); font-size: 0.875rem; outline: none;
      cursor: pointer;
      appearance: none; -webkit-appearance: none;
      transition: border-color 0.2s;
    }
    .sort-select:focus { border-color: rgba(79,110,247,0.5); }
    .sort-select option { background: var(--bg-card, #fff); color: var(--text-white, #1a1d2e); }
    .select-arrow {
      position: absolute; right: 11px; top: 50%;
      transform: translateY(-50%);
      color: #b0b6d4; font-size: 0.68rem; pointer-events: none;
      transition: transform 0.22s, color 0.2s;
    }
    .sort-select:focus ~ .select-arrow { transform: translateY(-50%) rotate(180deg); color: #4f6ef7; }

    /* ════════ Reset button ════════ */
    .btn-reset {
      width: 100%; padding: 11px;
      background: rgba(239,68,68,0.05);
      border: 1.5px solid rgba(239,68,68,0.25);
      border-radius: 14px; color: #d94f4f;
      font-weight: 600; font-size: 0.875rem; cursor: pointer;
      display: flex; align-items: center; justify-content: center; gap: 7px;
      transition: all 0.2s;
      animation: sidebarCardIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.18s both;
    }
    .btn-reset:hover { background: rgba(239,68,68,0.1); border-color: rgba(239,68,68,0.45); color: #ef4444; }

    /* ════════ Toolbar ════════ */
    .products-toolbar {
      display: flex; justify-content: space-between; align-items: center;
      margin-bottom: 22px; gap: 14px; flex-wrap: wrap;
      animation: toolbarSlideIn 0.45s cubic-bezier(0.16,1,0.3,1) 0.1s both;
    }
    .search-bar {
      display: flex; align-items: center; gap: 8px;
      background: var(--bg-card, #fff);
      border: 1.5px solid var(--border, #e4e6f0);
      border-radius: 50px; padding: 0 6px 0 14px;
      flex: 1; max-width: 420px; min-width: 180px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.06);
      transition: border-color 0.25s, box-shadow 0.25s;
    }
    .search-bar:focus-within,
    .search-bar.focused {
      border-color: rgba(79,110,247,0.5);
      box-shadow: 0 0 0 3px rgba(79,110,247,0.12), 0 2px 10px rgba(79,110,247,0.12);
    }
    .pl-search-icon {
      color: #b8bcd8; font-size: 0.82rem; flex-shrink: 0;
      transition: color 0.25s;
    }
    .search-bar:focus-within .pl-search-icon { color: #4f6ef7; }
    .search-input {
      flex: 1; background: none; border: none;
      color: var(--text-white, #1a1d2e);
      font-size: 0.88rem; padding: 11px 0; outline: none; min-width: 0;
    }
    .search-input::placeholder { color: #c2c6e0; }
    .pl-clear-btn {
      background: none; border: none; padding: 4px 2px;
      color: #b8bcd8; cursor: pointer; flex-shrink: 0;
      font-size: 0.8rem; display: flex; align-items: center;
      transition: color 0.2s, transform 0.2s;
    }
    .pl-clear-btn:hover { color: #ef4444; transform: scale(1.2) rotate(90deg); }
    .search-btn {
      background: linear-gradient(135deg, #4f6ef7, #7c3aed);
      color: #fff; border: none; border-radius: 50%;
      width: 32px; height: 32px; cursor: pointer; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.75rem;
      transition: opacity 0.2s, transform 0.2s;
      box-shadow: 0 2px 8px rgba(79,110,247,0.3);
    }
    .search-btn:hover { opacity: 0.88; transform: scale(1.07); }
    .view-info { font-size: 0.82rem; color: var(--text-muted, #9499be); white-space: nowrap; }

    /* ════════ Products grid ════════ */
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 18px;
    }
    .products-grid > * { animation: cardIn 0.5s cubic-bezier(0.16,1,0.3,1) both; }
    .products-grid > *:nth-child(1)  { animation-delay: 0.04s; }
    .products-grid > *:nth-child(2)  { animation-delay: 0.08s; }
    .products-grid > *:nth-child(3)  { animation-delay: 0.12s; }
    .products-grid > *:nth-child(4)  { animation-delay: 0.16s; }
    .products-grid > *:nth-child(5)  { animation-delay: 0.20s; }
    .products-grid > *:nth-child(6)  { animation-delay: 0.24s; }
    .products-grid > *:nth-child(7)  { animation-delay: 0.28s; }
    .products-grid > *:nth-child(8)  { animation-delay: 0.32s; }
    .products-grid > *:nth-child(n+9) { animation-delay: 0.36s; }
    @keyframes cardIn {
      from { opacity: 0; transform: translateY(20px) scale(0.96); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes sidebarCardIn {
      from { opacity: 0; transform: translateY(14px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes filterOptIn {
      from { opacity: 0; transform: translateX(-10px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes radioPop {
      0%   { transform: scale(0.3); opacity: 0.4; }
      60%  { transform: scale(1.25); }
      100% { transform: scale(1); opacity: 1; }
    }
    @keyframes btnShine {
      to { left: 150%; }
    }
    @keyframes drawerContentIn {
      from { opacity: 0; transform: translateX(-16px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes pageButtonIn {
      from { opacity: 0; transform: scale(0.65) translateY(10px); }
      to   { opacity: 1; transform: scale(1) translateY(0); }
    }
    @keyframes toolbarSlideIn {
      from { opacity: 0; transform: translateY(-10px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ════════ Empty state ════════ */
    .empty-state { text-align: center; padding: 80px 20px; animation: fadeInUp 0.5s ease both; }
    .empty-icon { font-size: 3rem; margin-bottom: 16px; color: var(--text-muted, #9499be); }
    .empty-state h3 { font-size: 1.2rem; font-weight: 700; color: var(--text-white, #1a1d2e); margin-bottom: 8px; }
    .empty-state p { color: var(--text-muted, #9499be); margin-bottom: 20px; font-size: 0.9rem; }

    /* ════════ Pagination ════════ */
    .pagination { display: flex; justify-content: center; gap: 8px; margin-top: 40px; flex-wrap: wrap; }
    .page-btn {
      width: 38px; height: 38px;
      background: var(--bg-card, #fff);
      border: 1.5px solid var(--border, #e4e6f0);
      border-radius: 10px; color: var(--text-secondary, #6b7280);
      cursor: pointer; font-weight: 600; font-size: 0.9rem;
      transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1);
      animation: pageButtonIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both;
    }
    .page-btn:nth-child(1) { animation-delay: 0.08s; }
    .page-btn:nth-child(2) { animation-delay: 0.13s; }
    .page-btn:nth-child(3) { animation-delay: 0.18s; }
    .page-btn:nth-child(4) { animation-delay: 0.23s; }
    .page-btn:nth-child(n+5) { animation-delay: 0.27s; }
    .page-btn:hover:not(:disabled) { border-color: rgba(79,110,247,0.4); color: #4f6ef7; transform: translateY(-2px); }
    .page-btn.active { background: linear-gradient(135deg,#4f6ef7,#7c3aed); color: #fff; border-color: transparent; box-shadow: 0 4px 12px rgba(79,110,247,0.28); }
    .page-btn:disabled { opacity: 0.35; cursor: not-allowed; }

    /* ════════ Toast ════════ */
    .toast {
      position: fixed; bottom: 30px; right: 30px;
      background: var(--bg-card, #fff);
      color: var(--text-white, #1a1d2e);
      border: 1.5px solid rgba(79,110,247,0.3);
      padding: 14px 24px; border-radius: 14px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
      z-index: 9999; font-weight: 600;
      animation: toastIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both;
    }
    @keyframes toastIn { from{transform:translateX(80px) scale(0.9);opacity:0} to{transform:translateX(0) scale(1);opacity:1} }
    @media (max-width: 768px) {
      .toast { bottom: 84px; right: 16px; left: 16px; text-align: center; }
    }

    /* ════════ Responsive ════════ */
    @media (max-width: 900px) {
      .content-layout { grid-template-columns: 1fr; }
      .btn-filter-toggle { display: flex; animation: sidebarCardIn 0.45s cubic-bezier(0.34,1.56,0.64,1) 0.06s both; }
      .sidebar {
        position: fixed; top: 0; left: 0; bottom: 0; height: 100%;
        width: 288px; max-width: 85vw; z-index: 500;
        overflow: hidden;
        transform: translateX(-110%);
        transition: transform 0.32s cubic-bezier(0.16,1,0.3,1);
        background: var(--bg-secondary, #f6f7fd);
        padding: 0;
        border-radius: 0 22px 22px 0;
        box-shadow: 8px 0 40px rgba(100,116,200,0.18);
        display: flex !important; flex-direction: column; gap: 0;
      }
      .sidebar.sidebar-open { transform: translateX(0); }
      .sidebar-header {
        display: flex;
        padding: 16px 18px; flex-shrink: 0;
        border-bottom: 1.5px solid var(--border, #e8eaf4);
        background: var(--bg-secondary, #f6f7fd);
      }
      .sidebar-card {
        flex: 1; overflow-y: auto; overflow-x: hidden;
        border-radius: 0; border: none; box-shadow: none;
        padding-bottom: env(safe-area-inset-bottom, 0px);
      }
      .btn-reset {
        flex-shrink: 0; border-radius: 0;
        padding: 14px 18px;
        border-top: 1.5px solid var(--border, #e8eaf4);
        border-bottom: none; border-left: none; border-right: none;
        background: var(--bg-secondary, #f6f7fd);
        margin-bottom: env(safe-area-inset-bottom, 0px);
      }
      .filter-options { max-height: none; }
      /* Drawer content stagger on open */
      .sidebar-open .sidebar-header { animation: drawerContentIn 0.3s cubic-bezier(0.16,1,0.3,1) 0.06s both; }
      .sidebar-open .filter-section { animation: drawerContentIn 0.4s cubic-bezier(0.16,1,0.3,1) both; }
      .sidebar-open .filter-section:nth-child(1) { animation-delay: 0.10s; }
      .sidebar-open .filter-section:nth-child(3) { animation-delay: 0.17s; }
      .sidebar-open .filter-section:nth-child(5) { animation-delay: 0.24s; }
      .sidebar-open .btn-reset { animation: drawerContentIn 0.4s cubic-bezier(0.16,1,0.3,1) 0.30s both; }
      /* Re-stagger filter options on drawer open */
      .sidebar-open .filter-option { animation: drawerContentIn 0.3s cubic-bezier(0.16,1,0.3,1) both; }
      .sidebar-open .filter-option:nth-child(1)  { animation-delay: 0.18s; }
      .sidebar-open .filter-option:nth-child(2)  { animation-delay: 0.21s; }
      .sidebar-open .filter-option:nth-child(3)  { animation-delay: 0.24s; }
      .sidebar-open .filter-option:nth-child(4)  { animation-delay: 0.27s; }
      .sidebar-open .filter-option:nth-child(5)  { animation-delay: 0.30s; }
      .sidebar-open .filter-option:nth-child(n+6){ animation-delay: 0.33s; }
    }
    @media (max-width: 600px) {
      .page-container { padding: 16px 14px 80px; }
      .products-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
      .products-toolbar { flex-direction: column; align-items: stretch; }
      .search-bar { max-width: 100%; }
      .view-info { text-align: right; }
    }
    @media (max-width: 420px) {
      .products-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  loading = false;
  plSearchFocused = false;
  total = 0;
  currentPage = 1;
  totalPages = 1;
  searchQuery = '';
  selectedCategory = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;
  sortBy = '';
  filterOpen = false;

  readonly sortOptions: SelectOption[] = [
    { value: '',           label: 'Newest First' },
    { value: 'price_asc',  label: 'Price: Low to High' },
    { value: 'price_desc', label: 'Price: High to Low' },
    { value: 'rating',     label: 'Best Rating' }
  ];

  get activeFilterCount(): number {
    let count = 0;
    if (this.selectedCategory) count++;
    if (this.minPrice !== null || this.maxPrice !== null) count++;
    if (this.sortBy) count++;
    return count;
  }

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private msgService: NotificationService
  ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe({
      next: (res) => this.categories = res.categories || []
    });
    this.route.queryParams.subscribe(params => {
      if (params['search']) this.searchQuery = params['search'];
      if (params['category']) this.selectedCategory = params['category'];
      this.loadProducts();
    });
  }

  get pageTitle(): string {
    if (this.searchQuery) return `Search: "${this.searchQuery}"`;
    if (this.selectedCategory) {
      const cat = this.categories.find(c => c._id === this.selectedCategory);
      return cat ? cat.name : 'Products';
    }
    return 'All Products';
  }

  loadProducts() {
    this.loading = true;
    const filter: any = { page: this.currentPage, limit: 12 };
    if (this.searchQuery) filter.search = this.searchQuery;
    if (this.selectedCategory) filter.category = this.selectedCategory;
    if (this.minPrice !== null) filter.minPrice = this.minPrice;
    if (this.maxPrice !== null) filter.maxPrice = this.maxPrice;
    if (this.sortBy) filter.sort = this.sortBy;

    this.productService.getProducts(filter).subscribe({
      next: (res) => {
        this.products = res.products || [];
        this.total = res.total || 0;
        this.totalPages = res.pages || 1;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  onFilterChange() {
    this.currentPage = 1;
    this.loadProducts();
  }

  resetFilters() {
    this.searchQuery = '';
    this.selectedCategory = '';
    this.minPrice = null;
    this.maxPrice = null;
    this.sortBy = '';
    this.currentPage = 1;
    this.loadProducts();
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.loadProducts();
    window.scrollTo(0, 0);
  }

  getPages(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) pages.push(i);
    return pages;
  }

  onAddToCart(product: Product) {
    if (!this.authService.isLoggedIn) { this.router.navigate(['/auth/login']); return; }
    this.cartService.addToCart(product._id).subscribe({
      next: () => this.msgService.success('Added to cart!'),
      error: (err) => this.msgService.error(err.error?.message || 'Failed to add to cart')
    });
  }

  onAddToWishlist(product: Product) {
    if (!this.authService.isLoggedIn) { this.router.navigate(['/auth/login']); return; }
    this.wishlistService.addToWishlist(product._id).subscribe({
      next: () => this.msgService.success('Added to wishlist!'),
      error: () => this.msgService.error('Failed to add to wishlist')
    });
  }

  onQuickView(product: Product) {
    this.router.navigate(['/products', product._id]);
  }
}
