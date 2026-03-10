import {
  CommonModule,
  Component,
  Input,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-IXUP4X5N.js";

// src/app/shared/components/spin/spin.component.ts
var _c0 = ["*"];
function SpinComponent_ng_container_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.tip);
  }
}
function SpinComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275element(2, "span", 2);
    \u0275\u0275template(3, SpinComponent_ng_container_0_span_3_Template, 2, 1, "span", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("spin-standalone spin-", ctx_r0.size, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.tip);
  }
}
function SpinComponent_div_1_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.tip);
  }
}
function SpinComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div");
    \u0275\u0275element(2, "span", 2);
    \u0275\u0275template(3, SpinComponent_div_1_div_1_span_3_Template, 2, 1, "span", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("spin-inner spin-", ctx_r0.size, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.tip);
  }
}
function SpinComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, SpinComponent_div_1_div_1_Template, 4, 4, "div", 6);
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275projection(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.spinning);
    \u0275\u0275advance();
    \u0275\u0275classProp("spin-blur", ctx_r0.spinning);
  }
}
var SpinComponent = class _SpinComponent {
  constructor() {
    this.spinning = true;
    this.tip = "";
    this.size = "md";
    this.hasContent = false;
  }
  static {
    this.\u0275fac = function SpinComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SpinComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpinComponent, selectors: [["app-spin"]], inputs: { spinning: "spinning", tip: "tip", size: "size", hasContent: "hasContent" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "spin-container", 4, "ngIf"], [1, "spin-ring"], ["class", "spin-tip", 4, "ngIf"], [1, "spin-tip"], [1, "spin-container"], ["class", "spin-overlay", 4, "ngIf"], [1, "spin-content"], [1, "spin-overlay"]], template: function SpinComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, SpinComponent_ng_container_0_Template, 4, 4, "ng-container", 0)(1, SpinComponent_div_1_Template, 4, 3, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.hasContent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.hasContent);
      }
    }, dependencies: [CommonModule, NgIf], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.spin-standalone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px;\n  gap: 10px;\n}\n.spin-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.spin-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(15, 17, 35, 0.55);\n  backdrop-filter: blur(2px);\n  border-radius: inherit;\n}\n.spin-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.spin-content[_ngcontent-%COMP%] {\n  transition: opacity 0.2s;\n}\n.spin-blur[_ngcontent-%COMP%] {\n  opacity: 0.45;\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.spin-ring[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 50%;\n  border-style: solid;\n  border-color: rgba(79, 110, 247, 0.2);\n  border-top-color: #4f6ef7;\n  animation: _ngcontent-%COMP%_spinRing 0.75s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spinRing {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin-sm[_ngcontent-%COMP%]   .spin-ring[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-width: 3px;\n}\n.spin-md[_ngcontent-%COMP%]   .spin-ring[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-width: 4px;\n}\n.spin-lg[_ngcontent-%COMP%]   .spin-ring[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-width: 5px;\n}\n.spin-sm.spin-standalone[_ngcontent-%COMP%]   .spin-ring[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-width: 3px;\n}\n.spin-md.spin-standalone[_ngcontent-%COMP%]   .spin-ring[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-width: 4px;\n}\n.spin-lg.spin-standalone[_ngcontent-%COMP%]   .spin-ring[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-width: 5px;\n}\n.spin-tip[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #a0a4c0;\n}\n/*# sourceMappingURL=spin.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinComponent, [{
    type: Component,
    args: [{ selector: "app-spin", standalone: true, imports: [CommonModule], template: `
    <!-- Full-block spinner (no content wrapper) -->
    <ng-container *ngIf="!hasContent">
      <div class="spin-standalone spin-{{ size }}">
        <span class="spin-ring"></span>
        <span class="spin-tip" *ngIf="tip">{{ tip }}</span>
      </div>
    </ng-container>

    <!-- Wrapper mode: content + overlay -->
    <div class="spin-container" *ngIf="hasContent">
      <div class="spin-overlay" *ngIf="spinning">
        <div class="spin-inner spin-{{ size }}">
          <span class="spin-ring"></span>
          <span class="spin-tip" *ngIf="tip">{{ tip }}</span>
        </div>
      </div>
      <div class="spin-content" [class.spin-blur]="spinning">
        <ng-content></ng-content>
      </div>
    </div>
  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;c42b121afaa68e80f425bd9d7791f75300c5ac359703947d300f009c5c1a0cbf;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/shared/components/spin/spin.component.ts */\n:host {\n  display: block;\n}\n.spin-standalone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px;\n  gap: 10px;\n}\n.spin-container {\n  position: relative;\n}\n.spin-overlay {\n  position: absolute;\n  inset: 0;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(15, 17, 35, 0.55);\n  backdrop-filter: blur(2px);\n  border-radius: inherit;\n}\n.spin-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.spin-content {\n  transition: opacity 0.2s;\n}\n.spin-blur {\n  opacity: 0.45;\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.spin-ring {\n  display: block;\n  border-radius: 50%;\n  border-style: solid;\n  border-color: rgba(79, 110, 247, 0.2);\n  border-top-color: #4f6ef7;\n  animation: spinRing 0.75s linear infinite;\n}\n@keyframes spinRing {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin-sm .spin-ring {\n  width: 22px;\n  height: 22px;\n  border-width: 3px;\n}\n.spin-md .spin-ring {\n  width: 38px;\n  height: 38px;\n  border-width: 4px;\n}\n.spin-lg .spin-ring {\n  width: 56px;\n  height: 56px;\n  border-width: 5px;\n}\n.spin-sm.spin-standalone .spin-ring {\n  width: 22px;\n  height: 22px;\n  border-width: 3px;\n}\n.spin-md.spin-standalone .spin-ring {\n  width: 38px;\n  height: 38px;\n  border-width: 4px;\n}\n.spin-lg.spin-standalone .spin-ring {\n  width: 56px;\n  height: 56px;\n  border-width: 5px;\n}\n.spin-tip {\n  font-size: 0.82rem;\n  color: #a0a4c0;\n}\n/*# sourceMappingURL=spin.component.css.map */\n'] }]
  }], null, { spinning: [{
    type: Input
  }], tip: [{
    type: Input
  }], size: [{
    type: Input
  }], hasContent: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpinComponent, { className: "SpinComponent", filePath: "src/app/shared/components/spin/spin.component.ts", lineNumber: 76 });
})();

export {
  SpinComponent
};
//# sourceMappingURL=chunk-GP5OZDAH.js.map
