import {
  SpinComponent
} from "./chunk-GP5OZDAH.js";
import {
  OrderService
} from "./chunk-ZPHFXKIR.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-JDYM2Z3R.js";
import "./chunk-QLMOGZJX.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  NgIf,
  TitleCasePipe,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IXUP4X5N.js";

// src/app/features/checkout/order-confirmation/order-confirmation.component.ts
var _c0 = (a0) => ["/orders", a0];
function OrderConfirmationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275element(2, "i", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4, "Order Placed Successfully!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 7);
    \u0275\u0275text(8, "Thank you for your purchase! We'll send you a confirmation email shortly.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "span");
    \u0275\u0275text(12, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 10);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 9)(16, "span");
    \u0275\u0275text(17, "Payment:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 9)(22, "span");
    \u0275\u0275text(23, "Items:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 11)(27, "span");
    \u0275\u0275text(28, "Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 12)(33, "a", 13);
    \u0275\u0275text(34, "View Order Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "a", 14);
    \u0275\u0275text(36, "All Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 15);
    \u0275\u0275listener("click", function OrderConfirmationComponent_div_1_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.continueShopping());
    });
    \u0275\u0275text(38, "Continue Shopping");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Order #", ctx_r1.order._id, "");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.order.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 6, ctx_r1.order.paymentMethod));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.order.orderItems.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(31, 8, ctx_r1.order.totalPrice, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, ctx_r1.order._id));
  }
}
function OrderConfirmationComponent_app_spin_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spin", 16);
  }
}
var OrderConfirmationComponent = class _OrderConfirmationComponent {
  constructor(route, router, orderService) {
    this.route = route;
    this.router = router;
    this.orderService = orderService;
    this.order = null;
    this.loading = true;
  }
  ngOnInit() {
    const orderId = this.route.snapshot.queryParams["orderId"];
    if (orderId) {
      this.orderService.getOrder(orderId).subscribe({
        next: (res) => {
          this.order = res.order;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    } else {
      this.loading = false;
    }
  }
  continueShopping() {
    if (this.order && this.order.status === "pending") {
      this.orderService.payOrder(this.order._id).subscribe({
        next: (res) => {
          this.order = res.order;
          this.router.navigate(["/products"]);
        },
        error: () => this.router.navigate(["/products"])
      });
    } else {
      this.router.navigate(["/products"]);
    }
  }
  static {
    this.\u0275fac = function OrderConfirmationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderConfirmationComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(OrderService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderConfirmationComponent, selectors: [["app-order-confirmation"]], decls: 3, vars: 2, consts: [[1, "confirmation-page"], ["class", "confirmation-card", 4, "ngIf"], ["size", "lg", "tip", "Loading order details...", 4, "ngIf"], [1, "confirmation-card"], [1, "success-icon"], [1, "fas", "fa-circle-check"], [1, "order-id"], [1, "thank-you"], [1, "order-summary"], [1, "summary-row"], [1, "status-badge"], [1, "summary-row", "total"], [1, "action-buttons"], [1, "btn-primary", 3, "routerLink"], ["routerLink", "/orders", 1, "btn-secondary"], [1, "btn-tertiary", 3, "click"], ["size", "lg", "tip", "Loading order details..."]], template: function OrderConfirmationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, OrderConfirmationComponent_div_1_Template, 39, 13, "div", 1)(2, OrderConfirmationComponent_app_spin_2_Template, 1, 0, "app-spin", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.order);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
      }
    }, dependencies: [CommonModule, NgIf, DecimalPipe, TitleCasePipe, RouterModule, RouterLink, SpinComponent], styles: ["\n\n.confirmation-page[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-primary, #0f1123);\n  padding: 40px 20px;\n}\n.confirmation-card[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border-radius: 24px;\n  padding: 48px;\n  max-width: 560px;\n  width: 100%;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  text-align: center;\n  animation: _ngcontent-%COMP%_confirmIn 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n@keyframes _ngcontent-%COMP%_confirmIn {\n  from {\n    opacity: 0;\n    transform: translateY(40px) scale(0.92);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.success-icon[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin-bottom: 20px;\n  color: #22c55e;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_iconBounce 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both;\n}\n@keyframes _ngcontent-%COMP%_iconBounce {\n  from {\n    transform: scale(0) rotate(-15deg);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1) rotate(0);\n    opacity: 1;\n  }\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #e8eaf6;\n  margin-bottom: 8px;\n}\n.order-id[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.9rem;\n  margin-bottom: 16px;\n}\n.thank-you[_ngcontent-%COMP%] {\n  color: #c9cbdf;\n  line-height: 1.6;\n  margin-bottom: 32px;\n}\n.order-summary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 24px;\n  text-align: left;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  font-size: 0.9rem;\n  color: #9ca3af;\n}\n.summary-row[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.summary-row.total[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #e8eaf6;\n  font-size: 1rem;\n}\n.status-badge[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.15);\n  color: #a5b4fc;\n  padding: 2px 10px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border-radius: 12px;\n  text-decoration: none;\n  font-weight: 700;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: block;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(79, 110, 247, 0.45);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.05);\n  color: #c9cbdf;\n  border-radius: 12px;\n  text-decoration: none;\n  font-weight: 600;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  display: block;\n  transition: all 0.22s;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.09);\n  transform: translateY(-1px);\n}\n.btn-tertiary[_ngcontent-%COMP%] {\n  color: #a5b4fc;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: color 0.2s;\n}\n.btn-tertiary[_ngcontent-%COMP%]:hover {\n  color: #e0e4ff;\n}\n@media (max-width: 768px) {\n  .confirmation-card[_ngcontent-%COMP%] {\n    padding: 40px 24px 80px;\n  }\n}\n@media (max-width: 480px) {\n  .confirmation-card[_ngcontent-%COMP%] {\n    padding: 28px 16px 80px;\n  }\n  .success-icon[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  p[_ngcontent-%COMP%] {\n    font-size: 0.92rem;\n  }\n}\n@media (max-width: 360px) {\n  .confirmation-card[_ngcontent-%COMP%] {\n    padding: 20px 12px 80px;\n  }\n  .success-icon[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n}\n/*# sourceMappingURL=order-confirmation.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConfirmationComponent, [{
    type: Component,
    args: [{ selector: "app-order-confirmation", standalone: true, imports: [CommonModule, RouterModule, SpinComponent], template: `
    <div class="confirmation-page">
      <div class="confirmation-card" *ngIf="order">
        <div class="success-icon"><i class="fas fa-circle-check"></i></div>
        <h1>Order Placed Successfully!</h1>
        <p class="order-id">Order #{{ order._id }}</p>
        <p class="thank-you">Thank you for your purchase! We'll send you a confirmation email shortly.</p>

        <div class="order-summary">
          <div class="summary-row"><span>Status:</span><span class="status-badge">{{ order.status }}</span></div>
          <div class="summary-row"><span>Payment:</span><span>{{ order.paymentMethod | titlecase }}</span></div>
          <div class="summary-row"><span>Items:</span><span>{{ order.orderItems.length }}</span></div>
          <div class="summary-row total"><span>Total:</span><span>\${{ order.totalPrice | number:'1.2-2' }}</span></div>
        </div>

        <div class="action-buttons">
          <a [routerLink]="['/orders', order._id]" class="btn-primary">View Order Details</a>
          <a routerLink="/orders" class="btn-secondary">All Orders</a>
          <button (click)="continueShopping()" class="btn-tertiary">Continue Shopping</button>
        </div>
      </div>

      <app-spin *ngIf="loading" size="lg" tip="Loading order details..."></app-spin>
    </div>
  `, styles: ["/* angular:styles/component:scss;16cb92269738f8eb9f231a17de64f9f04858b504d48059b791bf9a94b58265c1;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/features/checkout/order-confirmation/order-confirmation.component.ts */\n.confirmation-page {\n  min-height: 80vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-primary, #0f1123);\n  padding: 40px 20px;\n}\n.confirmation-card {\n  background: #1e2235;\n  border-radius: 24px;\n  padding: 48px;\n  max-width: 560px;\n  width: 100%;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  text-align: center;\n  animation: confirmIn 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n@keyframes confirmIn {\n  from {\n    opacity: 0;\n    transform: translateY(40px) scale(0.92);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.success-icon {\n  font-size: 5rem;\n  margin-bottom: 20px;\n  color: #22c55e;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: iconBounce 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both;\n}\n@keyframes iconBounce {\n  from {\n    transform: scale(0) rotate(-15deg);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1) rotate(0);\n    opacity: 1;\n  }\n}\nh1 {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #e8eaf6;\n  margin-bottom: 8px;\n}\n.order-id {\n  color: #9ca3af;\n  font-size: 0.9rem;\n  margin-bottom: 16px;\n}\n.thank-you {\n  color: #c9cbdf;\n  line-height: 1.6;\n  margin-bottom: 32px;\n}\n.order-summary {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 24px;\n  text-align: left;\n}\n.summary-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  font-size: 0.9rem;\n  color: #9ca3af;\n}\n.summary-row:last-child {\n  border: none;\n}\n.summary-row.total {\n  font-weight: 700;\n  color: #e8eaf6;\n  font-size: 1rem;\n}\n.status-badge {\n  background: rgba(79, 110, 247, 0.15);\n  color: #a5b4fc;\n  padding: 2px 10px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n.action-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.btn-primary {\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border-radius: 12px;\n  text-decoration: none;\n  font-weight: 700;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: block;\n}\n.btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(79, 110, 247, 0.45);\n}\n.btn-secondary {\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.05);\n  color: #c9cbdf;\n  border-radius: 12px;\n  text-decoration: none;\n  font-weight: 600;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  display: block;\n  transition: all 0.22s;\n}\n.btn-secondary:hover {\n  background: rgba(255, 255, 255, 0.09);\n  transform: translateY(-1px);\n}\n.btn-tertiary {\n  color: #a5b4fc;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: color 0.2s;\n}\n.btn-tertiary:hover {\n  color: #e0e4ff;\n}\n@media (max-width: 768px) {\n  .confirmation-card {\n    padding: 40px 24px 80px;\n  }\n}\n@media (max-width: 480px) {\n  .confirmation-card {\n    padding: 28px 16px 80px;\n  }\n  .success-icon {\n    font-size: 3.5rem;\n  }\n  h1 {\n    font-size: 1.5rem;\n  }\n  p {\n    font-size: 0.92rem;\n  }\n}\n@media (max-width: 360px) {\n  .confirmation-card {\n    padding: 20px 12px 80px;\n  }\n  .success-icon {\n    font-size: 3rem;\n  }\n  h1 {\n    font-size: 1.3rem;\n  }\n}\n/*# sourceMappingURL=order-confirmation.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: OrderService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderConfirmationComponent, { className: "OrderConfirmationComponent", filePath: "src/app/features/checkout/order-confirmation/order-confirmation.component.ts", lineNumber: 112 });
})();
export {
  OrderConfirmationComponent
};
//# sourceMappingURL=chunk-TOKYPSG6.js.map
