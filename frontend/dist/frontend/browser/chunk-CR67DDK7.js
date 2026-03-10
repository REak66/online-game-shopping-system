import {
  MessageService
} from "./chunk-JLEF55SF.js";
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
  ActivatedRoute,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-IXUP4X5N.js";

// src/app/features/orders/order-detail/order-detail.component.ts
function OrderDetailComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "img", 21);
    \u0275\u0275elementStart(2, "div", 22)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r1.image ? "http://localhost:5050" + item_r1.image : "https://via.placeholder.com/80x80?text=?", \u0275\u0275sanitizeUrl)("alt", item_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("$", \u0275\u0275pipeBind2(7, 6, item_r1.price, "1.2-2"), " x ", item_r1.quantity, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(10, 9, item_r1.price * item_r1.quantity, "1.2-2"), "");
  }
}
function OrderDetailComponent_div_0_button_51_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275text(2, "Cancel Order");
    \u0275\u0275elementContainerEnd();
  }
}
function OrderDetailComponent_div_0_button_51_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Cancelling...");
    \u0275\u0275elementContainerEnd();
  }
}
function OrderDetailComponent_div_0_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function OrderDetailComponent_div_0_button_51_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelOrder());
    });
    \u0275\u0275template(1, OrderDetailComponent_div_0_button_51_ng_container_1_Template, 3, 0, "ng-container", 25)(2, OrderDetailComponent_div_0_button_51_ng_container_2_Template, 2, 0, "ng-container", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.cancelling);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.cancelling);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.cancelling);
  }
}
function OrderDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "nav", 3)(2, "a", 4);
    \u0275\u0275text(3, "Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h1");
    \u0275\u0275text(9, "Order Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8)(11, "span");
    \u0275\u0275text(12, "Status: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 9);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p", 10);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 11)(19, "h2");
    \u0275\u0275text(20, "Order Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 12);
    \u0275\u0275template(22, OrderDetailComponent_div_0_div_22_Template, 11, 12, "div", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 14)(24, "div", 15)(25, "h2");
    \u0275\u0275text(26, "Payment Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 16)(28, "span");
    \u0275\u0275text(29, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 16)(33, "span");
    \u0275\u0275text(34, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 16)(39, "span");
    \u0275\u0275text(40, "Tax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(44, "div", 17);
    \u0275\u0275elementStart(45, "div", 18)(46, "span");
    \u0275\u0275text(47, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(51, OrderDetailComponent_div_0_button_51_Template, 3, 3, "button", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" / Order #", ctx_r2.order._id.slice(-8).toUpperCase(), " ");
    \u0275\u0275advance(9);
    \u0275\u0275classMap("status-" + ctx_r2.order.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.order.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Placed on ", \u0275\u0275pipeBind2(17, 11, ctx_r2.order.createdAt, "fullDate"), "");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.order.orderItems);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.order.paymentMethod);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(37, 14, ctx_r2.order.itemsPrice, "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(43, 17, ctx_r2.order.taxPrice, "1.2-2"), "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(50, 20, ctx_r2.order.totalPrice, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.canCancel);
  }
}
function OrderDetailComponent_app_spin_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spin", 27);
  }
}
function OrderDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "app-skeleton", 28);
    \u0275\u0275elementStart(2, "div", 29)(3, "div", 6)(4, "div", 7);
    \u0275\u0275element(5, "app-skeleton", 30)(6, "app-skeleton", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 11);
    \u0275\u0275element(8, "app-skeleton", 32)(9, "app-skeleton", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 14)(11, "div", 15);
    \u0275\u0275element(12, "app-skeleton", 34)(13, "app-skeleton", 31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("active", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("active", true);
    \u0275\u0275advance();
    \u0275\u0275property("active", true)("rows", 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("active", true);
    \u0275\u0275advance();
    \u0275\u0275property("count", 3)("active", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("active", true);
    \u0275\u0275advance();
    \u0275\u0275property("active", true)("rows", 4);
  }
}
var OrderDetailComponent = class _OrderDetailComponent {
  constructor(route, orderService, msgService) {
    this.route = route;
    this.orderService = orderService;
    this.msgService = msgService;
    this.order = null;
    this.loading = true;
    this.cancelling = false;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.orderService.getOrder(params["id"]).subscribe({
        next: (res) => {
          this.order = res.order;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    });
  }
  get canCancel() {
    return !!this.order && !["delivered", "cancelled"].includes(this.order.status);
  }
  cancelOrder() {
    if (!this.order)
      return;
    this.cancelling = true;
    this.orderService.cancelOrder(this.order._id).subscribe({
      next: (res) => {
        this.order = res.order;
        this.cancelling = false;
        this.msgService.success("Order cancelled successfully");
      },
      error: (err) => {
        this.cancelling = false;
        this.msgService.error(err.error?.message || "Failed to cancel order");
      }
    });
  }
  static {
    this.\u0275fac = function OrderDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailComponent, selectors: [["app-order-detail"]], decls: 3, vars: 3, consts: [["class", "page-container", 4, "ngIf"], ["size", "lg", "tip", "Loading order...", 4, "ngIf"], [1, "page-container"], [1, "breadcrumb"], ["routerLink", "/orders"], [1, "order-layout"], [1, "order-main"], [1, "order-status-card"], [1, "status-row"], [1, "status-badge"], [1, "order-date"], [1, "section-card"], [1, "order-items"], ["class", "order-item", 4, "ngFor", "ngForOf"], [1, "order-sidebar"], [1, "summary-card"], [1, "summary-row"], [1, "summary-divider"], [1, "summary-total"], ["class", "btn-cancel", 3, "disabled", "click", 4, "ngIf"], [1, "order-item"], ["onerror", "this.src='https://via.placeholder.com/80x80?text=?'", 1, "item-img", 3, "src", "alt"], [1, "item-info"], [1, "item-total"], [1, "btn-cancel", 3, "click", "disabled"], [4, "ngIf"], [1, "fas", "fa-xmark", 2, "margin-right", "4px"], ["size", "lg", "tip", "Loading order..."], ["type", "title", "width", "28%", 3, "active"], [1, "order-layout", 2, "margin-top", "24px"], ["type", "title", "width", "40%", 3, "active"], ["type", "text", 3, "active", "rows"], ["type", "title", "width", "30%", 3, "active"], ["type", "cart-item", 3, "count", "active"], ["type", "title", "width", "55%", 3, "active"]], template: function OrderDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, OrderDetailComponent_div_0_Template, 52, 23, "div", 0)(1, OrderDetailComponent_app_spin_1_Template, 1, 0, "app-spin", 1)(2, OrderDetailComponent_div_2_Template, 14, 10, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.order);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule, RouterLink, SpinComponent, SkeletonComponent], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 40px 20px;\n  animation: _ngcontent-%COMP%_pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #9ca3af;\n  margin-bottom: 24px;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #a5b4fc;\n}\n.order-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 32px;\n}\n.order-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.order-status-card[_ngcontent-%COMP%], \n.section-card[_ngcontent-%COMP%], \n.summary-card[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  animation: _ngcontent-%COMP%_cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.order-status-card[_ngcontent-%COMP%] {\n  animation-delay: 0.08s;\n}\n.section-card[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.14s;\n}\n.section-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.summary-card[_ngcontent-%COMP%] {\n  animation-delay: 0.16s;\n}\n@keyframes _ngcontent-%COMP%_cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.order-status-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n  color: #e8eaf6;\n}\n.status-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n  color: #9ca3af;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: rgba(251, 191, 36, 0.15);\n  color: #fbbf24;\n}\n.status-processing[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.15);\n  color: #a5b4fc;\n}\n.status-delivered[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: #4ade80;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.status-paid[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.15);\n  color: #67e8f9;\n}\n.order-date[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.85rem;\n}\n.section-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 16px;\n  color: #e8eaf6;\n}\n.order-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.order-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.item-img[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  object-fit: cover;\n  border-radius: 10px;\n  transition: transform 0.3s;\n}\n.order-item[_ngcontent-%COMP%]:hover   .item-img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.item-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n  margin-bottom: 4px;\n  color: #e8eaf6;\n}\n.item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.85rem;\n}\n.item-total[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #e8eaf6;\n}\n.section-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #c9cbdf;\n  line-height: 1.8;\n}\n.summary-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 16px;\n  color: #e8eaf6;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  font-size: 0.9rem;\n  color: #9ca3af;\n}\n.summary-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 12px 0;\n}\n.summary-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 800;\n  font-size: 1rem;\n  color: #e8eaf6;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 16px;\n  padding: 12px;\n  background: transparent;\n  color: #f87171;\n  border: 2px solid rgba(239, 68, 68, 0.5);\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(239, 68, 68, 0.12);\n  transform: translateY(-1px);\n  border-color: #f87171;\n}\n.btn-cancel[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.97);\n}\n.btn-cancel[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.alert-success[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 10px;\n  background: rgba(34, 197, 94, 0.1);\n  color: #4ade80;\n  border-radius: 8px;\n  font-size: 0.85rem;\n}\n.alert-error[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 10px;\n  background: rgba(220, 38, 38, 0.1);\n  color: #f87171;\n  border-radius: 8px;\n  font-size: 0.85rem;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 80px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid rgba(255, 255, 255, 0.1);\n  border-top-color: #4f6ef7;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 900px) {\n  .page-container[_ngcontent-%COMP%] {\n    padding: 28px 16px 80px;\n  }\n}\n@media (max-width: 768px) {\n  .order-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .page-container[_ngcontent-%COMP%] {\n    padding: 20px 14px 80px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .order-meta[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n}\n@media (max-width: 580px) {\n  .item-img[_ngcontent-%COMP%] {\n    width: 56px;\n    height: 56px;\n  }\n  .order-item[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .section-card[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n}\n@media (max-width: 400px) {\n  .item-img[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n  }\n  .section-card[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n/*# sourceMappingURL=order-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailComponent, [{
    type: Component,
    args: [{ selector: "app-order-detail", standalone: true, imports: [CommonModule, RouterModule, SpinComponent, SkeletonComponent], template: `
    <div class="page-container" *ngIf="order">
      <nav class="breadcrumb">
        <a routerLink="/orders">Orders</a> / Order #{{ order._id.slice(-8).toUpperCase() }}
      </nav>

      <div class="order-layout">
        <div class="order-main">
          <div class="order-status-card">
            <h1>Order Details</h1>
            <div class="status-row">
              <span>Status: </span>
              <span class="status-badge" [class]="'status-' + order.status">{{ order.status }}</span>
            </div>
            <p class="order-date">Placed on {{ order.createdAt | date:'fullDate' }}</p>
          </div>

          <div class="section-card">
            <h2>Order Items</h2>
            <div class="order-items">
              <div class="order-item" *ngFor="let item of order.orderItems">
                <img [src]="item.image ? 'http://localhost:5050' + item.image : 'https://via.placeholder.com/80x80?text=?'"
                  [alt]="item.name"
                  onerror="this.src='https://via.placeholder.com/80x80?text=?'"
                  class="item-img" />
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>\${{ item.price | number:'1.2-2' }} x {{ item.quantity }}</p>
                </div>
                <span class="item-total">\${{ (item.price * item.quantity) | number:'1.2-2' }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="order-sidebar">
          <div class="summary-card">
            <h2>Payment Summary</h2>
            <div class="summary-row"><span>Payment Method</span><span>{{ order.paymentMethod }}</span></div>
            <div class="summary-row"><span>Items</span><span>\${{ order.itemsPrice | number:'1.2-2' }}</span></div>
            <div class="summary-row"><span>Tax</span><span>\${{ order.taxPrice | number:'1.2-2' }}</span></div>
            <div class="summary-divider"></div>
            <div class="summary-total"><span>Total</span><span>\${{ order.totalPrice | number:'1.2-2' }}</span></div>
          </div>

          <button class="btn-cancel" (click)="cancelOrder()"
            *ngIf="canCancel" [disabled]="cancelling">
            <ng-container *ngIf="!cancelling"><i class="fas fa-xmark" style="margin-right:4px"></i>Cancel Order</ng-container>
            <ng-container *ngIf="cancelling">Cancelling...</ng-container>
          </button>

        </div>
      </div>
    </div>

    <app-spin *ngIf="loading" size="lg" tip="Loading order..."></app-spin>

    <!-- Skeleton order detail layout -->
    <div class="page-container" *ngIf="loading">
      <app-skeleton type="title" [active]="true" width="28%"></app-skeleton>
      <div class="order-layout" style="margin-top:24px">
        <div class="order-main">
          <div class="order-status-card">
            <app-skeleton type="title" [active]="true" width="40%"></app-skeleton>
            <app-skeleton type="text" [active]="true" [rows]="2"></app-skeleton>
          </div>
          <div class="section-card">
            <app-skeleton type="title" [active]="true" width="30%"></app-skeleton>
            <app-skeleton type="cart-item" [count]="3" [active]="true"></app-skeleton>
          </div>
        </div>
        <div class="order-sidebar">
          <div class="summary-card">
            <app-skeleton type="title" [active]="true" width="55%"></app-skeleton>
            <app-skeleton type="text" [active]="true" [rows]="4"></app-skeleton>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;be9b787eb0cb87e8f581a910a87a3e74f91a7491540941af8a03b53db0a15dc0;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/features/orders/order-detail/order-detail.component.ts */\n.page-container {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 40px 20px;\n  animation: pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.breadcrumb {\n  font-size: 0.85rem;\n  color: #9ca3af;\n  margin-bottom: 24px;\n}\n.breadcrumb a {\n  color: #9ca3af;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.breadcrumb a:hover {\n  color: #a5b4fc;\n}\n.order-layout {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 32px;\n}\n.order-main {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.order-status-card,\n.section-card,\n.summary-card {\n  background: #1e2235;\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  animation: cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.order-status-card {\n  animation-delay: 0.08s;\n}\n.section-card:nth-child(1) {\n  animation-delay: 0.14s;\n}\n.section-card:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.summary-card {\n  animation-delay: 0.16s;\n}\n@keyframes cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.order-status-card h1 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n  color: #e8eaf6;\n}\n.status-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n  color: #9ca3af;\n}\n.status-badge {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.status-pending {\n  background: rgba(251, 191, 36, 0.15);\n  color: #fbbf24;\n}\n.status-processing {\n  background: rgba(79, 110, 247, 0.15);\n  color: #a5b4fc;\n}\n.status-delivered {\n  background: rgba(34, 197, 94, 0.15);\n  color: #4ade80;\n}\n.status-cancelled {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.status-paid {\n  background: rgba(6, 182, 212, 0.15);\n  color: #67e8f9;\n}\n.order-date {\n  color: #9ca3af;\n  font-size: 0.85rem;\n}\n.section-card h2 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 16px;\n  color: #e8eaf6;\n}\n.order-items {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.order-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.item-img {\n  width: 72px;\n  height: 72px;\n  object-fit: cover;\n  border-radius: 10px;\n  transition: transform 0.3s;\n}\n.order-item:hover .item-img {\n  transform: scale(1.05);\n}\n.item-info {\n  flex: 1;\n}\n.item-info h3 {\n  font-weight: 600;\n  font-size: 0.95rem;\n  margin-bottom: 4px;\n  color: #e8eaf6;\n}\n.item-info p {\n  color: #9ca3af;\n  font-size: 0.85rem;\n}\n.item-total {\n  font-weight: 700;\n  color: #e8eaf6;\n}\n.section-card p {\n  color: #c9cbdf;\n  line-height: 1.8;\n}\n.summary-card h2 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 16px;\n  color: #e8eaf6;\n}\n.summary-row {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  font-size: 0.9rem;\n  color: #9ca3af;\n}\n.summary-divider {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 12px 0;\n}\n.summary-total {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 800;\n  font-size: 1rem;\n  color: #e8eaf6;\n}\n.btn-cancel {\n  width: 100%;\n  margin-top: 16px;\n  padding: 12px;\n  background: transparent;\n  color: #f87171;\n  border: 2px solid rgba(239, 68, 68, 0.5);\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.btn-cancel:hover:not(:disabled) {\n  background: rgba(239, 68, 68, 0.12);\n  transform: translateY(-1px);\n  border-color: #f87171;\n}\n.btn-cancel:active:not(:disabled) {\n  transform: scale(0.97);\n}\n.btn-cancel:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.alert-success {\n  margin-top: 12px;\n  padding: 10px;\n  background: rgba(34, 197, 94, 0.1);\n  color: #4ade80;\n  border-radius: 8px;\n  font-size: 0.85rem;\n}\n.alert-error {\n  margin-top: 12px;\n  padding: 10px;\n  background: rgba(220, 38, 38, 0.1);\n  color: #f87171;\n  border-radius: 8px;\n  font-size: 0.85rem;\n}\n.loading {\n  display: flex;\n  justify-content: center;\n  padding: 80px;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid rgba(255, 255, 255, 0.1);\n  border-top-color: #4f6ef7;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 900px) {\n  .page-container {\n    padding: 28px 16px 80px;\n  }\n}\n@media (max-width: 768px) {\n  .order-layout {\n    grid-template-columns: 1fr;\n  }\n  .page-container {\n    padding: 20px 14px 80px;\n  }\n  .page-title {\n    font-size: 1.5rem;\n  }\n  .order-meta {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n}\n@media (max-width: 580px) {\n  .item-img {\n    width: 56px;\n    height: 56px;\n  }\n  .order-item {\n    gap: 12px;\n  }\n  .section-card {\n    padding: 18px;\n  }\n}\n@media (max-width: 400px) {\n  .item-img {\n    width: 48px;\n    height: 48px;\n  }\n  .section-card {\n    padding: 14px;\n  }\n  .page-title {\n    font-size: 1.25rem;\n  }\n}\n/*# sourceMappingURL=order-detail.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: OrderService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailComponent, { className: "OrderDetailComponent", filePath: "src/app/features/orders/order-detail/order-detail.component.ts", lineNumber: 180 });
})();
export {
  OrderDetailComponent
};
//# sourceMappingURL=chunk-CR67DDK7.js.map
