import {
  AdminService
} from "./chunk-3FGMB364.js";
import {
  SpinComponent
} from "./chunk-GP5OZDAH.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-JDYM2Z3R.js";
import "./chunk-QLMOGZJX.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IXUP4X5N.js";

// src/app/features/admin/dashboard/admin-dashboard.component.ts
var _c0 = () => ({ exact: true });
function AdminDashboardComponent_app_spin_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spin", 29);
  }
}
function AdminDashboardComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "div", 32);
    \u0275\u0275element(3, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Total Users");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 34)(10, "div", 32);
    \u0275\u0275element(11, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 33)(13, "h3");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16, "Products");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 35)(18, "div", 32);
    \u0275\u0275element(19, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 33)(21, "h3");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24, "Total Orders");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 36)(26, "div", 32);
    \u0275\u0275element(27, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 33)(29, "h3");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33, "Total Revenue");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.stats.totalUsers);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.stats.totalProducts);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.stats.totalOrders);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(31, 4, ctx_r0.stats.totalSales, "1.0-0"), "");
  }
}
function AdminDashboardComponent_table_40_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 41);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", order_r2._id.slice(-8).toUpperCase(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getOrderUser(order_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 7, order_r2.totalPrice, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap("status-" + order_r2.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r2.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 10, order_r2.createdAt, "shortDate"));
  }
}
function AdminDashboardComponent_table_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 38)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Order ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, AdminDashboardComponent_table_40_tr_14_Template, 14, 13, "tr", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r0.stats.recentOrders);
  }
}
function AdminDashboardComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, "No orders yet");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_42_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "span", 59);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 60);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const month_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("animation-delay", i_r4 * 0.04 + "s");
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r0.getBarHeight(month_r3.sales), "px");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(4, 6, month_r3.sales, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getMonthName(month_r3._id.month));
  }
}
function AdminDashboardComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div")(3, "h2", 45);
    \u0275\u0275text(4, "Monthly Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 46);
    \u0275\u0275text(6, "Last 12 months of sales performance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 47)(8, "span", 48);
    \u0275\u0275text(9, "Period Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 49);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 50)(14, "div", 51)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "$0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 52)(26, "div", 53);
    \u0275\u0275element(27, "div", 54)(28, "div", 54)(29, "div", 54)(30, "div", 54)(31, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 55);
    \u0275\u0275template(33, AdminDashboardComponent_div_42_div_33_Template, 7, 9, "div", 56);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(12, 6, ctx_r0.getPeriodTotal(), "1.0-0"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getYLabel(1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getYLabel(0.75));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getYLabel(0.5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getYLabel(0.25));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r0.stats.monthlySales.slice(-12));
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  constructor(adminService) {
    this.adminService = adminService;
    this.stats = null;
    this.loading = true;
    this.maxSales = 0;
  }
  ngOnInit() {
    this.adminService.getDashboardStats().subscribe({
      next: (res) => {
        this.stats = res.stats;
        this.loading = false;
        if (this.stats?.monthlySales?.length) {
          this.maxSales = Math.max(...this.stats.monthlySales.map((m) => m.sales));
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  getOrderUser(order) {
    if (!order.user)
      return "Unknown";
    return typeof order.user === "string" ? order.user : order.user.name;
  }
  getBarHeight(sales) {
    if (!this.maxSales)
      return 4;
    return Math.max(4, sales / this.maxSales * 160);
  }
  getMonthName(month) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[month - 1] || "";
  }
  getPeriodTotal() {
    if (!this.stats?.monthlySales)
      return 0;
    return this.stats.monthlySales.reduce((sum, m) => sum + m.sales, 0);
  }
  getYLabel(fraction) {
    const val = this.maxSales * fraction;
    if (val >= 1e3)
      return "$" + (val >= 1e4 ? Math.round(val / 1e3) : (val / 1e3).toFixed(1)) + "K";
    return "$" + Math.round(val);
  }
  static {
    this.\u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminDashboardComponent)(\u0275\u0275directiveInject(AdminService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 43, vars: 7, consts: [[1, "admin-layout"], [1, "admin-sidebar"], [1, "sidebar-brand"], [1, "fas", "fa-gear"], [1, "sidebar-nav"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], [1, "fas", "fa-chart-bar"], ["routerLink", "/admin/products", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-box"], ["routerLink", "/admin/categories", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-tag"], ["routerLink", "/admin/orders", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-receipt"], ["routerLink", "/admin/users", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-users"], [1, "divider"], ["routerLink", "/", 1, "nav-item"], [1, "fas", "fa-house"], [1, "admin-main"], [1, "admin-header"], ["size", "lg", "tip", "Loading dashboard...", 4, "ngIf"], ["class", "stats-grid", 4, "ngIf"], [1, "section-card"], [1, "section-header"], ["routerLink", "/admin/orders", 1, "see-all"], [1, "table-wrapper"], ["class", "data-table", 4, "ngIf"], ["class", "empty-table", 4, "ngIf"], ["class", "section-card chart-section", 4, "ngIf"], ["size", "lg", "tip", "Loading dashboard..."], [1, "stats-grid"], [1, "stat-card", "blue"], [1, "stat-icon"], [1, "stat-info"], [1, "stat-card", "green"], [1, "stat-card", "purple"], [1, "stat-card", "orange"], [1, "fas", "fa-dollar-sign"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "order-id"], [1, "status-badge"], [1, "empty-table"], [1, "section-card", "chart-section"], [1, "chart-header"], [1, "chart-title"], [1, "chart-subtitle"], [1, "chart-pill"], [1, "pill-label"], [1, "pill-value"], [1, "chart-body"], [1, "y-labels"], [1, "chart-canvas"], [1, "gridlines"], [1, "gridline"], [1, "bars-row"], ["class", "bar-col", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "bar-col"], [1, "bar-fill"], [1, "bar-tip"], [1, "bar-label"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2);
        \u0275\u0275element(3, "i", 3);
        \u0275\u0275text(4, " Admin Panel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "nav", 4)(6, "a", 5);
        \u0275\u0275element(7, "i", 6);
        \u0275\u0275text(8, " Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275element(10, "i", 8);
        \u0275\u0275text(11, " Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 9);
        \u0275\u0275element(13, "i", 10);
        \u0275\u0275text(14, " Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 11);
        \u0275\u0275element(16, "i", 12);
        \u0275\u0275text(17, " Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "a", 13);
        \u0275\u0275element(19, "i", 14);
        \u0275\u0275text(20, " Users");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "div", 15);
        \u0275\u0275elementStart(22, "a", 16);
        \u0275\u0275element(23, "i", 17);
        \u0275\u0275text(24, " Back to Store");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "main", 18)(26, "div", 19)(27, "h1");
        \u0275\u0275text(28, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p");
        \u0275\u0275text(30, "Welcome back, Admin!");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(31, AdminDashboardComponent_app_spin_31_Template, 1, 0, "app-spin", 20)(32, AdminDashboardComponent_div_32_Template, 34, 7, "div", 21);
        \u0275\u0275elementStart(33, "div", 22)(34, "div", 23)(35, "h2");
        \u0275\u0275text(36, "Recent Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "a", 24);
        \u0275\u0275text(38, "View All \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 25);
        \u0275\u0275template(40, AdminDashboardComponent_table_40_Template, 15, 1, "table", 26)(41, AdminDashboardComponent_div_41_Template, 2, 0, "div", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(42, AdminDashboardComponent_div_42_Template, 34, 9, "div", 28);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance(25);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.stats);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.stats == null ? null : ctx.stats.recentOrders == null ? null : ctx.stats.recentOrders.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !(ctx.stats == null ? null : ctx.stats.recentOrders == null ? null : ctx.stats.recentOrders.length));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.stats == null ? null : ctx.stats.monthlySales == null ? null : ctx.stats.monthlySales.length);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule, RouterLink, RouterLinkActive, SpinComponent], styles: ["\n\n.admin-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.admin-sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  background: #0d0f1e;\n  color: white;\n  padding: 24px 0;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  border-right: 1px solid rgba(255, 255, 255, 0.07);\n  animation: _ngcontent-%COMP%_sidebarIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_sidebarIn {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  padding: 0 24px 24px;\n  font-size: 1.2rem;\n  font-weight: 700;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  margin-bottom: 16px;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 12px 24px;\n  color: #9ca3af;\n  text-decoration: none;\n  transition: all 0.22s;\n  font-weight: 500;\n  border-left: 3px solid transparent;\n}\n.nav-item[_ngcontent-%COMP%]:hover, \n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.1);\n  color: #a5b4fc;\n  border-left-color: #4f6ef7;\n  transform: translateX(3px);\n}\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 18px;\n  text-align: center;\n  margin-right: 4px;\n  font-size: 0.85rem;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 12px 0;\n}\n.admin-main[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 32px;\n  background: #0f1123;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;\n}\n@keyframes _ngcontent-%COMP%_pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.admin-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.admin-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #e8eaf6;\n}\n.admin-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n  margin-bottom: 32px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border-radius: 16px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  animation: _ngcontent-%COMP%_statIn 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n  transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s;\n}\n.stat-card[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.stat-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.18s;\n}\n.stat-card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.26s;\n}\n.stat-card[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.34s;\n}\n@keyframes _ngcontent-%COMP%_statIn {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.92);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #e8eaf6;\n}\n.stat-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.85rem;\n}\n.stat-card.blue[_ngcontent-%COMP%] {\n  border-left: 4px solid #4f6ef7;\n}\n.stat-card.green[_ngcontent-%COMP%] {\n  border-left: 4px solid #4ade80;\n}\n.stat-card.purple[_ngcontent-%COMP%] {\n  border-left: 4px solid #8b5cf6;\n}\n.stat-card.orange[_ngcontent-%COMP%] {\n  border-left: 4px solid #F59E0B;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  margin-bottom: 24px;\n  animation: _ngcontent-%COMP%_cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;\n}\n@keyframes _ngcontent-%COMP%_cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.section-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: #e8eaf6;\n}\n.see-all[_ngcontent-%COMP%] {\n  color: #a5b4fc;\n  text-decoration: none;\n  font-size: 0.9rem;\n  font-weight: 600;\n  transition: color 0.2s;\n}\n.see-all[_ngcontent-%COMP%]:hover {\n  color: #e0e4ff;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 12px 16px;\n  background: rgba(255, 255, 255, 0.03);\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  font-size: 0.9rem;\n  color: #c9cbdf;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.18s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n.order-id[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #a5b4fc;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: rgba(251, 191, 36, 0.15);\n  color: #fbbf24;\n}\n.status-processing[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.15);\n  color: #a5b4fc;\n}\n.status-delivered[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: #4ade80;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.status-paid[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.15);\n  color: #67e8f9;\n}\n.empty-table[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #9ca3af;\n}\n.chart-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.chart-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 28px;\n}\n.chart-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #e8eaf6;\n}\n.chart-subtitle[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.82rem;\n  margin-top: 4px;\n}\n.chart-pill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 110, 247, 0.12),\n      rgba(139, 92, 246, 0.1));\n  border: 1px solid rgba(165, 180, 252, 0.2);\n  border-radius: 12px;\n  padding: 10px 18px;\n  text-align: right;\n}\n.pill-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.66rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #9ca3af;\n  margin-bottom: 3px;\n}\n.pill-value[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #a5b4fc,\n      #c084fc);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.chart-body[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.y-labels[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding-bottom: 24px;\n  min-width: 48px;\n}\n.y-labels[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  color: #6b7280;\n}\n.chart-canvas[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n}\n.gridlines[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  pointer-events: none;\n}\n.gridline[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.05);\n}\n@keyframes _ngcontent-%COMP%_barColIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.bars-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 6px;\n  height: 190px;\n  position: relative;\n}\n.bar-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  animation: _ngcontent-%COMP%_barColIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  width: 100%;\n  background:\n    linear-gradient(\n      to top,\n      #4f6ef7,\n      #8b5cf6);\n  border-radius: 6px 6px 0 0;\n  min-height: 4px;\n  position: relative;\n  transition: background 0.25s, box-shadow 0.25s;\n  cursor: pointer;\n}\n.bar-col[_ngcontent-%COMP%]:hover   .bar-fill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to top,\n      #5c7cff,\n      #a78bfa);\n  box-shadow: 0 0 18px rgba(99, 122, 255, 0.4);\n}\n.bar-tip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 6px);\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(22, 27, 52, 0.95);\n  color: #e8eaf6;\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 4px 8px;\n  border-radius: 6px;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.18s;\n  border: 1px solid rgba(165, 180, 252, 0.2);\n}\n.bar-col[_ngcontent-%COMP%]:hover   .bar-tip[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #6b7280;\n  font-weight: 600;\n  height: 18px;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .admin-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .admin-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    position: static;\n    padding: 12px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n    justify-content: center;\n  }\n  .admin-sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n   .admin-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .admin-main[_ngcontent-%COMP%] {\n    padding: 20px 14px 80px;\n  }\n  .chart-area[_ngcontent-%COMP%] {\n    height: 140px;\n  }\n  .bars-row[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .admin-main[_ngcontent-%COMP%] {\n    padding: 14px 12px 80px;\n  }\n  .chart-area[_ngcontent-%COMP%] {\n    height: 110px;\n  }\n  .bars-row[_ngcontent-%COMP%] {\n    height: 80px;\n  }\n  .bar-label[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", standalone: true, imports: [CommonModule, RouterModule, SpinComponent], template: `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="sidebar-brand"><i class="fas fa-gear"></i> Admin Panel</div>
        <nav class="sidebar-nav">
          <a routerLink="/admin" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-item"><i class="fas fa-chart-bar"></i> Dashboard</a>
          <a routerLink="/admin/products" routerLinkActive="active" class="nav-item"><i class="fas fa-box"></i> Products</a>
          <a routerLink="/admin/categories" routerLinkActive="active" class="nav-item"><i class="fas fa-tag"></i> Categories</a>
          <a routerLink="/admin/orders" routerLinkActive="active" class="nav-item"><i class="fas fa-receipt"></i> Orders</a>
          <a routerLink="/admin/users" routerLinkActive="active" class="nav-item"><i class="fas fa-users"></i> Users</a>
          <div class="divider"></div>
          <a routerLink="/" class="nav-item"><i class="fas fa-house"></i> Back to Store</a>
        </nav>
      </aside>
      <main class="admin-main">
        <div class="admin-header">
          <h1>Dashboard</h1>
          <p>Welcome back, Admin!</p>
        </div>

        <app-spin *ngIf="loading" size="lg" tip="Loading dashboard..."></app-spin>

        <!-- Stats Cards -->
        <div class="stats-grid" *ngIf="stats">
          <div class="stat-card blue">
            <div class="stat-icon"><i class="fas fa-users"></i></div>
            <div class="stat-info">
              <h3>{{ stats.totalUsers }}</h3>
              <p>Total Users</p>
            </div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon"><i class="fas fa-box"></i></div>
            <div class="stat-info">
              <h3>{{ stats.totalProducts }}</h3>
              <p>Products</p>
            </div>
          </div>
          <div class="stat-card purple">
            <div class="stat-icon"><i class="fas fa-receipt"></i></div>
            <div class="stat-info">
              <h3>{{ stats.totalOrders }}</h3>
              <p>Total Orders</p>
            </div>
          </div>
          <div class="stat-card orange">
            <div class="stat-icon"><i class="fas fa-dollar-sign"></i></div>
            <div class="stat-info">
              <h3>\${{ stats.totalSales | number:'1.0-0' }}</h3>
              <p>Total Revenue</p>
            </div>
          </div>
        </div>

        <!-- Recent Orders -->
        <div class="section-card">
          <div class="section-header">
            <h2>Recent Orders</h2>
            <a routerLink="/admin/orders" class="see-all">View All \u2192</a>
          </div>
          <div class="table-wrapper">
            <table class="data-table" *ngIf="stats?.recentOrders?.length">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let order of stats.recentOrders">
                  <td class="order-id">#{{ order._id.slice(-8).toUpperCase() }}</td>
                  <td>{{ getOrderUser(order) }}</td>
                  <td>\${{ order.totalPrice | number:'1.2-2' }}</td>
                  <td><span class="status-badge" [class]="'status-' + order.status">{{ order.status }}</span></td>
                  <td>{{ order.createdAt | date:'shortDate' }}</td>
                </tr>
              </tbody>
            </table>
            <div class="empty-table" *ngIf="!stats?.recentOrders?.length">No orders yet</div>
          </div>
        </div>

        <!-- Monthly Sales Summary -->
        <div class="section-card chart-section" *ngIf="stats?.monthlySales?.length">
          <div class="chart-header">
            <div>
              <h2 class="chart-title">Monthly Revenue</h2>
              <p class="chart-subtitle">Last 12 months of sales performance</p>
            </div>
            <div class="chart-pill">
              <span class="pill-label">Period Total</span>
              <span class="pill-value">\${{ getPeriodTotal() | number:'1.0-0' }}</span>
            </div>
          </div>
          <div class="chart-body">
            <div class="y-labels">
              <span>{{ getYLabel(1.0) }}</span>
              <span>{{ getYLabel(0.75) }}</span>
              <span>{{ getYLabel(0.5) }}</span>
              <span>{{ getYLabel(0.25) }}</span>
              <span>$0</span>
            </div>
            <div class="chart-canvas">
              <div class="gridlines">
                <div class="gridline"></div>
                <div class="gridline"></div>
                <div class="gridline"></div>
                <div class="gridline"></div>
                <div class="gridline"></div>
              </div>
              <div class="bars-row">
                <div class="bar-col" *ngFor="let month of stats.monthlySales.slice(-12); let i = index" [style.animation-delay]="(i * 0.04) + 's'">
                  <div class="bar-fill" [style.height.px]="getBarHeight(month.sales)">
                    <span class="bar-tip">\${{ month.sales | number:'1.0-0' }}</span>
                  </div>
                  <span class="bar-label">{{ getMonthName(month._id.month) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `, styles: ["/* angular:styles/component:scss;51a7cafd041b9f87d8af1cabd8b6d4d1bb00a44366330b4807f882caba2cb5ea;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/features/admin/dashboard/admin-dashboard.component.ts */\n.admin-layout {\n  display: flex;\n  min-height: 100vh;\n}\n.admin-sidebar {\n  width: 240px;\n  background: #0d0f1e;\n  color: white;\n  padding: 24px 0;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  border-right: 1px solid rgba(255, 255, 255, 0.07);\n  animation: sidebarIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes sidebarIn {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.sidebar-brand {\n  padding: 0 24px 24px;\n  font-size: 1.2rem;\n  font-weight: 700;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  margin-bottom: 16px;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n}\n.nav-item {\n  display: block;\n  padding: 12px 24px;\n  color: #9ca3af;\n  text-decoration: none;\n  transition: all 0.22s;\n  font-weight: 500;\n  border-left: 3px solid transparent;\n}\n.nav-item:hover,\n.nav-item.active {\n  background: rgba(79, 110, 247, 0.1);\n  color: #a5b4fc;\n  border-left-color: #4f6ef7;\n  transform: translateX(3px);\n}\n.nav-item i {\n  width: 18px;\n  text-align: center;\n  margin-right: 4px;\n  font-size: 0.85rem;\n}\n.divider {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 12px 0;\n}\n.admin-main {\n  flex: 1;\n  padding: 32px;\n  background: #0f1123;\n  overflow-y: auto;\n  animation: pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;\n}\n@keyframes pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.admin-header {\n  margin-bottom: 32px;\n}\n.admin-header h1 {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #e8eaf6;\n}\n.admin-header p {\n  color: #9ca3af;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n  margin-bottom: 32px;\n}\n.stat-card {\n  background: #1e2235;\n  border-radius: 16px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  animation: statIn 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n  transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s;\n}\n.stat-card:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.stat-card:nth-child(2) {\n  animation-delay: 0.18s;\n}\n.stat-card:nth-child(3) {\n  animation-delay: 0.26s;\n}\n.stat-card:nth-child(4) {\n  animation-delay: 0.34s;\n}\n@keyframes statIn {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.92);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.stat-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);\n}\n.stat-icon {\n  font-size: 2rem;\n  color: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-info h3 {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #e8eaf6;\n}\n.stat-info p {\n  color: #9ca3af;\n  font-size: 0.85rem;\n}\n.stat-card.blue {\n  border-left: 4px solid #4f6ef7;\n}\n.stat-card.green {\n  border-left: 4px solid #4ade80;\n}\n.stat-card.purple {\n  border-left: 4px solid #8b5cf6;\n}\n.stat-card.orange {\n  border-left: 4px solid #F59E0B;\n}\n.section-card {\n  background: #1e2235;\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  margin-bottom: 24px;\n  animation: cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;\n}\n@keyframes cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.section-header h2,\n.section-card h2 {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: #e8eaf6;\n}\n.see-all {\n  color: #a5b4fc;\n  text-decoration: none;\n  font-size: 0.9rem;\n  font-weight: 600;\n  transition: color 0.2s;\n}\n.see-all:hover {\n  color: #e0e4ff;\n}\n.table-wrapper {\n  overflow-x: auto;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  text-align: left;\n  padding: 12px 16px;\n  background: rgba(255, 255, 255, 0.03);\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n}\n.data-table td {\n  padding: 14px 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  font-size: 0.9rem;\n  color: #c9cbdf;\n}\n.data-table tbody tr {\n  transition: background 0.18s;\n}\n.data-table tbody tr:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n.order-id {\n  font-weight: 700;\n  color: #a5b4fc;\n}\n.status-badge {\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.status-pending {\n  background: rgba(251, 191, 36, 0.15);\n  color: #fbbf24;\n}\n.status-processing {\n  background: rgba(79, 110, 247, 0.15);\n  color: #a5b4fc;\n}\n.status-delivered {\n  background: rgba(34, 197, 94, 0.15);\n  color: #4ade80;\n}\n.status-cancelled {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.status-paid {\n  background: rgba(6, 182, 212, 0.15);\n  color: #67e8f9;\n}\n.empty-table {\n  text-align: center;\n  padding: 40px;\n  color: #9ca3af;\n}\n.chart-section h2 {\n  margin-bottom: 0;\n}\n.chart-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 28px;\n}\n.chart-title {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #e8eaf6;\n}\n.chart-subtitle {\n  color: #9ca3af;\n  font-size: 0.82rem;\n  margin-top: 4px;\n}\n.chart-pill {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 110, 247, 0.12),\n      rgba(139, 92, 246, 0.1));\n  border: 1px solid rgba(165, 180, 252, 0.2);\n  border-radius: 12px;\n  padding: 10px 18px;\n  text-align: right;\n}\n.pill-label {\n  display: block;\n  font-size: 0.66rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #9ca3af;\n  margin-bottom: 3px;\n}\n.pill-value {\n  font-size: 1.4rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #a5b4fc,\n      #c084fc);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.chart-body {\n  display: flex;\n  gap: 10px;\n}\n.y-labels {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding-bottom: 24px;\n  min-width: 48px;\n}\n.y-labels span {\n  font-size: 0.66rem;\n  color: #6b7280;\n}\n.chart-canvas {\n  flex: 1;\n  position: relative;\n}\n.gridlines {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  pointer-events: none;\n}\n.gridline {\n  width: 100%;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.05);\n}\n@keyframes barColIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.bars-row {\n  display: flex;\n  align-items: flex-end;\n  gap: 6px;\n  height: 190px;\n  position: relative;\n}\n.bar-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  animation: barColIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.bar-fill {\n  width: 100%;\n  background:\n    linear-gradient(\n      to top,\n      #4f6ef7,\n      #8b5cf6);\n  border-radius: 6px 6px 0 0;\n  min-height: 4px;\n  position: relative;\n  transition: background 0.25s, box-shadow 0.25s;\n  cursor: pointer;\n}\n.bar-col:hover .bar-fill {\n  background:\n    linear-gradient(\n      to top,\n      #5c7cff,\n      #a78bfa);\n  box-shadow: 0 0 18px rgba(99, 122, 255, 0.4);\n}\n.bar-tip {\n  position: absolute;\n  bottom: calc(100% + 6px);\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(22, 27, 52, 0.95);\n  color: #e8eaf6;\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 4px 8px;\n  border-radius: 6px;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.18s;\n  border: 1px solid rgba(165, 180, 252, 0.2);\n}\n.bar-col:hover .bar-tip {\n  opacity: 1;\n}\n.bar-label {\n  font-size: 0.68rem;\n  color: #6b7280;\n  font-weight: 600;\n  height: 18px;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .admin-layout {\n    flex-direction: column;\n  }\n  .admin-sidebar {\n    width: 100%;\n    height: auto;\n    position: static;\n    padding: 12px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n    justify-content: center;\n  }\n  .admin-sidebar a,\n  .admin-sidebar button {\n    flex: 0 0 auto;\n  }\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .admin-main {\n    padding: 20px 14px 80px;\n  }\n  .chart-area {\n    height: 140px;\n  }\n  .bars-row {\n    height: 100px;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  .admin-main {\n    padding: 14px 12px 80px;\n  }\n  .chart-area {\n    height: 110px;\n  }\n  .bars-row {\n    height: 80px;\n  }\n  .bar-label {\n    font-size: 0.6rem;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */\n"] }]
  }], () => [{ type: AdminService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/features/admin/dashboard/admin-dashboard.component.ts", lineNumber: 256 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-O4C72XY7.js.map
