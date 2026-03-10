import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../../core/services/category.service';
import { Category } from '../../../core/models';
import { ConfirmService } from '../../../shared/services/confirm.service';
import { SpinComponent } from '../../../shared/components/spin/spin.component';

@Component({
  selector: 'app-manage-categories',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, SpinComponent],
  template: `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="sidebar-brand"><i class="fas fa-gear"></i> Admin Panel</div>
        <nav class="sidebar-nav">
          <a routerLink="/admin" class="nav-item"><i class="fas fa-chart-bar"></i> Dashboard</a>
          <a routerLink="/admin/products" class="nav-item"><i class="fas fa-box"></i> Products</a>
          <a routerLink="/admin/categories" routerLinkActive="active" class="nav-item"><i class="fas fa-tag"></i> Categories</a>
          <a routerLink="/admin/orders" class="nav-item"><i class="fas fa-receipt"></i> Orders</a>
          <a routerLink="/admin/users" class="nav-item"><i class="fas fa-users"></i> Users</a>
          <div class="divider"></div>
          <a routerLink="/" class="nav-item"><i class="fas fa-house"></i> Back to Store</a>
        </nav>
      </aside>
      <main class="admin-main">
        <div class="page-header">
          <h1>Manage Categories</h1>
          <button class="btn-add" (click)="openModal()">+ Add Category</button>
        </div>

        <div class="section-card">
          <app-spin *ngIf="loading" size="lg" tip="Loading categories..."></app-spin>
          <table class="data-table" *ngIf="!loading">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let cat of categories">
                <td class="cat-name">{{ cat.name }}</td>
                <td>{{ cat.description || '—' }}</td>
                <td>
                  <span class="status-badge" [class.active]="cat.isActive" [class.inactive]="!cat.isActive">
                    {{ cat.isActive ? 'Active' : 'Inactive' }}
                  </span>
                </td>
                <td class="actions">
                  <button class="btn-edit" (click)="editCategory(cat)"><i class="fas fa-pen"></i></button>
                  <button class="btn-delete" (click)="deleteCategory(cat._id)"><i class="fas fa-trash"></i></button>
                </td>
              </tr>
              <tr *ngIf="categories.length === 0">
                <td colspan="4" class="empty">No categories yet</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Modal -->
        <div class="modal-overlay" *ngIf="showModal" (click)="closeModal()">
          <div class="modal" (click)="$event.stopPropagation()">
            <div class="modal-header">
              <h2>{{ editing ? 'Edit Category' : 'Add Category' }}</h2>
              <button class="modal-close" (click)="closeModal()">✕</button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>Name *</label>
                <input type="text" [(ngModel)]="formData.name" class="form-control" />
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea [(ngModel)]="formData.description" class="form-control" rows="3"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn-cancel" (click)="closeModal()">Cancel</button>
              <button class="btn-save" (click)="save()" [disabled]="saving">
                {{ saving ? 'Saving...' : 'Save' }}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .admin-layout { display: flex; min-height: 100vh; }
    .admin-sidebar { width: 240px; background: #0d0f1e; color: white; padding: 24px 0; position: sticky; top: 0; height: 100vh; border-right: 1px solid rgba(255,255,255,0.07); animation: sidebarIn 0.4s cubic-bezier(0.16,1,0.3,1) both; }
    @keyframes sidebarIn { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
    .sidebar-brand { padding: 0 24px 24px; font-size: 1.2rem; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.08); margin-bottom: 16px; }
    .sidebar-nav { display: flex; flex-direction: column; }
    .nav-item { display: block; padding: 12px 24px; color: #9ca3af; text-decoration: none; transition: all 0.22s; font-weight: 500; border-left: 3px solid transparent; }
    .nav-item:hover, .nav-item.active { background: rgba(79,110,247,0.1); color: #a5b4fc; border-left-color: #4f6ef7; transform: translateX(3px); }
    .nav-item i { width: 18px; text-align: center; margin-right: 4px; font-size: 0.85rem; }
    .divider { height: 1px; background: rgba(255,255,255,0.07); margin: 12px 0; }
    .admin-main { flex: 1; padding: 32px; background: #0f1123; overflow-x: hidden; min-width: 0; animation: pageIn 0.45s cubic-bezier(0.16,1,0.3,1) 0.15s both; }
    @keyframes pageIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
    .page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
    .page-header h1 { font-size: 1.8rem; font-weight: 700; color: #e8eaf6; }
    .btn-add { padding: 10px 20px; background: linear-gradient(135deg, #4f6ef7, #8b5cf6); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1); }
    .btn-add:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(79,110,247,0.4); }
    .section-card { background: #1e2235; border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.06); animation: cardIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
    @keyframes cardIn { from{opacity:0;transform:translateY(16px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
    .data-table { width: 100%; border-collapse: collapse; }
    .data-table th { text-align: left; padding: 12px 16px; background: rgba(255,255,255,0.03); font-size: 0.8rem; font-weight: 600; color: #9ca3af; text-transform: uppercase; }
    .data-table td { padding: 14px 16px; border-top: 1px solid rgba(255,255,255,0.06); font-size: 0.9rem; color: #c9cbdf; }
    .data-table tbody tr { transition: background 0.18s; }
    .data-table tbody tr:hover { background: rgba(255,255,255,0.03); }
    .cat-name { font-weight: 600; color: #e8eaf6; }
    .status-badge { padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; }
    .status-badge.active { background: rgba(34,197,94,0.15); color: #4ade80; }
    .status-badge.inactive { background: rgba(255,255,255,0.07); color: #9ca3af; }
    .actions { display: flex; gap: 8px; }
    .btn-edit, .btn-delete { width: 36px; height: 36px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; transition: all 0.2s; }
    .btn-edit { background: rgba(79,110,247,0.15); }
    .btn-edit:hover { background: rgba(79,110,247,0.3); transform: scale(1.1); }
    .btn-delete { background: rgba(239,68,68,0.1); }
    .btn-delete:hover { background: rgba(239,68,68,0.25); transform: scale(1.1); }
    .empty { text-align: center; color: #9ca3af; padding: 40px; }
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 1000; animation: overlayIn 0.2s ease both; }
    @keyframes overlayIn { from{opacity:0} to{opacity:1} }
    .modal { background: #1e2235; border-radius: 20px; width: 100%; max-width: 460px; border: 1px solid rgba(255,255,255,0.1); animation: modalIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both; }
    @keyframes modalIn { from{transform:scale(0.88) translateY(20px);opacity:0} to{transform:scale(1) translateY(0);opacity:1} }
    .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 24px 24px 0; }
    .modal-header h2 { font-size: 1.2rem; font-weight: 700; color: #e8eaf6; }
    .modal-close { background: none; border: none; font-size: 1.2rem; cursor: pointer; color: #9ca3af; transition: color 0.2s, transform 0.2s; }
    .modal-close:hover { color: #e8eaf6; transform: rotate(90deg); }
    .modal-body { padding: 20px 24px; }
    .form-group { margin-bottom: 16px; }
    .form-group label { display: block; margin-bottom: 6px; font-weight: 600; font-size: 0.85rem; color: #c9cbdf; }
    .form-control { width: 100%; padding: 10px 14px; border: 2px solid rgba(255,255,255,0.1); border-radius: 8px; font-size: 0.95rem; outline: none; box-sizing: border-box; background: rgba(255,255,255,0.05); color: #e8eaf6; transition: border-color 0.25s, box-shadow 0.25s; }
    .form-control:focus { border-color: #4f6ef7; box-shadow: 0 0 0 3px rgba(79,110,247,0.15); }
    .modal-footer { display: flex; gap: 12px; padding: 0 24px 24px; justify-content: flex-end; }
    .btn-cancel { padding: 10px 20px; background: transparent; border: 2px solid rgba(255,255,255,0.15); border-radius: 8px; cursor: pointer; font-weight: 600; color: #c9cbdf; transition: all 0.2s; }
    .btn-cancel:hover { background: rgba(255,255,255,0.06); }
    .btn-save { padding: 10px 20px; background: linear-gradient(135deg, #4f6ef7, #8b5cf6); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1); }
    .btn-save:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 4px 14px rgba(79,110,247,0.4); }
    .btn-save:disabled { opacity: 0.5; cursor: not-allowed; }
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
    }
    @media (max-width: 480px) {
      .admin-main { padding: 14px 12px 76px; }
      .page-header h1 { font-size: 1.4rem; }
      .section-card { padding: 16px; }
    }
  `]
})
export class ManageCategoriesComponent implements OnInit {
  categories: Category[] = [];
  loading = true;
  showModal = false;
  editing: Category | null = null;
  saving = false;
  formData = { name: '', description: '' };

  constructor(private categoryService: CategoryService, private confirmService: ConfirmService) {}

  ngOnInit() { this.load(); }

  load() {
    this.categoryService.getCategories().subscribe({
      next: (res) => { this.categories = res.categories || []; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  openModal() { this.showModal = true; this.editing = null; this.formData = { name: '', description: '' }; }
  editCategory(cat: Category) { this.editing = cat; this.formData = { name: cat.name, description: cat.description || '' }; this.showModal = true; }
  closeModal() { this.showModal = false; }

  save() {
    this.saving = true;
    const obs = this.editing
      ? this.categoryService.updateCategory(this.editing._id, this.formData)
      : this.categoryService.createCategory(this.formData);
    obs.subscribe({ next: () => { this.saving = false; this.closeModal(); this.load(); }, error: () => { this.saving = false; } });
  }

  async deleteCategory(id: string) {
    const ok = await this.confirmService.confirm({ title: 'Delete Category', description: 'Are you sure you want to delete this category?', type: 'danger', okText: 'Delete' });
    if (!ok) return;
    this.categoryService.deleteCategory(id).subscribe({ next: () => this.load() });
  }
}
