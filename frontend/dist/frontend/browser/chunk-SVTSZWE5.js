import {
  HttpClient,
  environment
} from "./chunk-QLMOGZJX.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IXUP4X5N.js";

// src/app/core/services/category.service.ts
var CategoryService = class _CategoryService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/categories`;
  }
  getCategories() {
    return this.http.get(this.apiUrl);
  }
  getCategory(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createCategory(data) {
    return this.http.post(this.apiUrl, data);
  }
  updateCategory(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  deleteCategory(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static {
    this.\u0275fac = function CategoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CategoryService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryService, factory: _CategoryService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  CategoryService
};
//# sourceMappingURL=chunk-SVTSZWE5.js.map
