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
  ɵɵnextContext,
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

// src/app/features/auth/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 7);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_form_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 8)(2, "label");
    \u0275\u0275text(3, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_form_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Sending..." : "Send Reset Link", " ");
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  constructor(authService, msgService) {
    this.authService = authService;
    this.msgService = msgService;
    this.email = "";
    this.loading = false;
    this.submitted = false;
  }
  onSubmit() {
    if (!this.email) {
      this.msgService.error("Please enter your email");
      return;
    }
    this.loading = true;
    this.authService.forgotPassword(this.email).subscribe({
      next: () => {
        this.loading = false;
        this.submitted = true;
        this.msgService.success("If that email exists, a reset link has been sent.");
      },
      error: (err) => {
        this.loading = false;
        this.msgService.error(err.error?.message || "Something went wrong");
      }
    });
  }
  static {
    this.\u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 12, vars: 1, consts: [[1, "auth-page"], [1, "auth-container"], [1, "auth-card"], [1, "auth-header"], [3, "ngSubmit", 4, "ngIf"], [1, "auth-footer"], ["routerLink", "/auth/login"], [3, "ngSubmit"], [1, "form-group"], ["type", "email", "name", "email", "required", "", "placeholder", "you@example.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-submit", 3, "disabled"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        \u0275\u0275text(5, "Forgot Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "We'll send you a reset link");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, ForgotPasswordComponent_form_8_Template, 7, 3, "form", 4);
        \u0275\u0275elementStart(9, "p", 5)(10, "a", 6);
        \u0275\u0275text(11, "\u2190 Back to login");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", !ctx.submitted);
      }
    }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #e0e7ff 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.auth-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 40px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 8px;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 0.9rem;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.9rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: border-color 0.2s;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #2563EB;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background: #2563EB;\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6b7280;\n  font-size: 0.9rem;\n  margin-top: 20px;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2563EB;\n  font-weight: 600;\n  text-decoration: none;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `
    <div class="auth-page">
      <div class="auth-container">
        <div class="auth-card">
          <div class="auth-header">
            <h1>Forgot Password</h1>
            <p>We'll send you a reset link</p>
          </div>
          <form (ngSubmit)="onSubmit()" *ngIf="!submitted">
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" [(ngModel)]="email" name="email" required
                placeholder="you@example.com" class="form-control" />
            </div>
            <button type="submit" class="btn-submit" [disabled]="loading">
              {{ loading ? 'Sending...' : 'Send Reset Link' }}
            </button>
          </form>
          <p class="auth-footer"><a routerLink="/auth/login">\u2190 Back to login</a></p>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;3f492f8827d750f6d784db007f17ee2cf36f73415b0f0285c8d7f4f5c57a2c2e;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/features/auth/forgot-password/forgot-password.component.ts */\n.auth-page {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #e0e7ff 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.auth-container {\n  width: 100%;\n  max-width: 440px;\n}\n.auth-card {\n  background: white;\n  border-radius: 20px;\n  padding: 40px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);\n}\n.auth-header {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.auth-header h1 {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 8px;\n}\n.auth-header p {\n  color: #6b7280;\n}\n.alert {\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 0.9rem;\n}\n.alert-error {\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.alert-success {\n  background: #f0fdf4;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.9rem;\n}\n.form-control {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 10px;\n  font-size: 1rem;\n  outline: none;\n  transition: border-color 0.2s;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  border-color: #2563EB;\n}\n.btn-submit {\n  width: 100%;\n  padding: 14px;\n  background: #2563EB;\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-submit:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-submit:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.auth-footer {\n  text-align: center;\n  color: #6b7280;\n  font-size: 0.9rem;\n  margin-top: 20px;\n}\n.auth-footer a {\n  color: #2563EB;\n  font-weight: 600;\n  text-decoration: none;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/features/auth/forgot-password/forgot-password.component.ts", lineNumber: 88 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-WBA5EFLH.js.map
