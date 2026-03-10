import {
  HttpClient,
  environment
} from "./chunk-QLMOGZJX.js";
import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IXUP4X5N.js";

// src/app/core/services/cart.service.ts
var CartService = class _CartService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/cart`;
    this.cartSubject = new BehaviorSubject(null);
    this.cart$ = this.cartSubject.asObservable();
  }
  get cartCount() {
    return this.cartSubject.value?.items?.length || 0;
  }
  getCart() {
    return this.http.get(this.apiUrl).pipe(tap((res) => {
      if (res.success)
        this.cartSubject.next(res.cart);
    }));
  }
  addToCart(productId, quantity = 1) {
    return this.http.post(`${this.apiUrl}/add`, { productId, quantity }).pipe(tap((res) => {
      if (res.success)
        this.cartSubject.next(res.cart);
    }));
  }
  updateCartItem(itemId, quantity) {
    return this.http.put(`${this.apiUrl}/item/${itemId}`, { quantity }).pipe(tap((res) => {
      if (res.success)
        this.cartSubject.next(res.cart);
    }));
  }
  removeFromCart(itemId) {
    return this.http.delete(`${this.apiUrl}/item/${itemId}`).pipe(tap((res) => {
      if (res.success)
        this.cartSubject.next(res.cart);
    }));
  }
  clearCart() {
    return this.http.delete(`${this.apiUrl}/clear`).pipe(tap(() => this.cartSubject.next(null)));
  }
  clearLocalCart() {
    this.cartSubject.next(null);
  }
  static {
    this.\u0275fac = function CartService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  CartService
};
//# sourceMappingURL=chunk-5ZAXXMJQ.js.map
