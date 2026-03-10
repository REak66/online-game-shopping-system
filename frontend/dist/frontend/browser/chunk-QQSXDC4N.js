import {
  HttpClient,
  environment
} from "./chunk-QLMOGZJX.js";
import {
  BehaviorSubject,
  Injectable,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IXUP4X5N.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/auth`;
    this.currentUserSubject = new BehaviorSubject(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        this.currentUserSubject.next(JSON.parse(stored));
      } catch {
      }
    }
  }
  get currentUser() {
    return this.currentUserSubject.value;
  }
  get isLoggedIn() {
    return !!this.currentUser;
  }
  get isAdmin() {
    return this.currentUser?.role === "admin";
  }
  get token() {
    return localStorage.getItem("token");
  }
  register(data) {
    return this.http.post(`${this.apiUrl}/register`, data).pipe(tap((res) => {
      if (res.success)
        this.setAuth(res);
    }));
  }
  login(data) {
    return this.http.post(`${this.apiUrl}/login`, data).pipe(tap((res) => {
      if (res.success)
        this.setAuth(res);
    }));
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.currentUserSubject.next(null);
  }
  getProfile() {
    return this.http.get(`${this.apiUrl}/profile`);
  }
  updateProfile(data) {
    return this.http.put(`${this.apiUrl}/profile`, data).pipe(tap((res) => {
      if (res.success) {
        const updated = __spreadValues(__spreadValues({}, this.currentUser), res.user);
        localStorage.setItem("user", JSON.stringify(updated));
        this.currentUserSubject.next(updated);
      }
    }));
  }
  changePassword(data) {
    return this.http.put(`${this.apiUrl}/change-password`, data);
  }
  uploadAvatar(file) {
    const formData = new FormData();
    formData.append("avatar", file);
    return this.http.post(`${this.apiUrl}/profile/avatar`, formData).pipe(tap((res) => {
      if (res.success) {
        const updated = __spreadProps(__spreadValues({}, this.currentUser), { avatar: res.avatar });
        localStorage.setItem("user", JSON.stringify(updated));
        this.currentUserSubject.next(updated);
      }
    }));
  }
  forgotPassword(email) {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email });
  }
  resetPassword(token, password) {
    return this.http.put(`${this.apiUrl}/reset-password/${token}`, { password });
  }
  setAuth(res) {
    localStorage.setItem("token", res.token);
    localStorage.setItem("user", JSON.stringify(res.user));
    this.currentUserSubject.next(res.user);
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-QQSXDC4N.js.map
