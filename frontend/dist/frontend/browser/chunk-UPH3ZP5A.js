import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinLengthValidator,
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

// src/app/features/auth/register/register.component.ts
function RegisterComponent_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Creating account...");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Create Account");
    \u0275\u0275elementEnd();
  }
}
var RegisterComponent = class _RegisterComponent {
  constructor(authService, router, msgService) {
    this.authService = authService;
    this.router = router;
    this.msgService = msgService;
    this.name = "";
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
    this.agreed = false;
    this.loading = false;
    this.showPassword = false;
  }
  onSubmit() {
    if (!this.name || !this.email || !this.password) {
      this.msgService.error("Please fill in all fields");
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.msgService.error("Passwords do not match");
      return;
    }
    if (this.password.length < 6) {
      this.msgService.error("Password must be at least 6 characters");
      return;
    }
    this.loading = true;
    this.authService.register({ name: this.name, email: this.email, password: this.password }).subscribe({
      next: () => {
        this.loading = false;
        this.msgService.success("Account created successfully!");
        setTimeout(() => this.router.navigate(["/"]), 1500);
      },
      error: (err) => {
        this.loading = false;
        this.msgService.error(err.error?.message || "Registration failed");
      }
    });
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 45, vars: 11, consts: [["registerForm", "ngForm"], [1, "auth-page"], [1, "auth-container"], [1, "auth-card"], [1, "auth-header"], [3, "ngSubmit"], [1, "form-group"], ["type", "text", "name", "name", "required", "", "placeholder", "John Doe", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "required", "", "placeholder", "you@example.com", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "input-with-icon"], ["name", "password", "required", "", "minlength", "6", "placeholder", "At least 6 characters", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "toggle-pw", 3, "click"], ["name", "confirmPassword", "required", "", "placeholder", "Repeat your password", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], [1, "terms"], ["type", "checkbox", "name", "agreed", "id", "terms", 3, "ngModelChange", "ngModel"], ["for", "terms"], ["href", "#"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [4, "ngIf"], [1, "auth-footer"], ["routerLink", "/auth/login"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h1");
        \u0275\u0275text(5, "Create Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Join ShopHub today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "form", 5, 0);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275elementStart(10, "div", 6)(11, "label");
        \u0275\u0275text(12, "Full Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 6)(15, "label");
        \u0275\u0275text(16, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 6)(19, "label");
        \u0275\u0275text(20, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 9)(22, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_22_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 11);
        \u0275\u0275listener("click", function RegisterComponent_Template_button_click_23_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.showPassword = !ctx.showPassword);
        });
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "div", 6)(26, "label");
        \u0275\u0275text(27, "Confirm Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_28_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 13)(30, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_30_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.agreed, $event) || (ctx.agreed = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "label", 15);
        \u0275\u0275text(32, "I agree to the ");
        \u0275\u0275elementStart(33, "a", 16);
        \u0275\u0275text(34, "Terms of Service");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " and ");
        \u0275\u0275elementStart(36, "a", 16);
        \u0275\u0275text(37, "Privacy Policy");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "button", 17);
        \u0275\u0275template(39, RegisterComponent_span_39_Template, 2, 0, "span", 18)(40, RegisterComponent_span_40_Template, 2, 0, "span", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "p", 19);
        \u0275\u0275text(42, " Already have an account? ");
        \u0275\u0275elementStart(43, "a", 20);
        \u0275\u0275text(44, "Sign in");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.name);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(5);
        \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.showPassword ? "\u{1F648}" : "\u{1F441}\uFE0F", " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.confirmPassword);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.agreed);
        \u0275\u0275advance(8);
        \u0275\u0275property("disabled", ctx.loading || !ctx.agreed);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--bg-primary, #0f1123);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.auth-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  animation: _ngcontent-%COMP%_authPageIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_authPageIn {\n  from {\n    opacity: 0;\n    transform: translateY(30px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border-radius: 20px;\n  padding: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #e8eaf6;\n  margin-bottom: 8px;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 0.9rem;\n  animation: _ngcontent-%COMP%_alertIn 0.3s ease both;\n}\n@keyframes _ngcontent-%COMP%_alertIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #4ade80;\n  border: 1px solid rgba(34, 197, 94, 0.3);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #c9cbdf;\n  font-size: 0.9rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: border-color 0.25s, box-shadow 0.25s;\n  box-sizing: border-box;\n  background: rgba(255, 255, 255, 0.05);\n  color: #e8eaf6;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #4f6ef7;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.18);\n}\n.input-with-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-with-icon[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 48px;\n}\n.toggle-pw[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #9ca3af;\n  transition: color 0.2s;\n}\n.toggle-pw[_ngcontent-%COMP%]:hover {\n  color: #e0e4ff;\n}\n.terms[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin-bottom: 20px;\n  font-size: 0.85rem;\n  color: #9ca3af;\n}\n.terms[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n.terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a5b4fc;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 4px 18px rgba(79, 110, 247, 0.35);\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(79, 110, 247, 0.5);\n}\n.btn-submit[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.97);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9ca3af;\n  font-size: 0.9rem;\n  margin-top: 20px;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a5b4fc;\n  font-weight: 600;\n  text-decoration: none;\n}\n@media (max-width: 480px) {\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 28px 20px;\n  }\n}\n/*# sourceMappingURL=register.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `
    <div class="auth-page">
      <div class="auth-container">
        <div class="auth-card">
          <div class="auth-header">
            <h1>Create Account</h1>
            <p>Join ShopHub today</p>
          </div>

          <form (ngSubmit)="onSubmit()" #registerForm="ngForm">
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" [(ngModel)]="name" name="name" required
                placeholder="John Doe" class="form-control" />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" [(ngModel)]="email" name="email" required
                placeholder="you@example.com" class="form-control" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <div class="input-with-icon">
                <input [type]="showPassword ? 'text' : 'password'"
                  [(ngModel)]="password" name="password" required minlength="6"
                  placeholder="At least 6 characters" class="form-control" />
                <button type="button" class="toggle-pw" (click)="showPassword = !showPassword">
                  {{ showPassword ? '\u{1F648}' : '\u{1F441}\uFE0F' }}
                </button>
              </div>
            </div>
            <div class="form-group">
              <label>Confirm Password</label>
              <input [type]="showPassword ? 'text' : 'password'"
                [(ngModel)]="confirmPassword" name="confirmPassword" required
                placeholder="Repeat your password" class="form-control" />
            </div>
            <div class="terms">
              <input type="checkbox" [(ngModel)]="agreed" name="agreed" id="terms" />
              <label for="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
            </div>
            <button type="submit" class="btn-submit" [disabled]="loading || !agreed">
              <span *ngIf="loading">Creating account...</span>
              <span *ngIf="!loading">Create Account</span>
            </button>
          </form>

          <p class="auth-footer">
            Already have an account? <a routerLink="/auth/login">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;39da599f198711c37ca41d681f6ff66f900d9b5ab16bcbbce2ffac122d88dcf9;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/features/auth/register/register.component.ts */\n.auth-page {\n  min-height: 100vh;\n  background: var(--bg-primary, #0f1123);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.auth-container {\n  width: 100%;\n  max-width: 440px;\n  animation: authPageIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes authPageIn {\n  from {\n    opacity: 0;\n    transform: translateY(30px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.auth-card {\n  background: #1e2235;\n  border-radius: 20px;\n  padding: 40px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);\n}\n.auth-header {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.auth-header h1 {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #e8eaf6;\n  margin-bottom: 8px;\n}\n.auth-header p {\n  color: #9ca3af;\n}\n.alert {\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 0.9rem;\n  animation: alertIn 0.3s ease both;\n}\n@keyframes alertIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.alert-error {\n  background: rgba(220, 38, 38, 0.1);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.alert-success {\n  background: rgba(34, 197, 94, 0.1);\n  color: #4ade80;\n  border: 1px solid rgba(34, 197, 94, 0.3);\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #c9cbdf;\n  font-size: 0.9rem;\n}\n.form-control {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: border-color 0.25s, box-shadow 0.25s;\n  box-sizing: border-box;\n  background: rgba(255, 255, 255, 0.05);\n  color: #e8eaf6;\n}\n.form-control:focus {\n  border-color: #4f6ef7;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.18);\n}\n.input-with-icon {\n  position: relative;\n}\n.input-with-icon .form-control {\n  padding-right: 48px;\n}\n.toggle-pw {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #9ca3af;\n  transition: color 0.2s;\n}\n.toggle-pw:hover {\n  color: #e0e4ff;\n}\n.terms {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin-bottom: 20px;\n  font-size: 0.85rem;\n  color: #9ca3af;\n}\n.terms input {\n  margin-top: 2px;\n}\n.terms a {\n  color: #a5b4fc;\n}\n.btn-submit {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 4px 18px rgba(79, 110, 247, 0.35);\n}\n.btn-submit:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(79, 110, 247, 0.5);\n}\n.btn-submit:active:not(:disabled) {\n  transform: scale(0.97);\n}\n.btn-submit:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.auth-footer {\n  text-align: center;\n  color: #9ca3af;\n  font-size: 0.9rem;\n  margin-top: 20px;\n}\n.auth-footer a {\n  color: #a5b4fc;\n  font-weight: 600;\n  text-decoration: none;\n}\n@media (max-width: 480px) {\n  .auth-card {\n    padding: 28px 20px;\n  }\n}\n/*# sourceMappingURL=register.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/register/register.component.ts", lineNumber: 131 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-UPH3ZP5A.js.map
