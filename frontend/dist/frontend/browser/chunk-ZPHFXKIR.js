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

// src/app/core/services/order.service.ts
var OrderService = class _OrderService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/orders`;
  }
  createOrder(data) {
    return this.http.post(this.apiUrl, data);
  }
  getMyOrders() {
    return this.http.get(`${this.apiUrl}/my-orders`);
  }
  getOrder(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  cancelOrder(id) {
    return this.http.put(`${this.apiUrl}/${id}/cancel`, {});
  }
  payOrder(id) {
    return this.http.put(`${this.apiUrl}/${id}/pay`, {});
  }
  getAllOrders(params = {}) {
    let httpParams = new HttpParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value)
        httpParams = httpParams.set(key, value);
    });
    return this.http.get(this.apiUrl, { params: httpParams });
  }
  updateOrderStatus(id, status) {
    return this.http.put(`${this.apiUrl}/${id}/status`, { status });
  }
  static {
    this.\u0275fac = function OrderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  OrderService
};
//# sourceMappingURL=chunk-ZPHFXKIR.js.map
