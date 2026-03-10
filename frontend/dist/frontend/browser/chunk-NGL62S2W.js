import {
  ConfirmService
} from "./chunk-YC4BKLUZ.js";
import {
  CategoryService
} from "./chunk-SVTSZWE5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-QGP2PKSJ.js";
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
  NgForOf,
  NgIf,
  __async,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IXUP4X5N.js";

// src/app/features/admin/manage-categories/manage-categories.component.ts
function ManageCategoriesComponent_app_spin_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spin", 25);
  }
}
function ManageCategoriesComponent_table_33_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 31)(9, "button", 32);
    \u0275\u0275listener("click", function ManageCategoriesComponent_table_33_tr_12_Template_button_click_9_listener() {
      const cat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editCategory(cat_r2));
    });
    \u0275\u0275element(10, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 34);
    \u0275\u0275listener("click", function ManageCategoriesComponent_table_33_tr_12_Template_button_click_11_listener() {
      const cat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteCategory(cat_r2._id));
    });
    \u0275\u0275element(12, "i", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r2.description || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", cat_r2.isActive)("inactive", !cat_r2.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r2.isActive ? "Active" : "Inactive", " ");
  }
}
function ManageCategoriesComponent_table_33_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2, "No categories yet");
    \u0275\u0275elementEnd()();
  }
}
function ManageCategoriesComponent_table_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 26)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275template(12, ManageCategoriesComponent_table_33_tr_12_Template, 13, 7, "tr", 27)(13, ManageCategoriesComponent_table_33_tr_13_Template, 3, 0, "tr", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r2.categories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.categories.length === 0);
  }
}
function ManageCategoriesComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function ManageCategoriesComponent_div_34_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275listener("click", function ManageCategoriesComponent_div_34_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 39)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 40);
    \u0275\u0275listener("click", function ManageCategoriesComponent_div_34_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 41)(8, "div", 42)(9, "label");
    \u0275\u0275text(10, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function ManageCategoriesComponent_div_34_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.name, $event) || (ctx_r2.formData.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 42)(13, "label");
    \u0275\u0275text(14, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 44);
    \u0275\u0275twoWayListener("ngModelChange", function ManageCategoriesComponent_div_34_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.description, $event) || (ctx_r2.formData.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 45)(17, "button", 46);
    \u0275\u0275listener("click", function ManageCategoriesComponent_div_34_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(18, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 47);
    \u0275\u0275listener("click", function ManageCategoriesComponent_div_34_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.editing ? "Edit Category" : "Add Category");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.description);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving ? "Saving..." : "Save", " ");
  }
}
var ManageCategoriesComponent = class _ManageCategoriesComponent {
  constructor(categoryService, confirmService) {
    this.categoryService = categoryService;
    this.confirmService = confirmService;
    this.categories = [];
    this.loading = true;
    this.showModal = false;
    this.editing = null;
    this.saving = false;
    this.formData = { name: "", description: "" };
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.categoryService.getCategories().subscribe({
      next: (res) => {
        this.categories = res.categories || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  openModal() {
    this.showModal = true;
    this.editing = null;
    this.formData = { name: "", description: "" };
  }
  editCategory(cat) {
    this.editing = cat;
    this.formData = { name: cat.name, description: cat.description || "" };
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
  save() {
    this.saving = true;
    const obs = this.editing ? this.categoryService.updateCategory(this.editing._id, this.formData) : this.categoryService.createCategory(this.formData);
    obs.subscribe({ next: () => {
      this.saving = false;
      this.closeModal();
      this.load();
    }, error: () => {
      this.saving = false;
    } });
  }
  deleteCategory(id) {
    return __async(this, null, function* () {
      const ok = yield this.confirmService.confirm({ title: "Delete Category", description: "Are you sure you want to delete this category?", type: "danger", okText: "Delete" });
      if (!ok)
        return;
      this.categoryService.deleteCategory(id).subscribe({ next: () => this.load() });
    });
  }
  static {
    this.\u0275fac = function ManageCategoriesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageCategoriesComponent)(\u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(ConfirmService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageCategoriesComponent, selectors: [["app-manage-categories"]], decls: 35, vars: 3, consts: [[1, "admin-layout"], [1, "admin-sidebar"], [1, "sidebar-brand"], [1, "fas", "fa-gear"], [1, "sidebar-nav"], ["routerLink", "/admin", 1, "nav-item"], [1, "fas", "fa-chart-bar"], ["routerLink", "/admin/products", 1, "nav-item"], [1, "fas", "fa-box"], ["routerLink", "/admin/categories", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-tag"], ["routerLink", "/admin/orders", 1, "nav-item"], [1, "fas", "fa-receipt"], ["routerLink", "/admin/users", 1, "nav-item"], [1, "fas", "fa-users"], [1, "divider"], ["routerLink", "/", 1, "nav-item"], [1, "fas", "fa-house"], [1, "admin-main"], [1, "page-header"], [1, "btn-add", 3, "click"], [1, "section-card"], ["size", "lg", "tip", "Loading categories...", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["size", "lg", "tip", "Loading categories..."], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "cat-name"], [1, "status-badge"], [1, "actions"], [1, "btn-edit", 3, "click"], [1, "fas", "fa-pen"], [1, "btn-delete", 3, "click"], [1, "fas", "fa-trash"], ["colspan", "4", 1, "empty"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "form-group"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"]], template: function ManageCategoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2);
        \u0275\u0275element(3, "i", 3);
        \u0275\u0275text(4, " Admin Panel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "nav", 4)(6, "a", 5);
        \u0275\u0275element(7, "i", 6);
        \u0275\u0275text(8, " Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275element(10, "i", 8);
        \u0275\u0275text(11, " Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 9);
        \u0275\u0275element(13, "i", 10);
        \u0275\u0275text(14, " Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 11);
        \u0275\u0275element(16, "i", 12);
        \u0275\u0275text(17, " Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "a", 13);
        \u0275\u0275element(19, "i", 14);
        \u0275\u0275text(20, " Users");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "div", 15);
        \u0275\u0275elementStart(22, "a", 16);
        \u0275\u0275element(23, "i", 17);
        \u0275\u0275text(24, " Back to Store");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "main", 18)(26, "div", 19)(27, "h1");
        \u0275\u0275text(28, "Manage Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 20);
        \u0275\u0275listener("click", function ManageCategoriesComponent_Template_button_click_29_listener() {
          return ctx.openModal();
        });
        \u0275\u0275text(30, "+ Add Category");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 21);
        \u0275\u0275template(32, ManageCategoriesComponent_app_spin_32_Template, 1, 0, "app-spin", 22)(33, ManageCategoriesComponent_table_33_Template, 14, 2, "table", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275template(34, ManageCategoriesComponent_div_34_Template, 21, 5, "div", 24);
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
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, RouterLinkActive, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, SpinComponent], styles: ["\n\n.admin-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.admin-sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  background: #0d0f1e;\n  color: white;\n  padding: 24px 0;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  border-right: 1px solid rgba(255, 255, 255, 0.07);\n  animation: _ngcontent-%COMP%_sidebarIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_sidebarIn {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  padding: 0 24px 24px;\n  font-size: 1.2rem;\n  font-weight: 700;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  margin-bottom: 16px;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 12px 24px;\n  color: #9ca3af;\n  text-decoration: none;\n  transition: all 0.22s;\n  font-weight: 500;\n  border-left: 3px solid transparent;\n}\n.nav-item[_ngcontent-%COMP%]:hover, \n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.1);\n  color: #a5b4fc;\n  border-left-color: #4f6ef7;\n  transform: translateX(3px);\n}\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 18px;\n  text-align: center;\n  margin-right: 4px;\n  font-size: 0.85rem;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 12px 0;\n}\n.admin-main[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 32px;\n  background: #0f1123;\n  overflow-x: hidden;\n  min-width: 0;\n  animation: _ngcontent-%COMP%_pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;\n}\n@keyframes _ngcontent-%COMP%_pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #e8eaf6;\n}\n.btn-add[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(79, 110, 247, 0.4);\n}\n.section-card[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  animation: _ngcontent-%COMP%_cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;\n}\n@keyframes _ngcontent-%COMP%_cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 12px 16px;\n  background: rgba(255, 255, 255, 0.03);\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  font-size: 0.9rem;\n  color: #c9cbdf;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.18s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n.cat-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #e8eaf6;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: #4ade80;\n}\n.status-badge.inactive[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.07);\n  color: #9ca3af;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-edit[_ngcontent-%COMP%], \n.btn-delete[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: all 0.2s;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.15);\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.3);\n  transform: scale(1.1);\n}\n.btn-delete[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.25);\n  transform: scale(1.1);\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9ca3af;\n  padding: 40px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_overlayIn 0.2s ease both;\n}\n@keyframes _ngcontent-%COMP%_overlayIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 460px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  animation: _ngcontent-%COMP%_modalIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    transform: scale(0.88) translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1) translateY(0);\n    opacity: 1;\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 24px 0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #e8eaf6;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n  color: #9ca3af;\n  transition: color 0.2s, transform 0.2s;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  color: #e8eaf6;\n  transform: rotate(90deg);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: #c9cbdf;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  font-size: 0.95rem;\n  outline: none;\n  box-sizing: border-box;\n  background: rgba(255, 255, 255, 0.05);\n  color: #e8eaf6;\n  transition: border-color 0.25s, box-shadow 0.25s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #4f6ef7;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.15);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 0 24px 24px;\n  justify-content: flex-end;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: transparent;\n  border: 2px solid rgba(255, 255, 255, 0.15);\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  color: #c9cbdf;\n  transition: all 0.2s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(79, 110, 247, 0.4);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 1024px) {\n  .admin-sidebar[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n  .admin-main[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n}\n@media (max-width: 768px) {\n  .admin-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .admin-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 58px;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: auto;\n    flex-direction: row;\n    padding: 0;\n    border-right: none;\n    border-top: 1px solid rgba(255, 255, 255, 0.07);\n    z-index: 200;\n  }\n  .sidebar-brand[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sidebar-nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    overflow-x: auto;\n    scrollbar-width: none;\n  }\n  .sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .nav-item[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-width: 54px;\n    padding: 6px 4px;\n    gap: 2px;\n    border-left: none;\n    border-top: 2px solid transparent;\n    border-radius: 0;\n    font-size: 0.6rem;\n    text-align: center;\n  }\n  .nav-item[_ngcontent-%COMP%]:hover, \n   .nav-item.active[_ngcontent-%COMP%] {\n    transform: none;\n    border-left-color: transparent;\n    border-top-color: #4f6ef7;\n  }\n  .nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    width: auto;\n    margin-right: 0;\n    display: block;\n  }\n  .admin-main[_ngcontent-%COMP%] {\n    padding: 18px 14px 76px;\n  }\n}\n@media (max-width: 480px) {\n  .admin-main[_ngcontent-%COMP%] {\n    padding: 14px 12px 76px;\n  }\n  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .section-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=manage-categories.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageCategoriesComponent, [{
    type: Component,
    args: [{ selector: "app-manage-categories", standalone: true, imports: [CommonModule, RouterModule, FormsModule, SpinComponent], template: `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="sidebar-brand"><i class="fas fa-gear"></i> Admin Panel</div>
        <nav class="sidebar-nav">
          <a routerLink="/admin" class="nav-item"><i class="fas fa-chart-bar"></i> Dashboard</a>
          <a routerLink="/admin/products" class="nav-item"><i class="fas fa-box"></i> Products</a>
          <a routerLink="/admin/categories" routerLinkActive="active" class="nav-item"><i class="fas fa-tag"></i> Categories</a>
          <a routerLink="/admin/orders" class="nav-item"><i class="fas fa-receipt"></i> Orders</a>
          <a routerLink="/admin/users" class="nav-item"><i class="fas fa-users"></i> Users</a>
          <div class="divider"></div>
          <a routerLink="/" class="nav-item"><i class="fas fa-house"></i> Back to Store</a>
        </nav>
      </aside>
      <main class="admin-main">
        <div class="page-header">
          <h1>Manage Categories</h1>
          <button class="btn-add" (click)="openModal()">+ Add Category</button>
        </div>

        <div class="section-card">
          <app-spin *ngIf="loading" size="lg" tip="Loading categories..."></app-spin>
          <table class="data-table" *ngIf="!loading">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let cat of categories">
                <td class="cat-name">{{ cat.name }}</td>
                <td>{{ cat.description || '\u2014' }}</td>
                <td>
                  <span class="status-badge" [class.active]="cat.isActive" [class.inactive]="!cat.isActive">
                    {{ cat.isActive ? 'Active' : 'Inactive' }}
                  </span>
                </td>
                <td class="actions">
                  <button class="btn-edit" (click)="editCategory(cat)"><i class="fas fa-pen"></i></button>
                  <button class="btn-delete" (click)="deleteCategory(cat._id)"><i class="fas fa-trash"></i></button>
                </td>
              </tr>
              <tr *ngIf="categories.length === 0">
                <td colspan="4" class="empty">No categories yet</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Modal -->
        <div class="modal-overlay" *ngIf="showModal" (click)="closeModal()">
          <div class="modal" (click)="$event.stopPropagation()">
            <div class="modal-header">
              <h2>{{ editing ? 'Edit Category' : 'Add Category' }}</h2>
              <button class="modal-close" (click)="closeModal()">\u2715</button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>Name *</label>
                <input type="text" [(ngModel)]="formData.name" class="form-control" />
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea [(ngModel)]="formData.description" class="form-control" rows="3"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn-cancel" (click)="closeModal()">Cancel</button>
              <button class="btn-save" (click)="save()" [disabled]="saving">
                {{ saving ? 'Saving...' : 'Save' }}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  `, styles: ["/* angular:styles/component:scss;1c993666ca1a9aa23876cbc253d359f698c315fc1e0a7e1e4a5fece9736bafab;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/features/admin/manage-categories/manage-categories.component.ts */\n.admin-layout {\n  display: flex;\n  min-height: 100vh;\n}\n.admin-sidebar {\n  width: 240px;\n  background: #0d0f1e;\n  color: white;\n  padding: 24px 0;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  border-right: 1px solid rgba(255, 255, 255, 0.07);\n  animation: sidebarIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes sidebarIn {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.sidebar-brand {\n  padding: 0 24px 24px;\n  font-size: 1.2rem;\n  font-weight: 700;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  margin-bottom: 16px;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n}\n.nav-item {\n  display: block;\n  padding: 12px 24px;\n  color: #9ca3af;\n  text-decoration: none;\n  transition: all 0.22s;\n  font-weight: 500;\n  border-left: 3px solid transparent;\n}\n.nav-item:hover,\n.nav-item.active {\n  background: rgba(79, 110, 247, 0.1);\n  color: #a5b4fc;\n  border-left-color: #4f6ef7;\n  transform: translateX(3px);\n}\n.nav-item i {\n  width: 18px;\n  text-align: center;\n  margin-right: 4px;\n  font-size: 0.85rem;\n}\n.divider {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 12px 0;\n}\n.admin-main {\n  flex: 1;\n  padding: 32px;\n  background: #0f1123;\n  overflow-x: hidden;\n  min-width: 0;\n  animation: pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;\n}\n@keyframes pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #e8eaf6;\n}\n.btn-add {\n  padding: 10px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.btn-add:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(79, 110, 247, 0.4);\n}\n.section-card {\n  background: #1e2235;\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  animation: cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;\n}\n@keyframes cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  text-align: left;\n  padding: 12px 16px;\n  background: rgba(255, 255, 255, 0.03);\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n}\n.data-table td {\n  padding: 14px 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  font-size: 0.9rem;\n  color: #c9cbdf;\n}\n.data-table tbody tr {\n  transition: background 0.18s;\n}\n.data-table tbody tr:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n.cat-name {\n  font-weight: 600;\n  color: #e8eaf6;\n}\n.status-badge {\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.status-badge.active {\n  background: rgba(34, 197, 94, 0.15);\n  color: #4ade80;\n}\n.status-badge.inactive {\n  background: rgba(255, 255, 255, 0.07);\n  color: #9ca3af;\n}\n.actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-edit,\n.btn-delete {\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: all 0.2s;\n}\n.btn-edit {\n  background: rgba(79, 110, 247, 0.15);\n}\n.btn-edit:hover {\n  background: rgba(79, 110, 247, 0.3);\n  transform: scale(1.1);\n}\n.btn-delete {\n  background: rgba(239, 68, 68, 0.1);\n}\n.btn-delete:hover {\n  background: rgba(239, 68, 68, 0.25);\n  transform: scale(1.1);\n}\n.empty {\n  text-align: center;\n  color: #9ca3af;\n  padding: 40px;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: overlayIn 0.2s ease both;\n}\n@keyframes overlayIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal {\n  background: #1e2235;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 460px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  animation: modalIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n@keyframes modalIn {\n  from {\n    transform: scale(0.88) translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1) translateY(0);\n    opacity: 1;\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 24px 0;\n}\n.modal-header h2 {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #e8eaf6;\n}\n.modal-close {\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n  color: #9ca3af;\n  transition: color 0.2s, transform 0.2s;\n}\n.modal-close:hover {\n  color: #e8eaf6;\n  transform: rotate(90deg);\n}\n.modal-body {\n  padding: 20px 24px;\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: #c9cbdf;\n}\n.form-control {\n  width: 100%;\n  padding: 10px 14px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  font-size: 0.95rem;\n  outline: none;\n  box-sizing: border-box;\n  background: rgba(255, 255, 255, 0.05);\n  color: #e8eaf6;\n  transition: border-color 0.25s, box-shadow 0.25s;\n}\n.form-control:focus {\n  border-color: #4f6ef7;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.15);\n}\n.modal-footer {\n  display: flex;\n  gap: 12px;\n  padding: 0 24px 24px;\n  justify-content: flex-end;\n}\n.btn-cancel {\n  padding: 10px 20px;\n  background: transparent;\n  border: 2px solid rgba(255, 255, 255, 0.15);\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  color: #c9cbdf;\n  transition: all 0.2s;\n}\n.btn-cancel:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.btn-save {\n  padding: 10px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.btn-save:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(79, 110, 247, 0.4);\n}\n.btn-save:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 1024px) {\n  .admin-sidebar {\n    width: 200px;\n  }\n  .admin-main {\n    padding: 24px 20px;\n  }\n}\n@media (max-width: 768px) {\n  .admin-layout {\n    flex-direction: column;\n  }\n  .admin-sidebar {\n    width: 100%;\n    height: 58px;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: auto;\n    flex-direction: row;\n    padding: 0;\n    border-right: none;\n    border-top: 1px solid rgba(255, 255, 255, 0.07);\n    z-index: 200;\n  }\n  .sidebar-brand {\n    display: none;\n  }\n  .divider {\n    display: none;\n  }\n  .sidebar-nav {\n    flex-direction: row;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    overflow-x: auto;\n    scrollbar-width: none;\n  }\n  .sidebar-nav::-webkit-scrollbar {\n    display: none;\n  }\n  .nav-item {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-width: 54px;\n    padding: 6px 4px;\n    gap: 2px;\n    border-left: none;\n    border-top: 2px solid transparent;\n    border-radius: 0;\n    font-size: 0.6rem;\n    text-align: center;\n  }\n  .nav-item:hover,\n  .nav-item.active {\n    transform: none;\n    border-left-color: transparent;\n    border-top-color: #4f6ef7;\n  }\n  .nav-item i {\n    font-size: 1.1rem;\n    width: auto;\n    margin-right: 0;\n    display: block;\n  }\n  .admin-main {\n    padding: 18px 14px 76px;\n  }\n}\n@media (max-width: 480px) {\n  .admin-main {\n    padding: 14px 12px 76px;\n  }\n  .page-header h1 {\n    font-size: 1.4rem;\n  }\n  .section-card {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=manage-categories.component.css.map */\n"] }]
  }], () => [{ type: CategoryService }, { type: ConfirmService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageCategoriesComponent, { className: "ManageCategoriesComponent", filePath: "src/app/features/admin/manage-categories/manage-categories.component.ts", lineNumber: 183 });
})();
export {
  ManageCategoriesComponent
};
//# sourceMappingURL=chunk-NGL62S2W.js.map
