import {
  CartService
} from "./chunk-5ZAXXMJQ.js";
import {
  AuthService
} from "./chunk-QQSXDC4N.js";
import {
  SkeletonComponent
} from "./chunk-H4WCAIWK.js";
import {
  SpinComponent
} from "./chunk-GP5OZDAH.js";
import {
  Router,
  RouterLink,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IXUP4X5N.js";

// src/app/features/cart/cart.component.ts
var _c0 = (a0) => ["/products", a0];
function CartComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "img", 22);
    \u0275\u0275elementStart(2, "div", 23)(3, "h3", 24)(4, "a", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 26);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 27)(10, "button", 28);
    \u0275\u0275listener("click", function CartComponent_div_3_div_2_Template_button_click_10_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateQty(item_r3, item_r3.quantity - 1));
    });
    \u0275\u0275element(11, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 30);
    \u0275\u0275listener("click", function CartComponent_div_3_div_2_Template_button_click_14_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateQty(item_r3, item_r3.quantity + 1));
    });
    \u0275\u0275element(15, "i", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 32);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 33);
    \u0275\u0275listener("click", function CartComponent_div_3_div_2_Template_button_click_19_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeItem(item_r3._id));
    });
    \u0275\u0275element(20, "i", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.getProductImage(item_r3), \u0275\u0275sanitizeUrl)("alt", ctx_r3.getProductName(item_r3));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, ctx_r3.getProductId(item_r3)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getProductName(item_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(8, 8, item_r3.price, "1.2-2"), " each");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", item_r3.quantity <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.quantity);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(18, 11, item_r3.price * item_r3.quantity, "1.2-2"), "");
  }
}
function CartComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275template(2, CartComponent_div_3_div_2_Template, 21, 16, "div", 8);
    \u0275\u0275elementStart(3, "div", 9)(4, "button", 10);
    \u0275\u0275listener("click", function CartComponent_div_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearCart());
    });
    \u0275\u0275element(5, "i", 11);
    \u0275\u0275text(6, " Clear Cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 12);
    \u0275\u0275element(8, "i", 13);
    \u0275\u0275text(9, " Continue Shopping");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 14)(11, "h2");
    \u0275\u0275text(12, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 15)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 15)(20, "span");
    \u0275\u0275text(21, "Tax (10%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "div", 16);
    \u0275\u0275elementStart(26, "div", 17)(27, "span");
    \u0275\u0275text(28, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "button", 18);
    \u0275\u0275listener("click", function CartComponent_div_3_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.checkout());
    });
    \u0275\u0275text(33, " Proceed to Checkout \u2192 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 19);
    \u0275\u0275element(35, "i", 20);
    \u0275\u0275text(36, " Secure checkout powered by SSL");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.cart.items);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("Subtotal (", ctx_r3.cart.items.length, " items)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(18, 5, ctx_r3.cart.totalPrice, "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(24, 8, ctx_r3.cart.totalPrice * 0.1, "1.2-2"), "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(31, 11, ctx_r3.getTotal(), "1.2-2"), "");
  }
}
function CartComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275element(2, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Your cart is empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Add some products to your cart and start shopping!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 38);
    \u0275\u0275text(8, "Start Shopping");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_app_spin_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spin", 39);
  }
}
function CartComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 6)(2, "div", 7);
    \u0275\u0275element(3, "app-skeleton", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14);
    \u0275\u0275element(5, "app-skeleton", 42)(6, "app-skeleton", 43)(7, "app-skeleton", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("count", 3)("active", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("active", true);
    \u0275\u0275advance();
    \u0275\u0275property("active", true)("rows", 3);
    \u0275\u0275advance();
    \u0275\u0275property("active", true);
  }
}
var CartComponent = class _CartComponent {
  constructor(cartService, authService, router) {
    this.cartService = cartService;
    this.authService = authService;
    this.router = router;
    this.cart = null;
    this.loading = false;
  }
  ngOnInit() {
    this.loading = true;
    if (this.authService.isLoggedIn) {
      this.cartService.getCart().subscribe({
        next: () => {
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    } else {
      this.loading = false;
    }
    this.cartService.cart$.subscribe((cart) => {
      this.cart = cart;
    });
  }
  getProductName(item) {
    if (!item.product)
      return "Unknown Product";
    return typeof item.product === "string" ? "Product" : item.product.name;
  }
  getProductImage(item) {
    if (!item.product || typeof item.product === "string")
      return "";
    const img = item.product.image;
    return img ? "http://localhost:5050" + img : "";
  }
  getProductId(item) {
    if (!item.product)
      return "";
    return typeof item.product === "string" ? item.product : item.product._id;
  }
  updateQty(item, qty) {
    if (qty < 1)
      return;
    this.cartService.updateCartItem(item._id, qty).subscribe();
  }
  removeItem(itemId) {
    this.cartService.removeFromCart(itemId).subscribe();
  }
  clearCart() {
    this.cartService.clearCart().subscribe();
  }
  getTotal() {
    if (!this.cart)
      return 0;
    const tax = this.cart.totalPrice * 0.1;
    return this.cart.totalPrice + tax;
  }
  checkout() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(["/auth/login"], { queryParams: { returnUrl: "/checkout" } });
      return;
    }
    this.router.navigate(["/checkout"]);
  }
  static {
    this.\u0275fac = function CartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartComponent)(\u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], decls: 7, vars: 4, consts: [[1, "page-container"], [1, "page-title"], ["class", "cart-layout", 4, "ngIf"], ["class", "empty-cart", 4, "ngIf"], ["size", "lg", "tip", "Loading cart...", 4, "ngIf"], ["class", "sk-cart-wrap", 4, "ngIf"], [1, "cart-layout"], [1, "cart-items"], ["class", "cart-item", 4, "ngFor", "ngForOf"], [1, "cart-actions"], [1, "btn-clear", 3, "click"], [1, "fas", "fa-trash-can"], ["routerLink", "/products", 1, "btn-continue"], [1, "fas", "fa-arrow-left"], [1, "order-summary"], [1, "summary-row"], [1, "summary-divider"], [1, "summary-total"], [1, "btn-checkout", 3, "click"], [1, "security-note"], [1, "fas", "fa-lock"], [1, "cart-item"], ["onerror", "this.src='https://via.placeholder.com/100x100?text=No+Image'", 1, "item-image", 3, "src", "alt"], [1, "item-details"], [1, "item-name"], [3, "routerLink"], [1, "item-price"], [1, "item-qty"], [3, "click", "disabled"], [1, "fas", "fa-minus"], [3, "click"], [1, "fas", "fa-plus"], [1, "item-subtotal"], [1, "remove-btn", 3, "click"], [1, "fas", "fa-xmark"], [1, "empty-cart"], [1, "empty-icon"], [1, "fas", "fa-cart-shopping"], ["routerLink", "/products", 1, "btn-shop"], ["size", "lg", "tip", "Loading cart..."], [1, "sk-cart-wrap"], ["type", "cart-item", 3, "count", "active"], ["type", "title", "width", "50%", 3, "active"], ["type", "text", 3, "active", "rows"], ["type", "rect", "height", "52px", 3, "active"]], template: function CartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "Shopping Cart");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, CartComponent_div_3_Template, 37, 14, "div", 2)(4, CartComponent_div_4_Template, 9, 0, "div", 3)(5, CartComponent_app_spin_5_Template, 1, 0, "app-spin", 4)(6, CartComponent_div_6_Template, 8, 6, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.cart && ctx.cart.items.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cart || ctx.cart.items.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterModule, RouterLink, SpinComponent, SkeletonComponent], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 40px 20px;\n  animation: _ngcontent-%COMP%_pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #e8eaf6;\n  margin-bottom: 32px;\n}\n.cart-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 360px;\n  gap: 32px;\n}\n.cart-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.cart-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background: #1e2235;\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  transition: transform 0.22s ease, box-shadow 0.22s ease;\n  animation: _ngcontent-%COMP%_itemIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.cart-item[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.05s;\n}\n.cart-item[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.cart-item[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.15s;\n}\n.cart-item[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.2s;\n}\n.cart-item[_ngcontent-%COMP%]:nth-child(n+5) {\n  animation-delay: 0.25s;\n}\n@keyframes _ngcontent-%COMP%_itemIn {\n  from {\n    opacity: 0;\n    transform: translateX(-18px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.cart-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);\n}\n.item-image[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  object-fit: cover;\n  border-radius: 12px;\n}\n.item-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.item-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.item-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e8eaf6;\n  text-decoration: none;\n}\n.item-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #a5b4fc;\n}\n.item-price[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.9rem;\n}\n.item-qty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.07);\n  border-radius: 10px;\n  padding: 4px;\n}\n.item-qty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #e8eaf6;\n}\n.item-qty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.item-qty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  min-width: 20px;\n  text-align: center;\n  color: #e8eaf6;\n}\n.item-subtotal[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.1rem;\n  min-width: 80px;\n  text-align: right;\n  color: #e8eaf6;\n}\n.remove-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  font-size: 1rem;\n  padding: 8px;\n  border-radius: 8px;\n  transition: all 0.2s;\n}\n.remove-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.cart-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 0;\n}\n.btn-clear[_ngcontent-%COMP%] {\n  background: none;\n  border: 2px solid #f87171;\n  color: #f87171;\n  padding: 8px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.2s;\n}\n.btn-clear[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n}\n.btn-continue[_ngcontent-%COMP%] {\n  color: #a5b4fc;\n  text-decoration: none;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n.order-summary[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border-radius: 20px;\n  padding: 28px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  height: fit-content;\n  position: sticky;\n  top: 80px;\n}\n.order-summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: #e8eaf6;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  color: #9ca3af;\n  font-size: 0.95rem;\n}\n.summary-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.08);\n  margin: 16px 0;\n}\n.summary-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #e8eaf6;\n  margin-bottom: 24px;\n}\n.btn-checkout[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n  margin-bottom: 12px;\n  box-shadow: 0 4px 18px rgba(79, 110, 247, 0.35);\n}\n.btn-checkout[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 26px rgba(79, 110, 247, 0.5);\n}\n.security-note[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.8rem;\n  color: #9ca3af;\n}\n.empty-cart[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 100px 20px;\n  animation: _ngcontent-%COMP%_pageIn 0.5s ease both;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin-bottom: 20px;\n  color: #5a5e7a;\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.empty-cart[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n  color: #e8eaf6;\n}\n.empty-cart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  margin-bottom: 24px;\n}\n.btn-shop[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 14px 32px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border-radius: 12px;\n  text-decoration: none;\n  font-weight: 700;\n  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 4px 18px rgba(79, 110, 247, 0.35);\n}\n.btn-shop[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 26px rgba(79, 110, 247, 0.5);\n}\n@media (max-width: 900px) {\n  .cart-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .order-summary[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .page-container[_ngcontent-%COMP%] {\n    padding: 28px 16px 80px;\n  }\n}\n@media (max-width: 600px) {\n  .page-container[_ngcontent-%COMP%] {\n    padding: 16px 14px 80px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-bottom: 20px;\n  }\n  .cart-item[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 10px;\n    padding: 14px;\n  }\n  .item-image[_ngcontent-%COMP%] {\n    width: 64px;\n    height: 64px;\n    border-radius: 10px;\n  }\n  .item-subtotal[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .cart-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n    align-items: stretch;\n  }\n  .btn-continue[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 10px;\n    border: 1px solid rgba(165, 180, 252, 0.3);\n    border-radius: 8px;\n  }\n  .order-summary[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .btn-checkout[_ngcontent-%COMP%] {\n    padding: 14px;\n    font-size: 0.95rem;\n  }\n}\n@media (max-width: 400px) {\n  .cart-item[_ngcontent-%COMP%] {\n    gap: 8px;\n    padding: 12px;\n  }\n  .item-image[_ngcontent-%COMP%] {\n    width: 56px;\n    height: 56px;\n  }\n  .item-qty[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .item-qty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=cart.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartComponent, [{
    type: Component,
    args: [{ selector: "app-cart", standalone: true, imports: [CommonModule, RouterModule, SpinComponent, SkeletonComponent], template: `
    <div class="page-container">
      <h1 class="page-title">Shopping Cart</h1>

      <div class="cart-layout" *ngIf="cart && cart.items.length > 0">
        <!-- Cart Items -->
        <div class="cart-items">
          <div class="cart-item" *ngFor="let item of cart.items">
            <img [src]="getProductImage(item)" [alt]="getProductName(item)"
              class="item-image"
              onerror="this.src='https://via.placeholder.com/100x100?text=No+Image'" />
            <div class="item-details">
              <h3 class="item-name">
                <a [routerLink]="['/products', getProductId(item)]">{{ getProductName(item) }}</a>
              </h3>
              <p class="item-price">\${{ item.price | number:'1.2-2' }} each</p>
            </div>
            <div class="item-qty">
              <button (click)="updateQty(item, item.quantity - 1)" [disabled]="item.quantity <= 1"><i class="fas fa-minus"></i></button>
              <span>{{ item.quantity }}</span>
              <button (click)="updateQty(item, item.quantity + 1)"><i class="fas fa-plus"></i></button>
            </div>
            <div class="item-subtotal">\${{ (item.price * item.quantity) | number:'1.2-2' }}</div>
            <button class="remove-btn" (click)="removeItem(item._id)"><i class="fas fa-xmark"></i></button>
          </div>

          <div class="cart-actions">
            <button class="btn-clear" (click)="clearCart()"><i class="fas fa-trash-can"></i> Clear Cart</button>
            <a routerLink="/products" class="btn-continue"><i class="fas fa-arrow-left"></i> Continue Shopping</a>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="order-summary">
          <h2>Order Summary</h2>
          <div class="summary-row">
            <span>Subtotal ({{ cart.items.length }} items)</span>
            <span>\${{ cart.totalPrice | number:'1.2-2' }}</span>
          </div>
          <div class="summary-row">
            <span>Tax (10%)</span>
            <span>\${{ (cart.totalPrice * 0.1) | number:'1.2-2' }}</span>
          </div>
          <div class="summary-divider"></div>
          <div class="summary-total">
            <span>Total</span>
            <span>\${{ getTotal() | number:'1.2-2' }}</span>
          </div>
          <button class="btn-checkout" (click)="checkout()">
            Proceed to Checkout \u2192
          </button>
          <div class="security-note"><i class="fas fa-lock"></i> Secure checkout powered by SSL</div>
        </div>
      </div>

      <!-- Empty Cart -->
      <div class="empty-cart" *ngIf="!cart || cart.items.length === 0">
        <div class="empty-icon"><i class="fas fa-cart-shopping"></i></div>
        <h2>Your cart is empty</h2>
        <p>Add some products to your cart and start shopping!</p>
        <a routerLink="/products" class="btn-shop">Start Shopping</a>
      </div>

      <app-spin *ngIf="loading" size="lg" tip="Loading cart..."></app-spin>

      <!-- Skeleton cart layout -->
      <div class="sk-cart-wrap" *ngIf="loading">
        <div class="cart-layout">
          <div class="cart-items">
            <app-skeleton type="cart-item" [count]="3" [active]="true"></app-skeleton>
          </div>
          <div class="order-summary">
            <app-skeleton type="title" [active]="true" width="50%"></app-skeleton>
            <app-skeleton type="text" [active]="true" [rows]="3"></app-skeleton>
            <app-skeleton type="rect" [active]="true" height="52px"></app-skeleton>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;96512a717bdafe0163b6c793ccb2991d79db45f80d2a1855d36f277ac4e41ed6;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/features/cart/cart.component.ts */\n.page-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 40px 20px;\n  animation: pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.page-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #e8eaf6;\n  margin-bottom: 32px;\n}\n.cart-layout {\n  display: grid;\n  grid-template-columns: 1fr 360px;\n  gap: 32px;\n}\n.cart-items {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.cart-item {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background: #1e2235;\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  transition: transform 0.22s ease, box-shadow 0.22s ease;\n  animation: itemIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.cart-item:nth-child(1) {\n  animation-delay: 0.05s;\n}\n.cart-item:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.cart-item:nth-child(3) {\n  animation-delay: 0.15s;\n}\n.cart-item:nth-child(4) {\n  animation-delay: 0.2s;\n}\n.cart-item:nth-child(n+5) {\n  animation-delay: 0.25s;\n}\n@keyframes itemIn {\n  from {\n    opacity: 0;\n    transform: translateX(-18px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.cart-item:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);\n}\n.item-image {\n  width: 90px;\n  height: 90px;\n  object-fit: cover;\n  border-radius: 12px;\n}\n.item-details {\n  flex: 1;\n}\n.item-name {\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.item-name a {\n  color: #e8eaf6;\n  text-decoration: none;\n}\n.item-name a:hover {\n  color: #a5b4fc;\n}\n.item-price {\n  color: #9ca3af;\n  font-size: 0.9rem;\n}\n.item-qty {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.07);\n  border-radius: 10px;\n  padding: 4px;\n}\n.item-qty button {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #e8eaf6;\n}\n.item-qty button:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.item-qty span {\n  font-weight: 700;\n  min-width: 20px;\n  text-align: center;\n  color: #e8eaf6;\n}\n.item-subtotal {\n  font-weight: 700;\n  font-size: 1.1rem;\n  min-width: 80px;\n  text-align: right;\n  color: #e8eaf6;\n}\n.remove-btn {\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  font-size: 1rem;\n  padding: 8px;\n  border-radius: 8px;\n  transition: all 0.2s;\n}\n.remove-btn:hover {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.cart-actions {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 0;\n}\n.btn-clear {\n  background: none;\n  border: 2px solid #f87171;\n  color: #f87171;\n  padding: 8px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.2s;\n}\n.btn-clear:hover {\n  background: rgba(239, 68, 68, 0.15);\n}\n.btn-continue {\n  color: #a5b4fc;\n  text-decoration: none;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n.order-summary {\n  background: #1e2235;\n  border-radius: 20px;\n  padding: 28px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  height: fit-content;\n  position: sticky;\n  top: 80px;\n}\n.order-summary h2 {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: #e8eaf6;\n}\n.summary-row {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  color: #9ca3af;\n  font-size: 0.95rem;\n}\n.summary-divider {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.08);\n  margin: 16px 0;\n}\n.summary-total {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #e8eaf6;\n  margin-bottom: 24px;\n}\n.btn-checkout {\n  width: 100%;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n  margin-bottom: 12px;\n  box-shadow: 0 4px 18px rgba(79, 110, 247, 0.35);\n}\n.btn-checkout:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 26px rgba(79, 110, 247, 0.5);\n}\n.security-note {\n  text-align: center;\n  font-size: 0.8rem;\n  color: #9ca3af;\n}\n.empty-cart {\n  text-align: center;\n  padding: 100px 20px;\n  animation: pageIn 0.5s ease both;\n}\n.empty-icon {\n  font-size: 5rem;\n  margin-bottom: 20px;\n  color: #5a5e7a;\n  animation: float 3s ease-in-out infinite;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.empty-cart h2 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n  color: #e8eaf6;\n}\n.empty-cart p {\n  color: #9ca3af;\n  margin-bottom: 24px;\n}\n.btn-shop {\n  display: inline-block;\n  padding: 14px 32px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border-radius: 12px;\n  text-decoration: none;\n  font-weight: 700;\n  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 4px 18px rgba(79, 110, 247, 0.35);\n}\n.btn-shop:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 26px rgba(79, 110, 247, 0.5);\n}\n@media (max-width: 900px) {\n  .cart-layout {\n    grid-template-columns: 1fr;\n  }\n  .order-summary {\n    position: static;\n  }\n  .page-container {\n    padding: 28px 16px 80px;\n  }\n}\n@media (max-width: 600px) {\n  .page-container {\n    padding: 16px 14px 80px;\n  }\n  .page-title {\n    font-size: 1.5rem;\n    margin-bottom: 20px;\n  }\n  .cart-item {\n    flex-wrap: wrap;\n    gap: 10px;\n    padding: 14px;\n  }\n  .item-image {\n    width: 64px;\n    height: 64px;\n    border-radius: 10px;\n  }\n  .item-subtotal {\n    min-width: auto;\n  }\n  .cart-actions {\n    flex-direction: column;\n    gap: 10px;\n    align-items: stretch;\n  }\n  .btn-continue {\n    justify-content: center;\n    padding: 10px;\n    border: 1px solid rgba(165, 180, 252, 0.3);\n    border-radius: 8px;\n  }\n  .order-summary {\n    padding: 20px 16px;\n  }\n  .btn-checkout {\n    padding: 14px;\n    font-size: 0.95rem;\n  }\n}\n@media (max-width: 400px) {\n  .cart-item {\n    gap: 8px;\n    padding: 12px;\n  }\n  .item-image {\n    width: 56px;\n    height: 56px;\n  }\n  .item-qty {\n    gap: 8px;\n  }\n  .item-qty button {\n    width: 28px;\n    height: 28px;\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=cart.component.css.map */\n"] }]
  }], () => [{ type: CartService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src/app/features/cart/cart.component.ts", lineNumber: 265 });
})();
export {
  CartComponent
};
//# sourceMappingURL=chunk-44AOWKB7.js.map
