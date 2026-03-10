import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-QGP2PKSJ.js";
import {
  MessageService
} from "./chunk-JLEF55SF.js";
import {
  AuthService
} from "./chunk-QQSXDC4N.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-JDYM2Z3R.js";
import "./chunk-QLMOGZJX.js";
import {
  CommonModule,
  Component,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IXUP4X5N.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Signing in...");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  constructor(authService, router, msgService) {
    this.authService = authService;
    this.router = router;
    this.msgService = msgService;
    this.email = "";
    this.password = "";
    this.loading = false;
    this.showPassword = false;
  }
  onSubmit() {
    if (!this.email || !this.password) {
      this.msgService.error("Please fill in all fields");
      return;
    }
    this.loading = true;
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: () => {
        this.loading = false;
        const returnUrl = new URLSearchParams(window.location.search).get("returnUrl") || "/";
        this.router.navigateByUrl(returnUrl);
      },
      error: (err) => {
        this.loading = false;
        this.msgService.error(err.error?.message || "Login failed");
      }
    });
  }
  loginDemo(role) {
    this.email = role === "admin" ? "admin@demo.com" : "customer@demo.com";
    this.password = "password123";
    this.onSubmit();
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 41, vars: 7, consts: [["loginForm", "ngForm"], [1, "auth-page"], [1, "auth-container"], [1, "auth-card"], [1, "auth-header"], [3, "ngSubmit"], [1, "form-group"], ["type", "email", "name", "email", "required", "", "placeholder", "you@example.com", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "input-with-icon"], ["name", "password", "required", "", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "toggle-pw", 3, "click"], [1, "forgot-link"], ["routerLink", "/auth/forgot-password"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [4, "ngIf"], [1, "auth-divider"], [1, "demo-accounts"], [1, "demo-label"], [1, "demo-btn", 3, "click"], [1, "auth-footer"], ["routerLink", "/auth/register"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h1");
        \u0275\u0275text(5, "Welcome Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Sign in to your account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "form", 5, 0);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275elementStart(10, "div", 6)(11, "label");
        \u0275\u0275text(12, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 6)(15, "label");
        \u0275\u0275text(16, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 8)(18, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 10);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.showPassword = !ctx.showPassword);
        });
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 11)(22, "a", 12);
        \u0275\u0275text(23, "Forgot password?");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "button", 13);
        \u0275\u0275template(25, LoginComponent_span_25_Template, 2, 0, "span", 14)(26, LoginComponent_span_26_Template, 2, 0, "span", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 15)(28, "span");
        \u0275\u0275text(29, "or continue with");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 16)(31, "p", 17);
        \u0275\u0275text(32, "Demo accounts:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 18);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_33_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.loginDemo("customer"));
        });
        \u0275\u0275text(34, "\u{1F464} Customer Demo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 18);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.loginDemo("admin"));
        });
        \u0275\u0275text(36, "\u2699\uFE0F Admin Demo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "p", 19);
        \u0275\u0275text(38, " Don't have an account? ");
        \u0275\u0275elementStart(39, "a", 20);
        \u0275\u0275text(40, "Sign up");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(5);
        \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.showPassword ? "\u{1F648}" : "\u{1F441}\uFE0F", " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ['\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--bg-primary, #0f1123);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.auth-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  animation: _ngcontent-%COMP%_authPageIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_authPageIn {\n  from {\n    opacity: 0;\n    transform: translateY(30px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border-radius: 20px;\n  padding: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #e8eaf6;\n  margin-bottom: 8px;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 0.9rem;\n  animation: _ngcontent-%COMP%_alertIn 0.3s ease both;\n}\n@keyframes _ngcontent-%COMP%_alertIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  animation: _ngcontent-%COMP%_fieldIn 0.4s ease both;\n}\n.form-group[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.form-group[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.15s;\n}\n.form-group[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.2s;\n}\n@keyframes _ngcontent-%COMP%_fieldIn {\n  from {\n    opacity: 0;\n    transform: translateX(-12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #c9cbdf;\n  font-size: 0.9rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: border-color 0.25s, box-shadow 0.25s;\n  box-sizing: border-box;\n  background: rgba(255, 255, 255, 0.05);\n  color: #e8eaf6;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #4f6ef7;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.18);\n}\n.input-with-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-with-icon[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 48px;\n}\n.toggle-pw[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #9ca3af;\n  transition: color 0.2s;\n}\n.toggle-pw[_ngcontent-%COMP%]:hover {\n  color: #e0e4ff;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 20px;\n}\n.forgot-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a5b4fc;\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition: opacity 0.2s;\n}\n.forgot-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 4px 18px rgba(79, 110, 247, 0.35);\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(79, 110, 247, 0.5);\n}\n.btn-submit[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.97);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.auth-divider[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 24px 0;\n  position: relative;\n  color: #9ca3af;\n  font-size: 0.85rem;\n}\n.auth-divider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.08);\n}\n.auth-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #1e2235;\n  padding: 0 12px;\n  position: relative;\n}\n.demo-accounts[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.demo-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #9ca3af;\n  margin-bottom: 8px;\n  text-align: center;\n}\n.demo-accounts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.demo-btn[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.04);\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  color: #c9cbdf;\n}\n.demo-btn[_ngcontent-%COMP%]:hover {\n  border-color: #4f6ef7;\n  color: #a5b4fc;\n  transform: translateY(-1px);\n  background: rgba(79, 110, 247, 0.06);\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9ca3af;\n  font-size: 0.9rem;\n  margin-top: 20px;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a5b4fc;\n  font-weight: 600;\n  text-decoration: none;\n}\n@media (max-width: 480px) {\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 28px 20px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `
    <div class="auth-page">
      <div class="auth-container">
        <div class="auth-card">
          <div class="auth-header">
            <h1>Welcome Back</h1>
            <p>Sign in to your account</p>
          </div>

          <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
            <div class="form-group">
              <label>Email</label>
              <input type="email" [(ngModel)]="email" name="email" required
                placeholder="you@example.com" class="form-control" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <div class="input-with-icon">
                <input [type]="showPassword ? 'text' : 'password'"
                  [(ngModel)]="password" name="password" required
                  placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" class="form-control" />
                <button type="button" class="toggle-pw" (click)="showPassword = !showPassword">
                  {{ showPassword ? '\u{1F648}' : '\u{1F441}\uFE0F' }}
                </button>
              </div>
            </div>
            <div class="forgot-link">
              <a routerLink="/auth/forgot-password">Forgot password?</a>
            </div>
            <button type="submit" class="btn-submit" [disabled]="loading">
              <span *ngIf="loading">Signing in...</span>
              <span *ngIf="!loading">Sign In</span>
            </button>
          </form>

          <div class="auth-divider"><span>or continue with</span></div>

          <div class="demo-accounts">
            <p class="demo-label">Demo accounts:</p>
            <button class="demo-btn" (click)="loginDemo('customer')">\u{1F464} Customer Demo</button>
            <button class="demo-btn" (click)="loginDemo('admin')">\u2699\uFE0F Admin Demo</button>
          </div>

          <p class="auth-footer">
            Don't have an account? <a routerLink="/auth/register">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:scss;1f29e424f959b2a9acd12124681415139ef57ca3cd049e1b3f952c353e149bb0;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/features/auth/login/login.component.ts */\n.auth-page {\n  min-height: 100vh;\n  background: var(--bg-primary, #0f1123);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.auth-container {\n  width: 100%;\n  max-width: 440px;\n  animation: authPageIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes authPageIn {\n  from {\n    opacity: 0;\n    transform: translateY(30px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.auth-card {\n  background: #1e2235;\n  border-radius: 20px;\n  padding: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);\n}\n.auth-header {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.auth-header h1 {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #e8eaf6;\n  margin-bottom: 8px;\n}\n.auth-header p {\n  color: #9ca3af;\n}\n.alert {\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 0.9rem;\n  animation: alertIn 0.3s ease both;\n}\n@keyframes alertIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.alert-error {\n  background: rgba(220, 38, 38, 0.1);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.form-group {\n  margin-bottom: 20px;\n  animation: fieldIn 0.4s ease both;\n}\n.form-group:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.form-group:nth-child(2) {\n  animation-delay: 0.15s;\n}\n.form-group:nth-child(3) {\n  animation-delay: 0.2s;\n}\n@keyframes fieldIn {\n  from {\n    opacity: 0;\n    transform: translateX(-12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #c9cbdf;\n  font-size: 0.9rem;\n}\n.form-control {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: border-color 0.25s, box-shadow 0.25s;\n  box-sizing: border-box;\n  background: rgba(255, 255, 255, 0.05);\n  color: #e8eaf6;\n}\n.form-control:focus {\n  border-color: #4f6ef7;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.18);\n}\n.input-with-icon {\n  position: relative;\n}\n.input-with-icon .form-control {\n  padding-right: 48px;\n}\n.toggle-pw {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #9ca3af;\n  transition: color 0.2s;\n}\n.toggle-pw:hover {\n  color: #e0e4ff;\n}\n.forgot-link {\n  text-align: right;\n  margin-bottom: 20px;\n}\n.forgot-link a {\n  color: #a5b4fc;\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition: opacity 0.2s;\n}\n.forgot-link a:hover {\n  opacity: 0.75;\n}\n.btn-submit {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 4px 18px rgba(79, 110, 247, 0.35);\n}\n.btn-submit:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(79, 110, 247, 0.5);\n}\n.btn-submit:active:not(:disabled) {\n  transform: scale(0.97);\n}\n.btn-submit:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.auth-divider {\n  text-align: center;\n  margin: 24px 0;\n  position: relative;\n  color: #9ca3af;\n  font-size: 0.85rem;\n}\n.auth-divider::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.08);\n}\n.auth-divider span {\n  background: #1e2235;\n  padding: 0 12px;\n  position: relative;\n}\n.demo-accounts {\n  margin-bottom: 20px;\n}\n.demo-label {\n  font-size: 0.8rem;\n  color: #9ca3af;\n  margin-bottom: 8px;\n  text-align: center;\n}\n.demo-accounts {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.demo-btn {\n  padding: 10px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.04);\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  color: #c9cbdf;\n}\n.demo-btn:hover {\n  border-color: #4f6ef7;\n  color: #a5b4fc;\n  transform: translateY(-1px);\n  background: rgba(79, 110, 247, 0.06);\n}\n.auth-footer {\n  text-align: center;\n  color: #9ca3af;\n  font-size: 0.9rem;\n  margin-top: 20px;\n}\n.auth-footer a {\n  color: #a5b4fc;\n  font-weight: 600;\n  text-decoration: none;\n}\n@media (max-width: 480px) {\n  .auth-card {\n    padding: 28px 20px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 170 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-JV2HTEGR.js.map
