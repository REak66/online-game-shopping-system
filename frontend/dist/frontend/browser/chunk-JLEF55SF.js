import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-IXUP4X5N.js";

// src/app/shared/services/message.service.ts
var MessageService = class _MessageService {
  constructor() {
    this._counter = 0;
    this._messages = new BehaviorSubject([]);
    this.messages$ = this._messages.asObservable();
  }
  show(type, text, duration = 3e3) {
    const id = ++this._counter;
    const item = { id, type, text, duration };
    this._messages.next([...this._messages.value, item]);
    if (duration > 0) {
      setTimeout(() => this.dismiss(id), duration);
    }
    return id;
  }
  success(text, duration = 3e3) {
    return this.show("success", text, duration);
  }
  error(text, duration = 4e3) {
    return this.show("error", text, duration);
  }
  warning(text, duration = 3500) {
    return this.show("warning", text, duration);
  }
  info(text, duration = 3e3) {
    return this.show("info", text, duration);
  }
  loading(text, duration = 0) {
    return this.show("loading", text, duration);
  }
  dismiss(id) {
    this._messages.next(this._messages.value.filter((m) => m.id !== id));
  }
  static {
    this.\u0275fac = function MessageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MessageService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MessageService, factory: _MessageService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  MessageService
};
//# sourceMappingURL=chunk-JLEF55SF.js.map
