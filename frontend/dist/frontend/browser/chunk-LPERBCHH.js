import {
  HttpClient,
  environment
} from "./chunk-QLMOGZJX.js";
import {
  BehaviorSubject,
  Injectable,
  __spreadValues,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IXUP4X5N.js";

// src/app/core/services/wishlist.service.ts
var WishlistService = class _WishlistService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/wishlist`;
    this.wishlistSubject = new BehaviorSubject(null);
    this.wishlist$ = this.wishlistSubject.asObservable();
  }
  getWishlist() {
    return this.http.get(this.apiUrl).pipe(tap((res) => {
      if (res.success)
        this.wishlistSubject.next(res.wishlist);
    }));
  }
  addToWishlist(productId) {
    return this.http.post(`${this.apiUrl}/add`, { productId }).pipe(tap((res) => {
      if (res.success)
        this.wishlistSubject.next(res.wishlist);
    }));
  }
  removeFromWishlist(productId) {
    return this.http.delete(`${this.apiUrl}/${productId}`).pipe(tap(() => {
      const current = this.wishlistSubject.value;
      if (current) {
        current.products = current.products.filter((p) => p._id !== productId);
        this.wishlistSubject.next(__spreadValues({}, current));
      }
    }));
  }
  isInWishlist(productId) {
    return this.wishlistSubject.value?.products?.some((p) => p._id === productId) || false;
  }
  static {
    this.\u0275fac = function WishlistService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WishlistService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WishlistService, factory: _WishlistService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishlistService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  WishlistService
};
//# sourceMappingURL=chunk-LPERBCHH.js.map
