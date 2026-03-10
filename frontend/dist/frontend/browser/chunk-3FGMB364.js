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

// src/app/core/services/admin.service.ts
var AdminService = class _AdminService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/admin`;
  }
  getDashboardStats() {
    return this.http.get(`${this.apiUrl}/dashboard`);
  }
  getUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }
  updateUser(id, data) {
    return this.http.put(`${this.apiUrl}/users/${id}`, data);
  }
  deleteUser(id) {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }
  static {
    this.\u0275fac = function AdminService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminService, factory: _AdminService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AdminService
};
//# sourceMappingURL=chunk-3FGMB364.js.map
