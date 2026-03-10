import {
  HttpClient,
  HttpParams,
  environment
} from "./chunk-QLMOGZJX.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IXUP4X5N.js";

// src/app/core/services/product.service.ts
var ProductService = class _ProductService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/products`;
  }
  getProducts(filter = {}) {
    let params = new HttpParams();
    Object.entries(filter).forEach(([key, value]) => {
      if (value !== void 0 && value !== null && value !== "") {
        params = params.set(key, value.toString());
      }
    });
    return this.http.get(this.apiUrl, { params });
  }
  getProduct(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getFeaturedProducts() {
    return this.http.get(`${this.apiUrl}/featured`);
  }
  createProduct(data) {
    return this.http.post(this.apiUrl, data);
  }
  updateProduct(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  deleteProduct(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  addReview(id, data) {
    return this.http.post(`${this.apiUrl}/${id}/reviews`, data);
  }
  static {
    this.\u0275fac = function ProductService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ProductService
};
//# sourceMappingURL=chunk-M7BLKAAD.js.map
