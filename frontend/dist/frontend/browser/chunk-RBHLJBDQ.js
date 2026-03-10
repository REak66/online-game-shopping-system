import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RadioControlValueAccessor
} from "./chunk-QGP2PKSJ.js";
import {
  MessageService
} from "./chunk-JLEF55SF.js";
import {
  CartService
} from "./chunk-5ZAXXMJQ.js";
import {
  AuthService
} from "./chunk-QQSXDC4N.js";
import {
  OrderService
} from "./chunk-ZPHFXKIR.js";
import {
  Router,
  RouterModule
} from "./chunk-JDYM2Z3R.js";
import "./chunk-QLMOGZJX.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IXUP4X5N.js";

// src/app/features/checkout/checkout/checkout.component.ts
function CheckoutComponent_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275text(2, "Place Order");
    \u0275\u0275elementContainerEnd();
  }
}
function CheckoutComponent_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Placing Order...");
    \u0275\u0275elementContainerEnd();
  }
}
function CheckoutComponent_div_52_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "img", 27);
    \u0275\u0275elementStart(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 30);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getProductImage(item_r1), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getProductName(item_r1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("x", item_r1.quantity, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(8, 4, item_r1.price * item_r1.quantity, "1.2-2"), "");
  }
}
function CheckoutComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275template(1, CheckoutComponent_div_52_div_1_Template, 9, 7, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cart.items);
  }
}
var CheckoutComponent = class _CheckoutComponent {
  constructor(orderService, cartService, authService, router, msgService) {
    this.orderService = orderService;
    this.cartService = cartService;
    this.authService = authService;
    this.router = router;
    this.msgService = msgService;
    this.paymentMethod = "credit_card";
    this.loading = false;
    this.cart = null;
  }
  ngOnInit() {
    this.cartService.cart$.subscribe((cart) => this.cart = cart);
    if (!this.cart) {
      this.cartService.getCart().subscribe();
    }
  }
  getProductName(item) {
    if (!item.product)
      return "Product";
    return typeof item.product === "string" ? "Product" : item.product.name;
  }
  getProductImage(item) {
    if (!item.product || typeof item.product === "string")
      return "";
    const img = item.product.image;
    return img ? "http://localhost:5050" + img : "";
  }
  getTotal() {
    if (!this.cart)
      return 0;
    return this.cart.totalPrice + this.cart.totalPrice * 0.1;
  }
  placeOrder() {
    if (!this.paymentMethod)
      return;
    this.loading = true;
    this.orderService.createOrder({
      paymentMethod: this.paymentMethod
    }).subscribe({
      next: (res) => {
        this.loading = false;
        this.cartService.clearLocalCart();
        this.router.navigate(["/checkout/confirmation"], { queryParams: { orderId: res.order._id } });
      },
      error: (err) => {
        this.loading = false;
        this.msgService.error(err.error?.message || "Failed to place order");
      }
    });
  }
  static {
    this.\u0275fac = function CheckoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutComponent)(\u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], decls: 73, vars: 28, consts: [[1, "page-container"], [1, "checkout-header"], [1, "checkout-layout"], [1, "checkout-form"], [1, "payment-options"], [1, "payment-option"], ["type", "radio", "value", "credit_card", 3, "ngModelChange", "ngModel"], [1, "payment-icon"], [1, "fas", "fa-credit-card"], ["type", "radio", "value", "paypal", 3, "ngModelChange", "ngModel"], [1, "fa-brands", "fa-paypal"], ["type", "radio", "value", "bank_transfer", 3, "ngModelChange", "ngModel"], [1, "fas", "fa-building-columns"], ["type", "radio", "value", "crypto", 3, "ngModelChange", "ngModel"], [1, "fa-brands", "fa-bitcoin"], [1, "btn-row"], [1, "btn-place-order", 3, "click", "disabled"], [4, "ngIf"], [1, "order-summary"], ["class", "summary-items", 4, "ngIf"], [1, "summary-divider"], [1, "summary-row"], [1, "summary-total"], [1, "fas", "fa-circle-check", 2, "margin-right", "6px"], [1, "summary-items"], ["class", "summary-item", 4, "ngFor", "ngForOf"], [1, "summary-item"], ["onerror", "this.src='https://via.placeholder.com/50x50?text=?'", 1, "summary-item-img", 3, "src"], [1, "summary-item-name"], [1, "summary-item-qty"], [1, "summary-item-price"]], template: function CheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Checkout");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "h2");
        \u0275\u0275text(7, "Payment Method");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 4)(9, "label", 5)(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.paymentMethod, $event) || (ctx.paymentMethod = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 7);
        \u0275\u0275element(12, "i", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div")(14, "strong");
        \u0275\u0275text(15, "Credit / Debit Card");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p");
        \u0275\u0275text(17, "Visa, Mastercard, Amex");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "label", 5)(19, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.paymentMethod, $event) || (ctx.paymentMethod = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 7);
        \u0275\u0275element(21, "i", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div")(23, "strong");
        \u0275\u0275text(24, "PayPal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, "Fast and secure");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "label", 5)(28, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.paymentMethod, $event) || (ctx.paymentMethod = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 7);
        \u0275\u0275element(30, "i", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div")(32, "strong");
        \u0275\u0275text(33, "Bank Transfer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "p");
        \u0275\u0275text(35, "Direct bank payment");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "label", 5)(37, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_37_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.paymentMethod, $event) || (ctx.paymentMethod = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span", 7);
        \u0275\u0275element(39, "i", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div")(41, "strong");
        \u0275\u0275text(42, "Cryptocurrency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "p");
        \u0275\u0275text(44, "Bitcoin, Ethereum");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(45, "div", 15)(46, "button", 16);
        \u0275\u0275listener("click", function CheckoutComponent_Template_button_click_46_listener() {
          return ctx.placeOrder();
        });
        \u0275\u0275template(47, CheckoutComponent_ng_container_47_Template, 3, 0, "ng-container", 17)(48, CheckoutComponent_ng_container_48_Template, 2, 0, "ng-container", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "div", 18)(50, "h2");
        \u0275\u0275text(51, "Order Summary");
        \u0275\u0275elementEnd();
        \u0275\u0275template(52, CheckoutComponent_div_52_Template, 2, 1, "div", 19);
        \u0275\u0275element(53, "div", 20);
        \u0275\u0275elementStart(54, "div", 21)(55, "span");
        \u0275\u0275text(56, "Subtotal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "span");
        \u0275\u0275text(58);
        \u0275\u0275pipe(59, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 21)(61, "span");
        \u0275\u0275text(62, "Tax (10%)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "span");
        \u0275\u0275text(64);
        \u0275\u0275pipe(65, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(66, "div", 20);
        \u0275\u0275elementStart(67, "div", 22)(68, "span");
        \u0275\u0275text(69, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "span");
        \u0275\u0275text(71);
        \u0275\u0275pipe(72, "number");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275classProp("selected", ctx.paymentMethod === "credit_card");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.paymentMethod);
        \u0275\u0275advance(8);
        \u0275\u0275classProp("selected", ctx.paymentMethod === "paypal");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.paymentMethod);
        \u0275\u0275advance(8);
        \u0275\u0275classProp("selected", ctx.paymentMethod === "bank_transfer");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.paymentMethod);
        \u0275\u0275advance(8);
        \u0275\u0275classProp("selected", ctx.paymentMethod === "crypto");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.paymentMethod);
        \u0275\u0275advance(9);
        \u0275\u0275property("disabled", ctx.loading || !ctx.paymentMethod);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.cart);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(59, 19, ctx.cart == null ? null : ctx.cart.totalPrice, "1.2-2"), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(65, 22, ((ctx.cart == null ? null : ctx.cart.totalPrice) || 0) * 0.1, "1.2-2"), "");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(72, 25, ctx.getTotal(), "1.2-2"), "");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterModule, FormsModule, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 40px 20px;\n  animation: _ngcontent-%COMP%_pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.checkout-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.checkout-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: #e8eaf6;\n}\n.steps[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n.step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  color: #6b7280;\n  background: rgba(255, 255, 255, 0.05);\n  transition: all 0.3s;\n}\n.step.active[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.15);\n  color: #a5b4fc;\n}\n.step.done[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #4ade80;\n}\n.step-num[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: currentColor;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n}\n.step.active[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  background: #4f6ef7;\n  color: white;\n}\n.step-line[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 60px;\n  height: 2px;\n  background: rgba(255, 255, 255, 0.1);\n}\n.checkout-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 32px;\n}\n.checkout-form[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border-radius: 20px;\n  padding: 32px;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  animation: _ngcontent-%COMP%_cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;\n}\n@keyframes _ngcontent-%COMP%_cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.checkout-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin-bottom: 24px;\n  color: #e8eaf6;\n}\n.form-row[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: #c9cbdf;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  font-size: 0.95rem;\n  outline: none;\n  transition: border-color 0.25s, box-shadow 0.25s;\n  box-sizing: border-box;\n  background: rgba(255, 255, 255, 0.05);\n  color: #e8eaf6;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #4f6ef7;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.18);\n}\n.btn-next[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  margin-top: 8px;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 4px 18px rgba(79, 110, 247, 0.3);\n}\n.btn-next[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(79, 110, 247, 0.5);\n}\n.btn-next[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.97);\n}\n.btn-next[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.payment-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.payment-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.22s;\n  background: rgba(255, 255, 255, 0.03);\n  color: #c9cbdf;\n}\n.payment-option[_ngcontent-%COMP%]:hover {\n  border-color: rgba(79, 110, 247, 0.4);\n  background: rgba(79, 110, 247, 0.06);\n}\n.payment-option.selected[_ngcontent-%COMP%] {\n  border-color: #4f6ef7;\n  background: rgba(79, 110, 247, 0.12);\n}\n.payment-option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.payment-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.payment-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.95rem;\n  color: #e8eaf6;\n}\n.payment-option[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #9ca3af;\n  margin: 0;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 0.9rem;\n  animation: _ngcontent-%COMP%_alertIn 0.3s ease both;\n}\n@keyframes _ngcontent-%COMP%_alertIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.btn-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  padding: 14px 24px;\n  background: transparent;\n  color: #c9cbdf;\n  border: 2px solid rgba(255, 255, 255, 0.15);\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.btn-place-order[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 4px 18px rgba(34, 197, 94, 0.3);\n}\n.btn-place-order[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.45);\n}\n.btn-place-order[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.97);\n}\n.btn-place-order[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.order-summary[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border-radius: 20px;\n  padding: 28px;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  height: fit-content;\n  position: sticky;\n  top: 80px;\n  animation: _ngcontent-%COMP%_cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both;\n}\n.order-summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: #e8eaf6;\n}\n.summary-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.85rem;\n}\n.summary-item-img[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  object-fit: cover;\n  border-radius: 8px;\n  transition: transform 0.25s;\n}\n.summary-item[_ngcontent-%COMP%]:hover   .summary-item-img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.summary-item-name[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #c9cbdf;\n}\n.summary-item-qty[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.summary-item-price[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #e8eaf6;\n}\n.summary-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 12px 0;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  color: #9ca3af;\n  font-size: 0.9rem;\n}\n.summary-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #e8eaf6;\n}\n@media (max-width: 900px) {\n  .checkout-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .page-container[_ngcontent-%COMP%] {\n    padding: 28px 16px 80px;\n  }\n  .checkout-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n}\n@media (max-width: 768px) {\n  .page-container[_ngcontent-%COMP%] {\n    padding: 20px 14px 80px;\n  }\n  .checkout-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n    margin-bottom: 16px;\n  }\n  .steps[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .step[_ngcontent-%COMP%] {\n    padding: 8px 14px;\n    font-size: 0.85rem;\n  }\n  .step-line[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .checkout-form[_ngcontent-%COMP%] {\n    padding: 22px 18px;\n  }\n  .order-summary[_ngcontent-%COMP%] {\n    padding: 22px 18px;\n  }\n}\n@media (max-width: 480px) {\n  .payment-option[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .checkout-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .steps[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .step[_ngcontent-%COMP%] {\n    padding: 7px 12px;\n    font-size: 0.8rem;\n  }\n  .step-num[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n    font-size: 0.75rem;\n  }\n}\n@media (max-width: 360px) {\n  .steps[_ngcontent-%COMP%] {\n    gap: 4px;\n  }\n  .step[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n  }\n}\n/*# sourceMappingURL=checkout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutComponent, [{
    type: Component,
    args: [{ selector: "app-checkout", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `
    <div class="page-container">
      <div class="checkout-header">
        <h1>Checkout</h1>
      </div>

      <div class="checkout-layout">
        <!-- Payment -->
        <div class="checkout-form">
          <h2>Payment Method</h2>
          <div class="payment-options">
            <label class="payment-option" [class.selected]="paymentMethod === 'credit_card'">
              <input type="radio" [(ngModel)]="paymentMethod" value="credit_card" />
              <span class="payment-icon"><i class="fas fa-credit-card"></i></span>
              <div>
                <strong>Credit / Debit Card</strong>
                <p>Visa, Mastercard, Amex</p>
              </div>
            </label>
            <label class="payment-option" [class.selected]="paymentMethod === 'paypal'">
              <input type="radio" [(ngModel)]="paymentMethod" value="paypal" />
              <span class="payment-icon"><i class="fa-brands fa-paypal"></i></span>
              <div>
                <strong>PayPal</strong>
                <p>Fast and secure</p>
              </div>
            </label>
            <label class="payment-option" [class.selected]="paymentMethod === 'bank_transfer'">
              <input type="radio" [(ngModel)]="paymentMethod" value="bank_transfer" />
              <span class="payment-icon"><i class="fas fa-building-columns"></i></span>
              <div>
                <strong>Bank Transfer</strong>
                <p>Direct bank payment</p>
              </div>
            </label>
            <label class="payment-option" [class.selected]="paymentMethod === 'crypto'">
              <input type="radio" [(ngModel)]="paymentMethod" value="crypto" />
              <span class="payment-icon"><i class="fa-brands fa-bitcoin"></i></span>
              <div>
                <strong>Cryptocurrency</strong>
                <p>Bitcoin, Ethereum</p>
              </div>
            </label>
          </div>

          <div class="btn-row">
            <button class="btn-place-order" (click)="placeOrder()" [disabled]="loading || !paymentMethod">
              <ng-container *ngIf="!loading"><i class="fas fa-circle-check" style="margin-right:6px"></i>Place Order</ng-container>
              <ng-container *ngIf="loading">Placing Order...</ng-container>
            </button>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="order-summary">
          <h2>Order Summary</h2>
          <div class="summary-items" *ngIf="cart">
            <div class="summary-item" *ngFor="let item of cart.items">
              <img [src]="getProductImage(item)" class="summary-item-img"
                onerror="this.src='https://via.placeholder.com/50x50?text=?'" />
              <span class="summary-item-name">{{ getProductName(item) }}</span>
              <span class="summary-item-qty">x{{ item.quantity }}</span>
              <span class="summary-item-price">\${{ (item.price * item.quantity) | number:'1.2-2' }}</span>
            </div>
          </div>
          <div class="summary-divider"></div>
          <div class="summary-row"><span>Subtotal</span><span>\${{ cart?.totalPrice | number:'1.2-2' }}</span></div>
          <div class="summary-row"><span>Tax (10%)</span><span>\${{ ((cart?.totalPrice || 0) * 0.1) | number:'1.2-2' }}</span></div>
          <div class="summary-divider"></div>
          <div class="summary-total"><span>Total</span><span>\${{ getTotal() | number:'1.2-2' }}</span></div>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;5fd2408868f1f14c3f6d29361180a956f8e9e9501e458a0d109351b2fdcb1b5a;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/features/checkout/checkout/checkout.component.ts */\n.page-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 40px 20px;\n  animation: pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.checkout-header {\n  margin-bottom: 40px;\n}\n.checkout-header h1 {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: #e8eaf6;\n}\n.steps {\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n.step {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  color: #6b7280;\n  background: rgba(255, 255, 255, 0.05);\n  transition: all 0.3s;\n}\n.step.active {\n  background: rgba(79, 110, 247, 0.15);\n  color: #a5b4fc;\n}\n.step.done {\n  background: rgba(34, 197, 94, 0.12);\n  color: #4ade80;\n}\n.step-num {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: currentColor;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n}\n.step.active .step-num {\n  background: #4f6ef7;\n  color: white;\n}\n.step-line {\n  flex: 1;\n  max-width: 60px;\n  height: 2px;\n  background: rgba(255, 255, 255, 0.1);\n}\n.checkout-layout {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 32px;\n}\n.checkout-form {\n  background: #1e2235;\n  border-radius: 20px;\n  padding: 32px;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  animation: cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;\n}\n@keyframes cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.checkout-form h2 {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin-bottom: 24px;\n  color: #e8eaf6;\n}\n.form-row {\n  margin-bottom: 20px;\n}\n.two-col {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: #c9cbdf;\n}\n.form-control {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  font-size: 0.95rem;\n  outline: none;\n  transition: border-color 0.25s, box-shadow 0.25s;\n  box-sizing: border-box;\n  background: rgba(255, 255, 255, 0.05);\n  color: #e8eaf6;\n}\n.form-control:focus {\n  border-color: #4f6ef7;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.18);\n}\n.btn-next {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  margin-top: 8px;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 4px 18px rgba(79, 110, 247, 0.3);\n}\n.btn-next:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(79, 110, 247, 0.5);\n}\n.btn-next:active:not(:disabled) {\n  transform: scale(0.97);\n}\n.btn-next:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.payment-options {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.payment-option {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.22s;\n  background: rgba(255, 255, 255, 0.03);\n  color: #c9cbdf;\n}\n.payment-option:hover {\n  border-color: rgba(79, 110, 247, 0.4);\n  background: rgba(79, 110, 247, 0.06);\n}\n.payment-option.selected {\n  border-color: #4f6ef7;\n  background: rgba(79, 110, 247, 0.12);\n}\n.payment-option input {\n  cursor: pointer;\n}\n.payment-icon {\n  font-size: 1.8rem;\n}\n.payment-option strong {\n  display: block;\n  font-size: 0.95rem;\n  color: #e8eaf6;\n}\n.payment-option p {\n  font-size: 0.8rem;\n  color: #9ca3af;\n  margin: 0;\n}\n.alert {\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 0.9rem;\n  animation: alertIn 0.3s ease both;\n}\n@keyframes alertIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.alert-error {\n  background: rgba(220, 38, 38, 0.1);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.btn-row {\n  display: flex;\n  gap: 12px;\n}\n.btn-back {\n  padding: 14px 24px;\n  background: transparent;\n  color: #c9cbdf;\n  border: 2px solid rgba(255, 255, 255, 0.15);\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-back:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.btn-place-order {\n  flex: 1;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 4px 18px rgba(34, 197, 94, 0.3);\n}\n.btn-place-order:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.45);\n}\n.btn-place-order:active:not(:disabled) {\n  transform: scale(0.97);\n}\n.btn-place-order:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.order-summary {\n  background: #1e2235;\n  border-radius: 20px;\n  padding: 28px;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  height: fit-content;\n  position: sticky;\n  top: 80px;\n  animation: cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both;\n}\n.order-summary h2 {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: #e8eaf6;\n}\n.summary-items {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.summary-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.85rem;\n}\n.summary-item-img {\n  width: 44px;\n  height: 44px;\n  object-fit: cover;\n  border-radius: 8px;\n  transition: transform 0.25s;\n}\n.summary-item:hover .summary-item-img {\n  transform: scale(1.06);\n}\n.summary-item-name {\n  flex: 1;\n  color: #c9cbdf;\n}\n.summary-item-qty {\n  color: #9ca3af;\n}\n.summary-item-price {\n  font-weight: 600;\n  color: #e8eaf6;\n}\n.summary-divider {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 12px 0;\n}\n.summary-row {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  color: #9ca3af;\n  font-size: 0.9rem;\n}\n.summary-total {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #e8eaf6;\n}\n@media (max-width: 900px) {\n  .checkout-layout {\n    grid-template-columns: 1fr;\n  }\n  .two-col {\n    grid-template-columns: 1fr;\n  }\n  .page-container {\n    padding: 28px 16px 80px;\n  }\n  .checkout-header h1 {\n    font-size: 1.6rem;\n  }\n}\n@media (max-width: 768px) {\n  .page-container {\n    padding: 20px 14px 80px;\n  }\n  .checkout-header h1 {\n    font-size: 1.4rem;\n    margin-bottom: 16px;\n  }\n  .steps {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .step {\n    padding: 8px 14px;\n    font-size: 0.85rem;\n  }\n  .step-line {\n    display: none;\n  }\n  .checkout-form {\n    padding: 22px 18px;\n  }\n  .order-summary {\n    padding: 22px 18px;\n  }\n}\n@media (max-width: 480px) {\n  .payment-option {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .checkout-header h1 {\n    font-size: 1.25rem;\n  }\n  .steps {\n    gap: 6px;\n  }\n  .step {\n    padding: 7px 12px;\n    font-size: 0.8rem;\n  }\n  .step-num {\n    width: 24px;\n    height: 24px;\n    font-size: 0.75rem;\n  }\n}\n@media (max-width: 360px) {\n  .steps {\n    gap: 4px;\n  }\n  .step {\n    padding: 6px 10px;\n  }\n}\n/*# sourceMappingURL=checkout.component.css.map */\n"] }]
  }], () => [{ type: OrderService }, { type: CartService }, { type: AuthService }, { type: Router }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src/app/features/checkout/checkout/checkout.component.ts", lineNumber: 217 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=chunk-RBHLJBDQ.js.map
