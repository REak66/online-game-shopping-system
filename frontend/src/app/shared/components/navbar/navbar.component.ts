import { Component, OnInit, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, filter, takeUntil } from 'rxjs/operators';
import { AuthService } from '../../../core/services/auth.service';
import { CartService } from '../../../core/services/cart.service';
import { ProductService } from '../../../core/services/product.service';
import { NotificationService } from '../../services/notification.service';
import { PopconfirmDirective } from '../popconfirm/popconfirm.directive';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, PopconfirmDirective],
  template: `
    <nav class="navbar">
      <div class="navbar-container">

        <!-- Search -->
        <div class="navbar-search" [class.focused]="searchFocused" (clickOutside)="closeSuggestions()">
          <i class="fas fa-magnifying-glass search-icon" [class.icon-active]="searchFocused"></i>
          <input #searchInput
            type="text"
            [(ngModel)]="searchQuery"
            (ngModelChange)="onInput($event)"
            (keydown)="onKeyDown($event)"
            (focus)="onFocus()"
            (keyup.enter)="onSearch()"
            placeholder="Best Games..."
            class="search-input"
            autocomplete="off" />
          <!-- Loading spinner -->
          <span class="search-spinner" *ngIf="suggestionsLoading">
            <i class="fas fa-circle-notch fa-spin"></i>
          </span>
          <!-- Clear button -->
          <button class="clear-btn" *ngIf="searchQuery && !suggestionsLoading"
            (click)="clearSearch()" title="Clear search" tabindex="-1">
            <i class="fas fa-xmark"></i>
          </button>
          <button class="filter-btn" title="Filters" (click)="goToProducts()">
            <i class="fas fa-sliders"></i>
          </button>

          <!-- Suggestions dropdown -->
          <div class="suggestions-drop" *ngIf="suggestionsOpen && suggestions.length">
            <div class="suggestions-header">
              <i class="fas fa-magnifying-glass"></i> Results for "{{ searchQuery }}"
            </div>
            <button class="suggestion-item"
              *ngFor="let s of suggestions; let i = index"
              [class.highlighted]="i === selectedSuggestion"
              (mouseenter)="selectedSuggestion = i"
              (click)="pickSuggestion(s)">
              <img class="sug-img" [src]="getSugImage(s)"
                onerror="this.src='https://placehold.co/40x40/1e2235/4f6ef7?text=G'" [alt]="s.name" />
              <div class="sug-info">
                <span class="sug-name">{{ s.name }}</span>
                <span class="sug-price">\${{ s.price | number:'1.2-2' }}</span>
              </div>
              <span class="sug-cat" *ngIf="s.category">{{ $any(s.category)?.name || s.category }}</span>
            </button>
            <button class="sug-view-all" (click)="onSearch()">
              <i class="fas fa-arrow-right"></i> View all results
            </button>
          </div>
        </div>

        <!-- Right actions -->
        <div class="navbar-actions">
          <!-- Connect / Login -->
          <ng-container *ngIf="!isLoggedIn">
            <a routerLink="/auth/login" class="btn-connect"><i class="fas fa-user-plus"></i> Connect</a>
          </ng-container>

          <!-- Lang tag -->
          <span class="lang-tag"><i class="fas fa-globe"></i> Eng</span>

          <!-- Theme toggle -->
          <button class="theme-toggle-btn" (click)="toggleTheme()"
            [title]="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
            <i class="fas" [class.fa-sun]="isDarkMode" [class.fa-moon]="!isDarkMode"></i>
          </button>

          <!-- User menu -->
          <div class="user-menu" *ngIf="isLoggedIn">
            <button class="user-btn" (click)="toggleMenu()">
              <span class="avatar">
                <img *ngIf="userAvatar" [src]="userAvatar" alt="avatar" class="avatar-img"
                  (error)="onAvatarError($event)" />
                <span class="avatar-initial" [style.display]="userAvatar ? 'none' : 'flex'">{{ userInitial }}</span>
              </span>
            </button>
            <div class="dropdown" *ngIf="menuOpen">
              <div class="dd-header">{{ userName }}</div>
              <a routerLink="/profile" class="dropdown-item" (click)="closeMenu()">
                <i class="fas fa-user"></i>
                Profile
              </a>
              <a routerLink="/orders" class="dropdown-item" (click)="closeMenu()">
                <i class="fas fa-receipt"></i>
                Orders
              </a>
              <a routerLink="/wishlist" class="dropdown-item" (click)="closeMenu()">
                <i class="fas fa-heart"></i>
                Wishlist
              </a>
              <div class="dd-divider" *ngIf="isAdmin"></div>
              <a routerLink="/admin" class="dropdown-item" *ngIf="isAdmin" (click)="closeMenu()">
                <i class="fas fa-gear"></i>
                Admin
              </a>
              <div class="dd-divider"></div>
              <button class="dropdown-item danger"
                appPopconfirm="Sign out?"
                popDescription="Are you sure you want to sign out?"
                popOkText="Yes"
                popCancelText="No"
                popPlacement="bottom"
                (popConfirm)="logout()">
                <i class="fas fa-right-from-bracket"></i>
                Sign Out
              </button>
            </div>
          </div>

          <!-- Mobile search toggle (mobile only) -->
          <button class="mobile-search-btn" [class.active]="searchOpen" (click)="toggleSearch()" title="Search">
            <i class="fas" [class.fa-magnifying-glass]="!searchOpen" [class.fa-xmark]="searchOpen"></i>
          </button>

          <button class="mobile-menu-btn" (click)="toggleMobileMenu()">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>

      <!-- Mobile search bar row -->
      <div class="mobile-search-row" *ngIf="searchOpen">
        <div class="mobile-search-inner" [class.focused]="mobileSearchFocused">
          <i class="fas fa-magnifying-glass msr-icon"></i>
          <input type="text" [(ngModel)]="searchQuery"
            (ngModelChange)="onInput($event)"
            (keydown)="onKeyDown($event)"
            (focus)="mobileSearchFocused = true"
            (blur)="mobileSearchFocused = false"
            (keyup.enter)="onSearch(); searchOpen = false"
            placeholder="Search games..." class="msr-input"
            autocomplete="off"
            autofocus />
          <button class="msr-clear" *ngIf="searchQuery" (click)="clearSearch()" tabindex="-1">
            <i class="fas fa-xmark"></i>
          </button>
          <button class="msr-go" (click)="onSearch(); searchOpen = false">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
        <!-- Mobile suggestions -->
        <div class="mobile-suggestions" *ngIf="suggestionsOpen && suggestions.length">
          <button class="suggestion-item"
            *ngFor="let s of suggestions; let i = index"
            [class.highlighted]="i === selectedSuggestion"
            (click)="pickSuggestion(s); searchOpen = false">
            <img class="sug-img" [src]="getSugImage(s)"
              onerror="this.src='https://placehold.co/40x40/1e2235/4f6ef7?text=G'" [alt]="s.name" />
            <div class="sug-info">
              <span class="sug-name">{{ s.name }}</span>
              <span class="sug-price">\${{ s.price | number:'1.2-2' }}</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile drawer -->
      <div class="mobile-menu" *ngIf="mobileMenuOpen">
        <a routerLink="/products" class="mobile-nav-link" (click)="closeMobileMenu()"><i class="fas fa-gamepad"></i> All Games</a>
        <a routerLink="/cart" class="mobile-nav-link" (click)="closeMobileMenu()"><i class="fas fa-cart-shopping"></i> Cart ({{ cartCount }})</a>
        <ng-container *ngIf="isLoggedIn">
          <a routerLink="/orders" class="mobile-nav-link" (click)="closeMobileMenu()"><i class="fas fa-receipt"></i> Orders</a>
          <a routerLink="/wishlist" class="mobile-nav-link" (click)="closeMobileMenu()"><i class="fas fa-heart"></i> Wishlist</a>
          <a routerLink="/profile" class="mobile-nav-link" (click)="closeMobileMenu()"><i class="fas fa-user"></i> Profile</a>
          <a routerLink="/admin" class="mobile-nav-link" *ngIf="isAdmin" (click)="closeMobileMenu()"><i class="fas fa-gear"></i> Admin</a>
          <button class="mobile-nav-link danger"
            appPopconfirm="Sign out?"
            popDescription="Are you sure you want to sign out?"
            popOkText="Yes"
            popCancelText="No"
            popPlacement="top"
            (popConfirm)="logout()"><i class="fas fa-right-from-bracket"></i> Sign Out</button>
        </ng-container>
        <ng-container *ngIf="!isLoggedIn">
          <a routerLink="/auth/login" class="mobile-nav-link" (click)="closeMobileMenu()">Login</a>
          <a routerLink="/auth/register" class="mobile-nav-link" (click)="closeMobileMenu()">Sign Up</a>
        </ng-container>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: #161929;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      position: sticky; top: 0; z-index: 200;
      animation: navbarIn 0.4s ease both;
    }
    @keyframes navbarIn {
      from { opacity: 0; transform: translateY(-10px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .navbar-container {
      max-width: 1400px; margin: 0 auto;
      padding: 0 24px; height: 68px;
      display: flex; align-items: center; gap: 16px;
    }

    /* Search */
    .navbar-search {
      flex: 1; max-width: 360px;
      display: flex; align-items: center; gap: 10px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.09);
      border-radius: 50px; padding: 0 14px;
      position: relative;
      transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
    }
    .navbar-search.focused {
      border-color: rgba(79,110,247,0.6);
      box-shadow: 0 0 0 3px rgba(79,110,247,0.15), 0 4px 20px rgba(79,110,247,0.15);
      background: rgba(79,110,247,0.05);
    }
    .search-icon {
      color: #5a5e7a; flex-shrink: 0; font-size: 0.9rem;
      transition: color 0.25s;
    }
    .search-icon.icon-active { color: #818cf8; }
    .filter-btn i { font-size: 0.9rem; }
    .mobile-menu-btn i { font-size: 1.15rem; }
    .dropdown-item i { font-size: 0.85rem; width: 16px; text-align: center; }
    .search-input {
      flex: 1; background: none; border: none;
      color: #e0e4ff; font-size: 0.88rem; padding: 10px 0;
      outline: none; min-width: 0;
    }
    .search-input::placeholder { color: #5a5e7a; }
    /* Clear button */
    .clear-btn {
      background: none; border: none;
      color: #5a5e7a; padding: 4px 2px; cursor: pointer;
      display: flex; align-items: center;
      font-size: 0.8rem;
      transition: color 0.2s, transform 0.2s;
      flex-shrink: 0;
    }
    .clear-btn:hover { color: #ef4444; transform: scale(1.2) rotate(90deg); }
    /* Search spinner */
    .search-spinner {
      color: #818cf8; font-size: 0.78rem; flex-shrink: 0;
    }
    .filter-btn {
      background: none; border: none;
      color: #5a5e7a; padding: 4px; cursor: pointer;
      display: flex; align-items: center;
      transition: color 0.2s;
      flex-shrink: 0;
    }
    .filter-btn:hover { color: #a0a4c0; }

    /* ── Suggestions Dropdown ── */
    .suggestions-drop {
      position: absolute; top: calc(100% + 10px); left: 0; right: 0;
      background: #1e2235;
      border: 1px solid rgba(255,255,255,0.09);
      border-radius: 16px; overflow: hidden;
      box-shadow: 0 24px 60px rgba(0,0,0,0.55);
      z-index: 600;
      animation: dropdownIn 0.22s cubic-bezier(0.16,1,0.3,1) both;
    }
    .suggestions-header {
      padding: 10px 16px 8px;
      font-size: 0.72rem; font-weight: 600; color: #5a5e7a;
      text-transform: uppercase; letter-spacing: 0.06em;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      display: flex; align-items: center; gap: 6px;
    }
    .suggestions-header i { color: #4f6ef7; }
    .suggestion-item {
      width: 100%; display: flex; align-items: center; gap: 12px;
      padding: 10px 14px; background: none; border: none;
      cursor: pointer; text-align: left;
      transition: background 0.15s;
    }
    .suggestion-item.highlighted,
    .suggestion-item:hover { background: rgba(79,110,247,0.08); }
    .sug-img {
      width: 38px; height: 38px; border-radius: 8px;
      object-fit: cover; flex-shrink: 0;
    }
    .sug-info { flex: 1; min-width: 0; }
    .sug-name {
      display: block; color: #e0e4ff; font-size: 0.88rem;
      font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .sug-price {
      display: block; color: #818cf8; font-size: 0.78rem; margin-top: 1px;
    }
    .sug-cat {
      flex-shrink: 0; font-size: 0.7rem; font-weight: 600;
      color: #5a5e7a; background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 50px; padding: 2px 9px;
    }
    .sug-view-all {
      width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;
      padding: 10px 14px; background: none;
      border: none; border-top: 1px solid rgba(255,255,255,0.06);
      color: #4f6ef7; font-size: 0.82rem; font-weight: 700;
      cursor: pointer; transition: background 0.15s, color 0.15s;
    }
    .sug-view-all:hover { background: rgba(79,110,247,0.08); color: #818cf8; }
    /* Right */
    .navbar-actions { display: flex; align-items: center; gap: 12px; margin-left: auto; }
    .btn-connect {
      padding: 8px 20px;
      background: linear-gradient(135deg,#4f6ef7,#7c3aed);
      color: white; border-radius: 50px;
      font-size: 0.85rem; font-weight: 700;
      text-decoration: none; transition: opacity 0.2s;
      box-shadow: 0 4px 15px rgba(79,110,247,0.35);
    }
    .btn-connect:hover { opacity: 0.88; }
    .lang-tag {
      padding: 7px 14px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.09);
      border-radius: 50px; font-size: 0.8rem; color: #a0a4c0; white-space: nowrap;
    }
    /* User menu */
    .user-menu { position: relative; }
    .user-btn {
      background: none; border: none; cursor: pointer; padding: 0;
    }
    .avatar {
      width: 36px; height: 36px;
      background: linear-gradient(135deg,#4f6ef7,#7c3aed);
      color: white; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 0.9rem;
      overflow: hidden; position: relative;
    }
    .avatar-img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; display: block; }
    .avatar-initial { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
    .dropdown {
      position: absolute; right: 0; top: calc(100% + 12px);
      background: #1e2235;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 14px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.5);
      min-width: 200px; padding: 8px; z-index: 500;
      animation: dropdownIn 0.22s cubic-bezier(0.16,1,0.3,1) both;
    }
    @keyframes dropdownIn {
      from { opacity: 0; transform: translateY(-10px) scale(0.96); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    .dd-header {
      padding: 8px 14px 12px;
      color: #fff; font-weight: 700; font-size: 0.92rem;
      border-bottom: 1px solid rgba(255,255,255,0.07); margin-bottom: 6px;
    }
    .dropdown-item {
      display: flex; align-items: center; gap: 10px;
      padding: 10px 14px;
      color: #a0a4c0; font-size: 0.88rem;
      border-radius: 9px; text-decoration: none;
      transition: all 0.18s;
      background: none; border: none; width: 100%; text-align: left; cursor: pointer;
    }
    .dropdown-item:hover { background: rgba(255,255,255,0.06); color: #fff; }
    .dropdown-item.danger { color: #ef4444; }
    .dropdown-item.danger:hover { background: rgba(239,68,68,0.1); }
    .dd-divider { height: 1px; background: rgba(255,255,255,0.07); margin: 6px 0; }
    /* Theme toggle button */
    .theme-toggle-btn {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.09);
      border-radius: 50%; width: 36px; height: 36px;
      color: #a0a4c0; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.9rem; flex-shrink: 0;
      transition: background 0.25s, color 0.25s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s;
    }
    .theme-toggle-btn:hover {
      background: rgba(251,191,36,0.12);
      border-color: rgba(251,191,36,0.35);
      color: #fbbf24;
      transform: rotate(20deg) scale(1.1);
      box-shadow: 0 0 0 3px rgba(251,191,36,0.12);
    }
    .theme-toggle-btn i {
      transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
    }
    /* dark→light flips the icon */
    .theme-toggle-btn:hover i { transform: rotate(30deg); }
    /* Mobile */
    .mobile-menu-btn {
      display: none; background: none; border: none;
      color: #a0a4c0; padding: 6px; cursor: pointer;
    }
    .mobile-menu {
      background: #161929;
      border-top: 1px solid rgba(255,255,255,0.07);
      padding: 12px 20px;
      animation: mobileMenuIn 0.3s ease both;
      overflow: hidden;
    }
    @keyframes mobileMenuIn {
      from { opacity: 0; transform: translateY(-12px); max-height: 0; }
      to   { opacity: 1; transform: translateY(0); max-height: 600px; }
    }
    .mobile-search { margin-bottom: 12px; }
    .mobile-search .search-input {
      width: 100%; background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.09);
      border-radius: 50px; padding: 10px 16px;
      color: #e0e4ff; font-size: 0.88rem; outline: none;
    }
    .mobile-nav-link {
      display: block; padding: 12px 4px;
      color: #a0a4c0; text-decoration: none;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      font-weight: 500; font-size: 0.95rem;
      background: none; border-left: none; border-right: none; border-top: none;
      width: 100%; text-align: left; cursor: pointer;
      transition: color 0.2s;
    }
    .mobile-nav-link:hover { color: #fff; }
    .mobile-nav-link.danger { color: #ef4444; }
    @media (max-width: 900px) {
      .lang-tag { display: none; }
    }
    /* ── Mobile search row ── */
    .mobile-search-row {
      background: linear-gradient(135deg, rgba(22,25,41,0.98) 0%, rgba(20,22,38,0.98) 100%);
      border-top: 1px solid rgba(79,110,247,0.18);
      padding: 12px 16px;
      overflow: hidden;
      animation: msrSlideDown 0.38s cubic-bezier(0.16,1,0.3,1) both;
      box-shadow: 0 8px 24px rgba(0,0,0,0.35);
    }
    @keyframes msrSlideDown {
      from { opacity: 0; max-height: 0; padding-top: 0; padding-bottom: 0; transform: translateY(-6px); }
      to   { opacity: 1; max-height: 80px; padding-top: 12px; padding-bottom: 12px; transform: translateY(0); }
    }
    .mobile-search-inner {
      display: flex; align-items: center; gap: 10px;
      background: rgba(255,255,255,0.05);
      border: 1.5px solid rgba(79,110,247,0.4);
      border-radius: 50px; padding: 0 14px;
      box-shadow: 0 0 0 0 rgba(79,110,247,0.25);
      animation: msrGlowIn 0.55s cubic-bezier(0.16,1,0.3,1) 0.12s both;
      transition: border-color 0.25s, box-shadow 0.25s;
    }
    .mobile-search-inner:focus-within {
      border-color: rgba(79,110,247,0.75);
      box-shadow: 0 0 0 3px rgba(79,110,247,0.18), 0 4px 20px rgba(79,110,247,0.2);
    }
    @keyframes msrGlowIn {
      0%   { opacity: 0; transform: scaleX(0.88); box-shadow: 0 0 0 0 rgba(79,110,247,0); }
      60%  { opacity: 1; transform: scaleX(1.02); }
      100% { transform: scaleX(1); box-shadow: 0 0 0 3px rgba(79,110,247,0.12); }
    }
    .msr-icon {
      color: #4f6ef7; font-size: 0.9rem; flex-shrink: 0;
      animation: msrIconBounce 0.45s cubic-bezier(0.34,1.56,0.64,1) 0.2s both;
    }
    @keyframes msrIconBounce {
      from { opacity: 0; transform: scale(0.4) rotate(-20deg); }
      to   { opacity: 1; transform: scale(1) rotate(0deg); }
    }
    .msr-input {
      flex: 1; background: none; border: none;
      color: #e0e4ff; font-size: 0.9rem; padding: 11px 0;
      outline: none;
      animation: msrTextIn 0.4s cubic-bezier(0.16,1,0.3,1) 0.22s both;
    }
    @keyframes msrTextIn {
      from { opacity: 0; transform: translateX(-10px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    .msr-input::placeholder { color: #5a5e7a; }
    .msr-clear {
      background: none; border: none;
      color: #5a5e7a; padding: 4px; cursor: pointer;
      display: flex; align-items: center; font-size: 0.82rem;
      flex-shrink: 0; transition: color 0.2s, transform 0.2s;
    }
    .msr-clear:hover { color: #ef4444; transform: rotate(90deg) scale(1.2); }
    .msr-go {
      background: linear-gradient(135deg, #4f6ef7, #7c3aed);
      border: none; border-radius: 50%;
      width: 32px; height: 32px; flex-shrink: 0;
      color: #fff; font-size: 0.82rem; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 3px 10px rgba(79,110,247,0.45);
      animation: msrBtnPop 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.28s both;
      transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.22s;
    }
    @keyframes msrBtnPop {
      from { opacity: 0; transform: scale(0) rotate(-90deg); }
      to   { opacity: 1; transform: scale(1) rotate(0deg); }
    }
    .msr-go:hover { transform: scale(1.15) rotate(15deg); box-shadow: 0 6px 20px rgba(79,110,247,0.65); }
    .msr-go:active { transform: scale(0.92); }
    /* Mobile suggestions */
    .mobile-suggestions {
      background: #1e2235;
      border-top: 1px solid rgba(79,110,247,0.15);
      max-height: 280px; overflow-y: auto;
    }
    .mobile-suggestions .suggestion-item {
      width: 100%; display: flex; align-items: center; gap: 12px;
      padding: 10px 14px; background: none; border: none;
      cursor: pointer; text-align: left;
      transition: background 0.15s;
    }
    .mobile-suggestions .suggestion-item:hover,
    .mobile-suggestions .suggestion-item.highlighted { background: rgba(79,110,247,0.08); }
    /* Mobile search btn */
    .mobile-search-btn { display: none; }
    @media (max-width: 768px) {
      .navbar-search { display: none; }
      .mobile-menu-btn { display: flex; }
      .mobile-search-btn {
        display: flex; align-items: center; justify-content: center;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.09);
        border-radius: 50%; width: 36px; height: 36px;
        color: #a0a4c0; cursor: pointer;
        font-size: 0.95rem;
        transition: background 0.22s cubic-bezier(0.34,1.56,0.64,1),
                    border-color 0.22s, color 0.22s,
                    transform 0.22s cubic-bezier(0.34,1.56,0.64,1),
                    box-shadow 0.22s;
      }
      .mobile-search-btn i {
        transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
      }
      .mobile-search-btn:hover {
        background: rgba(79,110,247,0.1);
        border-color: rgba(79,110,247,0.35);
        color: #818cf8;
        transform: scale(1.08);
      }
      .mobile-search-btn.active {
        background: rgba(79,110,247,0.18);
        border-color: rgba(79,110,247,0.5);
        color: #4f6ef7;
        box-shadow: 0 0 0 3px rgba(79,110,247,0.15);
        transform: scale(1.05);
      }
      .mobile-search-btn.active i {
        transform: rotate(90deg) scale(1.1);
      }
      .btn-connect { display: none; }
    }
  `]
})
export class NavbarComponent implements OnInit, OnDestroy {
  searchQuery = '';
  menuOpen = false;
  mobileMenuOpen = false;
  searchOpen = false;
  searchFocused = false;
  mobileSearchFocused = false;
  cartCount = 0;
  isDarkMode = true;

  suggestions: any[] = [];
  suggestionsOpen = false;
  suggestionsLoading = false;
  selectedSuggestion = -1;

  private search$ = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(
    public authService: AuthService,
    private cartService: CartService,
    private productService: ProductService,
    private notificationService: NotificationService,
    private router: Router,
    private elRef: ElementRef
  ) {}

  ngOnInit() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      this.isDarkMode = false;
      document.body.classList.add('light-mode');
    } else {
      this.isDarkMode = true;
      document.body.classList.remove('light-mode');
    }

    this.cartService.cart$.subscribe(cart => {
      this.cartCount = cart?.items?.length || 0;
    });

    // Sync search input when navigating to /products with a search param
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      takeUntil(this.destroy$)
    ).subscribe((e: any) => {
      const url: string = e.urlAfterRedirects || '';
      if (url.startsWith('/products')) {
        const qs = url.split('?')[1] || '';
        const params = new URLSearchParams(qs);
        this.searchQuery = params.get('search') || '';
      }
    });

    // Debounced suggestions pipeline
    this.search$.pipe(
      debounceTime(280),
      distinctUntilChanged(),
      takeUntil(this.destroy$),
      switchMap(query => {
        if (query.trim().length < 2) {
          this.suggestions = [];
          this.suggestionsOpen = false;
          this.suggestionsLoading = false;
          return [];
        }
        this.suggestionsLoading = true;
        return this.productService.getProducts({ search: query, limit: 6 });
      })
    ).subscribe({
      next: (res: any) => {
        this.suggestions = (res?.products || []).slice(0, 6);
        this.suggestionsOpen = this.suggestions.length > 0;
        this.suggestionsLoading = false;
        this.selectedSuggestion = -1;
      },
      error: () => { this.suggestionsLoading = false; }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.closeSuggestions();
    }
  }

  private readonly apiBase = environment.apiUrl.replace('/api', '');

  get isLoggedIn(): boolean { return this.authService.isLoggedIn; }
  get isAdmin(): boolean { return this.authService.isAdmin; }
  get userName(): string { return this.authService.currentUser?.name || ''; }
  get userInitial(): string { return this.userName.charAt(0).toUpperCase(); }
  get userAvatar(): string {
    const av = this.authService.currentUser?.avatar;
    if (!av) return '';
    if (av.startsWith('http')) return av;
    return `${this.apiBase}${av}`;
  }
  onAvatarError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    const initial = img.nextElementSibling as HTMLElement;
    if (initial) initial.style.display = 'flex';
  }

  onInput(value: string) {
    this.selectedSuggestion = -1;
    this.search$.next(value);
  }

  onFocus() {
    this.searchFocused = true;
    if (this.searchQuery.trim().length >= 2 && this.suggestions.length) {
      this.suggestionsOpen = true;
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (!this.suggestionsOpen) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.selectedSuggestion = Math.min(this.selectedSuggestion + 1, this.suggestions.length - 1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.selectedSuggestion = Math.max(this.selectedSuggestion - 1, -1);
    } else if (event.key === 'Escape') {
      this.closeSuggestions();
    } else if (event.key === 'Enter' && this.selectedSuggestion >= 0) {
      event.preventDefault();
      this.pickSuggestion(this.suggestions[this.selectedSuggestion]);
    }
  }

  pickSuggestion(product: any) {
    this.searchQuery = product.name;
    this.closeSuggestions();
    this.router.navigate(['/products', product._id]);
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      this.closeSuggestions();
      this.router.navigate(['/products'], { queryParams: { search: this.searchQuery.trim() } });
    }
  }

  clearSearch() {
    this.searchQuery = '';
    this.search$.next('');
    this.closeSuggestions();
  }

  closeSuggestions() {
    this.suggestionsOpen = false;
    this.searchFocused = false;
    this.selectedSuggestion = -1;
  }

  getSugImage(product: any): string {
    if (!product.images?.length) return '';
    const img = product.images[0];
    if (img.startsWith('http')) return img;
    return `http://localhost:5000/uploads/${img}`;
  }

  goToProducts() {
    this.router.navigate(['/products']);
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  }

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }
  toggleMobileMenu() { this.mobileMenuOpen = !this.mobileMenuOpen; if (this.mobileMenuOpen) this.searchOpen = false; }
  closeMobileMenu() { this.mobileMenuOpen = false; }
  toggleSearch() {
    this.searchOpen = !this.searchOpen;
    if (this.searchOpen) { this.mobileMenuOpen = false; }
    else { this.closeSuggestions(); }
  }

  logout() {
    this.authService.logout();
    this.cartService.clearLocalCart();
    this.closeMenu();
    this.closeMobileMenu();
    this.notificationService.success('Signed out successfully');
    this.router.navigate(['/']);
  }
}
