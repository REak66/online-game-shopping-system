import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../core/services/product.service';
import { CategoryService } from '../../../core/services/category.service';
import { Product, Category } from '../../../core/models';
import { ConfirmService } from '../../../shared/services/confirm.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { SelectComponent, SelectOption } from '../../../shared/components/select/select.component';
import { SpinComponent } from '../../../shared/components/spin/spin.component';

@Component({
  selector: 'app-manage-products',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, SelectComponent, SpinComponent],
  template: `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="sidebar-brand"><i class="fas fa-gear"></i> Admin Panel</div>
        <nav class="sidebar-nav">
          <a routerLink="/admin" class="nav-item"><i class="fas fa-chart-bar"></i> Dashboard</a>
          <a routerLink="/admin/products" routerLinkActive="active" class="nav-item"><i class="fas fa-box"></i> Products</a>
          <a routerLink="/admin/categories" routerLinkActive="active" class="nav-item"><i class="fas fa-tag"></i> Categories</a>
          <a routerLink="/admin/orders" routerLinkActive="active" class="nav-item"><i class="fas fa-receipt"></i> Orders</a>
          <a routerLink="/admin/users" routerLinkActive="active" class="nav-item"><i class="fas fa-users"></i> Users</a>
          <div class="divider"></div>
          <a routerLink="/" class="nav-item"><i class="fas fa-house"></i> Back to Store</a>
        </nav>
      </aside>
      <main class="admin-main">
        <div class="page-header">
          <h1>Manage Products</h1>
          <button class="btn-add" (click)="openModal()">+ Add Product</button>
        </div>

        <div class="section-card">
          <app-spin *ngIf="loading" size="lg" tip="Loading products..."></app-spin>
          <ng-container *ngIf="!loading">
          <div class="table-toolbar">
            <div class="toolbar-row">
              <div class="search-wrap">
                <span class="filter-select-label"><i class="fas fa-magnifying-glass"></i> Search</span>
                <div class="search-field">
                  <i class="fas fa-magnifying-glass search-ico"></i>
                  <input
                    type="text"
                    [(ngModel)]="searchQuery"
                    placeholder="Search by name, category…"
                    class="search-input"
                    autocomplete="off" />
                  <button class="search-clear" *ngIf="searchQuery" (click)="searchQuery = ''" title="Clear">
                    <i class="fas fa-xmark"></i>
                  </button>
                </div>
              </div>
              <div class="filter-selects">
                <div class="filter-select-item">
                  <span class="filter-select-label"><i class="fas fa-tag"></i> Category</span>
                  <app-select
                    [(ngModel)]="selectedCategories"
                    [options]="categoryFilterOptions"
                    placeholder="Choose tags..."
                    [multiple]="true"
                    [searchable]="true"
                    [clearable]="true">
                  </app-select>
                </div>
                <div class="filter-select-item">
                  <span class="filter-select-label"><i class="fas fa-circle-dot"></i> Status</span>
                  <app-select
                    [(ngModel)]="selectedStatus"
                    [options]="statusFilterOptions"
                    placeholder="All statuses"
                    [multiple]="false"
                    [clearable]="true">
                  </app-select>
                </div>
              </div>
            </div>
          </div>
          <table class="data-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody [class.page-animate]="tableAnimating">
              <tr *ngFor="let product of pagedProducts">
                <td><img [src]="product.image ? 'http://localhost:5050' + product.image : 'assets/no-image.png'" class="table-img" (error)="$any($event.target).src='assets/no-image.png'" /></td>
                <td class="product-name">{{ product.name }}</td>
                <td>{{ getCategoryName(product) }}</td>
                <td>\${{ product.price | number:'1.2-2' }}</td>
                <td [class.low-stock]="product.stock < 5">{{ product.stock }}</td>
                <td><span class="status-badge" [class]="'status-' + product.status">{{ product.status }}</span></td>
                <td class="actions">
                  <button class="btn-edit" (click)="editProduct(product)"><i class="fas fa-pen"></i></button>
                  <button class="btn-delete" (click)="deleteProduct(product._id)"><i class="fas fa-trash"></i></button>
                </td>
              </tr>
              <tr *ngIf="pagedProducts.length === 0">
                <td colspan="7" class="empty">No products found</td>
              </tr>
            </tbody>
          </table>

          <!-- Pagination -->
          <div class="pagination-bar" *ngIf="totalItems > 0">
            <span class="pagination-info">Showing {{ showingStart }}–{{ showingEnd }} of {{ totalItems }}</span>
            <div class="pagination-controls">
              <button class="pg-btn" (click)="setPage(currentPage - 1)" [disabled]="currentPage === 1">
                <i class="fas fa-chevron-left"></i>
              </button>
              <ng-container *ngFor="let p of pageNumbers">
                <span class="pg-ellipsis" *ngIf="p === null">…</span>
                <button class="pg-btn pg-num" *ngIf="p !== null"
                  [class.pg-active]="p === currentPage" (click)="setPage(+p)">{{ p }}</button>
              </ng-container>
              <button class="pg-btn" (click)="setPage(currentPage + 1)" [disabled]="currentPage === totalPages">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
            <div class="pagination-size">
              <app-select [(ngModel)]="pageSize" [options]="pageSizeOptions" [clearable]="false"></app-select>
            </div>
          </div>
          </ng-container>
        </div>

        <!-- Modal -->
        <div class="modal-overlay" *ngIf="showModal" (click)="closeModal()">
          <div class="modal" (click)="$event.stopPropagation()">
            <!-- Modal Header -->
            <div class="modal-header">
              <div class="modal-title-group">
                <div class="modal-icon">
                  <i [class]="editingProduct ? 'fas fa-pen-to-square' : 'fas fa-plus'"></i>
                </div>
                <div>
                  <h2>{{ editingProduct ? 'Edit Product' : 'Add Product' }}</h2>
                  <p class="modal-subtitle">{{ editingProduct ? 'Update product information below' : 'Fill in the details to add a new product' }}</p>
                </div>
              </div>
              <button class="modal-close" (click)="closeModal()"><i class="fas fa-xmark"></i></button>
            </div>

            <div class="modal-body">
              <!-- Image Upload -->
              <div class="form-section">
                <div class="section-label"><i class="fas fa-image"></i> Product Image</div>
                <div class="img-upload-area" (click)="fileInput.click()" [class.has-image]="imagePreview">
                  <img *ngIf="imagePreview" [src]="imagePreview" class="img-preview" (error)="imagePreview = null" />
                  <div *ngIf="!imagePreview" class="img-placeholder">
                    <div class="upload-icon"><i class="fas fa-cloud-arrow-up"></i></div>
                    <p class="upload-text">Click to upload image</p>
                    <p class="upload-sub">JPG, PNG, WEBP — max 5 MB</p>
                  </div>
                  <div *ngIf="imagePreview" class="img-overlay">
                    <i class="fas fa-camera"></i> Change Image
                  </div>
                </div>
                <input #fileInput type="file" accept="image/*" style="display:none" (change)="onFileChange($event)" />
              </div>

              <div class="form-divider"></div>

              <!-- Product Details -->
              <div class="form-section">
                <div class="section-label"><i class="fas fa-circle-info"></i> Product Details</div>
                <div class="form-group">
                  <label>Name <span class="req">*</span></label>
                  <div class="input-wrap">
                    <i class="fas fa-gamepad input-icon"></i>
                    <input type="text" [(ngModel)]="formData.name" class="form-control has-icon" placeholder="e.g. The Witcher 3" />
                  </div>
                </div>
                <div class="form-group">
                  <label>Description <span class="req">*</span></label>
                  <textarea [(ngModel)]="formData.description" class="form-control" rows="3" placeholder="Describe the product..."></textarea>
                </div>
              </div>

              <div class="form-divider"></div>

              <!-- Pricing & Inventory -->
              <div class="form-section">
                <div class="section-label"><i class="fas fa-tag"></i> Pricing & Inventory</div>
                <div class="form-row">
                  <div class="form-group">
                    <label>Price <span class="req">*</span></label>
                    <div class="input-wrap">
                      <span class="input-prefix">$</span>
                      <input type="number" [(ngModel)]="formData.price" class="form-control has-prefix" placeholder="0.00" min="0" step="0.01" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Stock <span class="req">*</span></label>
                    <div class="input-wrap">
                      <i class="fas fa-cubes input-icon"></i>
                      <input type="number" [(ngModel)]="formData.stock" class="form-control has-icon" placeholder="0" min="0" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-divider"></div>

              <!-- Classification -->
              <div class="form-section">
                <div class="section-label"><i class="fas fa-layer-group"></i> Classification</div>
                <div class="form-row">
                  <div class="form-group">
                    <label>Category <span class="req">*</span></label>
                    <app-select [(ngModel)]="formData.category" [options]="categoryOptions" placeholder="Select category" [clearable]="false"></app-select>
                  </div>
                  <div class="form-group">
                    <label>Status</label>
                    <app-select [(ngModel)]="formData.status" [options]="statusOptions" [clearable]="false"></app-select>
                  </div>
                </div>

                <!-- Featured Toggle -->
                <div class="featured-row">
                  <div class="featured-info">
                    <i class="fas fa-star featured-star"></i>
                    <div>
                      <span class="featured-title">Featured Product</span>
                      <span class="featured-desc">Show this product in featured sections</span>
                    </div>
                  </div>
                  <label class="toggle-switch">
                    <input type="checkbox" [(ngModel)]="formData.featured" />
                    <span class="toggle-track"><span class="toggle-thumb"></span></span>
                  </label>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button class="btn-cancel" (click)="closeModal()"><i class="fas fa-xmark"></i> Cancel</button>
              <button class="btn-save" (click)="saveProduct()" [disabled]="saving">
                <i *ngIf="!saving" [class]="editingProduct ? 'fas fa-floppy-disk' : 'fas fa-plus'"></i>
                <span *ngIf="saving" class="spinner"></span>
                {{ saving ? 'Saving...' : (editingProduct ? 'Save Changes' : 'Add Product') }}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    /* ── Layout ── */
    .admin-layout { display: flex; min-height: 100vh; }

    /* ── Sidebar (dark) ── */
    .admin-sidebar {
      width: 240px; background: #0d0f1e; color: white; padding: 24px 0;
      position: sticky; top: 0; height: 100vh;
      border-right: 1px solid rgba(255,255,255,0.07);
      animation: sidebarIn 0.4s cubic-bezier(0.16,1,0.3,1) both;
    }
    @keyframes sidebarIn { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
    .sidebar-brand { padding: 0 24px 24px; font-size: 1.2rem; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.08); margin-bottom: 16px; }
    .sidebar-nav { display: flex; flex-direction: column; }
    .nav-item { display: block; padding: 12px 24px; color: #9ca3af; text-decoration: none; transition: all 0.22s; font-weight: 500; border-left: 3px solid transparent; }
    .nav-item:hover, .nav-item.active { background: rgba(79,110,247,0.1); color: #a5b4fc; border-left-color: #4f6ef7; transform: translateX(3px); }
    .nav-item i { width: 18px; text-align: center; margin-right: 4px; font-size: 0.85rem; }
    .divider { height: 1px; background: rgba(255,255,255,0.07); margin: 12px 0; }

    /* ── Main Content (dark) ── */
    .admin-main { flex: 1; padding: 32px; background: #0f1123; overflow-x: hidden; min-width: 0; animation: pageIn 0.45s cubic-bezier(0.16,1,0.3,1) 0.15s both; }
    @keyframes pageIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
    .page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
    .page-header h1 { font-size: 1.8rem; font-weight: 700; color: #e8eaf6; }
    .btn-add {
      padding: 10px 20px; background: linear-gradient(135deg, #4f6ef7, #8b5cf6);
      color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;
      transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1);
    }
    .btn-add:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(79,110,247,0.4); }

    /* ── Section Card (dark) ── */
    .section-card { background: #1e2235; border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.06); overflow-x: auto; animation: cardIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
    @keyframes cardIn { from{opacity:0;transform:translateY(16px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }

    /* ── Toolbar ── */
    .table-toolbar { margin-bottom: 20px; }
    .toolbar-row { display: flex; align-items: flex-end; gap: 12px; flex-wrap: wrap; }
    .filter-selects { display: flex; gap: 12px; flex-wrap: wrap; flex: 1; }
    .filter-select-item { display: flex; flex-direction: column; gap: 5px; min-width: 200px; flex: 1; }
    .filter-select-label { font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: #6b7280; display: flex; align-items: center; gap: 5px; margin-bottom: 0; }
    .filter-select-label i { color: #4f6ef7; font-size: 0.7rem; }

    /* ── Search ── */
    .search-wrap { display: flex; flex-direction: column; gap: 5px; min-width: 260px; flex: 1.4; }
    .search-field { position: relative; display: flex; align-items: center; }
    .search-ico { position: absolute; left: 13px; color: #5a5e7a; font-size: 0.82rem; pointer-events: none; z-index: 1; }
    .search-input {
      width: 100%; padding: 10px 36px;
      border: 1.5px solid rgba(255,255,255,0.1); border-radius: 10px;
      outline: none; background: rgba(255,255,255,0.04); color: #e8eaf6;
      font-size: 0.9rem; font-family: inherit; box-sizing: border-box;
      transition: border-color 0.22s, box-shadow 0.22s, background 0.22s;
    }
    .search-input::placeholder { color: #505570; }
    .search-input:hover { border-color: rgba(255,255,255,0.18); }
    .search-input:focus { border-color: #4f6ef7; box-shadow: 0 0 0 3px rgba(79,110,247,0.15); background: rgba(255,255,255,0.06); }
    .search-clear {
      position: absolute; right: 10px; width: 22px; height: 22px; border-radius: 50%;
      border: none; background: rgba(255,255,255,0.1); color: #9ca3af;
      cursor: pointer; font-size: 0.72rem; display: flex; align-items: center; justify-content: center;
      transition: background 0.18s, color 0.18s;
    }
    .search-clear:hover { background: rgba(239,68,68,0.2); color: #f87171; }

    /* ── Table ── */
    @keyframes pageRowIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
    .page-animate tr { animation: pageRowIn 0.28s ease both; }
    .page-animate tr:nth-child(1) { animation-delay: 0ms; }
    .page-animate tr:nth-child(2) { animation-delay: 30ms; }
    .page-animate tr:nth-child(3) { animation-delay: 60ms; }
    .page-animate tr:nth-child(4) { animation-delay: 90ms; }
    .page-animate tr:nth-child(5) { animation-delay: 120ms; }
    .page-animate tr:nth-child(6) { animation-delay: 150ms; }
    .page-animate tr:nth-child(7) { animation-delay: 180ms; }
    .page-animate tr:nth-child(8) { animation-delay: 210ms; }
    .page-animate tr:nth-child(9) { animation-delay: 240ms; }
    .page-animate tr:nth-child(10) { animation-delay: 270ms; }
    .data-table { width: 100%; border-collapse: collapse; min-width: 560px; }
    .data-table th { text-align: left; padding: 12px 16px; background: rgba(255,255,255,0.03); font-size: 0.8rem; font-weight: 600; color: #9ca3af; text-transform: uppercase; }
    .data-table td { padding: 14px 16px; border-top: 1px solid rgba(255,255,255,0.06); font-size: 0.9rem; vertical-align: middle; color: #c9cbdf; }
    .data-table tbody tr { transition: background 0.18s; }
    .data-table tbody tr:hover { background: rgba(255,255,255,0.03); }
    .table-img { width: 48px; height: 48px; object-fit: cover; border-radius: 8px; transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1); }
    .data-table tbody tr:hover .table-img { transform: scale(1.08); }
    .product-name { font-weight: 600; max-width: 200px; color: #e8eaf6; }
    .low-stock { color: #f87171; font-weight: 700; }
    .status-badge { padding: 4px 11px; border-radius: 20px; font-size: 0.74rem; font-weight: 700; display: inline-flex; align-items: center; gap: 5px; }
    .status-badge::before { content: ''; width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
    .status-active { background: rgba(34,197,94,0.15); color: #4ade80; }
    .status-active::before { background: #4ade80; }
    .status-inactive { background: rgba(255,255,255,0.07); color: #9ca3af; }
    .status-inactive::before { background: #9ca3af; }
    .status-out_of_stock { background: rgba(239,68,68,0.15); color: #f87171; }
    .status-out_of_stock::before { background: #f87171; }
    .actions { display: flex; gap: 8px; }
    .btn-edit, .btn-delete {
      width: 36px; height: 36px; border: none; border-radius: 8px;
      cursor: pointer; font-size: 1rem; transition: all 0.2s;
      display: flex; align-items: center; justify-content: center;
    }
    .btn-edit { background: rgba(79,110,247,0.15); color: #a5b4fc; }
    .btn-edit:hover { background: rgba(79,110,247,0.3); transform: scale(1.1); }
    .btn-delete { background: rgba(239,68,68,0.1); color: #f87171; }
    .btn-delete:hover { background: rgba(239,68,68,0.25); transform: scale(1.1); }
    .empty { text-align: center; color: #9ca3af; padding: 40px; }

    /* ── Pagination ── */
    .pagination-bar {
      display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;
      gap: 12px; margin-top: 20px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.06);
    }
    .pagination-info { font-size: 0.8rem; color: #6b7280; white-space: nowrap; }
    .pagination-controls { display: flex; align-items: center; gap: 4px; }
    .pg-btn {
      min-width: 34px; height: 34px; border-radius: 8px; border: 1.5px solid rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.04); color: #9ca3af; cursor: pointer; font-size: 0.82rem;
      display: flex; align-items: center; justify-content: center;
      transition: all 0.18s; padding: 0 8px; font-family: inherit;
    }
    .pg-btn:hover:not(:disabled) { border-color: rgba(79,110,247,0.45); color: #a5b4fc; background: rgba(79,110,247,0.1); }
    .pg-btn:disabled { opacity: 0.3; cursor: not-allowed; }
    .pg-btn.pg-active { border-color: #4f6ef7; background: rgba(79,110,247,0.2); color: #a5b4fc; font-weight: 700; }
    .pg-ellipsis { color: #6b7280; font-size: 0.9rem; padding: 0 4px; user-select: none; line-height: 34px; }
    .pagination-size { min-width: 130px; }

    /* ── Modal Overlay & Container ── */
    .modal-overlay {
      position: fixed; inset: 0;
      background: rgba(5, 7, 20, 0.82);
      backdrop-filter: blur(6px);
      display: flex; align-items: flex-start; justify-content: center; z-index: 1000;
      padding-top: 60px;
      animation: overlayIn 0.22s ease both;
    }
    @keyframes overlayIn { from{opacity:0} to{opacity:1} }
    .modal {
      background: #171a2e;
      border-radius: 20px; width: 100%;
      max-width: 560px; max-height: 92vh; overflow-y: auto;
      border: 1px solid rgba(255,255,255,0.09);
      box-shadow: 0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(79,110,247,0.08);
      animation: modalIn 0.38s cubic-bezier(0.34,1.56,0.64,1) both;
      scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.1) transparent;
    }
    .modal::-webkit-scrollbar { width: 5px; }
    .modal::-webkit-scrollbar-track { background: transparent; }
    .modal::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 99px; }
    @keyframes modalIn { from{transform:scale(0.9) translateY(24px);opacity:0} to{transform:scale(1) translateY(0);opacity:1} }

    /* ── Modal Header ── */
    .modal-header {
      display: flex; justify-content: space-between; align-items: flex-start;
      padding: 24px 24px 20px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      background: linear-gradient(135deg, rgba(79,110,247,0.06) 0%, rgba(139,92,246,0.04) 100%);
      border-radius: 20px 20px 0 0;
    }
    .modal-title-group { display: flex; align-items: center; gap: 14px; }
    .modal-icon {
      width: 44px; height: 44px; border-radius: 12px;
      background: linear-gradient(135deg, #4f6ef7, #8b5cf6);
      display: flex; align-items: center; justify-content: center;
      font-size: 1rem; color: white;
      box-shadow: 0 4px 12px rgba(79,110,247,0.35);
      flex-shrink: 0;
    }
    .modal-header h2 { font-size: 1.18rem; font-weight: 700; color: #e8eaf6; margin: 0 0 3px; }
    .modal-subtitle { font-size: 0.78rem; color: #6b7280; margin: 0; }
    .modal-close {
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
      width: 34px; height: 34px; border-radius: 8px;
      cursor: pointer; color: #9ca3af; font-size: 1rem;
      transition: all 0.2s; display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .modal-close:hover { background: rgba(239,68,68,0.15); border-color: rgba(239,68,68,0.3); color: #f87171; transform: rotate(90deg); }

    /* ── Modal Body ── */
    .modal-body { padding: 20px 24px 8px; }
    .form-section { margin-bottom: 4px; }
    .section-label {
      font-size: 0.73rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
      color: #6b7280; margin-bottom: 14px; display: flex; align-items: center; gap: 6px;
    }
    .section-label i { color: #4f6ef7; font-size: 0.78rem; }
    .form-divider { height: 1px; background: rgba(255,255,255,0.06); margin: 18px 0; }
    .form-group { margin-bottom: 14px; }
    .form-group label {
      display: block; margin-bottom: 6px; font-weight: 600;
      font-size: 0.82rem; color: #c9cbdf;
    }
    .req { color: #f87171; margin-left: 2px; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

    /* ── Input Styles ── */
    .input-wrap { position: relative; }
    .input-icon {
      position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
      color: #6b7280; font-size: 0.82rem; pointer-events: none; z-index: 1;
    }
    .input-prefix {
      position: absolute; left: 13px; top: 50%; transform: translateY(-50%);
      color: #6b7280; font-size: 0.92rem; font-weight: 600; pointer-events: none; z-index: 1;
    }
    .select-wrap { position: relative; }
    .select-arrow {
      position: absolute; right: 13px; top: 50%; transform: translateY(-50%);
      color: #6b7280; font-size: 0.72rem; pointer-events: none; z-index: 1;
    }
    .form-control {
      width: 100%; padding: 10px 14px;
      border: 1.5px solid rgba(255,255,255,0.1); border-radius: 10px;
      font-size: 0.9rem; outline: none; box-sizing: border-box;
      background: rgba(255,255,255,0.04); color: #e8eaf6;
      transition: border-color 0.22s, box-shadow 0.22s, background 0.22s;
      font-family: inherit;
      -webkit-appearance: none; appearance: none;
    }
    .form-control.has-icon { padding-left: 36px; }
    .form-control.has-prefix { padding-left: 28px; }
    .form-control:hover { border-color: rgba(255,255,255,0.18); }
    .form-control:focus { border-color: #4f6ef7; box-shadow: 0 0 0 3px rgba(79,110,247,0.14); background: rgba(255,255,255,0.06); }
    .form-control::placeholder { color: #505570; }
    textarea.form-control { resize: vertical; min-height: 80px; line-height: 1.5; }
    select.form-control { padding-right: 36px; cursor: pointer; }
    select.form-control option { background: #1e2235; }

    /* ── Image Upload ── */
    .img-upload-area {
      border: 2px dashed rgba(255,255,255,0.12); border-radius: 14px;
      height: 170px; display: flex; align-items: center; justify-content: center;
      cursor: pointer; overflow: hidden; position: relative;
      transition: border-color 0.25s, background 0.25s;
      background: rgba(255,255,255,0.025);
    }
    .img-upload-area:hover { border-color: #4f6ef7; background: rgba(79,110,247,0.05); }
    .img-upload-area.has-image { border-style: solid; border-color: rgba(79,110,247,0.3); }
    .img-preview { width: 100%; height: 100%; object-fit: contain; display: block; }
    .img-overlay {
      position: absolute; inset: 0;
      background: rgba(0,0,0,0.55); display: flex; align-items: center; justify-content: center;
      color: white; font-size: 0.88rem; font-weight: 600; gap: 6px;
      opacity: 0; transition: opacity 0.22s;
    }
    .img-upload-area:hover .img-overlay { opacity: 1; }
    .img-placeholder { text-align: center; }
    .upload-icon {
      width: 52px; height: 52px; border-radius: 14px;
      background: rgba(79,110,247,0.12); border: 1.5px dashed rgba(79,110,247,0.3);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.4rem; color: #4f6ef7; margin: 0 auto 12px;
    }
    .upload-text { color: #c9cbdf; font-size: 0.88rem; font-weight: 600; margin: 0 0 4px; }
    .upload-sub { color: #505570; font-size: 0.75rem; margin: 0; }

    /* ── Featured Toggle ── */
    .featured-row {
      display: flex; align-items: center; justify-content: space-between;
      padding: 14px 16px; border-radius: 12px;
      background: rgba(255,255,255,0.025); border: 1.5px solid rgba(255,255,255,0.07);
      margin-top: 14px;
    }
    .featured-info { display: flex; align-items: center; gap: 12px; }
    .featured-star { color: #f59e0b; font-size: 1rem; }
    .featured-title { display: block; font-size: 0.88rem; font-weight: 600; color: #e8eaf6; }
    .featured-desc { display: block; font-size: 0.75rem; color: #6b7280; margin-top: 1px; }
    .toggle-switch { position: relative; width: 44px; height: 24px; flex-shrink: 0; cursor: pointer; }
    .toggle-switch input { opacity: 0; width: 0; height: 0; position: absolute; }
    .toggle-track {
      position: absolute; inset: 0; border-radius: 99px;
      background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.12);
      transition: background 0.25s, border-color 0.25s;
      display: flex; align-items: center;
    }
    .toggle-thumb {
      position: absolute; left: 3px;
      width: 16px; height: 16px; border-radius: 50%;
      background: #9ca3af; transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), background 0.25s;
      box-shadow: 0 1px 4px rgba(0,0,0,0.4);
    }
    .toggle-switch input:checked ~ .toggle-track { background: rgba(79,110,247,0.3); border-color: #4f6ef7; }
    .toggle-switch input:checked ~ .toggle-track .toggle-thumb { transform: translateX(20px); background: #4f6ef7; }

    /* ── Error Alert ── */
    .alert {
      margin-top: 16px; padding: 12px 14px; border-radius: 10px;
      font-size: 0.84rem; display: flex; align-items: center; gap: 8px;
    }
    .alert-error { background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.2); color: #f87171; }

    /* ── Modal Footer ── */
    .modal-footer {
      display: flex; gap: 10px; padding: 16px 24px 24px; justify-content: flex-end;
      border-top: 1px solid rgba(255,255,255,0.06); margin-top: 8px;
    }
    .btn-cancel {
      padding: 10px 18px; background: transparent;
      border: 1.5px solid rgba(255,255,255,0.12); border-radius: 10px;
      cursor: pointer; font-weight: 600; color: #9ca3af;
      font-size: 0.88rem; transition: all 0.2s; display: flex; align-items: center; gap: 7px;
    }
    .btn-cancel:hover { background: rgba(255,255,255,0.05); color: #c9cbdf; border-color: rgba(255,255,255,0.2); }
    .btn-save {
      padding: 10px 22px;
      background: linear-gradient(135deg, #4f6ef7, #8b5cf6);
      color: white; border: none; border-radius: 10px; cursor: pointer;
      font-weight: 700; font-size: 0.88rem;
      transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1);
      display: flex; align-items: center; gap: 7px;
      box-shadow: 0 4px 14px rgba(79,110,247,0.25);
    }
    .btn-save:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(79,110,247,0.45); }
    .btn-save:active:not(:disabled) { transform: translateY(0); }
    .btn-save:disabled { opacity: 0.45; cursor: not-allowed; box-shadow: none; }
    .spinner {
      width: 14px; height: 14px; border-radius: 50%;
      border: 2px solid rgba(255,255,255,0.3); border-top-color: white;
      animation: spin 0.7s linear infinite; display: inline-block;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    @media (max-width: 1024px) {
      .admin-sidebar { width: 200px; }
      .admin-main { padding: 24px 20px; }
    }
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
      .form-row { grid-template-columns: 1fr; }
      .page-header { flex-direction: column; align-items: flex-start; gap: 12px; }
      .search-input { width: 100%; }
    }
    @media (max-width: 480px) {
      .admin-main { padding: 14px 12px 76px; }
      .page-header h1 { font-size: 1.4rem; }
      .section-card { padding: 16px; }
    }
  `]
})
export class ManageProductsComponent implements OnInit {
  products: Product[] = [];
  loading = true;
  categories: Category[] = [];

  private _selectedCategories: string[] = [];
  get selectedCategories() { return this._selectedCategories; }
  set selectedCategories(v: string[]) { this._selectedCategories = v ?? []; this.currentPage = 1; }

  private _selectedStatus = '';
  get selectedStatus() { return this._selectedStatus; }
  set selectedStatus(v: string) { this._selectedStatus = v ?? ''; this.currentPage = 1; }

  readonly statusOptions: SelectOption[] = [
    { value: 'active',   label: 'Active' },
    { value: 'inactive', label: 'Inactive' }
  ];

  readonly statusFilterOptions: SelectOption[] = [
    { value: 'active',        label: 'Active' },
    { value: 'inactive',      label: 'Inactive' },
    { value: 'out_of_stock',  label: 'Out of Stock' }
  ];

  get categoryFilterOptions(): SelectOption[] {
    return this.categories.map(c => ({ value: c._id, label: c.name }));
  }

  get categoryOptions(): SelectOption[] {
    return [
      { value: '', label: 'Select category' },
      ...this.categories.map(c => ({ value: c._id, label: c.name }))
    ];
  }
  showModal = false;
  editingProduct: Product | null = null;
  saving = false;
  currentPage = 1;
  private _pageSize = 10;
  get pageSize() { return this._pageSize; }
  set pageSize(v: number) { this._pageSize = +v; this.currentPage = 1; }

  private _searchQuery = '';
  get searchQuery() { return this._searchQuery; }
  set searchQuery(s: string) { this._searchQuery = s; this.currentPage = 1; }

  formData: any = { name: '', description: '', price: 0, stock: 0, category: '', status: 'active', featured: false };
  selectedFile: File | null = null;
  imagePreview: string | null = null;

  constructor(private productService: ProductService, private categoryService: CategoryService, private confirmService: ConfirmService, private notification: NotificationService) {}

  ngOnInit() {
    this.loadProducts();
    this.categoryService.getCategories().subscribe({ next: (res) => this.categories = res.categories || [] });
  }

  loadProducts() {
    this.productService.getProducts({ limit: 100, status: 'all' }).subscribe({
      next: (res) => { this.products = res.products || []; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  get filteredProducts(): Product[] {
    return this.products.filter(p => {
      const q = this._searchQuery.toLowerCase().trim();
      const catName = typeof p.category === 'string' ? '' : ((p.category as any)?.name ?? '');
      const matchesSearch = !q ||
        p.name.toLowerCase().includes(q) ||
        (p.description ?? '').toLowerCase().includes(q) ||
        catName.toLowerCase().includes(q);
      const catId = typeof p.category === 'string' ? p.category : (p.category as any)?._id;
      const matchesCategory = this._selectedCategories.length === 0 || this._selectedCategories.includes(catId);
      const matchesStatus = !this._selectedStatus || p.status === this._selectedStatus;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }

  get totalItems(): number { return this.filteredProducts.length; }
  get totalPages(): number { return Math.max(1, Math.ceil(this.totalItems / this._pageSize)); }
  get showingStart(): number { return this.totalItems === 0 ? 0 : (this.currentPage - 1) * this._pageSize + 1; }
  get showingEnd(): number { return Math.min(this.currentPage * this._pageSize, this.totalItems); }

  get pagedProducts(): Product[] {
    const start = (this.currentPage - 1) * this._pageSize;
    return this.filteredProducts.slice(start, start + this._pageSize);
  }

  get pageNumbers(): (number | null)[] {
    const total = this.totalPages;
    const cur = this.currentPage;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const pages: (number | null)[] = [1];
    if (cur > 3) pages.push(null);
    const start = Math.max(2, cur - 1);
    const end = Math.min(total - 1, cur + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (cur < total - 2) pages.push(null);
    pages.push(total);
    return pages;
  }

  readonly pageSizeOptions: SelectOption[] = [
    { value: 10, label: '10 / page' },
    { value: 25, label: '25 / page' },
    { value: 50, label: '50 / page' },
  ];

  tableAnimating = false;
  setPage(n: number) {
    if (n < 1 || n > this.totalPages) return;
    this.currentPage = n;
    this.tableAnimating = false;
    requestAnimationFrame(() => { this.tableAnimating = true; setTimeout(() => { this.tableAnimating = false; }, 350); });
  }

  getCategoryName(product: Product): string {
    if (!product.category) return '';
    return typeof product.category === 'string' ? '' : (product.category as any).name;
  }

  openModal() {
    this.showModal = true;
    this.editingProduct = null;
    this.selectedFile = null;
    this.imagePreview = null;
    this.formData = { name: '', description: '', price: 0, stock: 0, category: '', status: 'active', featured: false };
  }

  editProduct(product: Product) {
    this.editingProduct = product;
    this.selectedFile = null;
    this.imagePreview = product.image ? `http://localhost:5050${product.image}` : null;
    this.formData = {
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      category: typeof product.category === 'string' ? product.category : (product.category as any)._id,
      status: product.status,
      featured: product.featured
    };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedFile = null;
    this.imagePreview = null;
  }

  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.selectedFile = file;
    const reader = new FileReader();
    reader.onload = () => this.imagePreview = reader.result as string;
    reader.readAsDataURL(file);
  }

  saveProduct() {
    this.saving = true;
    const fd = new FormData();
    fd.append('name', this.formData.name);
    fd.append('description', this.formData.description);
    fd.append('price', String(this.formData.price));
    fd.append('stock', String(this.formData.stock));
    fd.append('category', this.formData.category);
    fd.append('status', this.formData.status);
    fd.append('featured', String(this.formData.featured));
    if (this.selectedFile) fd.append('image', this.selectedFile);
    const obs = this.editingProduct
      ? this.productService.updateProduct(this.editingProduct._id, fd)
      : this.productService.createProduct(fd);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.closeModal();
        this.loadProducts();
        this.notification.success(this.editingProduct ? 'Product updated successfully' : 'Product created successfully');
      },
      error: (err) => { this.saving = false; this.notification.error(err.error?.message || 'Failed to save product'); }
    });
  }

  async deleteProduct(id: string) {
    const ok = await this.confirmService.confirm({ title: 'Delete Product', description: 'Are you sure you want to delete this product? This action cannot be undone.', type: 'danger', okText: 'Delete' });
    if (!ok) return;
    this.productService.deleteProduct(id).subscribe({
      next: () => { this.loadProducts(); this.notification.success('Product deleted successfully'); },
      error: () => { this.notification.error('Failed to delete product. Please try again.'); }
    });
  }
}
