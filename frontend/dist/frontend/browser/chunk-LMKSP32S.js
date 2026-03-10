import {
  ConfirmService
} from "./chunk-YC4BKLUZ.js";
import {
  CategoryService
} from "./chunk-SVTSZWE5.js";
import {
  SelectComponent
} from "./chunk-7LUADATD.js";
import {
  ProductService
} from "./chunk-M7BLKAAD.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-QGP2PKSJ.js";
import {
  MessageService
} from "./chunk-JLEF55SF.js";
import {
  SpinComponent
} from "./chunk-GP5OZDAH.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-JDYM2Z3R.js";
import "./chunk-QLMOGZJX.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  NgForOf,
  NgIf,
  __async,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IXUP4X5N.js";

// src/app/features/admin/manage-products/manage-products.component.ts
function ManageProductsComponent_app_spin_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spin", 26);
  }
}
function ManageProductsComponent_ng_container_33_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "img", 31);
    \u0275\u0275listener("error", function ManageProductsComponent_ng_container_33_tr_21_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.target.src = "assets/no-image.png");
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 33);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 34)(16, "button", 35);
    \u0275\u0275listener("click", function ManageProductsComponent_ng_container_33_tr_21_Template_button_click_16_listener() {
      const product_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editProduct(product_r4));
    });
    \u0275\u0275element(17, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 37);
    \u0275\u0275listener("click", function ManageProductsComponent_ng_container_33_tr_21_Template_button_click_18_listener() {
      const product_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteProduct(product_r4._id));
    });
    \u0275\u0275element(19, "i", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", product_r4.image ? "http://localhost:5050" + product_r4.image : "assets/no-image.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getCategoryName(product_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(9, 10, product_r4.price, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("low-stock", product_r4.stock < 5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r4.stock);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-" + product_r4.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r4.status);
  }
}
function ManageProductsComponent_ng_container_33_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2, "No products found");
    \u0275\u0275elementEnd()();
  }
}
function ManageProductsComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 27)(2, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function ManageProductsComponent_ng_container_33_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "table", 29)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, ManageProductsComponent_ng_container_33_tr_21_Template, 20, 13, "tr", 30)(22, ManageProductsComponent_ng_container_33_tr_22_Template, 3, 0, "tr", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.filteredProducts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredProducts.length === 0);
  }
}
function ManageProductsComponent_div_34_img_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 87);
    \u0275\u0275listener("error", function ManageProductsComponent_div_34_img_19_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.imagePreview = null);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.imagePreview, \u0275\u0275sanitizeUrl);
  }
}
function ManageProductsComponent_div_34_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89);
    \u0275\u0275element(2, "i", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 91);
    \u0275\u0275text(4, "Click to upload image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 92);
    \u0275\u0275text(6, "JPG, PNG, WEBP \u2014 max 5 MB");
    \u0275\u0275elementEnd()();
  }
}
function ManageProductsComponent_div_34_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275element(1, "i", 94);
    \u0275\u0275text(2, " Change Image ");
    \u0275\u0275elementEnd();
  }
}
function ManageProductsComponent_div_34_i_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.editingProduct ? "fas fa-floppy-disk" : "fas fa-plus");
  }
}
function ManageProductsComponent_div_34_span_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 95);
  }
}
function ManageProductsComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function ManageProductsComponent_div_34_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275listener("click", function ManageProductsComponent_div_34_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 42)(3, "div", 43)(4, "div", 44);
    \u0275\u0275element(5, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 45);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 46);
    \u0275\u0275listener("click", function ManageProductsComponent_div_34_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275element(12, "i", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 48)(14, "div", 49)(15, "div", 50);
    \u0275\u0275element(16, "i", 51);
    \u0275\u0275text(17, " Product Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 52);
    \u0275\u0275listener("click", function ManageProductsComponent_div_34_Template_div_click_18_listener() {
      \u0275\u0275restoreView(_r5);
      const fileInput_r6 = \u0275\u0275reference(23);
      return \u0275\u0275resetView(fileInput_r6.click());
    });
    \u0275\u0275template(19, ManageProductsComponent_div_34_img_19_Template, 1, 1, "img", 53)(20, ManageProductsComponent_div_34_div_20_Template, 7, 0, "div", 54)(21, ManageProductsComponent_div_34_div_21_Template, 3, 0, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 56, 0);
    \u0275\u0275listener("change", function ManageProductsComponent_div_34_Template_input_change_22_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(24, "div", 57);
    \u0275\u0275elementStart(25, "div", 49)(26, "div", 50);
    \u0275\u0275element(27, "i", 58);
    \u0275\u0275text(28, " Product Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 59)(30, "label");
    \u0275\u0275text(31, "Name ");
    \u0275\u0275elementStart(32, "span", 60);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 61);
    \u0275\u0275element(35, "i", 62);
    \u0275\u0275elementStart(36, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ManageProductsComponent_div_34_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.name, $event) || (ctx_r1.formData.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 59)(38, "label");
    \u0275\u0275text(39, "Description ");
    \u0275\u0275elementStart(40, "span", 60);
    \u0275\u0275text(41, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "textarea", 64);
    \u0275\u0275twoWayListener("ngModelChange", function ManageProductsComponent_div_34_Template_textarea_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.description, $event) || (ctx_r1.formData.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(43, "div", 57);
    \u0275\u0275elementStart(44, "div", 49)(45, "div", 50);
    \u0275\u0275element(46, "i", 11);
    \u0275\u0275text(47, " Pricing & Inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 65)(49, "div", 59)(50, "label");
    \u0275\u0275text(51, "Price ");
    \u0275\u0275elementStart(52, "span", 60);
    \u0275\u0275text(53, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 61)(55, "span", 66);
    \u0275\u0275text(56, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ManageProductsComponent_div_34_Template_input_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.price, $event) || (ctx_r1.formData.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 59)(59, "label");
    \u0275\u0275text(60, "Stock ");
    \u0275\u0275elementStart(61, "span", 60);
    \u0275\u0275text(62, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 61);
    \u0275\u0275element(64, "i", 68);
    \u0275\u0275elementStart(65, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function ManageProductsComponent_div_34_Template_input_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.stock, $event) || (ctx_r1.formData.stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(66, "div", 57);
    \u0275\u0275elementStart(67, "div", 49)(68, "div", 50);
    \u0275\u0275element(69, "i", 70);
    \u0275\u0275text(70, " Classification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 65)(72, "div", 59)(73, "label");
    \u0275\u0275text(74, "Category ");
    \u0275\u0275elementStart(75, "span", 60);
    \u0275\u0275text(76, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "app-select", 71);
    \u0275\u0275twoWayListener("ngModelChange", function ManageProductsComponent_div_34_Template_app_select_ngModelChange_77_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.category, $event) || (ctx_r1.formData.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 59)(79, "label");
    \u0275\u0275text(80, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "app-select", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ManageProductsComponent_div_34_Template_app_select_ngModelChange_81_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.status, $event) || (ctx_r1.formData.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "div", 73)(83, "div", 74);
    \u0275\u0275element(84, "i", 75);
    \u0275\u0275elementStart(85, "div")(86, "span", 76);
    \u0275\u0275text(87, "Featured Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span", 77);
    \u0275\u0275text(89, "Show this product in featured sections");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(90, "label", 78)(91, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function ManageProductsComponent_div_34_Template_input_ngModelChange_91_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.featured, $event) || (ctx_r1.formData.featured = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "span", 80);
    \u0275\u0275element(93, "span", 81);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(94, "div", 82)(95, "button", 83);
    \u0275\u0275listener("click", function ManageProductsComponent_div_34_Template_button_click_95_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275element(96, "i", 47);
    \u0275\u0275text(97, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "button", 84);
    \u0275\u0275listener("click", function ManageProductsComponent_div_34_Template_button_click_98_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveProduct());
    });
    \u0275\u0275template(99, ManageProductsComponent_div_34_i_99_Template, 1, 2, "i", 85)(100, ManageProductsComponent_div_34_span_100_Template, 1, 0, "span", 86);
    \u0275\u0275text(101);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r1.editingProduct ? "fas fa-pen-to-square" : "fas fa-plus");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editingProduct ? "Edit Product" : "Add Product");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editingProduct ? "Update product information below" : "Fill in the details to add a new product");
    \u0275\u0275advance(8);
    \u0275\u0275classProp("has-image", ctx_r1.imagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.imagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.imagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.imagePreview);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.description);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.price);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.stock);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.category);
    \u0275\u0275property("options", ctx_r1.categoryOptions)("clearable", false);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.status);
    \u0275\u0275property("options", ctx_r1.statusOptions)("clearable", false);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.featured);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Saving..." : ctx_r1.editingProduct ? "Save Changes" : "Add Product", " ");
  }
}
var ManageProductsComponent = class _ManageProductsComponent {
  get categoryOptions() {
    return [
      { value: "", label: "Select category" },
      ...this.categories.map((c) => ({ value: c._id, label: c.name }))
    ];
  }
  constructor(productService, categoryService, confirmService, msgService) {
    this.productService = productService;
    this.categoryService = categoryService;
    this.confirmService = confirmService;
    this.msgService = msgService;
    this.products = [];
    this.loading = true;
    this.categories = [];
    this.statusOptions = [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" }
    ];
    this.showModal = false;
    this.editingProduct = null;
    this.saving = false;
    this.searchQuery = "";
    this.formData = { name: "", description: "", price: 0, stock: 0, category: "", status: "active", featured: false };
    this.selectedFile = null;
    this.imagePreview = null;
  }
  ngOnInit() {
    this.loadProducts();
    this.categoryService.getCategories().subscribe({ next: (res) => this.categories = res.categories || [] });
  }
  loadProducts() {
    this.productService.getProducts({ limit: 100, status: "" }).subscribe({
      next: (res) => {
        this.products = res.products || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  get filteredProducts() {
    if (!this.searchQuery)
      return this.products;
    return this.products.filter((p) => p.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }
  getCategoryName(product) {
    if (!product.category)
      return "";
    return typeof product.category === "string" ? "" : product.category.name;
  }
  openModal() {
    this.showModal = true;
    this.editingProduct = null;
    this.selectedFile = null;
    this.imagePreview = null;
    this.formData = { name: "", description: "", price: 0, stock: 0, category: "", status: "active", featured: false };
  }
  editProduct(product) {
    this.editingProduct = product;
    this.selectedFile = null;
    this.imagePreview = product.image ? `http://localhost:5050${product.image}` : null;
    this.formData = {
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      category: typeof product.category === "string" ? product.category : product.category._id,
      status: product.status,
      featured: product.featured
    };
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.selectedFile = null;
    this.imagePreview = null;
  }
  onFileChange(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    this.selectedFile = file;
    const reader = new FileReader();
    reader.onload = () => this.imagePreview = reader.result;
    reader.readAsDataURL(file);
  }
  saveProduct() {
    this.saving = true;
    const fd = new FormData();
    fd.append("name", this.formData.name);
    fd.append("description", this.formData.description);
    fd.append("price", String(this.formData.price));
    fd.append("stock", String(this.formData.stock));
    fd.append("category", this.formData.category);
    fd.append("status", this.formData.status);
    fd.append("featured", String(this.formData.featured));
    if (this.selectedFile)
      fd.append("image", this.selectedFile);
    const obs = this.editingProduct ? this.productService.updateProduct(this.editingProduct._id, fd) : this.productService.createProduct(fd);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.closeModal();
        this.loadProducts();
      },
      error: (err) => {
        this.saving = false;
        this.msgService.error(err.error?.message || "Failed to save product");
      }
    });
  }
  deleteProduct(id) {
    return __async(this, null, function* () {
      const ok = yield this.confirmService.confirm({ title: "Delete Product", description: "Are you sure you want to delete this product? This action cannot be undone.", type: "danger", okText: "Delete" });
      if (!ok)
        return;
      this.productService.deleteProduct(id).subscribe({ next: () => this.loadProducts() });
    });
  }
  static {
    this.\u0275fac = function ManageProductsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageProductsComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(ConfirmService), \u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageProductsComponent, selectors: [["app-manage-products"]], decls: 35, vars: 3, consts: [["fileInput", ""], [1, "admin-layout"], [1, "admin-sidebar"], [1, "sidebar-brand"], [1, "fas", "fa-gear"], [1, "sidebar-nav"], ["routerLink", "/admin", 1, "nav-item"], [1, "fas", "fa-chart-bar"], ["routerLink", "/admin/products", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-box"], ["routerLink", "/admin/categories", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-tag"], ["routerLink", "/admin/orders", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-receipt"], ["routerLink", "/admin/users", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-users"], [1, "divider"], ["routerLink", "/", 1, "nav-item"], [1, "fas", "fa-house"], [1, "admin-main"], [1, "page-header"], [1, "btn-add", 3, "click"], [1, "section-card"], ["size", "lg", "tip", "Loading products...", 4, "ngIf"], [4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["size", "lg", "tip", "Loading products..."], [1, "table-toolbar"], ["type", "text", "placeholder", "Search products...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "table-img", 3, "error", "src"], [1, "product-name"], [1, "status-badge"], [1, "actions"], [1, "btn-edit", 3, "click"], [1, "fas", "fa-pen"], [1, "btn-delete", 3, "click"], [1, "fas", "fa-trash"], ["colspan", "7", 1, "empty"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-title-group"], [1, "modal-icon"], [1, "modal-subtitle"], [1, "modal-close", 3, "click"], [1, "fas", "fa-xmark"], [1, "modal-body"], [1, "form-section"], [1, "section-label"], [1, "fas", "fa-image"], [1, "img-upload-area", 3, "click"], ["class", "img-preview", 3, "src", "error", 4, "ngIf"], ["class", "img-placeholder", 4, "ngIf"], ["class", "img-overlay", 4, "ngIf"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], [1, "form-divider"], [1, "fas", "fa-circle-info"], [1, "form-group"], [1, "req"], [1, "input-wrap"], [1, "fas", "fa-gamepad", "input-icon"], ["type", "text", "placeholder", "e.g. The Witcher 3", 1, "form-control", "has-icon", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Describe the product...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row"], [1, "input-prefix"], ["type", "number", "placeholder", "0.00", "min", "0", "step", "0.01", 1, "form-control", "has-prefix", 3, "ngModelChange", "ngModel"], [1, "fas", "fa-cubes", "input-icon"], ["type", "number", "placeholder", "0", "min", "0", 1, "form-control", "has-icon", 3, "ngModelChange", "ngModel"], [1, "fas", "fa-layer-group"], ["placeholder", "Select category", 3, "ngModelChange", "ngModel", "options", "clearable"], [3, "ngModelChange", "ngModel", "options", "clearable"], [1, "featured-row"], [1, "featured-info"], [1, "fas", "fa-star", "featured-star"], [1, "featured-title"], [1, "featured-desc"], [1, "toggle-switch"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "toggle-track"], [1, "toggle-thumb"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [3, "class", 4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "img-preview", 3, "error", "src"], [1, "img-placeholder"], [1, "upload-icon"], [1, "fas", "fa-cloud-arrow-up"], [1, "upload-text"], [1, "upload-sub"], [1, "img-overlay"], [1, "fas", "fa-camera"], [1, "spinner"]], template: function ManageProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "aside", 2)(2, "div", 3);
        \u0275\u0275element(3, "i", 4);
        \u0275\u0275text(4, " Admin Panel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "nav", 5)(6, "a", 6);
        \u0275\u0275element(7, "i", 7);
        \u0275\u0275text(8, " Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "a", 8);
        \u0275\u0275element(10, "i", 9);
        \u0275\u0275text(11, " Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 10);
        \u0275\u0275element(13, "i", 11);
        \u0275\u0275text(14, " Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 12);
        \u0275\u0275element(16, "i", 13);
        \u0275\u0275text(17, " Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "a", 14);
        \u0275\u0275element(19, "i", 15);
        \u0275\u0275text(20, " Users");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "div", 16);
        \u0275\u0275elementStart(22, "a", 17);
        \u0275\u0275element(23, "i", 18);
        \u0275\u0275text(24, " Back to Store");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "main", 19)(26, "div", 20)(27, "h1");
        \u0275\u0275text(28, "Manage Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 21);
        \u0275\u0275listener("click", function ManageProductsComponent_Template_button_click_29_listener() {
          return ctx.openModal();
        });
        \u0275\u0275text(30, "+ Add Product");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 22);
        \u0275\u0275template(32, ManageProductsComponent_app_spin_32_Template, 1, 0, "app-spin", 23)(33, ManageProductsComponent_ng_container_33_Template, 23, 3, "ng-container", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(34, ManageProductsComponent_div_34_Template, 102, 24, "div", 25);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(32);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterModule, RouterLink, RouterLinkActive, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MinValidator, NgModel, SelectComponent, SpinComponent], styles: ['@charset "UTF-8";\n\n\n\n.admin-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.admin-sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  background: #0d0f1e;\n  color: white;\n  padding: 24px 0;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  border-right: 1px solid rgba(255, 255, 255, 0.07);\n  animation: _ngcontent-%COMP%_sidebarIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_sidebarIn {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  padding: 0 24px 24px;\n  font-size: 1.2rem;\n  font-weight: 700;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  margin-bottom: 16px;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 12px 24px;\n  color: #9ca3af;\n  text-decoration: none;\n  transition: all 0.22s;\n  font-weight: 500;\n  border-left: 3px solid transparent;\n}\n.nav-item[_ngcontent-%COMP%]:hover, \n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.1);\n  color: #a5b4fc;\n  border-left-color: #4f6ef7;\n  transform: translateX(3px);\n}\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 18px;\n  text-align: center;\n  margin-right: 4px;\n  font-size: 0.85rem;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 12px 0;\n}\n.admin-main[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 32px;\n  background: #0f1123;\n  overflow-x: hidden;\n  min-width: 0;\n  animation: _ngcontent-%COMP%_pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;\n}\n@keyframes _ngcontent-%COMP%_pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #e8eaf6;\n}\n.btn-add[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(79, 110, 247, 0.4);\n}\n.section-card[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  overflow-x: auto;\n  animation: _ngcontent-%COMP%_cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;\n}\n@keyframes _ngcontent-%COMP%_cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.table-toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.search-input[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  width: 300px;\n  outline: none;\n  background: rgba(255, 255, 255, 0.05);\n  color: #e8eaf6;\n  transition: border-color 0.25s, box-shadow 0.25s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #4f6ef7;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.15);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 560px;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 12px 16px;\n  background: rgba(255, 255, 255, 0.03);\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  font-size: 0.9rem;\n  vertical-align: middle;\n  color: #c9cbdf;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.18s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n.table-img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  object-fit: cover;\n  border-radius: 8px;\n  transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   .table-img[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.product-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  max-width: 200px;\n  color: #e8eaf6;\n}\n.low-stock[_ngcontent-%COMP%] {\n  color: #f87171;\n  font-weight: 700;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.status-active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: #4ade80;\n}\n.status-inactive[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.07);\n  color: #9ca3af;\n}\n.status-out_of_stock[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-edit[_ngcontent-%COMP%], \n.btn-delete[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: all 0.2s;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.15);\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.3);\n  transform: scale(1.1);\n}\n.btn-delete[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.25);\n  transform: scale(1.1);\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9ca3af;\n  padding: 40px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(5, 7, 20, 0.82);\n  backdrop-filter: blur(6px);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  z-index: 1000;\n  padding-top: 60px;\n  animation: _ngcontent-%COMP%_overlayIn 0.22s ease both;\n}\n@keyframes _ngcontent-%COMP%_overlayIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal[_ngcontent-%COMP%] {\n  background: #171a2e;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 560px;\n  max-height: 92vh;\n  overflow-y: auto;\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(79, 110, 247, 0.08);\n  animation: _ngcontent-%COMP%_modalIn 0.38s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(255, 255, 255, 0.1) transparent;\n}\n.modal[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.modal[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.modal[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 99px;\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    transform: scale(0.9) translateY(24px);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1) translateY(0);\n    opacity: 1;\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 24px 24px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 110, 247, 0.06) 0%,\n      rgba(139, 92, 246, 0.04) 100%);\n  border-radius: 20px 20px 0 0;\n}\n.modal-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.modal-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  color: white;\n  box-shadow: 0 4px 12px rgba(79, 110, 247, 0.35);\n  flex-shrink: 0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.18rem;\n  font-weight: 700;\n  color: #e8eaf6;\n  margin: 0 0 3px;\n}\n.modal-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #6b7280;\n  margin: 0;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 1rem;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  border-color: rgba(239, 68, 68, 0.3);\n  color: #f87171;\n  transform: rotate(90deg);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px 8px;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.section-label[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #6b7280;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.section-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4f6ef7;\n  font-size: 0.78rem;\n}\n.form-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.06);\n  margin: 18px 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 0.82rem;\n  color: #c9cbdf;\n}\n.req[_ngcontent-%COMP%] {\n  color: #f87171;\n  margin-left: 2px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 0.82rem;\n  pointer-events: none;\n  z-index: 1;\n}\n.input-prefix[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 13px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 0.92rem;\n  font-weight: 600;\n  pointer-events: none;\n  z-index: 1;\n}\n.select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 13px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 0.72rem;\n  pointer-events: none;\n  z-index: 1;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  font-size: 0.9rem;\n  outline: none;\n  box-sizing: border-box;\n  background: rgba(255, 255, 255, 0.04);\n  color: #e8eaf6;\n  transition:\n    border-color 0.22s,\n    box-shadow 0.22s,\n    background 0.22s;\n  font-family: inherit;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.form-control.has-icon[_ngcontent-%COMP%] {\n  padding-left: 36px;\n}\n.form-control.has-prefix[_ngcontent-%COMP%] {\n  padding-left: 28px;\n}\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.18);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #4f6ef7;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.14);\n  background: rgba(255, 255, 255, 0.06);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #505570;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  line-height: 1.5;\n}\nselect.form-control[_ngcontent-%COMP%] {\n  padding-right: 36px;\n  cursor: pointer;\n}\nselect.form-control[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #1e2235;\n}\n.img-upload-area[_ngcontent-%COMP%] {\n  border: 2px dashed rgba(255, 255, 255, 0.12);\n  border-radius: 14px;\n  height: 170px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: border-color 0.25s, background 0.25s;\n  background: rgba(255, 255, 255, 0.025);\n}\n.img-upload-area[_ngcontent-%COMP%]:hover {\n  border-color: #4f6ef7;\n  background: rgba(79, 110, 247, 0.05);\n}\n.img-upload-area.has-image[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: rgba(79, 110, 247, 0.3);\n}\n.img-preview[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  display: block;\n}\n.img-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 0.88rem;\n  font-weight: 600;\n  gap: 6px;\n  opacity: 0;\n  transition: opacity 0.22s;\n}\n.img-upload-area[_ngcontent-%COMP%]:hover   .img-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.img-placeholder[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.upload-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: rgba(79, 110, 247, 0.12);\n  border: 1.5px dashed rgba(79, 110, 247, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.4rem;\n  color: #4f6ef7;\n  margin: 0 auto 12px;\n}\n.upload-text[_ngcontent-%COMP%] {\n  color: #c9cbdf;\n  font-size: 0.88rem;\n  font-weight: 600;\n  margin: 0 0 4px;\n}\n.upload-sub[_ngcontent-%COMP%] {\n  color: #505570;\n  font-size: 0.75rem;\n  margin: 0;\n}\n.featured-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.025);\n  border: 1.5px solid rgba(255, 255, 255, 0.07);\n  margin-top: 14px;\n}\n.featured-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.featured-star[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  font-size: 1rem;\n}\n.featured-title[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #e8eaf6;\n}\n.featured-desc[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 1px;\n}\n.toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 44px;\n  height: 24px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.toggle-track[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 99px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1.5px solid rgba(255, 255, 255, 0.12);\n  transition: background 0.25s, border-color 0.25s;\n  display: flex;\n  align-items: center;\n}\n.toggle-thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 3px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #9ca3af;\n  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.25s;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .toggle-track[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.3);\n  border-color: #4f6ef7;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .toggle-track[_ngcontent-%COMP%]   .toggle-thumb[_ngcontent-%COMP%] {\n  transform: translateX(20px);\n  background: #4f6ef7;\n}\n.alert[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px 14px;\n  border-radius: 10px;\n  font-size: 0.84rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: #f87171;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 16px 24px 24px;\n  justify-content: flex-end;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  margin-top: 8px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  background: transparent;\n  border: 1.5px solid rgba(255, 255, 255, 0.12);\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 600;\n  color: #9ca3af;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: #c9cbdf;\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 0.88rem;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  box-shadow: 0 4px 14px rgba(79, 110, 247, 0.25);\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 22px rgba(79, 110, 247, 0.45);\n}\n.btn-save[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1024px) {\n  .admin-sidebar[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n  .admin-main[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n}\n@media (max-width: 768px) {\n  .admin-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .admin-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 58px;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: auto;\n    flex-direction: row;\n    padding: 0;\n    border-right: none;\n    border-top: 1px solid rgba(255, 255, 255, 0.07);\n    z-index: 200;\n  }\n  .sidebar-brand[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sidebar-nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    overflow-x: auto;\n    scrollbar-width: none;\n  }\n  .sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .nav-item[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-width: 54px;\n    padding: 6px 4px;\n    gap: 2px;\n    border-left: none;\n    border-top: 2px solid transparent;\n    border-radius: 0;\n    font-size: 0.6rem;\n    text-align: center;\n  }\n  .nav-item[_ngcontent-%COMP%]:hover, \n   .nav-item.active[_ngcontent-%COMP%] {\n    transform: none;\n    border-left-color: transparent;\n    border-top-color: #4f6ef7;\n  }\n  .nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    width: auto;\n    margin-right: 0;\n    display: block;\n  }\n  .admin-main[_ngcontent-%COMP%] {\n    padding: 18px 14px 76px;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .search-input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .admin-main[_ngcontent-%COMP%] {\n    padding: 14px 12px 76px;\n  }\n  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .section-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=manage-products.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageProductsComponent, [{
    type: Component,
    args: [{ selector: "app-manage-products", standalone: true, imports: [CommonModule, RouterModule, FormsModule, SelectComponent, SpinComponent], template: `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="sidebar-brand"><i class="fas fa-gear"></i> Admin Panel</div>
        <nav class="sidebar-nav">
          <a routerLink="/admin" class="nav-item"><i class="fas fa-chart-bar"></i> Dashboard</a>
          <a routerLink="/admin/products" routerLinkActive="active" class="nav-item"><i class="fas fa-box"></i> Products</a>
          <a routerLink="/admin/categories" routerLinkActive="active" class="nav-item"><i class="fas fa-tag"></i> Categories</a>
          <a routerLink="/admin/orders" routerLinkActive="active" class="nav-item"><i class="fas fa-receipt"></i> Orders</a>
          <a routerLink="/admin/users" routerLinkActive="active" class="nav-item"><i class="fas fa-users"></i> Users</a>
          <div class="divider"></div>
          <a routerLink="/" class="nav-item"><i class="fas fa-house"></i> Back to Store</a>
        </nav>
      </aside>
      <main class="admin-main">
        <div class="page-header">
          <h1>Manage Products</h1>
          <button class="btn-add" (click)="openModal()">+ Add Product</button>
        </div>

        <div class="section-card">
          <app-spin *ngIf="loading" size="lg" tip="Loading products..."></app-spin>
          <ng-container *ngIf="!loading">
          <div class="table-toolbar">
            <input type="text" [(ngModel)]="searchQuery" placeholder="Search products..." class="search-input" />
          </div>
          <table class="data-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let product of filteredProducts">
                <td><img [src]="product.image ? 'http://localhost:5050' + product.image : 'assets/no-image.png'" class="table-img" (error)="$any($event.target).src='assets/no-image.png'" /></td>
                <td class="product-name">{{ product.name }}</td>
                <td>{{ getCategoryName(product) }}</td>
                <td>\${{ product.price | number:'1.2-2' }}</td>
                <td [class.low-stock]="product.stock < 5">{{ product.stock }}</td>
                <td><span class="status-badge" [class]="'status-' + product.status">{{ product.status }}</span></td>
                <td class="actions">
                  <button class="btn-edit" (click)="editProduct(product)"><i class="fas fa-pen"></i></button>
                  <button class="btn-delete" (click)="deleteProduct(product._id)"><i class="fas fa-trash"></i></button>
                </td>
              </tr>
              <tr *ngIf="filteredProducts.length === 0">
                <td colspan="7" class="empty">No products found</td>
              </tr>
            </tbody>
          </table>
          </ng-container>
        </div>

        <!-- Modal -->
        <div class="modal-overlay" *ngIf="showModal" (click)="closeModal()">
          <div class="modal" (click)="$event.stopPropagation()">
            <!-- Modal Header -->
            <div class="modal-header">
              <div class="modal-title-group">
                <div class="modal-icon">
                  <i [class]="editingProduct ? 'fas fa-pen-to-square' : 'fas fa-plus'"></i>
                </div>
                <div>
                  <h2>{{ editingProduct ? 'Edit Product' : 'Add Product' }}</h2>
                  <p class="modal-subtitle">{{ editingProduct ? 'Update product information below' : 'Fill in the details to add a new product' }}</p>
                </div>
              </div>
              <button class="modal-close" (click)="closeModal()"><i class="fas fa-xmark"></i></button>
            </div>

            <div class="modal-body">
              <!-- Image Upload -->
              <div class="form-section">
                <div class="section-label"><i class="fas fa-image"></i> Product Image</div>
                <div class="img-upload-area" (click)="fileInput.click()" [class.has-image]="imagePreview">
                  <img *ngIf="imagePreview" [src]="imagePreview" class="img-preview" (error)="imagePreview = null" />
                  <div *ngIf="!imagePreview" class="img-placeholder">
                    <div class="upload-icon"><i class="fas fa-cloud-arrow-up"></i></div>
                    <p class="upload-text">Click to upload image</p>
                    <p class="upload-sub">JPG, PNG, WEBP \u2014 max 5 MB</p>
                  </div>
                  <div *ngIf="imagePreview" class="img-overlay">
                    <i class="fas fa-camera"></i> Change Image
                  </div>
                </div>
                <input #fileInput type="file" accept="image/*" style="display:none" (change)="onFileChange($event)" />
              </div>

              <div class="form-divider"></div>

              <!-- Product Details -->
              <div class="form-section">
                <div class="section-label"><i class="fas fa-circle-info"></i> Product Details</div>
                <div class="form-group">
                  <label>Name <span class="req">*</span></label>
                  <div class="input-wrap">
                    <i class="fas fa-gamepad input-icon"></i>
                    <input type="text" [(ngModel)]="formData.name" class="form-control has-icon" placeholder="e.g. The Witcher 3" />
                  </div>
                </div>
                <div class="form-group">
                  <label>Description <span class="req">*</span></label>
                  <textarea [(ngModel)]="formData.description" class="form-control" rows="3" placeholder="Describe the product..."></textarea>
                </div>
              </div>

              <div class="form-divider"></div>

              <!-- Pricing & Inventory -->
              <div class="form-section">
                <div class="section-label"><i class="fas fa-tag"></i> Pricing & Inventory</div>
                <div class="form-row">
                  <div class="form-group">
                    <label>Price <span class="req">*</span></label>
                    <div class="input-wrap">
                      <span class="input-prefix">$</span>
                      <input type="number" [(ngModel)]="formData.price" class="form-control has-prefix" placeholder="0.00" min="0" step="0.01" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Stock <span class="req">*</span></label>
                    <div class="input-wrap">
                      <i class="fas fa-cubes input-icon"></i>
                      <input type="number" [(ngModel)]="formData.stock" class="form-control has-icon" placeholder="0" min="0" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-divider"></div>

              <!-- Classification -->
              <div class="form-section">
                <div class="section-label"><i class="fas fa-layer-group"></i> Classification</div>
                <div class="form-row">
                  <div class="form-group">
                    <label>Category <span class="req">*</span></label>
                    <app-select [(ngModel)]="formData.category" [options]="categoryOptions" placeholder="Select category" [clearable]="false"></app-select>
                  </div>
                  <div class="form-group">
                    <label>Status</label>
                    <app-select [(ngModel)]="formData.status" [options]="statusOptions" [clearable]="false"></app-select>
                  </div>
                </div>

                <!-- Featured Toggle -->
                <div class="featured-row">
                  <div class="featured-info">
                    <i class="fas fa-star featured-star"></i>
                    <div>
                      <span class="featured-title">Featured Product</span>
                      <span class="featured-desc">Show this product in featured sections</span>
                    </div>
                  </div>
                  <label class="toggle-switch">
                    <input type="checkbox" [(ngModel)]="formData.featured" />
                    <span class="toggle-track"><span class="toggle-thumb"></span></span>
                  </label>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button class="btn-cancel" (click)="closeModal()"><i class="fas fa-xmark"></i> Cancel</button>
              <button class="btn-save" (click)="saveProduct()" [disabled]="saving">
                <i *ngIf="!saving" [class]="editingProduct ? 'fas fa-floppy-disk' : 'fas fa-plus'"></i>
                <span *ngIf="saving" class="spinner"></span>
                {{ saving ? 'Saving...' : (editingProduct ? 'Save Changes' : 'Add Product') }}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;e9324410dbe61343ae53b0cb35e38de7eea5e69ff3409116561123e75309bc38;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/features/admin/manage-products/manage-products.component.ts */\n.admin-layout {\n  display: flex;\n  min-height: 100vh;\n}\n.admin-sidebar {\n  width: 240px;\n  background: #0d0f1e;\n  color: white;\n  padding: 24px 0;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  border-right: 1px solid rgba(255, 255, 255, 0.07);\n  animation: sidebarIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes sidebarIn {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.sidebar-brand {\n  padding: 0 24px 24px;\n  font-size: 1.2rem;\n  font-weight: 700;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  margin-bottom: 16px;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n}\n.nav-item {\n  display: block;\n  padding: 12px 24px;\n  color: #9ca3af;\n  text-decoration: none;\n  transition: all 0.22s;\n  font-weight: 500;\n  border-left: 3px solid transparent;\n}\n.nav-item:hover,\n.nav-item.active {\n  background: rgba(79, 110, 247, 0.1);\n  color: #a5b4fc;\n  border-left-color: #4f6ef7;\n  transform: translateX(3px);\n}\n.nav-item i {\n  width: 18px;\n  text-align: center;\n  margin-right: 4px;\n  font-size: 0.85rem;\n}\n.divider {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 12px 0;\n}\n.admin-main {\n  flex: 1;\n  padding: 32px;\n  background: #0f1123;\n  overflow-x: hidden;\n  min-width: 0;\n  animation: pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;\n}\n@keyframes pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #e8eaf6;\n}\n.btn-add {\n  padding: 10px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.btn-add:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(79, 110, 247, 0.4);\n}\n.section-card {\n  background: #1e2235;\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  overflow-x: auto;\n  animation: cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;\n}\n@keyframes cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.table-toolbar {\n  margin-bottom: 16px;\n}\n.search-input {\n  padding: 10px 16px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  width: 300px;\n  outline: none;\n  background: rgba(255, 255, 255, 0.05);\n  color: #e8eaf6;\n  transition: border-color 0.25s, box-shadow 0.25s;\n}\n.search-input:focus {\n  border-color: #4f6ef7;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.15);\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 560px;\n}\n.data-table th {\n  text-align: left;\n  padding: 12px 16px;\n  background: rgba(255, 255, 255, 0.03);\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n}\n.data-table td {\n  padding: 14px 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  font-size: 0.9rem;\n  vertical-align: middle;\n  color: #c9cbdf;\n}\n.data-table tbody tr {\n  transition: background 0.18s;\n}\n.data-table tbody tr:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n.table-img {\n  width: 48px;\n  height: 48px;\n  object-fit: cover;\n  border-radius: 8px;\n  transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.data-table tbody tr:hover .table-img {\n  transform: scale(1.08);\n}\n.product-name {\n  font-weight: 600;\n  max-width: 200px;\n  color: #e8eaf6;\n}\n.low-stock {\n  color: #f87171;\n  font-weight: 700;\n}\n.status-badge {\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.status-active {\n  background: rgba(34, 197, 94, 0.15);\n  color: #4ade80;\n}\n.status-inactive {\n  background: rgba(255, 255, 255, 0.07);\n  color: #9ca3af;\n}\n.status-out_of_stock {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-edit,\n.btn-delete {\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: all 0.2s;\n}\n.btn-edit {\n  background: rgba(79, 110, 247, 0.15);\n}\n.btn-edit:hover {\n  background: rgba(79, 110, 247, 0.3);\n  transform: scale(1.1);\n}\n.btn-delete {\n  background: rgba(239, 68, 68, 0.1);\n}\n.btn-delete:hover {\n  background: rgba(239, 68, 68, 0.25);\n  transform: scale(1.1);\n}\n.empty {\n  text-align: center;\n  color: #9ca3af;\n  padding: 40px;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(5, 7, 20, 0.82);\n  backdrop-filter: blur(6px);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  z-index: 1000;\n  padding-top: 60px;\n  animation: overlayIn 0.22s ease both;\n}\n@keyframes overlayIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal {\n  background: #171a2e;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 560px;\n  max-height: 92vh;\n  overflow-y: auto;\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(79, 110, 247, 0.08);\n  animation: modalIn 0.38s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(255, 255, 255, 0.1) transparent;\n}\n.modal::-webkit-scrollbar {\n  width: 5px;\n}\n.modal::-webkit-scrollbar-track {\n  background: transparent;\n}\n.modal::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 99px;\n}\n@keyframes modalIn {\n  from {\n    transform: scale(0.9) translateY(24px);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1) translateY(0);\n    opacity: 1;\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 24px 24px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 110, 247, 0.06) 0%,\n      rgba(139, 92, 246, 0.04) 100%);\n  border-radius: 20px 20px 0 0;\n}\n.modal-title-group {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.modal-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  color: white;\n  box-shadow: 0 4px 12px rgba(79, 110, 247, 0.35);\n  flex-shrink: 0;\n}\n.modal-header h2 {\n  font-size: 1.18rem;\n  font-weight: 700;\n  color: #e8eaf6;\n  margin: 0 0 3px;\n}\n.modal-subtitle {\n  font-size: 0.78rem;\n  color: #6b7280;\n  margin: 0;\n}\n.modal-close {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 1rem;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.modal-close:hover {\n  background: rgba(239, 68, 68, 0.15);\n  border-color: rgba(239, 68, 68, 0.3);\n  color: #f87171;\n  transform: rotate(90deg);\n}\n.modal-body {\n  padding: 20px 24px 8px;\n}\n.form-section {\n  margin-bottom: 4px;\n}\n.section-label {\n  font-size: 0.73rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #6b7280;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.section-label i {\n  color: #4f6ef7;\n  font-size: 0.78rem;\n}\n.form-divider {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.06);\n  margin: 18px 0;\n}\n.form-group {\n  margin-bottom: 14px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 0.82rem;\n  color: #c9cbdf;\n}\n.req {\n  color: #f87171;\n  margin-left: 2px;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.input-wrap {\n  position: relative;\n}\n.input-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 0.82rem;\n  pointer-events: none;\n  z-index: 1;\n}\n.input-prefix {\n  position: absolute;\n  left: 13px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 0.92rem;\n  font-weight: 600;\n  pointer-events: none;\n  z-index: 1;\n}\n.select-wrap {\n  position: relative;\n}\n.select-arrow {\n  position: absolute;\n  right: 13px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 0.72rem;\n  pointer-events: none;\n  z-index: 1;\n}\n.form-control {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  font-size: 0.9rem;\n  outline: none;\n  box-sizing: border-box;\n  background: rgba(255, 255, 255, 0.04);\n  color: #e8eaf6;\n  transition:\n    border-color 0.22s,\n    box-shadow 0.22s,\n    background 0.22s;\n  font-family: inherit;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.form-control.has-icon {\n  padding-left: 36px;\n}\n.form-control.has-prefix {\n  padding-left: 28px;\n}\n.form-control:hover {\n  border-color: rgba(255, 255, 255, 0.18);\n}\n.form-control:focus {\n  border-color: #4f6ef7;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.14);\n  background: rgba(255, 255, 255, 0.06);\n}\n.form-control::placeholder {\n  color: #505570;\n}\ntextarea.form-control {\n  resize: vertical;\n  min-height: 80px;\n  line-height: 1.5;\n}\nselect.form-control {\n  padding-right: 36px;\n  cursor: pointer;\n}\nselect.form-control option {\n  background: #1e2235;\n}\n.img-upload-area {\n  border: 2px dashed rgba(255, 255, 255, 0.12);\n  border-radius: 14px;\n  height: 170px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: border-color 0.25s, background 0.25s;\n  background: rgba(255, 255, 255, 0.025);\n}\n.img-upload-area:hover {\n  border-color: #4f6ef7;\n  background: rgba(79, 110, 247, 0.05);\n}\n.img-upload-area.has-image {\n  border-style: solid;\n  border-color: rgba(79, 110, 247, 0.3);\n}\n.img-preview {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  display: block;\n}\n.img-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 0.88rem;\n  font-weight: 600;\n  gap: 6px;\n  opacity: 0;\n  transition: opacity 0.22s;\n}\n.img-upload-area:hover .img-overlay {\n  opacity: 1;\n}\n.img-placeholder {\n  text-align: center;\n}\n.upload-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: rgba(79, 110, 247, 0.12);\n  border: 1.5px dashed rgba(79, 110, 247, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.4rem;\n  color: #4f6ef7;\n  margin: 0 auto 12px;\n}\n.upload-text {\n  color: #c9cbdf;\n  font-size: 0.88rem;\n  font-weight: 600;\n  margin: 0 0 4px;\n}\n.upload-sub {\n  color: #505570;\n  font-size: 0.75rem;\n  margin: 0;\n}\n.featured-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.025);\n  border: 1.5px solid rgba(255, 255, 255, 0.07);\n  margin-top: 14px;\n}\n.featured-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.featured-star {\n  color: #f59e0b;\n  font-size: 1rem;\n}\n.featured-title {\n  display: block;\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #e8eaf6;\n}\n.featured-desc {\n  display: block;\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 1px;\n}\n.toggle-switch {\n  position: relative;\n  width: 44px;\n  height: 24px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.toggle-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.toggle-track {\n  position: absolute;\n  inset: 0;\n  border-radius: 99px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1.5px solid rgba(255, 255, 255, 0.12);\n  transition: background 0.25s, border-color 0.25s;\n  display: flex;\n  align-items: center;\n}\n.toggle-thumb {\n  position: absolute;\n  left: 3px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #9ca3af;\n  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.25s;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n}\n.toggle-switch input:checked ~ .toggle-track {\n  background: rgba(79, 110, 247, 0.3);\n  border-color: #4f6ef7;\n}\n.toggle-switch input:checked ~ .toggle-track .toggle-thumb {\n  transform: translateX(20px);\n  background: #4f6ef7;\n}\n.alert {\n  margin-top: 16px;\n  padding: 12px 14px;\n  border-radius: 10px;\n  font-size: 0.84rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.alert-error {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: #f87171;\n}\n.modal-footer {\n  display: flex;\n  gap: 10px;\n  padding: 16px 24px 24px;\n  justify-content: flex-end;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  margin-top: 8px;\n}\n.btn-cancel {\n  padding: 10px 18px;\n  background: transparent;\n  border: 1.5px solid rgba(255, 255, 255, 0.12);\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 600;\n  color: #9ca3af;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.btn-cancel:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: #c9cbdf;\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.btn-save {\n  padding: 10px 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 0.88rem;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  box-shadow: 0 4px 14px rgba(79, 110, 247, 0.25);\n}\n.btn-save:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 22px rgba(79, 110, 247, 0.45);\n}\n.btn-save:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-save:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.spinner {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  animation: spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1024px) {\n  .admin-sidebar {\n    width: 200px;\n  }\n  .admin-main {\n    padding: 24px 20px;\n  }\n}\n@media (max-width: 768px) {\n  .admin-layout {\n    flex-direction: column;\n  }\n  .admin-sidebar {\n    width: 100%;\n    height: 58px;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: auto;\n    flex-direction: row;\n    padding: 0;\n    border-right: none;\n    border-top: 1px solid rgba(255, 255, 255, 0.07);\n    z-index: 200;\n  }\n  .sidebar-brand {\n    display: none;\n  }\n  .divider {\n    display: none;\n  }\n  .sidebar-nav {\n    flex-direction: row;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    overflow-x: auto;\n    scrollbar-width: none;\n  }\n  .sidebar-nav::-webkit-scrollbar {\n    display: none;\n  }\n  .nav-item {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-width: 54px;\n    padding: 6px 4px;\n    gap: 2px;\n    border-left: none;\n    border-top: 2px solid transparent;\n    border-radius: 0;\n    font-size: 0.6rem;\n    text-align: center;\n  }\n  .nav-item:hover,\n  .nav-item.active {\n    transform: none;\n    border-left-color: transparent;\n    border-top-color: #4f6ef7;\n  }\n  .nav-item i {\n    font-size: 1.1rem;\n    width: auto;\n    margin-right: 0;\n    display: block;\n  }\n  .admin-main {\n    padding: 18px 14px 76px;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .page-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .search-input {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .admin-main {\n    padding: 14px 12px 76px;\n  }\n  .page-header h1 {\n    font-size: 1.4rem;\n  }\n  .section-card {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=manage-products.component.css.map */\n'] }]
  }], () => [{ type: ProductService }, { type: CategoryService }, { type: ConfirmService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageProductsComponent, { className: "ManageProductsComponent", filePath: "src/app/features/admin/manage-products/manage-products.component.ts", lineNumber: 490 });
})();
export {
  ManageProductsComponent
};
//# sourceMappingURL=chunk-LMKSP32S.js.map
