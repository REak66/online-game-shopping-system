import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-IXUP4X5N.js";

// src/app/shared/services/confirm.service.ts
var ConfirmService = class _ConfirmService {
  constructor() {
    this._state = new BehaviorSubject({
      visible: false,
      config: {},
      resolve: null
    });
    this.state$ = this._state.asObservable();
  }
  /**
   * Show a confirmation bubble. Returns a Promise<boolean> —
   * true when the user clicks OK, false when cancelled.
   */
  confirm(config = {}) {
    return new Promise((resolve) => {
      this._state.next({ visible: true, config, resolve });
    });
  }
  /** Called internally by the host component */
  _resolve(value) {
    const state = this._state.value;
    if (state.resolve)
      state.resolve(value);
    this._state.next({ visible: false, config: {}, resolve: null });
  }
  static {
    this.\u0275fac = function ConfirmService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfirmService, factory: _ConfirmService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ConfirmService
};
//# sourceMappingURL=chunk-YC4BKLUZ.js.map
