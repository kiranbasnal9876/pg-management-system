import {
  ThemeService
} from "./chunk-G2VPNSL2.js";
import {
  CommonModule,
  GlobalService,
  NgClass,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-E5VR6ZL4.js";
import {
  Component,
  EventEmitter,
  HostListener,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresolveWindow,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TFR4PE7B.js";
import "./chunk-Y5RQAIA6.js";

// src/app/theme/header/header.component.ts
var HeaderComponent = class _HeaderComponent {
  themeService;
  GF;
  constructor(themeService, GF) {
    this.themeService = themeService;
    this.GF = GF;
  }
  currentTheme = "system";
  sidebarVisible = true;
  currentUser = null;
  userRole = "owner";
  sidebarToggle = new EventEmitter();
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    this.sidebarToggle.emit(this.sidebarVisible);
  }
  ngOnInit() {
    this.currentUser = this.GF.getUser();
    this.userRole = this.GF.getUserRole() || "owner";
    this.themeService.theme$.subscribe((theme) => {
      this.currentTheme = theme;
    });
    const savedTheme = localStorage.getItem("app-theme");
    if (savedTheme) {
      this.themeService.setTheme(savedTheme);
    } else {
      this.themeService.setTheme("system");
    }
  }
  toggleTheme() {
    const nextTheme = this.currentTheme === "dark" ? "light" : "dark";
    this.themeService.setTheme(nextTheme);
  }
  logout() {
    this.GF.logout();
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(GlobalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], outputs: { sidebarToggle: "sidebarToggle" }, decls: 30, vars: 6, consts: [[1, "header-container", "d-flex", "align-items-center", "justify-content-between", "px-3", "w-100", "h-100", "card-theme-color"], [1, "brand-section", "d-flex", "align-items-center", "gap-3"], ["type", "button", "title", "Toggle Sidebar", 1, "sidebar-toggle-btn", "btn", "btn-sm", "d-flex", "align-items-center", "justify-content-center", 3, "click"], [1, "bi", "bi-list", "fs-5"], [1, "brand-logo-wrapper", "d-flex", "align-items-center", "gap-2"], [1, "brand-icon-box", "d-flex", "align-items-center", "justify-content-center"], [1, "bi", "bi-building-fill-gear", "text-white"], [1, "brand-text", "d-none", "d-sm-flex", "flex-column"], [1, "brand-title", "fw-bold"], [1, "brand-subtitle", "fs-10", "text-muted"], [1, "header-actions", "d-flex", "align-items-center", "gap-2", "gap-md-3"], ["type", "button", 1, "theme-toggle-btn", "btn", "btn-sm", "d-flex", "align-items-center", "gap-1", 3, "click", "title"], [3, "ngClass"], [1, "d-none", "d-lg-inline", "fs-11", "text-muted"], [1, "vr", "my-2", "opacity-25", "d-none", "d-sm-block"], [1, "user-profile-pill", "d-flex", "align-items-center", "gap-2", "px-2", "py-1", "rounded"], [1, "profile-avatar-box"], ["alt", "Profile", 1, "profile-img", "rounded-circle", 2, "width", "28px", "height", "28px", 3, "src"], [1, "profile-info", "d-none", "d-md-flex", "flex-column", "text-start"], [1, "profile-name", "fs-12", "fw-semibold", "text-truncate", 2, "max-width", "140px"], [1, "profile-role", "fs-10", "text-muted"], ["type", "button", "title", "Logout from System", 1, "logout-btn", "btn", "btn-sm", "d-flex", "align-items-center", "gap-1", 3, "click"], [1, "bi", "bi-box-arrow-right", "fs-13"], [1, "d-none", "d-sm-inline", "fs-11", "fw-semibold"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_2_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "i", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7)(8, "span", 8);
      \u0275\u0275text(9, "PG Manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 9);
      \u0275\u0275text(11, "Management System");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "div", 10)(13, "button", 11);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_13_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275element(14, "i", 12);
      \u0275\u0275elementStart(15, "span", 13);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(17, "div", 14);
      \u0275\u0275elementStart(18, "div", 15)(19, "div", 16);
      \u0275\u0275element(20, "img", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 18)(22, "span", 19);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 20);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "button", 21);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_26_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(27, "i", 22);
      \u0275\u0275elementStart(28, "span", 23);
      \u0275\u0275text(29, "Logout");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("title", ctx.currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.currentTheme === "dark" ? "bi bi-sun-fill text-warning" : "bi bi-moon-stars-fill text-primary");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentTheme === "dark" ? "Light" : "Dark");
      \u0275\u0275advance(4);
      \u0275\u0275property("src", "https://ui-avatars.com/api/?name=" + ((ctx.currentUser == null ? null : ctx.currentUser.name) || "User") + "&background=" + (ctx.userRole === "tenant" ? "10b981" : "4f46e5") + "&color=fff", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((ctx.currentUser == null ? null : ctx.currentUser.name) || "Administrator");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.userRole === "tenant" ? "PG Resident" : "PG Landlord");
    }
  }, dependencies: [CommonModule, NgClass], styles: ["\n\n.header-container[_ngcontent-%COMP%] {\n  height: 100%;\n  border-bottom: 1px solid var(--border-color);\n  background-color: var(--card-bg);\n}\n.brand-section[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.sidebar-toggle-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n  background-color: var(--card-bg-subtle);\n  color: var(--text-color);\n  transition: all 0.2s ease;\n  padding: 0;\n}\n.sidebar-toggle-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-light);\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.brand-icon-box[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  background: var(--gradient-bg);\n  box-shadow: 0 2px 6px rgba(79, 70, 229, 0.3);\n}\n.brand-icon-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.brand-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.1;\n  color: var(--text-heading-color);\n  letter-spacing: -0.02em;\n}\n.theme-toggle-btn[_ngcontent-%COMP%] {\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n  background-color: var(--card-bg-subtle);\n  padding: 0 0.65rem;\n  transition: all 0.2s ease;\n}\n.theme-toggle-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n  background-color: var(--primary-light);\n}\n.user-profile-pill[_ngcontent-%COMP%] {\n  background-color: var(--card-bg-subtle);\n  border: 1px solid var(--border-color);\n  height: 36px;\n}\n.profile-avatar-box[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 1px solid var(--border-color);\n}\n.profile-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.profile-name[_ngcontent-%COMP%] {\n  line-height: 1.1;\n  color: var(--text-color);\n}\n.profile-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  line-height: 1;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  height: 34px;\n  padding: 0 0.75rem;\n  border-radius: 8px;\n  background-color: var(--danger-light);\n  border: 1px solid rgba(239, 68, 68, 0.25);\n  color: var(--danger-color);\n  transition: all 0.2s ease;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--danger-color);\n  color: #ffffff;\n  border-color: var(--danger-color);\n  box-shadow: 0 2px 6px rgba(239, 68, 68, 0.3);\n  transform: translateY(-1px);\n}\n/*# sourceMappingURL=header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", imports: [CommonModule], template: `<div class="header-container d-flex align-items-center justify-content-between px-3 w-100 h-100 card-theme-color">

    <!-- Left Brand & Sidebar Toggle -->
    <div class="brand-section d-flex align-items-center gap-3">
        <button class="sidebar-toggle-btn btn btn-sm d-flex align-items-center justify-content-center" 
                (click)="toggleSidebar()" 
                type="button" 
                title="Toggle Sidebar">
            <i class="bi bi-list fs-5"></i>
        </button>

        <div class="brand-logo-wrapper d-flex align-items-center gap-2">
            <div class="brand-icon-box d-flex align-items-center justify-content-center">
                <i class="bi bi-building-fill-gear text-white"></i>
            </div>
            <div class="brand-text d-none d-sm-flex flex-column">
                <span class="brand-title fw-bold">PG Manager</span>
                <span class="brand-subtitle fs-10 text-muted">Management System</span>
            </div>
        </div>
    </div>

    <!-- Right Header Actions (Theme Toggle, Profile, Logout Button) -->
    <div class="header-actions d-flex align-items-center gap-2 gap-md-3">

        <!-- Theme Toggle Button -->
        <button class="theme-toggle-btn btn btn-sm d-flex align-items-center gap-1" 
                (click)="toggleTheme()" 
                type="button" 
                [title]="currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
            <i [ngClass]="currentTheme === 'dark' ? 'bi bi-sun-fill text-warning' : 'bi bi-moon-stars-fill text-primary'"></i>
            <span class="d-none d-lg-inline fs-11 text-muted">{{ currentTheme === 'dark' ? 'Light' : 'Dark' }}</span>
        </button>

        <!-- Divider -->
        <div class="vr my-2 opacity-25 d-none d-sm-block"></div>

        <!-- User Profile Pill -->
        <div class="user-profile-pill d-flex align-items-center gap-2 px-2 py-1 rounded">
            <div class="profile-avatar-box">
                <img [src]="'https://ui-avatars.com/api/?name=' + (currentUser?.name || 'User') + '&background=' + (userRole === 'tenant' ? '10b981' : '4f46e5') + '&color=fff'" 
                     alt="Profile" 
                     class="profile-img rounded-circle" style="width: 28px; height: 28px;">
            </div>
            <div class="profile-info d-none d-md-flex flex-column text-start">
                <span class="profile-name fs-12 fw-semibold text-truncate" style="max-width: 140px;">{{ currentUser?.name || 'Administrator' }}</span>
                <span class="profile-role fs-10 text-muted">{{ userRole === 'tenant' ? 'PG Resident' : 'PG Landlord' }}</span>
            </div>
        </div>

        <!-- Prominent Logout Button -->
        <button class="logout-btn btn btn-sm d-flex align-items-center gap-1" 
                (click)="logout()" 
                type="button" 
                title="Logout from System">
            <i class="bi bi-box-arrow-right fs-13"></i>
            <span class="d-none d-sm-inline fs-11 fw-semibold">Logout</span>
        </button>

    </div>

</div>`, styles: ["/* src/app/theme/header/header.component.css */\n.header-container {\n  height: 100%;\n  border-bottom: 1px solid var(--border-color);\n  background-color: var(--card-bg);\n}\n.brand-section {\n  height: 100%;\n}\n.sidebar-toggle-btn {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n  background-color: var(--card-bg-subtle);\n  color: var(--text-color);\n  transition: all 0.2s ease;\n  padding: 0;\n}\n.sidebar-toggle-btn:hover {\n  background-color: var(--primary-light);\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.brand-icon-box {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  background: var(--gradient-bg);\n  box-shadow: 0 2px 6px rgba(79, 70, 229, 0.3);\n}\n.brand-icon-box i {\n  font-size: 1.1rem;\n}\n.brand-title {\n  font-size: 1rem;\n  line-height: 1.1;\n  color: var(--text-heading-color);\n  letter-spacing: -0.02em;\n}\n.theme-toggle-btn {\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n  background-color: var(--card-bg-subtle);\n  padding: 0 0.65rem;\n  transition: all 0.2s ease;\n}\n.theme-toggle-btn:hover {\n  border-color: var(--primary-color);\n  background-color: var(--primary-light);\n}\n.user-profile-pill {\n  background-color: var(--card-bg-subtle);\n  border: 1px solid var(--border-color);\n  height: 36px;\n}\n.profile-avatar-box {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 1px solid var(--border-color);\n}\n.profile-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.profile-name {\n  line-height: 1.1;\n  color: var(--text-color);\n}\n.profile-role {\n  font-size: 10px;\n  line-height: 1;\n}\n.logout-btn {\n  height: 34px;\n  padding: 0 0.75rem;\n  border-radius: 8px;\n  background-color: var(--danger-light);\n  border: 1px solid rgba(239, 68, 68, 0.25);\n  color: var(--danger-color);\n  transition: all 0.2s ease;\n}\n.logout-btn:hover {\n  background-color: var(--danger-color);\n  color: #ffffff;\n  border-color: var(--danger-color);\n  box-shadow: 0 2px 6px rgba(239, 68, 68, 0.3);\n  transform: translateY(-1px);\n}\n/*# sourceMappingURL=header.component.css.map */\n"] }]
  }], () => [{ type: ThemeService }, { type: GlobalService }], { sidebarToggle: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/theme/header/header.component.ts", lineNumber: 12 });
})();

// src/app/theme/sidebar/sidebar.component.ts
function SidebarComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 5)(1, "a", 17);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menus_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", menus_r1.menu_url);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("", menus_r1.icon_class, " fs-14");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(menus_r1.menu);
  }
}
var SidebarComponent = class _SidebarComponent {
  GF;
  constructor(GF) {
    this.GF = GF;
  }
  logoutClick = new EventEmitter();
  currentUser = null;
  userRole = "owner";
  ngOnInit() {
    this.currentUser = this.GF.getUser();
    this.userRole = this.GF.getUserRole() || "owner";
  }
  get myMenu() {
    if (this.userRole === "tenant") {
      return [
        { menu: "My Dashboard", icon_class: "bi bi-speedometer2", menu_url: "/dashboard" },
        { menu: "Pay Rent (Razorpay)", icon_class: "bi bi-credit-card-2-front-fill", menu_url: "/pay-rent" },
        { menu: "Complaints", icon_class: "bi bi-exclamation-octagon-fill", menu_url: "/complaints" },
        { menu: "Profile / Settings", icon_class: "bi bi-person-circle", menu_url: "/setting" }
      ];
    }
    return [
      { menu: "Dashboard", icon_class: "bi bi-grid-1x2-fill", menu_url: "/dashboard" },
      { menu: "Tenant Directory", icon_class: "bi bi-person-badge-fill", menu_url: "/tenant" },
      { menu: "Rooms", icon_class: "bi bi-door-open-fill", menu_url: "/rooms" },
      { menu: "Property Master", icon_class: "bi bi-buildings-fill", menu_url: "/property-master" },
      { menu: "Complaints", icon_class: "bi bi-exclamation-octagon-fill", menu_url: "/complaints" },
      { menu: "Client Master", icon_class: "bi bi-people-fill", menu_url: "/client-master" },
      { menu: "Settings", icon_class: "bi bi-gear-fill", menu_url: "/setting" }
    ];
  }
  logout() {
    this.logoutClick.emit();
    this.GF.logout();
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)(\u0275\u0275directiveInject(GlobalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], outputs: { logoutClick: "logoutClick" }, decls: 24, vars: 6, consts: [[1, "sidebar-container", "d-flex", "flex-column", "justify-content-between", "h-100", "w-100", "p-3", "card-theme-color"], [1, "sidebar-top-section"], [1, "sidebar-heading", "px-2", "mb-2"], [1, "fs-10", "fw-bold", "text-uppercase", "text-muted", "letter-spacing-1"], [1, "sidebar-nav-list", "list-unstyled", "m-0", "p-0", "d-flex", "flex-column", "gap-1"], [1, "sidebar-nav-item"], [1, "sidebar-bottom-section", "pt-3", "border-top", "border-secondary-subtle"], [1, "sidebar-user-card", "p-2", "rounded", "mb-2", "d-flex", "align-items-center", "gap-2"], [1, "user-avatar-sm"], [1, "user-meta", "overflow-hidden"], [1, "fs-12", "fw-bold", "text-truncate"], [1, "fs-10", "text-muted", "d-flex", "align-items-center", "gap-1"], [1, "badge", "bg-opacity-10", "text-uppercase", 2, "font-size", "8px", 3, "ngClass"], [1, "text-truncate"], ["type", "button", 1, "sidebar-logout-btn", "btn", "btn-sm", "w-100", "d-flex", "align-items-center", "justify-content-center", "gap-2", 3, "click"], [1, "bi", "bi-box-arrow-right"], [1, "fs-12", "fw-semibold"], ["routerLinkActive", "active-link", 1, "sidebar-link", "rounded", "d-flex", "align-items-center", "gap-3", "px-3", "py-2", "text-decoration-none", "cursor-pointer", 3, "routerLink"], [1, "fs-12", "fw-medium"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Navigation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "ul", 4);
      \u0275\u0275repeaterCreate(6, SidebarComponent_For_7_Template, 5, 5, "li", 5, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8);
      \u0275\u0275element(11, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 9)(13, "div", 10);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 11)(16, "span", 12);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 13);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(20, "button", 14);
      \u0275\u0275listener("click", function SidebarComponent_Template_button_click_20_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(21, "i", 15);
      \u0275\u0275elementStart(22, "span", 16);
      \u0275\u0275text(23, "Sign Out");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.myMenu);
      \u0275\u0275advance(5);
      \u0275\u0275classMap(ctx.userRole === "tenant" ? "bi bi-person-badge-fill text-success" : "bi bi-building-fill text-primary");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((ctx.currentUser == null ? null : ctx.currentUser.name) || (ctx.userRole === "tenant" ? "Resident" : "PG Owner"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.userRole === "tenant" ? "bg-success text-success" : "bg-primary text-primary");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.userRole === "tenant" ? "Tenant" : "PG Owner", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.email);
    }
  }, dependencies: [CommonModule, NgClass, RouterLink, RouterLinkActive], styles: ["\n\n.sidebar-container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n  border-right: 1px solid var(--border-color);\n}\n.letter-spacing-1[_ngcontent-%COMP%] {\n  letter-spacing: 0.08em;\n}\n.sidebar-nav-item[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.sidebar-link[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  background-color: transparent;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n.sidebar-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-muted-color);\n  transition: color 0.2s ease;\n  width: 20px;\n  text-align: center;\n}\n.sidebar-link[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-light);\n  color: var(--primary-color);\n}\n.sidebar-link[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.sidebar-link.active-link[_ngcontent-%COMP%] {\n  background: var(--gradient-bg);\n  color: #ffffff !important;\n  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.35);\n}\n.sidebar-link.active-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n.sidebar-user-card[_ngcontent-%COMP%] {\n  background-color: var(--card-bg-subtle);\n  border: 1px solid var(--border-color);\n}\n.user-avatar-sm[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background-color: var(--primary-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.sidebar-logout-btn[_ngcontent-%COMP%] {\n  height: 36px;\n  border-radius: var(--radius-sm);\n  background-color: var(--danger-light);\n  border: 1px solid rgba(239, 68, 68, 0.25);\n  color: var(--danger-color);\n  transition: all 0.2s ease;\n}\n.sidebar-logout-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--danger-color);\n  color: #ffffff;\n  border-color: var(--danger-color);\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);\n  transform: translateY(-1px);\n}\n/*# sourceMappingURL=sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", imports: [CommonModule, RouterLink, RouterLinkActive], template: `<nav class="sidebar-container d-flex flex-column justify-content-between h-100 w-100 p-3 card-theme-color">

    <!-- Top Navigation Menu -->
    <div class="sidebar-top-section">
        <div class="sidebar-heading px-2 mb-2">
            <span class="fs-10 fw-bold text-uppercase text-muted letter-spacing-1">Navigation</span>
        </div>

        <ul class="sidebar-nav-list list-unstyled m-0 p-0 d-flex flex-column gap-1">
            @for(menus of myMenu; track $index){
                <li class="sidebar-nav-item">
                    <a class="sidebar-link rounded d-flex align-items-center gap-3 px-3 py-2 text-decoration-none cursor-pointer"
                       [routerLink]="menus.menu_url" 
                       routerLinkActive="active-link">
                        <i class="{{menus.icon_class}} fs-14"></i>
                        <span class="fs-12 fw-medium">{{menus.menu}}</span>
                    </a>
                </li>
            }
        </ul>
    </div>

    <!-- Bottom Sidebar Section (User info & Dedicated Logout) -->
    <div class="sidebar-bottom-section pt-3 border-top border-secondary-subtle">
        <div class="sidebar-user-card p-2 rounded mb-2 d-flex align-items-center gap-2">
            <div class="user-avatar-sm">
                <i [class]="userRole === 'tenant' ? 'bi bi-person-badge-fill text-success' : 'bi bi-building-fill text-primary'"></i>
            </div>
            <div class="user-meta overflow-hidden">
                <div class="fs-12 fw-bold text-truncate">{{ currentUser?.name || (userRole === 'tenant' ? 'Resident' : 'PG Owner') }}</div>
                <div class="fs-10 text-muted d-flex align-items-center gap-1">
                    <span class="badge bg-opacity-10 text-uppercase" [ngClass]="userRole === 'tenant' ? 'bg-success text-success' : 'bg-primary text-primary'" style="font-size: 8px;">
                        {{ userRole === 'tenant' ? 'Tenant' : 'PG Owner' }}
                    </span>
                    <span class="text-truncate">{{ currentUser?.email }}</span>
                </div>
            </div>
        </div>

        <button class="sidebar-logout-btn btn btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
                (click)="logout()"
                type="button">
            <i class="bi bi-box-arrow-right"></i>
            <span class="fs-12 fw-semibold">Sign Out</span>
        </button>
    </div>

</nav>`, styles: ["/* src/app/theme/sidebar/sidebar.component.css */\n.sidebar-container {\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n  border-right: 1px solid var(--border-color);\n}\n.letter-spacing-1 {\n  letter-spacing: 0.08em;\n}\n.sidebar-nav-item {\n  list-style: none;\n}\n.sidebar-link {\n  color: var(--text-color);\n  background-color: transparent;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n.sidebar-link i {\n  color: var(--text-muted-color);\n  transition: color 0.2s ease;\n  width: 20px;\n  text-align: center;\n}\n.sidebar-link:hover {\n  background-color: var(--primary-light);\n  color: var(--primary-color);\n}\n.sidebar-link:hover i {\n  color: var(--primary-color);\n}\n.sidebar-link.active-link {\n  background: var(--gradient-bg);\n  color: #ffffff !important;\n  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.35);\n}\n.sidebar-link.active-link i {\n  color: #ffffff !important;\n}\n.sidebar-user-card {\n  background-color: var(--card-bg-subtle);\n  border: 1px solid var(--border-color);\n}\n.user-avatar-sm {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background-color: var(--primary-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.sidebar-logout-btn {\n  height: 36px;\n  border-radius: var(--radius-sm);\n  background-color: var(--danger-light);\n  border: 1px solid rgba(239, 68, 68, 0.25);\n  color: var(--danger-color);\n  transition: all 0.2s ease;\n}\n.sidebar-logout-btn:hover {\n  background-color: var(--danger-color);\n  color: #ffffff;\n  border-color: var(--danger-color);\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);\n  transform: translateY(-1px);\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n"] }]
  }], () => [{ type: GlobalService }], { logoutClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/theme/sidebar/sidebar.component.ts", lineNumber: 13 });
})();

// src/app/layout/layout.component.ts
var LayoutComponent = class _LayoutComponent {
  sidebarVisible = true;
  isMobileView = false;
  ngOnInit() {
    this.checkViewport();
  }
  onResize() {
    this.checkViewport();
  }
  checkViewport() {
    this.isMobileView = window.innerWidth <= 768;
    if (this.isMobileView) {
      this.sidebarVisible = false;
    } else {
      this.sidebarVisible = true;
    }
  }
  sidebarState(state) {
    this.sidebarVisible = state;
  }
  static \u0275fac = function LayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], hostBindings: function LayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function LayoutComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, \u0275\u0275resolveWindow);
    }
  }, decls: 9, vars: 3, consts: [[1, "vw-100", "vh-100", "body-theme-color", "app-main-layout", "d-flex", "flex-column"], [1, "header"], [3, "sidebarToggle"], [1, "overlay", 3, "click"], [1, "sidebar-pages-container", "d-flex", "flex-row", "mx-0", "p-0", "body-theme-color"], [1, "p-0", "card-theme-color", "sidebar-wrapper", 3, "ngClass"], [3, "logoutClick"], [1, "pages", "px-3", "py-3", "body-theme-color"]], template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "app-header", 2);
      \u0275\u0275listener("sidebarToggle", function LayoutComponent_Template_app_header_sidebarToggle_2_listener($event) {
        return ctx.sidebarState($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275listener("click", function LayoutComponent_Template_div_click_3_listener() {
        return ctx.sidebarVisible = false;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "aside", 5)(6, "app-sidebar", 6);
      \u0275\u0275listener("logoutClick", function LayoutComponent_Template_app_sidebar_logoutClick_6_listener() {
        return ctx.sidebarVisible = false;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "main", 7);
      \u0275\u0275element(8, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.sidebarVisible && ctx.isMobileView);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.sidebarVisible ? "sidebar" : "remove-sidebar sidebar");
    }
  }, dependencies: [HeaderComponent, SidebarComponent, RouterOutlet, CommonModule, NgClass], styles: ["\n\n.header[_ngcontent-%COMP%] {\n  height: 60px;\n  flex-shrink: 0;\n  z-index: 1000;\n  position: relative;\n  border-bottom: 1px solid var(--border-color);\n  background-color: var(--card-bg);\n}\n.sidebar-pages-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 60px);\n  width: 100vw;\n  overflow: hidden;\n  position: relative;\n}\n.sidebar-wrapper[_ngcontent-%COMP%] {\n  transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  height: 100%;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 100%;\n  flex-shrink: 0;\n  border-right: 1px solid var(--border-color);\n  background-color: var(--card-bg);\n}\n.remove-sidebar[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n  overflow: hidden;\n  padding: 0;\n  width: 0;\n  border-right: none;\n}\n.pages[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n  background-color: var(--background-color);\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    z-index: 999;\n    transform: translateX(-100%);\n    width: 260px;\n    box-shadow: var(--shadow-lg);\n  }\n  .sidebar[_ngcontent-%COMP%]:not(.remove-sidebar) {\n    transform: translateX(0);\n  }\n  .remove-sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n    width: 260px;\n  }\n  .overlay[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 60px;\n    left: 0;\n    width: 100%;\n    height: calc(100vh - 60px);\n    background-color: rgba(15, 23, 42, 0.65);\n    z-index: 998;\n    display: none;\n    transition: opacity 0.25s ease-in-out;\n    opacity: 0;\n  }\n  .overlay.active[_ngcontent-%COMP%] {\n    display: block;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutComponent, [{
    type: Component,
    args: [{ selector: "app-layout", imports: [HeaderComponent, SidebarComponent, RouterOutlet, CommonModule], template: `<div class="vw-100 vh-100 body-theme-color app-main-layout d-flex flex-column">

    <header class="header">
        <app-header (sidebarToggle)="sidebarState($event)"></app-header>
    </header>

    <!-- Mobile view backdrop overlay -->
    <div class="overlay" [class.active]="sidebarVisible && isMobileView" (click)="sidebarVisible = false"></div>

    <div class="sidebar-pages-container d-flex flex-row mx-0 p-0 body-theme-color">
        <aside class="p-0 card-theme-color sidebar-wrapper" [ngClass]="sidebarVisible ? 'sidebar' : 'remove-sidebar sidebar'">
            <app-sidebar (logoutClick)="sidebarVisible = false"></app-sidebar>
        </aside>
        <main class="pages px-3 py-3 body-theme-color">
           <router-outlet></router-outlet>
        </main>
    </div>

</div>`, styles: ["/* src/app/layout/layout.component.css */\n.header {\n  height: 60px;\n  flex-shrink: 0;\n  z-index: 1000;\n  position: relative;\n  border-bottom: 1px solid var(--border-color);\n  background-color: var(--card-bg);\n}\n.sidebar-pages-container {\n  height: calc(100vh - 60px);\n  width: 100vw;\n  overflow: hidden;\n  position: relative;\n}\n.sidebar-wrapper {\n  transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  height: 100%;\n}\n.sidebar {\n  width: 240px;\n  height: 100%;\n  flex-shrink: 0;\n  border-right: 1px solid var(--border-color);\n  background-color: var(--card-bg);\n}\n.remove-sidebar {\n  transform: translateX(-100%);\n  overflow: hidden;\n  padding: 0;\n  width: 0;\n  border-right: none;\n}\n.pages {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n  background-color: var(--background-color);\n}\n@media (max-width: 768px) {\n  .sidebar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    z-index: 999;\n    transform: translateX(-100%);\n    width: 260px;\n    box-shadow: var(--shadow-lg);\n  }\n  .sidebar:not(.remove-sidebar) {\n    transform: translateX(0);\n  }\n  .remove-sidebar {\n    transform: translateX(-100%);\n    width: 260px;\n  }\n  .overlay {\n    position: fixed;\n    top: 60px;\n    left: 0;\n    width: 100%;\n    height: calc(100vh - 60px);\n    background-color: rgba(15, 23, 42, 0.65);\n    z-index: 998;\n    display: none;\n    transition: opacity 0.25s ease-in-out;\n    opacity: 0;\n  }\n  .overlay.active {\n    display: block;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */\n"] }]
  }], null, { onResize: [{
    type: HostListener,
    args: ["window:resize", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/layout/layout.component.ts", lineNumber: 13 });
})();
export {
  LayoutComponent
};
//# sourceMappingURL=chunk-UM5GF6ML.js.map
