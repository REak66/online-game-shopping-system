import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-IXUP4X5N.js";

// src/app/shared/services/notification.service.ts
var NotificationService = class _NotificationService {
  constructor() {
    this._counter = 0;
    this._items = new BehaviorSubject([]);
    this.items$ = this._items.asObservable();
  }
  show(type, title, description, duration = 4500) {
    const id = ++this._counter;
    this._items.next([...this._items.value, { id, type, title, description, duration }]);
    if (duration > 0) {
      setTimeout(() => this.dismiss(id), duration);
    }
    return id;
  }
  success(title, description, duration = 4500) {
    return this.show("success", title, description, duration);
  }
  error(title, description, duration = 6e3) {
    return this.show("error", title, description, duration);
  }
  warning(title, description, duration = 5e3) {
    return this.show("warning", title, description, duration);
  }
  info(title, description, duration = 4500) {
    return this.show("info", title, description, duration);
  }
  dismiss(id) {
    this._items.next(this._items.value.filter((n) => n.id !== id));
  }
  static {
    this.\u0275fac = function NotificationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotificationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  NotificationService
};
//# sourceMappingURL=chunk-A4HOYT66.js.map
