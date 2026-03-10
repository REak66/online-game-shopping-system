import {
  NotificationService
} from "./chunk-A4HOYT66.js";
import {
  SelectComponent
} from "./chunk-7LUADATD.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-QGP2PKSJ.js";
import {
  SpinComponent
} from "./chunk-GP5OZDAH.js";
import {
  OrderService
} from "./chunk-ZPHFXKIR.js";
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IXUP4X5N.js";

// src/app/features/admin/manage-orders/manage-orders.component.ts
var _c0 = (a0) => ["/orders", a0];
function ManageOrdersComponent_app_spin_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spin", 25);
  }
}
function ManageOrdersComponent_table_33_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "app-select", 30);
    \u0275\u0275listener("selectionChange", function ManageOrdersComponent_table_33_tr_18_Template_app_select_selectionChange_11_listener($event) {
      const order_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateStatus(order_r2._id, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "a", 31);
    \u0275\u0275text(17, "View");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", order_r2._id.slice(-8).toUpperCase(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getUser(order_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r2.orderItems.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(9, 10, order_r2.totalPrice, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", order_r2.status)("options", ctx_r2.orderStatusOptions)("clearable", false)("disabled", ctx_r2.updatingOrders.has(order_r2._id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 13, order_r2.createdAt, "shortDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, order_r2._id));
  }
}
function ManageOrdersComponent_table_33_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2, "No orders found");
    \u0275\u0275elementEnd()();
  }
}
function ManageOrdersComponent_table_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 26)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Order ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, ManageOrdersComponent_table_33_tr_18_Template, 18, 18, "tr", 27)(19, ManageOrdersComponent_table_33_tr_19_Template, 3, 0, "tr", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r2.orders)("ngForTrackBy", ctx_r2.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.orders.length === 0);
  }
}
var ManageOrdersComponent = class _ManageOrdersComponent {
  constructor(orderService, notification) {
    this.orderService = orderService;
    this.notification = notification;
    this.orders = [];
    this.loading = true;
    this.filterStatus = "";
    this.updatingOrders = /* @__PURE__ */ new Set();
    this.filterStatusOptions = [
      { value: "", label: "All Statuses" },
      { value: "pending", label: "Pending" },
      { value: "paid", label: "Paid" },
      { value: "processing", label: "Processing" },
      { value: "cancelled", label: "Cancelled" }
    ];
    this.orderStatusOptions = [
      { value: "pending", label: "Pending" },
      { value: "paid", label: "Paid" },
      { value: "processing", label: "Processing" },
      { value: "cancelled", label: "Cancelled" }
    ];
  }
  ngOnInit() {
    this.loadOrders();
  }
  loadOrders() {
    const params = {};
    if (this.filterStatus)
      params.status = this.filterStatus;
    this.loading = true;
    this.orderService.getAllOrders(params).subscribe({
      next: (res) => {
        this.orders = res.orders || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  trackById(_index, order) {
    return order._id;
  }
  getUser(order) {
    if (!order.user)
      return "Unknown";
    return typeof order.user === "string" ? order.user : order.user.name || order.user.email;
  }
  updateStatus(orderId, status) {
    if (!status || this.updatingOrders.has(orderId))
      return;
    const order = this.orders.find((o) => o._id === orderId);
    if (!order)
      return;
    const previousStatus = order.status;
    if (previousStatus === status)
      return;
    order.status = status;
    this.updatingOrders.add(orderId);
    this.orderService.updateOrderStatus(orderId, status).subscribe({
      next: () => {
        this.updatingOrders.delete(orderId);
      },
      error: () => {
        order.status = previousStatus;
        this.updatingOrders.delete(orderId);
        this.notification.error("Failed to update order status. Please try again.");
      }
    });
  }
  static {
    this.\u0275fac = function ManageOrdersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageOrdersComponent)(\u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageOrdersComponent, selectors: [["app-manage-orders"]], decls: 34, vars: 5, consts: [[1, "admin-layout"], [1, "admin-sidebar"], [1, "sidebar-brand"], [1, "fas", "fa-gear"], [1, "sidebar-nav"], ["routerLink", "/admin", 1, "nav-item"], [1, "fas", "fa-chart-bar"], ["routerLink", "/admin/products", 1, "nav-item"], [1, "fas", "fa-box"], ["routerLink", "/admin/categories", 1, "nav-item"], [1, "fas", "fa-tag"], ["routerLink", "/admin/orders", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-receipt"], ["routerLink", "/admin/users", 1, "nav-item"], [1, "fas", "fa-users"], [1, "divider"], ["routerLink", "/", 1, "nav-item"], [1, "fas", "fa-house"], [1, "admin-main"], [1, "page-header"], [1, "filter-row"], [3, "ngModelChange", "selectionChange", "ngModel", "options", "clearable"], [1, "section-card"], ["size", "lg", "tip", "Loading orders...", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], ["size", "lg", "tip", "Loading orders..."], [1, "data-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "order-id"], [3, "selectionChange", "ngModel", "options", "clearable", "disabled"], [1, "btn-view", 3, "routerLink"], ["colspan", "7", 1, "empty"]], template: function ManageOrdersComponent_Template(rf, ctx) {
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
        \u0275\u0275text(28, "Manage Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 20)(30, "app-select", 21);
        \u0275\u0275twoWayListener("ngModelChange", function ManageOrdersComponent_Template_app_select_ngModelChange_30_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
          return $event;
        });
        \u0275\u0275listener("selectionChange", function ManageOrdersComponent_Template_app_select_selectionChange_30_listener() {
          return ctx.loadOrders();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 22);
        \u0275\u0275template(32, ManageOrdersComponent_app_spin_32_Template, 1, 0, "app-spin", 23)(33, ManageOrdersComponent_table_33_Template, 20, 3, "table", 24);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(30);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterStatus);
        \u0275\u0275property("options", ctx.filterStatusOptions)("clearable", false);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule, RouterLink, RouterLinkActive, FormsModule, NgControlStatus, NgModel, SelectComponent, SpinComponent], styles: ["\n\n.admin-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.admin-sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  background: #0d0f1e;\n  color: white;\n  padding: 24px 0;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  border-right: 1px solid rgba(255, 255, 255, 0.07);\n  animation: _ngcontent-%COMP%_sidebarIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_sidebarIn {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  padding: 0 24px 24px;\n  font-size: 1.2rem;\n  font-weight: 700;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  margin-bottom: 16px;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 12px 24px;\n  color: #9ca3af;\n  text-decoration: none;\n  transition: all 0.22s;\n  font-weight: 500;\n  border-left: 3px solid transparent;\n}\n.nav-item[_ngcontent-%COMP%]:hover, \n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.1);\n  color: #a5b4fc;\n  border-left-color: #4f6ef7;\n  transform: translateX(3px);\n}\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 18px;\n  text-align: center;\n  margin-right: 4px;\n  font-size: 0.85rem;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 12px 0;\n}\n.admin-main[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 32px;\n  background: #0f1123;\n  overflow-x: hidden;\n  min-width: 0;\n  animation: _ngcontent-%COMP%_pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;\n}\n@keyframes _ngcontent-%COMP%_pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #e8eaf6;\n}\n.status-filter[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  outline: none;\n  background: rgba(255, 255, 255, 0.05);\n  color: #e8eaf6;\n  transition: border-color 0.25s;\n}\n.status-filter[_ngcontent-%COMP%]:focus {\n  border-color: #4f6ef7;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  overflow-x: auto;\n  animation: _ngcontent-%COMP%_cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;\n}\n@keyframes _ngcontent-%COMP%_cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 700px;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 12px 16px;\n  background: rgba(255, 255, 255, 0.03);\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  font-size: 0.9rem;\n  color: #c9cbdf;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.18s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n.order-id[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #a5b4fc;\n}\n.status-select[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  font-size: 0.85rem;\n  outline: none;\n  background: rgba(255, 255, 255, 0.05);\n  color: #e8eaf6;\n}\n.btn-view[_ngcontent-%COMP%] {\n  color: #a5b4fc;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.85rem;\n  transition: color 0.2s, transform 0.2s;\n  display: inline-block;\n}\n.btn-view[_ngcontent-%COMP%]:hover {\n  color: #e0e4ff;\n  transform: translateX(2px);\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9ca3af;\n  padding: 40px;\n}\n@media (max-width: 1024px) {\n  .admin-sidebar[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n  .admin-main[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n}\n@media (max-width: 768px) {\n  .admin-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .admin-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 58px;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: auto;\n    flex-direction: row;\n    padding: 0;\n    border-right: none;\n    border-top: 1px solid rgba(255, 255, 255, 0.07);\n    z-index: 200;\n  }\n  .sidebar-brand[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sidebar-nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    overflow-x: auto;\n    scrollbar-width: none;\n  }\n  .sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .nav-item[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-width: 54px;\n    padding: 6px 4px;\n    gap: 2px;\n    border-left: none;\n    border-top: 2px solid transparent;\n    border-radius: 0;\n    font-size: 0.6rem;\n    text-align: center;\n  }\n  .nav-item[_ngcontent-%COMP%]:hover, \n   .nav-item.active[_ngcontent-%COMP%] {\n    transform: none;\n    border-left-color: transparent;\n    border-top-color: #4f6ef7;\n  }\n  .nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    width: auto;\n    margin-right: 0;\n    display: block;\n  }\n  .admin-main[_ngcontent-%COMP%] {\n    padding: 18px 14px 76px;\n  }\n}\n@media (max-width: 480px) {\n  .admin-main[_ngcontent-%COMP%] {\n    padding: 14px 12px 76px;\n  }\n  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .section-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=manage-orders.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageOrdersComponent, [{
    type: Component,
    args: [{ selector: "app-manage-orders", standalone: true, imports: [CommonModule, RouterModule, FormsModule, SelectComponent, SpinComponent], template: `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="sidebar-brand"><i class="fas fa-gear"></i> Admin Panel</div>
        <nav class="sidebar-nav">
          <a routerLink="/admin" class="nav-item"><i class="fas fa-chart-bar"></i> Dashboard</a>
          <a routerLink="/admin/products" class="nav-item"><i class="fas fa-box"></i> Products</a>
          <a routerLink="/admin/categories" class="nav-item"><i class="fas fa-tag"></i> Categories</a>
          <a routerLink="/admin/orders" routerLinkActive="active" class="nav-item"><i class="fas fa-receipt"></i> Orders</a>
          <a routerLink="/admin/users" class="nav-item"><i class="fas fa-users"></i> Users</a>
          <div class="divider"></div>
          <a routerLink="/" class="nav-item"><i class="fas fa-house"></i> Back to Store</a>
        </nav>
      </aside>
      <main class="admin-main">
        <div class="page-header">
          <h1>Manage Orders</h1>
          <div class="filter-row">
            <app-select [(ngModel)]="filterStatus" [options]="filterStatusOptions" [clearable]="false" (selectionChange)="loadOrders()"></app-select>
          </div>
        </div>

        <div class="section-card">
          <app-spin *ngIf="loading" size="lg" tip="Loading orders..."></app-spin>
          <table class="data-table" *ngIf="!loading">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let order of orders; trackBy: trackById">
                <td class="order-id">#{{ order._id.slice(-8).toUpperCase() }}</td>
                <td>{{ getUser(order) }}</td>
                <td>{{ order.orderItems.length }}</td>
                <td>\${{ order.totalPrice | number:'1.2-2' }}</td>
                <td>
                  <app-select [ngModel]="order.status" [options]="orderStatusOptions" [clearable]="false" [disabled]="updatingOrders.has(order._id)" (selectionChange)="updateStatus(order._id, $event)"></app-select>
                </td>
                <td>{{ order.createdAt | date:'shortDate' }}</td>
                <td>
                  <a [routerLink]="['/orders', order._id]" class="btn-view">View</a>
                </td>
              </tr>
              <tr *ngIf="orders.length === 0">
                <td colspan="7" class="empty">No orders found</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  `, styles: ["/* angular:styles/component:scss;a288d056fd07aca666a2d20b7b601c5d55f545a0c3492ced11a188b6c7f7ef64;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/features/admin/manage-orders/manage-orders.component.ts */\n.admin-layout {\n  display: flex;\n  min-height: 100vh;\n}\n.admin-sidebar {\n  width: 240px;\n  background: #0d0f1e;\n  color: white;\n  padding: 24px 0;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  border-right: 1px solid rgba(255, 255, 255, 0.07);\n  animation: sidebarIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes sidebarIn {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.sidebar-brand {\n  padding: 0 24px 24px;\n  font-size: 1.2rem;\n  font-weight: 700;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  margin-bottom: 16px;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n}\n.nav-item {\n  display: block;\n  padding: 12px 24px;\n  color: #9ca3af;\n  text-decoration: none;\n  transition: all 0.22s;\n  font-weight: 500;\n  border-left: 3px solid transparent;\n}\n.nav-item:hover,\n.nav-item.active {\n  background: rgba(79, 110, 247, 0.1);\n  color: #a5b4fc;\n  border-left-color: #4f6ef7;\n  transform: translateX(3px);\n}\n.nav-item i {\n  width: 18px;\n  text-align: center;\n  margin-right: 4px;\n  font-size: 0.85rem;\n}\n.divider {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 12px 0;\n}\n.admin-main {\n  flex: 1;\n  padding: 32px;\n  background: #0f1123;\n  overflow-x: hidden;\n  min-width: 0;\n  animation: pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;\n}\n@keyframes pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-header h1 {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #e8eaf6;\n}\n.status-filter {\n  padding: 10px 16px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  outline: none;\n  background: rgba(255, 255, 255, 0.05);\n  color: #e8eaf6;\n  transition: border-color 0.25s;\n}\n.status-filter:focus {\n  border-color: #4f6ef7;\n}\n.section-card {\n  background: #1e2235;\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  overflow-x: auto;\n  animation: cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;\n}\n@keyframes cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 700px;\n}\n.data-table th {\n  text-align: left;\n  padding: 12px 16px;\n  background: rgba(255, 255, 255, 0.03);\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n}\n.data-table td {\n  padding: 14px 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  font-size: 0.9rem;\n  color: #c9cbdf;\n}\n.data-table tbody tr {\n  transition: background 0.18s;\n}\n.data-table tbody tr:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n.order-id {\n  font-weight: 700;\n  color: #a5b4fc;\n}\n.status-select {\n  padding: 4px 8px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  font-size: 0.85rem;\n  outline: none;\n  background: rgba(255, 255, 255, 0.05);\n  color: #e8eaf6;\n}\n.btn-view {\n  color: #a5b4fc;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.85rem;\n  transition: color 0.2s, transform 0.2s;\n  display: inline-block;\n}\n.btn-view:hover {\n  color: #e0e4ff;\n  transform: translateX(2px);\n}\n.empty {\n  text-align: center;\n  color: #9ca3af;\n  padding: 40px;\n}\n@media (max-width: 1024px) {\n  .admin-sidebar {\n    width: 200px;\n  }\n  .admin-main {\n    padding: 24px 20px;\n  }\n}\n@media (max-width: 768px) {\n  .admin-layout {\n    flex-direction: column;\n  }\n  .admin-sidebar {\n    width: 100%;\n    height: 58px;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: auto;\n    flex-direction: row;\n    padding: 0;\n    border-right: none;\n    border-top: 1px solid rgba(255, 255, 255, 0.07);\n    z-index: 200;\n  }\n  .sidebar-brand {\n    display: none;\n  }\n  .divider {\n    display: none;\n  }\n  .sidebar-nav {\n    flex-direction: row;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    overflow-x: auto;\n    scrollbar-width: none;\n  }\n  .sidebar-nav::-webkit-scrollbar {\n    display: none;\n  }\n  .nav-item {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-width: 54px;\n    padding: 6px 4px;\n    gap: 2px;\n    border-left: none;\n    border-top: 2px solid transparent;\n    border-radius: 0;\n    font-size: 0.6rem;\n    text-align: center;\n  }\n  .nav-item:hover,\n  .nav-item.active {\n    transform: none;\n    border-left-color: transparent;\n    border-top-color: #4f6ef7;\n  }\n  .nav-item i {\n    font-size: 1.1rem;\n    width: auto;\n    margin-right: 0;\n    display: block;\n  }\n  .admin-main {\n    padding: 18px 14px 76px;\n  }\n}\n@media (max-width: 480px) {\n  .admin-main {\n    padding: 14px 12px 76px;\n  }\n  .page-header h1 {\n    font-size: 1.4rem;\n  }\n  .section-card {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=manage-orders.component.css.map */\n"] }]
  }], () => [{ type: OrderService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageOrdersComponent, { className: "ManageOrdersComponent", filePath: "src/app/features/admin/manage-orders/manage-orders.component.ts", lineNumber: 138 });
})();
export {
  ManageOrdersComponent
};
//# sourceMappingURL=chunk-YAPUL432.js.map
