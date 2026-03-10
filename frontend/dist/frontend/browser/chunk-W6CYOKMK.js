import {
  CommonModule,
  Component,
  Input,
  NgForOf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate
} from "./chunk-IXUP4X5N.js";

// src/app/shared/components/star-rating/star-rating.component.ts
function StarRatingComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275element(1, "i", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("filled", star_r1 <= ctx_r1.rating)("half", ctx_r1.isHalf(star_r1));
  }
}
var StarRatingComponent = class _StarRatingComponent {
  constructor() {
    this.rating = 0;
    this.stars = [1, 2, 3, 4, 5];
  }
  isHalf(star) {
    return this.rating > star - 1 && this.rating < star;
  }
  static {
    this.\u0275fac = function StarRatingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StarRatingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StarRatingComponent, selectors: [["app-star-rating"]], inputs: { rating: "rating" }, decls: 2, vars: 1, consts: [[1, "stars"], ["class", "star", 3, "filled", "half", 4, "ngFor", "ngForOf"], [1, "star"], [1, "fas", "fa-star"]], template: function StarRatingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, StarRatingComponent_span_1_Template, 2, 4, "span", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.stars);
      }
    }, dependencies: [CommonModule, NgForOf], styles: ["\n\n.stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n}\n.star[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #3a3e58;\n  transition: color 0.2s;\n}\n.star.filled[_ngcontent-%COMP%] {\n  color: #F59E0B;\n}\n.star.half[_ngcontent-%COMP%] {\n  color: #F59E0B;\n  opacity: 0.55;\n}\n/*# sourceMappingURL=star-rating.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarRatingComponent, [{
    type: Component,
    args: [{ selector: "app-star-rating", standalone: true, imports: [CommonModule], template: `
    <div class="stars">
      <span *ngFor="let star of stars" class="star" [class.filled]="star <= rating" [class.half]="isHalf(star)">
        <i class="fas fa-star"></i>
      </span>
    </div>
  `, styles: ["/* angular:styles/component:scss;5941d762367423da34661f411b980687ea4ae4e91f77ccc255fe51fd7c5720b9;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/shared/components/star-rating/star-rating.component.ts */\n.stars {\n  display: flex;\n  gap: 2px;\n}\n.star {\n  font-size: 0.85rem;\n  color: #3a3e58;\n  transition: color 0.2s;\n}\n.star.filled {\n  color: #F59E0B;\n}\n.star.half {\n  color: #F59E0B;\n  opacity: 0.55;\n}\n/*# sourceMappingURL=star-rating.component.css.map */\n"] }]
  }], null, { rating: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StarRatingComponent, { className: "StarRatingComponent", filePath: "src/app/shared/components/star-rating/star-rating.component.ts", lineNumber: 22 });
})();

export {
  StarRatingComponent
};
//# sourceMappingURL=chunk-W6CYOKMK.js.map
