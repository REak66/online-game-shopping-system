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
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  RadioControlValueAccessor
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
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-JDYM2Z3R.js";
import "./chunk-QLMOGZJX.js";
import {
  CommonModule,
  Component,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IXUP4X5N.js";

// src/app/features/products/product-list/product-list.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
function ProductListComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.activeFilterCount);
  }
}
function ProductListComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.activeFilterCount);
  }
}
function ProductListComponent_label_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 18)(1, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_label_32_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedCategory, $event) || (ctx_r0.selectedCategory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ProductListComponent_label_32_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFilterChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 20);
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.selectedCategory === cat_r3._id);
    \u0275\u0275advance();
    \u0275\u0275property("value", cat_r3._id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedCategory);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r3.name);
  }
}
function ProductListComponent_button_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function ProductListComponent_button_62_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.searchQuery = "";
      return \u0275\u0275resetView(ctx_r0.onFilterChange());
    });
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_div_67_app_skeleton_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton", 53);
  }
  if (rf & 2) {
    \u0275\u0275property("active", true);
  }
}
function ProductListComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, ProductListComponent_div_67_app_skeleton_1_Template, 1, 1, "app-skeleton", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function ProductListComponent_div_68_app_product_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-product-card", 55);
    \u0275\u0275listener("addToCart", function ProductListComponent_div_68_app_product_card_1_Template_app_product_card_addToCart_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onAddToCart($event));
    })("addToWishlist", function ProductListComponent_div_68_app_product_card_1_Template_app_product_card_addToWishlist_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onAddToWishlist($event));
    })("quickView", function ProductListComponent_div_68_app_product_card_1_Template_app_product_card_quickView_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onQuickView($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    \u0275\u0275property("product", product_r6);
  }
}
function ProductListComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, ProductListComponent_div_68_app_product_card_1_Template, 1, 1, "app-product-card", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.products);
  }
}
function ProductListComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57);
    \u0275\u0275element(2, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No products found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Try adjusting your filters or search terms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 33);
    \u0275\u0275listener("click", function ProductListComponent_div_69_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetFilters());
    });
    \u0275\u0275text(8, "Clear Filters");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_div_70_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function ProductListComponent_div_70_button_3_Template_button_click_0_listener() {
      const p_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changePage(p_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r10 === ctx_r0.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r10);
  }
}
function ProductListComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "button", 59);
    \u0275\u0275listener("click", function ProductListComponent_div_70_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changePage(ctx_r0.currentPage - 1));
    });
    \u0275\u0275text(2, "\u2190");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProductListComponent_div_70_button_3_Template, 2, 3, "button", 60);
    \u0275\u0275elementStart(4, "button", 59);
    \u0275\u0275listener("click", function ProductListComponent_div_70_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changePage(ctx_r0.currentPage + 1));
    });
    \u0275\u0275text(5, "\u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getPages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
  }
}
var ProductListComponent = class _ProductListComponent {
  get activeFilterCount() {
    let count = 0;
    if (this.selectedCategory)
      count++;
    if (this.minPrice !== null || this.maxPrice !== null)
      count++;
    if (this.sortBy)
      count++;
    return count;
  }
  constructor(productService, categoryService, cartService, wishlistService, authService, route, router, msgService) {
    this.productService = productService;
    this.categoryService = categoryService;
    this.cartService = cartService;
    this.wishlistService = wishlistService;
    this.authService = authService;
    this.route = route;
    this.router = router;
    this.msgService = msgService;
    this.products = [];
    this.categories = [];
    this.loading = false;
    this.plSearchFocused = false;
    this.total = 0;
    this.currentPage = 1;
    this.totalPages = 1;
    this.searchQuery = "";
    this.selectedCategory = "";
    this.minPrice = null;
    this.maxPrice = null;
    this.sortBy = "";
    this.filterOpen = false;
    this.sortOptions = [
      { value: "", label: "Newest First" },
      { value: "price_asc", label: "Price: Low to High" },
      { value: "price_desc", label: "Price: High to Low" },
      { value: "rating", label: "Best Rating" }
    ];
  }
  ngOnInit() {
    this.categoryService.getCategories().subscribe({
      next: (res) => this.categories = res.categories || []
    });
    this.route.queryParams.subscribe((params) => {
      if (params["search"])
        this.searchQuery = params["search"];
      if (params["category"])
        this.selectedCategory = params["category"];
      this.loadProducts();
    });
  }
  get pageTitle() {
    if (this.searchQuery)
      return `Search: "${this.searchQuery}"`;
    if (this.selectedCategory) {
      const cat = this.categories.find((c) => c._id === this.selectedCategory);
      return cat ? cat.name : "Products";
    }
    return "All Products";
  }
  loadProducts() {
    this.loading = true;
    const filter = { page: this.currentPage, limit: 12 };
    if (this.searchQuery)
      filter.search = this.searchQuery;
    if (this.selectedCategory)
      filter.category = this.selectedCategory;
    if (this.minPrice !== null)
      filter.minPrice = this.minPrice;
    if (this.maxPrice !== null)
      filter.maxPrice = this.maxPrice;
    if (this.sortBy)
      filter.sort = this.sortBy;
    this.productService.getProducts(filter).subscribe({
      next: (res) => {
        this.products = res.products || [];
        this.total = res.total || 0;
        this.totalPages = res.pages || 1;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  onFilterChange() {
    this.currentPage = 1;
    this.loadProducts();
  }
  resetFilters() {
    this.searchQuery = "";
    this.selectedCategory = "";
    this.minPrice = null;
    this.maxPrice = null;
    this.sortBy = "";
    this.currentPage = 1;
    this.loadProducts();
  }
  changePage(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.currentPage = page;
    this.loadProducts();
    window.scrollTo(0, 0);
  }
  getPages() {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++)
      pages.push(i);
    return pages;
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
      error: () => this.msgService.error("Failed to add to wishlist")
    });
  }
  onQuickView(product) {
    this.router.navigate(["/products", product._id]);
  }
  static {
    this.\u0275fac = function ProductListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductListComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(WishlistService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductListComponent, selectors: [["app-product-list"]], decls: 71, vars: 28, consts: [[1, "page-container"], [1, "page-header"], [1, "btn-filter-toggle", 3, "click"], [1, "fas", "fa-sliders"], ["class", "filter-badge", 4, "ngIf"], [1, "sidebar-overlay", 3, "click"], [1, "content-layout"], [1, "sidebar"], [1, "sidebar-header"], [1, "sidebar-title"], ["class", "filter-count", 4, "ngIf"], ["aria-label", "Close", 1, "sidebar-close", 3, "click"], [1, "fas", "fa-xmark"], [1, "sidebar-card"], [1, "filter-section"], [1, "filter-heading"], [1, "fas", "fa-layer-group"], [1, "filter-options"], [1, "filter-option"], ["type", "radio", "name", "category", "value", "", 3, "ngModelChange", "change", "ngModel"], [1, "radio-dot"], [1, "option-text"], ["class", "filter-option", 3, "active", 4, "ngFor", "ngForOf"], [1, "sep"], [1, "fas", "fa-tag"], [1, "price-inputs"], ["type", "number", "placeholder", "Min", "min", "0", 1, "price-input", 3, "ngModelChange", "ngModel"], [1, "price-sep"], ["type", "number", "placeholder", "Max", "min", "0", 1, "price-input", 3, "ngModelChange", "ngModel"], [1, "btn-apply", 3, "click"], [1, "fas", "fa-check"], [1, "fas", "fa-arrow-up-wide-short"], [3, "ngModelChange", "selectionChange", "ngModel", "options", "clearable"], [1, "btn-reset", 3, "click"], [1, "fas", "fa-rotate-left"], [1, "products-area"], [1, "products-toolbar"], [1, "search-bar"], [1, "fas", "fa-magnifying-glass", "pl-search-icon"], ["type", "text", "placeholder", "Search games...", "autocomplete", "off", 1, "search-input", 3, "ngModelChange", "keyup.enter", "focus", "blur", "ngModel"], ["class", "pl-clear-btn", "tabindex", "-1", "title", "Clear", 3, "click", 4, "ngIf"], [1, "search-btn", 3, "click"], [1, "fas", "fa-magnifying-glass"], [1, "view-info"], ["class", "products-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "filter-badge"], [1, "filter-count"], ["type", "radio", "name", "category", 3, "ngModelChange", "change", "value", "ngModel"], ["tabindex", "-1", "title", "Clear", 1, "pl-clear-btn", 3, "click"], [1, "products-grid"], ["type", "image", "height", "260px", 3, "active", 4, "ngFor", "ngForOf"], ["type", "image", "height", "260px", 3, "active"], [3, "product", "addToCart", "addToWishlist", "quickView", 4, "ngFor", "ngForOf"], [3, "addToCart", "addToWishlist", "quickView", "product"], [1, "empty-state"], [1, "empty-icon"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], ["class", "page-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "page-btn", 3, "click"]], template: function ProductListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "button", 2);
        \u0275\u0275listener("click", function ProductListComponent_Template_button_click_6_listener() {
          return ctx.filterOpen = !ctx.filterOpen;
        });
        \u0275\u0275element(7, "i", 3);
        \u0275\u0275text(8);
        \u0275\u0275template(9, ProductListComponent_span_9_Template, 2, 1, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275listener("click", function ProductListComponent_Template_div_click_10_listener() {
          return ctx.filterOpen = false;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 6)(12, "aside", 7)(13, "div", 8)(14, "span", 9);
        \u0275\u0275element(15, "i", 3);
        \u0275\u0275text(16, " Filters ");
        \u0275\u0275template(17, ProductListComponent_span_17_Template, 2, 1, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function ProductListComponent_Template_button_click_18_listener() {
          return ctx.filterOpen = false;
        });
        \u0275\u0275element(19, "i", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "div", 14)(22, "div", 15);
        \u0275\u0275element(23, "i", 16);
        \u0275\u0275elementStart(24, "span");
        \u0275\u0275text(25, "Categories");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 17)(27, "label", 18)(28, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
          return $event;
        });
        \u0275\u0275listener("change", function ProductListComponent_Template_input_change_28_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "span", 20);
        \u0275\u0275elementStart(30, "span", 21);
        \u0275\u0275text(31, "All Categories");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(32, ProductListComponent_label_32_Template, 5, 5, "label", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(33, "div", 23);
        \u0275\u0275elementStart(34, "div", 14)(35, "div", 15);
        \u0275\u0275element(36, "i", 24);
        \u0275\u0275elementStart(37, "span");
        \u0275\u0275text(38, "Price Range");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 25)(40, "input", 26);
        \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_40_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.minPrice, $event) || (ctx.minPrice = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "span", 27);
        \u0275\u0275text(42, "\u2013");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "input", 28);
        \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_43_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.maxPrice, $event) || (ctx.maxPrice = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "button", 29);
        \u0275\u0275listener("click", function ProductListComponent_Template_button_click_44_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275element(45, "i", 30);
        \u0275\u0275text(46, " Apply ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(47, "div", 23);
        \u0275\u0275elementStart(48, "div", 14)(49, "div", 15);
        \u0275\u0275element(50, "i", 31);
        \u0275\u0275elementStart(51, "span");
        \u0275\u0275text(52, "Sort By");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "app-select", 32);
        \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_app_select_ngModelChange_53_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event);
          return $event;
        });
        \u0275\u0275listener("selectionChange", function ProductListComponent_Template_app_select_selectionChange_53_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "button", 33);
        \u0275\u0275listener("click", function ProductListComponent_Template_button_click_54_listener() {
          return ctx.resetFilters();
        });
        \u0275\u0275element(55, "i", 34);
        \u0275\u0275text(56, " Reset Filters ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "main", 35)(58, "div", 36)(59, "div", 37);
        \u0275\u0275element(60, "i", 38);
        \u0275\u0275elementStart(61, "input", 39);
        \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_61_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function ProductListComponent_Template_input_keyup_enter_61_listener() {
          return ctx.onFilterChange();
        })("focus", function ProductListComponent_Template_input_focus_61_listener() {
          return ctx.plSearchFocused = true;
        })("blur", function ProductListComponent_Template_input_blur_61_listener() {
          return ctx.plSearchFocused = false;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(62, ProductListComponent_button_62_Template, 2, 0, "button", 40);
        \u0275\u0275elementStart(63, "button", 41);
        \u0275\u0275listener("click", function ProductListComponent_Template_button_click_63_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275element(64, "i", 42);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 43);
        \u0275\u0275text(66);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(67, ProductListComponent_div_67_Template, 2, 2, "div", 44)(68, ProductListComponent_div_68_Template, 2, 1, "div", 44)(69, ProductListComponent_div_69_Template, 9, 0, "div", 45)(70, ProductListComponent_div_70_Template, 6, 3, "div", 46);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.pageTitle);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.total, " products found");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.filterOpen ? "Hide Filters" : "Show Filters", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeFilterCount > 0);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.filterOpen);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("sidebar-open", ctx.filterOpen);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.activeFilterCount > 0);
        \u0275\u0275advance(10);
        \u0275\u0275classProp("active", !ctx.selectedCategory);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategory);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.minPrice);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.maxPrice);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.sortBy);
        \u0275\u0275property("options", ctx.sortOptions)("clearable", false);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("focused", ctx.plSearchFocused);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.searchQuery);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate2(" Showing ", ctx.products.length, " of ", ctx.total, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.products.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.products.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.totalPages > 1);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, RadioControlValueAccessor, NgControlStatus, MinValidator, NgModel, ProductCardComponent, SkeletonComponent, SelectComponent], styles: ['@charset "UTF-8";\n\n\n\n.page-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 28px 24px 60px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(24px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: var(--text-white, #1a1d2e);\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted, #7b7fa8);\n  margin-top: 4px;\n  font-size: 0.9rem;\n}\n.btn-filter-toggle[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 18px;\n  margin-bottom: 16px;\n  background: var(--bg-card, #fff);\n  border: 1.5px solid var(--border, #e2e6f0);\n  border-radius: 50px;\n  color: var(--text-secondary, #6b7280);\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);\n}\n.btn-filter-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.07);\n  color: #4f6ef7;\n  border-color: rgba(79, 110, 247, 0.35);\n}\n.filter-badge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: #fff;\n  font-size: 0.68rem;\n  font-weight: 700;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 50px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.sidebar-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 499;\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n.sidebar-overlay.active[_ngcontent-%COMP%] {\n  display: block;\n  animation: _ngcontent-%COMP%_overlayIn 0.22s ease both;\n}\n@keyframes _ngcontent-%COMP%_overlayIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.content-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 26px;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 80px;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 18px;\n  flex-shrink: 0;\n  border-bottom: 1.5px solid var(--border, #e8eaf4);\n  background: var(--bg-card, #fff);\n}\n.sidebar-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-white, #1a1d2e);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sidebar-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4f6ef7;\n}\n.filter-count[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: #fff;\n  font-size: 0.68rem;\n  font-weight: 700;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 50px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 2px;\n}\n.sidebar-close[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  flex-shrink: 0;\n  background: rgba(0, 0, 0, 0.04);\n  border: 1.5px solid var(--border, #e4e6f0);\n  border-radius: 8px;\n  color: #8b91b4;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  transition: all 0.18s;\n}\n.sidebar-close[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.09);\n  color: #ef4444;\n  border-color: rgba(239, 68, 68, 0.35);\n}\n.sidebar-card[_ngcontent-%COMP%] {\n  background: var(--bg-card, #ffffff);\n  border: 1.5px solid var(--border, #e8eaf4);\n  border-radius: 18px;\n  overflow: hidden;\n  box-shadow: 0 2px 16px rgba(100, 116, 200, 0.08), 0 1px 4px rgba(0, 0, 0, 0.05);\n  animation: _ngcontent-%COMP%_sidebarCardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.08s both;\n}\n.filter-section[_ngcontent-%COMP%] {\n  padding: 18px 18px 16px;\n  animation: _ngcontent-%COMP%_filterOptIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.filter-section[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.12s;\n}\n.filter-section[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.19s;\n}\n.filter-section[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.26s;\n}\n.sep[_ngcontent-%COMP%] {\n  height: 1.5px;\n  background: var(--border, #eceef8);\n  margin: 0;\n}\n.filter-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-muted, #9499c0);\n  text-transform: uppercase;\n  letter-spacing: 1.1px;\n  margin-bottom: 13px;\n}\n.filter-heading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4f6ef7;\n  font-size: 0.76rem;\n  width: 14px;\n  text-align: center;\n}\n.filter-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-muted, #9499c0);\n}\n.filter-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  max-height: 228px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: #d0d4ee transparent;\n}\n.filter-options[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.filter-options[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #d0d4ee;\n  border-radius: 4px;\n}\n.filter-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: 9px;\n  cursor: pointer;\n  transition: background 0.14s;\n  animation: _ngcontent-%COMP%_filterOptIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.filter-option[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.15s;\n}\n.filter-option[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.19s;\n}\n.filter-option[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.23s;\n}\n.filter-option[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.27s;\n}\n.filter-option[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.31s;\n}\n.filter-option[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 0.35s;\n}\n.filter-option[_ngcontent-%COMP%]:nth-child(n+7) {\n  animation-delay: 0.38s;\n}\n.filter-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n.radio-dot[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  border: 2px solid #c4c9e4;\n  background: transparent;\n  box-sizing: border-box;\n  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.option-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary, #6b7280);\n  transition: color 0.14s;\n  line-height: 1;\n  flex: 1;\n}\n.filter-option[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.05);\n}\n.filter-option[_ngcontent-%COMP%]:hover   .radio-dot[_ngcontent-%COMP%] {\n  border-color: #8b9ef7;\n}\n.filter-option[_ngcontent-%COMP%]:hover   .option-text[_ngcontent-%COMP%] {\n  color: #4f6ef7;\n}\n.filter-option.active[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.09);\n}\n.filter-option.active[_ngcontent-%COMP%]   .radio-dot[_ngcontent-%COMP%] {\n  border-width: 4px;\n  border-color: #4f6ef7;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.15);\n  animation: _ngcontent-%COMP%_radioPop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n.filter-option.active[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%] {\n  color: #4f6ef7;\n  font-weight: 600;\n}\n.price-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 11px;\n}\n.price-sep[_ngcontent-%COMP%] {\n  color: #b0b6d4;\n  flex-shrink: 0;\n  font-size: 0.9rem;\n}\n.price-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 9px 11px;\n  background: rgba(79, 110, 247, 0.05);\n  border: 1.5px solid var(--border, #e4e6f4);\n  border-radius: 10px;\n  color: var(--text-white, #1a1d2e);\n  font-size: 0.875rem;\n  outline: none;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.price-input[_ngcontent-%COMP%]::placeholder {\n  color: #b8bcd8;\n}\n.price-input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(79, 110, 247, 0.5);\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.1);\n}\n.price-input[_ngcontent-%COMP%]::-webkit-outer-spin-button, \n.price-input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.price-input[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.btn-apply[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  letter-spacing: 0.3px;\n  position: relative;\n  overflow: hidden;\n  transition:\n    opacity 0.2s,\n    transform 0.15s,\n    box-shadow 0.2s;\n  box-shadow: 0 4px 14px rgba(79, 110, 247, 0.25);\n}\n.btn-apply[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 45%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.22),\n      transparent);\n  transform: skewX(-18deg);\n  pointer-events: none;\n}\n.btn-apply[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(79, 110, 247, 0.38);\n}\n.btn-apply[_ngcontent-%COMP%]:hover::after {\n  animation: _ngcontent-%COMP%_btnShine 0.55s ease forwards;\n}\n.btn-apply[_ngcontent-%COMP%]:active {\n  transform: none;\n  box-shadow: 0 4px 14px rgba(79, 110, 247, 0.25);\n}\n.select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.sort-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 34px 10px 12px;\n  background: rgba(79, 110, 247, 0.05);\n  border: 1.5px solid var(--border, #e4e6f4);\n  border-radius: 10px;\n  color: var(--text-white, #1a1d2e);\n  font-size: 0.875rem;\n  outline: none;\n  cursor: pointer;\n  appearance: none;\n  -webkit-appearance: none;\n  transition: border-color 0.2s;\n}\n.sort-select[_ngcontent-%COMP%]:focus {\n  border-color: rgba(79, 110, 247, 0.5);\n}\n.sort-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: var(--bg-card, #fff);\n  color: var(--text-white, #1a1d2e);\n}\n.select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 11px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #b0b6d4;\n  font-size: 0.68rem;\n  pointer-events: none;\n  transition: transform 0.22s, color 0.2s;\n}\n.sort-select[_ngcontent-%COMP%]:focus    ~ .select-arrow[_ngcontent-%COMP%] {\n  transform: translateY(-50%) rotate(180deg);\n  color: #4f6ef7;\n}\n.btn-reset[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px;\n  background: rgba(239, 68, 68, 0.05);\n  border: 1.5px solid rgba(239, 68, 68, 0.25);\n  border-radius: 14px;\n  color: #d94f4f;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  transition: all 0.2s;\n  animation: _ngcontent-%COMP%_sidebarCardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both;\n}\n.btn-reset[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: rgba(239, 68, 68, 0.45);\n  color: #ef4444;\n}\n.products-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 22px;\n  gap: 14px;\n  flex-wrap: wrap;\n  animation: _ngcontent-%COMP%_toolbarSlideIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--bg-card, #fff);\n  border: 1.5px solid var(--border, #e4e6f0);\n  border-radius: 50px;\n  padding: 0 6px 0 14px;\n  flex: 1;\n  max-width: 420px;\n  min-width: 180px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  transition: border-color 0.25s, box-shadow 0.25s;\n}\n.search-bar[_ngcontent-%COMP%]:focus-within, \n.search-bar.focused[_ngcontent-%COMP%] {\n  border-color: rgba(79, 110, 247, 0.5);\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.12), 0 2px 10px rgba(79, 110, 247, 0.12);\n}\n.pl-search-icon[_ngcontent-%COMP%] {\n  color: #b8bcd8;\n  font-size: 0.82rem;\n  flex-shrink: 0;\n  transition: color 0.25s;\n}\n.search-bar[_ngcontent-%COMP%]:focus-within   .pl-search-icon[_ngcontent-%COMP%] {\n  color: #4f6ef7;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: none;\n  border: none;\n  color: var(--text-white, #1a1d2e);\n  font-size: 0.88rem;\n  padding: 11px 0;\n  outline: none;\n  min-width: 0;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: #c2c6e0;\n}\n.pl-clear-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 4px 2px;\n  color: #b8bcd8;\n  cursor: pointer;\n  flex-shrink: 0;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  transition: color 0.2s, transform 0.2s;\n}\n.pl-clear-btn[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  transform: scale(1.2) rotate(90deg);\n}\n.search-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  transition: opacity 0.2s, transform 0.2s;\n  box-shadow: 0 2px 8px rgba(79, 110, 247, 0.3);\n}\n.search-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n  transform: scale(1.07);\n}\n.view-info[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-muted, #9499be);\n  white-space: nowrap;\n}\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 18px;\n}\n.products-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.products-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.04s;\n}\n.products-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.08s;\n}\n.products-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.12s;\n}\n.products-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.16s;\n}\n.products-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.2s;\n}\n.products-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 0.24s;\n}\n.products-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: 0.28s;\n}\n.products-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(8) {\n  animation-delay: 0.32s;\n}\n.products-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(n+9) {\n  animation-delay: 0.36s;\n}\n@keyframes _ngcontent-%COMP%_cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_sidebarCardIn {\n  from {\n    opacity: 0;\n    transform: translateY(14px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_filterOptIn {\n  from {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_radioPop {\n  0% {\n    transform: scale(0.3);\n    opacity: 0.4;\n  }\n  60% {\n    transform: scale(1.25);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_btnShine {\n  to {\n    left: 150%;\n  }\n}\n@keyframes _ngcontent-%COMP%_drawerContentIn {\n  from {\n    opacity: 0;\n    transform: translateX(-16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_pageButtonIn {\n  from {\n    opacity: 0;\n    transform: scale(0.65) translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_toolbarSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.5s ease both;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 16px;\n  color: var(--text-muted, #9499be);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--text-white, #1a1d2e);\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted, #9499be);\n  margin-bottom: 20px;\n  font-size: 0.9rem;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 40px;\n  flex-wrap: wrap;\n}\n.page-btn[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background: var(--bg-card, #fff);\n  border: 1.5px solid var(--border, #e4e6f0);\n  border-radius: 10px;\n  color: var(--text-secondary, #6b7280);\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  animation: _ngcontent-%COMP%_pageButtonIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n.page-btn[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.08s;\n}\n.page-btn[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.13s;\n}\n.page-btn[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.18s;\n}\n.page-btn[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.23s;\n}\n.page-btn[_ngcontent-%COMP%]:nth-child(n+5) {\n  animation-delay: 0.27s;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: rgba(79, 110, 247, 0.4);\n  color: #4f6ef7;\n  transform: translateY(-2px);\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: #fff;\n  border-color: transparent;\n  box-shadow: 0 4px 12px rgba(79, 110, 247, 0.28);\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: var(--bg-card, #fff);\n  color: var(--text-white, #1a1d2e);\n  border: 1.5px solid rgba(79, 110, 247, 0.3);\n  padding: 14px 24px;\n  border-radius: 14px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n  z-index: 9999;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_toastIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n@keyframes _ngcontent-%COMP%_toastIn {\n  from {\n    transform: translateX(80px) scale(0.9);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0) scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 768px) {\n  .toast[_ngcontent-%COMP%] {\n    bottom: 84px;\n    right: 16px;\n    left: 16px;\n    text-align: center;\n  }\n}\n@media (max-width: 900px) {\n  .content-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .btn-filter-toggle[_ngcontent-%COMP%] {\n    display: flex;\n    animation: _ngcontent-%COMP%_sidebarCardIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.06s both;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 288px;\n    max-width: 85vw;\n    z-index: 500;\n    overflow: hidden;\n    transform: translateX(-110%);\n    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);\n    background: var(--bg-secondary, #f6f7fd);\n    padding: 0;\n    border-radius: 0 22px 22px 0;\n    box-shadow: 8px 0 40px rgba(100, 116, 200, 0.18);\n    display: flex !important;\n    flex-direction: column;\n    gap: 0;\n  }\n  .sidebar.sidebar-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .sidebar-header[_ngcontent-%COMP%] {\n    display: flex;\n    padding: 16px 18px;\n    flex-shrink: 0;\n    border-bottom: 1.5px solid var(--border, #e8eaf4);\n    background: var(--bg-secondary, #f6f7fd);\n  }\n  .sidebar-card[_ngcontent-%COMP%] {\n    flex: 1;\n    overflow-y: auto;\n    overflow-x: hidden;\n    border-radius: 0;\n    border: none;\n    box-shadow: none;\n    padding-bottom: env(safe-area-inset-bottom, 0px);\n  }\n  .btn-reset[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    border-radius: 0;\n    padding: 14px 18px;\n    border-top: 1.5px solid var(--border, #e8eaf4);\n    border-bottom: none;\n    border-left: none;\n    border-right: none;\n    background: var(--bg-secondary, #f6f7fd);\n    margin-bottom: env(safe-area-inset-bottom, 0px);\n  }\n  .filter-options[_ngcontent-%COMP%] {\n    max-height: none;\n  }\n  .sidebar-open[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_drawerContentIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) 0.06s both;\n  }\n  .sidebar-open[_ngcontent-%COMP%]   .filter-section[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_drawerContentIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;\n  }\n  .sidebar-open[_ngcontent-%COMP%]   .filter-section[_ngcontent-%COMP%]:nth-child(1) {\n    animation-delay: 0.1s;\n  }\n  .sidebar-open[_ngcontent-%COMP%]   .filter-section[_ngcontent-%COMP%]:nth-child(3) {\n    animation-delay: 0.17s;\n  }\n  .sidebar-open[_ngcontent-%COMP%]   .filter-section[_ngcontent-%COMP%]:nth-child(5) {\n    animation-delay: 0.24s;\n  }\n  .sidebar-open[_ngcontent-%COMP%]   .btn-reset[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_drawerContentIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;\n  }\n  .sidebar-open[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_drawerContentIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;\n  }\n  .sidebar-open[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]:nth-child(1) {\n    animation-delay: 0.18s;\n  }\n  .sidebar-open[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]:nth-child(2) {\n    animation-delay: 0.21s;\n  }\n  .sidebar-open[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]:nth-child(3) {\n    animation-delay: 0.24s;\n  }\n  .sidebar-open[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]:nth-child(4) {\n    animation-delay: 0.27s;\n  }\n  .sidebar-open[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]:nth-child(5) {\n    animation-delay: 0.3s;\n  }\n  .sidebar-open[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%]:nth-child(n+6) {\n    animation-delay: 0.33s;\n  }\n}\n@media (max-width: 600px) {\n  .page-container[_ngcontent-%COMP%] {\n    padding: 16px 14px 80px;\n  }\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .products-toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-bar[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .view-info[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n}\n@media (max-width: 420px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=product-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductListComponent, [{
    type: Component,
    args: [{ selector: "app-product-list", standalone: true, imports: [CommonModule, RouterModule, FormsModule, ProductCardComponent, SkeletonComponent, SelectComponent], template: `
    <div class="page-container">
      <div class="page-header">
        <h1>{{ pageTitle }}</h1>
        <p>{{ total }} products found</p>
      </div>

      <!-- Mobile filter toggle -->
      <button class="btn-filter-toggle" (click)="filterOpen = !filterOpen">
        <i class="fas fa-sliders"></i>
        {{ filterOpen ? 'Hide Filters' : 'Show Filters' }}
        <span class="filter-badge" *ngIf="activeFilterCount > 0">{{ activeFilterCount }}</span>
      </button>

      <!-- Mobile overlay backdrop -->
      <div class="sidebar-overlay" [class.active]="filterOpen" (click)="filterOpen = false"></div>

      <div class="content-layout">
        <!-- Sidebar Filters -->
        <aside class="sidebar" [class.sidebar-open]="filterOpen">
          <!-- Mobile drawer header -->
          <div class="sidebar-header">
            <span class="sidebar-title">
              <i class="fas fa-sliders"></i> Filters
              <span class="filter-count" *ngIf="activeFilterCount > 0">{{ activeFilterCount }}</span>
            </span>
            <button class="sidebar-close" (click)="filterOpen = false" aria-label="Close">
              <i class="fas fa-xmark"></i>
            </button>
          </div>

          <!-- Single unified card -->
          <div class="sidebar-card">
            <!-- Categories -->
            <div class="filter-section">
              <div class="filter-heading"><i class="fas fa-layer-group"></i><span>Categories</span></div>
              <div class="filter-options">
                <label class="filter-option" [class.active]="!selectedCategory">
                  <input type="radio" name="category" value="" [(ngModel)]="selectedCategory" (change)="onFilterChange()" />
                  <span class="radio-dot"></span>
                  <span class="option-text">All Categories</span>
                </label>
                <label class="filter-option" *ngFor="let cat of categories"
                  [class.active]="selectedCategory === cat._id">
                  <input type="radio" name="category" [value]="cat._id" [(ngModel)]="selectedCategory" (change)="onFilterChange()" />
                  <span class="radio-dot"></span>
                  <span class="option-text">{{ cat.name }}</span>
                </label>
              </div>
            </div>

            <div class="sep"></div>

            <!-- Price Range -->
            <div class="filter-section">
              <div class="filter-heading"><i class="fas fa-tag"></i><span>Price Range</span></div>
              <div class="price-inputs">
                <input type="number" [(ngModel)]="minPrice" placeholder="Min" class="price-input" min="0" />
                <span class="price-sep">\u2013</span>
                <input type="number" [(ngModel)]="maxPrice" placeholder="Max" class="price-input" min="0" />
              </div>
              <button class="btn-apply" (click)="onFilterChange()">
                <i class="fas fa-check"></i> Apply
              </button>
            </div>

            <div class="sep"></div>

            <!-- Sort By -->
            <div class="filter-section">
              <div class="filter-heading"><i class="fas fa-arrow-up-wide-short"></i><span>Sort By</span></div>
              <app-select [(ngModel)]="sortBy" [options]="sortOptions" [clearable]="false" (selectionChange)="onFilterChange()"></app-select>
            </div>
          </div>

          <button class="btn-reset" (click)="resetFilters()">
            <i class="fas fa-rotate-left"></i> Reset Filters
          </button>
        </aside>

        <!-- Products Area -->
        <main class="products-area">
          <div class="products-toolbar">
            <div class="search-bar" [class.focused]="plSearchFocused">
              <i class="fas fa-magnifying-glass pl-search-icon"></i>
              <input type="text" [(ngModel)]="searchQuery"
                (keyup.enter)="onFilterChange()"
                (focus)="plSearchFocused = true" (blur)="plSearchFocused = false"
                placeholder="Search games..." class="search-input"
                autocomplete="off" />
              <button class="pl-clear-btn" *ngIf="searchQuery"
                (click)="searchQuery = ''; onFilterChange()" tabindex="-1" title="Clear">
                <i class="fas fa-xmark"></i>
              </button>
              <button (click)="onFilterChange()" class="search-btn">
                <i class="fas fa-magnifying-glass"></i>
              </button>
            </div>
            <div class="view-info">
              Showing {{ products.length }} of {{ total }}
            </div>
          </div>

          <div class="products-grid" *ngIf="loading">
            <app-skeleton *ngFor="let i of [1,2,3,4,5,6,7,8]" type="image" [active]="true" height="260px"></app-skeleton>
          </div>

          <div class="products-grid" *ngIf="!loading && products.length > 0">
            <app-product-card
              *ngFor="let product of products"
              [product]="product"
              (addToCart)="onAddToCart($event)"
              (addToWishlist)="onAddToWishlist($event)"
              (quickView)="onQuickView($event)">
            </app-product-card>
          </div>

          <div class="empty-state" *ngIf="!loading && products.length === 0">
            <div class="empty-icon"><i class="fas fa-magnifying-glass"></i></div>
            <h3>No products found</h3>
            <p>Try adjusting your filters or search terms</p>
            <button class="btn-reset" (click)="resetFilters()">Clear Filters</button>
          </div>

          <!-- Pagination -->
          <div class="pagination" *ngIf="totalPages > 1">
            <button class="page-btn" (click)="changePage(currentPage - 1)" [disabled]="currentPage === 1">\u2190</button>
            <button class="page-btn" *ngFor="let p of getPages()"
              [class.active]="p === currentPage" (click)="changePage(p)">{{ p }}</button>
            <button class="page-btn" (click)="changePage(currentPage + 1)" [disabled]="currentPage === totalPages">\u2192</button>
          </div>
        </main>
      </div>
    </div>
  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;ecb76126fa1e1e529c9843a248e4ea09f6c0af58084b4587a317319653cfd3f3;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/features/products/product-list/product-list.component.ts */\n.page-container {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 28px 24px 60px;\n  animation: fadeInUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(24px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.page-header {\n  margin-bottom: 20px;\n}\n.page-header h1 {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: var(--text-white, #1a1d2e);\n}\n.page-header p {\n  color: var(--text-muted, #7b7fa8);\n  margin-top: 4px;\n  font-size: 0.9rem;\n}\n.btn-filter-toggle {\n  display: none;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 18px;\n  margin-bottom: 16px;\n  background: var(--bg-card, #fff);\n  border: 1.5px solid var(--border, #e2e6f0);\n  border-radius: 50px;\n  color: var(--text-secondary, #6b7280);\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);\n}\n.btn-filter-toggle:hover {\n  background: rgba(79, 110, 247, 0.07);\n  color: #4f6ef7;\n  border-color: rgba(79, 110, 247, 0.35);\n}\n.filter-badge {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: #fff;\n  font-size: 0.68rem;\n  font-weight: 700;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 50px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.sidebar-overlay {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 499;\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n.sidebar-overlay.active {\n  display: block;\n  animation: overlayIn 0.22s ease both;\n}\n@keyframes overlayIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.content-layout {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 26px;\n}\n.sidebar {\n  position: sticky;\n  top: 80px;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.sidebar-header {\n  display: none;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 18px;\n  flex-shrink: 0;\n  border-bottom: 1.5px solid var(--border, #e8eaf4);\n  background: var(--bg-card, #fff);\n}\n.sidebar-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-white, #1a1d2e);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sidebar-title i {\n  color: #4f6ef7;\n}\n.filter-count {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: #fff;\n  font-size: 0.68rem;\n  font-weight: 700;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 50px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 2px;\n}\n.sidebar-close {\n  width: 30px;\n  height: 30px;\n  flex-shrink: 0;\n  background: rgba(0, 0, 0, 0.04);\n  border: 1.5px solid var(--border, #e4e6f0);\n  border-radius: 8px;\n  color: #8b91b4;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  transition: all 0.18s;\n}\n.sidebar-close:hover {\n  background: rgba(239, 68, 68, 0.09);\n  color: #ef4444;\n  border-color: rgba(239, 68, 68, 0.35);\n}\n.sidebar-card {\n  background: var(--bg-card, #ffffff);\n  border: 1.5px solid var(--border, #e8eaf4);\n  border-radius: 18px;\n  overflow: hidden;\n  box-shadow: 0 2px 16px rgba(100, 116, 200, 0.08), 0 1px 4px rgba(0, 0, 0, 0.05);\n  animation: sidebarCardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.08s both;\n}\n.filter-section {\n  padding: 18px 18px 16px;\n  animation: filterOptIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.filter-section:nth-child(1) {\n  animation-delay: 0.12s;\n}\n.filter-section:nth-child(3) {\n  animation-delay: 0.19s;\n}\n.filter-section:nth-child(5) {\n  animation-delay: 0.26s;\n}\n.sep {\n  height: 1.5px;\n  background: var(--border, #eceef8);\n  margin: 0;\n}\n.filter-heading {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-muted, #9499c0);\n  text-transform: uppercase;\n  letter-spacing: 1.1px;\n  margin-bottom: 13px;\n}\n.filter-heading i {\n  color: #4f6ef7;\n  font-size: 0.76rem;\n  width: 14px;\n  text-align: center;\n}\n.filter-heading span {\n  color: var(--text-muted, #9499c0);\n}\n.filter-options {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  max-height: 228px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: #d0d4ee transparent;\n}\n.filter-options::-webkit-scrollbar {\n  width: 3px;\n}\n.filter-options::-webkit-scrollbar-thumb {\n  background: #d0d4ee;\n  border-radius: 4px;\n}\n.filter-option {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: 9px;\n  cursor: pointer;\n  transition: background 0.14s;\n  animation: filterOptIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.filter-option:nth-child(1) {\n  animation-delay: 0.15s;\n}\n.filter-option:nth-child(2) {\n  animation-delay: 0.19s;\n}\n.filter-option:nth-child(3) {\n  animation-delay: 0.23s;\n}\n.filter-option:nth-child(4) {\n  animation-delay: 0.27s;\n}\n.filter-option:nth-child(5) {\n  animation-delay: 0.31s;\n}\n.filter-option:nth-child(6) {\n  animation-delay: 0.35s;\n}\n.filter-option:nth-child(n+7) {\n  animation-delay: 0.38s;\n}\n.filter-option input[type=radio] {\n  display: none;\n}\n.radio-dot {\n  width: 15px;\n  height: 15px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  border: 2px solid #c4c9e4;\n  background: transparent;\n  box-sizing: border-box;\n  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.option-text {\n  font-size: 0.875rem;\n  color: var(--text-secondary, #6b7280);\n  transition: color 0.14s;\n  line-height: 1;\n  flex: 1;\n}\n.filter-option:hover {\n  background: rgba(79, 110, 247, 0.05);\n}\n.filter-option:hover .radio-dot {\n  border-color: #8b9ef7;\n}\n.filter-option:hover .option-text {\n  color: #4f6ef7;\n}\n.filter-option.active {\n  background: rgba(79, 110, 247, 0.09);\n}\n.filter-option.active .radio-dot {\n  border-width: 4px;\n  border-color: #4f6ef7;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.15);\n  animation: radioPop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n.filter-option.active .option-text {\n  color: #4f6ef7;\n  font-weight: 600;\n}\n.price-inputs {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 11px;\n}\n.price-sep {\n  color: #b0b6d4;\n  flex-shrink: 0;\n  font-size: 0.9rem;\n}\n.price-input {\n  flex: 1;\n  min-width: 0;\n  padding: 9px 11px;\n  background: rgba(79, 110, 247, 0.05);\n  border: 1.5px solid var(--border, #e4e6f4);\n  border-radius: 10px;\n  color: var(--text-white, #1a1d2e);\n  font-size: 0.875rem;\n  outline: none;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.price-input::placeholder {\n  color: #b8bcd8;\n}\n.price-input:focus {\n  border-color: rgba(79, 110, 247, 0.5);\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.1);\n}\n.price-input::-webkit-outer-spin-button,\n.price-input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.price-input[type=number] {\n  -moz-appearance: textfield;\n}\n.btn-apply {\n  width: 100%;\n  padding: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  letter-spacing: 0.3px;\n  position: relative;\n  overflow: hidden;\n  transition:\n    opacity 0.2s,\n    transform 0.15s,\n    box-shadow 0.2s;\n  box-shadow: 0 4px 14px rgba(79, 110, 247, 0.25);\n}\n.btn-apply::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 45%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.22),\n      transparent);\n  transform: skewX(-18deg);\n  pointer-events: none;\n}\n.btn-apply:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(79, 110, 247, 0.38);\n}\n.btn-apply:hover::after {\n  animation: btnShine 0.55s ease forwards;\n}\n.btn-apply:active {\n  transform: none;\n  box-shadow: 0 4px 14px rgba(79, 110, 247, 0.25);\n}\n.select-wrap {\n  position: relative;\n}\n.sort-select {\n  width: 100%;\n  padding: 10px 34px 10px 12px;\n  background: rgba(79, 110, 247, 0.05);\n  border: 1.5px solid var(--border, #e4e6f4);\n  border-radius: 10px;\n  color: var(--text-white, #1a1d2e);\n  font-size: 0.875rem;\n  outline: none;\n  cursor: pointer;\n  appearance: none;\n  -webkit-appearance: none;\n  transition: border-color 0.2s;\n}\n.sort-select:focus {\n  border-color: rgba(79, 110, 247, 0.5);\n}\n.sort-select option {\n  background: var(--bg-card, #fff);\n  color: var(--text-white, #1a1d2e);\n}\n.select-arrow {\n  position: absolute;\n  right: 11px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #b0b6d4;\n  font-size: 0.68rem;\n  pointer-events: none;\n  transition: transform 0.22s, color 0.2s;\n}\n.sort-select:focus ~ .select-arrow {\n  transform: translateY(-50%) rotate(180deg);\n  color: #4f6ef7;\n}\n.btn-reset {\n  width: 100%;\n  padding: 11px;\n  background: rgba(239, 68, 68, 0.05);\n  border: 1.5px solid rgba(239, 68, 68, 0.25);\n  border-radius: 14px;\n  color: #d94f4f;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  transition: all 0.2s;\n  animation: sidebarCardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both;\n}\n.btn-reset:hover {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: rgba(239, 68, 68, 0.45);\n  color: #ef4444;\n}\n.products-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 22px;\n  gap: 14px;\n  flex-wrap: wrap;\n  animation: toolbarSlideIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;\n}\n.search-bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--bg-card, #fff);\n  border: 1.5px solid var(--border, #e4e6f0);\n  border-radius: 50px;\n  padding: 0 6px 0 14px;\n  flex: 1;\n  max-width: 420px;\n  min-width: 180px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  transition: border-color 0.25s, box-shadow 0.25s;\n}\n.search-bar:focus-within,\n.search-bar.focused {\n  border-color: rgba(79, 110, 247, 0.5);\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.12), 0 2px 10px rgba(79, 110, 247, 0.12);\n}\n.pl-search-icon {\n  color: #b8bcd8;\n  font-size: 0.82rem;\n  flex-shrink: 0;\n  transition: color 0.25s;\n}\n.search-bar:focus-within .pl-search-icon {\n  color: #4f6ef7;\n}\n.search-input {\n  flex: 1;\n  background: none;\n  border: none;\n  color: var(--text-white, #1a1d2e);\n  font-size: 0.88rem;\n  padding: 11px 0;\n  outline: none;\n  min-width: 0;\n}\n.search-input::placeholder {\n  color: #c2c6e0;\n}\n.pl-clear-btn {\n  background: none;\n  border: none;\n  padding: 4px 2px;\n  color: #b8bcd8;\n  cursor: pointer;\n  flex-shrink: 0;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  transition: color 0.2s, transform 0.2s;\n}\n.pl-clear-btn:hover {\n  color: #ef4444;\n  transform: scale(1.2) rotate(90deg);\n}\n.search-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  transition: opacity 0.2s, transform 0.2s;\n  box-shadow: 0 2px 8px rgba(79, 110, 247, 0.3);\n}\n.search-btn:hover {\n  opacity: 0.88;\n  transform: scale(1.07);\n}\n.view-info {\n  font-size: 0.82rem;\n  color: var(--text-muted, #9499be);\n  white-space: nowrap;\n}\n.products-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 18px;\n}\n.products-grid > * {\n  animation: cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.products-grid > *:nth-child(1) {\n  animation-delay: 0.04s;\n}\n.products-grid > *:nth-child(2) {\n  animation-delay: 0.08s;\n}\n.products-grid > *:nth-child(3) {\n  animation-delay: 0.12s;\n}\n.products-grid > *:nth-child(4) {\n  animation-delay: 0.16s;\n}\n.products-grid > *:nth-child(5) {\n  animation-delay: 0.2s;\n}\n.products-grid > *:nth-child(6) {\n  animation-delay: 0.24s;\n}\n.products-grid > *:nth-child(7) {\n  animation-delay: 0.28s;\n}\n.products-grid > *:nth-child(8) {\n  animation-delay: 0.32s;\n}\n.products-grid > *:nth-child(n+9) {\n  animation-delay: 0.36s;\n}\n@keyframes cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes sidebarCardIn {\n  from {\n    opacity: 0;\n    transform: translateY(14px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes filterOptIn {\n  from {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes radioPop {\n  0% {\n    transform: scale(0.3);\n    opacity: 0.4;\n  }\n  60% {\n    transform: scale(1.25);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes btnShine {\n  to {\n    left: 150%;\n  }\n}\n@keyframes drawerContentIn {\n  from {\n    opacity: 0;\n    transform: translateX(-16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes pageButtonIn {\n  from {\n    opacity: 0;\n    transform: scale(0.65) translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n@keyframes toolbarSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 80px 20px;\n  animation: fadeInUp 0.5s ease both;\n}\n.empty-icon {\n  font-size: 3rem;\n  margin-bottom: 16px;\n  color: var(--text-muted, #9499be);\n}\n.empty-state h3 {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--text-white, #1a1d2e);\n  margin-bottom: 8px;\n}\n.empty-state p {\n  color: var(--text-muted, #9499be);\n  margin-bottom: 20px;\n  font-size: 0.9rem;\n}\n.pagination {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 40px;\n  flex-wrap: wrap;\n}\n.page-btn {\n  width: 38px;\n  height: 38px;\n  background: var(--bg-card, #fff);\n  border: 1.5px solid var(--border, #e4e6f0);\n  border-radius: 10px;\n  color: var(--text-secondary, #6b7280);\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  animation: pageButtonIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n.page-btn:nth-child(1) {\n  animation-delay: 0.08s;\n}\n.page-btn:nth-child(2) {\n  animation-delay: 0.13s;\n}\n.page-btn:nth-child(3) {\n  animation-delay: 0.18s;\n}\n.page-btn:nth-child(4) {\n  animation-delay: 0.23s;\n}\n.page-btn:nth-child(n+5) {\n  animation-delay: 0.27s;\n}\n.page-btn:hover:not(:disabled) {\n  border-color: rgba(79, 110, 247, 0.4);\n  color: #4f6ef7;\n  transform: translateY(-2px);\n}\n.page-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: #fff;\n  border-color: transparent;\n  box-shadow: 0 4px 12px rgba(79, 110, 247, 0.28);\n}\n.page-btn:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.toast {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: var(--bg-card, #fff);\n  color: var(--text-white, #1a1d2e);\n  border: 1.5px solid rgba(79, 110, 247, 0.3);\n  padding: 14px 24px;\n  border-radius: 14px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n  z-index: 9999;\n  font-weight: 600;\n  animation: toastIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n@keyframes toastIn {\n  from {\n    transform: translateX(80px) scale(0.9);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0) scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 768px) {\n  .toast {\n    bottom: 84px;\n    right: 16px;\n    left: 16px;\n    text-align: center;\n  }\n}\n@media (max-width: 900px) {\n  .content-layout {\n    grid-template-columns: 1fr;\n  }\n  .btn-filter-toggle {\n    display: flex;\n    animation: sidebarCardIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.06s both;\n  }\n  .sidebar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 288px;\n    max-width: 85vw;\n    z-index: 500;\n    overflow: hidden;\n    transform: translateX(-110%);\n    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);\n    background: var(--bg-secondary, #f6f7fd);\n    padding: 0;\n    border-radius: 0 22px 22px 0;\n    box-shadow: 8px 0 40px rgba(100, 116, 200, 0.18);\n    display: flex !important;\n    flex-direction: column;\n    gap: 0;\n  }\n  .sidebar.sidebar-open {\n    transform: translateX(0);\n  }\n  .sidebar-header {\n    display: flex;\n    padding: 16px 18px;\n    flex-shrink: 0;\n    border-bottom: 1.5px solid var(--border, #e8eaf4);\n    background: var(--bg-secondary, #f6f7fd);\n  }\n  .sidebar-card {\n    flex: 1;\n    overflow-y: auto;\n    overflow-x: hidden;\n    border-radius: 0;\n    border: none;\n    box-shadow: none;\n    padding-bottom: env(safe-area-inset-bottom, 0px);\n  }\n  .btn-reset {\n    flex-shrink: 0;\n    border-radius: 0;\n    padding: 14px 18px;\n    border-top: 1.5px solid var(--border, #e8eaf4);\n    border-bottom: none;\n    border-left: none;\n    border-right: none;\n    background: var(--bg-secondary, #f6f7fd);\n    margin-bottom: env(safe-area-inset-bottom, 0px);\n  }\n  .filter-options {\n    max-height: none;\n  }\n  .sidebar-open .sidebar-header {\n    animation: drawerContentIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) 0.06s both;\n  }\n  .sidebar-open .filter-section {\n    animation: drawerContentIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;\n  }\n  .sidebar-open .filter-section:nth-child(1) {\n    animation-delay: 0.1s;\n  }\n  .sidebar-open .filter-section:nth-child(3) {\n    animation-delay: 0.17s;\n  }\n  .sidebar-open .filter-section:nth-child(5) {\n    animation-delay: 0.24s;\n  }\n  .sidebar-open .btn-reset {\n    animation: drawerContentIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;\n  }\n  .sidebar-open .filter-option {\n    animation: drawerContentIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;\n  }\n  .sidebar-open .filter-option:nth-child(1) {\n    animation-delay: 0.18s;\n  }\n  .sidebar-open .filter-option:nth-child(2) {\n    animation-delay: 0.21s;\n  }\n  .sidebar-open .filter-option:nth-child(3) {\n    animation-delay: 0.24s;\n  }\n  .sidebar-open .filter-option:nth-child(4) {\n    animation-delay: 0.27s;\n  }\n  .sidebar-open .filter-option:nth-child(5) {\n    animation-delay: 0.3s;\n  }\n  .sidebar-open .filter-option:nth-child(n+6) {\n    animation-delay: 0.33s;\n  }\n}\n@media (max-width: 600px) {\n  .page-container {\n    padding: 16px 14px 80px;\n  }\n  .products-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .products-toolbar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-bar {\n    max-width: 100%;\n  }\n  .view-info {\n    text-align: right;\n  }\n}\n@media (max-width: 420px) {\n  .products-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=product-list.component.css.map */\n'] }]
  }], () => [{ type: ProductService }, { type: CategoryService }, { type: CartService }, { type: WishlistService }, { type: AuthService }, { type: ActivatedRoute }, { type: Router }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductListComponent, { className: "ProductListComponent", filePath: "src/app/features/products/product-list/product-list.component.ts", lineNumber: 601 });
})();
export {
  ProductListComponent
};
//# sourceMappingURL=chunk-GRK7SBAJ.js.map
