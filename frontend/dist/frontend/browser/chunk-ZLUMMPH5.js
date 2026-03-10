import {
  ProductCardComponent
} from "./chunk-5HJHMR5C.js";
import {
  CategoryService
} from "./chunk-SVTSZWE5.js";
import {
  SelectComponent
} from "./chunk-7LUADATD.js";
import "./chunk-W6CYOKMK.js";
import {
  WishlistService
} from "./chunk-LPERBCHH.js";
import {
  ProductService
} from "./chunk-M7BLKAAD.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-QGP2PKSJ.js";
import {
  MessageService
} from "./chunk-JLEF55SF.js";
import {
  CartService
} from "./chunk-5ZAXXMJQ.js";
import {
  AuthService
} from "./chunk-QQSXDC4N.js";
import {
  SkeletonComponent
} from "./chunk-H4WCAIWK.js";
import {
  OrderService
} from "./chunk-ZPHFXKIR.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-JDYM2Z3R.js";
import "./chunk-QLMOGZJX.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  NgForOf,
  NgIf,
  SlicePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IXUP4X5N.js";

// src/app/features/home/home.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _c1 = (a0) => ["/products", a0];
var _c2 = () => ["/products"];
var _c3 = (a0) => ({ category: a0 });
function HomeComponent_section_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 57);
  }
}
function HomeComponent_section_0_ng_container_2_div_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 83);
    \u0275\u0275element(1, "i", 84);
    \u0275\u0275text(2, " Featured");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_section_0_ng_container_2_div_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275element(1, "i", 86);
    \u0275\u0275text(2, " New");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_section_0_ng_container_2_div_2_i_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 34);
  }
  if (rf & 2) {
    const si_r2 = ctx.index;
    const p_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("filled", si_r2 < (p_r3.rating || 0))("half", si_r2 === ctx_r3.floorRating(p_r3.rating) && p_r3.rating % 1 >= 0.5);
  }
}
function HomeComponent_section_0_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275element(1, "img", 63)(2, "div", 64);
    \u0275\u0275elementStart(3, "div", 65)(4, "div", 66);
    \u0275\u0275template(5, HomeComponent_section_0_ng_container_2_div_2_span_5_Template, 3, 0, "span", 67)(6, HomeComponent_section_0_ng_container_2_div_2_span_6_Template, 3, 0, "span", 68);
    \u0275\u0275elementStart(7, "span", 69);
    \u0275\u0275element(8, "i");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h1", 70);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 71)(13, "span", 72);
    \u0275\u0275template(14, HomeComponent_section_0_ng_container_2_div_2_i_14_Template, 1, 4, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 74);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 75);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "p", 76);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 77)(24, "a", 78);
    \u0275\u0275element(25, "i", 79);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 80);
    \u0275\u0275listener("click", function HomeComponent_section_0_ng_container_2_div_2_Template_button_click_28_listener() {
      const p_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onAddToWishlist(p_r3));
    });
    \u0275\u0275element(29, "i", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 81);
    \u0275\u0275element(31, "span", 82);
    \u0275\u0275text(32, " Live Deal");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", i_r5 === ctx_r3.heroIndex);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.getProductImage(p_r3), \u0275\u0275sanitizeUrl)("alt", p_r3.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", p_r3.featured);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isNew(p_r3));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.getCategoryIconClass((p_r3.category == null ? null : p_r3.category.name) || ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (p_r3.category == null ? null : p_r3.category.name) || "Game", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(25, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((p_r3.rating || 0).toFixed(1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(19, 16, p_r3.numReviews), " reviews)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(22, 18, p_r3.description || "Experience the most immersive gameplay of the season.", 0, 110), "\u2026");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(26, _c1, p_r3._id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Get for $", \u0275\u0275pipeBind2(27, 22, p_r3.price, "1.2-2"), " ");
  }
}
function HomeComponent_section_0_ng_container_2_div_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 89);
    \u0275\u0275listener("click", function HomeComponent_section_0_ng_container_2_div_3_button_1_Template_button_click_0_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.goToSlide(i_r7));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", i_r7 === ctx_r3.heroIndex);
  }
}
function HomeComponent_section_0_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275template(1, HomeComponent_section_0_ng_container_2_div_3_button_1_Template, 1, 2, "button", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.heroProducts);
  }
}
function HomeComponent_section_0_ng_container_2_div_4_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 92);
    \u0275\u0275listener("click", function HomeComponent_section_0_ng_container_2_div_4_button_1_Template_button_click_0_listener() {
      const i_r9 = \u0275\u0275restoreView(_r8).index;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.goToSlide(i_r9));
    });
    \u0275\u0275element(1, "img", 93)(2, "div", 94);
    \u0275\u0275elementStart(3, "span", 95);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", i_r9 === ctx_r3.heroIndex);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.getProductImage(p_r10), \u0275\u0275sanitizeUrl)("alt", p_r10.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(5, 6, p_r10.name, 0, 18), "", p_r10.name.length > 18 ? "\u2026" : "", "");
  }
}
function HomeComponent_section_0_ng_container_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275template(1, HomeComponent_section_0_ng_container_2_div_4_button_1_Template, 7, 10, "button", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.heroProducts);
  }
}
function HomeComponent_section_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 58);
    \u0275\u0275template(2, HomeComponent_section_0_ng_container_2_div_2_Template, 33, 28, "div", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, HomeComponent_section_0_ng_container_2_div_3_Template, 2, 1, "div", 60)(4, HomeComponent_section_0_ng_container_2_div_4_Template, 2, 1, "div", 61);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.heroProducts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.heroProducts.length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.heroProducts.length > 1);
  }
}
function HomeComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 55);
    \u0275\u0275template(1, HomeComponent_section_0_div_1_Template, 1, 0, "div", 56)(2, HomeComponent_section_0_ng_container_2_Template, 5, 3, "ng-container", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.loadingProducts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loadingProducts && ctx_r3.heroProducts.length > 0);
  }
}
function HomeComponent_section_1_a_19_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 124);
    \u0275\u0275element(1, "i", 86);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_section_1_a_19_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 125);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r13 = ctx.$implicit;
    const p_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("filled", s_r13 <= p_r12.rating);
  }
}
function HomeComponent_section_1_a_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 107)(1, "div", 108);
    \u0275\u0275element(2, "img", 109)(3, "div", 110);
    \u0275\u0275template(4, HomeComponent_section_1_a_19_span_4_Template, 2, 0, "span", 111);
    \u0275\u0275elementStart(5, "span", 112);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 113)(9, "button", 114);
    \u0275\u0275listener("click", function HomeComponent_section_1_a_19_Template_button_click_9_listener($event) {
      const p_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      $event.preventDefault();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r3.onAddToCart(p_r12));
    });
    \u0275\u0275element(10, "i", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 116);
    \u0275\u0275listener("click", function HomeComponent_section_1_a_19_Template_button_click_11_listener($event) {
      const p_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      $event.preventDefault();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r3.onAddToWishlist(p_r12));
    });
    \u0275\u0275element(12, "i", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 117)(14, "p", 118);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 119);
    \u0275\u0275element(18, "i");
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 120)(22, "div", 121);
    \u0275\u0275template(23, HomeComponent_section_1_a_19_span_23_Template, 2, 2, "span", 122);
    \u0275\u0275elementStart(24, "span", 123);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(21, _c1, p_r12._id));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r3.getProductImage(p_r12), \u0275\u0275sanitizeUrl)("alt", p_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.isNew(p_r12));
    \u0275\u0275advance();
    \u0275\u0275classProp("arrival-price-free", p_r12.price === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r12.price === 0 ? "Free" : "$" + \u0275\u0275pipeBind2(7, 14, p_r12.price, "1.2-2"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(16, 17, p_r12.name, 0, 28), "", p_r12.name.length > 28 ? "\u2026" : "", "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r3.getCategoryIconClass((p_r12.category == null ? null : p_r12.category.name) || ""));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((p_r12.category == null ? null : p_r12.category.name) || "Game");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(23, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((p_r12.rating || 0).toFixed(1));
  }
}
function HomeComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 97)(1, "div", 98)(2, "div", 8)(3, "div", 9);
    \u0275\u0275element(4, "span", 99);
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Just Dropped");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 100);
    \u0275\u0275element(8, "i", 86);
    \u0275\u0275text(9, " NEW");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 101)(11, "span", 102);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 15);
    \u0275\u0275text(14, "See All ");
    \u0275\u0275element(15, "i", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 103)(17, "div", 104, 0);
    \u0275\u0275template(19, HomeComponent_section_1_a_19_Template, 26, 24, "a", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "div", 106);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", ctx_r3.newArrivals.length, " titles");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r3.newArrivals);
  }
}
function HomeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "div", 127)(2, "span", 128);
    \u0275\u0275element(3, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 129)(5, "span", 130);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 131);
    \u0275\u0275text(8, "Games");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(9, "div", 132);
    \u0275\u0275elementStart(10, "div", 127)(11, "span", 133);
    \u0275\u0275element(12, "i", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 129)(14, "span", 130);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 131);
    \u0275\u0275text(17, "Genres");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(18, "div", 132);
    \u0275\u0275elementStart(19, "div", 127)(20, "span", 135);
    \u0275\u0275element(21, "i", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 129)(23, "span", 130);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 131);
    \u0275\u0275text(26, "Featured");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(27, "div", 132);
    \u0275\u0275elementStart(28, "div", 127)(29, "span", 136);
    \u0275\u0275element(30, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 129)(32, "span", 130);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 131);
    \u0275\u0275text(36, "Avg Rating");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.allProducts.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.categories.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.featuredProducts.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 4, ctx_r3.avgRating, "1.1-1"));
  }
}
function HomeComponent_div_5_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 139);
    \u0275\u0275listener("click", function HomeComponent_div_5_button_5_Template_button_click_0_listener() {
      const cat_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.filterBy(cat_r16._id));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r16 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r3.activeCategory === cat_r16._id);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.getCategoryIconClass(cat_r16.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r16.name, " ");
  }
}
function HomeComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 137)(1, "div", 138)(2, "button", 139);
    \u0275\u0275listener("click", function HomeComponent_div_5_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.filterBy("all"));
    });
    \u0275\u0275element(3, "i", 140);
    \u0275\u0275text(4, " All ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, HomeComponent_div_5_button_5_Template, 3, 5, "button", 141);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r3.activeCategory === "all");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.categories);
  }
}
function HomeComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r3.filteredProducts.length, ")");
  }
}
function HomeComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143);
    \u0275\u0275element(1, "app-skeleton", 144);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("count", 8)("active", true);
  }
}
function HomeComponent_div_20_app_product_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-product-card", 146);
    \u0275\u0275listener("addToCart", function HomeComponent_div_20_app_product_card_1_Template_app_product_card_addToCart_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onAddToCart($event));
    })("addToWishlist", function HomeComponent_div_20_app_product_card_1_Template_app_product_card_addToWishlist_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onAddToWishlist($event));
    })("quickView", function HomeComponent_div_20_app_product_card_1_Template_app_product_card_quickView_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onQuickView($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r18 = ctx.$implicit;
    \u0275\u0275property("product", product_r18);
  }
}
function HomeComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143);
    \u0275\u0275template(1, HomeComponent_div_20_app_product_card_1_Template, 1, 1, "app-product-card", 145);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.filteredProducts);
  }
}
function HomeComponent_div_21_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 155);
    \u0275\u0275listener("click", function HomeComponent_div_21_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.filterBy("all"));
    });
    \u0275\u0275element(1, "i", 140);
    \u0275\u0275text(2, " View All Games ");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147)(1, "div", 148);
    \u0275\u0275element(2, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 149);
    \u0275\u0275text(4, "No games found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 150);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 151);
    \u0275\u0275template(8, HomeComponent_div_21_button_8_Template, 3, 0, "button", 152);
    \u0275\u0275elementStart(9, "a", 153);
    \u0275\u0275element(10, "i", 154);
    \u0275\u0275text(11, " Browse Store ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.activeCategory === "all" ? "Check back soon for new titles!" : "No games in this category yet.");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.activeCategory !== "all");
  }
}
function HomeComponent_ng_container_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-skeleton", 156);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("count", 6)("active", true)("round", true);
  }
}
function HomeComponent_div_73_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 164)(1, "span", 165);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 162);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 163);
    \u0275\u0275text(6, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r20 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c2))("queryParams", \u0275\u0275pureFunction1(6, _c3, cat_r20._id));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.getCategoryIconClass(cat_r20.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r20.name);
  }
}
function HomeComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157);
    \u0275\u0275template(1, HomeComponent_div_73_a_1_Template, 7, 8, "a", 158);
    \u0275\u0275elementStart(2, "a", 159)(3, "span", 160);
    \u0275\u0275element(4, "i", 161);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 162);
    \u0275\u0275text(6, "All Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 163);
    \u0275\u0275text(8, "\u203A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.categories);
  }
}
function HomeComponent_div_74_a_8_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 179);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r21 = ctx.$implicit;
    const p_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("filled", s_r21 <= p_r22.rating);
  }
}
function HomeComponent_div_74_a_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 169)(1, "div", 170);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 171);
    \u0275\u0275element(4, "img", 172);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 173)(6, "span", 174);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 175);
    \u0275\u0275template(10, HomeComponent_div_74_a_8_span_10_Template, 2, 2, "span", 176);
    \u0275\u0275elementStart(11, "span", 177);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "span", 178);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c1, p_r22._id));
    \u0275\u0275advance();
    \u0275\u0275classProp("rank-gold", i_r23 === 0)("rank-silver", i_r23 === 1)("rank-bronze", i_r23 === 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r23 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r3.getProductImage(p_r22), \u0275\u0275sanitizeUrl)("alt", p_r22.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(8, 15, p_r22.name, 0, 20), "", p_r22.name.length > 20 ? "\u2026" : "", "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(24, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", p_r22.numReviews, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(15, 19, p_r22.price, "1.2-2"), "");
  }
}
function HomeComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "span", 25);
    \u0275\u0275element(3, "i", 166);
    \u0275\u0275text(4, "Top Rated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 51);
    \u0275\u0275text(6, "See All \u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 167);
    \u0275\u0275template(8, HomeComponent_div_74_a_8_Template, 16, 25, "a", 168);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r3.topRated);
  }
}
function HomeComponent_div_75_a_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 169)(1, "div", 171);
    \u0275\u0275element(2, "img", 172);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 173)(4, "span", 174);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 181);
    \u0275\u0275element(8, "i");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 178);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r24 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c1, p_r24._id));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r3.getProductImage(p_r24), \u0275\u0275sanitizeUrl)("alt", p_r24.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(6, 9, p_r24.name, 0, 20), "", p_r24.name.length > 20 ? "\u2026" : "", "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r3.getCategoryIconClass((p_r24.category == null ? null : p_r24.category.name) || ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (p_r24.category == null ? null : p_r24.category.name) || "Game", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(12, 13, p_r24.price, "1.2-2"), "");
  }
}
function HomeComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "span", 25);
    \u0275\u0275element(3, "i", 180);
    \u0275\u0275text(4, "New Arrivals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 51);
    \u0275\u0275text(6, "See All \u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 167);
    \u0275\u0275template(8, HomeComponent_div_75_a_8_Template, 13, 18, "a", 168);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r3.newArrivals.slice(0, 4));
  }
}
var HomeComponent = class _HomeComponent {
  get activeCategoryName() {
    if (this.activeCategory === "all")
      return "All Games";
    return this.categories.find((c) => c._id === this.activeCategory)?.name || "Games";
  }
  get avgRating() {
    if (!this.allProducts.length)
      return 0;
    return this.allProducts.reduce((s, p) => s + (p.rating || 0), 0) / this.allProducts.length;
  }
  constructor(productService, categoryService, cartService, authService, wishlistService, orderService, router, msgService) {
    this.productService = productService;
    this.categoryService = categoryService;
    this.cartService = cartService;
    this.authService = authService;
    this.wishlistService = wishlistService;
    this.orderService = orderService;
    this.router = router;
    this.msgService = msgService;
    this.featuredProducts = [];
    this.allProducts = [];
    this.filteredProducts = [];
    this.newArrivals = [];
    this.topRated = [];
    this.categories = [];
    this.loadingProducts = true;
    this.loadingCategories = true;
    this.heroProducts = [];
    this.heroIndex = 0;
    this.heroProgress = 0;
    this.SLIDE_DURATION = 5e3;
    this.totalSpentWhole = "0";
    this.totalSpentCents = "00";
    this.spentTrend = 0;
    this.activeCategory = "all";
    this.sortOrder = "default";
    this.homeSortOptions = [
      { value: "default", label: "Default" },
      { value: "price-asc", label: "Price \u2191" },
      { value: "price-desc", label: "Price \u2193" },
      { value: "rating", label: "Top Rated" },
      { value: "newest", label: "Newest" }
    ];
  }
  ngOnInit() {
    this.productService.getFeaturedProducts().subscribe({
      next: (res) => {
        this.featuredProducts = res.products || [];
        this.heroProducts = this.featuredProducts.slice(0, 5);
        if (this.heroProducts.length > 1)
          this.startCarousel();
        this.loadingProducts = false;
      },
      error: () => {
        this.loadingProducts = false;
      }
    });
    this.productService.getProducts({ limit: 48 }).subscribe({
      next: (res) => {
        this.allProducts = res.products || [];
        this.computeFiltered();
        this.newArrivals = [...this.allProducts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 8);
        this.topRated = [...this.allProducts].sort((a, b) => b.rating - a.rating || b.numReviews - a.numReviews).slice(0, 5);
      },
      error: () => {
      }
    });
    this.categoryService.getCategories().subscribe({
      next: (res) => {
        this.categories = (res.categories || []).slice(0, 8);
        this.loadingCategories = false;
      },
      error: () => {
        this.loadingCategories = false;
      }
    });
    if (this.authService.isLoggedIn) {
      this.orderService.getMyOrders().subscribe({
        next: (res) => {
          const orders = res.orders || res || [];
          const completed = orders.filter((o) => o.status !== "cancelled");
          const total = completed.reduce((sum, o) => sum + (o.totalPrice || 0), 0);
          const formatted = total.toFixed(2).split(".");
          this.totalSpentWhole = Number(formatted[0]).toLocaleString();
          this.totalSpentCents = formatted[1];
          const now = /* @__PURE__ */ new Date();
          const thisMonthTotal = completed.filter((o) => {
            const d = new Date(o.createdAt);
            return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
          }).reduce((sum, o) => sum + (o.totalPrice || 0), 0);
          const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
          const lastMonthTotal = completed.filter((o) => {
            const d = new Date(o.createdAt);
            return d.getFullYear() === lastMonthDate.getFullYear() && d.getMonth() === lastMonthDate.getMonth();
          }).reduce((sum, o) => sum + (o.totalPrice || 0), 0);
          this.spentTrend = lastMonthTotal === 0 ? thisMonthTotal > 0 ? 100 : 0 : Math.round((thisMonthTotal - lastMonthTotal) / lastMonthTotal * 100);
        },
        error: () => {
        }
      });
    }
  }
  ngOnDestroy() {
    this.stopCarousel();
  }
  // ── Carousel ──
  startCarousel() {
    this.heroProgress = 0;
    this.stopCarousel();
    const step = 100 / (this.SLIDE_DURATION / 100);
    this.progressTimer = setInterval(() => {
      this.heroProgress += step;
      if (this.heroProgress >= 100) {
        this.heroProgress = 0;
        this.heroIndex = (this.heroIndex + 1) % this.heroProducts.length;
      }
    }, 100);
  }
  stopCarousel() {
    clearInterval(this.heroTimer);
    clearInterval(this.progressTimer);
  }
  prevHero() {
    this.heroIndex = (this.heroIndex - 1 + this.heroProducts.length) % this.heroProducts.length;
    this.heroProgress = 0;
  }
  nextHero() {
    this.heroIndex = (this.heroIndex + 1) % this.heroProducts.length;
    this.heroProgress = 0;
  }
  goToSlide(i) {
    this.heroIndex = i;
    this.heroProgress = 0;
  }
  // ── Filter / Sort ──
  filterBy(categoryId) {
    this.activeCategory = categoryId;
    this.computeFiltered();
  }
  onSortChange(_val) {
    this.computeFiltered();
  }
  computeFiltered() {
    let list = this.activeCategory === "all" ? [...this.allProducts] : this.allProducts.filter((p) => {
      const catId = typeof p.category === "string" ? p.category : p.category?._id;
      return catId === this.activeCategory;
    });
    switch (this.sortOrder) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
    }
    this.filteredProducts = list;
  }
  // ── Helpers ──
  getProductImage(p) {
    if (!p.image)
      return "https://placehold.co/300x180/1e2235/4f6ef7?text=Game";
    return p.image.startsWith("http") ? p.image : "http://localhost:5050" + p.image;
  }
  isNew(p) {
    return Date.now() - new Date(p.createdAt).getTime() < 7 * 24 * 60 * 60 * 1e3;
  }
  getCategoryIconClass(name) {
    const icons = {
      action: "fas fa-bolt",
      indie: "fas fa-star",
      adventure: "fas fa-map",
      rpg: "fas fa-hat-wizard",
      strategy: "fas fa-chess",
      shooter: "fas fa-crosshairs",
      casual: "fas fa-dice",
      racing: "fas fa-flag-checkered",
      puzzle: "fas fa-puzzle-piece",
      simulation: "fas fa-earth-americas",
      horror: "fas fa-skull",
      fighting: "fas fa-hand-fist",
      platform: "fas fa-gamepad",
      sports: "fas fa-futbol",
      electronics: "fas fa-mobile-screen",
      clothing: "fas fa-shirt",
      books: "fas fa-book",
      beauty: "fas fa-spa",
      food: "fas fa-pizza-slice",
      toys: "fas fa-gamepad",
      jewelry: "fas fa-ring",
      garden: "fas fa-seedling",
      automotive: "fas fa-car"
    };
    return icons[(name || "").toLowerCase()] || "fas fa-gamepad";
  }
  onAddToCart(product) {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(["/auth/login"]);
      return;
    }
    this.cartService.addToCart(product._id).subscribe({
      next: () => this.msgService.success("Added to cart!"),
      error: (err) => this.msgService.error(err.error?.message || "Failed to add to cart")
    });
  }
  onAddToWishlist(product) {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(["/auth/login"]);
      return;
    }
    this.wishlistService.addToWishlist(product._id).subscribe({
      next: () => this.msgService.success("Added to wishlist!"),
      error: (err) => this.msgService.error(err.error?.message || "Failed to add to wishlist")
    });
  }
  onQuickView(product) {
    this.router.navigate(["/products", product._id]);
  }
  floorRating(rating) {
    return Math.floor(rating || 0);
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(WishlistService), \u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 76, vars: 29, consts: [["arrivalsScroll", ""], ["class", "hero-banner", 4, "ngIf"], ["class", "arrivals-section", 4, "ngIf"], [1, "page-layout"], [1, "center-feed"], ["class", "stats-bar", 4, "ngIf"], ["class", "filter-pills-wrap", 4, "ngIf"], [1, "games-section"], [1, "section-header"], [1, "sh-left"], [1, "sh-accent"], ["class", "item-count", 4, "ngIf"], [1, "sh-right"], [1, "sort-wrap"], [3, "ngModelChange", "selectionChange", "ngModel", "options", "clearable"], ["routerLink", "/products", 1, "see-all-link"], [1, "fas", "fa-arrow-right"], ["class", "games-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "right-panel"], [1, "rp-card", "finance-card"], [1, "finance-header"], [1, "finance-header-left"], [1, "finance-avatar"], [1, "fas", "fa-wallet"], [1, "rp-title"], [1, "rp-more"], [1, "finance-body"], [1, "finance-chips"], [1, "fchip", "fchip-blue"], [1, "fas", "fa-gamepad"], [1, "fchip", "fchip-pink"], [1, "fas", "fa-heart"], [1, "fchip", "fchip-gold"], [1, "fas", "fa-star"], [1, "fchip", "fchip-add"], [1, "balance-label"], [1, "balance-val"], [1, "balance-trend"], [1, "fas"], [1, "sparkline"], ["viewBox", "0 0 160 50", "preserveAspectRatio", "none"], ["points", "0,40 30,35 60,38 90,20 120,25 160,10", "fill", "none", "stroke", "#4f6ef7", "stroke-width", "2.5"], ["points", "0,40 30,35 60,38 90,20 120,25 160,10 160,50 0,50", "fill", "url(#spark-grad)", "stroke", "none", "opacity", "0.18"], ["id", "spark-grad", "x1", "0", "y1", "0", "x2", "0", "y2", "1"], ["offset", "0%", "stop-color", "#4f6ef7"], ["offset", "100%", "stop-color", "transparent"], ["routerLink", "/cart", 1, "btn-topup"], [1, "fas", "fa-cart-shopping"], [1, "rp-card"], [1, "rp-card-header"], ["routerLink", "/products", 1, "rp-see-all"], [4, "ngIf"], ["class", "cat-list", 4, "ngIf"], ["class", "rp-card", 4, "ngIf"], [1, "hero-banner"], ["class", "hero-skeleton", 4, "ngIf"], [1, "hero-skeleton"], [1, "hero-slides"], ["class", "hero-slide", 3, "active", 4, "ngFor", "ngForOf"], ["class", "hero-dots", 4, "ngIf"], ["class", "hero-thumbs", 4, "ngIf"], [1, "hero-slide"], ["onerror", "this.src='https://placehold.co/1200x420/1e2235/4f6ef7?text=Featured+Game'", 3, "src", "alt"], [1, "hero-gradient"], [1, "hero-content"], [1, "hero-badges"], ["class", "hbadge hbadge-hot", 4, "ngIf"], ["class", "hbadge hbadge-new", 4, "ngIf"], [1, "hbadge", "hbadge-cat"], [1, "hero-title"], [1, "hero-rating"], [1, "hr-stars"], ["class", "fas fa-star", 3, "filled", "half", 4, "ngFor", "ngForOf"], [1, "hr-score"], [1, "hr-reviews"], [1, "hero-desc"], [1, "hero-actions"], [1, "btn-hero-buy", 3, "routerLink"], [1, "fas", "fa-bolt"], ["title", "Add to wishlist", 1, "btn-hero-wish", 3, "click"], [1, "hero-live"], [1, "live-dot"], [1, "hbadge", "hbadge-hot"], [1, "fas", "fa-fire"], [1, "hbadge", "hbadge-new"], [1, "fas", "fa-certificate"], [1, "hero-dots"], ["class", "dot", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "dot", 3, "click"], [1, "hero-thumbs"], ["class", "hero-thumb", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "hero-thumb", 3, "click"], ["onerror", "this.src='https://placehold.co/120x70/1e2235/4f6ef7?text=Game'", 3, "src", "alt"], [1, "thumb-overlay"], [1, "thumb-name"], [1, "thumb-active-bar"], [1, "arrivals-section"], [1, "arrivals-inner"], [1, "sh-accent", "sh-accent-green"], [1, "badge-new-tag"], [1, "sh-arrivals-right"], [1, "arrivals-count"], [1, "arrivals-scroll-wrap"], [1, "arrivals-scroll"], ["class", "arrival-card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "arrivals-fade-right"], [1, "arrival-card", 3, "routerLink"], [1, "arrival-img-wrap"], ["onerror", "this.src='https://placehold.co/210x135/1e2235/4f6ef7?text=Game'", 3, "src", "alt"], [1, "arrival-img-overlay"], ["class", "arrival-new-badge", 4, "ngIf"], [1, "arrival-price"], [1, "arrival-hover-actions"], ["title", "Add to cart", 1, "arrival-btn-cart", 3, "click"], [1, "fas", "fa-cart-plus"], ["title", "Wishlist", 1, "arrival-btn-wish", 3, "click"], [1, "arrival-info"], [1, "arrival-name"], [1, "arrival-meta"], [1, "arrival-footer"], [1, "arrival-stars"], ["class", "star", 3, "filled", 4, "ngFor", "ngForOf"], [1, "arrival-rating-val"], [1, "arrival-new-badge"], [1, "star"], [1, "stats-bar"], [1, "stat-chip"], [1, "stat-icon", "stat-icon-blue"], [1, "stat-text"], [1, "stat-val"], [1, "stat-lbl"], [1, "stat-sep"], [1, "stat-icon", "stat-icon-purple"], [1, "fas", "fa-tags"], [1, "stat-icon", "stat-icon-red"], [1, "stat-icon", "stat-icon-gold"], [1, "filter-pills-wrap"], [1, "filter-pills"], [1, "pill", 3, "click"], [1, "fas", "fa-th-large"], ["class", "pill", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "item-count"], [1, "games-grid"], ["type", "product-card", 3, "count", "active"], [3, "product", "addToCart", "addToWishlist", "quickView", 4, "ngFor", "ngForOf"], [3, "addToCart", "addToWishlist", "quickView", "product"], [1, "empty-state"], [1, "empty-icon"], [1, "empty-title"], [1, "empty-text"], [1, "empty-actions"], ["class", "btn-pill", 3, "click", 4, "ngIf"], ["routerLink", "/products", 1, "btn-pill", "btn-pill-outline"], [1, "fas", "fa-search"], [1, "btn-pill", 3, "click"], ["type", "rect", "height", "36px", 3, "count", "active", "round"], [1, "cat-list"], ["class", "cat-row", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], ["routerLink", "/products", 1, "cat-row", "cat-all"], [1, "cat-icon-sm", "cat-icon-all"], [1, "fas", "fa-store"], [1, "cat-row-name"], [1, "cat-arrow"], [1, "cat-row", 3, "routerLink", "queryParams"], [1, "cat-icon-sm"], [1, "fas", "fa-trophy", 2, "color", "#f59e0b", "margin-right", "6px", "font-size", "0.85rem"], [1, "history-list"], ["class", "history-row", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "history-row", 3, "routerLink"], [1, "rank-badge"], [1, "history-thumb"], ["onerror", "this.src='https://placehold.co/40x40/1e2235/4f6ef7?text=G'", 3, "src", "alt"], [1, "history-info"], [1, "history-name"], [1, "history-stars"], ["class", "star-sm", 3, "filled", 4, "ngFor", "ngForOf"], [1, "rv-sm"], [1, "history-price"], [1, "star-sm"], [1, "fas", "fa-certificate", 2, "color", "#22c55e", "margin-right", "6px", "font-size", "0.85rem"], [1, "history-meta"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HomeComponent_section_0_Template, 3, 2, "section", 1)(1, HomeComponent_section_1_Template, 21, 2, "section", 2);
        \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
        \u0275\u0275template(4, HomeComponent_div_4_Template, 37, 7, "div", 5)(5, HomeComponent_div_5_Template, 6, 3, "div", 6);
        \u0275\u0275elementStart(6, "section", 7)(7, "div", 8)(8, "div", 9);
        \u0275\u0275element(9, "span", 10);
        \u0275\u0275elementStart(10, "h2");
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, HomeComponent_span_12_Template, 2, 1, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 12)(14, "div", 13)(15, "app-select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Template_app_select_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sortOrder, $event) || (ctx.sortOrder = $event);
          return $event;
        });
        \u0275\u0275listener("selectionChange", function HomeComponent_Template_app_select_selectionChange_15_listener($event) {
          return ctx.onSortChange($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "a", 15);
        \u0275\u0275text(17, "See All ");
        \u0275\u0275element(18, "i", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(19, HomeComponent_div_19_Template, 2, 2, "div", 17)(20, HomeComponent_div_20_Template, 2, 1, "div", 17)(21, HomeComponent_div_21_Template, 12, 2, "div", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "aside", 19)(23, "div", 20)(24, "div", 21)(25, "div", 22)(26, "span", 23);
        \u0275\u0275element(27, "i", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 25);
        \u0275\u0275text(29, "Your Library");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "button", 26);
        \u0275\u0275text(31, "\xB7\xB7\xB7");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 27)(33, "div", 28)(34, "span", 29);
        \u0275\u0275element(35, "i", 30);
        \u0275\u0275text(36, " Owned");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span", 31);
        \u0275\u0275element(38, "i", 32);
        \u0275\u0275text(39, " Wishlist");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "span", 33);
        \u0275\u0275element(41, "i", 34);
        \u0275\u0275text(42, " Featured");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "button", 35);
        \u0275\u0275text(44, "+ Add");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 36);
        \u0275\u0275text(46, "Total Spent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 37);
        \u0275\u0275text(48);
        \u0275\u0275elementStart(49, "span");
        \u0275\u0275text(50);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 38);
        \u0275\u0275element(52, "i", 39);
        \u0275\u0275text(53);
        \u0275\u0275pipe(54, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 40);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(56, "svg", 41);
        \u0275\u0275element(57, "polyline", 42)(58, "polyline", 43);
        \u0275\u0275elementStart(59, "defs")(60, "linearGradient", 44);
        \u0275\u0275element(61, "stop", 45)(62, "stop", 46);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(63, "a", 47);
        \u0275\u0275element(64, "i", 48);
        \u0275\u0275text(65, " Go to Cart +");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "div", 49)(67, "div", 50)(68, "span", 25);
        \u0275\u0275text(69, "Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "a", 51);
        \u0275\u0275text(71, "See All \u203A");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(72, HomeComponent_ng_container_72_Template, 2, 3, "ng-container", 52)(73, HomeComponent_div_73_Template, 9, 1, "div", 53);
        \u0275\u0275elementEnd();
        \u0275\u0275template(74, HomeComponent_div_74_Template, 9, 1, "div", 54)(75, HomeComponent_div_75_Template, 9, 1, "div", 54);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.heroProducts.length > 0 || ctx.loadingProducts);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingProducts && ctx.newArrivals.length > 0);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.loadingProducts && ctx.allProducts.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingCategories);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.activeCategoryName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredProducts.length > 0);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.sortOrder);
        \u0275\u0275property("options", ctx.homeSortOptions)("clearable", false);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.loadingProducts);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingProducts && ctx.filteredProducts.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingProducts && ctx.filteredProducts.length === 0);
        \u0275\u0275advance(27);
        \u0275\u0275textInterpolate1("$", ctx.totalSpentWhole, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(".", ctx.totalSpentCents, "");
        \u0275\u0275advance();
        \u0275\u0275classProp("negative-trend", ctx.spentTrend < 0);
        \u0275\u0275advance();
        \u0275\u0275classProp("fa-arrow-trend-up", ctx.spentTrend >= 0)("fa-arrow-trend-down", ctx.spentTrend < 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2(" ", ctx.spentTrend >= 0 ? "+" : "", "", \u0275\u0275pipeBind2(54, 26, ctx.spentTrend, "1.0-0"), "% this month ");
        \u0275\u0275advance(19);
        \u0275\u0275property("ngIf", ctx.loadingCategories);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingCategories);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.topRated.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.newArrivals.length > 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, DecimalPipe, RouterModule, RouterLink, ProductCardComponent, SkeletonComponent, SelectComponent, FormsModule, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  overflow-x: hidden;\n}\n.hero-banner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 520px;\n  overflow: hidden;\n  background: #0d0f1c;\n}\n.hero-skeleton[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #1e2235 25%,\n      #252840 50%,\n      #1e2235 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.hero-slides[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n}\n.hero-slide[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  pointer-events: none;\n  transform: translateX(60px);\n  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.hero-slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateX(0);\n  animation: _ngcontent-%COMP%_slideIn 0.7s cubic-bezier(0.4, 0, 0.2, 1) both;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(80px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.hero-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transform: scale(1.04);\n  transition: transform 8s ease;\n}\n.hero-slide.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.hero-gradient[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(10, 12, 24, 0.98) 0%,\n      rgba(10, 12, 24, 0.82) 35%,\n      rgba(10, 12, 24, 0.35) 58%,\n      transparent 78%),\n    linear-gradient(\n      to top,\n      rgba(10, 12, 24, 0.85) 0%,\n      rgba(10, 12, 24, 0.2) 30%,\n      transparent 55%),\n    radial-gradient(\n      ellipse at top right,\n      rgba(0, 0, 0, 0.5) 0%,\n      transparent 60%);\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 40px 48px;\n  max-width: 560px;\n}\n.hero-slide.active[_ngcontent-%COMP%]   .hero-badges[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_heroItemIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.15s both;\n}\n.hero-slide.active[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_heroItemIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.28s both;\n}\n.hero-slide.active[_ngcontent-%COMP%]   .hero-rating[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_heroItemIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.34s both;\n}\n.hero-slide.active[_ngcontent-%COMP%]   .hero-desc[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_heroItemIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.42s both;\n}\n.hero-slide.active[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_heroItemIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.52s both;\n}\n@keyframes _ngcontent-%COMP%_heroItemIn {\n  from {\n    opacity: 0;\n    transform: translateY(22px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 14px;\n}\n.hbadge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 50px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  backdrop-filter: blur(8px);\n}\n.hbadge-hot[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.25);\n  color: #ef4444;\n  border: 1px solid rgba(239, 68, 68, 0.4);\n}\n.hbadge-new[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.2);\n  color: #22c55e;\n  border: 1px solid rgba(34, 197, 94, 0.35);\n}\n.hbadge-cat[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.2);\n  color: #a5b4fc;\n  border: 1px solid rgba(79, 110, 247, 0.35);\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: clamp(1.6rem, 3vw, 2.4rem);\n  font-weight: 900;\n  color: #fff;\n  line-height: 1.15;\n  margin-bottom: 12px;\n  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);\n}\n.hero-desc[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: rgba(255, 255, 255, 0.72);\n  line-height: 1.6;\n  margin-bottom: 24px;\n  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.btn-hero-buy[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 13px 30px;\n  border-radius: 50px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: #fff;\n  font-size: 0.95rem;\n  font-weight: 700;\n  text-decoration: none;\n  box-shadow: 0 6px 24px rgba(79, 110, 247, 0.45);\n  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s;\n  animation: _ngcontent-%COMP%_btnPulse 2.8s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_btnPulse {\n  0%, 100% {\n    box-shadow: 0 6px 24px rgba(79, 110, 247, 0.45);\n  }\n  50% {\n    box-shadow: 0 6px 36px rgba(124, 58, 237, 0.7), 0 0 60px rgba(79, 110, 247, 0.25);\n  }\n}\n.btn-hero-buy[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px) scale(1.03);\n  box-shadow: 0 14px 36px rgba(79, 110, 247, 0.65);\n  animation: none;\n}\n.btn-hero-wish[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #ec4899;\n  font-size: 1rem;\n  cursor: pointer;\n  backdrop-filter: blur(8px);\n  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.btn-hero-wish[_ngcontent-%COMP%]:hover {\n  background: rgba(236, 72, 153, 0.2);\n  transform: scale(1.12);\n}\n.hero-live[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: rgba(0, 0, 0, 0.55);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #e0e4ff;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.live-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #22c55e;\n  animation: _ngcontent-%COMP%_blink 1.2s infinite;\n}\n@keyframes _ngcontent-%COMP%_blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n}\n.hero-nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: rgba(13, 15, 28, 0.6);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: #fff;\n  font-size: 0.95rem;\n  cursor: pointer;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero-nav[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.6);\n  border-color: rgba(79, 110, 247, 0.8);\n  transform: translateY(-50%) scale(1.1);\n  box-shadow: 0 0 20px rgba(79, 110, 247, 0.4);\n}\n.hero-prev[_ngcontent-%COMP%] {\n  left: 18px;\n}\n.hero-next[_ngcontent-%COMP%] {\n  right: 18px;\n}\n.hero-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.hr-stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n}\n.hr-stars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.2);\n}\n.hr-stars[_ngcontent-%COMP%]   i.filled[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.hr-stars[_ngcontent-%COMP%]   i.half[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  opacity: 0.6;\n}\n.hr-score[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #f59e0b;\n}\n.hr-reviews[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgba(255, 255, 255, 0.45);\n}\n.hero-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  left: 48px;\n  display: flex;\n  gap: 7px;\n  z-index: 10;\n}\n.dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.dot.active[_ngcontent-%COMP%] {\n  width: 24px;\n  border-radius: 4px;\n  background: #4f6ef7;\n}\n.hero-thumbs[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  z-index: 10;\n}\n.hero-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  width: 112px;\n  height: 66px;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  cursor: pointer;\n  padding: 0;\n  opacity: 0.45;\n  transition:\n    opacity 0.3s ease,\n    border-color 0.3s ease,\n    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.hero-thumb[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n  transform: scale(1.06);\n}\n.hero-thumb.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  border-color: #4f6ef7;\n  transform: scale(1.06);\n  box-shadow: 0 0 0 2px rgba(79, 110, 247, 0.4), 0 4px 16px rgba(0, 0, 0, 0.5);\n}\n.hero-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.thumb-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.65) 0%,\n      transparent 55%);\n}\n.thumb-name[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4px;\n  left: 6px;\n  right: 6px;\n  font-size: 0.6rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.9);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1;\n}\n.thumb-active-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: #4f6ef7;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.hero-thumb.active[_ngcontent-%COMP%]   .thumb-active-bar[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.page-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 24px 24px 80px;\n  align-items: flex-start;\n  animation: _ngcontent-%COMP%_pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.center-feed[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.stats-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #1a1d30 0%,\n      #1e2235 100%);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 18px;\n  padding: 16px 22px;\n  animation: _ngcontent-%COMP%_slideDown 0.4s 0.1s both;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.stat-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n  justify-content: center;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.stat-icon-blue[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.18);\n  color: #4f6ef7;\n  box-shadow: 0 0 12px rgba(79, 110, 247, 0.2);\n}\n.stat-icon-purple[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.18);\n  color: #a78bfa;\n  box-shadow: 0 0 12px rgba(124, 58, 237, 0.2);\n}\n.stat-icon-red[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n  box-shadow: 0 0 12px rgba(239, 68, 68, 0.15);\n}\n.stat-icon-gold[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #fbbf24;\n  box-shadow: 0 0 12px rgba(245, 158, 11, 0.15);\n}\n.stat-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1;\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #5a5e7a;\n  font-weight: 500;\n}\n.stat-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.06);\n  flex-shrink: 0;\n}\n.filter-pills-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.filter-pills-wrap[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 40px;\n  background:\n    linear-gradient(\n      to right,\n      transparent,\n      #161929);\n  pointer-events: none;\n}\n.filter-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  overflow-x: auto;\n  padding-bottom: 2px;\n  padding-top: 2px;\n  scrollbar-width: none;\n  animation: _ngcontent-%COMP%_slideDown 0.4s 0.15s both;\n}\n.filter-pills[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border-radius: 50px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #a0a4c0;\n  cursor: pointer;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.pill[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(255, 255, 255, 0.09);\n  color: #d0d4f0;\n  transform: translateY(-2px);\n}\n.pill.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 110, 247, 0.28),\n      rgba(124, 58, 237, 0.22));\n  border-color: rgba(79, 110, 247, 0.55);\n  color: #fff;\n  box-shadow: 0 4px 18px rgba(79, 110, 247, 0.3), inset 0 0 0 1px rgba(79, 110, 247, 0.15);\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.sh-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.sh-accent[_ngcontent-%COMP%] {\n  display: block;\n  width: 4px;\n  height: 24px;\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      180deg,\n      #4f6ef7,\n      #7c3aed);\n  flex-shrink: 0;\n  box-shadow: 0 0 10px rgba(79, 110, 247, 0.5);\n}\n.sh-accent-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #22c55e,\n      #16a34a);\n  box-shadow: 0 0 10px rgba(34, 197, 94, 0.4);\n}\n.sh-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  margin: 0;\n}\n.item-count[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #5a5e7a;\n  background: rgba(255, 255, 255, 0.05);\n  padding: 3px 10px;\n  border-radius: 50px;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n}\n.badge-new-tag[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: #fff;\n  padding: 3px 9px;\n  border-radius: 6px;\n  letter-spacing: 0.8px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  box-shadow: 0 2px 10px rgba(34, 197, 94, 0.4);\n  animation: _ngcontent-%COMP%_badgePop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n@keyframes _ngcontent-%COMP%_badgePop {\n  from {\n    transform: scale(0.6);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.sh-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.sort-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.sort-icon[_ngcontent-%COMP%] {\n  color: #5a5e7a;\n  font-size: 0.8rem;\n}\n.sort-select[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  border-radius: 50px;\n  padding: 7px 16px;\n  color: #a0a4c0;\n  font-size: 0.82rem;\n  cursor: pointer;\n  outline: none;\n  transition: border-color 0.2s, background 0.2s;\n}\n.sort-select[_ngcontent-%COMP%]:focus {\n  border-color: rgba(79, 110, 247, 0.4);\n  background: rgba(79, 110, 247, 0.06);\n}\n.see-all-link[_ngcontent-%COMP%] {\n  color: #4f6ef7;\n  font-size: 0.82rem;\n  font-weight: 700;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border-radius: 50px;\n  border: 1px solid rgba(79, 110, 247, 0.25);\n  transition: all 0.2s;\n}\n.see-all-link[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.1);\n  border-color: rgba(79, 110, 247, 0.45);\n  gap: 8px;\n}\n.games-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.games-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 18px;\n}\n.games-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(1) {\n  animation: _ngcontent-%COMP%_cardIn 0.5s 0.05s both;\n}\n.games-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(2) {\n  animation: _ngcontent-%COMP%_cardIn 0.5s 0.1s both;\n}\n.games-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(3) {\n  animation: _ngcontent-%COMP%_cardIn 0.5s 0.15s both;\n}\n.games-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(4) {\n  animation: _ngcontent-%COMP%_cardIn 0.5s 0.2s both;\n}\n.games-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(5) {\n  animation: _ngcontent-%COMP%_cardIn 0.5s 0.25s both;\n}\n.games-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(6) {\n  animation: _ngcontent-%COMP%_cardIn 0.5s 0.3s both;\n}\n.games-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(n+7) {\n  animation: _ngcontent-%COMP%_cardIn 0.5s 0.32s both;\n}\n@keyframes _ngcontent-%COMP%_cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: rgba(79, 110, 247, 0.3);\n  margin-bottom: 16px;\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #e0e4ff;\n  margin-bottom: 8px;\n}\n.empty-text[_ngcontent-%COMP%] {\n  color: #5a5e7a;\n  font-size: 0.9rem;\n  margin-bottom: 22px;\n}\n.empty-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.btn-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 11px 22px;\n  border-radius: 50px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: #fff;\n  font-size: 0.88rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.22s;\n  box-shadow: 0 4px 16px rgba(79, 110, 247, 0.35);\n}\n.btn-pill[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px) scale(1.03);\n  box-shadow: 0 8px 24px rgba(79, 110, 247, 0.5);\n}\n.btn-pill-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid rgba(79, 110, 247, 0.4);\n  color: #4f6ef7;\n  box-shadow: none;\n}\n.btn-pill-outline[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.1);\n  box-shadow: none;\n}\n.arrivals-section[_ngcontent-%COMP%] {\n  width: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(26, 29, 48, 0.7) 0%,\n      rgba(22, 25, 41, 0.5) 100%);\n  border-top: 1px solid rgba(34, 197, 94, 0.12);\n  border-bottom: 1px solid rgba(34, 197, 94, 0.12);\n  padding: 20px 0;\n}\n.arrivals-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.sh-arrivals-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.arrivals-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #5a5e7a;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.04);\n  padding: 4px 10px;\n  border-radius: 50px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.arrivals-scroll-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n.arrivals-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  overflow-x: auto;\n  width: 100%;\n  padding: 10px 4px 8px 4px;\n}\n.arrivals-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 3px;\n}\n.arrivals-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.arrivals-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(34, 197, 94, 0.4);\n  border-radius: 2px;\n}\n.arrivals-fade-right[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 8px;\n  width: 60px;\n  background:\n    linear-gradient(\n      to right,\n      transparent,\n      rgba(22, 25, 41, 0.95));\n  pointer-events: none;\n}\n.arrival-card[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 210px;\n  background: #1a1d30;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  overflow: hidden;\n  text-decoration: none;\n  position: relative;\n  z-index: 1;\n  transition:\n    transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1),\n    box-shadow 0.28s,\n    border-color 0.28s,\n    z-index 0s;\n}\n.arrival-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px) scale(1.02);\n  box-shadow: 0 20px 44px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(34, 197, 94, 0.25);\n  border-color: rgba(34, 197, 94, 0.35);\n  z-index: 10;\n}\n.arrival-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 132px;\n  overflow: hidden;\n}\n.arrival-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.arrival-card[_ngcontent-%COMP%]:hover   .arrival-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.12);\n}\n.arrival-img-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(26, 29, 48, 0.9) 0%,\n      rgba(26, 29, 48, 0.2) 50%,\n      transparent 100%);\n  pointer-events: none;\n}\n.arrival-new-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  background: rgba(34, 197, 94, 0.9);\n  color: #fff;\n  font-size: 0.65rem;\n  padding: 3px 7px;\n  border-radius: 4px;\n  z-index: 2;\n  animation: _ngcontent-%COMP%_newBadgePulse 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_newBadgePulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);\n  }\n  50% {\n    box-shadow: 0 0 0 5px rgba(34, 197, 94, 0);\n  }\n}\n.arrival-price[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n  background: rgba(15, 17, 30, 0.82);\n  backdrop-filter: blur(8px);\n  color: #fff;\n  font-size: 0.76rem;\n  font-weight: 800;\n  padding: 4px 10px;\n  border-radius: 8px;\n  z-index: 2;\n  border: 1px solid rgba(79, 110, 247, 0.35);\n}\n.arrival-price-free[_ngcontent-%COMP%] {\n  background: rgba(15, 17, 30, 0.82);\n  border-color: rgba(34, 197, 94, 0.45);\n  color: #34d399;\n}\n.arrival-hover-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  opacity: 0;\n  background: rgba(10, 12, 24, 0.52);\n  transition: opacity 0.22s ease;\n  z-index: 3;\n}\n.arrival-card[_ngcontent-%COMP%]:hover   .arrival-hover-actions[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.arrival-btn-cart[_ngcontent-%COMP%], \n.arrival-btn-wish[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.22s;\n}\n.arrival-btn-cart[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(79, 110, 247, 0.5);\n  transform: translateY(8px);\n}\n.arrival-card[_ngcontent-%COMP%]:hover   .arrival-btn-cart[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.arrival-btn-cart[_ngcontent-%COMP%]:hover {\n  transform: scale(1.12) !important;\n  box-shadow: 0 6px 20px rgba(79, 110, 247, 0.7);\n}\n.arrival-btn-wish[_ngcontent-%COMP%] {\n  background: rgba(236, 72, 153, 0.2);\n  color: #f472b6;\n  border: 1px solid rgba(236, 72, 153, 0.35);\n  box-shadow: 0 4px 14px rgba(236, 72, 153, 0.2);\n  transform: translateY(8px);\n}\n.arrival-card[_ngcontent-%COMP%]:hover   .arrival-btn-wish[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  transition-delay: 0.04s;\n}\n.arrival-btn-wish[_ngcontent-%COMP%]:hover {\n  transform: scale(1.12) !important;\n  background: rgba(236, 72, 153, 0.35);\n}\n.arrival-info[_ngcontent-%COMP%] {\n  padding: 11px 13px 14px;\n}\n.arrival-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #e0e4ff;\n  margin: 0 0 6px 0;\n  line-height: 1.3;\n}\n.arrival-meta[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #5a5e7a;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-bottom: 8px;\n}\n.arrival-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.arrival-stars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1px;\n}\n.star[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: rgba(255, 255, 255, 0.13);\n}\n.star.filled[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.arrival-rating-val[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #f59e0b;\n  margin-left: 4px;\n}\n.right-panel[_ngcontent-%COMP%] {\n  width: 300px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  position: sticky;\n  top: 20px;\n  animation: _ngcontent-%COMP%_panelIn 0.5s ease 0.15s both;\n}\n@keyframes _ngcontent-%COMP%_panelIn {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.rp-card[_ngcontent-%COMP%] {\n  background: #1a1d30;\n  border-radius: 18px;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  padding: 18px;\n  transition: transform 0.22s ease, box-shadow 0.22s ease;\n}\n.rp-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);\n}\n.rp-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.rp-title[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #fff;\n  display: flex;\n  align-items: center;\n}\n.rp-more[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #5a5e7a;\n  font-size: 1.2rem;\n  cursor: pointer;\n  letter-spacing: 2px;\n  transition: color 0.2s;\n}\n.rp-more[_ngcontent-%COMP%]:hover {\n  color: #a0a4c0;\n}\n.rp-see-all[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #4f6ef7;\n  text-decoration: none;\n  padding: 4px 10px;\n  border-radius: 50px;\n  border: 1px solid rgba(79, 110, 247, 0.25);\n  transition: all 0.2s;\n}\n.rp-see-all[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.1);\n  border-color: rgba(79, 110, 247, 0.4);\n}\n.finance-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.finance-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 18px 14px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 110, 247, 0.15) 0%,\n      rgba(124, 58, 237, 0.12) 100%);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n  margin-bottom: 0;\n}\n.finance-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.finance-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(79, 110, 247, 0.4);\n}\n.finance-body[_ngcontent-%COMP%] {\n  padding: 16px 18px 18px;\n}\n.finance-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n  margin-bottom: 16px;\n}\n.fchip[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  border-radius: 50px;\n  font-size: 0.73rem;\n  font-weight: 600;\n  transition: transform 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.fchip[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.fchip-blue[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.15);\n  color: #818cf8;\n  border: 1px solid rgba(79, 110, 247, 0.2);\n}\n.fchip-pink[_ngcontent-%COMP%] {\n  background: rgba(236, 72, 153, 0.12);\n  color: #f472b6;\n  border: 1px solid rgba(236, 72, 153, 0.2);\n}\n.fchip-gold[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #fbbf24;\n  border: 1px solid rgba(245, 158, 11, 0.2);\n}\n.fchip-add[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  color: #a0a4c0;\n  border: 1px dashed rgba(255, 255, 255, 0.18);\n  cursor: pointer;\n}\n.balance-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #5a5e7a;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.balance-val[_ngcontent-%COMP%] {\n  font-size: 2.1rem;\n  font-weight: 900;\n  color: #fff;\n  line-height: 1;\n  letter-spacing: -1px;\n}\n.balance-val[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #6b7280;\n  font-weight: 600;\n}\n.balance-trend[_ngcontent-%COMP%] {\n  font-size: 0.77rem;\n  color: #22c55e;\n  margin: 7px 0 14px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.balance-trend.negative-trend[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.sparkline[_ngcontent-%COMP%] {\n  height: 50px;\n}\n.sparkline[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.btn-topup[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 16px;\n  padding: 13px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.88rem;\n  text-decoration: none;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 4px 18px rgba(79, 110, 247, 0.4);\n  letter-spacing: 0.2px;\n}\n.btn-topup[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 26px rgba(79, 110, 247, 0.55);\n}\n.cat-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.cat-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 10px;\n  border-radius: 10px;\n  text-decoration: none;\n  color: #a0a4c0;\n  font-size: 0.86rem;\n  transition: all 0.2s;\n}\n.cat-row[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.08);\n  color: #c4c8f0;\n  padding-left: 14px;\n  border-color: rgba(79, 110, 247, 0.15);\n}\n.cat-all[_ngcontent-%COMP%] {\n  color: #4f6ef7;\n}\n.cat-all[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.12);\n}\n.cat-icon-sm[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  flex-shrink: 0;\n  width: 18px;\n  text-align: center;\n}\n.cat-icon-all[_ngcontent-%COMP%] {\n  color: #4f6ef7;\n}\n.cat-row-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 500;\n}\n.cat-arrow[_ngcontent-%COMP%] {\n  color: #3d4165;\n  font-size: 0.85rem;\n  transition: color 0.2s;\n}\n.cat-row[_ngcontent-%COMP%]:hover   .cat-arrow[_ngcontent-%COMP%] {\n  color: #4f6ef7;\n}\n.history-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.history-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 7px 8px;\n  border-radius: 10px;\n  text-decoration: none;\n  transition: background 0.2s;\n}\n.history-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n.history-thumb[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.history-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.history-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.history-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #e0e4ff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.history-meta[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #5a5e7a;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.history-stars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.star-sm[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.15);\n}\n.star-sm.filled[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.rv-sm[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #5a5e7a;\n  margin-left: 3px;\n}\n.history-price[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #4f6ef7;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.rank-badge[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.68rem;\n  font-weight: 800;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.08);\n  color: #a0a4c0;\n}\n.rank-gold[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.2);\n  color: #f59e0b;\n}\n.rank-silver[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.2);\n  color: #94a3b8;\n}\n.rank-bronze[_ngcontent-%COMP%] {\n  background: rgba(180, 120, 60, 0.2);\n  color: #b4783c;\n}\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 32px;\n  right: 32px;\n  background: rgba(26, 29, 48, 0.95);\n  backdrop-filter: blur(16px);\n  color: #fff;\n  border: 1px solid rgba(34, 197, 94, 0.4);\n  padding: 14px 20px;\n  border-radius: 16px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45), inset 0 0 0 1px rgba(255, 255, 255, 0.05);\n  z-index: 9999;\n  font-weight: 600;\n  font-size: 0.88rem;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  animation: _ngcontent-%COMP%_toastIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n  min-width: 220px;\n}\n.toast[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #22c55e;\n}\n.toast.toast-error[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.45);\n}\n.toast.toast-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n@keyframes _ngcontent-%COMP%_toastIn {\n  from {\n    transform: translateX(90px) scale(0.88);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0) scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 1100px) {\n  .right-panel[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 900px) {\n  .stats-bar[_ngcontent-%COMP%] {\n    padding: 12px 14px;\n  }\n  .stat-chip[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .stat-icon[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 0.78rem;\n  }\n  .hero-thumbs[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-dots[_ngcontent-%COMP%] {\n    display: flex;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  .arrivals-section[_ngcontent-%COMP%] {\n    padding: 14px 0;\n  }\n  .arrivals-inner[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n@media (min-width: 901px) {\n  .hero-dots[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .hero-banner[_ngcontent-%COMP%] {\n    height: 340px;\n  }\n  .hero-content[_ngcontent-%COMP%] {\n    padding: 24px 22px;\n    max-width: 100%;\n  }\n  .page-layout[_ngcontent-%COMP%] {\n    padding: 16px 14px 80px;\n    gap: 18px;\n  }\n  .toast[_ngcontent-%COMP%] {\n    bottom: 84px;\n    right: 16px;\n    left: 16px;\n    min-width: unset;\n    font-size: 0.83rem;\n  }\n  .filter-pills[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n    padding: 7px 14px;\n    font-size: 0.79rem;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .sh-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .sort-select[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 0.79rem;\n  }\n}\n@media (max-width: 580px) {\n  .hero-banner[_ngcontent-%COMP%] {\n    height: 260px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .hero-content[_ngcontent-%COMP%] {\n    padding: 18px 16px;\n  }\n  .hero-desc[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    margin-bottom: 16px;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .hero-rating[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n  }\n  .hr-score[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .hr-reviews[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .btn-hero-buy[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    font-size: 0.85rem;\n  }\n  .btn-hero-wish[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .stats-bar[_ngcontent-%COMP%] {\n    gap: 0;\n    padding: 10px 10px;\n  }\n  .stat-text[_ngcontent-%COMP%]   .stat-lbl[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .stat-val[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .stat-icon[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    font-size: 0.72rem;\n  }\n  .games-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n  .page-layout[_ngcontent-%COMP%] {\n    padding: 12px 12px 80px;\n  }\n  .arrival-card[_ngcontent-%COMP%] {\n    width: 170px;\n  }\n  .arrival-img-wrap[_ngcontent-%COMP%] {\n    height: 108px;\n  }\n  .arrivals-section[_ngcontent-%COMP%] {\n    padding: 12px 0;\n  }\n  .arrivals-inner[_ngcontent-%COMP%] {\n    padding: 0 14px;\n  }\n  .hbadge[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    padding: 3px 9px;\n  }\n  .hero-live[_ngcontent-%COMP%] {\n    font-size: 0.68rem;\n    padding: 4px 10px;\n    top: 12px;\n    right: 12px;\n  }\n  .sort-select[_ngcontent-%COMP%] {\n    padding: 5px 10px;\n    font-size: 0.76rem;\n  }\n  .see-all-link[_ngcontent-%COMP%] {\n    padding: 5px 8px;\n    font-size: 0.76rem;\n    gap: 4px;\n  }\n  .sh-right[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .sort-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 430px) {\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 6px;\n  }\n  .sh-right[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .arrival-card[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n  .arrival-img-wrap[_ngcontent-%COMP%] {\n    height: 96px;\n  }\n  .arrival-name[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .hero-banner[_ngcontent-%COMP%] {\n    height: 240px;\n  }\n  .hero-content[_ngcontent-%COMP%] {\n    padding: 14px 14px;\n  }\n  .btn-hero-buy[_ngcontent-%COMP%] {\n    padding: 9px 16px;\n    font-size: 0.82rem;\n  }\n}\n@media (max-width: 400px) {\n  .games-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 8px;\n  }\n  .hero-banner[_ngcontent-%COMP%] {\n    height: 220px;\n  }\n  .stats-bar[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .stat-chip[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .page-layout[_ngcontent-%COMP%] {\n    padding: 10px 10px 80px;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [CommonModule, RouterModule, ProductCardComponent, SkeletonComponent, SelectComponent, FormsModule], template: `
    <!-- \u2550\u2550 HERO BANNER (full-width above layout) \u2550\u2550 -->
    <section class="hero-banner" *ngIf="heroProducts.length > 0 || loadingProducts">
      <div class="hero-skeleton" *ngIf="loadingProducts"></div>
      <ng-container *ngIf="!loadingProducts && heroProducts.length > 0">
        <!-- Slides -->
        <div class="hero-slides">
          <div class="hero-slide"
               *ngFor="let p of heroProducts; let i = index"
               [class.active]="i === heroIndex">
            <img [src]="getProductImage(p)"
                 [alt]="p.name"
                 onerror="this.src='https://placehold.co/1200x420/1e2235/4f6ef7?text=Featured+Game'" />
            <div class="hero-gradient"></div>
            <div class="hero-content">
              <div class="hero-badges">
                <span class="hbadge hbadge-hot" *ngIf="p.featured"><i class="fas fa-fire"></i> Featured</span>
                <span class="hbadge hbadge-new" *ngIf="isNew(p)"><i class="fas fa-certificate"></i> New</span>
                <span class="hbadge hbadge-cat">
                  <i [class]="getCategoryIconClass($any(p.category)?.name || '')"></i>
                  {{ $any(p.category)?.name || 'Game' }}
                </span>
              </div>
              <h1 class="hero-title">{{ p.name }}</h1>
              <div class="hero-rating">
                <span class="hr-stars">
                  <i class="fas fa-star" *ngFor="let s of [1,2,3,4,5]; let si = index"
                     [class.filled]="si < (p.rating || 0)"
                     [class.half]="si === floorRating(p.rating) && (p.rating % 1) >= 0.5"></i>
                </span>
                <span class="hr-score">{{ (p.rating || 0).toFixed(1) }}</span>
                <span class="hr-reviews">({{ p.numReviews | number }} reviews)</span>
              </div>
              <p class="hero-desc">{{ (p.description || 'Experience the most immersive gameplay of the season.') | slice:0:110 }}\u2026</p>
              <div class="hero-actions">
                <a [routerLink]="['/products', p._id]" class="btn-hero-buy">
                  <i class="fas fa-bolt"></i> Get for \${{ p.price | number:'1.2-2' }}
                </a>
                <button class="btn-hero-wish" (click)="onAddToWishlist(p)" title="Add to wishlist">
                  <i class="fas fa-heart"></i>
                </button>
              </div>
            </div>
            <!-- Live indicator -->
            <div class="hero-live"><span class="live-dot"></span> Live Deal</div>
          </div>
        </div>
        <!-- Dot indicators (mobile) -->
        <div class="hero-dots" *ngIf="heroProducts.length > 1">
          <button class="dot" *ngFor="let p of heroProducts; let i = index"
                  [class.active]="i === heroIndex" (click)="goToSlide(i)"></button>
        </div>
        <!-- Thumbnail strip (desktop) -->
        <div class="hero-thumbs" *ngIf="heroProducts.length > 1">
          <button class="hero-thumb"
                  *ngFor="let p of heroProducts; let i = index"
                  [class.active]="i === heroIndex"
                  (click)="goToSlide(i)">
            <img [src]="getProductImage(p)" [alt]="p.name"
                 onerror="this.src='https://placehold.co/120x70/1e2235/4f6ef7?text=Game'" />
            <div class="thumb-overlay"></div>
            <span class="thumb-name">{{ p.name | slice:0:18 }}{{ p.name.length > 18 ? '\u2026' : '' }}</span>
            <div class="thumb-active-bar"></div>
          </button>
        </div>
      </ng-container>
    </section>

    <!-- \u2500\u2500 Just Dropped (horizontal scroll) \u2500\u2500 -->
    <section class="arrivals-section" *ngIf="!loadingProducts && newArrivals.length > 0">
      <div class="arrivals-inner">
        <div class="section-header">
          <div class="sh-left">
            <span class="sh-accent sh-accent-green"></span>
            <h2>Just Dropped</h2>
            <span class="badge-new-tag"><i class="fas fa-certificate"></i> NEW</span>
          </div>
          <div class="sh-arrivals-right">
            <span class="arrivals-count">{{ newArrivals.length }} titles</span>
            <a routerLink="/products" class="see-all-link">See All <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
        <div class="arrivals-scroll-wrap">
          <div class="arrivals-scroll" #arrivalsScroll>
            <a *ngFor="let p of newArrivals" [routerLink]="['/products', p._id]" class="arrival-card">
              <div class="arrival-img-wrap">
                <img [src]="getProductImage(p)" [alt]="p.name"
                     onerror="this.src='https://placehold.co/210x135/1e2235/4f6ef7?text=Game'" />
                <div class="arrival-img-overlay"></div>
                <span class="arrival-new-badge" *ngIf="isNew(p)"><i class="fas fa-certificate"></i></span>
                <span class="arrival-price" [class.arrival-price-free]="p.price === 0">
                  {{ p.price === 0 ? 'Free' : '$' + (p.price | number:'1.2-2') }}
                </span>
                <div class="arrival-hover-actions">
                  <button class="arrival-btn-cart" (click)="$event.preventDefault(); $event.stopPropagation(); onAddToCart(p)" title="Add to cart">
                    <i class="fas fa-cart-plus"></i>
                  </button>
                  <button class="arrival-btn-wish" (click)="$event.preventDefault(); $event.stopPropagation(); onAddToWishlist(p)" title="Wishlist">
                    <i class="fas fa-heart"></i>
                  </button>
                </div>
              </div>
              <div class="arrival-info">
                <p class="arrival-name">{{ p.name | slice:0:28 }}{{ p.name.length > 28 ? '\u2026' : '' }}</p>
                <div class="arrival-meta">
                  <i [class]="getCategoryIconClass($any(p.category)?.name || '')"></i>
                  <span>{{ $any(p.category)?.name || 'Game' }}</span>
                </div>
                <div class="arrival-footer">
                  <div class="arrival-stars">
                    <span *ngFor="let s of [1,2,3,4,5]" class="star" [class.filled]="s <= p.rating">\u2605</span>
                    <span class="arrival-rating-val">{{ (p.rating || 0).toFixed(1) }}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="arrivals-fade-right"></div>
        </div>
      </div>
    </section>

    <div class="page-layout">

      <!-- \u2550\u2550\u2550\u2550 CENTER FEED \u2550\u2550\u2550\u2550 -->
      <div class="center-feed">

        <!-- \u2500\u2500 Stats bar \u2500\u2500 -->
        <div class="stats-bar" *ngIf="!loadingProducts && allProducts.length > 0">
          <div class="stat-chip">
            <span class="stat-icon stat-icon-blue"><i class="fas fa-gamepad"></i></span>
            <div class="stat-text">
              <span class="stat-val">{{ allProducts.length }}</span>
              <span class="stat-lbl">Games</span>
            </div>
          </div>
          <div class="stat-sep"></div>
          <div class="stat-chip">
            <span class="stat-icon stat-icon-purple"><i class="fas fa-tags"></i></span>
            <div class="stat-text">
              <span class="stat-val">{{ categories.length }}</span>
              <span class="stat-lbl">Genres</span>
            </div>
          </div>
          <div class="stat-sep"></div>
          <div class="stat-chip">
            <span class="stat-icon stat-icon-red"><i class="fas fa-fire"></i></span>
            <div class="stat-text">
              <span class="stat-val">{{ featuredProducts.length }}</span>
              <span class="stat-lbl">Featured</span>
            </div>
          </div>
          <div class="stat-sep"></div>
          <div class="stat-chip">
            <span class="stat-icon stat-icon-gold"><i class="fas fa-star"></i></span>
            <div class="stat-text">
              <span class="stat-val">{{ avgRating | number:'1.1-1' }}</span>
              <span class="stat-lbl">Avg Rating</span>
            </div>
          </div>
        </div>

        <!-- \u2500\u2500 Category Filter Pills \u2500\u2500 -->
        <div class="filter-pills-wrap" *ngIf="!loadingCategories">
        <div class="filter-pills">
          <button class="pill" [class.active]="activeCategory === 'all'" (click)="filterBy('all')">
            <i class="fas fa-th-large"></i> All
          </button>
          <button class="pill" *ngFor="let cat of categories"
                  [class.active]="activeCategory === cat._id"
                  (click)="filterBy(cat._id)">
            <i [class]="getCategoryIconClass(cat.name)"></i> {{ cat.name }}
          </button>
        </div>
        </div>

        <!-- \u2500\u2500 Games Grid \u2500\u2500 -->
        <section class="games-section">
          <div class="section-header">
            <div class="sh-left">
              <span class="sh-accent"></span>
              <h2>{{ activeCategoryName }}</h2>
              <span class="item-count" *ngIf="filteredProducts.length > 0">({{ filteredProducts.length }})</span>
            </div>
            <div class="sh-right">
              <div class="sort-wrap">
                <app-select [(ngModel)]="sortOrder" [options]="homeSortOptions" [clearable]="false" (selectionChange)="onSortChange($event)"></app-select>
              </div>
              <a routerLink="/products" class="see-all-link">See All <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div class="games-grid" *ngIf="loadingProducts">
            <app-skeleton type="product-card" [count]="8" [active]="true"></app-skeleton>
          </div>

          <div class="games-grid" *ngIf="!loadingProducts && filteredProducts.length > 0">
            <app-product-card
              *ngFor="let product of filteredProducts"
              [product]="product"
              (addToCart)="onAddToCart($event)"
              (addToWishlist)="onAddToWishlist($event)"
              (quickView)="onQuickView($event)">
            </app-product-card>
          </div>

          <div class="empty-state" *ngIf="!loadingProducts && filteredProducts.length === 0">
            <div class="empty-icon"><i class="fas fa-gamepad"></i></div>
            <p class="empty-title">No games found</p>
            <p class="empty-text">{{ activeCategory === 'all' ? 'Check back soon for new titles!' : 'No games in this category yet.' }}</p>
            <div class="empty-actions">
              <button class="btn-pill" (click)="filterBy('all')" *ngIf="activeCategory !== 'all'">
                <i class="fas fa-th-large"></i> View All Games
              </button>
              <a routerLink="/products" class="btn-pill btn-pill-outline">
                <i class="fas fa-search"></i> Browse Store
              </a>
            </div>
          </div>
        </section>



      </div> <!-- /center-feed -->

      <!-- \u2550\u2550\u2550\u2550 RIGHT PANEL \u2550\u2550\u2550\u2550 -->
      <aside class="right-panel">

        <!-- Library / Balance Card -->
        <div class="rp-card finance-card">
          <div class="finance-header">
            <div class="finance-header-left">
              <span class="finance-avatar"><i class="fas fa-wallet"></i></span>
              <span class="rp-title">Your Library</span>
            </div>
            <button class="rp-more">\xB7\xB7\xB7</button>
          </div>
          <div class="finance-body">
            <div class="finance-chips">
            <span class="fchip fchip-blue"><i class="fas fa-gamepad"></i> Owned</span>
            <span class="fchip fchip-pink"><i class="fas fa-heart"></i> Wishlist</span>
            <span class="fchip fchip-gold"><i class="fas fa-star"></i> Featured</span>
            <button class="fchip fchip-add">+ Add</button>
            </div>
          <div class="balance-label">Total Spent</div>
          <div class="balance-val">\${{ totalSpentWhole }}<span>.{{ totalSpentCents }}</span></div>
          <div class="balance-trend" [class.negative-trend]="spentTrend < 0">
            <i class="fas" [class.fa-arrow-trend-up]="spentTrend >= 0" [class.fa-arrow-trend-down]="spentTrend < 0"></i>
            {{ spentTrend >= 0 ? '+' : '' }}{{ spentTrend | number:'1.0-0' }}% this month
          </div>
          <div class="sparkline">
            <svg viewBox="0 0 160 50" preserveAspectRatio="none">
              <polyline points="0,40 30,35 60,38 90,20 120,25 160,10"
                fill="none" stroke="#4f6ef7" stroke-width="2.5"/>
              <polyline points="0,40 30,35 60,38 90,20 120,25 160,10 160,50 0,50"
                fill="url(#spark-grad)" stroke="none" opacity="0.18"/>
              <defs>
                <linearGradient id="spark-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#4f6ef7"/>
                  <stop offset="100%" stop-color="transparent"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <a routerLink="/cart" class="btn-topup"><i class="fas fa-cart-shopping"></i> Go to Cart +</a>
          </div>
        </div>

        <!-- Categories -->
        <div class="rp-card">
          <div class="rp-card-header">
            <span class="rp-title">Categories</span>
            <a routerLink="/products" class="rp-see-all">See All \u203A</a>
          </div>
          <ng-container *ngIf="loadingCategories">
            <app-skeleton type="rect" [count]="6" [active]="true" height="36px" [round]="true"></app-skeleton>
          </ng-container>
          <div class="cat-list" *ngIf="!loadingCategories">
            <a *ngFor="let cat of categories"
               [routerLink]="['/products']" [queryParams]="{category: cat._id}"
               class="cat-row">
              <span class="cat-icon-sm"><i [class]="getCategoryIconClass(cat.name)"></i></span>
              <span class="cat-row-name">{{ cat.name }}</span>
              <span class="cat-arrow">\u203A</span>
            </a>
            <a routerLink="/products" class="cat-row cat-all">
              <span class="cat-icon-sm cat-icon-all"><i class="fas fa-store"></i></span>
              <span class="cat-row-name">All Products</span>
              <span class="cat-arrow">\u203A</span>
            </a>
          </div>
        </div>

        <!-- Top Rated -->
        <div class="rp-card" *ngIf="topRated.length > 0">
          <div class="rp-card-header">
            <span class="rp-title"><i class="fas fa-trophy" style="color:#f59e0b;margin-right:6px;font-size:0.85rem"></i>Top Rated</span>
            <a routerLink="/products" class="rp-see-all">See All \u203A</a>
          </div>
          <div class="history-list">
            <a *ngFor="let p of topRated; let i = index" [routerLink]="['/products', p._id]" class="history-row">
              <div class="rank-badge" [class.rank-gold]="i===0" [class.rank-silver]="i===1" [class.rank-bronze]="i===2">
                {{ i + 1 }}
              </div>
              <div class="history-thumb">
                <img [src]="getProductImage(p)" [alt]="p.name"
                     onerror="this.src='https://placehold.co/40x40/1e2235/4f6ef7?text=G'" />
              </div>
              <div class="history-info">
                <span class="history-name">{{ p.name | slice:0:20 }}{{ p.name.length > 20 ? '\u2026' : '' }}</span>
                <span class="history-stars">
                  <span *ngFor="let s of [1,2,3,4,5]" class="star-sm" [class.filled]="s <= p.rating">\u2605</span>
                  <span class="rv-sm">({{ p.numReviews }})</span>
                </span>
              </div>
              <span class="history-price">\${{ p.price | number:'1.2-2' }}</span>
            </a>
          </div>
        </div>

        <!-- New Arrivals mini list -->
        <div class="rp-card" *ngIf="newArrivals.length > 0">
          <div class="rp-card-header">
            <span class="rp-title"><i class="fas fa-certificate" style="color:#22c55e;margin-right:6px;font-size:0.85rem"></i>New Arrivals</span>
            <a routerLink="/products" class="rp-see-all">See All \u203A</a>
          </div>
          <div class="history-list">
            <a *ngFor="let p of newArrivals.slice(0,4)" [routerLink]="['/products', p._id]" class="history-row">
              <div class="history-thumb">
                <img [src]="getProductImage(p)" [alt]="p.name"
                     onerror="this.src='https://placehold.co/40x40/1e2235/4f6ef7?text=G'" />
              </div>
              <div class="history-info">
                <span class="history-name">{{ p.name | slice:0:20 }}{{ p.name.length > 20 ? '\u2026' : '' }}</span>
                <span class="history-meta">
                  <i [class]="getCategoryIconClass($any(p.category)?.name || '')"></i>
                  {{ $any(p.category)?.name || 'Game' }}
                </span>
              </div>
              <span class="history-price">\${{ p.price | number:'1.2-2' }}</span>
            </a>
          </div>
        </div>

      </aside>
    </div> <!-- /page-layout -->
  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;2c64f85e79f552040e942fafc3f7c5cbf924676ec5b7c2caa73ae7eb87bac6fd;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/features/home/home.component.ts */\n:host {\n  display: block;\n  overflow-x: hidden;\n}\n.hero-banner {\n  position: relative;\n  width: 100%;\n  height: 520px;\n  overflow: hidden;\n  background: #0d0f1c;\n}\n.hero-skeleton {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #1e2235 25%,\n      #252840 50%,\n      #1e2235 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.hero-slides {\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n}\n.hero-slide {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  pointer-events: none;\n  transform: translateX(60px);\n  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.hero-slide.active {\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateX(0);\n  animation: slideIn 0.7s cubic-bezier(0.4, 0, 0.2, 1) both;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(80px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.hero-slide img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transform: scale(1.04);\n  transition: transform 8s ease;\n}\n.hero-slide.active img {\n  transform: scale(1);\n}\n.hero-gradient {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(10, 12, 24, 0.98) 0%,\n      rgba(10, 12, 24, 0.82) 35%,\n      rgba(10, 12, 24, 0.35) 58%,\n      transparent 78%),\n    linear-gradient(\n      to top,\n      rgba(10, 12, 24, 0.85) 0%,\n      rgba(10, 12, 24, 0.2) 30%,\n      transparent 55%),\n    radial-gradient(\n      ellipse at top right,\n      rgba(0, 0, 0, 0.5) 0%,\n      transparent 60%);\n}\n.hero-content {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 40px 48px;\n  max-width: 560px;\n}\n.hero-slide.active .hero-badges {\n  animation: heroItemIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.15s both;\n}\n.hero-slide.active .hero-title {\n  animation: heroItemIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.28s both;\n}\n.hero-slide.active .hero-rating {\n  animation: heroItemIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.34s both;\n}\n.hero-slide.active .hero-desc {\n  animation: heroItemIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.42s both;\n}\n.hero-slide.active .hero-actions {\n  animation: heroItemIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.52s both;\n}\n@keyframes heroItemIn {\n  from {\n    opacity: 0;\n    transform: translateY(22px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero-badges {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 14px;\n}\n.hbadge {\n  padding: 4px 12px;\n  border-radius: 50px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  backdrop-filter: blur(8px);\n}\n.hbadge-hot {\n  background: rgba(239, 68, 68, 0.25);\n  color: #ef4444;\n  border: 1px solid rgba(239, 68, 68, 0.4);\n}\n.hbadge-new {\n  background: rgba(34, 197, 94, 0.2);\n  color: #22c55e;\n  border: 1px solid rgba(34, 197, 94, 0.35);\n}\n.hbadge-cat {\n  background: rgba(79, 110, 247, 0.2);\n  color: #a5b4fc;\n  border: 1px solid rgba(79, 110, 247, 0.35);\n}\n.hero-title {\n  font-size: clamp(1.6rem, 3vw, 2.4rem);\n  font-weight: 900;\n  color: #fff;\n  line-height: 1.15;\n  margin-bottom: 12px;\n  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);\n}\n.hero-desc {\n  font-size: 0.92rem;\n  color: rgba(255, 255, 255, 0.72);\n  line-height: 1.6;\n  margin-bottom: 24px;\n  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);\n}\n.hero-actions {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.btn-hero-buy {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 13px 30px;\n  border-radius: 50px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: #fff;\n  font-size: 0.95rem;\n  font-weight: 700;\n  text-decoration: none;\n  box-shadow: 0 6px 24px rgba(79, 110, 247, 0.45);\n  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s;\n  animation: btnPulse 2.8s ease-in-out infinite;\n}\n@keyframes btnPulse {\n  0%, 100% {\n    box-shadow: 0 6px 24px rgba(79, 110, 247, 0.45);\n  }\n  50% {\n    box-shadow: 0 6px 36px rgba(124, 58, 237, 0.7), 0 0 60px rgba(79, 110, 247, 0.25);\n  }\n}\n.btn-hero-buy:hover {\n  transform: translateY(-3px) scale(1.03);\n  box-shadow: 0 14px 36px rgba(79, 110, 247, 0.65);\n  animation: none;\n}\n.btn-hero-wish {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #ec4899;\n  font-size: 1rem;\n  cursor: pointer;\n  backdrop-filter: blur(8px);\n  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.btn-hero-wish:hover {\n  background: rgba(236, 72, 153, 0.2);\n  transform: scale(1.12);\n}\n.hero-live {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: rgba(0, 0, 0, 0.55);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #e0e4ff;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.live-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #22c55e;\n  animation: blink 1.2s infinite;\n}\n@keyframes blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n}\n.hero-nav {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: rgba(13, 15, 28, 0.6);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: #fff;\n  font-size: 0.95rem;\n  cursor: pointer;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero-nav:hover {\n  background: rgba(79, 110, 247, 0.6);\n  border-color: rgba(79, 110, 247, 0.8);\n  transform: translateY(-50%) scale(1.1);\n  box-shadow: 0 0 20px rgba(79, 110, 247, 0.4);\n}\n.hero-prev {\n  left: 18px;\n}\n.hero-next {\n  right: 18px;\n}\n.hero-rating {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.hr-stars {\n  display: flex;\n  gap: 2px;\n}\n.hr-stars i {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.2);\n}\n.hr-stars i.filled {\n  color: #f59e0b;\n}\n.hr-stars i.half {\n  color: #f59e0b;\n  opacity: 0.6;\n}\n.hr-score {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #f59e0b;\n}\n.hr-reviews {\n  font-size: 0.75rem;\n  color: rgba(255, 255, 255, 0.45);\n}\n.hero-dots {\n  position: absolute;\n  bottom: 20px;\n  left: 48px;\n  display: flex;\n  gap: 7px;\n  z-index: 10;\n}\n.dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.dot.active {\n  width: 24px;\n  border-radius: 4px;\n  background: #4f6ef7;\n}\n.hero-thumbs {\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  z-index: 10;\n}\n.hero-thumb {\n  position: relative;\n  width: 112px;\n  height: 66px;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  cursor: pointer;\n  padding: 0;\n  opacity: 0.45;\n  transition:\n    opacity 0.3s ease,\n    border-color 0.3s ease,\n    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.hero-thumb:hover {\n  opacity: 0.75;\n  transform: scale(1.06);\n}\n.hero-thumb.active {\n  opacity: 1;\n  border-color: #4f6ef7;\n  transform: scale(1.06);\n  box-shadow: 0 0 0 2px rgba(79, 110, 247, 0.4), 0 4px 16px rgba(0, 0, 0, 0.5);\n}\n.hero-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.thumb-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.65) 0%,\n      transparent 55%);\n}\n.thumb-name {\n  position: absolute;\n  bottom: 4px;\n  left: 6px;\n  right: 6px;\n  font-size: 0.6rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.9);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1;\n}\n.thumb-active-bar {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: #4f6ef7;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.hero-thumb.active .thumb-active-bar {\n  opacity: 1;\n}\n.page-layout {\n  display: flex;\n  gap: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 24px 24px 80px;\n  align-items: flex-start;\n  animation: pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.center-feed {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.stats-bar {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #1a1d30 0%,\n      #1e2235 100%);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 18px;\n  padding: 16px 22px;\n  animation: slideDown 0.4s 0.1s both;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.stat-chip {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n  justify-content: center;\n}\n.stat-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.stat-icon-blue {\n  background: rgba(79, 110, 247, 0.18);\n  color: #4f6ef7;\n  box-shadow: 0 0 12px rgba(79, 110, 247, 0.2);\n}\n.stat-icon-purple {\n  background: rgba(124, 58, 237, 0.18);\n  color: #a78bfa;\n  box-shadow: 0 0 12px rgba(124, 58, 237, 0.2);\n}\n.stat-icon-red {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n  box-shadow: 0 0 12px rgba(239, 68, 68, 0.15);\n}\n.stat-icon-gold {\n  background: rgba(245, 158, 11, 0.15);\n  color: #fbbf24;\n  box-shadow: 0 0 12px rgba(245, 158, 11, 0.15);\n}\n.stat-text {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.stat-val {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1;\n}\n.stat-lbl {\n  font-size: 0.7rem;\n  color: #5a5e7a;\n  font-weight: 500;\n}\n.stat-sep {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.06);\n  flex-shrink: 0;\n}\n.filter-pills-wrap {\n  position: relative;\n  overflow: hidden;\n}\n.filter-pills-wrap::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 40px;\n  background:\n    linear-gradient(\n      to right,\n      transparent,\n      #161929);\n  pointer-events: none;\n}\n.filter-pills {\n  display: flex;\n  gap: 10px;\n  overflow-x: auto;\n  padding-bottom: 2px;\n  padding-top: 2px;\n  scrollbar-width: none;\n  animation: slideDown 0.4s 0.15s both;\n}\n.filter-pills::-webkit-scrollbar {\n  display: none;\n}\n.pill {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border-radius: 50px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #a0a4c0;\n  cursor: pointer;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.pill:hover:not(.active) {\n  background: rgba(255, 255, 255, 0.09);\n  color: #d0d4f0;\n  transform: translateY(-2px);\n}\n.pill.active {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 110, 247, 0.28),\n      rgba(124, 58, 237, 0.22));\n  border-color: rgba(79, 110, 247, 0.55);\n  color: #fff;\n  box-shadow: 0 4px 18px rgba(79, 110, 247, 0.3), inset 0 0 0 1px rgba(79, 110, 247, 0.15);\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.sh-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.sh-accent {\n  display: block;\n  width: 4px;\n  height: 24px;\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      180deg,\n      #4f6ef7,\n      #7c3aed);\n  flex-shrink: 0;\n  box-shadow: 0 0 10px rgba(79, 110, 247, 0.5);\n}\n.sh-accent-green {\n  background:\n    linear-gradient(\n      180deg,\n      #22c55e,\n      #16a34a);\n  box-shadow: 0 0 10px rgba(34, 197, 94, 0.4);\n}\n.sh-left h2 {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  margin: 0;\n}\n.item-count {\n  font-size: 0.78rem;\n  color: #5a5e7a;\n  background: rgba(255, 255, 255, 0.05);\n  padding: 3px 10px;\n  border-radius: 50px;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n}\n.badge-new-tag {\n  font-size: 0.62rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: #fff;\n  padding: 3px 9px;\n  border-radius: 6px;\n  letter-spacing: 0.8px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  box-shadow: 0 2px 10px rgba(34, 197, 94, 0.4);\n  animation: badgePop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n@keyframes badgePop {\n  from {\n    transform: scale(0.6);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.sh-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.sort-wrap {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.sort-icon {\n  color: #5a5e7a;\n  font-size: 0.8rem;\n}\n.sort-select {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  border-radius: 50px;\n  padding: 7px 16px;\n  color: #a0a4c0;\n  font-size: 0.82rem;\n  cursor: pointer;\n  outline: none;\n  transition: border-color 0.2s, background 0.2s;\n}\n.sort-select:focus {\n  border-color: rgba(79, 110, 247, 0.4);\n  background: rgba(79, 110, 247, 0.06);\n}\n.see-all-link {\n  color: #4f6ef7;\n  font-size: 0.82rem;\n  font-weight: 700;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border-radius: 50px;\n  border: 1px solid rgba(79, 110, 247, 0.25);\n  transition: all 0.2s;\n}\n.see-all-link:hover {\n  background: rgba(79, 110, 247, 0.1);\n  border-color: rgba(79, 110, 247, 0.45);\n  gap: 8px;\n}\n.games-section {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.games-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 18px;\n}\n.games-grid > *:nth-child(1) {\n  animation: cardIn 0.5s 0.05s both;\n}\n.games-grid > *:nth-child(2) {\n  animation: cardIn 0.5s 0.1s both;\n}\n.games-grid > *:nth-child(3) {\n  animation: cardIn 0.5s 0.15s both;\n}\n.games-grid > *:nth-child(4) {\n  animation: cardIn 0.5s 0.2s both;\n}\n.games-grid > *:nth-child(5) {\n  animation: cardIn 0.5s 0.25s both;\n}\n.games-grid > *:nth-child(6) {\n  animation: cardIn 0.5s 0.3s both;\n}\n.games-grid > *:nth-child(n+7) {\n  animation: cardIn 0.5s 0.32s both;\n}\n@keyframes cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n}\n.empty-icon {\n  font-size: 3rem;\n  color: rgba(79, 110, 247, 0.3);\n  margin-bottom: 16px;\n}\n.empty-title {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #e0e4ff;\n  margin-bottom: 8px;\n}\n.empty-text {\n  color: #5a5e7a;\n  font-size: 0.9rem;\n  margin-bottom: 22px;\n}\n.empty-actions {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.btn-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 11px 22px;\n  border-radius: 50px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: #fff;\n  font-size: 0.88rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.22s;\n  box-shadow: 0 4px 16px rgba(79, 110, 247, 0.35);\n}\n.btn-pill:hover {\n  transform: translateY(-2px) scale(1.03);\n  box-shadow: 0 8px 24px rgba(79, 110, 247, 0.5);\n}\n.btn-pill-outline {\n  background: transparent;\n  border: 1px solid rgba(79, 110, 247, 0.4);\n  color: #4f6ef7;\n  box-shadow: none;\n}\n.btn-pill-outline:hover {\n  background: rgba(79, 110, 247, 0.1);\n  box-shadow: none;\n}\n.arrivals-section {\n  width: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(26, 29, 48, 0.7) 0%,\n      rgba(22, 25, 41, 0.5) 100%);\n  border-top: 1px solid rgba(34, 197, 94, 0.12);\n  border-bottom: 1px solid rgba(34, 197, 94, 0.12);\n  padding: 20px 0;\n}\n.arrivals-inner {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.sh-arrivals-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.arrivals-count {\n  font-size: 0.75rem;\n  color: #5a5e7a;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.04);\n  padding: 4px 10px;\n  border-radius: 50px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.arrivals-scroll-wrap {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n.arrivals-scroll {\n  display: flex;\n  gap: 14px;\n  overflow-x: auto;\n  width: 100%;\n  padding: 10px 4px 8px 4px;\n}\n.arrivals-scroll::-webkit-scrollbar {\n  height: 3px;\n}\n.arrivals-scroll::-webkit-scrollbar-track {\n  background: transparent;\n}\n.arrivals-scroll::-webkit-scrollbar-thumb {\n  background: rgba(34, 197, 94, 0.4);\n  border-radius: 2px;\n}\n.arrivals-fade-right {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 8px;\n  width: 60px;\n  background:\n    linear-gradient(\n      to right,\n      transparent,\n      rgba(22, 25, 41, 0.95));\n  pointer-events: none;\n}\n.arrival-card {\n  flex-shrink: 0;\n  width: 210px;\n  background: #1a1d30;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  overflow: hidden;\n  text-decoration: none;\n  position: relative;\n  z-index: 1;\n  transition:\n    transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1),\n    box-shadow 0.28s,\n    border-color 0.28s,\n    z-index 0s;\n}\n.arrival-card:hover {\n  transform: translateY(-6px) scale(1.02);\n  box-shadow: 0 20px 44px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(34, 197, 94, 0.25);\n  border-color: rgba(34, 197, 94, 0.35);\n  z-index: 10;\n}\n.arrival-img-wrap {\n  position: relative;\n  height: 132px;\n  overflow: hidden;\n}\n.arrival-img-wrap img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.arrival-card:hover .arrival-img-wrap img {\n  transform: scale(1.12);\n}\n.arrival-img-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(26, 29, 48, 0.9) 0%,\n      rgba(26, 29, 48, 0.2) 50%,\n      transparent 100%);\n  pointer-events: none;\n}\n.arrival-new-badge {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  background: rgba(34, 197, 94, 0.9);\n  color: #fff;\n  font-size: 0.65rem;\n  padding: 3px 7px;\n  border-radius: 4px;\n  z-index: 2;\n  animation: newBadgePulse 2s ease-in-out infinite;\n}\n@keyframes newBadgePulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);\n  }\n  50% {\n    box-shadow: 0 0 0 5px rgba(34, 197, 94, 0);\n  }\n}\n.arrival-price {\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n  background: rgba(15, 17, 30, 0.82);\n  backdrop-filter: blur(8px);\n  color: #fff;\n  font-size: 0.76rem;\n  font-weight: 800;\n  padding: 4px 10px;\n  border-radius: 8px;\n  z-index: 2;\n  border: 1px solid rgba(79, 110, 247, 0.35);\n}\n.arrival-price-free {\n  background: rgba(15, 17, 30, 0.82);\n  border-color: rgba(34, 197, 94, 0.45);\n  color: #34d399;\n}\n.arrival-hover-actions {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  opacity: 0;\n  background: rgba(10, 12, 24, 0.52);\n  transition: opacity 0.22s ease;\n  z-index: 3;\n}\n.arrival-card:hover .arrival-hover-actions {\n  opacity: 1;\n}\n.arrival-btn-cart,\n.arrival-btn-wish {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.22s;\n}\n.arrival-btn-cart {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(79, 110, 247, 0.5);\n  transform: translateY(8px);\n}\n.arrival-card:hover .arrival-btn-cart {\n  transform: translateY(0);\n}\n.arrival-btn-cart:hover {\n  transform: scale(1.12) !important;\n  box-shadow: 0 6px 20px rgba(79, 110, 247, 0.7);\n}\n.arrival-btn-wish {\n  background: rgba(236, 72, 153, 0.2);\n  color: #f472b6;\n  border: 1px solid rgba(236, 72, 153, 0.35);\n  box-shadow: 0 4px 14px rgba(236, 72, 153, 0.2);\n  transform: translateY(8px);\n}\n.arrival-card:hover .arrival-btn-wish {\n  transform: translateY(0);\n  transition-delay: 0.04s;\n}\n.arrival-btn-wish:hover {\n  transform: scale(1.12) !important;\n  background: rgba(236, 72, 153, 0.35);\n}\n.arrival-info {\n  padding: 11px 13px 14px;\n}\n.arrival-name {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #e0e4ff;\n  margin: 0 0 6px 0;\n  line-height: 1.3;\n}\n.arrival-meta {\n  font-size: 0.7rem;\n  color: #5a5e7a;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-bottom: 8px;\n}\n.arrival-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.arrival-stars {\n  display: flex;\n  align-items: center;\n  gap: 1px;\n}\n.star {\n  font-size: 0.8rem;\n  color: rgba(255, 255, 255, 0.13);\n}\n.star.filled {\n  color: #f59e0b;\n}\n.arrival-rating-val {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #f59e0b;\n  margin-left: 4px;\n}\n.right-panel {\n  width: 300px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  position: sticky;\n  top: 20px;\n  animation: panelIn 0.5s ease 0.15s both;\n}\n@keyframes panelIn {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.rp-card {\n  background: #1a1d30;\n  border-radius: 18px;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  padding: 18px;\n  transition: transform 0.22s ease, box-shadow 0.22s ease;\n}\n.rp-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);\n}\n.rp-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.rp-title {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #fff;\n  display: flex;\n  align-items: center;\n}\n.rp-more {\n  background: none;\n  border: none;\n  color: #5a5e7a;\n  font-size: 1.2rem;\n  cursor: pointer;\n  letter-spacing: 2px;\n  transition: color 0.2s;\n}\n.rp-more:hover {\n  color: #a0a4c0;\n}\n.rp-see-all {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #4f6ef7;\n  text-decoration: none;\n  padding: 4px 10px;\n  border-radius: 50px;\n  border: 1px solid rgba(79, 110, 247, 0.25);\n  transition: all 0.2s;\n}\n.rp-see-all:hover {\n  background: rgba(79, 110, 247, 0.1);\n  border-color: rgba(79, 110, 247, 0.4);\n}\n.finance-card {\n  padding: 0;\n  overflow: hidden;\n}\n.finance-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 18px 14px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 110, 247, 0.15) 0%,\n      rgba(124, 58, 237, 0.12) 100%);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n  margin-bottom: 0;\n}\n.finance-header-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.finance-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(79, 110, 247, 0.4);\n}\n.finance-body {\n  padding: 16px 18px 18px;\n}\n.finance-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n  margin-bottom: 16px;\n}\n.fchip {\n  padding: 5px 12px;\n  border-radius: 50px;\n  font-size: 0.73rem;\n  font-weight: 600;\n  transition: transform 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.fchip:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.fchip-blue {\n  background: rgba(79, 110, 247, 0.15);\n  color: #818cf8;\n  border: 1px solid rgba(79, 110, 247, 0.2);\n}\n.fchip-pink {\n  background: rgba(236, 72, 153, 0.12);\n  color: #f472b6;\n  border: 1px solid rgba(236, 72, 153, 0.2);\n}\n.fchip-gold {\n  background: rgba(245, 158, 11, 0.12);\n  color: #fbbf24;\n  border: 1px solid rgba(245, 158, 11, 0.2);\n}\n.fchip-add {\n  background: rgba(255, 255, 255, 0.06);\n  color: #a0a4c0;\n  border: 1px dashed rgba(255, 255, 255, 0.18);\n  cursor: pointer;\n}\n.balance-label {\n  font-size: 0.7rem;\n  color: #5a5e7a;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.balance-val {\n  font-size: 2.1rem;\n  font-weight: 900;\n  color: #fff;\n  line-height: 1;\n  letter-spacing: -1px;\n}\n.balance-val span {\n  font-size: 1rem;\n  color: #6b7280;\n  font-weight: 600;\n}\n.balance-trend {\n  font-size: 0.77rem;\n  color: #22c55e;\n  margin: 7px 0 14px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.balance-trend.negative-trend {\n  color: #ef4444;\n}\n.sparkline {\n  height: 50px;\n}\n.sparkline svg {\n  width: 100%;\n  height: 100%;\n}\n.btn-topup {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 16px;\n  padding: 13px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.88rem;\n  text-decoration: none;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 4px 18px rgba(79, 110, 247, 0.4);\n  letter-spacing: 0.2px;\n}\n.btn-topup:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 26px rgba(79, 110, 247, 0.55);\n}\n.cat-list {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.cat-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 10px;\n  border-radius: 10px;\n  text-decoration: none;\n  color: #a0a4c0;\n  font-size: 0.86rem;\n  transition: all 0.2s;\n}\n.cat-row:hover {\n  background: rgba(79, 110, 247, 0.08);\n  color: #c4c8f0;\n  padding-left: 14px;\n  border-color: rgba(79, 110, 247, 0.15);\n}\n.cat-all {\n  color: #4f6ef7;\n}\n.cat-all:hover {\n  background: rgba(79, 110, 247, 0.12);\n}\n.cat-icon-sm {\n  font-size: 0.95rem;\n  flex-shrink: 0;\n  width: 18px;\n  text-align: center;\n}\n.cat-icon-all {\n  color: #4f6ef7;\n}\n.cat-row-name {\n  flex: 1;\n  font-weight: 500;\n}\n.cat-arrow {\n  color: #3d4165;\n  font-size: 0.85rem;\n  transition: color 0.2s;\n}\n.cat-row:hover .cat-arrow {\n  color: #4f6ef7;\n}\n.history-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.history-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 7px 8px;\n  border-radius: 10px;\n  text-decoration: none;\n  transition: background 0.2s;\n}\n.history-row:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n.history-thumb {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.history-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.history-info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.history-name {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #e0e4ff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.history-meta {\n  font-size: 0.72rem;\n  color: #5a5e7a;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.history-stars {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.star-sm {\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.15);\n}\n.star-sm.filled {\n  color: #f59e0b;\n}\n.rv-sm {\n  font-size: 0.68rem;\n  color: #5a5e7a;\n  margin-left: 3px;\n}\n.history-price {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #4f6ef7;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.rank-badge {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.68rem;\n  font-weight: 800;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.08);\n  color: #a0a4c0;\n}\n.rank-gold {\n  background: rgba(245, 158, 11, 0.2);\n  color: #f59e0b;\n}\n.rank-silver {\n  background: rgba(148, 163, 184, 0.2);\n  color: #94a3b8;\n}\n.rank-bronze {\n  background: rgba(180, 120, 60, 0.2);\n  color: #b4783c;\n}\n.toast {\n  position: fixed;\n  bottom: 32px;\n  right: 32px;\n  background: rgba(26, 29, 48, 0.95);\n  backdrop-filter: blur(16px);\n  color: #fff;\n  border: 1px solid rgba(34, 197, 94, 0.4);\n  padding: 14px 20px;\n  border-radius: 16px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45), inset 0 0 0 1px rgba(255, 255, 255, 0.05);\n  z-index: 9999;\n  font-weight: 600;\n  font-size: 0.88rem;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  animation: toastIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n  min-width: 220px;\n}\n.toast i {\n  font-size: 1.1rem;\n  color: #22c55e;\n}\n.toast.toast-error {\n  border-color: rgba(239, 68, 68, 0.45);\n}\n.toast.toast-error i {\n  color: #f87171;\n}\n@keyframes toastIn {\n  from {\n    transform: translateX(90px) scale(0.88);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0) scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 1100px) {\n  .right-panel {\n    display: none;\n  }\n}\n@media (max-width: 900px) {\n  .stats-bar {\n    padding: 12px 14px;\n  }\n  .stat-chip {\n    gap: 8px;\n  }\n  .stat-icon {\n    width: 30px;\n    height: 30px;\n    font-size: 0.78rem;\n  }\n  .hero-thumbs {\n    display: none;\n  }\n  .hero-dots {\n    display: flex;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  .arrivals-section {\n    padding: 14px 0;\n  }\n  .arrivals-inner {\n    padding: 0 16px;\n  }\n}\n@media (min-width: 901px) {\n  .hero-dots {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .hero-banner {\n    height: 340px;\n  }\n  .hero-content {\n    padding: 24px 22px;\n    max-width: 100%;\n  }\n  .page-layout {\n    padding: 16px 14px 80px;\n    gap: 18px;\n  }\n  .toast {\n    bottom: 84px;\n    right: 16px;\n    left: 16px;\n    min-width: unset;\n    font-size: 0.83rem;\n  }\n  .filter-pills .pill {\n    padding: 7px 14px;\n    font-size: 0.79rem;\n  }\n  .section-header {\n    gap: 8px;\n  }\n  .sh-left h2 {\n    font-size: 1rem;\n  }\n  .sort-select {\n    padding: 6px 12px;\n    font-size: 0.79rem;\n  }\n}\n@media (max-width: 580px) {\n  .hero-banner {\n    height: 260px;\n  }\n  .hero-title {\n    font-size: 1.25rem;\n  }\n  .hero-content {\n    padding: 18px 16px;\n  }\n  .hero-desc {\n    font-size: 0.8rem;\n    margin-bottom: 16px;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .hero-rating {\n    margin-bottom: 8px;\n  }\n  .hr-score {\n    font-size: 0.8rem;\n  }\n  .hr-reviews {\n    display: none;\n  }\n  .btn-hero-buy {\n    padding: 10px 20px;\n    font-size: 0.85rem;\n  }\n  .btn-hero-wish {\n    width: 40px;\n    height: 40px;\n  }\n  .stats-bar {\n    gap: 0;\n    padding: 10px 10px;\n  }\n  .stat-text .stat-lbl {\n    display: none;\n  }\n  .stat-val {\n    font-size: 1rem;\n  }\n  .stat-icon {\n    width: 28px;\n    height: 28px;\n    font-size: 0.72rem;\n  }\n  .games-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n  .page-layout {\n    padding: 12px 12px 80px;\n  }\n  .arrival-card {\n    width: 170px;\n  }\n  .arrival-img-wrap {\n    height: 108px;\n  }\n  .arrivals-section {\n    padding: 12px 0;\n  }\n  .arrivals-inner {\n    padding: 0 14px;\n  }\n  .hbadge {\n    font-size: 0.65rem;\n    padding: 3px 9px;\n  }\n  .hero-live {\n    font-size: 0.68rem;\n    padding: 4px 10px;\n    top: 12px;\n    right: 12px;\n  }\n  .sort-select {\n    padding: 5px 10px;\n    font-size: 0.76rem;\n  }\n  .see-all-link {\n    padding: 5px 8px;\n    font-size: 0.76rem;\n    gap: 4px;\n  }\n  .sh-right {\n    gap: 8px;\n  }\n  .sort-icon {\n    display: none;\n  }\n}\n@media (max-width: 430px) {\n  .section-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 6px;\n  }\n  .sh-right {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .arrival-card {\n    width: 150px;\n  }\n  .arrival-img-wrap {\n    height: 96px;\n  }\n  .arrival-name {\n    font-size: 0.8rem;\n  }\n  .hero-banner {\n    height: 240px;\n  }\n  .hero-content {\n    padding: 14px 14px;\n  }\n  .btn-hero-buy {\n    padding: 9px 16px;\n    font-size: 0.82rem;\n  }\n}\n@media (max-width: 400px) {\n  .games-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 8px;\n  }\n  .hero-banner {\n    height: 220px;\n  }\n  .stats-bar {\n    padding: 8px;\n  }\n  .stat-chip {\n    gap: 6px;\n  }\n  .page-layout {\n    padding: 10px 10px 80px;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], () => [{ type: ProductService }, { type: CategoryService }, { type: CartService }, { type: AuthService }, { type: WishlistService }, { type: OrderService }, { type: Router }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/features/home/home.component.ts", lineNumber: 1092 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-ZLUMMPH5.js.map
