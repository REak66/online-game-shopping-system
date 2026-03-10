import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RangeValueAccessor
} from "./chunk-QGP2PKSJ.js";
import {
  MessageService
} from "./chunk-JLEF55SF.js";
import {
  AuthService
} from "./chunk-QQSXDC4N.js";
import {
  environment
} from "./chunk-QLMOGZJX.js";
import {
  CommonModule,
  Component,
  NgIf,
  ViewChild,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-IXUP4X5N.js";

// src/app/features/profile/profile.component.ts
var _c0 = ["avatarInput"];
var _c1 = ["cropCanvas"];
var _c2 = ["cropImageEl"];
function ProfileComponent_img_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 89);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r2.avatarPreview || ctx_r2.getAvatarUrl(ctx_r2.user == null ? null : ctx_r2.user.avatar), \u0275\u0275sanitizeUrl);
  }
}
function ProfileComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.userInitial);
  }
}
function ProfileComponent__svg_svg_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 36);
    \u0275\u0275element(1, "path", 67)(2, "circle", 68);
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 90);
  }
}
function ProfileComponent__svg_svg_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 70);
    \u0275\u0275element(1, "path", 91)(2, "polyline", 92)(3, "polyline", 93);
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_span_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 94);
  }
}
function ProfileComponent__svg_svg_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 36);
    \u0275\u0275element(1, "path", 95)(2, "circle", 96);
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent__svg_svg_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 36);
    \u0275\u0275element(1, "path", 97)(2, "line", 98);
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent__svg_svg_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 36);
    \u0275\u0275element(1, "path", 95)(2, "circle", 96);
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent__svg_svg_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 36);
    \u0275\u0275element(1, "path", 97)(2, "line", 98);
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent__svg_svg_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 36);
    \u0275\u0275element(1, "path", 95)(2, "circle", 96);
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent__svg_svg_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 36);
    \u0275\u0275element(1, "path", 97)(2, "line", 98);
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_div_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "div", 100);
    \u0275\u0275element(2, "div", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 102);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.pwStrengthWidth)("background", ctx_r2.pwStrengthColor);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.pwStrengthColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.pwStrengthLabel);
  }
}
function ProfileComponent__svg_svg_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 70);
    \u0275\u0275element(1, "rect", 52)(2, "path", 53);
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_span_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 94);
  }
}
var ProfileComponent = class _ProfileComponent {
  constructor(authService, msgService) {
    this.authService = authService;
    this.msgService = msgService;
    this.user = null;
    this.formData = { name: "", phone: "", address: { street: "", city: "", state: "", country: "", zipCode: "" } };
    this.pwData = { currentPassword: "", newPassword: "", confirmPassword: "" };
    this.saving = false;
    this.changingPw = false;
    this.showCurrent = false;
    this.showNew = false;
    this.showConfirm = false;
    this.uploadingAvatar = false;
    this.avatarPreview = null;
    this.cropModalOpen = false;
    this.cropImageSrc = "";
    this.cropZoom = 1;
    this.cropDisplayW = 0;
    this.cropDisplayH = 0;
    this.cropOffsetX = 0;
    this.cropOffsetY = 0;
    this.cropNaturalW = 0;
    this.cropNaturalH = 0;
    this.cropFitScale = 1;
    this.isDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
    this.dragStartOffsetX = 0;
    this.dragStartOffsetY = 0;
    this.touchStartDist = 0;
    this.touchStartZoom = 1;
    this.CONTAINER = 320;
    this.CIRCLE_START = 30;
    this.CIRCLE_SIZE = 260;
    this.apiBase = environment.apiUrl.replace("/api", "");
  }
  ngOnInit() {
    this.authService.currentUser$.subscribe((user) => {
      if (user) {
        this.user = user;
        this.formData.name = user.name || "";
        this.formData.phone = user.phone || "";
        if (user.address) {
          this.formData.address = __spreadValues(__spreadValues({}, this.formData.address), user.address);
        }
      }
    });
  }
  get userInitial() {
    return this.user?.name?.charAt(0).toUpperCase() || "?";
  }
  getAvatarUrl(avatar) {
    if (!avatar)
      return "";
    if (avatar.startsWith("http"))
      return avatar;
    return `${this.apiBase}${avatar}`;
  }
  onFilePickedForCrop(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    event.target.value = "";
    const reader = new FileReader();
    reader.onload = (e) => {
      this.cropImageSrc = e.target?.result;
      this.cropModalOpen = true;
    };
    reader.readAsDataURL(file);
  }
  onCropImageLoad() {
    const img = this.cropImageEl.nativeElement;
    this.cropNaturalW = img.naturalWidth;
    this.cropNaturalH = img.naturalHeight;
    this.cropFitScale = Math.max(this.CIRCLE_SIZE / this.cropNaturalW, this.CIRCLE_SIZE / this.cropNaturalH);
    this.cropZoom = 1;
    this.cropDisplayW = this.cropNaturalW * this.cropFitScale;
    this.cropDisplayH = this.cropNaturalH * this.cropFitScale;
    this.cropOffsetX = (this.CONTAINER - this.cropDisplayW) / 2;
    this.cropOffsetY = (this.CONTAINER - this.cropDisplayH) / 2;
    this.clampOffset();
  }
  onCropDragStart(e) {
    e.preventDefault();
    this.isDragging = true;
    this.dragStartX = e.clientX;
    this.dragStartY = e.clientY;
    this.dragStartOffsetX = this.cropOffsetX;
    this.dragStartOffsetY = this.cropOffsetY;
  }
  onCropDragMove(e) {
    if (!this.isDragging)
      return;
    this.cropOffsetX = this.dragStartOffsetX + (e.clientX - this.dragStartX);
    this.cropOffsetY = this.dragStartOffsetY + (e.clientY - this.dragStartY);
    this.clampOffset();
  }
  onCropDragEnd() {
    this.isDragging = false;
  }
  onCropWheel(e) {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.07 : 0.07;
    this.cropZoom = Math.min(3, Math.max(1, this.cropZoom + delta));
    this.onCropZoomChange();
  }
  onCropTouchStart(e) {
    e.preventDefault();
    if (e.touches.length === 1) {
      this.isDragging = true;
      this.dragStartX = e.touches[0].clientX;
      this.dragStartY = e.touches[0].clientY;
      this.dragStartOffsetX = this.cropOffsetX;
      this.dragStartOffsetY = this.cropOffsetY;
    } else if (e.touches.length === 2) {
      this.isDragging = false;
      this.touchStartDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      this.touchStartZoom = this.cropZoom;
    }
  }
  onCropTouchMove(e) {
    e.preventDefault();
    if (e.touches.length === 1 && this.isDragging) {
      this.cropOffsetX = this.dragStartOffsetX + (e.touches[0].clientX - this.dragStartX);
      this.cropOffsetY = this.dragStartOffsetY + (e.touches[0].clientY - this.dragStartY);
      this.clampOffset();
    } else if (e.touches.length === 2) {
      const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      this.cropZoom = Math.min(3, Math.max(1, this.touchStartZoom * (dist / this.touchStartDist)));
      this.onCropZoomChange();
    }
  }
  onCropZoomChange() {
    const newW = this.cropNaturalW * this.cropFitScale * this.cropZoom;
    const newH = this.cropNaturalH * this.cropFitScale * this.cropZoom;
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
  clampOffset() {
    const circleEnd = this.CIRCLE_START + this.CIRCLE_SIZE;
    this.cropOffsetX = Math.min(this.CIRCLE_START, Math.max(circleEnd - this.cropDisplayW, this.cropOffsetX));
    this.cropOffsetY = Math.min(this.CIRCLE_START, Math.max(circleEnd - this.cropDisplayH, this.cropOffsetY));
  }
  onBackdropClick(e) {
    if (e.target === e.currentTarget)
      this.closeCropModal();
  }
  closeCropModal() {
    this.cropModalOpen = false;
    this.cropImageSrc = "";
  }
  applyCrop() {
    const canvas = this.cropCanvas.nativeElement;
    const ctx = canvas.getContext("2d");
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
    const preview = canvas.toDataURL("image/png");
    canvas.toBlob((blob) => {
      if (!blob)
        return;
      this.closeCropModal();
      this.avatarPreview = preview;
      this.uploadingAvatar = true;
      this.avatarPreview = null;
      const file = new File([blob], "avatar.png", { type: "image/png" });
      this.authService.uploadAvatar(file).subscribe({
        next: () => {
          this.uploadingAvatar = false;
          this.msgService.success("Photo updated!");
        },
        error: (err) => {
          this.uploadingAvatar = false;
          this.avatarPreview = null;
          this.msgService.error(err.error?.message || "Upload failed");
        }
      });
    }, "image/png");
  }
  get pwStrengthWidth() {
    const p = this.pwData.newPassword;
    if (!p)
      return "0%";
    let score = 0;
    if (p.length >= 8)
      score++;
    if (/[A-Z]/.test(p))
      score++;
    if (/[0-9]/.test(p))
      score++;
    if (/[^A-Za-z0-9]/.test(p))
      score++;
    return `${score / 4 * 100}%`;
  }
  get pwStrengthColor() {
    const p = this.pwData.newPassword;
    if (!p)
      return "#4b5563";
    let score = 0;
    if (p.length >= 8)
      score++;
    if (/[A-Z]/.test(p))
      score++;
    if (/[0-9]/.test(p))
      score++;
    if (/[^A-Za-z0-9]/.test(p))
      score++;
    if (score <= 1)
      return "#ef4444";
    if (score === 2)
      return "#f59e0b";
    if (score === 3)
      return "#3b82f6";
    return "#22c55e";
  }
  get pwStrengthLabel() {
    const p = this.pwData.newPassword;
    if (!p)
      return "";
    let score = 0;
    if (p.length >= 8)
      score++;
    if (/[A-Z]/.test(p))
      score++;
    if (/[0-9]/.test(p))
      score++;
    if (/[^A-Za-z0-9]/.test(p))
      score++;
    if (score <= 1)
      return "Weak";
    if (score === 2)
      return "Fair";
    if (score === 3)
      return "Good";
    return "Strong";
  }
  updateProfile() {
    this.saving = true;
    this.authService.updateProfile(this.formData).subscribe({
      next: () => {
        this.saving = false;
        this.msgService.success("Profile updated successfully!");
      },
      error: (err) => {
        this.saving = false;
        this.msgService.error(err.error?.message || "Update failed");
      }
    });
  }
  changePassword() {
    if (this.pwData.newPassword !== this.pwData.confirmPassword) {
      this.msgService.error("Passwords do not match");
      return;
    }
    this.changingPw = true;
    this.authService.changePassword({ currentPassword: this.pwData.currentPassword, newPassword: this.pwData.newPassword }).subscribe({
      next: () => {
        this.changingPw = false;
        this.msgService.success("Password changed successfully!");
        this.pwData = { currentPassword: "", newPassword: "", confirmPassword: "" };
      },
      error: (err) => {
        this.changingPw = false;
        this.msgService.error(err.error?.message || "Failed to change password");
      }
    });
  }
  static {
    this.\u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], viewQuery: function ProfileComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.avatarInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cropCanvas = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cropImageEl = _t.first);
      }
    }, decls: 165, vars: 46, consts: [["avatarInput", ""], ["cropImageEl", ""], ["cropCanvas", ""], [1, "page-container"], [1, "page-header"], [1, "page-header-text"], [1, "page-title"], [1, "page-subtitle"], [1, "profile-layout"], [1, "profile-sidebar"], [1, "avatar-card"], [1, "avatar-glow"], ["type", "file", "accept", "image/jpeg,image/png,image/webp,image/gif", 2, "display", "none", 3, "change"], ["title", "Click to change photo", 1, "avatar-ring", 3, "click"], [1, "avatar-circle"], ["alt", "avatar", "class", "avatar-img", 3, "src", 4, "ngIf"], [4, "ngIf"], [1, "avatar-overlay"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["class", "upload-spinner", 4, "ngIf"], [1, "avatar-hint"], [1, "sidebar-name"], [1, "sidebar-email"], [1, "role-badge"], [1, "role-dot"], [1, "sidebar-divider"], [1, "sidebar-stats"], [1, "stat-item"], [1, "stat-icon"], [1, "stat-info"], [1, "stat-label"], [1, "stat-value"], [1, "profile-content"], [1, "section-card"], [1, "section-header"], [1, "section-icon-wrap"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "section-title"], [1, "section-desc"], [1, "form-row"], [1, "form-group"], [1, "form-label"], ["type", "text", "placeholder", "Enter your full name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"], ["type", "tel", "placeholder", "+1 234 567 8900", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-actions"], [1, "btn-save", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", 4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "section-icon-wrap", "accent-purple"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], [1, "form-group", 2, "margin-bottom", "16px"], [1, "input-wrapper"], ["placeholder", "Enter current password", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "eye-btn", 3, "click"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["placeholder", "Enter new password", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], ["placeholder", "Confirm new password", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], ["class", "pw-hint", 4, "ngIf"], [1, "btn-save", "btn-purple", 3, "click", "disabled"], [1, "crop-backdrop", 3, "mousedown"], [1, "crop-modal", 3, "mousedown"], [1, "crop-modal-header"], [1, "crop-title"], ["d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"], ["cx", "12", "cy", "13", "r", "4"], [1, "crop-close-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "crop-container", 3, "mousedown", "mousemove", "mouseup", "mouseleave", "wheel", "touchstart", "touchmove", "touchend"], ["alt", "crop preview", 1, "crop-src-image", 3, "load", "src"], [1, "crop-circle-guide"], [1, "crop-zoom-row"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "zoom-icon"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["x1", "8", "y1", "11", "x2", "14", "y2", "11"], ["type", "range", "min", "1", "max", "3", "step", "0.01", 1, "zoom-slider", 3, "ngModelChange", "ngModel"], ["x1", "11", "y1", "8", "x2", "11", "y2", "14"], [1, "crop-hint"], [1, "crop-modal-footer"], [1, "btn-crop-cancel", 3, "click"], [1, "btn-crop-apply", 3, "click"], ["points", "20 6 9 17 4 12"], ["width", "300", "height", "300", 2, "display", "none"], ["alt", "avatar", 1, "avatar-img", 3, "src"], [1, "upload-spinner"], ["d", "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"], ["points", "17 21 17 13 7 13 7 21"], ["points", "7 3 7 8 15 8"], [1, "spinner"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], [1, "pw-hint"], [1, "pw-strength-bar"], [1, "pw-strength-fill"], [1, "pw-strength-label"]], template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "h1", 6);
        \u0275\u0275text(4, "My Profile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 7);
        \u0275\u0275text(6, "Manage your account details and security settings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 8)(8, "aside", 9)(9, "div", 10);
        \u0275\u0275element(10, "div", 11);
        \u0275\u0275elementStart(11, "input", 12, 0);
        \u0275\u0275listener("change", function ProfileComponent_Template_input_change_11_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFilePickedForCrop($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 13);
        \u0275\u0275listener("click", function ProfileComponent_Template_div_click_13_listener() {
          \u0275\u0275restoreView(_r1);
          const avatarInput_r2 = \u0275\u0275reference(12);
          return \u0275\u0275resetView(avatarInput_r2.click());
        });
        \u0275\u0275elementStart(14, "div", 14);
        \u0275\u0275template(15, ProfileComponent_img_15_Template, 1, 1, "img", 15)(16, ProfileComponent_span_16_Template, 2, 1, "span", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 17);
        \u0275\u0275template(18, ProfileComponent__svg_svg_18_Template, 3, 0, "svg", 18)(19, ProfileComponent_span_19_Template, 1, 0, "span", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "p", 20);
        \u0275\u0275text(21, "Click photo to upload");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "h2", 21);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p", 22);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 23);
        \u0275\u0275element(27, "span", 24);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "div", 25);
        \u0275\u0275elementStart(30, "div", 26)(31, "div", 27)(32, "span", 28);
        \u0275\u0275text(33, "\u2709");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 29)(35, "span", 30);
        \u0275\u0275text(36, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span", 31);
        \u0275\u0275text(38, "Verified");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "div", 27)(40, "span", 28);
        \u0275\u0275text(41, "\u{1F512}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 29)(43, "span", 30);
        \u0275\u0275text(44, "Security");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "span", 31);
        \u0275\u0275text(46, "Protected");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(47, "main", 32)(48, "div", 33)(49, "div", 34)(50, "div", 35);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(51, "svg", 36);
        \u0275\u0275element(52, "path", 37)(53, "circle", 38);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(54, "div")(55, "h2", 39);
        \u0275\u0275text(56, "Personal Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "p", 40);
        \u0275\u0275text(58, "Update your name and contact details");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(59, "div", 41)(60, "div", 42)(61, "label", 43);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(62, "svg", 36);
        \u0275\u0275element(63, "path", 37)(64, "circle", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275text(65, " Full Name ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(66, "input", 44);
        \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_66_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.formData.name, $event) || (ctx.formData.name = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "div", 42)(68, "label", 43);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(69, "svg", 36);
        \u0275\u0275element(70, "path", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275text(71, " Phone Number ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(72, "input", 46);
        \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_72_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.formData.phone, $event) || (ctx.formData.phone = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(73, "div", 47)(74, "button", 48);
        \u0275\u0275listener("click", function ProfileComponent_Template_button_click_74_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.updateProfile());
        });
        \u0275\u0275template(75, ProfileComponent__svg_svg_75_Template, 4, 0, "svg", 49)(76, ProfileComponent_span_76_Template, 1, 0, "span", 50);
        \u0275\u0275text(77);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "div", 33)(79, "div", 34)(80, "div", 51);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(81, "svg", 36);
        \u0275\u0275element(82, "rect", 52)(83, "path", 53);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(84, "div")(85, "h2", 39);
        \u0275\u0275text(86, "Change Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "p", 40);
        \u0275\u0275text(88, "Keep your account safe with a strong password");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(89, "div", 54)(90, "label", 43);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(91, "svg", 36);
        \u0275\u0275element(92, "rect", 52)(93, "path", 53);
        \u0275\u0275elementEnd();
        \u0275\u0275text(94, " Current Password ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(95, "div", 55)(96, "input", 56);
        \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_96_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.pwData.currentPassword, $event) || (ctx.pwData.currentPassword = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "button", 57);
        \u0275\u0275listener("click", function ProfileComponent_Template_button_click_97_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.showCurrent = !ctx.showCurrent);
        });
        \u0275\u0275template(98, ProfileComponent__svg_svg_98_Template, 3, 0, "svg", 18)(99, ProfileComponent__svg_svg_99_Template, 3, 0, "svg", 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(100, "div", 41)(101, "div", 42)(102, "label", 43);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(103, "svg", 36);
        \u0275\u0275element(104, "path", 58);
        \u0275\u0275elementEnd();
        \u0275\u0275text(105, " New Password ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(106, "div", 55)(107, "input", 59);
        \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_107_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.pwData.newPassword, $event) || (ctx.pwData.newPassword = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "button", 57);
        \u0275\u0275listener("click", function ProfileComponent_Template_button_click_108_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.showNew = !ctx.showNew);
        });
        \u0275\u0275template(109, ProfileComponent__svg_svg_109_Template, 3, 0, "svg", 18)(110, ProfileComponent__svg_svg_110_Template, 3, 0, "svg", 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(111, "div", 42)(112, "label", 43);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(113, "svg", 36);
        \u0275\u0275element(114, "path", 58);
        \u0275\u0275elementEnd();
        \u0275\u0275text(115, " Confirm New Password ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(116, "div", 55)(117, "input", 60);
        \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_117_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.pwData.confirmPassword, $event) || (ctx.pwData.confirmPassword = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "button", 57);
        \u0275\u0275listener("click", function ProfileComponent_Template_button_click_118_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.showConfirm = !ctx.showConfirm);
        });
        \u0275\u0275template(119, ProfileComponent__svg_svg_119_Template, 3, 0, "svg", 18)(120, ProfileComponent__svg_svg_120_Template, 3, 0, "svg", 18);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(121, ProfileComponent_div_121_Template, 5, 7, "div", 61);
        \u0275\u0275elementStart(122, "div", 47)(123, "button", 62);
        \u0275\u0275listener("click", function ProfileComponent_Template_button_click_123_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.changePassword());
        });
        \u0275\u0275template(124, ProfileComponent__svg_svg_124_Template, 3, 0, "svg", 49)(125, ProfileComponent_span_125_Template, 1, 0, "span", 50);
        \u0275\u0275text(126);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(127, "div", 63);
        \u0275\u0275listener("mousedown", function ProfileComponent_Template_div_mousedown_127_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onBackdropClick($event));
        });
        \u0275\u0275elementStart(128, "div", 64);
        \u0275\u0275listener("mousedown", function ProfileComponent_Template_div_mousedown_128_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.stopPropagation());
        });
        \u0275\u0275elementStart(129, "div", 65)(130, "h3", 66);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(131, "svg", 36);
        \u0275\u0275element(132, "path", 67)(133, "circle", 68);
        \u0275\u0275elementEnd();
        \u0275\u0275text(134, " Crop Photo ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(135, "button", 69);
        \u0275\u0275listener("click", function ProfileComponent_Template_button_click_135_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeCropModal());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(136, "svg", 70);
        \u0275\u0275element(137, "line", 71)(138, "line", 72);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(139, "div", 73);
        \u0275\u0275listener("mousedown", function ProfileComponent_Template_div_mousedown_139_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCropDragStart($event));
        })("mousemove", function ProfileComponent_Template_div_mousemove_139_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCropDragMove($event));
        })("mouseup", function ProfileComponent_Template_div_mouseup_139_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCropDragEnd());
        })("mouseleave", function ProfileComponent_Template_div_mouseleave_139_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCropDragEnd());
        })("wheel", function ProfileComponent_Template_div_wheel_139_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCropWheel($event));
        })("touchstart", function ProfileComponent_Template_div_touchstart_139_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCropTouchStart($event));
        })("touchmove", function ProfileComponent_Template_div_touchmove_139_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCropTouchMove($event));
        })("touchend", function ProfileComponent_Template_div_touchend_139_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCropDragEnd());
        });
        \u0275\u0275elementStart(140, "img", 74, 1);
        \u0275\u0275listener("load", function ProfileComponent_Template_img_load_140_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCropImageLoad());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(142, "div", 75);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "div", 76);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(144, "svg", 77);
        \u0275\u0275element(145, "circle", 78)(146, "line", 79)(147, "line", 80);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(148, "input", 81);
        \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_148_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.cropZoom, $event) || (ctx.cropZoom = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_148_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCropZoomChange());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(149, "svg", 77);
        \u0275\u0275element(150, "circle", 78)(151, "line", 79)(152, "line", 80)(153, "line", 82);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(154, "p", 83);
        \u0275\u0275text(155, "Drag to reposition \xB7 Scroll or pinch to zoom");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "div", 84)(157, "button", 85);
        \u0275\u0275listener("click", function ProfileComponent_Template_button_click_157_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeCropModal());
        });
        \u0275\u0275text(158, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "button", 86);
        \u0275\u0275listener("click", function ProfileComponent_Template_button_click_159_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.applyCrop());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(160, "svg", 70);
        \u0275\u0275element(161, "polyline", 87);
        \u0275\u0275elementEnd();
        \u0275\u0275text(162, " Apply & Upload ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(163, "canvas", 88, 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275classProp("uploading", ctx.uploadingAvatar);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.avatarPreview || (ctx.user == null ? null : ctx.user.avatar));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.avatarPreview && !(ctx.user == null ? null : ctx.user.avatar));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.uploadingAvatar);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.uploadingAvatar);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.user == null ? null : ctx.user.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.user == null ? null : ctx.user.email);
        \u0275\u0275advance();
        \u0275\u0275classProp("role-admin", (ctx.user == null ? null : ctx.user.role) === "admin");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.user == null ? null : ctx.user.role, " ");
        \u0275\u0275advance(38);
        \u0275\u0275twoWayProperty("ngModel", ctx.formData.name);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.formData.phone);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.saving);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.saving);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.saving);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.saving ? "Saving..." : "Save Changes", " ");
        \u0275\u0275advance(19);
        \u0275\u0275property("type", ctx.showCurrent ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.pwData.currentPassword);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.showCurrent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCurrent);
        \u0275\u0275advance(8);
        \u0275\u0275property("type", ctx.showNew ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.pwData.newPassword);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.showNew);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNew);
        \u0275\u0275advance(7);
        \u0275\u0275property("type", ctx.showConfirm ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.pwData.confirmPassword);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.showConfirm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showConfirm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pwData.newPassword);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.changingPw);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.changingPw);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.changingPw);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.changingPw ? "Updating..." : "Change Password", " ");
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.cropModalOpen ? "flex" : "none");
        \u0275\u0275advance(13);
        \u0275\u0275styleProp("width", ctx.cropDisplayW, "px")("height", ctx.cropDisplayH, "px")("left", ctx.cropOffsetX, "px")("top", ctx.cropOffsetY, "px");
        \u0275\u0275property("src", ctx.cropImageSrc, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.cropZoom);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, RangeValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n.page-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 40px 24px 80px;\n  animation: _ngcontent-%COMP%_pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(22px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 36px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #e8eaf6;\n  margin: 0 0 4px;\n  background:\n    linear-gradient(\n      135deg,\n      #e8eaf6 40%,\n      #a5b4fc);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.9rem;\n  margin: 0;\n}\n.profile-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  gap: 28px;\n  align-items: start;\n}\n.avatar-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      160deg,\n      #1e2235 60%,\n      #1a1e32);\n  border-radius: 22px;\n  padding: 36px 24px 28px;\n  text-align: center;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  position: sticky;\n  top: 80px;\n  animation: _ngcontent-%COMP%_sideIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.08s both;\n  transition: border-color 0.3s, box-shadow 0.3s;\n  overflow: hidden;\n  position: relative;\n}\n.avatar-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(79, 110, 247, 0.35);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);\n}\n@keyframes _ngcontent-%COMP%_sideIn {\n  from {\n    opacity: 0;\n    transform: translateX(-22px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.avatar-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -40px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 160px;\n  height: 160px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(79, 110, 247, 0.18) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.avatar-ring[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 6px;\n  border-radius: 50%;\n  padding: 3px;\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  box-shadow: 0 0 0 4px rgba(79, 110, 247, 0.12);\n  transition: box-shadow 0.3s, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  cursor: pointer;\n}\n.avatar-ring[_ngcontent-%COMP%]:hover {\n  transform: scale(1.07);\n  box-shadow: 0 0 0 6px rgba(79, 110, 247, 0.2), 0 8px 28px rgba(79, 110, 247, 0.35);\n}\n.avatar-ring.uploading[_ngcontent-%COMP%] {\n  cursor: wait;\n  pointer-events: none;\n  opacity: 0.75;\n}\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.1rem;\n  font-weight: 800;\n  border: 3px solid #12141f;\n  overflow: hidden;\n}\n.avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.avatar-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.2s;\n  pointer-events: none;\n}\n.avatar-overlay[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  color: white;\n}\n.avatar-ring[_ngcontent-%COMP%]:hover   .avatar-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.upload-spinner[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n.avatar-ring.uploading[_ngcontent-%COMP%]   .avatar-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.avatar-hint[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #4b5563;\n  margin: 0 0 14px;\n  transition: color 0.2s;\n}\n.avatar-ring[_ngcontent-%COMP%]:hover    ~ .avatar-hint[_ngcontent-%COMP%], \n.avatar-hint[_ngcontent-%COMP%]:hover {\n  color: #7c8ff7;\n}\n.avatar-alert[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 8px 12px;\n  margin: 0 0 12px;\n  text-align: left;\n}\n.sidebar-name[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.15rem;\n  margin: 0 0 5px;\n  color: #e8eaf6;\n}\n.sidebar-email[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.82rem;\n  margin: 0 0 14px;\n  word-break: break-all;\n}\n.role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(79, 110, 247, 0.12);\n  color: #a5b4fc;\n  padding: 5px 14px;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: capitalize;\n  border: 1px solid rgba(79, 110, 247, 0.2);\n}\n.role-badge.role-admin[_ngcontent-%COMP%] {\n  background: rgba(251, 191, 36, 0.1);\n  color: #fbbf24;\n  border-color: rgba(251, 191, 36, 0.2);\n}\n.role-badge.role-admin[_ngcontent-%COMP%]   .role-dot[_ngcontent-%COMP%] {\n  background: #fbbf24;\n}\n.role-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #4f6ef7;\n  display: inline-block;\n}\n.sidebar-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.06);\n  margin: 22px 0;\n}\n.sidebar-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  text-align: left;\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 10px;\n  padding: 10px 14px;\n  border: 1px solid rgba(255, 255, 255, 0.04);\n  transition: background 0.2s, border-color 0.2s;\n}\n.stat-item[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.07);\n  border-color: rgba(79, 110, 247, 0.15);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1;\n}\n.stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #c9cbdf;\n  font-weight: 600;\n}\n.profile-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n.section-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      160deg,\n      #1e2235 70%,\n      #1a1e32);\n  border-radius: 20px;\n  padding: 30px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  animation: _ngcontent-%COMP%_cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;\n  transition: border-color 0.3s, box-shadow 0.3s;\n}\n.section-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.section-card[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.12s;\n}\n.section-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.22s;\n}\n@keyframes _ngcontent-%COMP%_cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 26px;\n}\n.section-icon-wrap[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  background: rgba(79, 110, 247, 0.15);\n  border: 1px solid rgba(79, 110, 247, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #7c8ff7;\n}\n.section-icon-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.section-icon-wrap.accent-purple[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.15);\n  border-color: rgba(139, 92, 246, 0.2);\n  color: #a78bfa;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #e8eaf6;\n  margin: 0 0 3px;\n}\n.section-desc[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #6b7280;\n  margin: 0;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  font-size: 0.88rem;\n  animation: _ngcontent-%COMP%_alertIn 0.3s ease both;\n}\n@keyframes _ngcontent-%COMP%_alertIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.alert-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.08);\n  color: #4ade80;\n  border: 1px solid rgba(34, 197, 94, 0.25);\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.08);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18px;\n  margin-bottom: 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 18px;\n}\n.form-group[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-weight: 600;\n  font-size: 0.82rem;\n  color: #9ca3af;\n  margin-bottom: 8px;\n  letter-spacing: 0.03em;\n}\n.form-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  color: #4f6ef7;\n  flex-shrink: 0;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 11px 16px;\n  padding-right: 44px;\n  border: 1.5px solid rgba(255, 255, 255, 0.09);\n  border-radius: 10px;\n  font-size: 0.92rem;\n  outline: none;\n  transition:\n    border-color 0.25s,\n    box-shadow 0.25s,\n    background 0.2s;\n  background: rgba(255, 255, 255, 0.04);\n  color: #e8eaf6;\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #4b5563;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #4f6ef7;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.15);\n  background: rgba(79, 110, 247, 0.04);\n}\n.form-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n.eye-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #6b7280;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n}\n.eye-btn[_ngcontent-%COMP%]:hover {\n  color: #a5b4fc;\n}\n.eye-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.pw-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 4px 0 18px;\n}\n.pw-strength-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.pw-strength-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s ease, background 0.4s ease;\n}\n.pw-strength-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  white-space: nowrap;\n  min-width: 56px;\n  text-align: right;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 28px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #6b7ff7);\n  color: white;\n  border: none;\n  border-radius: 11px;\n  font-weight: 700;\n  font-size: 0.92rem;\n  cursor: pointer;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 3px 14px rgba(79, 110, 247, 0.3);\n}\n.btn-save[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 7px 22px rgba(79, 110, 247, 0.5);\n}\n.btn-save[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.97);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.btn-save.btn-purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #8b5cf6);\n  box-shadow: 0 3px 14px rgba(139, 92, 246, 0.3);\n}\n.btn-save.btn-purple[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 7px 22px rgba(139, 92, 246, 0.5);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1024px) {\n  .profile-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 240px 1fr;\n    gap: 20px;\n  }\n}\n@media (max-width: 768px) {\n  .profile-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .avatar-card[_ngcontent-%COMP%] {\n    position: static;\n    padding: 28px 20px 22px;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .page-container[_ngcontent-%COMP%] {\n    padding: 24px 16px 80px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .section-card[_ngcontent-%COMP%] {\n    padding: 22px 18px;\n  }\n  .btn-save[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: 13px;\n  }\n}\n@media (max-width: 480px) {\n  .avatar-ring[_ngcontent-%COMP%] {\n    width: 82px;\n    height: 82px;\n  }\n  .avatar-circle[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n    padding-bottom: 18px;\n  }\n}\n.crop-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(5px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_backdropIn 0.2s ease both;\n}\n@keyframes _ngcontent-%COMP%_backdropIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.crop-modal[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  border-radius: 22px;\n  padding: 24px;\n  width: 100%;\n  max-width: 390px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  animation: _ngcontent-%COMP%_modalIn 0.28s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(24px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.crop-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.crop-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #e8eaf6;\n  margin: 0;\n}\n.crop-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: #7c8ff7;\n  flex-shrink: 0;\n}\n.crop-close-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #9ca3af;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.crop-close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #e8eaf6;\n}\n.crop-close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.crop-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 320px;\n  height: 320px;\n  overflow: hidden;\n  background: #0d0f1a;\n  border-radius: 14px;\n  cursor: grab;\n  touch-action: none;\n  -webkit-user-select: none;\n  user-select: none;\n  margin: 0 auto;\n  flex-shrink: 0;\n}\n.crop-container[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.crop-src-image[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-user-select: none;\n  user-select: none;\n  display: block;\n  -webkit-user-drag: none;\n  pointer-events: none;\n}\n.crop-circle-guide[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 260px;\n  height: 260px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.75);\n  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.62);\n  pointer-events: none;\n  z-index: 2;\n}\n.crop-zoom-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.zoom-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.zoom-slider[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  border-radius: 99px;\n  outline: none;\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.1);\n  accent-color: #4f6ef7;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.zoom-slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: #4f6ef7;\n  cursor: pointer;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.25);\n}\n.crop-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #4b5563;\n  text-align: center;\n  margin: 0;\n}\n.crop-modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.btn-crop-cancel[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 11px;\n  background: rgba(255, 255, 255, 0.05);\n  color: #9ca3af;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-crop-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #e8eaf6;\n}\n.btn-crop-apply[_ngcontent-%COMP%] {\n  flex: 2;\n  padding: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #6b7ff7);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 3px 14px rgba(79, 110, 247, 0.3);\n}\n.btn-crop-apply[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(79, 110, 247, 0.5);\n}\n.btn-crop-apply[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n@media (max-width: 400px) {\n  .crop-container[_ngcontent-%COMP%] {\n    width: 280px;\n    height: 280px;\n  }\n  .crop-circle-guide[_ngcontent-%COMP%] {\n    width: 230px;\n    height: 230px;\n  }\n}\n/*# sourceMappingURL=profile.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [CommonModule, FormsModule], template: `
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
                <span class="stat-icon">\u2709</span>
                <div class="stat-info">
                  <span class="stat-label">Email</span>
                  <span class="stat-value">Verified</span>
                </div>
              </div>
              <div class="stat-item">
                <span class="stat-icon">\u{1F512}</span>
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

    <!-- \u2500\u2500 Crop Modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
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
  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;58a126a3da447283fd64d5cc810d2913a1fa622842df90e0621d2b2114bf5fed;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/features/profile/profile.component.ts */\n.page-container {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 40px 24px 80px;\n  animation: pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(22px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 36px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.page-title {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #e8eaf6;\n  margin: 0 0 4px;\n  background:\n    linear-gradient(\n      135deg,\n      #e8eaf6 40%,\n      #a5b4fc);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.page-subtitle {\n  color: #6b7280;\n  font-size: 0.9rem;\n  margin: 0;\n}\n.profile-layout {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  gap: 28px;\n  align-items: start;\n}\n.avatar-card {\n  background:\n    linear-gradient(\n      160deg,\n      #1e2235 60%,\n      #1a1e32);\n  border-radius: 22px;\n  padding: 36px 24px 28px;\n  text-align: center;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  position: sticky;\n  top: 80px;\n  animation: sideIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.08s both;\n  transition: border-color 0.3s, box-shadow 0.3s;\n  overflow: hidden;\n  position: relative;\n}\n.avatar-card:hover {\n  border-color: rgba(79, 110, 247, 0.35);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);\n}\n@keyframes sideIn {\n  from {\n    opacity: 0;\n    transform: translateX(-22px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.avatar-glow {\n  position: absolute;\n  top: -40px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 160px;\n  height: 160px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(79, 110, 247, 0.18) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.avatar-ring {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 6px;\n  border-radius: 50%;\n  padding: 3px;\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  box-shadow: 0 0 0 4px rgba(79, 110, 247, 0.12);\n  transition: box-shadow 0.3s, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  cursor: pointer;\n}\n.avatar-ring:hover {\n  transform: scale(1.07);\n  box-shadow: 0 0 0 6px rgba(79, 110, 247, 0.2), 0 8px 28px rgba(79, 110, 247, 0.35);\n}\n.avatar-ring.uploading {\n  cursor: wait;\n  pointer-events: none;\n  opacity: 0.75;\n}\n.avatar-circle {\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.1rem;\n  font-weight: 800;\n  border: 3px solid #12141f;\n  overflow: hidden;\n}\n.avatar-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.avatar-overlay {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.2s;\n  pointer-events: none;\n}\n.avatar-overlay svg {\n  width: 22px;\n  height: 22px;\n  color: white;\n}\n.avatar-ring:hover .avatar-overlay {\n  opacity: 1;\n}\n.upload-spinner {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  animation: spin 0.7s linear infinite;\n  display: inline-block;\n}\n.avatar-ring.uploading .avatar-overlay {\n  opacity: 1;\n}\n.avatar-hint {\n  font-size: 0.72rem;\n  color: #4b5563;\n  margin: 0 0 14px;\n  transition: color 0.2s;\n}\n.avatar-ring:hover ~ .avatar-hint,\n.avatar-hint:hover {\n  color: #7c8ff7;\n}\n.avatar-alert {\n  font-size: 0.8rem;\n  padding: 8px 12px;\n  margin: 0 0 12px;\n  text-align: left;\n}\n.sidebar-name {\n  font-weight: 800;\n  font-size: 1.15rem;\n  margin: 0 0 5px;\n  color: #e8eaf6;\n}\n.sidebar-email {\n  color: #6b7280;\n  font-size: 0.82rem;\n  margin: 0 0 14px;\n  word-break: break-all;\n}\n.role-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(79, 110, 247, 0.12);\n  color: #a5b4fc;\n  padding: 5px 14px;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: capitalize;\n  border: 1px solid rgba(79, 110, 247, 0.2);\n}\n.role-badge.role-admin {\n  background: rgba(251, 191, 36, 0.1);\n  color: #fbbf24;\n  border-color: rgba(251, 191, 36, 0.2);\n}\n.role-badge.role-admin .role-dot {\n  background: #fbbf24;\n}\n.role-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #4f6ef7;\n  display: inline-block;\n}\n.sidebar-divider {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.06);\n  margin: 22px 0;\n}\n.sidebar-stats {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  text-align: left;\n}\n.stat-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 10px;\n  padding: 10px 14px;\n  border: 1px solid rgba(255, 255, 255, 0.04);\n  transition: background 0.2s, border-color 0.2s;\n}\n.stat-item:hover {\n  background: rgba(79, 110, 247, 0.07);\n  border-color: rgba(79, 110, 247, 0.15);\n}\n.stat-icon {\n  font-size: 1rem;\n  line-height: 1;\n}\n.stat-info {\n  display: flex;\n  flex-direction: column;\n}\n.stat-label {\n  font-size: 0.72rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.stat-value {\n  font-size: 0.85rem;\n  color: #c9cbdf;\n  font-weight: 600;\n}\n.profile-content {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n.section-card {\n  background:\n    linear-gradient(\n      160deg,\n      #1e2235 70%,\n      #1a1e32);\n  border-radius: 20px;\n  padding: 30px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  animation: cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;\n  transition: border-color 0.3s, box-shadow 0.3s;\n}\n.section-card:hover {\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.section-card:nth-child(1) {\n  animation-delay: 0.12s;\n}\n.section-card:nth-child(2) {\n  animation-delay: 0.22s;\n}\n@keyframes cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.section-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 26px;\n}\n.section-icon-wrap {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  background: rgba(79, 110, 247, 0.15);\n  border: 1px solid rgba(79, 110, 247, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #7c8ff7;\n}\n.section-icon-wrap svg {\n  width: 20px;\n  height: 20px;\n}\n.section-icon-wrap.accent-purple {\n  background: rgba(139, 92, 246, 0.15);\n  border-color: rgba(139, 92, 246, 0.2);\n  color: #a78bfa;\n}\n.section-title {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #e8eaf6;\n  margin: 0 0 3px;\n}\n.section-desc {\n  font-size: 0.82rem;\n  color: #6b7280;\n  margin: 0;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  font-size: 0.88rem;\n  animation: alertIn 0.3s ease both;\n}\n@keyframes alertIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.alert-icon {\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.alert-success {\n  background: rgba(34, 197, 94, 0.08);\n  color: #4ade80;\n  border: 1px solid rgba(34, 197, 94, 0.25);\n}\n.alert-error {\n  background: rgba(220, 38, 38, 0.08);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18px;\n  margin-bottom: 0;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 18px;\n}\n.form-group:last-child {\n  margin-bottom: 0;\n}\n.form-label {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-weight: 600;\n  font-size: 0.82rem;\n  color: #9ca3af;\n  margin-bottom: 8px;\n  letter-spacing: 0.03em;\n}\n.form-label svg {\n  width: 13px;\n  height: 13px;\n  color: #4f6ef7;\n  flex-shrink: 0;\n}\n.input-wrapper {\n  position: relative;\n}\n.form-control {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 11px 16px;\n  padding-right: 44px;\n  border: 1.5px solid rgba(255, 255, 255, 0.09);\n  border-radius: 10px;\n  font-size: 0.92rem;\n  outline: none;\n  transition:\n    border-color 0.25s,\n    box-shadow 0.25s,\n    background 0.2s;\n  background: rgba(255, 255, 255, 0.04);\n  color: #e8eaf6;\n}\n.form-control::placeholder {\n  color: #4b5563;\n}\n.form-control:focus {\n  border-color: #4f6ef7;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.15);\n  background: rgba(79, 110, 247, 0.04);\n}\n.form-group > .form-control {\n  padding-right: 16px;\n}\n.eye-btn {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #6b7280;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n}\n.eye-btn:hover {\n  color: #a5b4fc;\n}\n.eye-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.pw-hint {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 4px 0 18px;\n}\n.pw-strength-bar {\n  flex: 1;\n  height: 5px;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.pw-strength-fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s ease, background 0.4s ease;\n}\n.pw-strength-label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  white-space: nowrap;\n  min-width: 56px;\n  text-align: right;\n}\n.form-actions {\n  margin-top: 6px;\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 28px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #6b7ff7);\n  color: white;\n  border: none;\n  border-radius: 11px;\n  font-weight: 700;\n  font-size: 0.92rem;\n  cursor: pointer;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 3px 14px rgba(79, 110, 247, 0.3);\n}\n.btn-save svg {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.btn-save:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 7px 22px rgba(79, 110, 247, 0.5);\n}\n.btn-save:active:not(:disabled) {\n  transform: scale(0.97);\n}\n.btn-save:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.btn-save.btn-purple {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #8b5cf6);\n  box-shadow: 0 3px 14px rgba(139, 92, 246, 0.3);\n}\n.btn-save.btn-purple:hover:not(:disabled) {\n  box-shadow: 0 7px 22px rgba(139, 92, 246, 0.5);\n}\n.spinner {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1024px) {\n  .profile-layout {\n    grid-template-columns: 240px 1fr;\n    gap: 20px;\n  }\n}\n@media (max-width: 768px) {\n  .profile-layout {\n    grid-template-columns: 1fr;\n  }\n  .avatar-card {\n    position: static;\n    padding: 28px 20px 22px;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .page-container {\n    padding: 24px 16px 80px;\n  }\n  .page-title {\n    font-size: 1.6rem;\n  }\n  .section-card {\n    padding: 22px 18px;\n  }\n  .btn-save {\n    width: 100%;\n    justify-content: center;\n    padding: 13px;\n  }\n}\n@media (max-width: 480px) {\n  .avatar-ring {\n    width: 82px;\n    height: 82px;\n  }\n  .avatar-circle {\n    font-size: 1.8rem;\n  }\n  .page-title {\n    font-size: 1.35rem;\n  }\n  .page-header {\n    margin-bottom: 24px;\n    padding-bottom: 18px;\n  }\n}\n.crop-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(5px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  animation: backdropIn 0.2s ease both;\n}\n@keyframes backdropIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.crop-modal {\n  background: #1e2235;\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  border-radius: 22px;\n  padding: 24px;\n  width: 100%;\n  max-width: 390px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  animation: modalIn 0.28s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes modalIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(24px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.crop-modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.crop-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #e8eaf6;\n  margin: 0;\n}\n.crop-title svg {\n  width: 18px;\n  height: 18px;\n  color: #7c8ff7;\n  flex-shrink: 0;\n}\n.crop-close-btn {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #9ca3af;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.crop-close-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #e8eaf6;\n}\n.crop-close-btn svg {\n  width: 14px;\n  height: 14px;\n}\n.crop-container {\n  position: relative;\n  width: 320px;\n  height: 320px;\n  overflow: hidden;\n  background: #0d0f1a;\n  border-radius: 14px;\n  cursor: grab;\n  touch-action: none;\n  -webkit-user-select: none;\n  user-select: none;\n  margin: 0 auto;\n  flex-shrink: 0;\n}\n.crop-container:active {\n  cursor: grabbing;\n}\n.crop-src-image {\n  position: absolute;\n  -webkit-user-select: none;\n  user-select: none;\n  display: block;\n  -webkit-user-drag: none;\n  pointer-events: none;\n}\n.crop-circle-guide {\n  position: absolute;\n  width: 260px;\n  height: 260px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.75);\n  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.62);\n  pointer-events: none;\n  z-index: 2;\n}\n.crop-zoom-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.zoom-icon {\n  width: 18px;\n  height: 18px;\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.zoom-slider {\n  flex: 1;\n  height: 4px;\n  border-radius: 99px;\n  outline: none;\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.1);\n  accent-color: #4f6ef7;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.zoom-slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: #4f6ef7;\n  cursor: pointer;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.25);\n}\n.crop-hint {\n  font-size: 0.75rem;\n  color: #4b5563;\n  text-align: center;\n  margin: 0;\n}\n.crop-modal-footer {\n  display: flex;\n  gap: 10px;\n}\n.btn-crop-cancel {\n  flex: 1;\n  padding: 11px;\n  background: rgba(255, 255, 255, 0.05);\n  color: #9ca3af;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-crop-cancel:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #e8eaf6;\n}\n.btn-crop-apply {\n  flex: 2;\n  padding: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #6b7ff7);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 3px 14px rgba(79, 110, 247, 0.3);\n}\n.btn-crop-apply:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(79, 110, 247, 0.5);\n}\n.btn-crop-apply svg {\n  width: 16px;\n  height: 16px;\n}\n@media (max-width: 400px) {\n  .crop-container {\n    width: 280px;\n    height: 280px;\n  }\n  .crop-circle-guide {\n    width: 230px;\n    height: 230px;\n  }\n}\n/*# sourceMappingURL=profile.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: MessageService }], { avatarInput: [{
    type: ViewChild,
    args: ["avatarInput"]
  }], cropCanvas: [{
    type: ViewChild,
    args: ["cropCanvas"]
  }], cropImageEl: [{
    type: ViewChild,
    args: ["cropImageEl"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/features/profile/profile.component.ts", lineNumber: 554 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-FPXAPF3A.js.map
