import {
  ModalService
} from "./chunk-K5OANHGI.js";
import {
  NotificationService
} from "./chunk-A4HOYT66.js";
import {
  ConfirmService
} from "./chunk-YC4BKLUZ.js";
import {
  SelectComponent
} from "./chunk-7LUADATD.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-QGP2PKSJ.js";
import {
  MessageService
} from "./chunk-JLEF55SF.js";
import {
  SkeletonComponent
} from "./chunk-H4WCAIWK.js";
import {
  SpinComponent
} from "./chunk-GP5OZDAH.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  HostListener,
  Input,
  NgForOf,
  NgIf,
  Output,
  ViewChild,
  __async,
  createComponent,
  forwardRef,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-IXUP4X5N.js";

// src/app/shared/components/slider/slider.component.ts
function SliderComponent_ng_container_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("left", m_r2.pct + "%");
    \u0275\u0275classProp("slider-mark-active", ctx_r2.isMarkActive(m_r2.value));
  }
}
function SliderComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SliderComponent_ng_container_6_span_1_Template, 1, 4, "span", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.markList);
  }
}
function SliderComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.range ? ctx_r2.rangeLow : ctx_r2.value, " ");
  }
}
function SliderComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.rangeHigh);
  }
}
function SliderComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("mousedown", function SliderComponent_div_9_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onThumbDown($event, "high"));
    })("touchstart", function SliderComponent_div_9_Template_div_touchstart_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onThumbTouch($event, "high"));
    })("keydown", function SliderComponent_div_9_Template_div_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onThumbKey($event, "high"));
    });
    \u0275\u0275template(1, SliderComponent_div_9_div_1_Template, 2, 1, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r2.rightPct + "%");
    \u0275\u0275classProp("slider-thumb-focus", ctx_r2.dragTarget === "high");
    \u0275\u0275attribute("aria-valuemin", ctx_r2.min)("aria-valuemax", ctx_r2.max)("aria-valuenow", ctx_r2.rangeHigh);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tooltip !== "never");
  }
}
function SliderComponent_div_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("left", m_r5.pct + "%");
    \u0275\u0275classProp("slider-mark-label-active", ctx_r2.isMarkActive(m_r5.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r5.label, " ");
  }
}
function SliderComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, SliderComponent_div_10_span_1_Template, 2, 5, "span", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.markList);
  }
}
function SliderComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.min);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.max);
  }
}
var SliderComponent = class _SliderComponent {
  constructor(el, cd) {
    this.el = el;
    this.cd = cd;
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.range = false;
    this.disabled = false;
    this.tooltip = "hover";
    this.showBounds = false;
    this.marks = null;
    this.valueChange = new EventEmitter();
    this.value = 0;
    this.rangeLow = 0;
    this.rangeHigh = 100;
    this.dragTarget = null;
    this.trackRect = null;
    this._onChange = () => {
    };
    this._onTouched = () => {
    };
  }
  writeValue(v) {
    if (this.range && Array.isArray(v)) {
      this.rangeLow = this.clamp(v[0]);
      this.rangeHigh = this.clamp(v[1]);
    } else if (typeof v === "number") {
      this.value = this.clamp(v);
    }
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(d) {
    this.disabled = d;
  }
  // ─── Computed percentages ────────────────────────────────────────────────
  get fillSingle() {
    return this.toPct(this.value);
  }
  get leftPct() {
    return this.toPct(this.rangeLow);
  }
  get rightPct() {
    return this.toPct(this.rangeHigh);
  }
  get fillLeft() {
    return this.toPct(this.rangeLow);
  }
  get fillWidth() {
    return this.toPct(this.rangeHigh) - this.toPct(this.rangeLow);
  }
  get markList() {
    if (!this.marks)
      return [];
    return Object.entries(this.marks).map(([k, label]) => ({
      value: Number(k),
      label,
      pct: this.toPct(Number(k))
    }));
  }
  isMarkActive(v) {
    if (this.range)
      return v >= this.rangeLow && v <= this.rangeHigh;
    return v <= this.value;
  }
  // ─── Drag ───────────────────────────────────────────────────────────────
  onThumbDown(e, target) {
    e.stopPropagation();
    e.preventDefault();
    this.startDrag(target);
  }
  onThumbTouch(e, target) {
    e.stopPropagation();
    this.startDrag(target);
  }
  onTrackDown(e) {
    const pct = this.getEventPct(e);
    const val = this.snapToStep(this.fromPct(pct));
    if (!this.range) {
      this.value = val;
      this.emit();
    } else {
      const distLow = Math.abs(val - this.rangeLow);
      const distHigh = Math.abs(val - this.rangeHigh);
      if (distLow <= distHigh) {
        this.rangeLow = val;
      } else {
        this.rangeHigh = val;
      }
      this.emit();
    }
    this.startDrag(!this.range ? "low" : Math.abs(val - this.rangeLow) <= Math.abs(val - this.rangeHigh) ? "low" : "high");
  }
  onTrackTouch(e) {
    const pct = this.getTouchPct(e);
    const val = this.snapToStep(this.fromPct(pct));
    if (!this.range) {
      this.value = val;
      this.emit();
    } else {
      const distLow = Math.abs(val - this.rangeLow);
      const distHigh = Math.abs(val - this.rangeHigh);
      if (distLow <= distHigh)
        this.rangeLow = val;
      else
        this.rangeHigh = val;
      this.emit();
    }
  }
  startDrag(target) {
    this.dragTarget = target;
    const trackEl = this.el.nativeElement.querySelector(".slider-track-area");
    if (trackEl)
      this.trackRect = trackEl.getBoundingClientRect();
  }
  onMouseMove(e) {
    if (!this.dragTarget || !this.trackRect)
      return;
    this.applyDrag(this.pctFromClient(e.clientX), this.dragTarget);
  }
  onTouchMove(e) {
    if (!this.dragTarget || !this.trackRect)
      return;
    const t = e.touches[0];
    this.applyDrag(this.pctFromClient(t.clientX), this.dragTarget);
  }
  onDragEnd() {
    if (this.dragTarget) {
      this._onTouched();
      this.dragTarget = null;
      this.cd.markForCheck();
    }
  }
  applyDrag(pct, target) {
    const val = this.snapToStep(this.fromPct(pct));
    if (!this.range) {
      this.value = val;
    } else if (target === "low") {
      this.rangeLow = Math.min(val, this.rangeHigh - this.step);
    } else {
      this.rangeHigh = Math.max(val, this.rangeLow + this.step);
    }
    this.emit();
    this.cd.markForCheck();
  }
  onThumbKey(e, target) {
    let delta = 0;
    if (e.key === "ArrowRight" || e.key === "ArrowUp")
      delta = this.step;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown")
      delta = -this.step;
    if (!delta)
      return;
    e.preventDefault();
    if (!this.range) {
      this.value = this.clamp(this.value + delta);
    } else if (target === "low") {
      this.rangeLow = this.clamp(Math.min(this.rangeLow + delta, this.rangeHigh - this.step));
    } else {
      this.rangeHigh = this.clamp(Math.max(this.rangeHigh + delta, this.rangeLow + this.step));
    }
    this.emit();
    this.cd.markForCheck();
  }
  // ─── Helpers ─────────────────────────────────────────────────────────────
  emit() {
    const v = this.range ? [this.rangeLow, this.rangeHigh] : this.value;
    this._onChange(v);
    this.valueChange.emit(v);
  }
  toPct(v) {
    return (v - this.min) / (this.max - this.min) * 100;
  }
  fromPct(pct) {
    return this.min + pct / 100 * (this.max - this.min);
  }
  clamp(v) {
    return Math.min(this.max, Math.max(this.min, v));
  }
  snapToStep(v) {
    return this.clamp(Math.round(v / this.step) * this.step);
  }
  getEventPct(e) {
    const trackEl = this.el.nativeElement.querySelector(".slider-track-area");
    const rect = trackEl?.getBoundingClientRect() ?? { left: 0, width: 1 };
    return this.pctFromClient(e.clientX, rect);
  }
  getTouchPct(e) {
    const trackEl = this.el.nativeElement.querySelector(".slider-track-area");
    const rect = trackEl?.getBoundingClientRect() ?? { left: 0, width: 1 };
    return this.pctFromClient(e.touches[0].clientX, rect);
  }
  pctFromClient(clientX, rect = this.trackRect ?? { left: 0, width: 1 }) {
    const raw = (clientX - rect.left) / rect.width * 100;
    return Math.max(0, Math.min(100, raw));
  }
  static {
    this.\u0275fac = function SliderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SliderComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SliderComponent, selectors: [["app-slider"]], hostBindings: function SliderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mousemove", function SliderComponent_mousemove_HostBindingHandler($event) {
          return ctx.onMouseMove($event);
        }, false, \u0275\u0275resolveWindow)("touchmove", function SliderComponent_touchmove_HostBindingHandler($event) {
          return ctx.onTouchMove($event);
        }, false, \u0275\u0275resolveWindow)("mouseup", function SliderComponent_mouseup_HostBindingHandler() {
          return ctx.onDragEnd();
        }, false, \u0275\u0275resolveWindow)("touchend", function SliderComponent_touchend_HostBindingHandler() {
          return ctx.onDragEnd();
        }, false, \u0275\u0275resolveWindow);
      }
    }, inputs: { min: "min", max: "max", step: "step", range: "range", disabled: "disabled", tooltip: "tooltip", showBounds: "showBounds", marks: "marks" }, outputs: { valueChange: "valueChange" }, features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SliderComponent),
      multi: true
    }])], decls: 12, vars: 18, consts: [["trackEl", ""], [1, "slider-root"], [1, "slider-wrapper"], [1, "slider-track-area", 3, "mousedown", "touchstart"], [1, "slider-rail"], [1, "slider-fill"], [4, "ngIf"], ["tabindex", "0", "role", "slider", 1, "slider-thumb", 3, "mousedown", "touchstart", "keydown"], ["class", "slider-tooltip", 4, "ngIf"], ["class", "slider-thumb", "tabindex", "0", "role", "slider", 3, "left", "slider-thumb-focus", "mousedown", "touchstart", "keydown", 4, "ngIf"], ["class", "slider-marks-labels", 4, "ngIf"], ["class", "slider-bounds", 4, "ngIf"], ["class", "slider-mark", 3, "left", "slider-mark-active", 4, "ngFor", "ngForOf"], [1, "slider-mark"], [1, "slider-tooltip"], [1, "slider-marks-labels"], ["class", "slider-mark-label", 3, "left", "slider-mark-label-active", 4, "ngFor", "ngForOf"], [1, "slider-mark-label"], [1, "slider-bounds"]], template: function SliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3, 0);
        \u0275\u0275listener("mousedown", function SliderComponent_Template_div_mousedown_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onTrackDown($event));
        })("touchstart", function SliderComponent_Template_div_touchstart_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onTrackTouch($event));
        });
        \u0275\u0275element(4, "div", 4)(5, "div", 5);
        \u0275\u0275template(6, SliderComponent_ng_container_6_Template, 2, 1, "ng-container", 6);
        \u0275\u0275elementStart(7, "div", 7);
        \u0275\u0275listener("mousedown", function SliderComponent_Template_div_mousedown_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onThumbDown($event, "low"));
        })("touchstart", function SliderComponent_Template_div_touchstart_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onThumbTouch($event, "low"));
        })("keydown", function SliderComponent_Template_div_keydown_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onThumbKey($event, "low"));
        });
        \u0275\u0275template(8, SliderComponent_div_8_Template, 2, 1, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, SliderComponent_div_9_Template, 2, 8, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, SliderComponent_div_10_Template, 2, 1, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, SliderComponent_div_11_Template, 5, 2, "div", 11);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("slider-disabled", ctx.disabled);
        \u0275\u0275advance(5);
        \u0275\u0275styleProp("left", ctx.range ? ctx.fillLeft + "%" : "0")("width", ctx.range ? ctx.fillWidth + "%" : ctx.fillSingle + "%");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.marks);
        \u0275\u0275advance();
        \u0275\u0275styleProp("left", ctx.range ? ctx.leftPct + "%" : ctx.fillSingle + "%");
        \u0275\u0275classProp("slider-thumb-focus", ctx.dragTarget === "low");
        \u0275\u0275attribute("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.range ? ctx.rangeLow : ctx.value);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.tooltip !== "never");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.range);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.marks);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBounds);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.slider-root[_ngcontent-%COMP%] {\n  padding: 6px 0;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.slider-disabled[_ngcontent-%COMP%] {\n  opacity: 0.45;\n  pointer-events: none;\n}\n.slider-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.slider-track-area[_ngcontent-%COMP%] {\n  position: relative;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 0 8px;\n}\n.slider-rail[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 8px;\n  right: 8px;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 100px;\n}\n.slider-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #4f6ef7,\n      #7c3aed);\n  border-radius: 100px;\n  transition: left 0.05s, width 0.05s;\n}\n.slider-thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translateX(-50%);\n  width: 18px;\n  height: 18px;\n  background: #fff;\n  border: 3px solid #4f6ef7;\n  border-radius: 50%;\n  box-shadow: 0 2px 8px rgba(79, 110, 247, 0.45);\n  cursor: grab;\n  z-index: 2;\n  transition:\n    transform 0.15s,\n    box-shadow 0.15s,\n    border-color 0.15s;\n  outline: none;\n}\n.slider-thumb[_ngcontent-%COMP%]:hover, \n.slider-thumb-focus[_ngcontent-%COMP%] {\n  transform: translateX(-50%) scale(1.25);\n  box-shadow: 0 0 0 5px rgba(79, 110, 247, 0.2), 0 2px 10px rgba(79, 110, 247, 0.5);\n}\n.slider-thumb[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.slider-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 10px);\n  left: 50%;\n  transform: translateX(-50%);\n  background: #1e2235;\n  border: 1px solid rgba(79, 110, 247, 0.35);\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 6px;\n  white-space: nowrap;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.slider-thumb[_ngcontent-%COMP%]:hover   .slider-tooltip[_ngcontent-%COMP%], \n.slider-thumb-focus[_ngcontent-%COMP%]   .slider-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.slider-mark[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  top: 50%;\n}\n.slider-mark-active[_ngcontent-%COMP%] {\n  background: #4f6ef7;\n}\n.slider-marks-labels[_ngcontent-%COMP%] {\n  position: relative;\n  height: 20px;\n}\n.slider-mark-label[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translateX(-50%);\n  font-size: 0.72rem;\n  color: #5a5e7a;\n  top: 4px;\n  white-space: nowrap;\n}\n.slider-mark-label-active[_ngcontent-%COMP%] {\n  color: #a0a4c0;\n}\n.slider-bounds[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 8px;\n  margin-top: 2px;\n  font-size: 0.75rem;\n  color: #5a5e7a;\n}\n/*# sourceMappingURL=slider.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderComponent, [{
    type: Component,
    args: [{ selector: "app-slider", standalone: true, imports: [CommonModule, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderComponent),
      multi: true
    }], template: `
    <div class="slider-root" [class.slider-disabled]="disabled">

      <!-- Optional marks / labels row -->
      <div class="slider-wrapper">
        <div class="slider-track-area"
          (mousedown)="onTrackDown($event)"
          (touchstart)="onTrackTouch($event)"
          #trackEl>

          <!-- Background track -->
          <div class="slider-rail"></div>

          <!-- Filled track -->
          <div class="slider-fill"
            [style.left]="range ? fillLeft + '%' : '0'"
            [style.width]="range ? fillWidth + '%' : fillSingle + '%'">
          </div>

          <!-- Marks -->
          <ng-container *ngIf="marks">
            <span
              *ngFor="let m of markList"
              class="slider-mark"
              [style.left]="m.pct + '%'"
              [class.slider-mark-active]="isMarkActive(m.value)">
            </span>
          </ng-container>

          <!-- Thumb(s) -->
          <div class="slider-thumb"
            [style.left]="range ? leftPct + '%' : fillSingle + '%'"
            [class.slider-thumb-focus]="dragTarget === 'low'"
            (mousedown)="onThumbDown($event, 'low')"
            (touchstart)="onThumbTouch($event, 'low')"
            tabindex="0"
            (keydown)="onThumbKey($event, 'low')"
            role="slider"
            [attr.aria-valuemin]="min"
            [attr.aria-valuemax]="max"
            [attr.aria-valuenow]="range ? rangeLow : value">
            <div class="slider-tooltip" *ngIf="tooltip !== 'never'">
              {{ range ? rangeLow : value }}
            </div>
          </div>

          <div class="slider-thumb"
            *ngIf="range"
            [style.left]="rightPct + '%'"
            [class.slider-thumb-focus]="dragTarget === 'high'"
            (mousedown)="onThumbDown($event, 'high')"
            (touchstart)="onThumbTouch($event, 'high')"
            tabindex="0"
            (keydown)="onThumbKey($event, 'high')"
            role="slider"
            [attr.aria-valuemin]="min"
            [attr.aria-valuemax]="max"
            [attr.aria-valuenow]="rangeHigh">
            <div class="slider-tooltip" *ngIf="tooltip !== 'never'">{{ rangeHigh }}</div>
          </div>
        </div>

        <!-- Mark labels -->
        <div class="slider-marks-labels" *ngIf="marks">
          <span
            *ngFor="let m of markList"
            class="slider-mark-label"
            [style.left]="m.pct + '%'"
            [class.slider-mark-label-active]="isMarkActive(m.value)">
            {{ m.label }}
          </span>
        </div>
      </div>

      <!-- Min / Max labels -->
      <div class="slider-bounds" *ngIf="showBounds">
        <span>{{ min }}</span>
        <span>{{ max }}</span>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;fdabe515ac4a50128755eec3ac2a35132dbc1a0f10a85c97bbd0d1df448da676;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/shared/components/slider/slider.component.ts */\n:host {\n  display: block;\n}\n.slider-root {\n  padding: 6px 0;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.slider-disabled {\n  opacity: 0.45;\n  pointer-events: none;\n}\n.slider-wrapper {\n  position: relative;\n}\n.slider-track-area {\n  position: relative;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 0 8px;\n}\n.slider-rail {\n  position: absolute;\n  left: 8px;\n  right: 8px;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 100px;\n}\n.slider-fill {\n  position: absolute;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #4f6ef7,\n      #7c3aed);\n  border-radius: 100px;\n  transition: left 0.05s, width 0.05s;\n}\n.slider-thumb {\n  position: absolute;\n  transform: translateX(-50%);\n  width: 18px;\n  height: 18px;\n  background: #fff;\n  border: 3px solid #4f6ef7;\n  border-radius: 50%;\n  box-shadow: 0 2px 8px rgba(79, 110, 247, 0.45);\n  cursor: grab;\n  z-index: 2;\n  transition:\n    transform 0.15s,\n    box-shadow 0.15s,\n    border-color 0.15s;\n  outline: none;\n}\n.slider-thumb:hover,\n.slider-thumb-focus {\n  transform: translateX(-50%) scale(1.25);\n  box-shadow: 0 0 0 5px rgba(79, 110, 247, 0.2), 0 2px 10px rgba(79, 110, 247, 0.5);\n}\n.slider-thumb:active {\n  cursor: grabbing;\n}\n.slider-tooltip {\n  position: absolute;\n  bottom: calc(100% + 10px);\n  left: 50%;\n  transform: translateX(-50%);\n  background: #1e2235;\n  border: 1px solid rgba(79, 110, 247, 0.35);\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 6px;\n  white-space: nowrap;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.slider-thumb:hover .slider-tooltip,\n.slider-thumb-focus .slider-tooltip {\n  opacity: 1;\n}\n.slider-mark {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  top: 50%;\n}\n.slider-mark-active {\n  background: #4f6ef7;\n}\n.slider-marks-labels {\n  position: relative;\n  height: 20px;\n}\n.slider-mark-label {\n  position: absolute;\n  transform: translateX(-50%);\n  font-size: 0.72rem;\n  color: #5a5e7a;\n  top: 4px;\n  white-space: nowrap;\n}\n.slider-mark-label-active {\n  color: #a0a4c0;\n}\n.slider-bounds {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 8px;\n  margin-top: 2px;\n  font-size: 0.75rem;\n  color: #5a5e7a;\n}\n/*# sourceMappingURL=slider.component.css.map */\n"] }]
  }], () => [{ type: ElementRef }, { type: ChangeDetectorRef }], { min: [{
    type: Input
  }], max: [{
    type: Input
  }], step: [{
    type: Input
  }], range: [{
    type: Input
  }], disabled: [{
    type: Input
  }], tooltip: [{
    type: Input
  }], showBounds: [{
    type: Input
  }], marks: [{
    type: Input
  }], valueChange: [{
    type: Output
  }], onMouseMove: [{
    type: HostListener,
    args: ["window:mousemove", ["$event"]]
  }], onTouchMove: [{
    type: HostListener,
    args: ["window:touchmove", ["$event"]]
  }], onDragEnd: [{
    type: HostListener,
    args: ["window:mouseup"]
  }, {
    type: HostListener,
    args: ["window:touchend"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SliderComponent, { className: "SliderComponent", filePath: "src/app/shared/components/slider/slider.component.ts", lineNumber: 174 });
})();

// src/app/shared/components/popconfirm/popconfirm.component.ts
function PopconfirmComponent_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function PopconfirmComponent_i_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 14);
  }
}
function PopconfirmComponent_i_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 15);
  }
}
function PopconfirmComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.description);
  }
}
var PopconfirmComponent = class _PopconfirmComponent {
  constructor(el, cdr) {
    this.el = el;
    this.cdr = cdr;
    this.title = "Are you sure?";
    this.okText = "Yes";
    this.cancelText = "No";
    this.type = "default";
    this.placement = "top";
    this.confirmed = new EventEmitter();
    this.cancelled = new EventEmitter();
    this.outsideClick = new EventEmitter();
    this.top = -9999;
    this.left = -9999;
    this.positioned = false;
  }
  ngAfterViewInit() {
    const bubble = this.el.nativeElement.querySelector(".pfc-bubble");
    if (!bubble || !this.anchorRect)
      return;
    requestAnimationFrame(() => {
      const bw = bubble.offsetWidth;
      const bh = bubble.offsetHeight;
      const ar = this.anchorRect;
      const gap = 10;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      let t = 0, l = 0;
      switch (this.placement) {
        case "top":
          t = ar.top - bh - gap;
          l = ar.left + ar.width / 2 - bw / 2;
          break;
        case "bottom":
          t = ar.bottom + gap;
          l = ar.left + ar.width / 2 - bw / 2;
          break;
        case "left":
          t = ar.top + ar.height / 2 - bh / 2;
          l = ar.left - bw - gap;
          break;
        case "right":
          t = ar.top + ar.height / 2 - bh / 2;
          l = ar.right + gap;
          break;
      }
      this.left = Math.max(8, Math.min(l, vw - bw - 8));
      this.top = Math.max(8, Math.min(t, vh - bh - 8));
      this.positioned = true;
      this.cdr.detectChanges();
    });
  }
  onOk() {
    this.confirmed.emit();
  }
  onCancel() {
    this.cancelled.emit();
  }
  onOverlay(e) {
    if (e.target.classList.contains("pfc-overlay")) {
      this.outsideClick.emit();
    }
  }
  static {
    this.\u0275fac = function PopconfirmComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PopconfirmComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PopconfirmComponent, selectors: [["app-popconfirm"]], inputs: { title: "title", description: "description", okText: "okText", cancelText: "cancelText", type: "type", placement: "placement", anchorRect: "anchorRect" }, outputs: { confirmed: "confirmed", cancelled: "cancelled", outsideClick: "outsideClick" }, decls: 18, vars: 22, consts: [["bubble", ""], [1, "pfc-overlay", 3, "mousedown"], [3, "mousedown"], [1, "pfc-header"], ["class", "fas fa-triangle-exclamation", 4, "ngIf"], ["class", "fas fa-circle-exclamation", 4, "ngIf"], ["class", "fas fa-circle-question", 4, "ngIf"], [1, "pfc-title"], ["class", "pfc-desc", 4, "ngIf"], [1, "pfc-actions"], [1, "pfc-btn-cancel", 3, "click"], [3, "click"], [1, "pfc-arrow"], [1, "fas", "fa-triangle-exclamation"], [1, "fas", "fa-circle-exclamation"], [1, "fas", "fa-circle-question"], [1, "pfc-desc"]], template: function PopconfirmComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275listener("mousedown", function PopconfirmComponent_Template_div_mousedown_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onOverlay($event));
        });
        \u0275\u0275elementStart(1, "div", 2, 0);
        \u0275\u0275listener("mousedown", function PopconfirmComponent_Template_div_mousedown_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.stopPropagation());
        });
        \u0275\u0275elementStart(3, "div", 3)(4, "span");
        \u0275\u0275template(5, PopconfirmComponent_i_5_Template, 1, 0, "i", 4)(6, PopconfirmComponent_i_6_Template, 1, 0, "i", 5)(7, PopconfirmComponent_i_7_Template, 1, 0, "i", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div")(9, "p", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, PopconfirmComponent_p_11_Template, 2, 1, "p", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 9)(13, "button", 10);
        \u0275\u0275listener("click", function PopconfirmComponent_Template_button_click_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCancel());
        });
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 11);
        \u0275\u0275listener("click", function PopconfirmComponent_Template_button_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onOk());
        });
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(17, "span", 12);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classMapInterpolate1("pfc-bubble pfc-", ctx.placement, "");
        \u0275\u0275styleProp("top", ctx.top, "px")("left", ctx.left, "px");
        \u0275\u0275classProp("pfc-visible", ctx.positioned);
        \u0275\u0275advance(3);
        \u0275\u0275classMapInterpolate1("pfc-icon pfc-icon-", ctx.type, "");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.type === "danger");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.type === "warning");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.type === "default");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.description);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.cancelText);
        \u0275\u0275advance();
        \u0275\u0275classMapInterpolate1("pfc-btn-ok pfc-ok-", ctx.type, "");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.okText);
      }
    }, dependencies: [CommonModule, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.pfc-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1400;\n}\n.pfc-bubble[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 260px;\n  background: #1e2235;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 14px 16px 12px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(79, 110, 247, 0.08);\n  opacity: 0;\n  transform: scale(0.88);\n  transition: opacity 0.15s ease, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  pointer-events: none;\n}\n.pfc-bubble.pfc-visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  pointer-events: auto;\n}\n.pfc-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.pfc-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n}\n.pfc-icon-default[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.15);\n  color: #4f6ef7;\n}\n.pfc-icon-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.pfc-icon-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n.pfc-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 3px;\n  line-height: 1.3;\n}\n.pfc-desc[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #a0a4c0;\n  line-height: 1.4;\n}\n.pfc-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.pfc-btn-cancel[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #a0a4c0;\n  font-size: 0.82rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.pfc-btn-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n.pfc-btn-ok[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.pfc-ok-default[_ngcontent-%COMP%] {\n  background: #4f6ef7;\n  color: #fff;\n}\n.pfc-ok-default[_ngcontent-%COMP%]:hover {\n  background: #3d5cf5;\n}\n.pfc-ok-danger[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n}\n.pfc-ok-danger[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.pfc-ok-warning[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  color: #0f1123;\n}\n.pfc-ok-warning[_ngcontent-%COMP%]:hover {\n  background: #d97706;\n}\n.pfc-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #1e2235;\n}\n.pfc-top[_ngcontent-%COMP%]   .pfc-arrow[_ngcontent-%COMP%] {\n  bottom: -6px;\n  left: 50%;\n  margin-left: -5px;\n  border-right: 1px solid rgba(255, 255, 255, 0.1);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  transform: rotate(45deg);\n}\n.pfc-bottom[_ngcontent-%COMP%]   .pfc-arrow[_ngcontent-%COMP%] {\n  top: -6px;\n  left: 50%;\n  margin-left: -5px;\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  transform: rotate(45deg);\n}\n.pfc-left[_ngcontent-%COMP%]   .pfc-arrow[_ngcontent-%COMP%] {\n  right: -6px;\n  top: 50%;\n  margin-top: -5px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  border-right: 1px solid rgba(255, 255, 255, 0.1);\n  transform: rotate(45deg);\n}\n.pfc-right[_ngcontent-%COMP%]   .pfc-arrow[_ngcontent-%COMP%] {\n  left: -6px;\n  top: 50%;\n  margin-top: -5px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n  transform: rotate(45deg);\n}\n/*# sourceMappingURL=popconfirm.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopconfirmComponent, [{
    type: Component,
    args: [{ selector: "app-popconfirm", standalone: true, imports: [CommonModule], template: `
    <div class="pfc-overlay" (mousedown)="onOverlay($event)">
      <div
        #bubble
        class="pfc-bubble pfc-{{ placement }}"
        [class.pfc-visible]="positioned"
        [style.top.px]="top"
        [style.left.px]="left"
        (mousedown)="$event.stopPropagation()">

        <!-- Icon + Text -->
        <div class="pfc-header">
          <span class="pfc-icon pfc-icon-{{ type }}">
            <i *ngIf="type === 'danger'"  class="fas fa-triangle-exclamation"></i>
            <i *ngIf="type === 'warning'" class="fas fa-circle-exclamation"></i>
            <i *ngIf="type === 'default'" class="fas fa-circle-question"></i>
          </span>
          <div>
            <p class="pfc-title">{{ title }}</p>
            <p class="pfc-desc" *ngIf="description">{{ description }}</p>
          </div>
        </div>

        <!-- Actions -->
        <div class="pfc-actions">
          <button class="pfc-btn-cancel" (click)="onCancel()">{{ cancelText }}</button>
          <button class="pfc-btn-ok pfc-ok-{{ type }}" (click)="onOk()">{{ okText }}</button>
        </div>

        <!-- Arrow -->
        <span class="pfc-arrow"></span>
      </div>
    </div>
  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;6bf028bac976cec2e4e0d2f064c1263efc5f3636ccae9a896c1ba0e4b298efe8;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/shared/components/popconfirm/popconfirm.component.ts */\n.pfc-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 1400;\n}\n.pfc-bubble {\n  position: fixed;\n  width: 260px;\n  background: #1e2235;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 14px 16px 12px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(79, 110, 247, 0.08);\n  opacity: 0;\n  transform: scale(0.88);\n  transition: opacity 0.15s ease, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  pointer-events: none;\n}\n.pfc-bubble.pfc-visible {\n  opacity: 1;\n  transform: scale(1);\n  pointer-events: auto;\n}\n.pfc-header {\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.pfc-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n}\n.pfc-icon-default {\n  background: rgba(79, 110, 247, 0.15);\n  color: #4f6ef7;\n}\n.pfc-icon-danger {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.pfc-icon-warning {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n.pfc-title {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 3px;\n  line-height: 1.3;\n}\n.pfc-desc {\n  font-size: 0.8rem;\n  color: #a0a4c0;\n  line-height: 1.4;\n}\n.pfc-actions {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.pfc-btn-cancel {\n  padding: 6px 14px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #a0a4c0;\n  font-size: 0.82rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.pfc-btn-cancel:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n.pfc-btn-ok {\n  padding: 6px 14px;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.pfc-ok-default {\n  background: #4f6ef7;\n  color: #fff;\n}\n.pfc-ok-default:hover {\n  background: #3d5cf5;\n}\n.pfc-ok-danger {\n  background: #ef4444;\n  color: #fff;\n}\n.pfc-ok-danger:hover {\n  background: #dc2626;\n}\n.pfc-ok-warning {\n  background: #f59e0b;\n  color: #0f1123;\n}\n.pfc-ok-warning:hover {\n  background: #d97706;\n}\n.pfc-arrow {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #1e2235;\n}\n.pfc-top .pfc-arrow {\n  bottom: -6px;\n  left: 50%;\n  margin-left: -5px;\n  border-right: 1px solid rgba(255, 255, 255, 0.1);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  transform: rotate(45deg);\n}\n.pfc-bottom .pfc-arrow {\n  top: -6px;\n  left: 50%;\n  margin-left: -5px;\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  transform: rotate(45deg);\n}\n.pfc-left .pfc-arrow {\n  right: -6px;\n  top: 50%;\n  margin-top: -5px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  border-right: 1px solid rgba(255, 255, 255, 0.1);\n  transform: rotate(45deg);\n}\n.pfc-right .pfc-arrow {\n  left: -6px;\n  top: 50%;\n  margin-top: -5px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n  transform: rotate(45deg);\n}\n/*# sourceMappingURL=popconfirm.component.css.map */\n'] }]
  }], () => [{ type: ElementRef }, { type: ChangeDetectorRef }], { title: [{
    type: Input
  }], description: [{
    type: Input
  }], okText: [{
    type: Input
  }], cancelText: [{
    type: Input
  }], type: [{
    type: Input
  }], placement: [{
    type: Input
  }], anchorRect: [{
    type: Input
  }], confirmed: [{
    type: Output
  }], cancelled: [{
    type: Output
  }], outsideClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PopconfirmComponent, { className: "PopconfirmComponent", filePath: "src/app/shared/components/popconfirm/popconfirm.component.ts", lineNumber: 147 });
})();

// src/app/shared/components/popconfirm/popconfirm.directive.ts
var PopconfirmDirective = class _PopconfirmDirective {
  constructor() {
    this.popTitle = "Are you sure?";
    this.popOkText = "Yes";
    this.popCancelText = "No";
    this.popType = "default";
    this.popPlacement = "top";
    this.popConfirm = new EventEmitter();
    this.popCancel = new EventEmitter();
    this.el = inject(ElementRef);
    this.appRef = inject(ApplicationRef);
    this.envInj = inject(EnvironmentInjector);
    this.compRef = null;
  }
  onClick(e) {
    e.stopPropagation();
    if (this.compRef) {
      this.destroy();
      return;
    }
    this.show();
  }
  show() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const ref = createComponent(PopconfirmComponent, { environmentInjector: this.envInj });
    ref.instance.title = this.popTitle || "Are you sure?";
    ref.instance.description = this.popDescription;
    ref.instance.okText = this.popOkText;
    ref.instance.cancelText = this.popCancelText;
    ref.instance.type = this.popType;
    ref.instance.placement = this.popPlacement;
    ref.instance.anchorRect = rect;
    ref.instance.confirmed.subscribe(() => {
      this.popConfirm.emit();
      this.destroy();
    });
    ref.instance.cancelled.subscribe(() => {
      this.popCancel.emit();
      this.destroy();
    });
    ref.instance.outsideClick.subscribe(() => this.destroy());
    this.appRef.attachView(ref.hostView);
    document.body.appendChild(ref.location.nativeElement);
    this.compRef = ref;
  }
  destroy() {
    if (!this.compRef)
      return;
    this.appRef.detachView(this.compRef.hostView);
    this.compRef.destroy();
    this.compRef = null;
  }
  ngOnDestroy() {
    this.destroy();
  }
  static {
    this.\u0275fac = function PopconfirmDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PopconfirmDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _PopconfirmDirective, selectors: [["", "appPopconfirm", ""]], hostBindings: function PopconfirmDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function PopconfirmDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    }, inputs: { popTitle: [0, "appPopconfirm", "popTitle"], popDescription: "popDescription", popOkText: "popOkText", popCancelText: "popCancelText", popType: "popType", popPlacement: "popPlacement" }, outputs: { popConfirm: "popConfirm", popCancel: "popCancel" } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopconfirmDirective, [{
    type: Directive,
    args: [{
      selector: "[appPopconfirm]",
      standalone: true
    }]
  }], null, { popTitle: [{
    type: Input,
    args: ["appPopconfirm"]
  }], popDescription: [{
    type: Input
  }], popOkText: [{
    type: Input
  }], popCancelText: [{
    type: Input
  }], popType: [{
    type: Input
  }], popPlacement: [{
    type: Input
  }], popConfirm: [{
    type: Output
  }], popCancel: [{
    type: Output
  }], onClick: [{
    type: HostListener,
    args: ["click", ["$event"]]
  }] });
})();

// src/app/features/ui-showcase/ui-showcase.component.ts
var _c0 = ["basicModalTpl"];
var _c1 = ["noFooterTpl"];
var _c2 = ["customFooterTpl"];
var _c3 = ["customFooterBtnsTpl"];
function UiShowcaseComponent_p_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 66);
    \u0275\u0275text(1, " Result: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-success", ctx_r1.confirmResult)("text-danger", !ctx_r1.confirmResult);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.confirmResult ? "Confirmed \u2713" : "Cancelled \u2717", " ");
  }
}
function UiShowcaseComponent_p_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 66);
    \u0275\u0275text(1, " Result: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 67);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-success", ctx_r1.popconfirmResult.confirmed)("text-danger", !ctx_r1.popconfirmResult.confirmed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.popconfirmResult.confirmed ? "\u2713 Confirmed" : "\u2717 Cancelled", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u2014 ", ctx_r1.popconfirmResult.variant, "");
  }
}
function UiShowcaseComponent_ng_template_166_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "This is a basic modal. You can put any content here \u2014 forms, images, details, etc.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 68);
    \u0275\u0275text(3, "Click outside or press the \u2715 button to close.");
    \u0275\u0275elementEnd();
  }
}
function UiShowcaseComponent_ng_template_168_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "This modal has no footer. Pass ");
    \u0275\u0275elementStart(2, "code");
    \u0275\u0275text(3, "footer: null");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " to hide it.");
    \u0275\u0275elementEnd();
  }
}
function UiShowcaseComponent_ng_template_170_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "This modal has a custom footer with its own buttons.");
    \u0275\u0275elementEnd();
  }
}
function UiShowcaseComponent_ng_template_172_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function UiShowcaseComponent_ng_template_172_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modalSvc.close());
    });
    \u0275\u0275text(1, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 16);
    \u0275\u0275listener("click", function UiShowcaseComponent_ng_template_172_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.modalSvc.close();
      return \u0275\u0275resetView(ctx_r1.msg.success("Saved!"));
    });
    \u0275\u0275text(3, "Save");
    \u0275\u0275elementEnd();
  }
}
var UiShowcaseComponent = class _UiShowcaseComponent {
  constructor(modalSvc, msg, notif, confirm) {
    this.modalSvc = modalSvc;
    this.msg = msg;
    this.notif = notif;
    this.confirm = confirm;
    this.skeletonActive = true;
    this.spinWrapping = true;
    this.confirmResult = null;
    this.popconfirmResult = null;
    this.sliderVal = 40;
    this.sliderStep = 30;
    this.sliderRange = [20, 70];
    this.priceRange = [10, 80];
    this.stepMarks = { 0: "0", 25: "25", 50: "50", 75: "75", 100: "100" };
    this.basicSel = "";
    this.searchSel = "";
    this.multiSel = [];
    this.groupSel = "";
    this.genreOptions = [
      { value: "action", label: "Action" },
      { value: "rpg", label: "RPG" },
      { value: "strategy", label: "Strategy" },
      { value: "sports", label: "Sports" },
      { value: "puzzle", label: "Puzzle" },
      { value: "horror", label: "Horror" }
    ];
    this.gameOptions = [
      { value: "elden-ring", label: "Elden Ring" },
      { value: "cyberpunk", label: "Cyberpunk 2077" },
      { value: "gta6", label: "GTA VI" },
      { value: "zelda-totk", label: "Zelda: TotK" },
      { value: "baldurs-gate", label: "Baldur's Gate 3" },
      { value: "diablo4", label: "Diablo IV" },
      { value: "starfield", label: "Starfield" },
      { value: "hogwarts", label: "Hogwarts Legacy" }
    ];
    this.tagOptions = [
      { value: "open-world", label: "Open World" },
      { value: "multiplayer", label: "Multiplayer" },
      { value: "story-rich", label: "Story Rich" },
      { value: "indie", label: "Indie" },
      { value: "co-op", label: "Co-op" },
      { value: "pvp", label: "PvP" },
      { value: "4k", label: "4K Ready" }
    ];
    this.groupedOptions = [
      { value: "pc", label: "PC", group: "Desktop" },
      { value: "mac", label: "macOS", group: "Desktop" },
      { value: "ps5", label: "PlayStation 5", group: "Console" },
      { value: "xbox-x", label: "Xbox Series X", group: "Console" },
      { value: "switch", label: "Nintendo Switch", group: "Handheld" },
      { value: "steam", label: "Steam Deck", group: "Handheld" }
    ];
  }
  openBasicModal() {
    this.modalSvc.open(this.basicModalTpl, { title: "Game Details", width: "480px" });
  }
  openNoFooterModal() {
    this.modalSvc.open(this.noFooterTpl, { title: "Info", footer: null });
  }
  openCustomFooterModal() {
    this.modalSvc.open(this.customFooterTpl, { title: "Save Changes?", footer: this.customFooterBtnsTpl });
  }
  loadingMsg() {
    const id = this.msg.loading("Uploading save file\u2026", 0);
    setTimeout(() => {
      this.msg.dismiss(id);
      this.msg.success("Save file uploaded!");
    }, 2500);
  }
  confirmDefault() {
    return __async(this, null, function* () {
      this.confirmResult = null;
      this.confirmResult = yield this.confirm.confirm({
        title: "Confirm Action",
        description: "Are you sure you want to proceed?",
        okText: "Confirm",
        cancelText: "Cancel"
      });
    });
  }
  confirmDanger() {
    return __async(this, null, function* () {
      this.confirmResult = null;
      this.confirmResult = yield this.confirm.confirm({
        title: "Delete Item",
        description: "This action cannot be undone.",
        type: "danger",
        okText: "Delete",
        cancelText: "Keep"
      });
      if (this.confirmResult)
        this.msg.success("Item deleted.");
    });
  }
  confirmWarning() {
    return __async(this, null, function* () {
      this.confirmResult = null;
      this.confirmResult = yield this.confirm.confirm({
        title: "Clear Cart",
        description: "All items will be removed from your cart.",
        type: "warning",
        okText: "Clear",
        cancelText: "Cancel"
      });
    });
  }
  onPopconfirm(confirmed, variant) {
    this.popconfirmResult = { confirmed, variant };
  }
  static {
    this.\u0275fac = function UiShowcaseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UiShowcaseComponent)(\u0275\u0275directiveInject(ModalService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ConfirmService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UiShowcaseComponent, selectors: [["app-ui-showcase"]], viewQuery: function UiShowcaseComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
        \u0275\u0275viewQuery(_c3, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.basicModalTpl = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.noFooterTpl = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.customFooterTpl = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.customFooterBtnsTpl = _t.first);
      }
    }, decls: 174, vars: 57, consts: [["basicModalTpl", ""], ["noFooterTpl", ""], ["customFooterTpl", ""], ["customFooterBtnsTpl", ""], [1, "showcase-root"], [1, "sc-page-title"], [1, "fas", "fa-layer-group"], [1, "sc-page-sub"], [1, "sc-section"], [1, "sc-sec-title"], [1, "fas", "fa-window-restore"], [1, "sc-row"], [1, "sc-btn", 3, "click"], [1, "sc-btn", "sc-btn-purple", 3, "click"], [1, "sc-btn", "sc-btn-danger", 3, "click"], [1, "fas", "fa-comment-dots"], [1, "sc-btn", "sc-btn-success", 3, "click"], [1, "sc-btn", "sc-btn-warning", 3, "click"], [1, "sc-btn", "sc-btn-muted", 3, "click"], [1, "fas", "fa-circle-question"], ["class", "sc-result", 4, "ngIf"], ["appPopconfirm", "Save changes?", "popDescription", "Your current progress will be saved.", "popOkText", "Save", "popCancelText", "Discard", 1, "sc-btn", 3, "popConfirm", "popCancel"], ["appPopconfirm", "Delete this item?", "popDescription", "This action cannot be undone.", "popType", "danger", "popOkText", "Delete", "popPlacement", "top", 1, "sc-btn", "sc-btn-danger", 3, "popConfirm", "popCancel"], ["appPopconfirm", "Proceed with caution?", "popDescription", "This may affect other users.", "popType", "warning", "popPlacement", "bottom", 1, "sc-btn", "sc-btn-warning", 3, "popConfirm", "popCancel"], ["appPopconfirm", "Really sure?", "popType", "default", "popPlacement", "right", 1, "sc-btn", "sc-btn-purple", 3, "popConfirm", "popCancel"], [1, "fas", "fa-bell"], [1, "fas", "fa-ghost"], [1, "sc-row", 2, "align-items", "flex-start", "flex-wrap", "wrap", "gap", "24px"], [1, "skeleton-demo-card"], ["type", "image", "height", "120px", 3, "active"], [2, "padding", "12px", "display", "flex", "flex-direction", "column", "gap", "8px"], ["type", "title", 3, "active"], ["type", "text", 3, "rows", "active"], ["type", "button", 3, "active"], [2, "display", "flex", "align-items", "center", "gap", "12px"], ["type", "circle", "size", "52px", 3, "active"], [2, "display", "flex", "flex-direction", "column", "gap", "8px", "flex", "1"], ["type", "title", "width", "60%", 3, "active"], [1, "sc-row", 2, "margin-top", "14px"], [1, "fas", "fa-spinner"], [1, "sc-row", 2, "align-items", "flex-start", "gap", "32px", "flex-wrap", "wrap"], [1, "spin-demo-box"], [1, "sc-label"], ["size", "sm", "tip", ""], ["size", "md", "tip", "Loading..."], ["size", "lg", "tip", "Please wait"], [2, "flex", "1", "min-width", "200px"], ["size", "md", "tip", "Syncing...", 3, "hasContent", "spinning"], [1, "spin-content-demo"], [2, "color", "#5a5e7a"], [1, "sc-btn", 2, "margin-top", "10px", 3, "click"], [1, "fas", "fa-sliders"], [1, "sc-slider-grid"], [1, "sc-slider-row"], [3, "ngModelChange", "ngModel", "min", "max", "showBounds"], [3, "ngModelChange", "ngModel", "min", "max", "step", "showBounds", "marks"], [3, "ngModelChange", "ngModel", "range", "min", "max", "showBounds"], [3, "ngModelChange", "ngModel", "range", "min", "max", "step", "showBounds"], [1, "fas", "fa-chevron-down"], [1, "sc-select-grid"], [1, "sc-field"], ["placeholder", "Pick a genre", 3, "ngModelChange", "options", "ngModel"], ["placeholder", "Search game...", 3, "ngModelChange", "options", "ngModel", "searchable"], [1, "sc-hint"], ["placeholder", "Choose tags...", 3, "ngModelChange", "options", "ngModel", "multiple", "searchable"], ["placeholder", "Choose platform...", 3, "ngModelChange", "options", "ngModel"], [1, "sc-result"], [2, "color", "#5a5e7a", "font-weight", "400"], [2, "color", "#5a5e7a", "margin-top", "8px", "font-size", "0.85rem"]], template: function UiShowcaseComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 4)(1, "h1", 5);
        \u0275\u0275element(2, "i", 6);
        \u0275\u0275text(3, " UI Components ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 7);
        \u0275\u0275text(5, "A live showcase of all shared UI components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "section", 8)(7, "h2", 9);
        \u0275\u0275element(8, "i", 10);
        \u0275\u0275text(9, " Modal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 11)(11, "button", 12);
        \u0275\u0275listener("click", function UiShowcaseComponent_Template_button_click_11_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openBasicModal());
        });
        \u0275\u0275text(12, "Basic Modal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 13);
        \u0275\u0275listener("click", function UiShowcaseComponent_Template_button_click_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openNoFooterModal());
        });
        \u0275\u0275text(14, "No Footer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 14);
        \u0275\u0275listener("click", function UiShowcaseComponent_Template_button_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openCustomFooterModal());
        });
        \u0275\u0275text(16, "Custom Footer");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "section", 8)(18, "h2", 9);
        \u0275\u0275element(19, "i", 15);
        \u0275\u0275text(20, " Message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 11)(22, "button", 16);
        \u0275\u0275listener("click", function UiShowcaseComponent_Template_button_click_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.msg.success("Operation completed successfully!"));
        });
        \u0275\u0275text(23, "Success");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 14);
        \u0275\u0275listener("click", function UiShowcaseComponent_Template_button_click_24_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.msg.error("Something went wrong. Please try again."));
        });
        \u0275\u0275text(25, "Error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 17);
        \u0275\u0275listener("click", function UiShowcaseComponent_Template_button_click_26_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.msg.warning("Your session is about to expire."));
        });
        \u0275\u0275text(27, "Warning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 12);
        \u0275\u0275listener("click", function UiShowcaseComponent_Template_button_click_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.msg.info("A new update is available."));
        });
        \u0275\u0275text(29, "Info");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 18);
        \u0275\u0275listener("click", function UiShowcaseComponent_Template_button_click_30_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.loadingMsg());
        });
        \u0275\u0275text(31, "Loading");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "section", 8)(33, "h2", 9);
        \u0275\u0275element(34, "i", 19);
        \u0275\u0275text(35, " Confirm");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 11)(37, "button", 12);
        \u0275\u0275listener("click", function UiShowcaseComponent_Template_button_click_37_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.confirmDefault());
        });
        \u0275\u0275text(38, "Default confirm");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 14);
        \u0275\u0275listener("click", function UiShowcaseComponent_Template_button_click_39_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.confirmDanger());
        });
        \u0275\u0275text(40, "Delete confirm");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "button", 17);
        \u0275\u0275listener("click", function UiShowcaseComponent_Template_button_click_41_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.confirmWarning());
        });
        \u0275\u0275text(42, "Warning confirm");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(43, UiShowcaseComponent_p_43_Template, 4, 5, "p", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "section", 8)(45, "h2", 9);
        \u0275\u0275element(46, "i", 15);
        \u0275\u0275text(47, " Popconfirm");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 11)(49, "button", 21);
        \u0275\u0275listener("popConfirm", function UiShowcaseComponent_Template_button_popConfirm_49_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPopconfirm(true, "default"));
        })("popCancel", function UiShowcaseComponent_Template_button_popCancel_49_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPopconfirm(false, "default"));
        });
        \u0275\u0275text(50, " Default ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "button", 22);
        \u0275\u0275listener("popConfirm", function UiShowcaseComponent_Template_button_popConfirm_51_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPopconfirm(true, "danger"));
        })("popCancel", function UiShowcaseComponent_Template_button_popCancel_51_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPopconfirm(false, "danger"));
        });
        \u0275\u0275text(52, " Danger (top) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "button", 23);
        \u0275\u0275listener("popConfirm", function UiShowcaseComponent_Template_button_popConfirm_53_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPopconfirm(true, "warning"));
        })("popCancel", function UiShowcaseComponent_Template_button_popCancel_53_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPopconfirm(false, "warning"));
        });
        \u0275\u0275text(54, " Warning (bottom) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "button", 24);
        \u0275\u0275listener("popConfirm", function UiShowcaseComponent_Template_button_popConfirm_55_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPopconfirm(true, "right"));
        })("popCancel", function UiShowcaseComponent_Template_button_popCancel_55_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPopconfirm(false, "right"));
        });
        \u0275\u0275text(56, " Right placement ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(57, UiShowcaseComponent_p_57_Template, 6, 6, "p", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "section", 8)(59, "h2", 9);
        \u0275\u0275element(60, "i", 25);
        \u0275\u0275text(61, " Notification");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "div", 11)(63, "button", 16);
        \u0275\u0275listener("click", function UiShowcaseComponent_Template_button_click_63_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.notif.success("Purchase Complete", "Your order #4821 has been placed."));
        });
        \u0275\u0275text(64, "Success");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "button", 14);
        \u0275\u0275listener("click", function UiShowcaseComponent_Template_button_click_65_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.notif.error("Payment Failed", "Card declined. Please check your details."));
        });
        \u0275\u0275text(66, "Error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "button", 17);
        \u0275\u0275listener("click", function UiShowcaseComponent_Template_button_click_67_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.notif.warning("Stock Low", "Only 2 copies of this game remain."));
        });
        \u0275\u0275text(68, "Warning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "button", 12);
        \u0275\u0275listener("click", function UiShowcaseComponent_Template_button_click_69_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.notif.info("New Achievement", "You unlocked the Early Bird badge."));
        });
        \u0275\u0275text(70, "Info");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(71, "section", 8)(72, "h2", 9);
        \u0275\u0275element(73, "i", 26);
        \u0275\u0275text(74, " Skeleton");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "div", 27)(76, "div", 28);
        \u0275\u0275element(77, "app-skeleton", 29);
        \u0275\u0275elementStart(78, "div", 30);
        \u0275\u0275element(79, "app-skeleton", 31)(80, "app-skeleton", 32)(81, "app-skeleton", 33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "div", 34);
        \u0275\u0275element(83, "app-skeleton", 35);
        \u0275\u0275elementStart(84, "div", 36);
        \u0275\u0275element(85, "app-skeleton", 37)(86, "app-skeleton", 32);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "div", 38)(88, "button", 12);
        \u0275\u0275listener("click", function UiShowcaseComponent_Template_button_click_88_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.skeletonActive = !ctx.skeletonActive);
        });
        \u0275\u0275text(89);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(90, "section", 8)(91, "h2", 9);
        \u0275\u0275element(92, "i", 39);
        \u0275\u0275text(93, " Spin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "div", 40)(95, "div", 41)(96, "p", 42);
        \u0275\u0275text(97, "SM");
        \u0275\u0275elementEnd();
        \u0275\u0275element(98, "app-spin", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "div", 41)(100, "p", 42);
        \u0275\u0275text(101, "MD");
        \u0275\u0275elementEnd();
        \u0275\u0275element(102, "app-spin", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "div", 41)(104, "p", 42);
        \u0275\u0275text(105, "LG");
        \u0275\u0275elementEnd();
        \u0275\u0275element(106, "app-spin", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div", 46)(108, "p", 42);
        \u0275\u0275text(109, "Wrapper mode");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "app-spin", 47)(111, "div", 48)(112, "p");
        \u0275\u0275text(113, "Game data is loaded here.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "p", 49);
        \u0275\u0275text(115, "Score: 18,450 pts");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(116, "button", 50);
        \u0275\u0275listener("click", function UiShowcaseComponent_Template_button_click_116_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.spinWrapping = !ctx.spinWrapping);
        });
        \u0275\u0275text(117);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(118, "section", 8)(119, "h2", 9);
        \u0275\u0275element(120, "i", 51);
        \u0275\u0275text(121, " Slider");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "div", 52)(123, "div", 53)(124, "span", 42);
        \u0275\u0275text(125);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "app-slider", 54);
        \u0275\u0275twoWayListener("ngModelChange", function UiShowcaseComponent_Template_app_slider_ngModelChange_126_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.sliderVal, $event) || (ctx.sliderVal = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(127, "div", 53)(128, "span", 42);
        \u0275\u0275text(129);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "app-slider", 55);
        \u0275\u0275twoWayListener("ngModelChange", function UiShowcaseComponent_Template_app_slider_ngModelChange_130_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.sliderStep, $event) || (ctx.sliderStep = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(131, "div", 53)(132, "span", 42);
        \u0275\u0275text(133);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "app-slider", 56);
        \u0275\u0275twoWayListener("ngModelChange", function UiShowcaseComponent_Template_app_slider_ngModelChange_134_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.sliderRange, $event) || (ctx.sliderRange = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(135, "div", 53)(136, "span", 42);
        \u0275\u0275text(137);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "app-slider", 57);
        \u0275\u0275twoWayListener("ngModelChange", function UiShowcaseComponent_Template_app_slider_ngModelChange_138_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.priceRange, $event) || (ctx.priceRange = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(139, "section", 8)(140, "h2", 9);
        \u0275\u0275element(141, "i", 58);
        \u0275\u0275text(142, " Select");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "div", 59)(144, "div", 60)(145, "label", 42);
        \u0275\u0275text(146);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "app-select", 61);
        \u0275\u0275twoWayListener("ngModelChange", function UiShowcaseComponent_Template_app_select_ngModelChange_147_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.basicSel, $event) || (ctx.basicSel = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(148, "div", 60)(149, "label", 42);
        \u0275\u0275text(150, "Searchable");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "app-select", 62);
        \u0275\u0275twoWayListener("ngModelChange", function UiShowcaseComponent_Template_app_select_ngModelChange_151_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.searchSel, $event) || (ctx.searchSel = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "span", 63);
        \u0275\u0275text(153);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(154, "div", 60)(155, "label", 42);
        \u0275\u0275text(156, "Multiple tags");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "app-select", 64);
        \u0275\u0275twoWayListener("ngModelChange", function UiShowcaseComponent_Template_app_select_ngModelChange_157_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.multiSel, $event) || (ctx.multiSel = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "span", 63);
        \u0275\u0275text(159);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(160, "div", 60)(161, "label", 42);
        \u0275\u0275text(162, "Grouped");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "app-select", 65);
        \u0275\u0275twoWayListener("ngModelChange", function UiShowcaseComponent_Template_app_select_ngModelChange_163_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.groupSel, $event) || (ctx.groupSel = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "span", 63);
        \u0275\u0275text(165);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(166, UiShowcaseComponent_ng_template_166_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(168, UiShowcaseComponent_ng_template_168_Template, 5, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(170, UiShowcaseComponent_ng_template_170_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(172, UiShowcaseComponent_ng_template_172_Template, 4, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(43);
        \u0275\u0275property("ngIf", ctx.confirmResult !== null);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", ctx.popconfirmResult !== null);
        \u0275\u0275advance(20);
        \u0275\u0275property("active", ctx.skeletonActive);
        \u0275\u0275advance(2);
        \u0275\u0275property("active", ctx.skeletonActive);
        \u0275\u0275advance();
        \u0275\u0275property("rows", 2)("active", ctx.skeletonActive);
        \u0275\u0275advance();
        \u0275\u0275property("active", ctx.skeletonActive);
        \u0275\u0275advance(2);
        \u0275\u0275property("active", ctx.skeletonActive);
        \u0275\u0275advance(2);
        \u0275\u0275property("active", ctx.skeletonActive);
        \u0275\u0275advance();
        \u0275\u0275property("rows", 1)("active", ctx.skeletonActive);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" Toggle (", ctx.skeletonActive ? "Loading" : "Loaded", ") ");
        \u0275\u0275advance(21);
        \u0275\u0275property("hasContent", true)("spinning", ctx.spinWrapping);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ctx.spinWrapping ? "Stop" : "Start", " Spinning ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("Basic (", ctx.sliderVal, ")");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.sliderVal);
        \u0275\u0275property("min", 0)("max", 100)("showBounds", true);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("Step 10 (", ctx.sliderStep, ")");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.sliderStep);
        \u0275\u0275property("min", 0)("max", 100)("step", 10)("showBounds", true)("marks", ctx.stepMarks);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("Range (", ctx.sliderRange[0], " \u2013 ", ctx.sliderRange[1], ")");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.sliderRange);
        \u0275\u0275property("range", true)("min", 0)("max", 200)("showBounds", true);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("Price filter (", ctx.priceRange[0], " \u2013 ", ctx.priceRange[1], ")");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.priceRange);
        \u0275\u0275property("range", true)("min", 0)("max", 500)("step", 5)("showBounds", true);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("Basic (", ctx.basicSel, ")");
        \u0275\u0275advance();
        \u0275\u0275property("options", ctx.genreOptions);
        \u0275\u0275twoWayProperty("ngModel", ctx.basicSel);
        \u0275\u0275advance(4);
        \u0275\u0275property("options", ctx.gameOptions);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchSel);
        \u0275\u0275property("searchable", true);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Selected: ", ctx.searchSel || "\u2014", "");
        \u0275\u0275advance(4);
        \u0275\u0275property("options", ctx.tagOptions);
        \u0275\u0275twoWayProperty("ngModel", ctx.multiSel);
        \u0275\u0275property("multiple", true)("searchable", true);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Selected: ", ctx.multiSel.join(", ") || "\u2014", "");
        \u0275\u0275advance(4);
        \u0275\u0275property("options", ctx.groupedOptions);
        \u0275\u0275twoWayProperty("ngModel", ctx.groupSel);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Selected: ", ctx.groupSel || "\u2014", "");
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      FormsModule,
      NgControlStatus,
      NgModel,
      SkeletonComponent,
      SpinComponent,
      SliderComponent,
      SelectComponent,
      PopconfirmDirective
    ], styles: ["\n\n.showcase-root[_ngcontent-%COMP%] {\n  max-width: 860px;\n  margin: 0 auto;\n  padding: 40px 24px 80px;\n}\n.sc-page-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 6px;\n}\n.sc-page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4f6ef7;\n}\n.sc-page-sub[_ngcontent-%COMP%] {\n  color: #5a5e7a;\n  margin-bottom: 40px;\n}\n.sc-section[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 16px;\n  padding: 24px;\n  margin-bottom: 24px;\n}\n.sc-sec-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #a0a4c0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  font-size: 0.82rem;\n}\n.sc-sec-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4f6ef7;\n}\n.sc-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n}\n.sc-btn[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border-radius: 10px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.18s;\n  background: rgba(79, 110, 247, 0.18);\n  color: #a0b4ff;\n  border: 1px solid rgba(79, 110, 247, 0.25);\n}\n.sc-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.3);\n  color: #fff;\n}\n.sc-btn-success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: #4ade80;\n  border-color: rgba(34, 197, 94, 0.25);\n}\n.sc-btn-success[_ngcontent-%COMP%]:hover {\n  background: rgba(34, 197, 94, 0.3);\n}\n.sc-btn-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n  border-color: rgba(239, 68, 68, 0.25);\n}\n.sc-btn-danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.3);\n}\n.sc-btn-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #fbbf24;\n  border-color: rgba(245, 158, 11, 0.25);\n}\n.sc-btn-warning[_ngcontent-%COMP%]:hover {\n  background: rgba(245, 158, 11, 0.3);\n}\n.sc-btn-purple[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.18);\n  color: #c4b5fd;\n  border-color: rgba(139, 92, 246, 0.3);\n}\n.sc-btn-purple[_ngcontent-%COMP%]:hover {\n  background: rgba(139, 92, 246, 0.35);\n}\n.sc-btn-muted[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  color: #a0a4c0;\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.sc-btn-muted[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n.sc-result[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  font-size: 0.88rem;\n  color: #a0a4c0;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.skeleton-demo-card[_ngcontent-%COMP%] {\n  width: 200px;\n  background: #161929;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.spin-demo-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.spin-content-demo[_ngcontent-%COMP%] {\n  background: #161929;\n  border-radius: 12px;\n  padding: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.spin-content-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #c8ccdf;\n  font-size: 0.9rem;\n}\n.sc-slider-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.sc-slider-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.sc-select-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 20px;\n}\n.sc-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.sc-hint[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #5a5e7a;\n}\n.sc-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #a0a4c0;\n  font-weight: 500;\n}\ncode[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.15);\n  color: #a0b4ff;\n  padding: 1px 6px;\n  border-radius: 4px;\n  font-size: 0.82rem;\n}\n/*# sourceMappingURL=ui-showcase.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiShowcaseComponent, [{
    type: Component,
    args: [{ selector: "app-ui-showcase", standalone: true, imports: [
      CommonModule,
      FormsModule,
      SkeletonComponent,
      SpinComponent,
      SliderComponent,
      SelectComponent,
      PopconfirmDirective
    ], template: `
    <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
         UI Component Showcase
    \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="showcase-root">
      <h1 class="sc-page-title">
        <i class="fas fa-layer-group"></i>
        UI Components
      </h1>
      <p class="sc-page-sub">A live showcase of all shared UI components.</p>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MODAL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <section class="sc-section">
        <h2 class="sc-sec-title"><i class="fas fa-window-restore"></i> Modal</h2>
        <div class="sc-row">
          <button class="sc-btn" (click)="openBasicModal()">Basic Modal</button>
          <button class="sc-btn sc-btn-purple" (click)="openNoFooterModal()">No Footer</button>
          <button class="sc-btn sc-btn-danger" (click)="openCustomFooterModal()">Custom Footer</button>
        </div>
      </section>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MESSAGE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <section class="sc-section">
        <h2 class="sc-sec-title"><i class="fas fa-comment-dots"></i> Message</h2>
        <div class="sc-row">
          <button class="sc-btn sc-btn-success"  (click)="msg.success('Operation completed successfully!')">Success</button>
          <button class="sc-btn sc-btn-danger"   (click)="msg.error('Something went wrong. Please try again.')">Error</button>
          <button class="sc-btn sc-btn-warning"  (click)="msg.warning('Your session is about to expire.')">Warning</button>
          <button class="sc-btn"                 (click)="msg.info('A new update is available.')">Info</button>
          <button class="sc-btn sc-btn-muted"    (click)="loadingMsg()">Loading</button>
        </div>
      </section>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 CONFIRM \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <section class="sc-section">
        <h2 class="sc-sec-title"><i class="fas fa-circle-question"></i> Confirm</h2>
        <div class="sc-row">
          <button class="sc-btn" (click)="confirmDefault()">Default confirm</button>
          <button class="sc-btn sc-btn-danger" (click)="confirmDanger()">Delete confirm</button>
          <button class="sc-btn sc-btn-warning" (click)="confirmWarning()">Warning confirm</button>
        </div>
        <p class="sc-result" *ngIf="confirmResult !== null">
          Result: <strong [class.text-success]="confirmResult" [class.text-danger]="!confirmResult">
            {{ confirmResult ? 'Confirmed \u2713' : 'Cancelled \u2717' }}
          </strong>
        </p>
      </section>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 POPCONFIRM \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <section class="sc-section">
        <h2 class="sc-sec-title"><i class="fas fa-comment-dots"></i> Popconfirm</h2>
        <div class="sc-row">

          <button class="sc-btn"
            appPopconfirm="Save changes?"
            popDescription="Your current progress will be saved."
            popOkText="Save"
            popCancelText="Discard"
            (popConfirm)="onPopconfirm(true, 'default')"
            (popCancel)="onPopconfirm(false, 'default')">
            Default
          </button>

          <button class="sc-btn sc-btn-danger"
            appPopconfirm="Delete this item?"
            popDescription="This action cannot be undone."
            popType="danger"
            popOkText="Delete"
            popPlacement="top"
            (popConfirm)="onPopconfirm(true, 'danger')"
            (popCancel)="onPopconfirm(false, 'danger')">
            Danger (top)
          </button>

          <button class="sc-btn sc-btn-warning"
            appPopconfirm="Proceed with caution?"
            popDescription="This may affect other users."
            popType="warning"
            popPlacement="bottom"
            (popConfirm)="onPopconfirm(true, 'warning')"
            (popCancel)="onPopconfirm(false, 'warning')">
            Warning (bottom)
          </button>

          <button class="sc-btn sc-btn-purple"
            appPopconfirm="Really sure?"
            popType="default"
            popPlacement="right"
            (popConfirm)="onPopconfirm(true, 'right')"
            (popCancel)="onPopconfirm(false, 'right')">
            Right placement
          </button>

        </div>
        <p class="sc-result" *ngIf="popconfirmResult !== null">
          Result: <strong [class.text-success]="popconfirmResult.confirmed" [class.text-danger]="!popconfirmResult.confirmed">
            {{ popconfirmResult.confirmed ? '\u2713 Confirmed' : '\u2717 Cancelled' }}
            <span style="color:#5a5e7a; font-weight:400;"> \u2014 {{ popconfirmResult.variant }}</span>
          </strong>
        </p>
      </section>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 NOTIFICATION \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <section class="sc-section">
        <h2 class="sc-sec-title"><i class="fas fa-bell"></i> Notification</h2>
        <div class="sc-row">
          <button class="sc-btn sc-btn-success"
            (click)="notif.success('Purchase Complete', 'Your order #4821 has been placed.')">Success</button>
          <button class="sc-btn sc-btn-danger"
            (click)="notif.error('Payment Failed', 'Card declined. Please check your details.')">Error</button>
          <button class="sc-btn sc-btn-warning"
            (click)="notif.warning('Stock Low', 'Only 2 copies of this game remain.')">Warning</button>
          <button class="sc-btn"
            (click)="notif.info('New Achievement', 'You unlocked the Early Bird badge.')">Info</button>
        </div>
      </section>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SKELETON \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <section class="sc-section">
        <h2 class="sc-sec-title"><i class="fas fa-ghost"></i> Skeleton</h2>
        <div class="sc-row" style="align-items:flex-start; flex-wrap:wrap; gap:24px;">

          <!-- Card skeleton -->
          <div class="skeleton-demo-card">
            <app-skeleton type="image" height="120px" [active]="skeletonActive"></app-skeleton>
            <div style="padding: 12px; display:flex; flex-direction:column; gap:8px;">
              <app-skeleton type="title" [active]="skeletonActive"></app-skeleton>
              <app-skeleton type="text" [rows]="2" [active]="skeletonActive"></app-skeleton>
              <app-skeleton type="button" [active]="skeletonActive"></app-skeleton>
            </div>
          </div>

          <!-- Avatar skeleton -->
          <div style="display:flex; align-items:center; gap:12px;">
            <app-skeleton type="circle" size="52px" [active]="skeletonActive"></app-skeleton>
            <div style="display:flex; flex-direction:column; gap:8px; flex:1;">
              <app-skeleton type="title" width="60%" [active]="skeletonActive"></app-skeleton>
              <app-skeleton type="text" [rows]="1" [active]="skeletonActive"></app-skeleton>
            </div>
          </div>
        </div>
        <div class="sc-row" style="margin-top:14px;">
          <button class="sc-btn" (click)="skeletonActive = !skeletonActive">
            Toggle ({{ skeletonActive ? 'Loading' : 'Loaded' }})
          </button>
        </div>
      </section>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SPIN \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <section class="sc-section">
        <h2 class="sc-sec-title"><i class="fas fa-spinner"></i> Spin</h2>
        <div class="sc-row" style="align-items:flex-start; gap:32px; flex-wrap:wrap;">

          <!-- Standalone sizes -->
          <div class="spin-demo-box">
            <p class="sc-label">SM</p>
            <app-spin size="sm" tip=""></app-spin>
          </div>
          <div class="spin-demo-box">
            <p class="sc-label">MD</p>
            <app-spin size="md" tip="Loading..."></app-spin>
          </div>
          <div class="spin-demo-box">
            <p class="sc-label">LG</p>
            <app-spin size="lg" tip="Please wait"></app-spin>
          </div>

          <!-- Wrapper mode -->
          <div style="flex:1; min-width:200px;">
            <p class="sc-label">Wrapper mode</p>
            <app-spin [hasContent]="true" [spinning]="spinWrapping" size="md" tip="Syncing...">
              <div class="spin-content-demo">
                <p>Game data is loaded here.</p>
                <p style="color:#5a5e7a;">Score: 18,450 pts</p>
              </div>
            </app-spin>
            <button class="sc-btn" style="margin-top:10px;"
              (click)="spinWrapping = !spinWrapping">
              {{ spinWrapping ? 'Stop' : 'Start' }} Spinning
            </button>
          </div>
        </div>
      </section>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SLIDER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <section class="sc-section">
        <h2 class="sc-sec-title"><i class="fas fa-sliders"></i> Slider</h2>
        <div class="sc-slider-grid">

          <div class="sc-slider-row">
            <span class="sc-label">Basic ({{ sliderVal }})</span>
            <app-slider [(ngModel)]="sliderVal" [min]="0" [max]="100" [showBounds]="true"></app-slider>
          </div>

          <div class="sc-slider-row">
            <span class="sc-label">Step 10 ({{ sliderStep }})</span>
            <app-slider [(ngModel)]="sliderStep" [min]="0" [max]="100" [step]="10" [showBounds]="true"
              [marks]="stepMarks"></app-slider>
          </div>

          <div class="sc-slider-row">
            <span class="sc-label">Range ({{ sliderRange[0] }} \u2013 {{ sliderRange[1] }})</span>
            <app-slider [(ngModel)]="sliderRange" [range]="true" [min]="0" [max]="200" [showBounds]="true"></app-slider>
          </div>

          <div class="sc-slider-row">
            <span class="sc-label">Price filter ({{ priceRange[0] }} \u2013 {{ priceRange[1] }})</span>
            <app-slider [(ngModel)]="priceRange" [range]="true" [min]="0" [max]="500" [step]="5" [showBounds]="true"></app-slider>
          </div>
        </div>
      </section>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SELECT \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <section class="sc-section">
        <h2 class="sc-sec-title"><i class="fas fa-chevron-down"></i> Select</h2>
        <div class="sc-select-grid">

          <div class="sc-field">
            <label class="sc-label">Basic ({{ basicSel }})</label>
            <app-select [options]="genreOptions" placeholder="Pick a genre" [(ngModel)]="basicSel"></app-select>
          </div>

          <div class="sc-field">
            <label class="sc-label">Searchable</label>
            <app-select [options]="gameOptions" placeholder="Search game..." [(ngModel)]="searchSel"
              [searchable]="true"></app-select>
            <span class="sc-hint">Selected: {{ searchSel || '\u2014' }}</span>
          </div>

          <div class="sc-field">
            <label class="sc-label">Multiple tags</label>
            <app-select [options]="tagOptions" placeholder="Choose tags..." [(ngModel)]="multiSel"
              [multiple]="true" [searchable]="true"></app-select>
            <span class="sc-hint">Selected: {{ multiSel.join(', ') || '\u2014' }}</span>
          </div>

          <div class="sc-field">
            <label class="sc-label">Grouped</label>
            <app-select [options]="groupedOptions" placeholder="Choose platform..." [(ngModel)]="groupSel"></app-select>
            <span class="sc-hint">Selected: {{ groupSel || '\u2014' }}</span>
          </div>

        </div>
      </section>

    </div>

    <!-- \u2500\u2500 Modal templates \u2500\u2500 -->
    <ng-template #basicModalTpl>
      <p>This is a basic modal. You can put any content here \u2014 forms, images, details, etc.</p>
      <p style="color:#5a5e7a; margin-top:8px; font-size:0.85rem;">Click outside or press the \u2715 button to close.</p>
    </ng-template>

    <ng-template #noFooterTpl>
      <p>This modal has no footer. Pass <code>footer: null</code> to hide it.</p>
    </ng-template>

    <ng-template #customFooterTpl let-ctx>
      <p>This modal has a custom footer with its own buttons.</p>
    </ng-template>
    <ng-template #customFooterBtnsTpl>
      <button class="sc-btn sc-btn-muted" (click)="modalSvc.close()">Close</button>
      <button class="sc-btn sc-btn-success" (click)="modalSvc.close(); msg.success('Saved!')">Save</button>
    </ng-template>
  `, styles: ["/* angular:styles/component:scss;72e85745831dabef5b2c93445a56bfa238fc94a993678a5334c82533279b0250;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/features/ui-showcase/ui-showcase.component.ts */\n.showcase-root {\n  max-width: 860px;\n  margin: 0 auto;\n  padding: 40px 24px 80px;\n}\n.sc-page-title {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 6px;\n}\n.sc-page-title i {\n  color: #4f6ef7;\n}\n.sc-page-sub {\n  color: #5a5e7a;\n  margin-bottom: 40px;\n}\n.sc-section {\n  background: #1e2235;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 16px;\n  padding: 24px;\n  margin-bottom: 24px;\n}\n.sc-sec-title {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #a0a4c0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  font-size: 0.82rem;\n}\n.sc-sec-title i {\n  color: #4f6ef7;\n}\n.sc-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n}\n.sc-btn {\n  padding: 8px 18px;\n  border-radius: 10px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.18s;\n  background: rgba(79, 110, 247, 0.18);\n  color: #a0b4ff;\n  border: 1px solid rgba(79, 110, 247, 0.25);\n}\n.sc-btn:hover {\n  background: rgba(79, 110, 247, 0.3);\n  color: #fff;\n}\n.sc-btn-success {\n  background: rgba(34, 197, 94, 0.15);\n  color: #4ade80;\n  border-color: rgba(34, 197, 94, 0.25);\n}\n.sc-btn-success:hover {\n  background: rgba(34, 197, 94, 0.3);\n}\n.sc-btn-danger {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n  border-color: rgba(239, 68, 68, 0.25);\n}\n.sc-btn-danger:hover {\n  background: rgba(239, 68, 68, 0.3);\n}\n.sc-btn-warning {\n  background: rgba(245, 158, 11, 0.15);\n  color: #fbbf24;\n  border-color: rgba(245, 158, 11, 0.25);\n}\n.sc-btn-warning:hover {\n  background: rgba(245, 158, 11, 0.3);\n}\n.sc-btn-purple {\n  background: rgba(139, 92, 246, 0.18);\n  color: #c4b5fd;\n  border-color: rgba(139, 92, 246, 0.3);\n}\n.sc-btn-purple:hover {\n  background: rgba(139, 92, 246, 0.35);\n}\n.sc-btn-muted {\n  background: rgba(255, 255, 255, 0.06);\n  color: #a0a4c0;\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.sc-btn-muted:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n.sc-result {\n  margin-top: 14px;\n  font-size: 0.88rem;\n  color: #a0a4c0;\n}\n.text-success {\n  color: #22c55e;\n}\n.text-danger {\n  color: #ef4444;\n}\n.skeleton-demo-card {\n  width: 200px;\n  background: #161929;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.spin-demo-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.spin-content-demo {\n  background: #161929;\n  border-radius: 12px;\n  padding: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.spin-content-demo p {\n  color: #c8ccdf;\n  font-size: 0.9rem;\n}\n.sc-slider-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.sc-slider-row {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.sc-select-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 20px;\n}\n.sc-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.sc-hint {\n  font-size: 0.78rem;\n  color: #5a5e7a;\n}\n.sc-label {\n  font-size: 0.82rem;\n  color: #a0a4c0;\n  font-weight: 500;\n}\ncode {\n  background: rgba(79, 110, 247, 0.15);\n  color: #a0b4ff;\n  padding: 1px 6px;\n  border-radius: 4px;\n  font-size: 0.82rem;\n}\n/*# sourceMappingURL=ui-showcase.component.css.map */\n"] }]
  }], () => [{ type: ModalService }, { type: MessageService }, { type: NotificationService }, { type: ConfirmService }], { basicModalTpl: [{
    type: ViewChild,
    args: ["basicModalTpl"]
  }], noFooterTpl: [{
    type: ViewChild,
    args: ["noFooterTpl"]
  }], customFooterTpl: [{
    type: ViewChild,
    args: ["customFooterTpl"]
  }], customFooterBtnsTpl: [{
    type: ViewChild,
    args: ["customFooterBtnsTpl"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UiShowcaseComponent, { className: "UiShowcaseComponent", filePath: "src/app/features/ui-showcase/ui-showcase.component.ts", lineNumber: 376 });
})();
export {
  UiShowcaseComponent
};
//# sourceMappingURL=chunk-FSRXLG6C.js.map
