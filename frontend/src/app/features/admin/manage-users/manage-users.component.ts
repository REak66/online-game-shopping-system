import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../core/services/admin.service';
import { User } from '../../../core/models';
import { ConfirmService } from '../../../shared/services/confirm.service';
import { SelectComponent, SelectOption } from '../../../shared/components/select/select.component';
import { SpinComponent } from '../../../shared/components/spin/spin.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-manage-users',
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
          <div>
            <h1><i class="fas fa-users"></i> Manage Users</h1>
            <p class="subtitle">View, manage roles and control user access</p>
          </div>
        </div>

        <div class="stats-row">
          <div class="stat-card">
            <div class="stat-icon blue"><i class="fas fa-users"></i></div>
            <div><div class="stat-value">{{ users.length }}</div><div class="stat-label">Total Users</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon green"><i class="fas fa-circle-check"></i></div>
            <div><div class="stat-value">{{ activeCount }}</div><div class="stat-label">Active</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon red"><i class="fas fa-ban"></i></div>
            <div><div class="stat-value">{{ inactiveCount }}</div><div class="stat-label">Disabled</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon yellow"><i class="fas fa-shield-halved"></i></div>
            <div><div class="stat-value">{{ adminCount }}</div><div class="stat-label">Admins</div></div>
          </div>
        </div>

        <div class="section-card">
          <app-spin *ngIf="loading" size="lg" tip="Loading users..."></app-spin>
          <ng-container *ngIf="!loading">
          <div class="table-toolbar">
            <div class="search-wrapper">
              <i class="fas fa-search search-icon"></i>
              <input type="text" [(ngModel)]="searchQuery" placeholder="Search by name or email..." class="search-input" />
              <button *ngIf="searchQuery" class="clear-btn" (click)="searchQuery=''"><i class="fas fa-times"></i></button>
            </div>
            <div class="filter-group">
              <button class="filter-btn" [class.active]="roleFilter==='all'"      (click)="roleFilter='all'">All</button>
              <button class="filter-btn" [class.active]="roleFilter==='customer'" (click)="roleFilter='customer'">Customers</button>
              <button class="filter-btn" [class.active]="roleFilter==='admin'"    (click)="roleFilter='admin'">Admins</button>
            </div>
          </div>

          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th class="th-num">#</th>
                  <th class="th-user">User</th>
                  <th class="th-email">Email</th>
                  <th class="th-role">Role</th>
                  <th class="th-status">Status</th>
                  <th class="th-date">Joined</th>
                  <th class="th-actions">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let user of filteredUsers; let i = index" class="tr-row">
                  <td class="td-num">{{ i + 1 }}</td>
                  <td class="td-user">
                    <div class="av">
                      <img *ngIf="user.avatar" [src]="getAvatarUrl(user.avatar)" alt="" class="av-img" (error)="onAvatarError($event)" />
                      <span [style.display]="user.avatar ? 'none' : ''">{{ user.name.charAt(0).toUpperCase() }}</span>
                    </div>
                    <div class="uinfo">
                      <span class="uname">{{ user.name }}</span>
                      <span class="uid">#{{ user._id?.slice(-6) }}</span>
                    </div>
                  </td>
                  <td class="td-email">{{ user.email }}</td>
                  <td class="td-role">
                    <app-select [ngModel]="user.role" [options]="roleOptions" [clearable]="false" (selectionChange)="updateRole(user, $event)"></app-select>
                  </td>
                  <td class="td-status">
                    <span class="badge" [class.badge-on]="user.isActive" [class.badge-off]="!user.isActive">
                      <span class="dot"></span>{{ user.isActive ? 'Active' : 'Disabled' }}
                    </span>
                  </td>
                  <td class="td-date">{{ user.createdAt | date:'MMM d, yyyy' }}</td>
                  <td class="td-actions">
                    <button class="btn-toggle" [class.btn-enable]="!user.isActive" (click)="toggleStatus(user)">
                      <i [class]="user.isActive ? 'fas fa-lock' : 'fas fa-lock-open'"></i>
                      {{ user.isActive ? 'Disable' : 'Enable' }}
                    </button>
                    <button class="btn-del" (click)="deleteUser(user._id)" title="Delete">
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
                <tr *ngIf="filteredUsers.length === 0">
                  <td colspan="7" class="empty-cell">
                    <div class="empty-wrap">
                      <i class="fas fa-users-slash"></i>
                      <p>No users found</p>
                      <small>Try adjusting your search or filter</small>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </ng-container>

          <div class="card-footer" *ngIf="filteredUsers.length > 0 && !loading">
            Showing <b>{{ filteredUsers.length }}</b> of <b>{{ users.length }}</b> users
          </div>
        </div>

      </main>
    </div>
  `,
  styles: [`
    /* ─── Base layout ─────────────────────────────────────── */
    * { box-sizing: border-box; }
    .admin-layout { display: flex; min-height: 100vh; background: #0c0e1f; }

    /* ─── Sidebar ──────────────────────────────────────────── */
    .admin-sidebar { width: 240px; background: #0d0f1e; color: white; padding: 24px 0; position: sticky; top: 0; height: 100vh; border-right: 1px solid rgba(255,255,255,0.07); animation: sidebarIn 0.4s cubic-bezier(0.16,1,0.3,1) both; }
    @keyframes sidebarIn { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
    .sidebar-brand { padding: 0 24px 24px; font-size: 1.2rem; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.08); margin-bottom: 16px; }
    .sidebar-nav { display: flex; flex-direction: column; }
    .nav-item { display: block; padding: 12px 24px; color: #9ca3af; text-decoration: none; transition: all 0.22s; font-weight: 500; border-left: 3px solid transparent; }
    .nav-item:hover, .nav-item.active { background: rgba(79,110,247,0.1); color: #a5b4fc; border-left-color: #4f6ef7; transform: translateX(3px); }
    .nav-item i { width: 18px; text-align: center; margin-right: 4px; font-size: 0.85rem; }
    .divider { height: 1px; background: rgba(255,255,255,0.07); margin: 12px 0; }

    /* ─── Main ─────────────────────────────────────────────── */
    .admin-main { flex: 1; padding: 32px; background: #0f1123; overflow-x: hidden; min-width: 0; animation: pageIn 0.45s cubic-bezier(0.16,1,0.3,1) 0.15s both; }
    @keyframes pageIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

    /* ─── Page header ──────────────────────────────────────── */
    .page-header { margin-bottom: 26px; }
    .page-header h1 {
      margin: 0 0 4px; font-size: 1.65rem; font-weight: 800; color: #f1f5f9;
      display: flex; align-items: center; gap: 10px;
    }
    .page-header h1 i { color: #6366f1; font-size: 1.4rem; }
    .subtitle { margin: 0; color: #64748b; font-size: 0.875rem; }

    /* ─── Stats row ────────────────────────────────────────── */
    .stats-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; margin-bottom: 24px; }
    .stat-card {
      background: #111827; border: 1px solid rgba(255,255,255,0.06); border-radius: 14px;
      padding: 16px 18px; display: flex; align-items: center; gap: 14px;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .stat-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.3); }
    .stat-icon {
      width: 44px; height: 44px; border-radius: 11px; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center; font-size: 1.1rem;
    }
    .stat-icon.blue   { background: rgba(99,102,241,0.15); color: #818cf8; }
    .stat-icon.green  { background: rgba(34,197,94,0.12);  color: #4ade80; }
    .stat-icon.red    { background: rgba(239,68,68,0.12);  color: #f87171; }
    .stat-icon.yellow { background: rgba(234,179,8,0.12);  color: #facc15; }
    .stat-value { font-size: 1.7rem; font-weight: 800; color: #f1f5f9; line-height: 1; }
    .stat-label { font-size: 0.75rem; color: #64748b; margin-top: 3px; font-weight: 500; }

    /* ─── Section card ─────────────────────────────────────── */
    .section-card {
      background: #111827; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; overflow: hidden;
    }

    /* ─── Toolbar ──────────────────────────────────────────── */
    .table-toolbar {
      display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
      padding: 18px 20px; border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .search-wrapper { position: relative; flex: 1; min-width: 220px; }
    .search-icon {
      position: absolute; left: 13px; top: 50%; transform: translateY(-50%);
      color: #4b5563; font-size: 0.8rem; pointer-events: none;
    }
    .search-input {
      width: 100%; padding: 9px 36px 9px 36px;
      background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.08);
      border-radius: 9px; color: #e2e8f0; font-size: 0.875rem; outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .search-input::placeholder { color: #374151; }
    .search-input:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.12); }
    .clear-btn {
      position: absolute; right: 11px; top: 50%; transform: translateY(-50%);
      background: none; border: none; cursor: pointer; color: #4b5563; font-size: 0.78rem;
      line-height: 1; padding: 3px; transition: color 0.18s;
    }
    .clear-btn:hover { color: #e2e8f0; }
    .filter-group { display: flex; gap: 6px; flex-shrink: 0; }
    .filter-btn {
      padding: 7px 15px; border-radius: 8px; font-size: 0.8rem; font-weight: 600; cursor: pointer;
      background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.07); color: #6b7280;
      transition: all 0.18s;
    }
    .filter-btn:hover { color: #c7d2fe; border-color: rgba(99,102,241,0.35); }
    .filter-btn.active { background: rgba(99,102,241,0.15); color: #a5b4fc; border-color: rgba(99,102,241,0.45); }

    /* ─── Table ────────────────────────────────────────────── */
    .table-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }
    .data-table { width: 100%; border-collapse: collapse; min-width: 720px; font-size: 0.875rem; }

    .data-table thead tr { background: rgba(255,255,255,0.02); }
    .data-table th {
      padding: 11px 16px; text-align: left;
      font-size: 0.7rem; font-weight: 700; color: #4b5563;
      text-transform: uppercase; letter-spacing: 0.07em; white-space: nowrap;
    }
    .th-num     { width: 40px;  padding-left: 20px; }
    .th-user    { min-width: 170px; }
    .th-email   { min-width: 180px; }
    .th-role    { width: 120px; }
    .th-status  { width: 100px; }
    .th-date    { width: 120px; }
    .th-actions { width: 140px; }

    .data-table td {
      padding: 13px 16px; border-top: 1px solid rgba(255,255,255,0.04);
      color: #cbd5e1; vertical-align: middle;
    }
    .td-num { padding-left: 20px; color: #374151; font-size: 0.78rem; font-weight: 600; }

    .tr-row { transition: background 0.14s; }
    .tr-row:hover { background: rgba(99,102,241,0.05); }

    /* user cell */
    .td-user { white-space: nowrap; }
    .td-user .av {
      display: inline-flex; align-items: center; justify-content: center;
      width: 36px; height: 36px; border-radius: 50%;
      background: linear-gradient(135deg,#6366f1,#9333ea); color: #fff;
      font-weight: 800; font-size: 0.85rem; vertical-align: middle;
      transition: transform 0.2s, box-shadow 0.2s;
      overflow: hidden; flex-shrink: 0;
    }
    .td-user .av .av-img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; display: block; }
    .tr-row:hover .av { transform: scale(1.1); box-shadow: 0 0 0 3px rgba(99,102,241,0.25); }
    .td-user .uinfo { display: inline-flex; flex-direction: column; vertical-align: middle; margin-left: 10px; }
    .uname { font-weight: 600; color: #f1f5f9; font-size: 0.875rem; line-height: 1.3; }
    .uid   { font-size: 0.7rem; color: #374151; }

    /* email */
    .td-email { color: #94a3b8; font-size: 0.85rem; }

    /* role select */
    .role-select {
      padding: 5px 28px 5px 9px; border-radius: 7px; font-size: 0.8rem; font-weight: 600;
      border: 1.5px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.05);
      color: #a5b4fc; cursor: pointer; outline: none;
      -webkit-appearance: none; appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%236b7280'/%3E%3C/svg%3E");
      background-repeat: no-repeat; background-position: right 8px center;
      transition: border-color 0.18s;
    }
    .role-select:focus { border-color: #6366f1; }
    .role-select.is-admin { color: #facc15; border-color: rgba(234,179,8,0.35); }
    .role-select option { background: #1e293b; color: #e2e8f0; }

    /* status badge */
    .badge {
      display: inline-flex; align-items: center; gap: 5px;
      padding: 4px 10px; border-radius: 20px; font-size: 0.72rem; font-weight: 700; white-space: nowrap;
    }
    .badge-on  { background: rgba(34,197,94,0.1); color: #4ade80; }
    .badge-off { background: rgba(239,68,68,0.1); color: #f87171; }
    .dot { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; }
    .badge-on  .dot { background: #4ade80; animation: blink 2s infinite; }
    .badge-off .dot { background: #f87171; }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.35} }

    /* date */
    .td-date { color: #64748b; font-size: 0.83rem; white-space: nowrap; }

    /* actions */
    .td-actions { white-space: nowrap; }
    .btn-toggle {
      display: inline-flex; align-items: center; gap: 5px;
      padding: 6px 12px; margin-right: 6px; border-radius: 7px; cursor: pointer; font-size: 0.78rem;
      font-weight: 600; border: 1.5px solid rgba(99,102,241,0.25);
      background: rgba(99,102,241,0.1); color: #a5b4fc; transition: all 0.18s;
    }
    .btn-toggle:hover { background: rgba(99,102,241,0.22); transform: translateY(-1px); }
    .btn-toggle.btn-enable { background: rgba(34,197,94,0.08); border-color: rgba(34,197,94,0.25); color: #4ade80; }
    .btn-toggle.btn-enable:hover { background: rgba(34,197,94,0.18); }
    .btn-del {
      display: inline-flex; align-items: center; justify-content: center;
      width: 32px; height: 32px; border-radius: 7px; cursor: pointer; font-size: 0.82rem;
      background: rgba(239,68,68,0.08); border: 1.5px solid rgba(239,68,68,0.18); color: #f87171;
      transition: all 0.18s;
    }
    .btn-del:hover { background: rgba(239,68,68,0.2); border-color: rgba(239,68,68,0.4); transform: translateY(-1px); }

    /* empty state */
    .empty-cell { padding: 0 !important; border: none !important; }
    .empty-wrap { text-align: center; padding: 56px 24px; }
    .empty-wrap i { font-size: 2.8rem; color: #1e293b; display: block; margin-bottom: 14px; }
    .empty-wrap p { color: #4b5563; font-size: 1rem; font-weight: 600; margin: 0 0 4px; }
    .empty-wrap small { color: #374151; font-size: 0.82rem; }

    /* card footer */
    .card-footer { padding: 12px 20px; border-top: 1px solid rgba(255,255,255,0.05); font-size: 0.8rem; color: #4b5563; }
    .card-footer b { color: #818cf8; }

    /* ─── Responsive ───────────────────────────────────────── */

    /* Tablet */
    @media (max-width: 1024px) {
      .admin-sidebar { width: 200px; }
      .admin-main { padding: 24px 20px; }
      .stats-row { grid-template-columns: repeat(2,1fr); gap: 12px; }
    }

    /* Mobile — bottom tab bar */
    @media (max-width: 768px) {
      .admin-layout { flex-direction: column; }
      .admin-sidebar {
        width: 100%; height: 58px; position: fixed; bottom: 0; left: 0; right: 0;
        top: auto; flex-direction: row; padding: 0; overflow: visible;
        border-right: none; border-top: 1px solid rgba(255,255,255,0.07);
        z-index: 100;
      }
      .sidebar-brand { display: none; }
      .divider { display: none; }
      .sidebar-nav {
        flex-direction: row; width: 100%; padding: 0; overflow-x: auto;
        scrollbar-width: none;
      }
      .sidebar-nav::-webkit-scrollbar { display: none; }
      .nav-item {
        flex: 1; flex-direction: column; justify-content: center; align-items: center;
        padding: 6px 8px; gap: 3px; min-width: 52px;
        border-left: none; border-top: 2px solid transparent; border-radius: 0;
      }
      .nav-item i { font-size: 1rem; width: auto; }
      .nav-item span { font-size: 0.55rem; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 700; color: inherit; }
      .nav-item.active { border-top-color: #6366f1; }
      .admin-main { padding: 18px 14px 76px; }
      .stats-row { grid-template-columns: repeat(2,1fr); gap: 10px; margin-bottom: 18px; }
      .stat-card { padding: 14px 15px; gap: 12px; }
      .stat-icon { width: 40px; height: 40px; font-size: 1rem; }
      .stat-value { font-size: 1.5rem; }
      .page-header h1 { font-size: 1.3rem; }
      .table-toolbar { flex-direction: column; align-items: stretch; padding: 14px 16px; gap: 10px; }
      .search-wrapper { min-width: unset; }
      .filter-group { flex-wrap: wrap; }
    }

    /* Small mobile */
    @media (max-width: 480px) {
      .stats-row { gap: 8px; }
      .stat-card { padding: 12px 13px; gap: 10px; border-radius: 12px; }
      .stat-icon { width: 36px; height: 36px; border-radius: 9px; font-size: 0.9rem; }
      .stat-value { font-size: 1.35rem; }
      .stat-label { font-size: 0.7rem; }
      .page-header h1 { font-size: 1.15rem; }
    }
  `]
})
export class ManageUsersComponent implements OnInit {
  users: any[] = [];
  loading = true;
  searchQuery = '';
  roleFilter = 'all';

  readonly roleOptions: SelectOption[] = [
    { value: 'customer', label: 'Customer' },
    { value: 'admin',    label: 'Admin' }
  ];

  private readonly apiBase = environment.apiUrl.replace('/api', '');

  constructor(private adminService: AdminService, private confirmService: ConfirmService) {}

  getAvatarUrl(avatar?: string): string {
    if (!avatar) return '';
    if (avatar.startsWith('http')) return avatar;
    return `${this.apiBase}${avatar}`;
  }

  onAvatarError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    const fallback = img.nextElementSibling as HTMLElement;
    if (fallback) fallback.style.display = '';
  }

  ngOnInit() { this.loadUsers(); }

  loadUsers() {
    this.adminService.getUsers().subscribe({
      next: (res) => { this.users = res.users || []; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  get activeCount()   { return this.users.filter(u => u.isActive).length; }
  get inactiveCount() { return this.users.filter(u => !u.isActive).length; }
  get adminCount()    { return this.users.filter(u => u.role === 'admin').length; }

  get filteredUsers(): any[] {
    let list = this.users;
    if (this.roleFilter !== 'all') list = list.filter(u => u.role === this.roleFilter);
    if (!this.searchQuery) return list;
    const q = this.searchQuery.toLowerCase();
    return list.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
  }

  updateRole(user: any, role: string) {
    this.adminService.updateUser(user._id, { role }).subscribe({ next: () => this.loadUsers() });
  }

  toggleStatus(user: any) {
    this.adminService.updateUser(user._id, { isActive: !user.isActive }).subscribe({ next: () => this.loadUsers() });
  }

  async deleteUser(id: string) {
    const ok = await this.confirmService.confirm({ title: 'Delete User', description: 'Are you sure you want to delete this user? This action cannot be undone.', type: 'danger', okText: 'Delete' });
    if (!ok) return;
    this.adminService.deleteUser(id).subscribe({ next: () => this.loadUsers() });
  }
}
