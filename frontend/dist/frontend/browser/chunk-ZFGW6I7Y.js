import {
  SkeletonComponent
} from "./chunk-H4WCAIWK.js";
import {
  SpinComponent
} from "./chunk-GP5OZDAH.js";
import {
  OrderService
} from "./chunk-ZPHFXKIR.js";
import {
  RouterLink,
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
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IXUP4X5N.js";

// src/app/features/orders/order-list/order-list.component.ts
var _c0 = (a0) => ["/orders", a0];
function OrderListComponent_app_spin_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spin", 5);
  }
}
function OrderListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-skeleton", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("count", 5)("active", true);
  }
}
function OrderListComponent_div_5_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "img", 21);
    \u0275\u0275elementStart(2, "span", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r1.image ? "http://localhost:5050" + item_r1.image : "https://via.placeholder.com/50x50?text=?", \u0275\u0275sanitizeUrl)("alt", item_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("x", item_r1.quantity, "");
  }
}
function OrderListComponent_div_5_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", order_r2.orderItems.length - 3, " more items ");
  }
}
function OrderListComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div")(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 14);
    \u0275\u0275template(11, OrderListComponent_div_5_div_1_div_11_Template, 6, 4, "div", 15)(12, OrderListComponent_div_5_div_1_div_12_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "span", 18);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 19);
    \u0275\u0275text(18, "View Details \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", order_r2._id.slice(-8).toUpperCase(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 9, order_r2.createdAt, "mediumDate"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-" + order_r2.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r2.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", order_r2.orderItems.slice(0, 3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r2.orderItems.length > 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(16, 12, order_r2.totalPrice, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, order_r2._id));
  }
}
function OrderListComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, OrderListComponent_div_5_div_1_Template, 19, 17, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.orders);
  }
}
function OrderListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275element(2, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "No orders yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Start shopping to create your first order!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 28);
    \u0275\u0275text(8, "Shop Now");
    \u0275\u0275elementEnd()();
  }
}
var OrderListComponent = class _OrderListComponent {
  constructor(orderService) {
    this.orderService = orderService;
    this.orders = [];
    this.loading = true;
  }
  ngOnInit() {
    this.orderService.getMyOrders().subscribe({
      next: (res) => {
        this.orders = res.orders || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function OrderListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderListComponent)(\u0275\u0275directiveInject(OrderService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderListComponent, selectors: [["app-order-list"]], decls: 7, vars: 4, consts: [[1, "page-container"], [1, "page-title"], ["size", "lg", "tip", "Loading orders...", 4, "ngIf"], ["class", "orders-list", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["size", "lg", "tip", "Loading orders..."], [1, "orders-list"], ["type", "order-row", 3, "count", "active"], ["class", "order-card", 4, "ngFor", "ngForOf"], [1, "order-card"], [1, "order-header"], [1, "order-number"], [1, "order-date"], [1, "status-badge"], [1, "order-items"], ["class", "order-item", 4, "ngFor", "ngForOf"], ["class", "more-items", 4, "ngIf"], [1, "order-footer"], [1, "total"], [1, "btn-view", 3, "routerLink"], [1, "order-item"], ["onerror", "this.src='https://via.placeholder.com/50x50?text=?'", 1, "item-img", 3, "src", "alt"], [1, "item-name"], [1, "item-qty"], [1, "more-items"], [1, "empty-state"], [1, "empty-icon"], [1, "fas", "fa-box"], ["routerLink", "/products", 1, "btn-shop"]], template: function OrderListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "My Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, OrderListComponent_app_spin_3_Template, 1, 0, "app-spin", 2)(4, OrderListComponent_div_4_Template, 2, 2, "div", 3)(5, OrderListComponent_div_5_Template, 2, 1, "div", 3)(6, OrderListComponent_div_6_Template, 9, 0, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.orders.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.orders.length === 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule, RouterLink, SpinComponent, SkeletonComponent], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 40px 20px;\n  animation: _ngcontent-%COMP%_pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 32px;\n  color: #e8eaf6;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid rgba(255, 255, 255, 0.1);\n  border-top-color: #4f6ef7;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.orders-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.order-card[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  transition:\n    transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1),\n    border-color 0.25s,\n    box-shadow 0.25s;\n  animation: _ngcontent-%COMP%_cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.order-card[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.05s;\n}\n.order-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.order-card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.15s;\n}\n.order-card[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.2s;\n}\n.order-card[_ngcontent-%COMP%]:nth-child(n+5) {\n  animation-delay: 0.25s;\n}\n@keyframes _ngcontent-%COMP%_cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.order-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: rgba(79, 110, 247, 0.3);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);\n}\n.order-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.order-number[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #e8eaf6;\n  margin-right: 12px;\n}\n.order-date[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.85rem;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: rgba(251, 191, 36, 0.15);\n  color: #fbbf24;\n}\n.status-processing[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.15);\n  color: #a5b4fc;\n}\n.status-delivered[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: #4ade80;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.status-paid[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.15);\n  color: #67e8f9;\n}\n.order-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.order-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.item-img[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.item-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.9rem;\n  color: #c9cbdf;\n}\n.item-qty[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.85rem;\n}\n.more-items[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #9ca3af;\n  padding-left: 56px;\n}\n.order-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n  padding-top: 16px;\n}\n.total[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #e8eaf6;\n}\n.btn-view[_ngcontent-%COMP%] {\n  color: #a5b4fc;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition: color 0.2s, transform 0.2s;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.btn-view[_ngcontent-%COMP%]:hover {\n  color: #e0e4ff;\n  transform: translateX(3px);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 16px;\n  color: #5a5e7a;\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n  color: #e8eaf6;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  margin-bottom: 24px;\n}\n.btn-shop[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 12px 28px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: 600;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.btn-shop[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(79, 110, 247, 0.4);\n}\n@media (max-width: 900px) {\n  .page-container[_ngcontent-%COMP%] {\n    padding: 28px 16px 80px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n}\n@media (max-width: 768px) {\n  .page-container[_ngcontent-%COMP%] {\n    padding: 20px 14px 80px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n    margin-bottom: 20px;\n  }\n  .order-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .order-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .order-footer[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n}\n@media (max-width: 580px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .order-items-preview[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .item-img[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .btn-view[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    justify-content: center;\n  }\n}\n@media (max-width: 400px) {\n  .order-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n    padding: 3px 8px;\n  }\n  .order-card[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=order-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderListComponent, [{
    type: Component,
    args: [{ selector: "app-order-list", standalone: true, imports: [CommonModule, RouterModule, SpinComponent, SkeletonComponent], template: `
    <div class="page-container">
      <h1 class="page-title">My Orders</h1>

      <app-spin *ngIf="loading" size="lg" tip="Loading orders..."></app-spin>

      <div class="orders-list" *ngIf="loading">
        <app-skeleton type="order-row" [count]="5" [active]="true"></app-skeleton>
      </div>

      <div class="orders-list" *ngIf="!loading && orders.length > 0">
        <div class="order-card" *ngFor="let order of orders">
          <div class="order-header">
            <div>
              <span class="order-number">#{{ order._id.slice(-8).toUpperCase() }}</span>
              <span class="order-date">{{ order.createdAt | date:'mediumDate' }}</span>
            </div>
            <span class="status-badge" [class]="'status-' + order.status">{{ order.status }}</span>
          </div>
          <div class="order-items">
            <div class="order-item" *ngFor="let item of order.orderItems.slice(0, 3)">
              <img [src]="item.image ? 'http://localhost:5050' + item.image : 'https://via.placeholder.com/50x50?text=?'"
                [alt]="item.name" class="item-img"
                onerror="this.src='https://via.placeholder.com/50x50?text=?'" />
              <span class="item-name">{{ item.name }}</span>
              <span class="item-qty">x{{ item.quantity }}</span>
            </div>
            <div class="more-items" *ngIf="order.orderItems.length > 3">
              +{{ order.orderItems.length - 3 }} more items
            </div>
          </div>
          <div class="order-footer">
            <span class="total">\${{ order.totalPrice | number:'1.2-2' }}</span>
            <a [routerLink]="['/orders', order._id]" class="btn-view">View Details \u2192</a>
          </div>
        </div>
      </div>

      <div class="empty-state" *ngIf="!loading && orders.length === 0">
        <div class="empty-icon"><i class="fas fa-box"></i></div>
        <h2>No orders yet</h2>
        <p>Start shopping to create your first order!</p>
        <a routerLink="/products" class="btn-shop">Shop Now</a>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;e408a8583db2ad7799b921b36357f4c3d87404b7535e5fc47126626352575e49;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/features/orders/order-list/order-list.component.ts */\n.page-container {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 40px 20px;\n  animation: pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.page-title {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 32px;\n  color: #e8eaf6;\n}\n.loading {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid rgba(255, 255, 255, 0.1);\n  border-top-color: #4f6ef7;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.orders-list {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.order-card {\n  background: #1e2235;\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  transition:\n    transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1),\n    border-color 0.25s,\n    box-shadow 0.25s;\n  animation: cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.order-card:nth-child(1) {\n  animation-delay: 0.05s;\n}\n.order-card:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.order-card:nth-child(3) {\n  animation-delay: 0.15s;\n}\n.order-card:nth-child(4) {\n  animation-delay: 0.2s;\n}\n.order-card:nth-child(n+5) {\n  animation-delay: 0.25s;\n}\n@keyframes cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.order-card:hover {\n  transform: translateY(-4px);\n  border-color: rgba(79, 110, 247, 0.3);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);\n}\n.order-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.order-number {\n  font-weight: 700;\n  color: #e8eaf6;\n  margin-right: 12px;\n}\n.order-date {\n  color: #9ca3af;\n  font-size: 0.85rem;\n}\n.status-badge {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.status-pending {\n  background: rgba(251, 191, 36, 0.15);\n  color: #fbbf24;\n}\n.status-processing {\n  background: rgba(79, 110, 247, 0.15);\n  color: #a5b4fc;\n}\n.status-delivered {\n  background: rgba(34, 197, 94, 0.15);\n  color: #4ade80;\n}\n.status-cancelled {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.status-paid {\n  background: rgba(6, 182, 212, 0.15);\n  color: #67e8f9;\n}\n.order-items {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.order-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.item-img {\n  width: 44px;\n  height: 44px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.item-name {\n  flex: 1;\n  font-size: 0.9rem;\n  color: #c9cbdf;\n}\n.item-qty {\n  color: #9ca3af;\n  font-size: 0.85rem;\n}\n.more-items {\n  font-size: 0.8rem;\n  color: #9ca3af;\n  padding-left: 56px;\n}\n.order-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n  padding-top: 16px;\n}\n.total {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #e8eaf6;\n}\n.btn-view {\n  color: #a5b4fc;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition: color 0.2s, transform 0.2s;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.btn-view:hover {\n  color: #e0e4ff;\n  transform: translateX(3px);\n}\n.empty-state {\n  text-align: center;\n  padding: 80px 20px;\n}\n.empty-icon {\n  font-size: 4rem;\n  margin-bottom: 16px;\n  color: #5a5e7a;\n  animation: float 3s ease-in-out infinite;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.empty-state h2 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n  color: #e8eaf6;\n}\n.empty-state p {\n  color: #9ca3af;\n  margin-bottom: 24px;\n}\n.btn-shop {\n  display: inline-block;\n  padding: 12px 28px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: 600;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.btn-shop:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(79, 110, 247, 0.4);\n}\n@media (max-width: 900px) {\n  .page-container {\n    padding: 28px 16px 80px;\n  }\n  .page-title {\n    font-size: 1.6rem;\n  }\n}\n@media (max-width: 768px) {\n  .page-container {\n    padding: 20px 14px 80px;\n  }\n  .page-title {\n    font-size: 1.4rem;\n    margin-bottom: 20px;\n  }\n  .order-card {\n    padding: 16px;\n  }\n  .order-header {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .order-footer {\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n}\n@media (max-width: 580px) {\n  .page-title {\n    font-size: 1.25rem;\n  }\n  .order-items-preview {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .item-img {\n    width: 40px;\n    height: 40px;\n  }\n  .btn-view {\n    width: 100%;\n    text-align: center;\n    justify-content: center;\n  }\n}\n@media (max-width: 400px) {\n  .order-header .badge {\n    font-size: 0.72rem;\n    padding: 3px 8px;\n  }\n  .order-card {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=order-list.component.css.map */\n"] }]
  }], () => [{ type: OrderService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderListComponent, { className: "OrderListComponent", filePath: "src/app/features/orders/order-list/order-list.component.ts", lineNumber: 144 });
})();
export {
  OrderListComponent
};
//# sourceMappingURL=chunk-ZFGW6I7Y.js.map
