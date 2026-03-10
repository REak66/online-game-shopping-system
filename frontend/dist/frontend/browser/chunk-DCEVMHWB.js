import {
  StarRatingComponent
} from "./chunk-W6CYOKMK.js";
import {
  WishlistService
} from "./chunk-LPERBCHH.js";
import {
  ProductService
} from "./chunk-M7BLKAAD.js";
import {
  DefaultValueAccessor,
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
  SpinComponent
} from "./chunk-GP5OZDAH.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-JDYM2Z3R.js";
import "./chunk-QLMOGZJX.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IXUP4X5N.js";

// src/app/features/products/product-detail/product-detail.component.ts
var _c0 = () => [];
var _c1 = () => [1, 2, 3, 4, 5];
var _c2 = () => [1, 2, 3];
function ProductDetailComponent_div_0_div_14_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 39);
    \u0275\u0275listener("click", function ProductDetailComponent_div_0_div_14_img_1_Template_img_click_0_listener() {
      const img_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.selectedImage = img_r3);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r3.selectedImage === img_r3);
    \u0275\u0275property("src", img_r3, \u0275\u0275sanitizeUrl)("alt", ctx_r3.product.name);
  }
}
function ProductDetailComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, ProductDetailComponent_div_0_div_14_img_1_Template, 1, 4, "img", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.product.images);
  }
}
function ProductDetailComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.categoryName);
  }
}
function ProductDetailComponent_div_0_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "label");
    \u0275\u0275text(2, "Quantity:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42)(4, "button", 43);
    \u0275\u0275listener("click", function ProductDetailComponent_div_0_div_34_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.decreaseQty());
    });
    \u0275\u0275text(5, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 43);
    \u0275\u0275listener("click", function ProductDetailComponent_div_0_div_34_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.increaseQty());
    });
    \u0275\u0275text(9, "+");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.quantity);
  }
}
function ProductDetailComponent_div_0_i_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 44);
  }
}
function ProductDetailComponent_div_0_div_56_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275listener("click", function ProductDetailComponent_div_0_div_56_span_4_Template_span_click_0_listener() {
      const s_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.reviewRating = s_r8);
    });
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", s_r8 <= ctx_r3.reviewRating);
  }
}
function ProductDetailComponent_div_0_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "h3");
    \u0275\u0275text(2, "Write a Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275template(4, ProductDetailComponent_div_0_div_56_span_4_Template, 2, 2, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "textarea", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ProductDetailComponent_div_0_div_56_Template_textarea_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.reviewComment, $event) || (ctx_r3.reviewComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 49);
    \u0275\u0275listener("click", function ProductDetailComponent_div_0_div_56_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.submitReview());
    });
    \u0275\u0275text(7, " Submit Review ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c1));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.reviewComment);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r3.reviewRating || !ctx_r3.reviewComment);
  }
}
function ProductDetailComponent_div_0_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "a", 53);
    \u0275\u0275text(2, "Login to write a review");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_div_0_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "div", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 57);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "app-star-rating", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 59);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const review_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r9.name.charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 5, review_r9.createdAt, "mediumDate"));
    \u0275\u0275advance(2);
    \u0275\u0275property("rating", review_r9.rating);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r9.comment);
  }
}
function ProductDetailComponent_div_0_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "p");
    \u0275\u0275text(2, "No reviews yet. Be the first to review!");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "nav", 5)(2, "a", 6);
    \u0275\u0275text(3, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " / ");
    \u0275\u0275elementStart(5, "a", 7);
    \u0275\u0275text(6, "Products");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " / ");
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "div", 10);
    \u0275\u0275element(13, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ProductDetailComponent_div_0_div_14_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 13);
    \u0275\u0275template(16, ProductDetailComponent_div_0_div_16_Template, 2, 1, "div", 14);
    \u0275\u0275elementStart(17, "h1");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 15);
    \u0275\u0275element(20, "app-star-rating", 16);
    \u0275\u0275elementStart(21, "span", 17);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 18);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 19)(27, "span", 20);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 21);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "p", 22);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, ProductDetailComponent_div_0_div_34_Template, 10, 1, "div", 23);
    \u0275\u0275elementStart(35, "div", 24)(36, "button", 25);
    \u0275\u0275listener("click", function ProductDetailComponent_div_0_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addToCart());
    });
    \u0275\u0275text(37);
    \u0275\u0275template(38, ProductDetailComponent_div_0_i_38_Template, 1, 0, "i", 26);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 27);
    \u0275\u0275listener("click", function ProductDetailComponent_div_0_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleWishlist());
    });
    \u0275\u0275element(41, "i", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 29)(43, "div", 30)(44, "span");
    \u0275\u0275text(45, "Category:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "strong");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 30)(49, "span");
    \u0275\u0275text(50, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "strong");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(53, "div", 31)(54, "h2");
    \u0275\u0275text(55, "Customer Reviews");
    \u0275\u0275elementEnd();
    \u0275\u0275template(56, ProductDetailComponent_div_0_div_56_Template, 8, 4, "div", 32)(57, ProductDetailComponent_div_0_div_57_Template, 3, 0, "div", 33);
    \u0275\u0275elementStart(58, "div", 34);
    \u0275\u0275template(59, ProductDetailComponent_div_0_div_59_Template, 13, 8, "div", 35)(60, ProductDetailComponent_div_0_div_60_Template, 3, 0, "div", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.product.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r3.selectedImage || "https://via.placeholder.com/500x400?text=No+Image", \u0275\u0275sanitizeUrl)("alt", ctx_r3.product.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.product.images && ctx_r3.product.images.length > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("rating", ctx_r3.product.rating);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 31, ctx_r3.product.rating, "1.1-1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", ctx_r3.product.numReviews, " reviews)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(29, 34, ctx_r3.product.price, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("in-stock", ctx_r3.product.stock > 0)("out-stock", ctx_r3.product.stock === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.product.stock > 0 ? "In Stock (" + ctx_r3.product.stock + ")" : "Out of Stock", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.product.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.product.stock > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.product.stock === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.product.stock === 0 ? "Out of Stock" : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.product.stock > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r3.product.stock === 0 ? "" : " Add to Cart", " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r3.inWishlist ? "#ef4444" : "#5a5e7a");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.categoryName);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-green", ctx_r3.product.status === "active");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.product.status);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isLoggedIn);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.product.reviews || \u0275\u0275pureFunction0(37, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.product.reviews || ctx_r3.product.reviews.length === 0);
  }
}
function ProductDetailComponent_app_spin_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spin", 61);
  }
}
function ProductDetailComponent_div_2_app_skeleton_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton", 76);
  }
  if (rf & 2) {
    \u0275\u0275property("active", true)("round", true);
  }
}
function ProductDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63);
    \u0275\u0275element(2, "app-skeleton", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "div", 9);
    \u0275\u0275element(5, "app-skeleton", 65);
    \u0275\u0275elementStart(6, "div", 66);
    \u0275\u0275template(7, ProductDetailComponent_div_2_app_skeleton_7_Template, 1, 2, "app-skeleton", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275element(9, "app-skeleton", 68)(10, "app-skeleton", 69)(11, "app-skeleton", 70)(12, "app-skeleton", 71)(13, "app-skeleton", 72)(14, "app-skeleton", 73);
    \u0275\u0275elementStart(15, "div", 74);
    \u0275\u0275element(16, "app-skeleton", 73)(17, "app-skeleton", 75);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("active", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("active", true)("round", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(14, _c2));
    \u0275\u0275advance(2);
    \u0275\u0275property("active", true);
    \u0275\u0275advance();
    \u0275\u0275property("active", true);
    \u0275\u0275advance();
    \u0275\u0275property("active", true);
    \u0275\u0275advance();
    \u0275\u0275property("active", true);
    \u0275\u0275advance();
    \u0275\u0275property("active", true)("rows", 3);
    \u0275\u0275advance();
    \u0275\u0275property("active", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("active", true);
    \u0275\u0275advance();
    \u0275\u0275property("active", true)("round", true);
  }
}
function ProductDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "h2");
    \u0275\u0275text(2, "Product not found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 78);
    \u0275\u0275text(4, "\u2190 Back to Products");
    \u0275\u0275elementEnd()();
  }
}
var ProductDetailComponent = class _ProductDetailComponent {
  constructor(route, productService, cartService, wishlistService, authService, router, msgService) {
    this.route = route;
    this.productService = productService;
    this.cartService = cartService;
    this.wishlistService = wishlistService;
    this.authService = authService;
    this.router = router;
    this.msgService = msgService;
    this.product = null;
    this.loading = true;
    this.quantity = 1;
    this.selectedImage = "";
    this.inWishlist = false;
    this.reviewRating = 0;
    this.reviewComment = "";
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productService.getProduct(params["id"]).subscribe({
        next: (res) => {
          this.product = res.product;
          this.selectedImage = res.product.image ? "http://localhost:5050" + res.product.image : "";
          this.loading = false;
          this.inWishlist = this.wishlistService.isInWishlist(res.product._id);
        },
        error: () => {
          this.loading = false;
        }
      });
    });
  }
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }
  get categoryName() {
    if (!this.product?.category)
      return "";
    return typeof this.product.category === "string" ? "" : this.product.category.name;
  }
  decreaseQty() {
    if (this.quantity > 1)
      this.quantity--;
  }
  increaseQty() {
    if (this.product && this.quantity < this.product.stock)
      this.quantity++;
  }
  addToCart() {
    if (!this.isLoggedIn) {
      this.router.navigate(["/auth/login"]);
      return;
    }
    this.cartService.addToCart(this.product._id, this.quantity).subscribe({
      next: () => {
        this.msgService.success("Added to cart!");
        this.router.navigate(["/cart"]);
      },
      error: (err) => this.msgService.error(err.error?.message || "Failed to add to cart")
    });
  }
  toggleWishlist() {
    if (!this.isLoggedIn) {
      this.router.navigate(["/auth/login"]);
      return;
    }
    if (this.inWishlist) {
      this.wishlistService.removeFromWishlist(this.product._id).subscribe({
        next: () => {
          this.inWishlist = false;
          this.msgService.info("Removed from wishlist");
        }
      });
    } else {
      this.wishlistService.addToWishlist(this.product._id).subscribe({
        next: () => {
          this.inWishlist = true;
          this.msgService.success("Added to wishlist!");
        }
      });
    }
  }
  submitReview() {
    if (!this.reviewRating || !this.reviewComment)
      return;
    this.productService.addReview(this.product._id, { rating: this.reviewRating, comment: this.reviewComment }).subscribe({
      next: () => {
        this.msgService.success("Review submitted!");
        this.reviewRating = 0;
        this.reviewComment = "";
        this.productService.getProduct(this.product._id).subscribe((res) => this.product = res.product);
      },
      error: (err) => this.msgService.error(err.error?.message || "Failed to submit review")
    });
  }
  static {
    this.\u0275fac = function ProductDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(WishlistService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], decls: 4, vars: 4, consts: [["class", "page-container", 4, "ngIf"], ["size", "lg", "tip", "Loading product...", 4, "ngIf"], ["class", "page-container sk-detail", 4, "ngIf"], ["class", "not-found", 4, "ngIf"], [1, "page-container"], [1, "breadcrumb"], ["routerLink", "/"], ["routerLink", "/products"], [1, "product-layout"], [1, "gallery"], [1, "main-image"], ["onerror", "this.src='https://via.placeholder.com/500x400?text=No+Image'", 3, "src", "alt"], ["class", "thumbnails", 4, "ngIf"], [1, "product-details"], ["class", "category-badge", 4, "ngIf"], [1, "rating-row"], [3, "rating"], [1, "rating-text"], [1, "reviews-count"], [1, "price-row"], [1, "price"], [1, "stock-badge"], [1, "description"], ["class", "quantity-row", 4, "ngIf"], [1, "action-buttons"], [1, "btn-cart", 3, "click", "disabled"], ["class", "fas fa-cart-shopping", 4, "ngIf"], [1, "btn-wishlist", 3, "click"], [1, "fas", "fa-heart"], [1, "product-meta"], [1, "meta-item"], [1, "reviews-section"], ["class", "review-form", 4, "ngIf"], ["class", "login-prompt", 4, "ngIf"], [1, "reviews-list"], ["class", "review-item", 4, "ngFor", "ngForOf"], ["class", "no-reviews", 4, "ngIf"], [1, "thumbnails"], ["class", "thumb", 3, "src", "alt", "active", "click", 4, "ngFor", "ngForOf"], [1, "thumb", 3, "click", "src", "alt"], [1, "category-badge"], [1, "quantity-row"], [1, "qty-control"], [3, "click"], [1, "fas", "fa-cart-shopping"], [1, "review-form"], [1, "star-input"], ["class", "star-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["placeholder", "Share your experience...", "rows", "4", 1, "review-textarea", 3, "ngModelChange", "ngModel"], [1, "btn-submit-review", 3, "click", "disabled"], [1, "star-btn", 3, "click"], [1, "fas", "fa-star"], [1, "login-prompt"], ["routerLink", "/auth/login"], [1, "review-item"], [1, "review-header"], [1, "reviewer-avatar"], [1, "review-date"], [2, "margin-left", "auto", 3, "rating"], [1, "review-comment"], [1, "no-reviews"], ["size", "lg", "tip", "Loading product..."], [1, "page-container", "sk-detail"], [1, "sk-breadcrumb"], ["type", "title", "width", "22%", 3, "active"], ["type", "image", "height", "400px", 3, "active", "round"], [1, "sk-thumbs"], ["type", "image", "width", "80px", "height", "80px", 3, "active", "round", 4, "ngFor", "ngForOf"], ["type", "button", "width", "72px", 3, "active"], ["type", "title", "width", "75%", 3, "active"], ["type", "title", "width", "50%", 3, "active"], ["type", "title", "width", "30%", 3, "active"], ["type", "text", 3, "active", "rows"], ["type", "rect", "height", "52px", 3, "active"], [2, "display", "flex", "gap", "12px", "margin-top", "16px"], ["type", "image", "width", "52px", "height", "52px", 3, "active", "round"], ["type", "image", "width", "80px", "height", "80px", 3, "active", "round"], [1, "not-found"], ["routerLink", "/products", 1, "btn-back"]], template: function ProductDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProductDetailComponent_div_0_Template, 61, 38, "div", 0)(1, ProductDetailComponent_app_spin_1_Template, 1, 0, "app-spin", 1)(2, ProductDetailComponent_div_2_Template, 18, 15, "div", 2)(3, ProductDetailComponent_div_3_Template, 5, 0, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.loading && ctx.product);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && !ctx.product);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, StarRatingComponent, SpinComponent, SkeletonComponent], styles: ['@charset "UTF-8";\n\n\n\n.page-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 40px 20px;\n}\n.sk-detail[_ngcontent-%COMP%]   app-skeleton[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 14px;\n}\n.sk-breadcrumb[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.sk-thumbs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 12px;\n}\n.sk-thumbs[_ngcontent-%COMP%]   app-skeleton[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #9ca3af;\n  margin-bottom: 32px;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6b7280;\n  text-decoration: none;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #2563EB;\n}\n.product-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  margin-bottom: 60px;\n}\n.gallery[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  overflow: hidden;\n  background: #f9fafb;\n  height: 400px;\n}\n.gallery[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.thumbnails[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 12px;\n}\n.thumb[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 10px;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: border-color 0.2s;\n}\n.thumb.active[_ngcontent-%COMP%], \n.thumb[_ngcontent-%COMP%]:hover {\n  border-color: #2563EB;\n}\n.category-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #dbeafe;\n  color: #2563EB;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n  text-transform: uppercase;\n}\n.product-details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #e8eaf6;\n  margin-bottom: 12px;\n}\n.rating-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.rating-text[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #F59E0B;\n}\n.reviews-count[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.85rem;\n}\n.price-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.price[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #e8eaf6;\n}\n.stock-badge[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n.in-stock[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: #4ade80;\n}\n.out-stock[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.description[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  line-height: 1.7;\n  margin-bottom: 24px;\n}\n.quantity-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.quantity-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #c9cbdf;\n}\n.qty-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: rgba(255, 255, 255, 0.07);\n  border-radius: 12px;\n  padding: 4px;\n}\n.qty-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: none;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: 600;\n  transition: background 0.2s;\n}\n.qty-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.2);\n  color: #a5b4fc;\n}\n.qty-control[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.1rem;\n  min-width: 24px;\n  text-align: center;\n  color: #e8eaf6;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.btn-cart[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.btn-cart[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.85;\n}\n.btn-cart[_ngcontent-%COMP%]:disabled {\n  background: rgba(255, 255, 255, 0.1);\n  cursor: not-allowed;\n}\n.btn-wishlist[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border: 2px solid rgba(255, 255, 255, 0.12);\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.05);\n  font-size: 1.3rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-wishlist[_ngcontent-%COMP%]:hover {\n  border-color: #f87171;\n  background: rgba(239, 68, 68, 0.08);\n}\n.product-meta[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  padding-top: 20px;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n  color: #9ca3af;\n}\n.meta-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #c9cbdf;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #4ade80;\n}\n.reviews-section[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n.reviews-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 24px;\n}\n.review-form[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 24px;\n  margin-bottom: 32px;\n}\n.review-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 16px;\n  color: #e8eaf6;\n}\n.star-input[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.star-btn[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: rgba(255, 255, 255, 0.15);\n  cursor: pointer;\n  transition: color 0.2s, transform 0.15s;\n}\n.star-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n.star-btn.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.star-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #F59E0B;\n}\n.review-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  font-size: 0.95rem;\n  outline: none;\n  resize: vertical;\n  box-sizing: border-box;\n  margin-bottom: 16px;\n  background: rgba(255, 255, 255, 0.05);\n  color: #e8eaf6;\n}\n.review-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #4f6ef7;\n}\n.btn-submit-review[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-submit-review[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.login-prompt[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  margin-bottom: 24px;\n}\n.login-prompt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a5b4fc;\n}\n.reviews-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.review-item[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.review-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.reviewer-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n}\n.review-date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #9ca3af;\n}\n.review-comment[_ngcontent-%COMP%] {\n  color: #c9cbdf;\n  line-height: 1.6;\n}\n.no-reviews[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #9ca3af;\n}\n.not-found[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  color: #a5b4fc;\n  text-decoration: none;\n  font-weight: 600;\n  display: inline-block;\n  margin-top: 16px;\n}\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: #1e2235;\n  color: #e8eaf6;\n  padding: 14px 24px;\n  border-radius: 12px;\n  z-index: 9999;\n  font-weight: 600;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n@media (max-width: 1100px) {\n  .product-layout[_ngcontent-%COMP%] {\n    gap: 36px;\n  }\n}\n@media (max-width: 900px) {\n  .product-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 28px;\n  }\n  .gallery[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%] {\n    height: 320px;\n  }\n}\n@media (max-width: 768px) {\n  .product-layout[_ngcontent-%COMP%] {\n    gap: 24px;\n  }\n  .gallery[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%] {\n    height: 260px;\n  }\n  .thumb[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .price[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .toast[_ngcontent-%COMP%] {\n    bottom: 84px;\n    right: 16px;\n    left: 16px;\n    text-align: center;\n  }\n  .page-container[_ngcontent-%COMP%] {\n    padding: 20px 14px 80px;\n  }\n}\n@media (max-width: 580px) {\n  .gallery[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%] {\n    height: 220px;\n  }\n  .thumb[_ngcontent-%COMP%] {\n    width: 52px;\n    height: 52px;\n  }\n  .price[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 400px) {\n  .gallery[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%] {\n    height: 190px;\n  }\n  .price[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n/*# sourceMappingURL=product-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductDetailComponent, [{
    type: Component,
    args: [{ selector: "app-product-detail", standalone: true, imports: [CommonModule, RouterModule, FormsModule, StarRatingComponent, SpinComponent, SkeletonComponent], template: `
    <div class="page-container" *ngIf="!loading && product">
      <!-- Breadcrumb -->
      <nav class="breadcrumb">
        <a routerLink="/">Home</a> /
        <a routerLink="/products">Products</a> /
        <span>{{ product.name }}</span>
      </nav>

      <div class="product-layout">
        <!-- Image Gallery -->
        <div class="gallery">
          <div class="main-image">
            <img [src]="selectedImage || 'https://via.placeholder.com/500x400?text=No+Image'"
              [alt]="product.name"
              onerror="this.src='https://via.placeholder.com/500x400?text=No+Image'" />
          </div>
          <div class="thumbnails" *ngIf="product.images && product.images.length > 1">
            <img *ngFor="let img of product.images" [src]="img" [alt]="product.name"
              class="thumb" [class.active]="selectedImage === img"
              (click)="selectedImage = img" />
          </div>
        </div>

        <!-- Product Info -->
        <div class="product-details">
          <div class="category-badge" *ngIf="categoryName">{{ categoryName }}</div>
          <h1>{{ product.name }}</h1>

          <div class="rating-row">
            <app-star-rating [rating]="product.rating"></app-star-rating>
            <span class="rating-text">{{ product.rating | number:'1.1-1' }}</span>
            <span class="reviews-count">({{ product.numReviews }} reviews)</span>
          </div>

          <div class="price-row">
            <span class="price">\${{ product.price | number:'1.2-2' }}</span>
            <span class="stock-badge" [class.in-stock]="product.stock > 0" [class.out-stock]="product.stock === 0">
              {{ product.stock > 0 ? 'In Stock (' + product.stock + ')' : 'Out of Stock' }}
            </span>
          </div>

          <p class="description">{{ product.description }}</p>

          <div class="quantity-row" *ngIf="product.stock > 0">
            <label>Quantity:</label>
            <div class="qty-control">
              <button (click)="decreaseQty()">\u2212</button>
              <span>{{ quantity }}</span>
              <button (click)="increaseQty()">+</button>
            </div>
          </div>

          <div class="action-buttons">
            <button class="btn-cart" (click)="addToCart()" [disabled]="product.stock === 0">
              {{ product.stock === 0 ? 'Out of Stock' : '' }}<i class="fas fa-cart-shopping" *ngIf="product.stock > 0"></i>{{ product.stock === 0 ? '' : ' Add to Cart' }}
            </button>
            <button class="btn-wishlist" (click)="toggleWishlist()">
              <i class="fas fa-heart" [style.color]="inWishlist ? '#ef4444' : '#5a5e7a'"></i>
            </button>
          </div>

          <div class="product-meta">
            <div class="meta-item"><span>Category:</span> <strong>{{ categoryName }}</strong></div>
            <div class="meta-item"><span>Status:</span>
              <strong [class.text-green]="product.status === 'active'">{{ product.status }}</strong></div>
          </div>
        </div>
      </div>

      <!-- Reviews Section -->
      <div class="reviews-section">
        <h2>Customer Reviews</h2>

        <!-- Add Review Form -->
        <div class="review-form" *ngIf="isLoggedIn">
          <h3>Write a Review</h3>
          <div class="star-input">
            <span *ngFor="let s of [1,2,3,4,5]" class="star-btn"
              [class.active]="s <= reviewRating" (click)="reviewRating = s"><i class="fas fa-star"></i></span>
          </div>
          <textarea [(ngModel)]="reviewComment" placeholder="Share your experience..." rows="4" class="review-textarea"></textarea>
          <button class="btn-submit-review" (click)="submitReview()" [disabled]="!reviewRating || !reviewComment">
            Submit Review
          </button>
        </div>
        <div class="login-prompt" *ngIf="!isLoggedIn">
          <a routerLink="/auth/login">Login to write a review</a>
        </div>

        <!-- Reviews List -->
        <div class="reviews-list">
          <div class="review-item" *ngFor="let review of product.reviews || []">
            <div class="review-header">
              <div class="reviewer-avatar">{{ review.name.charAt(0).toUpperCase() }}</div>
              <div>
                <strong>{{ review.name }}</strong>
                <div class="review-date">{{ review.createdAt | date:'mediumDate' }}</div>
              </div>
              <app-star-rating [rating]="review.rating" style="margin-left: auto;"></app-star-rating>
            </div>
            <p class="review-comment">{{ review.comment }}</p>
          </div>
          <div class="no-reviews" *ngIf="!product.reviews || product.reviews.length === 0">
            <p>No reviews yet. Be the first to review!</p>
          </div>
        </div>
      </div>
    </div>

    <app-spin *ngIf="loading" size="lg" tip="Loading product..."></app-spin>

    <!-- Skeleton detail layout -->
    <div class="page-container sk-detail" *ngIf="loading">
      <div class="sk-breadcrumb">
        <app-skeleton type="title" [active]="true" width="22%"></app-skeleton>
      </div>
      <div class="product-layout">
        <div class="gallery">
          <app-skeleton type="image" [active]="true" height="400px" [round]="true"></app-skeleton>
          <div class="sk-thumbs">
            <app-skeleton *ngFor="let t of [1,2,3]" type="image" [active]="true" width="80px" height="80px" [round]="true"></app-skeleton>
          </div>
        </div>
        <div class="product-details">
          <app-skeleton type="button" [active]="true" width="72px"></app-skeleton>
          <app-skeleton type="title" [active]="true" width="75%"></app-skeleton>
          <app-skeleton type="title" [active]="true" width="50%"></app-skeleton>
          <app-skeleton type="title" [active]="true" width="30%"></app-skeleton>
          <app-skeleton type="text" [active]="true" [rows]="3"></app-skeleton>
          <app-skeleton type="rect" [active]="true" height="52px"></app-skeleton>
          <div style="display:flex;gap:12px;margin-top:16px">
            <app-skeleton type="rect" [active]="true" height="52px"></app-skeleton>
            <app-skeleton type="image" [active]="true" width="52px" height="52px" [round]="true"></app-skeleton>
          </div>
        </div>
      </div>
    </div>

    <div class="not-found" *ngIf="!loading && !product">
      <h2>Product not found</h2>
      <a routerLink="/products" class="btn-back">\u2190 Back to Products</a>
    </div>
  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;8ca96097570dafbe73db95db4b8f45d98bbe05f362aa0b86a9e715d7ea33165d;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/features/products/product-detail/product-detail.component.ts */\n.page-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 40px 20px;\n}\n.sk-detail app-skeleton {\n  display: block;\n  margin-bottom: 14px;\n}\n.sk-breadcrumb {\n  margin-bottom: 32px;\n}\n.sk-thumbs {\n  display: flex;\n  gap: 12px;\n  margin-top: 12px;\n}\n.sk-thumbs app-skeleton {\n  margin-bottom: 0;\n}\n.breadcrumb {\n  font-size: 0.85rem;\n  color: #9ca3af;\n  margin-bottom: 32px;\n}\n.breadcrumb a {\n  color: #6b7280;\n  text-decoration: none;\n}\n.breadcrumb a:hover {\n  color: #2563EB;\n}\n.product-layout {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  margin-bottom: 60px;\n}\n.gallery .main-image {\n  border-radius: 20px;\n  overflow: hidden;\n  background: #f9fafb;\n  height: 400px;\n}\n.gallery .main-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.thumbnails {\n  display: flex;\n  gap: 12px;\n  margin-top: 12px;\n}\n.thumb {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 10px;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: border-color 0.2s;\n}\n.thumb.active,\n.thumb:hover {\n  border-color: #2563EB;\n}\n.category-badge {\n  display: inline-block;\n  background: #dbeafe;\n  color: #2563EB;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n  text-transform: uppercase;\n}\n.product-details h1 {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #e8eaf6;\n  margin-bottom: 12px;\n}\n.rating-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.rating-text {\n  font-weight: 700;\n  color: #F59E0B;\n}\n.reviews-count {\n  color: #9ca3af;\n  font-size: 0.85rem;\n}\n.price-row {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.price {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #e8eaf6;\n}\n.stock-badge {\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n.in-stock {\n  background: rgba(34, 197, 94, 0.15);\n  color: #4ade80;\n}\n.out-stock {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.description {\n  color: #9ca3af;\n  line-height: 1.7;\n  margin-bottom: 24px;\n}\n.quantity-row {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.quantity-row label {\n  font-weight: 600;\n  color: #c9cbdf;\n}\n.qty-control {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: rgba(255, 255, 255, 0.07);\n  border-radius: 12px;\n  padding: 4px;\n}\n.qty-control button {\n  width: 36px;\n  height: 36px;\n  border: none;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: 600;\n  transition: background 0.2s;\n}\n.qty-control button:hover {\n  background: rgba(79, 110, 247, 0.2);\n  color: #a5b4fc;\n}\n.qty-control span {\n  font-weight: 700;\n  font-size: 1.1rem;\n  min-width: 24px;\n  text-align: center;\n  color: #e8eaf6;\n}\n.action-buttons {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.btn-cart {\n  flex: 1;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.btn-cart:hover:not(:disabled) {\n  opacity: 0.85;\n}\n.btn-cart:disabled {\n  background: rgba(255, 255, 255, 0.1);\n  cursor: not-allowed;\n}\n.btn-wishlist {\n  width: 52px;\n  height: 52px;\n  border: 2px solid rgba(255, 255, 255, 0.12);\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.05);\n  font-size: 1.3rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-wishlist:hover {\n  border-color: #f87171;\n  background: rgba(239, 68, 68, 0.08);\n}\n.product-meta {\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  padding-top: 20px;\n}\n.meta-item {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n  color: #9ca3af;\n}\n.meta-item strong {\n  color: #c9cbdf;\n}\n.text-green {\n  color: #4ade80;\n}\n.reviews-section {\n  margin-top: 60px;\n}\n.reviews-section h2 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 24px;\n}\n.review-form {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 24px;\n  margin-bottom: 32px;\n}\n.review-form h3 {\n  font-weight: 700;\n  margin-bottom: 16px;\n  color: #e8eaf6;\n}\n.star-input {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.star-btn {\n  font-size: 1.8rem;\n  color: rgba(255, 255, 255, 0.15);\n  cursor: pointer;\n  transition: color 0.2s, transform 0.15s;\n}\n.star-btn:hover {\n  transform: scale(1.2);\n}\n.star-btn.active i,\n.star-btn:hover i {\n  color: #F59E0B;\n}\n.review-textarea {\n  width: 100%;\n  padding: 12px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  font-size: 0.95rem;\n  outline: none;\n  resize: vertical;\n  box-sizing: border-box;\n  margin-bottom: 16px;\n  background: rgba(255, 255, 255, 0.05);\n  color: #e8eaf6;\n}\n.review-textarea:focus {\n  border-color: #4f6ef7;\n}\n.btn-submit-review {\n  padding: 10px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-submit-review:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.login-prompt {\n  color: #9ca3af;\n  margin-bottom: 24px;\n}\n.login-prompt a {\n  color: #a5b4fc;\n}\n.reviews-list {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.review-item {\n  background: #1e2235;\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.review-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.reviewer-avatar {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n}\n.review-date {\n  font-size: 0.8rem;\n  color: #9ca3af;\n}\n.review-comment {\n  color: #c9cbdf;\n  line-height: 1.6;\n}\n.no-reviews {\n  text-align: center;\n  padding: 40px;\n  color: #9ca3af;\n}\n.not-found {\n  text-align: center;\n  padding: 80px;\n}\n.btn-back {\n  color: #a5b4fc;\n  text-decoration: none;\n  font-weight: 600;\n  display: inline-block;\n  margin-top: 16px;\n}\n.toast {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: #1e2235;\n  color: #e8eaf6;\n  padding: 14px 24px;\n  border-radius: 12px;\n  z-index: 9999;\n  font-weight: 600;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n@media (max-width: 1100px) {\n  .product-layout {\n    gap: 36px;\n  }\n}\n@media (max-width: 900px) {\n  .product-layout {\n    grid-template-columns: 1fr;\n    gap: 28px;\n  }\n  .gallery .main-image {\n    height: 320px;\n  }\n}\n@media (max-width: 768px) {\n  .product-layout {\n    gap: 24px;\n  }\n  .gallery .main-image {\n    height: 260px;\n  }\n  .thumb {\n    width: 60px;\n    height: 60px;\n  }\n  .price {\n    font-size: 1.6rem;\n  }\n  .toast {\n    bottom: 84px;\n    right: 16px;\n    left: 16px;\n    text-align: center;\n  }\n  .page-container {\n    padding: 20px 14px 80px;\n  }\n}\n@media (max-width: 580px) {\n  .gallery .main-image {\n    height: 220px;\n  }\n  .thumb {\n    width: 52px;\n    height: 52px;\n  }\n  .price {\n    font-size: 1.4rem;\n  }\n  .action-buttons {\n    flex-direction: column;\n  }\n  .action-buttons button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 400px) {\n  .gallery .main-image {\n    height: 190px;\n  }\n  .price {\n    font-size: 1.25rem;\n  }\n}\n/*# sourceMappingURL=product-detail.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: ProductService }, { type: CartService }, { type: WishlistService }, { type: AuthService }, { type: Router }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src/app/features/products/product-detail/product-detail.component.ts", lineNumber: 388 });
})();
export {
  ProductDetailComponent
};
//# sourceMappingURL=chunk-DCEVMHWB.js.map
