import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/models';
import { environment } from '../../../environments/environment';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-container">
      <!-- Page Header -->
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">My Profile</h1>
          <p class="page-subtitle">Manage your account details and security settings</p>
        </div>
      </div>

      <div class="profile-layout">
        <!-- Sidebar -->
        <aside class="profile-sidebar">
          <div class="avatar-card">
            <div class="avatar-glow"></div>

            <!-- Hidden file input -->
            <input #avatarInput type="file" accept="image/jpeg,image/png,image/webp,image/gif"
              style="display:none" (change)="onFilePickedForCrop($event)" />

            <!-- Clickable avatar -->
            <div class="avatar-ring" (click)="avatarInput.click()" [class.uploading]="uploadingAvatar" title="Click to change photo">
              <div class="avatar-circle">
                <img *ngIf="avatarPreview || user?.avatar" [src]="avatarPreview || getAvatarUrl(user?.avatar)" alt="avatar" class="avatar-img" />
                <span *ngIf="!avatarPreview && !user?.avatar">{{ userInitial }}</span>
              </div>
              <div class="avatar-overlay">
                <svg *ngIf="!uploadingAvatar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                <span class="upload-spinner" *ngIf="uploadingAvatar"></span>
              </div>
            </div>
            <p class="avatar-hint">Click photo to upload</p>

            <h2 class="sidebar-name">{{ user?.name }}</h2>
            <p class="sidebar-email">{{ user?.email }}</p>
            <span class="role-badge" [class.role-admin]="user?.role === 'admin'">
              <span class="role-dot"></span>{{ user?.role }}
            </span>
            <div class="sidebar-divider"></div>
            <div class="sidebar-stats">
              <div class="stat-item">
                <span class="stat-icon">✉</span>
                <div class="stat-info">
                  <span class="stat-label">Email</span>
                  <span class="stat-value">Verified</span>
                </div>
              </div>
              <div class="stat-item">
                <span class="stat-icon">🔒</span>
                <div class="stat-info">
                  <span class="stat-label">Security</span>
                  <span class="stat-value">Protected</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <!-- Main Content -->
        <main class="profile-content">

          <!-- Personal Information -->
          <div class="section-card">
            <div class="section-header">
              <div class="section-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div>
                <h2 class="section-title">Personal Information</h2>
                <p class="section-desc">Update your name and contact details</p>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  Full Name
                </label>
                <input type="text" [(ngModel)]="formData.name" class="form-control" placeholder="Enter your full name" />
              </div>
              <div class="form-group">
                <label class="form-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Phone Number
                </label>
                <input type="tel" [(ngModel)]="formData.phone" class="form-control" placeholder="+1 234 567 8900" />
              </div>
            </div>

            <div class="form-actions">
              <button class="btn-save" (click)="updateProfile()" [disabled]="saving">
                <svg *ngIf="!saving" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                <span class="spinner" *ngIf="saving"></span>
                {{ saving ? 'Saving...' : 'Save Changes' }}
              </button>
            </div>
          </div>

          <!-- Change Password -->
          <div class="section-card">
            <div class="section-header">
              <div class="section-icon-wrap accent-purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <div>
                <h2 class="section-title">Change Password</h2>
                <p class="section-desc">Keep your account safe with a strong password</p>
              </div>
            </div>

            <div class="form-group" style="margin-bottom:16px">
              <label class="form-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Current Password
              </label>
              <div class="input-wrapper">
                <input [type]="showCurrent ? 'text' : 'password'" [(ngModel)]="pwData.currentPassword" class="form-control" placeholder="Enter current password" />
                <button type="button" class="eye-btn" (click)="showCurrent = !showCurrent">
                  <svg *ngIf="!showCurrent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  <svg *ngIf="showCurrent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                </button>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  New Password
                </label>
                <div class="input-wrapper">
                  <input [type]="showNew ? 'text' : 'password'" [(ngModel)]="pwData.newPassword" class="form-control" placeholder="Enter new password" />
                  <button type="button" class="eye-btn" (click)="showNew = !showNew">
                    <svg *ngIf="!showNew" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    <svg *ngIf="showNew" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  </button>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Confirm New Password
                </label>
                <div class="input-wrapper">
                  <input [type]="showConfirm ? 'text' : 'password'" [(ngModel)]="pwData.confirmPassword" class="form-control" placeholder="Confirm new password" />
                  <button type="button" class="eye-btn" (click)="showConfirm = !showConfirm">
                    <svg *ngIf="!showConfirm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    <svg *ngIf="showConfirm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Password strength hint -->
            <div class="pw-hint" *ngIf="pwData.newPassword">
              <div class="pw-strength-bar">
                <div class="pw-strength-fill" [style.width]="pwStrengthWidth" [style.background]="pwStrengthColor"></div>
              </div>
              <span class="pw-strength-label" [style.color]="pwStrengthColor">{{ pwStrengthLabel }}</span>
            </div>

            <div class="form-actions">
              <button class="btn-save btn-purple" (click)="changePassword()" [disabled]="changingPw">
                <svg *ngIf="!changingPw" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <span class="spinner" *ngIf="changingPw"></span>
                {{ changingPw ? 'Updating...' : 'Change Password' }}
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>

    <!-- ── Crop Modal ──────────────────────────────────────── -->
    <div class="crop-backdrop" [style.display]="cropModalOpen ? 'flex' : 'none'" (mousedown)="onBackdropClick($event)">
      <div class="crop-modal" (mousedown)="$event.stopPropagation()">

        <div class="crop-modal-header">
          <h3 class="crop-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            Crop Photo
          </h3>
          <button class="crop-close-btn" (click)="closeCropModal()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div class="crop-container"
          (mousedown)="onCropDragStart($event)"
          (mousemove)="onCropDragMove($event)"
          (mouseup)="onCropDragEnd()"
          (mouseleave)="onCropDragEnd()"
          (wheel)="onCropWheel($event)"
          (touchstart)="onCropTouchStart($event)"
          (touchmove)="onCropTouchMove($event)"
          (touchend)="onCropDragEnd()">
          <img #cropImageEl class="crop-src-image"
            [src]="cropImageSrc"
            [style.width.px]="cropDisplayW"
            [style.height.px]="cropDisplayH"
            [style.left.px]="cropOffsetX"
            [style.top.px]="cropOffsetY"
            (load)="onCropImageLoad()"
            alt="crop preview" />
          <div class="crop-circle-guide"></div>
        </div>

        <div class="crop-zoom-row">
          <svg class="zoom-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          <input type="range" class="zoom-slider" min="1" max="3" step="0.01"
            [(ngModel)]="cropZoom" (ngModelChange)="onCropZoomChange()" />
          <svg class="zoom-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/></svg>
        </div>
        <p class="crop-hint">Drag to reposition &centerdot; Scroll or pinch to zoom</p>

        <div class="crop-modal-footer">
          <button class="btn-crop-cancel" (click)="closeCropModal()">Cancel</button>
          <button class="btn-crop-apply" (click)="applyCrop()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            Apply &amp; Upload
          </button>
        </div>
      </div>
    </div>
    <canvas #cropCanvas width="300" height="300" style="display:none"></canvas>
  `,
  styles: [`
    /* ── Layout ─────────────────────────────────────── */
    .page-container {
      max-width: 1100px; margin: 0 auto; padding: 40px 24px 80px;
      animation: pageIn 0.45s cubic-bezier(0.16,1,0.3,1) both;
    }
    @keyframes pageIn { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }

    /* ── Page Header ─────────────────────────────────── */
    .page-header {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 36px; padding-bottom: 24px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .page-title {
      font-size: 2rem; font-weight: 800; color: #e8eaf6; margin: 0 0 4px;
      background: linear-gradient(135deg, #e8eaf6 40%, #a5b4fc);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .page-subtitle { color: #6b7280; font-size: 0.9rem; margin: 0; }

    /* ── Grid ────────────────────────────────────────── */
    .profile-layout { display: grid; grid-template-columns: 280px 1fr; gap: 28px; align-items: start; }

    /* ── Sidebar Card ────────────────────────────────── */
    .avatar-card {
      background: linear-gradient(160deg, #1e2235 60%, #1a1e32);
      border-radius: 22px; padding: 36px 24px 28px; text-align: center;
      border: 1px solid rgba(255,255,255,0.07); position: sticky; top: 80px;
      animation: sideIn 0.55s cubic-bezier(0.16,1,0.3,1) 0.08s both;
      transition: border-color 0.3s, box-shadow 0.3s; overflow: hidden; position: relative;
    }
    .avatar-card:hover { border-color: rgba(79,110,247,0.35); box-shadow: 0 12px 40px rgba(0,0,0,0.35); }
    @keyframes sideIn { from{opacity:0;transform:translateX(-22px)} to{opacity:1;transform:translateX(0)} }

    .avatar-glow {
      position: absolute; top: -40px; left: 50%; transform: translateX(-50%);
      width: 160px; height: 160px; border-radius: 50%;
      background: radial-gradient(circle, rgba(79,110,247,0.18) 0%, transparent 70%);
      pointer-events: none;
    }
    .avatar-ring {
      width: 96px; height: 96px; margin: 0 auto 6px;
      border-radius: 50%; padding: 3px; position: relative;
      background: linear-gradient(135deg, #4f6ef7, #8b5cf6);
      box-shadow: 0 0 0 4px rgba(79,110,247,0.12);
      transition: box-shadow 0.3s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
      cursor: pointer;
    }
    .avatar-ring:hover { transform: scale(1.07); box-shadow: 0 0 0 6px rgba(79,110,247,0.2), 0 8px 28px rgba(79,110,247,0.35); }
    .avatar-ring.uploading { cursor: wait; pointer-events: none; opacity: 0.75; }
    .avatar-circle {
      width: 100%; height: 100%;
      background: linear-gradient(135deg, #4f6ef7, #8b5cf6); color: white;
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      font-size: 2.1rem; font-weight: 800; border: 3px solid #12141f; overflow: hidden;
    }
    .avatar-img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
    .avatar-overlay {
      position: absolute; inset: 0; border-radius: 50%;
      background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center;
      opacity: 0; transition: opacity 0.2s; pointer-events: none;
    }
    .avatar-overlay svg { width: 22px; height: 22px; color: white; }
    .avatar-ring:hover .avatar-overlay { opacity: 1; }
    .upload-spinner {
      width: 22px; height: 22px; border-radius: 50%;
      border: 2px solid rgba(255,255,255,0.3); border-top-color: white;
      animation: spin 0.7s linear infinite; display: inline-block;
    }
    .avatar-ring.uploading .avatar-overlay { opacity: 1; }
    .avatar-hint { font-size: 0.72rem; color: #4b5563; margin: 0 0 14px; transition: color 0.2s; }
    .avatar-ring:hover ~ .avatar-hint, .avatar-hint:hover { color: #7c8ff7; }
    .avatar-alert { font-size: 0.8rem; padding: 8px 12px; margin: 0 0 12px; text-align: left; }
    .sidebar-name { font-weight: 800; font-size: 1.15rem; margin: 0 0 5px; color: #e8eaf6; }
    .sidebar-email { color: #6b7280; font-size: 0.82rem; margin: 0 0 14px; word-break: break-all; }

    .role-badge {
      display: inline-flex; align-items: center; gap: 6px;
      background: rgba(79,110,247,0.12); color: #a5b4fc;
      padding: 5px 14px; border-radius: 20px; font-size: 0.78rem; font-weight: 700;
      text-transform: capitalize; border: 1px solid rgba(79,110,247,0.2);
    }
    .role-badge.role-admin { background: rgba(251,191,36,0.1); color: #fbbf24; border-color: rgba(251,191,36,0.2); }
    .role-badge.role-admin .role-dot { background: #fbbf24; }
    .role-dot { width: 7px; height: 7px; border-radius: 50%; background: #4f6ef7; display: inline-block; }

    .sidebar-divider { height: 1px; background: rgba(255,255,255,0.06); margin: 22px 0; }

    .sidebar-stats { display: flex; flex-direction: column; gap: 12px; text-align: left; }
    .stat-item {
      display: flex; align-items: center; gap: 12px;
      background: rgba(255,255,255,0.03); border-radius: 10px; padding: 10px 14px;
      border: 1px solid rgba(255,255,255,0.04); transition: background 0.2s, border-color 0.2s;
    }
    .stat-item:hover { background: rgba(79,110,247,0.07); border-color: rgba(79,110,247,0.15); }
    .stat-icon { font-size: 1rem; line-height: 1; }
    .stat-info { display: flex; flex-direction: column; }
    .stat-label { font-size: 0.72rem; color: #6b7280; font-weight: 500; }
    .stat-value { font-size: 0.85rem; color: #c9cbdf; font-weight: 600; }

    /* ── Main Content ────────────────────────────────── */
    .profile-content { display: flex; flex-direction: column; gap: 22px; }

    .section-card {
      background: linear-gradient(160deg, #1e2235 70%, #1a1e32);
      border-radius: 20px; padding: 30px;
      border: 1px solid rgba(255,255,255,0.06);
      animation: cardIn 0.5s cubic-bezier(0.16,1,0.3,1) both;
      transition: border-color 0.3s, box-shadow 0.3s;
    }
    .section-card:hover { border-color: rgba(255,255,255,0.1); }
    .section-card:nth-child(1) { animation-delay: 0.12s; }
    .section-card:nth-child(2) { animation-delay: 0.22s; }
    @keyframes cardIn { from{opacity:0;transform:translateY(18px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }

    .section-header { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 26px; }
    .section-icon-wrap {
      width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;
      background: rgba(79,110,247,0.15); border: 1px solid rgba(79,110,247,0.2);
      display: flex; align-items: center; justify-content: center; color: #7c8ff7;
    }
    .section-icon-wrap svg { width: 20px; height: 20px; }
    .section-icon-wrap.accent-purple { background: rgba(139,92,246,0.15); border-color: rgba(139,92,246,0.2); color: #a78bfa; }
    .section-title { font-size: 1.1rem; font-weight: 700; color: #e8eaf6; margin: 0 0 3px; }
    .section-desc { font-size: 0.82rem; color: #6b7280; margin: 0; }

    /* ── Alerts ──────────────────────────────────────── */
    .alert {
      display: flex; align-items: center; gap: 10px;
      padding: 12px 16px; border-radius: 10px; margin-bottom: 20px;
      font-size: 0.88rem; animation: alertIn 0.3s ease both;
    }
    @keyframes alertIn { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }
    .alert-icon { font-size: 1rem; font-weight: 700; line-height: 1; }
    .alert-success { background: rgba(34,197,94,0.08); color: #4ade80; border: 1px solid rgba(34,197,94,0.25); }
    .alert-error   { background: rgba(220,38,38,0.08);  color: #f87171; border: 1px solid rgba(239,68,68,0.25); }

    /* ── Forms ───────────────────────────────────────── */
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 0; }
    .form-group { display: flex; flex-direction: column; margin-bottom: 18px; }
    .form-group:last-child { margin-bottom: 0; }

    .form-label {
      display: flex; align-items: center; gap: 7px;
      font-weight: 600; font-size: 0.82rem; color: #9ca3af; margin-bottom: 8px; letter-spacing: 0.03em;
    }
    .form-label svg { width: 13px; height: 13px; color: #4f6ef7; flex-shrink: 0; }

    .input-wrapper { position: relative; }
    .form-control {
      width: 100%; box-sizing: border-box;
      padding: 11px 16px; padding-right: 44px;
      border: 1.5px solid rgba(255,255,255,0.09); border-radius: 10px;
      font-size: 0.92rem; outline: none;
      transition: border-color 0.25s, box-shadow 0.25s, background 0.2s;
      background: rgba(255,255,255,0.04); color: #e8eaf6;
    }
    .form-control::placeholder { color: #4b5563; }
    .form-control:focus {
      border-color: #4f6ef7;
      box-shadow: 0 0 0 3px rgba(79,110,247,0.15);
      background: rgba(79,110,247,0.04);
    }
    /* When there's no eye button, remove extra right padding */
    .form-group > .form-control { padding-right: 16px; }

    .eye-btn {
      position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
      background: none; border: none; cursor: pointer; color: #6b7280; padding: 4px;
      display: flex; align-items: center; justify-content: center;
      transition: color 0.2s;
    }
    .eye-btn:hover { color: #a5b4fc; }
    .eye-btn svg { width: 16px; height: 16px; }

    /* ── Password Strength ───────────────────────────── */
    .pw-hint { display: flex; align-items: center; gap: 12px; margin: 4px 0 18px; }
    .pw-strength-bar { flex: 1; height: 5px; background: rgba(255,255,255,0.08); border-radius: 99px; overflow: hidden; }
    .pw-strength-fill { height: 100%; border-radius: 99px; transition: width 0.4s ease, background 0.4s ease; }
    .pw-strength-label { font-size: 0.78rem; font-weight: 600; white-space: nowrap; min-width: 56px; text-align: right; }

    /* ── Buttons ─────────────────────────────────────── */
    .form-actions { margin-top: 6px; }
    .btn-save {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 11px 28px;
      background: linear-gradient(135deg, #4f6ef7, #6b7ff7); color: white;
      border: none; border-radius: 11px; font-weight: 700; font-size: 0.92rem; cursor: pointer;
      transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1);
      box-shadow: 0 3px 14px rgba(79,110,247,0.3);
    }
    .btn-save svg { width: 16px; height: 16px; flex-shrink: 0; }
    .btn-save:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 7px 22px rgba(79,110,247,0.5); }
    .btn-save:active:not(:disabled) { transform: scale(0.97); }
    .btn-save:disabled { opacity: 0.45; cursor: not-allowed; transform: none; box-shadow: none; }
    .btn-save.btn-purple { background: linear-gradient(135deg, #7c3aed, #8b5cf6); box-shadow: 0 3px 14px rgba(139,92,246,0.3); }
    .btn-save.btn-purple:hover:not(:disabled) { box-shadow: 0 7px 22px rgba(139,92,246,0.5); }

    /* ── Spinner ─────────────────────────────────────── */
    .spinner {
      width: 15px; height: 15px; border-radius: 50%; flex-shrink: 0;
      border: 2px solid rgba(255,255,255,0.3); border-top-color: white;
      animation: spin 0.7s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* ── Responsive ──────────────────────────────────── */
    @media (max-width: 1024px) {
      .profile-layout { grid-template-columns: 240px 1fr; gap: 20px; }
    }
    @media (max-width: 768px) {
      .profile-layout { grid-template-columns: 1fr; }
      .avatar-card { position: static; padding: 28px 20px 22px; }
      .form-row { grid-template-columns: 1fr; }
      .page-container { padding: 24px 16px 80px; }
      .page-title { font-size: 1.6rem; }
      .section-card { padding: 22px 18px; }
      .btn-save { width: 100%; justify-content: center; padding: 13px; }
    }
    @media (max-width: 480px) {
      .avatar-ring { width: 82px; height: 82px; }
      .avatar-circle { font-size: 1.8rem; }
      .page-title { font-size: 1.35rem; }
      .page-header { margin-bottom: 24px; padding-bottom: 18px; }
    }

    /* ── Crop Modal ──────────────────────────────────── */
    .crop-backdrop {
      position: fixed; inset: 0; z-index: 1000;
      background: rgba(0,0,0,0.75); backdrop-filter: blur(5px);
      display: flex; align-items: center; justify-content: center;
      padding: 20px; animation: backdropIn 0.2s ease both;
    }
    @keyframes backdropIn { from{opacity:0} to{opacity:1} }
    .crop-modal {
      background: #1e2235; border: 1px solid rgba(255,255,255,0.09);
      border-radius: 22px; padding: 24px; width: 100%; max-width: 390px;
      display: flex; flex-direction: column; gap: 18px;
      animation: modalIn 0.28s cubic-bezier(0.16,1,0.3,1) both;
    }
    @keyframes modalIn { from{opacity:0;transform:scale(0.9) translateY(24px)} to{opacity:1;transform:scale(1) translateY(0)} }
    .crop-modal-header { display: flex; align-items: center; justify-content: space-between; }
    .crop-title {
      display: flex; align-items: center; gap: 10px;
      font-size: 1.05rem; font-weight: 700; color: #e8eaf6; margin: 0;
    }
    .crop-title svg { width: 18px; height: 18px; color: #7c8ff7; flex-shrink: 0; }
    .crop-close-btn {
      width: 32px; height: 32px; border-radius: 8px;
      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
      color: #9ca3af; cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: all 0.2s;
    }
    .crop-close-btn:hover { background: rgba(255,255,255,0.1); color: #e8eaf6; }
    .crop-close-btn svg { width: 14px; height: 14px; }
    /* Crop container */
    .crop-container {
      position: relative; width: 320px; height: 320px; overflow: hidden;
      background: #0d0f1a; border-radius: 14px;
      cursor: grab; touch-action: none; user-select: none;
      margin: 0 auto; flex-shrink: 0;
    }
    .crop-container:active { cursor: grabbing; }
    .crop-src-image {
      position: absolute; user-select: none; display: block;
      -webkit-user-drag: none; pointer-events: none;
    }
    /* Dark surround with circular hole via box-shadow trick */
    .crop-circle-guide {
      position: absolute; width: 260px; height: 260px;
      top: 50%; left: 50%; transform: translate(-50%, -50%);
      border-radius: 50%; border: 2px solid rgba(255,255,255,0.75);
      box-shadow: 0 0 0 9999px rgba(0,0,0,0.62);
      pointer-events: none; z-index: 2;
    }
    /* Zoom row */
    .crop-zoom-row { display: flex; align-items: center; gap: 12px; }
    .zoom-icon { width: 18px; height: 18px; color: #6b7280; flex-shrink: 0; }
    .zoom-slider {
      flex: 1; height: 4px; border-radius: 99px; outline: none; cursor: pointer;
      background: rgba(255,255,255,0.1); accent-color: #4f6ef7;
      -webkit-appearance: none; appearance: none;
    }
    .zoom-slider::-webkit-slider-thumb {
      -webkit-appearance: none; width: 18px; height: 18px;
      border-radius: 50%; background: #4f6ef7; cursor: pointer;
      box-shadow: 0 0 0 3px rgba(79,110,247,0.25);
    }
    .crop-hint { font-size: 0.75rem; color: #4b5563; text-align: center; margin: 0; }
    /* Footer buttons */
    .crop-modal-footer { display: flex; gap: 10px; }
    .btn-crop-cancel {
      flex: 1; padding: 11px; background: rgba(255,255,255,0.05); color: #9ca3af;
      border: 1px solid rgba(255,255,255,0.08); border-radius: 10px;
      font-weight: 600; font-size: 0.9rem; cursor: pointer; transition: all 0.2s;
    }
    .btn-crop-cancel:hover { background: rgba(255,255,255,0.1); color: #e8eaf6; }
    .btn-crop-apply {
      flex: 2; padding: 11px; display: flex; align-items: center; justify-content: center; gap: 8px;
      background: linear-gradient(135deg, #4f6ef7, #6b7ff7); color: white;
      border: none; border-radius: 10px; font-weight: 700; font-size: 0.9rem; cursor: pointer;
      transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1);
      box-shadow: 0 3px 14px rgba(79,110,247,0.3);
    }
    .btn-crop-apply:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(79,110,247,0.5); }
    .btn-crop-apply svg { width: 16px; height: 16px; }
    @media (max-width: 400px) {
      .crop-container { width: 280px; height: 280px; }
      .crop-circle-guide { width: 230px; height: 230px; }
    }
  `]
})
export class ProfileComponent implements OnInit {
  @ViewChild('avatarInput') avatarInput!: ElementRef<HTMLInputElement>;
  @ViewChild('cropCanvas') cropCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('cropImageEl') cropImageEl!: ElementRef<HTMLImageElement>;

  user: User | null = null;
  formData = { name: '', phone: '', address: { street: '', city: '', state: '', country: '', zipCode: '' } };
  pwData = { currentPassword: '', newPassword: '', confirmPassword: '' };
  saving = false;
  changingPw = false;
  showCurrent = false;
  showNew = false;
  showConfirm = false;
  uploadingAvatar = false;
  avatarPreview: string | null = null;

  // ── Crop state ────────────────────────────────────────
  cropModalOpen = false;
  cropImageSrc = '';
  cropZoom = 1;
  cropDisplayW = 0;
  cropDisplayH = 0;
  cropOffsetX = 0;
  cropOffsetY = 0;
  private cropNaturalW = 0;
  private cropNaturalH = 0;
  private cropFitScale = 1;
  private isDragging = false;
  private dragStartX = 0;
  private dragStartY = 0;
  private dragStartOffsetX = 0;
  private dragStartOffsetY = 0;
  private touchStartDist = 0;
  private touchStartZoom = 1;
  // Container=320, circle diameter=260, circle starts at 30px from each edge
  private readonly CONTAINER = 320;
  private readonly CIRCLE_START = 30;
  private readonly CIRCLE_SIZE = 260;

  private readonly apiBase = environment.apiUrl.replace('/api', '');

  constructor(private authService: AuthService, private msgService: NotificationService) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      if (user) {
        this.user = user;
        this.formData.name = user.name || '';
        this.formData.phone = user.phone || '';
        if (user.address) {
          this.formData.address = { ...this.formData.address, ...user.address };
        }
      }
    });
  }

  get userInitial(): string { return this.user?.name?.charAt(0).toUpperCase() || '?'; }

  getAvatarUrl(avatar?: string): string {
    if (!avatar) return '';
    if (avatar.startsWith('http')) return avatar;
    return `${this.apiBase}${avatar}`;
  }

  onFilePickedForCrop(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    (event.target as HTMLInputElement).value = '';
    const reader = new FileReader();
    reader.onload = (e) => {
      this.cropImageSrc = e.target?.result as string;
      this.cropModalOpen = true;
    };
    reader.readAsDataURL(file);
  }

  onCropImageLoad(): void {
    const img = this.cropImageEl.nativeElement;
    this.cropNaturalW = img.naturalWidth;
    this.cropNaturalH = img.naturalHeight;
    // Scale so image just covers the circle (260px)
    this.cropFitScale = Math.max(
      this.CIRCLE_SIZE / this.cropNaturalW,
      this.CIRCLE_SIZE / this.cropNaturalH
    );
    this.cropZoom = 1;
    this.cropDisplayW = this.cropNaturalW * this.cropFitScale;
    this.cropDisplayH = this.cropNaturalH * this.cropFitScale;
    this.cropOffsetX = (this.CONTAINER - this.cropDisplayW) / 2;
    this.cropOffsetY = (this.CONTAINER - this.cropDisplayH) / 2;
    this.clampOffset();
  }

  onCropDragStart(e: MouseEvent): void {
    e.preventDefault();
    this.isDragging = true;
    this.dragStartX = e.clientX;
    this.dragStartY = e.clientY;
    this.dragStartOffsetX = this.cropOffsetX;
    this.dragStartOffsetY = this.cropOffsetY;
  }

  onCropDragMove(e: MouseEvent): void {
    if (!this.isDragging) return;
    this.cropOffsetX = this.dragStartOffsetX + (e.clientX - this.dragStartX);
    this.cropOffsetY = this.dragStartOffsetY + (e.clientY - this.dragStartY);
    this.clampOffset();
  }

  onCropDragEnd(): void { this.isDragging = false; }

  onCropWheel(e: WheelEvent): void {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.07 : 0.07;
    this.cropZoom = Math.min(3, Math.max(1, this.cropZoom + delta));
    this.onCropZoomChange();
  }

  onCropTouchStart(e: TouchEvent): void {
    e.preventDefault();
    if (e.touches.length === 1) {
      this.isDragging = true;
      this.dragStartX = e.touches[0].clientX;
      this.dragStartY = e.touches[0].clientY;
      this.dragStartOffsetX = this.cropOffsetX;
      this.dragStartOffsetY = this.cropOffsetY;
    } else if (e.touches.length === 2) {
      this.isDragging = false;
      this.touchStartDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      this.touchStartZoom = this.cropZoom;
    }
  }

  onCropTouchMove(e: TouchEvent): void {
    e.preventDefault();
    if (e.touches.length === 1 && this.isDragging) {
      this.cropOffsetX = this.dragStartOffsetX + (e.touches[0].clientX - this.dragStartX);
      this.cropOffsetY = this.dragStartOffsetY + (e.touches[0].clientY - this.dragStartY);
      this.clampOffset();
    } else if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      this.cropZoom = Math.min(3, Math.max(1, this.touchStartZoom * (dist / this.touchStartDist)));
      this.onCropZoomChange();
    }
  }

  onCropZoomChange(): void {
    const newW = this.cropNaturalW * this.cropFitScale * this.cropZoom;
    const newH = this.cropNaturalH * this.cropFitScale * this.cropZoom;
    // Keep the circle center fixed in image space
    const cx = this.CONTAINER / 2;
    const cy = this.CONTAINER / 2;
    const imgCX = (cx - this.cropOffsetX) / this.cropDisplayW;
    const imgCY = (cy - this.cropOffsetY) / this.cropDisplayH;
    this.cropDisplayW = newW;
    this.cropDisplayH = newH;
    this.cropOffsetX = cx - imgCX * newW;
    this.cropOffsetY = cy - imgCY * newH;
    this.clampOffset();
  }

  private clampOffset(): void {
    const circleEnd = this.CIRCLE_START + this.CIRCLE_SIZE;
    this.cropOffsetX = Math.min(this.CIRCLE_START, Math.max(circleEnd - this.cropDisplayW, this.cropOffsetX));
    this.cropOffsetY = Math.min(this.CIRCLE_START, Math.max(circleEnd - this.cropDisplayH, this.cropOffsetY));
  }

  onBackdropClick(e: MouseEvent): void {
    if (e.target === e.currentTarget) this.closeCropModal();
  }

  closeCropModal(): void {
    this.cropModalOpen = false;
    this.cropImageSrc = '';
  }

  applyCrop(): void {
    const canvas = this.cropCanvas.nativeElement;
    const ctx = canvas.getContext('2d')!;
    const img = this.cropImageEl.nativeElement;
    const OUT = 300;
    ctx.clearRect(0, 0, OUT, OUT);
    ctx.save();
    ctx.beginPath();
    ctx.arc(OUT / 2, OUT / 2, OUT / 2, 0, Math.PI * 2);
    ctx.clip();
    const srcX = (this.CIRCLE_START - this.cropOffsetX) / this.cropDisplayW * this.cropNaturalW;
    const srcY = (this.CIRCLE_START - this.cropOffsetY) / this.cropDisplayH * this.cropNaturalH;
    const srcW = this.CIRCLE_SIZE / this.cropDisplayW * this.cropNaturalW;
    const srcH = this.CIRCLE_SIZE / this.cropDisplayH * this.cropNaturalH;
    ctx.drawImage(img, srcX, srcY, srcW, srcH, 0, 0, OUT, OUT);
    ctx.restore();
    const preview = canvas.toDataURL('image/png');
    canvas.toBlob(blob => {
      if (!blob) return;
      this.closeCropModal();
      this.avatarPreview = preview;
      this.uploadingAvatar = true;
      const file = new File([blob], 'avatar.png', { type: 'image/png' });
      this.authService.uploadAvatar(file).subscribe({
        next: () => {
          this.uploadingAvatar = false;
          this.avatarPreview = null;
          this.msgService.success('Photo updated!');
        },
        error: (err) => {
          this.uploadingAvatar = false;
          this.avatarPreview = null;
          this.msgService.error(err.error?.message || 'Upload failed');
        }
      });
    }, 'image/png');
  }

  get pwStrengthWidth(): string {
    const p = this.pwData.newPassword;
    if (!p) return '0%';
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    return `${(score / 4) * 100}%`;
  }

  get pwStrengthColor(): string {
    const p = this.pwData.newPassword;
    if (!p) return '#4b5563';
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    if (score <= 1) return '#ef4444';
    if (score === 2) return '#f59e0b';
    if (score === 3) return '#3b82f6';
    return '#22c55e';
  }

  get pwStrengthLabel(): string {
    const p = this.pwData.newPassword;
    if (!p) return '';
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    if (score <= 1) return 'Weak';
    if (score === 2) return 'Fair';
    if (score === 3) return 'Good';
    return 'Strong';
  }

  updateProfile() {
    this.saving = true;
    this.authService.updateProfile(this.formData).subscribe({
      next: () => { this.saving = false; this.msgService.success('Profile updated successfully!'); },
      error: (err) => { this.saving = false; this.msgService.error(err.error?.message || 'Update failed'); }
    });
  }

  changePassword() {
    if (this.pwData.newPassword !== this.pwData.confirmPassword) {
      this.msgService.error('Passwords do not match');
      return;
    }
    this.changingPw = true;
    this.authService.changePassword({ currentPassword: this.pwData.currentPassword, newPassword: this.pwData.newPassword }).subscribe({
      next: () => {
        this.changingPw = false;
        this.msgService.success('Password changed successfully!');
        this.pwData = { currentPassword: '', newPassword: '', confirmPassword: '' };
      },
      error: (err) => { this.changingPw = false; this.msgService.error(err.error?.message || 'Failed to change password'); }
    });
  }
}
