import {
  AdminService
} from "./chunk-3FGMB364.js";
import {
  ConfirmService
} from "./chunk-YC4BKLUZ.js";
import {
  SelectComponent
} from "./chunk-7LUADATD.js";
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
  DatePipe,
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

// src/app/features/admin/manage-users/manage-users.component.ts
function ManageUsersComponent_app_spin_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spin", 36);
  }
}
function ManageUsersComponent_ng_container_68_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function ManageUsersComponent_ng_container_68_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.searchQuery = "");
    });
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275elementEnd();
  }
}
function ManageUsersComponent_ng_container_68_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 56)(1, "td", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 58)(4, "div", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 60)(7, "span", 61);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 62);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td", 63);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 64)(14, "app-select", 65);
    \u0275\u0275listener("selectionChange", function ManageUsersComponent_ng_container_68_tr_32_Template_app_select_selectionChange_14_listener($event) {
      const user_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateRole(user_r5, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 66)(16, "span", 67);
    \u0275\u0275element(17, "span", 68);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 69);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 70)(23, "button", 71);
    \u0275\u0275listener("click", function ManageUsersComponent_ng_container_68_tr_32_Template_button_click_23_listener() {
      const user_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(user_r5));
    });
    \u0275\u0275element(24, "i");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 72);
    \u0275\u0275listener("click", function ManageUsersComponent_ng_container_68_tr_32_Template_button_click_26_listener() {
      const user_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteUser(user_r5._id));
    });
    \u0275\u0275element(27, "i", 73);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r5.name.charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", user_r5._id == null ? null : user_r5._id.slice(-6), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", user_r5.role)("options", ctx_r1.roleOptions)("clearable", false);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-on", user_r5.isActive)("badge-off", !user_r5.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", user_r5.isActive ? "Active" : "Disabled", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 19, user_r5.createdAt, "MMM d, yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("btn-enable", !user_r5.isActive);
    \u0275\u0275advance();
    \u0275\u0275classMap(user_r5.isActive ? "fas fa-lock" : "fas fa-lock-open");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r5.isActive ? "Disable" : "Enable", " ");
  }
}
function ManageUsersComponent_ng_container_68_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 74)(2, "div", 75);
    \u0275\u0275element(3, "i", 76);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No users found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "Try adjusting your search or filter");
    \u0275\u0275elementEnd()()()();
  }
}
function ManageUsersComponent_ng_container_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 37)(2, "div", 38);
    \u0275\u0275element(3, "i", 39);
    \u0275\u0275elementStart(4, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ManageUsersComponent_ng_container_68_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ManageUsersComponent_ng_container_68_button_5_Template, 2, 0, "button", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 42)(7, "button", 43);
    \u0275\u0275listener("click", function ManageUsersComponent_ng_container_68_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.roleFilter = "all");
    });
    \u0275\u0275text(8, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 43);
    \u0275\u0275listener("click", function ManageUsersComponent_ng_container_68_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.roleFilter = "customer");
    });
    \u0275\u0275text(10, "Customers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 43);
    \u0275\u0275listener("click", function ManageUsersComponent_ng_container_68_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.roleFilter = "admin");
    });
    \u0275\u0275text(12, "Admins");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 44)(14, "table", 45)(15, "thead")(16, "tr")(17, "th", 46);
    \u0275\u0275text(18, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 47);
    \u0275\u0275text(20, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 48);
    \u0275\u0275text(22, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 49);
    \u0275\u0275text(24, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 50);
    \u0275\u0275text(26, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 51);
    \u0275\u0275text(28, "Joined");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 52);
    \u0275\u0275text(30, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "tbody");
    \u0275\u0275template(32, ManageUsersComponent_ng_container_68_tr_32_Template, 28, 22, "tr", 53)(33, ManageUsersComponent_ng_container_68_tr_33_Template, 8, 0, "tr", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchQuery);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.roleFilter === "all");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.roleFilter === "customer");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.roleFilter === "admin");
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.filteredUsers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredUsers.length === 0);
  }
}
function ManageUsersComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275text(1, " Showing ");
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " of ");
    \u0275\u0275elementStart(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " users ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.filteredUsers.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.users.length);
  }
}
var ManageUsersComponent = class _ManageUsersComponent {
  constructor(adminService, confirmService) {
    this.adminService = adminService;
    this.confirmService = confirmService;
    this.users = [];
    this.loading = true;
    this.searchQuery = "";
    this.roleFilter = "all";
    this.roleOptions = [
      { value: "customer", label: "Customer" },
      { value: "admin", label: "Admin" }
    ];
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.adminService.getUsers().subscribe({
      next: (res) => {
        this.users = res.users || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  get activeCount() {
    return this.users.filter((u) => u.isActive).length;
  }
  get inactiveCount() {
    return this.users.filter((u) => !u.isActive).length;
  }
  get adminCount() {
    return this.users.filter((u) => u.role === "admin").length;
  }
  get filteredUsers() {
    let list = this.users;
    if (this.roleFilter !== "all")
      list = list.filter((u) => u.role === this.roleFilter);
    if (!this.searchQuery)
      return list;
    const q = this.searchQuery.toLowerCase();
    return list.filter((u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
  }
  updateRole(user, role) {
    this.adminService.updateUser(user._id, { role }).subscribe({ next: () => this.loadUsers() });
  }
  toggleStatus(user) {
    this.adminService.updateUser(user._id, { isActive: !user.isActive }).subscribe({ next: () => this.loadUsers() });
  }
  deleteUser(id) {
    return __async(this, null, function* () {
      const ok = yield this.confirmService.confirm({ title: "Delete User", description: "Are you sure you want to delete this user? This action cannot be undone.", type: "danger", okText: "Delete" });
      if (!ok)
        return;
      this.adminService.deleteUser(id).subscribe({ next: () => this.loadUsers() });
    });
  }
  static {
    this.\u0275fac = function ManageUsersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageUsersComponent)(\u0275\u0275directiveInject(AdminService), \u0275\u0275directiveInject(ConfirmService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageUsersComponent, selectors: [["app-manage-users"]], decls: 70, vars: 7, consts: [[1, "admin-layout"], [1, "admin-sidebar"], [1, "sidebar-brand"], [1, "fas", "fa-gear"], [1, "sidebar-nav"], ["routerLink", "/admin", 1, "nav-item"], [1, "fas", "fa-chart-bar"], ["routerLink", "/admin/products", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-box"], ["routerLink", "/admin/categories", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-tag"], ["routerLink", "/admin/orders", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-receipt"], ["routerLink", "/admin/users", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-users"], [1, "divider"], ["routerLink", "/", 1, "nav-item"], [1, "fas", "fa-house"], [1, "admin-main"], [1, "page-header"], [1, "subtitle"], [1, "stats-row"], [1, "stat-card"], [1, "stat-icon", "blue"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon", "green"], [1, "fas", "fa-circle-check"], [1, "stat-icon", "red"], [1, "fas", "fa-ban"], [1, "stat-icon", "yellow"], [1, "fas", "fa-shield-halved"], [1, "section-card"], ["size", "lg", "tip", "Loading users...", 4, "ngIf"], [4, "ngIf"], ["class", "card-footer", 4, "ngIf"], ["size", "lg", "tip", "Loading users..."], [1, "table-toolbar"], [1, "search-wrapper"], [1, "fas", "fa-search", "search-icon"], ["type", "text", "placeholder", "Search by name or email...", 1, "search-input", 3, "ngModelChange", "ngModel"], ["class", "clear-btn", 3, "click", 4, "ngIf"], [1, "filter-group"], [1, "filter-btn", 3, "click"], [1, "table-scroll"], [1, "data-table"], [1, "th-num"], [1, "th-user"], [1, "th-email"], [1, "th-role"], [1, "th-status"], [1, "th-date"], [1, "th-actions"], ["class", "tr-row", 4, "ngFor", "ngForOf"], [1, "clear-btn", 3, "click"], [1, "fas", "fa-times"], [1, "tr-row"], [1, "td-num"], [1, "td-user"], [1, "av"], [1, "uinfo"], [1, "uname"], [1, "uid"], [1, "td-email"], [1, "td-role"], [3, "selectionChange", "ngModel", "options", "clearable"], [1, "td-status"], [1, "badge"], [1, "dot"], [1, "td-date"], [1, "td-actions"], [1, "btn-toggle", 3, "click"], ["title", "Delete", 1, "btn-del", 3, "click"], [1, "fas", "fa-trash-alt"], ["colspan", "7", 1, "empty-cell"], [1, "empty-wrap"], [1, "fas", "fa-users-slash"], [1, "card-footer"]], template: function ManageUsersComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(25, "main", 18)(26, "div", 19)(27, "div")(28, "h1");
        \u0275\u0275element(29, "i", 14);
        \u0275\u0275text(30, " Manage Users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p", 20);
        \u0275\u0275text(32, "View, manage roles and control user access");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 21)(34, "div", 22)(35, "div", 23);
        \u0275\u0275element(36, "i", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div")(38, "div", 24);
        \u0275\u0275text(39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 25);
        \u0275\u0275text(41, "Total Users");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 22)(43, "div", 26);
        \u0275\u0275element(44, "i", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div")(46, "div", 24);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 25);
        \u0275\u0275text(49, "Active");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "div", 22)(51, "div", 28);
        \u0275\u0275element(52, "i", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div")(54, "div", 24);
        \u0275\u0275text(55);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 25);
        \u0275\u0275text(57, "Disabled");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "div", 22)(59, "div", 30);
        \u0275\u0275element(60, "i", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div")(62, "div", 24);
        \u0275\u0275text(63);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div", 25);
        \u0275\u0275text(65, "Admins");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(66, "div", 32);
        \u0275\u0275template(67, ManageUsersComponent_app_spin_67_Template, 1, 0, "app-spin", 33)(68, ManageUsersComponent_ng_container_68_Template, 34, 10, "ng-container", 34)(69, ManageUsersComponent_div_69_Template, 8, 2, "div", 35);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(39);
        \u0275\u0275textInterpolate(ctx.users.length);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.activeCount);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.inactiveCount);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.adminCount);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredUsers.length > 0 && !ctx.loading);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule, RouterLink, RouterLinkActive, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, SelectComponent, SpinComponent], styles: [`@charset "UTF-8";



*[_ngcontent-%COMP%] {
  box-sizing: border-box;
}
.admin-layout[_ngcontent-%COMP%] {
  display: flex;
  min-height: 100vh;
  background: #0c0e1f;
}
.admin-sidebar[_ngcontent-%COMP%] {
  width: 240px;
  background: #0d0f1e;
  color: white;
  padding: 24px 0;
  position: sticky;
  top: 0;
  height: 100vh;
  border-right: 1px solid rgba(255, 255, 255, 0.07);
  animation: _ngcontent-%COMP%_sidebarIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes _ngcontent-%COMP%_sidebarIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.sidebar-brand[_ngcontent-%COMP%] {
  padding: 0 24px 24px;
  font-size: 1.2rem;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 16px;
}
.sidebar-nav[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.nav-item[_ngcontent-%COMP%] {
  display: block;
  padding: 12px 24px;
  color: #9ca3af;
  text-decoration: none;
  transition: all 0.22s;
  font-weight: 500;
  border-left: 3px solid transparent;
}
.nav-item[_ngcontent-%COMP%]:hover, 
.nav-item.active[_ngcontent-%COMP%] {
  background: rgba(79, 110, 247, 0.1);
  color: #a5b4fc;
  border-left-color: #4f6ef7;
  transform: translateX(3px);
}
.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  width: 18px;
  text-align: center;
  margin-right: 4px;
  font-size: 0.85rem;
}
.divider[_ngcontent-%COMP%] {
  height: 1px;
  background: rgba(255, 255, 255, 0.07);
  margin: 12px 0;
}
.admin-main[_ngcontent-%COMP%] {
  flex: 1;
  padding: 32px;
  background: #0f1123;
  overflow-x: hidden;
  min-width: 0;
  animation: _ngcontent-%COMP%_pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
}
@keyframes _ngcontent-%COMP%_pageIn {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.page-header[_ngcontent-%COMP%] {
  margin-bottom: 26px;
}
.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  margin: 0 0 4px;
  font-size: 1.65rem;
  font-weight: 800;
  color: #f1f5f9;
  display: flex;
  align-items: center;
  gap: 10px;
}
.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #6366f1;
  font-size: 1.4rem;
}
.subtitle[_ngcontent-%COMP%] {
  margin: 0;
  color: #64748b;
  font-size: 0.875rem;
}
.stats-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-bottom: 24px;
}
.stat-card[_ngcontent-%COMP%] {
  background: #111827;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.stat-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}
.stat-icon[_ngcontent-%COMP%] {
  width: 44px;
  height: 44px;
  border-radius: 11px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}
.stat-icon.blue[_ngcontent-%COMP%] {
  background: rgba(99, 102, 241, 0.15);
  color: #818cf8;
}
.stat-icon.green[_ngcontent-%COMP%] {
  background: rgba(34, 197, 94, 0.12);
  color: #4ade80;
}
.stat-icon.red[_ngcontent-%COMP%] {
  background: rgba(239, 68, 68, 0.12);
  color: #f87171;
}
.stat-icon.yellow[_ngcontent-%COMP%] {
  background: rgba(234, 179, 8, 0.12);
  color: #facc15;
}
.stat-value[_ngcontent-%COMP%] {
  font-size: 1.7rem;
  font-weight: 800;
  color: #f1f5f9;
  line-height: 1;
}
.stat-label[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 3px;
  font-weight: 500;
}
.section-card[_ngcontent-%COMP%] {
  background: #111827;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  overflow: hidden;
}
.table-toolbar[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 18px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.search-wrapper[_ngcontent-%COMP%] {
  position: relative;
  flex: 1;
  min-width: 220px;
}
.search-icon[_ngcontent-%COMP%] {
  position: absolute;
  left: 13px;
  top: 50%;
  transform: translateY(-50%);
  color: #4b5563;
  font-size: 0.8rem;
  pointer-events: none;
}
.search-input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 9px 36px 9px 36px;
  background: rgba(255, 255, 255, 0.04);
  border: 1.5px solid rgba(255, 255, 255, 0.08);
  border-radius: 9px;
  color: #e2e8f0;
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.search-input[_ngcontent-%COMP%]::placeholder {
  color: #374151;
}
.search-input[_ngcontent-%COMP%]:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
}
.clear-btn[_ngcontent-%COMP%] {
  position: absolute;
  right: 11px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #4b5563;
  font-size: 0.78rem;
  line-height: 1;
  padding: 3px;
  transition: color 0.18s;
}
.clear-btn[_ngcontent-%COMP%]:hover {
  color: #e2e8f0;
}
.filter-group[_ngcontent-%COMP%] {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}
.filter-btn[_ngcontent-%COMP%] {
  padding: 7px 15px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.04);
  border: 1.5px solid rgba(255, 255, 255, 0.07);
  color: #6b7280;
  transition: all 0.18s;
}
.filter-btn[_ngcontent-%COMP%]:hover {
  color: #c7d2fe;
  border-color: rgba(99, 102, 241, 0.35);
}
.filter-btn.active[_ngcontent-%COMP%] {
  background: rgba(99, 102, 241, 0.15);
  color: #a5b4fc;
  border-color: rgba(99, 102, 241, 0.45);
}
.table-scroll[_ngcontent-%COMP%] {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.data-table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
  min-width: 720px;
  font-size: 0.875rem;
}
.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.02);
}
.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  padding: 11px 16px;
  text-align: left;
  font-size: 0.7rem;
  font-weight: 700;
  color: #4b5563;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  white-space: nowrap;
}
.th-num[_ngcontent-%COMP%] {
  width: 40px;
  padding-left: 20px;
}
.th-user[_ngcontent-%COMP%] {
  min-width: 170px;
}
.th-email[_ngcontent-%COMP%] {
  min-width: 180px;
}
.th-role[_ngcontent-%COMP%] {
  width: 120px;
}
.th-status[_ngcontent-%COMP%] {
  width: 100px;
}
.th-date[_ngcontent-%COMP%] {
  width: 120px;
}
.th-actions[_ngcontent-%COMP%] {
  width: 140px;
}
.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 13px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  color: #cbd5e1;
  vertical-align: middle;
}
.td-num[_ngcontent-%COMP%] {
  padding-left: 20px;
  color: #374151;
  font-size: 0.78rem;
  font-weight: 600;
}
.tr-row[_ngcontent-%COMP%] {
  transition: background 0.14s;
}
.tr-row[_ngcontent-%COMP%]:hover {
  background: rgba(99, 102, 241, 0.05);
}
.td-user[_ngcontent-%COMP%] {
  white-space: nowrap;
}
.td-user[_ngcontent-%COMP%]   .av[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #9333ea);
  color: #fff;
  font-weight: 800;
  font-size: 0.85rem;
  vertical-align: middle;
  transition: transform 0.2s, box-shadow 0.2s;
}
.tr-row[_ngcontent-%COMP%]:hover   .av[_ngcontent-%COMP%] {
  transform: scale(1.1);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
}
.td-user[_ngcontent-%COMP%]   .uinfo[_ngcontent-%COMP%] {
  display: inline-flex;
  flex-direction: column;
  vertical-align: middle;
  margin-left: 10px;
}
.uname[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #f1f5f9;
  font-size: 0.875rem;
  line-height: 1.3;
}
.uid[_ngcontent-%COMP%] {
  font-size: 0.7rem;
  color: #374151;
}
.td-email[_ngcontent-%COMP%] {
  color: #94a3b8;
  font-size: 0.85rem;
}
.role-select[_ngcontent-%COMP%] {
  padding: 5px 28px 5px 9px;
  border-radius: 7px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1.5px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
  color: #a5b4fc;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%236b7280'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  transition: border-color 0.18s;
}
.role-select[_ngcontent-%COMP%]:focus {
  border-color: #6366f1;
}
.role-select.is-admin[_ngcontent-%COMP%] {
  color: #facc15;
  border-color: rgba(234, 179, 8, 0.35);
}
.role-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  background: #1e293b;
  color: #e2e8f0;
}
.badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 700;
  white-space: nowrap;
}
.badge-on[_ngcontent-%COMP%] {
  background: rgba(34, 197, 94, 0.1);
  color: #4ade80;
}
.badge-off[_ngcontent-%COMP%] {
  background: rgba(239, 68, 68, 0.1);
  color: #f87171;
}
.dot[_ngcontent-%COMP%] {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
}
.badge-on[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {
  background: #4ade80;
  animation: _ngcontent-%COMP%_blink 2s infinite;
}
.badge-off[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {
  background: #f87171;
}
@keyframes _ngcontent-%COMP%_blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
}
.td-date[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 0.83rem;
  white-space: nowrap;
}
.td-actions[_ngcontent-%COMP%] {
  white-space: nowrap;
}
.btn-toggle[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  margin-right: 6px;
  border-radius: 7px;
  cursor: pointer;
  font-size: 0.78rem;
  font-weight: 600;
  border: 1.5px solid rgba(99, 102, 241, 0.25);
  background: rgba(99, 102, 241, 0.1);
  color: #a5b4fc;
  transition: all 0.18s;
}
.btn-toggle[_ngcontent-%COMP%]:hover {
  background: rgba(99, 102, 241, 0.22);
  transform: translateY(-1px);
}
.btn-toggle.btn-enable[_ngcontent-%COMP%] {
  background: rgba(34, 197, 94, 0.08);
  border-color: rgba(34, 197, 94, 0.25);
  color: #4ade80;
}
.btn-toggle.btn-enable[_ngcontent-%COMP%]:hover {
  background: rgba(34, 197, 94, 0.18);
}
.btn-del[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 7px;
  cursor: pointer;
  font-size: 0.82rem;
  background: rgba(239, 68, 68, 0.08);
  border: 1.5px solid rgba(239, 68, 68, 0.18);
  color: #f87171;
  transition: all 0.18s;
}
.btn-del[_ngcontent-%COMP%]:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(239, 68, 68, 0.4);
  transform: translateY(-1px);
}
.empty-cell[_ngcontent-%COMP%] {
  padding: 0 !important;
  border: none !important;
}
.empty-wrap[_ngcontent-%COMP%] {
  text-align: center;
  padding: 56px 24px;
}
.empty-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 2.8rem;
  color: #1e293b;
  display: block;
  margin-bottom: 14px;
}
.empty-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #4b5563;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 4px;
}
.empty-wrap[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  color: #374151;
  font-size: 0.82rem;
}
.card-footer[_ngcontent-%COMP%] {
  padding: 12px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.8rem;
  color: #4b5563;
}
.card-footer[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {
  color: #818cf8;
}
@media (max-width: 1024px) {
  .admin-sidebar[_ngcontent-%COMP%] {
    width: 200px;
  }
  .admin-main[_ngcontent-%COMP%] {
    padding: 24px 20px;
  }
  .stats-row[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}
@media (max-width: 768px) {
  .admin-layout[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .admin-sidebar[_ngcontent-%COMP%] {
    width: 100%;
    height: 58px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    flex-direction: row;
    padding: 0;
    overflow: visible;
    border-right: none;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    z-index: 100;
  }
  .sidebar-brand[_ngcontent-%COMP%] {
    display: none;
  }
  .divider[_ngcontent-%COMP%] {
    display: none;
  }
  .sidebar-nav[_ngcontent-%COMP%] {
    flex-direction: row;
    width: 100%;
    padding: 0;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {
    display: none;
  }
  .nav-item[_ngcontent-%COMP%] {
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6px 8px;
    gap: 3px;
    min-width: 52px;
    border-left: none;
    border-top: 2px solid transparent;
    border-radius: 0;
  }
  .nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
    font-size: 1rem;
    width: auto;
  }
  .nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
    font-size: 0.55rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-weight: 700;
    color: inherit;
  }
  .nav-item.active[_ngcontent-%COMP%] {
    border-top-color: #6366f1;
  }
  .admin-main[_ngcontent-%COMP%] {
    padding: 18px 14px 76px;
  }
  .stats-row[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 18px;
  }
  .stat-card[_ngcontent-%COMP%] {
    padding: 14px 15px;
    gap: 12px;
  }
  .stat-icon[_ngcontent-%COMP%] {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  .stat-value[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    font-size: 1.3rem;
  }
  .table-toolbar[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: stretch;
    padding: 14px 16px;
    gap: 10px;
  }
  .search-wrapper[_ngcontent-%COMP%] {
    min-width: unset;
  }
  .filter-group[_ngcontent-%COMP%] {
    flex-wrap: wrap;
  }
}
@media (max-width: 480px) {
  .stats-row[_ngcontent-%COMP%] {
    gap: 8px;
  }
  .stat-card[_ngcontent-%COMP%] {
    padding: 12px 13px;
    gap: 10px;
    border-radius: 12px;
  }
  .stat-icon[_ngcontent-%COMP%] {
    width: 36px;
    height: 36px;
    border-radius: 9px;
    font-size: 0.9rem;
  }
  .stat-value[_ngcontent-%COMP%] {
    font-size: 1.35rem;
  }
  .stat-label[_ngcontent-%COMP%] {
    font-size: 0.7rem;
  }
  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    font-size: 1.15rem;
  }
}
/*# sourceMappingURL=manage-users.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageUsersComponent, [{
    type: Component,
    args: [{ selector: "app-manage-users", standalone: true, imports: [CommonModule, RouterModule, FormsModule, SelectComponent, SpinComponent], template: `
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
          <div>
            <h1><i class="fas fa-users"></i> Manage Users</h1>
            <p class="subtitle">View, manage roles and control user access</p>
          </div>
        </div>

        <div class="stats-row">
          <div class="stat-card">
            <div class="stat-icon blue"><i class="fas fa-users"></i></div>
            <div><div class="stat-value">{{ users.length }}</div><div class="stat-label">Total Users</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon green"><i class="fas fa-circle-check"></i></div>
            <div><div class="stat-value">{{ activeCount }}</div><div class="stat-label">Active</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon red"><i class="fas fa-ban"></i></div>
            <div><div class="stat-value">{{ inactiveCount }}</div><div class="stat-label">Disabled</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon yellow"><i class="fas fa-shield-halved"></i></div>
            <div><div class="stat-value">{{ adminCount }}</div><div class="stat-label">Admins</div></div>
          </div>
        </div>

        <div class="section-card">
          <app-spin *ngIf="loading" size="lg" tip="Loading users..."></app-spin>
          <ng-container *ngIf="!loading">
          <div class="table-toolbar">
            <div class="search-wrapper">
              <i class="fas fa-search search-icon"></i>
              <input type="text" [(ngModel)]="searchQuery" placeholder="Search by name or email..." class="search-input" />
              <button *ngIf="searchQuery" class="clear-btn" (click)="searchQuery=''"><i class="fas fa-times"></i></button>
            </div>
            <div class="filter-group">
              <button class="filter-btn" [class.active]="roleFilter==='all'"      (click)="roleFilter='all'">All</button>
              <button class="filter-btn" [class.active]="roleFilter==='customer'" (click)="roleFilter='customer'">Customers</button>
              <button class="filter-btn" [class.active]="roleFilter==='admin'"    (click)="roleFilter='admin'">Admins</button>
            </div>
          </div>

          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th class="th-num">#</th>
                  <th class="th-user">User</th>
                  <th class="th-email">Email</th>
                  <th class="th-role">Role</th>
                  <th class="th-status">Status</th>
                  <th class="th-date">Joined</th>
                  <th class="th-actions">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let user of filteredUsers; let i = index" class="tr-row">
                  <td class="td-num">{{ i + 1 }}</td>
                  <td class="td-user">
                    <div class="av">{{ user.name.charAt(0).toUpperCase() }}</div>
                    <div class="uinfo">
                      <span class="uname">{{ user.name }}</span>
                      <span class="uid">#{{ user._id?.slice(-6) }}</span>
                    </div>
                  </td>
                  <td class="td-email">{{ user.email }}</td>
                  <td class="td-role">
                    <app-select [ngModel]="user.role" [options]="roleOptions" [clearable]="false" (selectionChange)="updateRole(user, $event)"></app-select>
                  </td>
                  <td class="td-status">
                    <span class="badge" [class.badge-on]="user.isActive" [class.badge-off]="!user.isActive">
                      <span class="dot"></span>{{ user.isActive ? 'Active' : 'Disabled' }}
                    </span>
                  </td>
                  <td class="td-date">{{ user.createdAt | date:'MMM d, yyyy' }}</td>
                  <td class="td-actions">
                    <button class="btn-toggle" [class.btn-enable]="!user.isActive" (click)="toggleStatus(user)">
                      <i [class]="user.isActive ? 'fas fa-lock' : 'fas fa-lock-open'"></i>
                      {{ user.isActive ? 'Disable' : 'Enable' }}
                    </button>
                    <button class="btn-del" (click)="deleteUser(user._id)" title="Delete">
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
                <tr *ngIf="filteredUsers.length === 0">
                  <td colspan="7" class="empty-cell">
                    <div class="empty-wrap">
                      <i class="fas fa-users-slash"></i>
                      <p>No users found</p>
                      <small>Try adjusting your search or filter</small>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </ng-container>

          <div class="card-footer" *ngIf="filteredUsers.length > 0 && !loading">
            Showing <b>{{ filteredUsers.length }}</b> of <b>{{ users.length }}</b> users
          </div>
        </div>

      </main>
    </div>
  `, styles: [`@charset "UTF-8";

/* angular:styles/component:scss;870f91adeaa17f593ed845331546e2806fc4283c0968d3e107e0b2542cc713ae;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/features/admin/manage-users/manage-users.component.ts */
* {
  box-sizing: border-box;
}
.admin-layout {
  display: flex;
  min-height: 100vh;
  background: #0c0e1f;
}
.admin-sidebar {
  width: 240px;
  background: #0d0f1e;
  color: white;
  padding: 24px 0;
  position: sticky;
  top: 0;
  height: 100vh;
  border-right: 1px solid rgba(255, 255, 255, 0.07);
  animation: sidebarIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes sidebarIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.sidebar-brand {
  padding: 0 24px 24px;
  font-size: 1.2rem;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 16px;
}
.sidebar-nav {
  display: flex;
  flex-direction: column;
}
.nav-item {
  display: block;
  padding: 12px 24px;
  color: #9ca3af;
  text-decoration: none;
  transition: all 0.22s;
  font-weight: 500;
  border-left: 3px solid transparent;
}
.nav-item:hover,
.nav-item.active {
  background: rgba(79, 110, 247, 0.1);
  color: #a5b4fc;
  border-left-color: #4f6ef7;
  transform: translateX(3px);
}
.nav-item i {
  width: 18px;
  text-align: center;
  margin-right: 4px;
  font-size: 0.85rem;
}
.divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.07);
  margin: 12px 0;
}
.admin-main {
  flex: 1;
  padding: 32px;
  background: #0f1123;
  overflow-x: hidden;
  min-width: 0;
  animation: pageIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
}
@keyframes pageIn {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.page-header {
  margin-bottom: 26px;
}
.page-header h1 {
  margin: 0 0 4px;
  font-size: 1.65rem;
  font-weight: 800;
  color: #f1f5f9;
  display: flex;
  align-items: center;
  gap: 10px;
}
.page-header h1 i {
  color: #6366f1;
  font-size: 1.4rem;
}
.subtitle {
  margin: 0;
  color: #64748b;
  font-size: 0.875rem;
}
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-bottom: 24px;
}
.stat-card {
  background: #111827;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}
.stat-icon {
  width: 44px;
  height: 44px;
  border-radius: 11px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}
.stat-icon.blue {
  background: rgba(99, 102, 241, 0.15);
  color: #818cf8;
}
.stat-icon.green {
  background: rgba(34, 197, 94, 0.12);
  color: #4ade80;
}
.stat-icon.red {
  background: rgba(239, 68, 68, 0.12);
  color: #f87171;
}
.stat-icon.yellow {
  background: rgba(234, 179, 8, 0.12);
  color: #facc15;
}
.stat-value {
  font-size: 1.7rem;
  font-weight: 800;
  color: #f1f5f9;
  line-height: 1;
}
.stat-label {
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 3px;
  font-weight: 500;
}
.section-card {
  background: #111827;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  overflow: hidden;
}
.table-toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 18px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.search-wrapper {
  position: relative;
  flex: 1;
  min-width: 220px;
}
.search-icon {
  position: absolute;
  left: 13px;
  top: 50%;
  transform: translateY(-50%);
  color: #4b5563;
  font-size: 0.8rem;
  pointer-events: none;
}
.search-input {
  width: 100%;
  padding: 9px 36px 9px 36px;
  background: rgba(255, 255, 255, 0.04);
  border: 1.5px solid rgba(255, 255, 255, 0.08);
  border-radius: 9px;
  color: #e2e8f0;
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.search-input::placeholder {
  color: #374151;
}
.search-input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
}
.clear-btn {
  position: absolute;
  right: 11px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #4b5563;
  font-size: 0.78rem;
  line-height: 1;
  padding: 3px;
  transition: color 0.18s;
}
.clear-btn:hover {
  color: #e2e8f0;
}
.filter-group {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}
.filter-btn {
  padding: 7px 15px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.04);
  border: 1.5px solid rgba(255, 255, 255, 0.07);
  color: #6b7280;
  transition: all 0.18s;
}
.filter-btn:hover {
  color: #c7d2fe;
  border-color: rgba(99, 102, 241, 0.35);
}
.filter-btn.active {
  background: rgba(99, 102, 241, 0.15);
  color: #a5b4fc;
  border-color: rgba(99, 102, 241, 0.45);
}
.table-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.data-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 720px;
  font-size: 0.875rem;
}
.data-table thead tr {
  background: rgba(255, 255, 255, 0.02);
}
.data-table th {
  padding: 11px 16px;
  text-align: left;
  font-size: 0.7rem;
  font-weight: 700;
  color: #4b5563;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  white-space: nowrap;
}
.th-num {
  width: 40px;
  padding-left: 20px;
}
.th-user {
  min-width: 170px;
}
.th-email {
  min-width: 180px;
}
.th-role {
  width: 120px;
}
.th-status {
  width: 100px;
}
.th-date {
  width: 120px;
}
.th-actions {
  width: 140px;
}
.data-table td {
  padding: 13px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  color: #cbd5e1;
  vertical-align: middle;
}
.td-num {
  padding-left: 20px;
  color: #374151;
  font-size: 0.78rem;
  font-weight: 600;
}
.tr-row {
  transition: background 0.14s;
}
.tr-row:hover {
  background: rgba(99, 102, 241, 0.05);
}
.td-user {
  white-space: nowrap;
}
.td-user .av {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #9333ea);
  color: #fff;
  font-weight: 800;
  font-size: 0.85rem;
  vertical-align: middle;
  transition: transform 0.2s, box-shadow 0.2s;
}
.tr-row:hover .av {
  transform: scale(1.1);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
}
.td-user .uinfo {
  display: inline-flex;
  flex-direction: column;
  vertical-align: middle;
  margin-left: 10px;
}
.uname {
  font-weight: 600;
  color: #f1f5f9;
  font-size: 0.875rem;
  line-height: 1.3;
}
.uid {
  font-size: 0.7rem;
  color: #374151;
}
.td-email {
  color: #94a3b8;
  font-size: 0.85rem;
}
.role-select {
  padding: 5px 28px 5px 9px;
  border-radius: 7px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1.5px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
  color: #a5b4fc;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%236b7280'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  transition: border-color 0.18s;
}
.role-select:focus {
  border-color: #6366f1;
}
.role-select.is-admin {
  color: #facc15;
  border-color: rgba(234, 179, 8, 0.35);
}
.role-select option {
  background: #1e293b;
  color: #e2e8f0;
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 700;
  white-space: nowrap;
}
.badge-on {
  background: rgba(34, 197, 94, 0.1);
  color: #4ade80;
}
.badge-off {
  background: rgba(239, 68, 68, 0.1);
  color: #f87171;
}
.dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
}
.badge-on .dot {
  background: #4ade80;
  animation: blink 2s infinite;
}
.badge-off .dot {
  background: #f87171;
}
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
}
.td-date {
  color: #64748b;
  font-size: 0.83rem;
  white-space: nowrap;
}
.td-actions {
  white-space: nowrap;
}
.btn-toggle {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  margin-right: 6px;
  border-radius: 7px;
  cursor: pointer;
  font-size: 0.78rem;
  font-weight: 600;
  border: 1.5px solid rgba(99, 102, 241, 0.25);
  background: rgba(99, 102, 241, 0.1);
  color: #a5b4fc;
  transition: all 0.18s;
}
.btn-toggle:hover {
  background: rgba(99, 102, 241, 0.22);
  transform: translateY(-1px);
}
.btn-toggle.btn-enable {
  background: rgba(34, 197, 94, 0.08);
  border-color: rgba(34, 197, 94, 0.25);
  color: #4ade80;
}
.btn-toggle.btn-enable:hover {
  background: rgba(34, 197, 94, 0.18);
}
.btn-del {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 7px;
  cursor: pointer;
  font-size: 0.82rem;
  background: rgba(239, 68, 68, 0.08);
  border: 1.5px solid rgba(239, 68, 68, 0.18);
  color: #f87171;
  transition: all 0.18s;
}
.btn-del:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(239, 68, 68, 0.4);
  transform: translateY(-1px);
}
.empty-cell {
  padding: 0 !important;
  border: none !important;
}
.empty-wrap {
  text-align: center;
  padding: 56px 24px;
}
.empty-wrap i {
  font-size: 2.8rem;
  color: #1e293b;
  display: block;
  margin-bottom: 14px;
}
.empty-wrap p {
  color: #4b5563;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 4px;
}
.empty-wrap small {
  color: #374151;
  font-size: 0.82rem;
}
.card-footer {
  padding: 12px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.8rem;
  color: #4b5563;
}
.card-footer b {
  color: #818cf8;
}
@media (max-width: 1024px) {
  .admin-sidebar {
    width: 200px;
  }
  .admin-main {
    padding: 24px 20px;
  }
  .stats-row {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}
@media (max-width: 768px) {
  .admin-layout {
    flex-direction: column;
  }
  .admin-sidebar {
    width: 100%;
    height: 58px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    flex-direction: row;
    padding: 0;
    overflow: visible;
    border-right: none;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    z-index: 100;
  }
  .sidebar-brand {
    display: none;
  }
  .divider {
    display: none;
  }
  .sidebar-nav {
    flex-direction: row;
    width: 100%;
    padding: 0;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .sidebar-nav::-webkit-scrollbar {
    display: none;
  }
  .nav-item {
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6px 8px;
    gap: 3px;
    min-width: 52px;
    border-left: none;
    border-top: 2px solid transparent;
    border-radius: 0;
  }
  .nav-item i {
    font-size: 1rem;
    width: auto;
  }
  .nav-item span {
    font-size: 0.55rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-weight: 700;
    color: inherit;
  }
  .nav-item.active {
    border-top-color: #6366f1;
  }
  .admin-main {
    padding: 18px 14px 76px;
  }
  .stats-row {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 18px;
  }
  .stat-card {
    padding: 14px 15px;
    gap: 12px;
  }
  .stat-icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  .stat-value {
    font-size: 1.5rem;
  }
  .page-header h1 {
    font-size: 1.3rem;
  }
  .table-toolbar {
    flex-direction: column;
    align-items: stretch;
    padding: 14px 16px;
    gap: 10px;
  }
  .search-wrapper {
    min-width: unset;
  }
  .filter-group {
    flex-wrap: wrap;
  }
}
@media (max-width: 480px) {
  .stats-row {
    gap: 8px;
  }
  .stat-card {
    padding: 12px 13px;
    gap: 10px;
    border-radius: 12px;
  }
  .stat-icon {
    width: 36px;
    height: 36px;
    border-radius: 9px;
    font-size: 0.9rem;
  }
  .stat-value {
    font-size: 1.35rem;
  }
  .stat-label {
    font-size: 0.7rem;
  }
  .page-header h1 {
    font-size: 1.15rem;
  }
}
/*# sourceMappingURL=manage-users.component.css.map */
`] }]
  }], () => [{ type: AdminService }, { type: ConfirmService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageUsersComponent, { className: "ManageUsersComponent", filePath: "src/app/features/admin/manage-users/manage-users.component.ts", lineNumber: 382 });
})();
export {
  ManageUsersComponent
};
//# sourceMappingURL=chunk-VILLHMJJ.js.map
