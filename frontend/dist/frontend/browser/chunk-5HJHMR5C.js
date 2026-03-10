import {
  StarRatingComponent
} from "./chunk-W6CYOKMK.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-JDYM2Z3R.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  EventEmitter,
  Input,
  NgIf,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IXUP4X5N.js";

// src/app/shared/components/product-card/product-card.component.ts
var _c0 = (a0) => ["/products", a0];
function ProductCardComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "HOT");
    \u0275\u0275elementEnd();
  }
}
function ProductCardComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1, "NEW");
    \u0275\u0275elementEnd();
  }
}
function ProductCardComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "SOLD");
    \u0275\u0275elementEnd();
  }
}
function ProductCardComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r0.product.stock * 10, "%");
  }
}
function ProductCardComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.categoryName, " ");
  }
}
function ProductCardComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.product.stock, " left");
  }
}
function ProductCardComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "Out of stock");
    \u0275\u0275elementEnd();
  }
}
var ProductCardComponent = class _ProductCardComponent {
  constructor() {
    this.addToCart = new EventEmitter();
    this.addToWishlist = new EventEmitter();
    this.quickView = new EventEmitter();
  }
  get categoryName() {
    if (!this.product.category)
      return "";
    return typeof this.product.category === "string" ? "" : this.product.category.name;
  }
  get isNew() {
    const created = new Date(this.product.createdAt);
    const now = /* @__PURE__ */ new Date();
    return now.getTime() - created.getTime() < 7 * 24 * 60 * 60 * 1e3;
  }
  onAddToCart(event) {
    event.preventDefault();
    event.stopPropagation();
    this.addToCart.emit(this.product);
  }
  onWishlist(event) {
    event.preventDefault();
    event.stopPropagation();
    this.addToWishlist.emit(this.product);
  }
  onQuickView(event) {
    event.preventDefault();
    event.stopPropagation();
    this.quickView.emit(this.product);
  }
  static {
    this.\u0275fac = function ProductCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: "product" }, outputs: { addToCart: "addToCart", addToWishlist: "addToWishlist", quickView: "quickView" }, decls: 37, vars: 26, consts: [[1, "pc"], [1, "pc-img-wrap"], ["onerror", "this.src='https://placehold.co/300x180/1e2235/4f6ef7?text=Game'", 1, "pc-img", 3, "src", "alt"], [1, "pc-img-overlay"], [1, "pc-badges"], ["class", "badge b-hot", 4, "ngIf"], ["class", "badge b-new", 4, "ngIf"], ["class", "badge b-out", 4, "ngIf"], [1, "pc-actions"], ["title", "Wishlist", 1, "pa-btn", "pa-btn-wish", 3, "click"], [1, "fas", "fa-heart"], ["title", "Quick view", 1, "pa-btn", 3, "click"], [1, "fas", "fa-eye"], ["class", "pc-stock-bar", 4, "ngIf"], [1, "pc-body"], ["class", "pc-genre", 4, "ngIf"], [1, "pc-name"], [3, "routerLink"], [1, "pc-meta"], [1, "pc-rating"], [3, "rating"], [1, "rv"], [1, "pc-footer"], [1, "pc-price"], [1, "eth-price"], ["class", "usd-price", 4, "ngIf"], ["class", "usd-price out", 4, "ngIf"], [1, "pc-btns"], [1, "btn-history", 3, "routerLink"], [1, "fas", "fa-info-circle"], [1, "btn-cart", 3, "click", "disabled"], [1, "fas", "fa-cart-shopping"], [1, "badge", "b-hot"], [1, "badge", "b-new"], [1, "badge", "b-out"], [1, "pc-stock-bar"], [1, "stock-fill"], [1, "pc-genre"], [1, "fas", "fa-tag", "pc-genre-icon"], [1, "usd-price"], [1, "usd-price", "out"]], template: function ProductCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "img", 2)(3, "div", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275template(5, ProductCardComponent_span_5_Template, 2, 0, "span", 5)(6, ProductCardComponent_span_6_Template, 2, 0, "span", 6)(7, ProductCardComponent_span_7_Template, 2, 0, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 8)(9, "button", 9);
        \u0275\u0275listener("click", function ProductCardComponent_Template_button_click_9_listener($event) {
          return ctx.onWishlist($event);
        });
        \u0275\u0275element(10, "i", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 11);
        \u0275\u0275listener("click", function ProductCardComponent_Template_button_click_11_listener($event) {
          return ctx.onQuickView($event);
        });
        \u0275\u0275element(12, "i", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(13, ProductCardComponent_div_13_Template, 2, 2, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 14);
        \u0275\u0275template(15, ProductCardComponent_div_15_Template, 3, 1, "div", 15);
        \u0275\u0275elementStart(16, "h3", 16)(17, "a", 17);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 18)(20, "div", 19);
        \u0275\u0275element(21, "app-star-rating", 20);
        \u0275\u0275elementStart(22, "span", 21);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 22)(25, "div", 23)(26, "span", 24);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, ProductCardComponent_span_29_Template, 2, 1, "span", 25)(30, ProductCardComponent_span_30_Template, 2, 0, "span", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 27)(32, "button", 28);
        \u0275\u0275element(33, "i", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 30);
        \u0275\u0275listener("click", function ProductCardComponent_Template_button_click_34_listener($event) {
          return ctx.onAddToCart($event);
        });
        \u0275\u0275element(35, "i", 31);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("out-of-stock", ctx.product.stock === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.product.image ? "http://localhost:5050" + ctx.product.image : "https://placehold.co/300x180/1e2235/4f6ef7?text=Game", \u0275\u0275sanitizeUrl)("alt", ctx.product.name);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.product.featured);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isNew);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.product.stock === 0);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.product.stock > 0 && ctx.product.stock <= 10);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.categoryName);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c0, ctx.product._id));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.product.name);
        \u0275\u0275advance(3);
        \u0275\u0275property("rating", ctx.product.rating);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("(", ctx.product.numReviews, ")");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(28, 19, ctx.product.price, "1.2-2"), "");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.product.stock > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.product.stock === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(24, _c0, ctx.product._id));
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.product.stock === 0);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.product.stock === 0 ? "Sold" : "Add", " ");
      }
    }, dependencies: [CommonModule, NgIf, DecimalPipe, RouterModule, RouterLink, StarRatingComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.pc[_ngcontent-%COMP%] {\n  background: #1a1d30;\n  border-radius: 18px;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  transition:\n    transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1),\n    box-shadow 0.28s ease,\n    border-color 0.28s ease;\n  animation: _ngcontent-%COMP%_cardEnter 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_cardEnter {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.pc[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px) scale(1.01);\n  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(79, 110, 247, 0.25);\n  border-color: rgba(79, 110, 247, 0.4);\n}\n.pc-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 185px;\n  overflow: hidden;\n}\n.pc-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.pc[_ngcontent-%COMP%]:hover   .pc-img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.pc-img-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(26, 29, 48, 0.85) 0%,\n      rgba(26, 29, 48, 0.1) 50%,\n      transparent 100%);\n  pointer-events: none;\n}\n.pc-stock-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: rgba(255, 255, 255, 0.1);\n}\n.stock-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #ef4444);\n  transition: width 0.4s ease;\n}\n.pc-badges[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  display: flex;\n  gap: 5px;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 3px 9px;\n  border-radius: 50px;\n  font-size: 0.62rem;\n  font-weight: 800;\n  letter-spacing: 0.6px;\n  animation: _ngcontent-%COMP%_badgeIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n@keyframes _ngcontent-%COMP%_badgeIn {\n  from {\n    opacity: 0;\n    transform: scale(0) translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.b-hot[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);\n}\n.b-new[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(34, 197, 94, 0.4);\n}\n.b-out[_ngcontent-%COMP%] {\n  background: rgba(100, 100, 120, 0.85);\n  color: #ddd;\n}\n.pc-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  opacity: 0;\n  transform: translateX(12px);\n  transition: opacity 0.28s ease, transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.pc[_ngcontent-%COMP%]:hover   .pc-actions[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n.pa-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: rgba(20, 22, 40, 0.8);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 50%;\n  color: #a0a4c0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  cursor: pointer;\n}\n.pa-btn[_ngcontent-%COMP%]:hover {\n  background: #4f6ef7;\n  color: #fff;\n  border-color: transparent;\n  transform: scale(1.18);\n  box-shadow: 0 4px 12px rgba(79, 110, 247, 0.45);\n}\n.pa-btn-wish[_ngcontent-%COMP%]:hover {\n  background: #ec4899;\n  box-shadow: 0 4px 12px rgba(236, 72, 153, 0.45);\n}\n.pa-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.pc-body[_ngcontent-%COMP%] {\n  padding: 22px 14px 14px;\n}\n.pc-genre[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #5a5e7a;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  margin-bottom: 6px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pc-genre-icon[_ngcontent-%COMP%] {\n  color: #4f6ef7;\n  font-size: 0.6rem;\n}\n.pc-name[_ngcontent-%COMP%] {\n  font-size: 0.93rem;\n  font-weight: 700;\n  margin-bottom: 8px;\n  line-height: 1.35;\n}\n.pc-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e8ecff;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.pc-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #818cf8;\n}\n.pc-meta[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.pc-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.rv[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #5a5e7a;\n}\n.pc-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.pc-price[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.eth-price[_ngcontent-%COMP%] {\n  font-size: 1.08rem;\n  font-weight: 800;\n  color: #818cf8;\n}\n.usd-price[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #5a5e7a;\n}\n.usd-price.out[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.pc-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.btn-history[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  color: #6b7280;\n  font-size: 0.82rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  cursor: pointer;\n}\n.btn-history[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #e0e4ff;\n  transform: scale(1.08);\n}\n.btn-cart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  border: none;\n  border-radius: 10px;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 700;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  cursor: pointer;\n  box-shadow: 0 3px 10px rgba(79, 110, 247, 0.3);\n}\n.btn-cart[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(79, 110, 247, 0.5);\n}\n.btn-cart[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.95);\n}\n.btn-cart[_ngcontent-%COMP%]:disabled {\n  background: #252840;\n  color: #4a4e6a;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.out-of-stock[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n@media (hover: none) {\n  .pc-actions[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  .pc[_ngcontent-%COMP%]:hover {\n    transform: none;\n    box-shadow: none;\n    border-color: rgba(255, 255, 255, 0.07);\n  }\n  .pc[_ngcontent-%COMP%]:hover   .pc-img[_ngcontent-%COMP%] {\n    transform: none;\n  }\n}\n@media (max-width: 580px) {\n  .pc-img-wrap[_ngcontent-%COMP%] {\n    height: 155px;\n  }\n  .pc-body[_ngcontent-%COMP%] {\n    padding: 14px 12px 12px;\n  }\n  .pc-name[_ngcontent-%COMP%] {\n    font-size: 0.86rem;\n  }\n  .eth-price[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .btn-cart[_ngcontent-%COMP%] {\n    padding: 7px 11px;\n    font-size: 0.75rem;\n    gap: 4px;\n  }\n  .btn-history[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 0.75rem;\n    border-radius: 8px;\n  }\n}\n@media (max-width: 430px) {\n  .pc-body[_ngcontent-%COMP%] {\n    padding: 12px 10px 10px;\n  }\n  .pc-name[_ngcontent-%COMP%] {\n    font-size: 0.84rem;\n  }\n  .eth-price[_ngcontent-%COMP%] {\n    font-size: 0.96rem;\n  }\n  .btn-cart[_ngcontent-%COMP%] {\n    padding: 6px 9px;\n    font-size: 0.73rem;\n    gap: 3px;\n  }\n  .btn-history[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    font-size: 0.72rem;\n    border-radius: 8px;\n  }\n  .pc-btns[_ngcontent-%COMP%] {\n    gap: 4px;\n  }\n}\n@media (max-width: 400px) {\n  .pc-img-wrap[_ngcontent-%COMP%] {\n    height: 135px;\n  }\n  .pc-genre[_ngcontent-%COMP%] {\n    font-size: 0.62rem;\n  }\n  .pc-name[_ngcontent-%COMP%] {\n    font-size: 0.82rem;\n    margin-bottom: 6px;\n  }\n  .pc-meta[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n  }\n  .pc-body[_ngcontent-%COMP%] {\n    padding: 11px 9px 9px;\n  }\n  .eth-price[_ngcontent-%COMP%] {\n    font-size: 0.92rem;\n  }\n  .btn-cart[_ngcontent-%COMP%] {\n    padding: 6px 8px;\n    font-size: 0.71rem;\n  }\n  .btn-history[_ngcontent-%COMP%] {\n    width: 26px;\n    height: 26px;\n  }\n  .pc-btns[_ngcontent-%COMP%] {\n    gap: 4px;\n  }\n}\n/*# sourceMappingURL=product-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductCardComponent, [{
    type: Component,
    args: [{ selector: "app-product-card", standalone: true, imports: [CommonModule, RouterModule, StarRatingComponent], template: `
    <div class="pc" [class.out-of-stock]="product.stock === 0">
      <div class="pc-img-wrap">
        <img [src]="product.image ? 'http://localhost:5050' + product.image : 'https://placehold.co/300x180/1e2235/4f6ef7?text=Game'"
          [alt]="product.name" class="pc-img"
          onerror="this.src='https://placehold.co/300x180/1e2235/4f6ef7?text=Game'" />
        <div class="pc-img-overlay"></div>
        <div class="pc-badges">
          <span class="badge b-hot" *ngIf="product.featured">HOT</span>
          <span class="badge b-new" *ngIf="isNew">NEW</span>
          <span class="badge b-out" *ngIf="product.stock === 0">SOLD</span>
        </div>
        <div class="pc-actions">
          <button class="pa-btn pa-btn-wish" (click)="onWishlist($event)" title="Wishlist">
            <i class="fas fa-heart"></i>
          </button>
          <button class="pa-btn" (click)="onQuickView($event)" title="Quick view">
            <i class="fas fa-eye"></i>
          </button>
        </div>
        <!-- Stock bar -->
        <div class="pc-stock-bar" *ngIf="product.stock > 0 && product.stock <= 10">
          <div class="stock-fill" [style.width.%]="product.stock * 10"></div>
        </div>
      </div>

      <div class="pc-body">
        <div class="pc-genre" *ngIf="categoryName">
          <i class="fas fa-tag pc-genre-icon"></i> {{ categoryName }}
        </div>
        <h3 class="pc-name">
          <a [routerLink]="['/products', product._id]">{{ product.name }}</a>
        </h3>
        <div class="pc-meta">
          <div class="pc-rating">
            <app-star-rating [rating]="product.rating"></app-star-rating>
            <span class="rv">({{ product.numReviews }})</span>
          </div>
        </div>
        <div class="pc-footer">
          <div class="pc-price">
            <span class="eth-price">\${{ product.price | number:'1.2-2' }}</span>
            <span class="usd-price" *ngIf="product.stock > 0">{{ product.stock }} left</span>
            <span class="usd-price out" *ngIf="product.stock === 0">Out of stock</span>
          </div>
          <div class="pc-btns">
            <button class="btn-history" [routerLink]="['/products', product._id]">
              <i class="fas fa-info-circle"></i>
            </button>
            <button class="btn-cart" (click)="onAddToCart($event)" [disabled]="product.stock === 0">
              <i class="fas fa-cart-shopping"></i>
              {{ product.stock === 0 ? 'Sold' : 'Add' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;83154c9784747004d95e9f4ec3cde6a97f8cbe812c359a75a092a8c6e58c80e7;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/shared/components/product-card/product-card.component.ts */\n:host {\n  display: block;\n  width: 100%;\n}\n.pc {\n  background: #1a1d30;\n  border-radius: 18px;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  transition:\n    transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1),\n    box-shadow 0.28s ease,\n    border-color 0.28s ease;\n  animation: cardEnter 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes cardEnter {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.pc:hover {\n  transform: translateY(-8px) scale(1.01);\n  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(79, 110, 247, 0.25);\n  border-color: rgba(79, 110, 247, 0.4);\n}\n.pc-img-wrap {\n  position: relative;\n  height: 185px;\n  overflow: hidden;\n}\n.pc-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.pc:hover .pc-img {\n  transform: scale(1.1);\n}\n.pc-img-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(26, 29, 48, 0.85) 0%,\n      rgba(26, 29, 48, 0.1) 50%,\n      transparent 100%);\n  pointer-events: none;\n}\n.pc-stock-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: rgba(255, 255, 255, 0.1);\n}\n.stock-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #ef4444);\n  transition: width 0.4s ease;\n}\n.pc-badges {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  display: flex;\n  gap: 5px;\n}\n.badge {\n  padding: 3px 9px;\n  border-radius: 50px;\n  font-size: 0.62rem;\n  font-weight: 800;\n  letter-spacing: 0.6px;\n  animation: badgeIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n@keyframes badgeIn {\n  from {\n    opacity: 0;\n    transform: scale(0) translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.b-hot {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);\n}\n.b-new {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(34, 197, 94, 0.4);\n}\n.b-out {\n  background: rgba(100, 100, 120, 0.85);\n  color: #ddd;\n}\n.pc-actions {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  opacity: 0;\n  transform: translateX(12px);\n  transition: opacity 0.28s ease, transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.pc:hover .pc-actions {\n  opacity: 1;\n  transform: translateX(0);\n}\n.pa-btn {\n  width: 32px;\n  height: 32px;\n  background: rgba(20, 22, 40, 0.8);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 50%;\n  color: #a0a4c0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  cursor: pointer;\n}\n.pa-btn:hover {\n  background: #4f6ef7;\n  color: #fff;\n  border-color: transparent;\n  transform: scale(1.18);\n  box-shadow: 0 4px 12px rgba(79, 110, 247, 0.45);\n}\n.pa-btn-wish:hover {\n  background: #ec4899;\n  box-shadow: 0 4px 12px rgba(236, 72, 153, 0.45);\n}\n.pa-btn i {\n  font-size: 0.8rem;\n}\n.pc-body {\n  padding: 22px 14px 14px;\n}\n.pc-genre {\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #5a5e7a;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  margin-bottom: 6px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pc-genre-icon {\n  color: #4f6ef7;\n  font-size: 0.6rem;\n}\n.pc-name {\n  font-size: 0.93rem;\n  font-weight: 700;\n  margin-bottom: 8px;\n  line-height: 1.35;\n}\n.pc-name a {\n  color: #e8ecff;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.pc-name a:hover {\n  color: #818cf8;\n}\n.pc-meta {\n  margin-bottom: 12px;\n}\n.pc-rating {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.rv {\n  font-size: 0.7rem;\n  color: #5a5e7a;\n}\n.pc-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.pc-price {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.eth-price {\n  font-size: 1.08rem;\n  font-weight: 800;\n  color: #818cf8;\n}\n.usd-price {\n  font-size: 0.72rem;\n  color: #5a5e7a;\n}\n.usd-price.out {\n  color: #f87171;\n}\n.pc-btns {\n  display: flex;\n  gap: 6px;\n}\n.btn-history {\n  width: 34px;\n  height: 34px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  color: #6b7280;\n  font-size: 0.82rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  cursor: pointer;\n}\n.btn-history:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #e0e4ff;\n  transform: scale(1.08);\n}\n.btn-cart {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  border: none;\n  border-radius: 10px;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 700;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  cursor: pointer;\n  box-shadow: 0 3px 10px rgba(79, 110, 247, 0.3);\n}\n.btn-cart:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(79, 110, 247, 0.5);\n}\n.btn-cart:active:not(:disabled) {\n  transform: scale(0.95);\n}\n.btn-cart:disabled {\n  background: #252840;\n  color: #4a4e6a;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.out-of-stock {\n  opacity: 0.55;\n}\n@media (hover: none) {\n  .pc-actions {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  .pc:hover {\n    transform: none;\n    box-shadow: none;\n    border-color: rgba(255, 255, 255, 0.07);\n  }\n  .pc:hover .pc-img {\n    transform: none;\n  }\n}\n@media (max-width: 580px) {\n  .pc-img-wrap {\n    height: 155px;\n  }\n  .pc-body {\n    padding: 14px 12px 12px;\n  }\n  .pc-name {\n    font-size: 0.86rem;\n  }\n  .eth-price {\n    font-size: 1rem;\n  }\n  .btn-cart {\n    padding: 7px 11px;\n    font-size: 0.75rem;\n    gap: 4px;\n  }\n  .btn-history {\n    width: 30px;\n    height: 30px;\n    font-size: 0.75rem;\n    border-radius: 8px;\n  }\n}\n@media (max-width: 430px) {\n  .pc-body {\n    padding: 12px 10px 10px;\n  }\n  .pc-name {\n    font-size: 0.84rem;\n  }\n  .eth-price {\n    font-size: 0.96rem;\n  }\n  .btn-cart {\n    padding: 6px 9px;\n    font-size: 0.73rem;\n    gap: 3px;\n  }\n  .btn-history {\n    width: 28px;\n    height: 28px;\n    font-size: 0.72rem;\n    border-radius: 8px;\n  }\n  .pc-btns {\n    gap: 4px;\n  }\n}\n@media (max-width: 400px) {\n  .pc-img-wrap {\n    height: 135px;\n  }\n  .pc-genre {\n    font-size: 0.62rem;\n  }\n  .pc-name {\n    font-size: 0.82rem;\n    margin-bottom: 6px;\n  }\n  .pc-meta {\n    margin-bottom: 8px;\n  }\n  .pc-body {\n    padding: 11px 9px 9px;\n  }\n  .eth-price {\n    font-size: 0.92rem;\n  }\n  .btn-cart {\n    padding: 6px 8px;\n    font-size: 0.71rem;\n  }\n  .btn-history {\n    width: 26px;\n    height: 26px;\n  }\n  .pc-btns {\n    gap: 4px;\n  }\n}\n/*# sourceMappingURL=product-card.component.css.map */\n"] }]
  }], null, { product: [{
    type: Input
  }], addToCart: [{
    type: Output
  }], addToWishlist: [{
    type: Output
  }], quickView: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent", filePath: "src/app/shared/components/product-card/product-card.component.ts", lineNumber: 227 });
})();

export {
  ProductCardComponent
};
//# sourceMappingURL=chunk-5HJHMR5C.js.map
