import {
  BehaviorSubject,
  Injectable,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-IXUP4X5N.js";

// src/app/shared/services/modal.service.ts
var ModalService = class _ModalService {
  constructor() {
    this._state = new BehaviorSubject({
      open: false,
      title: "",
      width: "520px",
      closable: true,
      content: null,
      footer: void 0,
      context: null
    });
    this.state$ = this._state.asObservable();
  }
  open(content, config = {}, context = {}) {
    this._state.next({
      open: true,
      title: config.title ?? "",
      width: config.width ?? "520px",
      closable: config.closable !== false,
      content,
      footer: config.footer,
      context
    });
  }
  close() {
    this._state.next(__spreadProps(__spreadValues({}, this._state.value), { open: false }));
  }
  static {
    this.\u0275fac = function ModalService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ModalService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ModalService, factory: _ModalService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ModalService
};
//# sourceMappingURL=chunk-K5OANHGI.js.map
