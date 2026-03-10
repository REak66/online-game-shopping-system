import {
  WishlistService
} from "./chunk-LPERBCHH.js";
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

// src/app/features/wishlist/wishlist.component.ts
var _c0 = (a0) => ["/products", a0];
function WishlistComponent_app_spin_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spin", 6);
  }
}
function WishlistComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "app-skeleton", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("count", 6)("active", true);
  }
}
function WishlistComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275element(2, "img", 12);
    \u0275\u0275elementStart(3, "button", 13);
    \u0275\u0275listener("click", function WishlistComponent_div_6_div_1_Template_button_click_3_listener() {
      const product_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeFromWishlist(product_r2._id));
    });
    \u0275\u0275element(4, "i", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 15)(6, "h3")(7, "a", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 17)(10, "span", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 19);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 20)(16, "span", 21);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 22);
    \u0275\u0275listener("click", function WishlistComponent_div_6_div_1_Template_button_click_19_listener() {
      const product_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addToCart(product_r2));
    });
    \u0275\u0275element(20, "i", 23);
    \u0275\u0275text(21, " Add to Cart");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", product_r2.image ? "http://localhost:5050" + product_r2.image : "https://via.placeholder.com/300x200?text=No+Image", \u0275\u0275sanitizeUrl)("alt", product_r2.name);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, product_r2._id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getStars(product_r2.rating));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 7, product_r2.rating, "1.1-1"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(18, 10, product_r2.price, "1.2-2"), "");
  }
}
function WishlistComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, WishlistComponent_div_6_div_1_Template, 22, 15, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.products);
  }
}
function WishlistComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275element(2, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Your wishlist is empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Save your favorite products for later!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 27);
    \u0275\u0275text(8, "Browse Products");
    \u0275\u0275elementEnd()();
  }
}
var WishlistComponent = class _WishlistComponent {
  constructor(wishlistService, cartService, authService, router, msgService) {
    this.wishlistService = wishlistService;
    this.cartService = cartService;
    this.authService = authService;
    this.router = router;
    this.msgService = msgService;
    this.products = [];
    this.loading = true;
  }
  ngOnInit() {
    this.wishlistService.getWishlist().subscribe({
      next: (res) => {
        this.products = res.wishlist?.products || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
    this.wishlistService.wishlist$.subscribe((w) => {
      if (w)
        this.products = w.products || [];
    });
  }
  getStars(rating) {
    return "\u2605".repeat(Math.round(rating)) + "\u2606".repeat(5 - Math.round(rating));
  }
  removeFromWishlist(productId) {
    this.wishlistService.removeFromWishlist(productId).subscribe({
      next: () => this.msgService.success("Removed from wishlist")
    });
  }
  addToCart(product) {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(["/auth/login"]);
      return;
    }
    this.cartService.addToCart(product._id).subscribe({
      next: () => this.msgService.success("Added to cart!"),
      error: (err) => this.msgService.error(err.error?.message || "Failed to add to cart")
    });
  }
  static {
    this.\u0275fac = function WishlistComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WishlistComponent)(\u0275\u0275directiveInject(WishlistService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WishlistComponent, selectors: [["app-wishlist"]], decls: 8, vars: 4, consts: [[1, "page-container"], [1, "page-title"], [1, "fas", "fa-heart", 2, "color", "#ec4899", "font-size", "1.6rem"], ["size", "lg", "tip", "Loading wishlist...", 4, "ngIf"], ["class", "wishlist-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["size", "lg", "tip", "Loading wishlist..."], [1, "wishlist-grid"], ["type", "product-card", 3, "count", "active"], ["class", "wishlist-card", 4, "ngFor", "ngForOf"], [1, "wishlist-card"], [1, "card-image"], ["onerror", "this.src='https://via.placeholder.com/300x200?text=No+Image'", 3, "src", "alt"], ["title", "Remove from wishlist", 1, "remove-btn", 3, "click"], [1, "fas", "fa-xmark"], [1, "card-info"], [3, "routerLink"], [1, "rating"], [1, "stars"], [1, "rating-val"], [1, "price-row"], [1, "price"], [1, "btn-cart", 3, "click"], [1, "fas", "fa-cart-shopping"], [1, "empty-state"], [1, "empty-icon"], [1, "fas", "fa-heart"], ["routerLink", "/products", 1, "btn-shop"]], template: function WishlistComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "My Wishlist ");
        \u0275\u0275element(3, "i", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, WishlistComponent_app_spin_4_Template, 1, 0, "app-spin", 3)(5, WishlistComponent_div_5_Template, 2, 2, "div", 4)(6, WishlistComponent_div_6_Template, 2, 1, "div", 4)(7, WishlistComponent_div_7_Template, 9, 0, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.products.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.products.length === 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterModule, RouterLink, SpinComponent, SkeletonComponent], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 40px 20px;\n  animation: _ngcontent-%COMP%_pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 32px;\n  color: #e8eaf6;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid rgba(255, 255, 255, 0.1);\n  border-top-color: #4f6ef7;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.wishlist-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 24px;\n}\n.wishlist-card[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border-radius: 16px;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  transition:\n    transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1),\n    border-color 0.25s,\n    box-shadow 0.25s;\n  animation: _ngcontent-%COMP%_cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.wishlist-card[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.05s;\n}\n.wishlist-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.wishlist-card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.15s;\n}\n.wishlist-card[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.2s;\n}\n.wishlist-card[_ngcontent-%COMP%]:nth-child(n+5) {\n  animation-delay: 0.25s;\n}\n@keyframes _ngcontent-%COMP%_cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.wishlist-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px) scale(1.01);\n  border-color: rgba(79, 110, 247, 0.35);\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);\n}\n.card-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n}\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.wishlist-card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.07);\n}\n.remove-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 32px;\n  height: 32px;\n  background: rgba(0, 0, 0, 0.6);\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  color: #f87171;\n  font-weight: 700;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.remove-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.85);\n  color: white;\n  transform: scale(1.15);\n}\n.card-info[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.card-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.card-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e8eaf6;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.card-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #a5b4fc;\n}\n.rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 12px;\n}\n.stars[_ngcontent-%COMP%] {\n  color: #F59E0B;\n}\n.rating-val[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #9ca3af;\n}\n.price-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.price[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #e8eaf6;\n}\n.btn-cart[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  padding: 8px 14px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.85rem;\n  font-weight: 600;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.btn-cart[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(79, 110, 247, 0.4);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n  animation: _ngcontent-%COMP%_pageIn 0.5s ease both;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 16px;\n  color: #ec4899;\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n  color: #e8eaf6;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  margin-bottom: 24px;\n}\n.btn-shop[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 12px 28px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: 600;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.btn-shop[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(79, 110, 247, 0.4);\n}\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: #1e2235;\n  color: #e8eaf6;\n  padding: 14px 24px;\n  border-radius: 12px;\n  z-index: 9999;\n  font-weight: 600;\n  border: 1px solid rgba(79, 110, 247, 0.35);\n  animation: _ngcontent-%COMP%_toastIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n@keyframes _ngcontent-%COMP%_toastIn {\n  from {\n    transform: translateX(80px) scale(0.9);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0) scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 900px) {\n  .page-container[_ngcontent-%COMP%] {\n    padding: 28px 16px 80px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n}\n@media (max-width: 768px) {\n  .page-container[_ngcontent-%COMP%] {\n    padding: 20px 14px 80px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n    margin-bottom: 20px;\n  }\n  .wishlist-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .card-image[_ngcontent-%COMP%] {\n    height: 155px;\n  }\n  .toast[_ngcontent-%COMP%] {\n    bottom: 84px;\n    right: 16px;\n    left: 16px;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .wishlist-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n  .card-image[_ngcontent-%COMP%] {\n    height: 130px;\n  }\n  .card-info[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .card-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.88rem;\n  }\n  .price[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .btn-cart[_ngcontent-%COMP%] {\n    padding: 7px 10px;\n    font-size: 0.78rem;\n  }\n}\n@media (max-width: 360px) {\n  .wishlist-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=wishlist.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishlistComponent, [{
    type: Component,
    args: [{ selector: "app-wishlist", standalone: true, imports: [CommonModule, RouterModule, SpinComponent, SkeletonComponent], template: `
    <div class="page-container">
      <h1 class="page-title">My Wishlist <i class="fas fa-heart" style="color:#ec4899;font-size:1.6rem"></i></h1>

      <app-spin *ngIf="loading" size="lg" tip="Loading wishlist..."></app-spin>

      <div class="wishlist-grid" *ngIf="loading">
        <app-skeleton type="product-card" [count]="6" [active]="true"></app-skeleton>
      </div>

      <div class="wishlist-grid" *ngIf="!loading && products.length > 0">
        <div class="wishlist-card" *ngFor="let product of products">
          <div class="card-image">
            <img [src]="product.image ? 'http://localhost:5050' + product.image : 'https://via.placeholder.com/300x200?text=No+Image'"
              [alt]="product.name"
              onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'" />
            <button class="remove-btn" (click)="removeFromWishlist(product._id)" title="Remove from wishlist">
              <i class="fas fa-xmark"></i>
            </button>
          </div>
          <div class="card-info">
            <h3><a [routerLink]="['/products', product._id]">{{ product.name }}</a></h3>
            <div class="rating">
              <span class="stars">{{ getStars(product.rating) }}</span>
              <span class="rating-val">{{ product.rating | number:'1.1-1' }}</span>
            </div>
            <div class="price-row">
              <span class="price">\${{ product.price | number:'1.2-2' }}</span>
              <button class="btn-cart" (click)="addToCart(product)"><i class="fas fa-cart-shopping"></i> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <div class="empty-state" *ngIf="!loading && products.length === 0">
        <div class="empty-icon"><i class="fas fa-heart"></i></div>
        <h2>Your wishlist is empty</h2>
        <p>Save your favorite products for later!</p>
        <a routerLink="/products" class="btn-shop">Browse Products</a>
      </div>

    </div>
  `, styles: ["/* angular:styles/component:scss;85a1a604504bf2300f9bb1a7783e90ab8d2a1fa17cd9e898b6c31ff39e6b7d80;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/features/wishlist/wishlist.component.ts */\n.page-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 40px 20px;\n  animation: pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.page-title {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 32px;\n  color: #e8eaf6;\n}\n.loading {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid rgba(255, 255, 255, 0.1);\n  border-top-color: #4f6ef7;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.wishlist-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 24px;\n}\n.wishlist-card {\n  background: #1e2235;\n  border-radius: 16px;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  transition:\n    transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1),\n    border-color 0.25s,\n    box-shadow 0.25s;\n  animation: cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.wishlist-card:nth-child(1) {\n  animation-delay: 0.05s;\n}\n.wishlist-card:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.wishlist-card:nth-child(3) {\n  animation-delay: 0.15s;\n}\n.wishlist-card:nth-child(4) {\n  animation-delay: 0.2s;\n}\n.wishlist-card:nth-child(n+5) {\n  animation-delay: 0.25s;\n}\n@keyframes cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.wishlist-card:hover {\n  transform: translateY(-6px) scale(1.01);\n  border-color: rgba(79, 110, 247, 0.35);\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);\n}\n.card-image {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n}\n.card-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.wishlist-card:hover .card-image img {\n  transform: scale(1.07);\n}\n.remove-btn {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 32px;\n  height: 32px;\n  background: rgba(0, 0, 0, 0.6);\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  color: #f87171;\n  font-weight: 700;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.remove-btn:hover {\n  background: rgba(239, 68, 68, 0.85);\n  color: white;\n  transform: scale(1.15);\n}\n.card-info {\n  padding: 16px;\n}\n.card-info h3 {\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.card-info h3 a {\n  color: #e8eaf6;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.card-info h3 a:hover {\n  color: #a5b4fc;\n}\n.rating {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 12px;\n}\n.stars {\n  color: #F59E0B;\n}\n.rating-val {\n  font-size: 0.85rem;\n  color: #9ca3af;\n}\n.price-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.price {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #e8eaf6;\n}\n.btn-cart {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  padding: 8px 14px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.85rem;\n  font-weight: 600;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.btn-cart:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(79, 110, 247, 0.4);\n}\n.empty-state {\n  text-align: center;\n  padding: 80px 20px;\n  animation: pageIn 0.5s ease both;\n}\n.empty-icon {\n  font-size: 4rem;\n  margin-bottom: 16px;\n  color: #ec4899;\n  animation: float 3s ease-in-out infinite;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.empty-state h2 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n  color: #e8eaf6;\n}\n.empty-state p {\n  color: #9ca3af;\n  margin-bottom: 24px;\n}\n.btn-shop {\n  display: inline-block;\n  padding: 12px 28px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: 600;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.btn-shop:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(79, 110, 247, 0.4);\n}\n.toast {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: #1e2235;\n  color: #e8eaf6;\n  padding: 14px 24px;\n  border-radius: 12px;\n  z-index: 9999;\n  font-weight: 600;\n  border: 1px solid rgba(79, 110, 247, 0.35);\n  animation: toastIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n@keyframes toastIn {\n  from {\n    transform: translateX(80px) scale(0.9);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0) scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 900px) {\n  .page-container {\n    padding: 28px 16px 80px;\n  }\n  .page-title {\n    font-size: 1.6rem;\n  }\n}\n@media (max-width: 768px) {\n  .page-container {\n    padding: 20px 14px 80px;\n  }\n  .page-title {\n    font-size: 1.4rem;\n    margin-bottom: 20px;\n  }\n  .wishlist-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .card-image {\n    height: 155px;\n  }\n  .toast {\n    bottom: 84px;\n    right: 16px;\n    left: 16px;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .wishlist-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n  .card-image {\n    height: 130px;\n  }\n  .card-info {\n    padding: 12px;\n  }\n  .card-info h3 {\n    font-size: 0.88rem;\n  }\n  .price {\n    font-size: 1rem;\n  }\n  .btn-cart {\n    padding: 7px 10px;\n    font-size: 0.78rem;\n  }\n}\n@media (max-width: 360px) {\n  .wishlist-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=wishlist.component.css.map */\n"] }]
  }], () => [{ type: WishlistService }, { type: CartService }, { type: AuthService }, { type: Router }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WishlistComponent, { className: "WishlistComponent", filePath: "src/app/features/wishlist/wishlist.component.ts", lineNumber: 162 });
})();
export {
  WishlistComponent
};
//# sourceMappingURL=chunk-V5CTT4UJ.js.map
