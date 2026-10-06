import {
  ThemeService
} from "./chunk-G2VPNSL2.js";
import {
  ApiService,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-SD6QMD7Q.js";
import {
  CommonModule,
  GlobalService,
  NgClass,
  Router,
  RouterLink,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withFetch,
  withInterceptors
} from "./chunk-E5VR6ZL4.js";
import {
  Component,
  inject,
  provideZoneChangeDetection,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-TFR4PE7B.js";
import "./chunk-Y5RQAIA6.js";

// src/app/pages/log-in/log-in.component.ts
function LogInComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275text(2, " Please enter a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function LogInComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275text(2, " Password is required ");
    \u0275\u0275elementEnd();
  }
}
function LogInComponent_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 66);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Authenticating...");
    \u0275\u0275elementEnd();
  }
}
function LogInComponent_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 67);
    \u0275\u0275elementStart(1, "span", 68);
    \u0275\u0275text(2, "Sign In to Dashboard");
    \u0275\u0275elementEnd();
  }
}
var LogInComponent = class _LogInComponent {
  api;
  GF;
  themeService;
  router;
  loginForm;
  showPassword = false;
  loading = false;
  currentTheme = "dark";
  constructor(api, GF, themeService, router) {
    this.api = api;
    this.GF = GF;
    this.themeService = themeService;
    this.router = router;
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required)
    });
  }
  ngOnInit() {
    this.themeService.theme$.subscribe((t) => this.currentTheme = t);
  }
  toggleTheme() {
    const next = this.currentTheme === "dark" ? "light" : "dark";
    this.themeService.setTheme(next);
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  quickFillDemo() {
    this.loginForm.patchValue({
      email: "dimpalbasnal0@gmail.com",
      password: "Owner@123"
    });
    this.loginForm.markAllAsTouched();
    this.GF.showToast("Demo Owner credentials filled!", "info");
  }
  onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.loading = true;
      this.api.postApi("pg-owner-login", this.loginForm.value).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.status) {
            localStorage.setItem("token", res.token);
            localStorage.setItem("user_role", "owner");
            if (res.user) {
              localStorage.setItem("user_data", JSON.stringify(res.user));
            }
            this.GF.showToast(res.message, "success");
            this.router.navigate(["/dashboard"]);
          } else {
            this.GF.showToast(res.message, "danger");
          }
        },
        error: (err) => {
          this.loading = false;
          this.GF.showToast(err.error?.message || "Login failed", "danger");
        }
      });
    }
  }
  static \u0275fac = function LogInComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LogInComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogInComponent, selectors: [["app-log-in"]], decls: 111, vars: 10, consts: [[1, "login-wrapper", "position-relative", "overflow-hidden", "min-vh-100", "d-flex", "flex-column", "justify-content-between"], [1, "mesh-glow", "mesh-glow-1"], [1, "mesh-glow", "mesh-glow-2"], [1, "mesh-glow", "mesh-glow-3"], [1, "login-header", "d-flex", "justify-content-between", "align-items-center", "px-4", "py-3", "position-relative", "z-3"], [1, "d-flex", "align-items-center", "gap-2"], [1, "brand-logo-box", "d-flex", "align-items-center", "justify-content-center", "shadow-sm"], [1, "bi", "bi-building-fill-gear", "text-white", "fs-5"], [1, "d-flex", "flex-column"], [1, "fw-bold", "fs-14", "text-heading", "letter-spacing-1"], [1, "fs-10", "text-muted"], [1, "btn", "btn-sm", "btn-theme-toggle", "d-flex", "align-items-center", "gap-1.5", "rounded-pill", "px-3", "py-1.5", 3, "click", "title"], [3, "ngClass"], [1, "fs-11", "fw-medium"], [1, "container-fluid", "d-flex", "flex-grow-1", "align-items-center", "justify-content-center", "px-3", "px-md-5", "py-4", "position-relative", "z-2"], [1, "row", "w-100", "max-w-6xl", "align-items-center", "justify-content-center", "g-4", "g-lg-5"], [1, "col-lg-6", "d-none", "d-lg-flex", "flex-column", "justify-content-center", "pe-xl-5"], [1, "hero-badge-pill", "d-inline-flex", "align-items-center", "gap-2", "px-3", "py-1.5", "rounded-pill", "mb-3", "w-fit"], [1, "status-pulse-dot"], [1, "fs-11", "fw-bold", "text-uppercase", "letter-spacing-1", "text-primary"], [1, "display-6", "fw-extrabold", "text-heading", "mb-3", "tracking-tight"], [1, "gradient-text"], [1, "fs-14", "text-muted", "mb-4", "pe-lg-4", "lh-base"], [1, "d-flex", "flex-column", "gap-3", "mb-4"], [1, "feature-glass-card", "d-flex", "align-items-center", "gap-3", "p-3", "rounded-4"], [1, "feature-icon-box", "bg-blue-subtle", "text-primary", "rounded-3", "d-flex", "align-items-center", "justify-content-center"], [1, "bi", "bi-credit-card-2-front-fill", "fs-5"], [1, "fs-13", "d-block", "text-heading"], [1, "fs-11", "text-muted"], [1, "feature-icon-box", "bg-emerald-subtle", "text-success", "rounded-3", "d-flex", "align-items-center", "justify-content-center"], [1, "bi", "bi-whatsapp", "fs-5"], [1, "feature-icon-box", "bg-cyan-subtle", "text-info", "rounded-3", "d-flex", "align-items-center", "justify-content-center"], [1, "bi", "bi-door-open-fill", "fs-5"], [1, "col-12", "col-md-8", "col-lg-6", "col-xl-5"], [1, "login-glass-card", "p-4", "p-sm-5", "rounded-4", "shadow-lg", "position-relative"], [1, "role-switch-container", "p-1", "rounded-pill", "mb-4", "d-flex"], ["routerLink", "/log-in", 1, "role-tab", "active", "flex-fill", "text-center", "py-2", "rounded-pill", "text-decoration-none", "fw-semibold", "fs-12"], [1, "bi", "bi-building", "me-1"], ["routerLink", "/tenant-log-in", 1, "role-tab", "flex-fill", "text-center", "py-2", "rounded-pill", "text-decoration-none", "text-muted", "fw-semibold", "fs-12"], [1, "bi", "bi-person", "me-1"], [1, "mb-4"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-1"], [1, "fw-bold", "text-heading", "mb-0", "fs-20"], ["type", "button", "title", "Auto-fill demo owner credentials", 1, "btn", "btn-sm", "btn-demo-pill", "d-flex", "align-items-center", "gap-1", "rounded-pill", "px-2.5", "py-1", "fs-11", 3, "click"], [1, "bi", "bi-lightning-charge-fill", "text-warning"], [1, "fs-12", "text-muted", "mb-0"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "owner-email", 1, "form-label", "fs-12", "fw-medium", "text-heading"], [1, "input-glass-group", "d-flex", "align-items-center", "rounded-3", "px-3", "py-2"], [1, "bi", "bi-envelope", "text-muted", "me-2", "fs-14"], ["id", "owner-email", "type", "email", "formControlName", "email", "placeholder", "owner@example.com", "autocomplete", "email", 1, "form-control", "border-0", "bg-transparent", "p-0", "fs-13", "text-heading"], [1, "text-danger", "fs-11", "mt-1", "d-flex", "align-items-center", "gap-1"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1"], ["for", "owner-password", 1, "form-label", "fs-12", "fw-medium", "text-heading", "mb-0"], [1, "bi", "bi-lock", "text-muted", "me-2", "fs-14"], ["id", "owner-password", "formControlName", "password", "placeholder", "Enter password", "autocomplete", "current-password", 1, "form-control", "border-0", "bg-transparent", "p-0", "fs-13", "text-heading", 3, "type"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-sm", "text-muted", "p-0", "ms-2", 3, "click"], ["type", "submit", 1, "btn", "btn-primary-gradient", "w-100", "rounded-3", "py-2.5", "d-flex", "align-items-center", "justify-content-center", "gap-2", "shadow", "mb-3", 3, "disabled"], [1, "pt-3", "border-top", "text-center", "mt-3"], [1, "fs-12", "text-muted"], ["routerLink", "/tenant-log-in", 1, "fs-12", "fw-semibold", "text-primary", "text-decoration-none"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "mt-4", "pt-2", "text-muted", "fs-11"], [1, "bi", "bi-shield-check", "text-success"], [1, "login-footer", "text-center", "py-3", "text-muted", "fs-11", "position-relative", "z-2"], [1, "bi", "bi-exclamation-circle-fill"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "bi", "bi-box-arrow-in-right", "fs-15"], [1, "fw-semibold", "fs-13"]], template: function LogInComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275elementStart(4, "header", 4)(5, "div", 5)(6, "div", 6);
      \u0275\u0275element(7, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 8)(9, "span", 9);
      \u0275\u0275text(10, "PG MANAGER");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 10);
      \u0275\u0275text(12, "Cloud Management Suite");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 5)(14, "button", 11);
      \u0275\u0275listener("click", function LogInComponent_Template_button_click_14_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275element(15, "i", 12);
      \u0275\u0275elementStart(16, "span", 13);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "main", 14)(19, "div", 15)(20, "div", 16)(21, "div", 17);
      \u0275\u0275element(22, "span", 18);
      \u0275\u0275elementStart(23, "span", 19);
      \u0275\u0275text(24, "Enterprise PG Operations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "h1", 20);
      \u0275\u0275text(26, " Modern Living, ");
      \u0275\u0275element(27, "br");
      \u0275\u0275elementStart(28, "span", 21);
      \u0275\u0275text(29, "Intelligently Managed.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "p", 22);
      \u0275\u0275text(31, " All-in-one management suite for PG landlords and property owners. Track occupancy, monitor rent collections, collect payments via Razorpay, and stay connected with tenants over WhatsApp. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 23)(33, "div", 24)(34, "div", 25);
      \u0275\u0275element(35, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div")(37, "strong", 27);
      \u0275\u0275text(38, "Razorpay Rent Collections");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 28);
      \u0275\u0275text(40, "Tenants pay instantly via UPI, GPay, PhonePe, Cards, or NetBanking.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 24)(42, "div", 29);
      \u0275\u0275element(43, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div")(45, "strong", 27);
      \u0275\u0275text(46, "Automated WhatsApp Reminders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span", 28);
      \u0275\u0275text(48, "1-Click rent reminders and verified digital payment receipts.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 24)(50, "div", 31);
      \u0275\u0275element(51, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div")(53, "strong", 27);
      \u0275\u0275text(54, "Real-Time Bed Occupancy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "span", 28);
      \u0275\u0275text(56, "Capacity-safe room allocations and instant maintenance resolution.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(57, "div", 33)(58, "div", 34)(59, "div", 35)(60, "a", 36);
      \u0275\u0275element(61, "i", 37);
      \u0275\u0275text(62, " PG Owner ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "a", 38);
      \u0275\u0275element(64, "i", 39);
      \u0275\u0275text(65, " Tenant ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 40)(67, "div", 41)(68, "h3", 42);
      \u0275\u0275text(69, "PG Owner Sign In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "button", 43);
      \u0275\u0275listener("click", function LogInComponent_Template_button_click_70_listener() {
        return ctx.quickFillDemo();
      });
      \u0275\u0275element(71, "i", 44);
      \u0275\u0275elementStart(72, "span");
      \u0275\u0275text(73, "Demo Fill");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "p", 45);
      \u0275\u0275text(75, "Enter your credentials to access your properties & rent stats.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "form", 46);
      \u0275\u0275listener("ngSubmit", function LogInComponent_Template_form_ngSubmit_76_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(77, "div", 47)(78, "label", 48);
      \u0275\u0275text(79, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 49);
      \u0275\u0275element(81, "i", 50)(82, "input", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275template(83, LogInComponent_Conditional_83_Template, 3, 0, "div", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 40)(85, "div", 53)(86, "label", 54);
      \u0275\u0275text(87, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "span", 28);
      \u0275\u0275text(89, "Encrypted");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 49);
      \u0275\u0275element(91, "i", 55)(92, "input", 56);
      \u0275\u0275elementStart(93, "button", 57);
      \u0275\u0275listener("click", function LogInComponent_Template_button_click_93_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275element(94, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(95, LogInComponent_Conditional_95_Template, 3, 0, "div", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "button", 58);
      \u0275\u0275template(97, LogInComponent_Conditional_97_Template, 3, 0)(98, LogInComponent_Conditional_98_Template, 3, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 59)(100, "span", 60);
      \u0275\u0275text(101, "Are you a resident/tenant? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "a", 61);
      \u0275\u0275text(103, " Tenant Portal Login \u2192 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div", 62);
      \u0275\u0275element(105, "i", 63);
      \u0275\u0275elementStart(106, "span");
      \u0275\u0275text(107, "256-Bit SSL Encrypted & Secure Session");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(108, "footer", 64)(109, "span");
      \u0275\u0275text(110, "\xA9 PG Management System. Designed for modern living & secure rent management.");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_7_0;
      \u0275\u0275advance(14);
      \u0275\u0275property("title", ctx.currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.currentTheme === "dark" ? "bi bi-sun-fill text-warning" : "bi bi-moon-stars-fill text-primary");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentTheme === "dark" ? "Light Mode" : "Dark Mode");
      \u0275\u0275advance(59);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(((tmp_4_0 = ctx.loginForm.get("email")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.loginForm.get("email")) == null ? null : tmp_4_0.touched) ? 83 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.showPassword ? "bi bi-eye-slash" : "bi bi-eye");
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_7_0 = ctx.loginForm.get("password")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.loginForm.get("password")) == null ? null : tmp_7_0.touched) ? 95 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 97 : 98);
    }
  }, dependencies: [CommonModule, NgClass, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.login-wrapper[_ngcontent-%COMP%] {\n  background-color: var(--background-color);\n  color: var(--text-color);\n  transition: background-color 0.3s ease;\n  position: relative;\n}\n.mesh-glow[_ngcontent-%COMP%] {\n  display: none;\n}\n.brand-logo-box[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: var(--gradient-bg);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);\n}\n.btn-theme-toggle[_ngcontent-%COMP%] {\n  background-color: var(--card-bg-subtle);\n  border: 1px solid var(--border-color);\n  color: var(--text-color);\n  transition: all 0.2s ease;\n}\n.btn-theme-toggle[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n  background-color: var(--primary-light);\n}\n.hero-badge-pill[_ngcontent-%COMP%] {\n  background-color: var(--primary-light);\n  border: 1px solid rgba(37, 99, 235, 0.25);\n}\n.status-pulse-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background-color: #2563eb;\n  box-shadow: 0 0 8px #2563eb;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(0.95);\n    opacity: 0.8;\n  }\n  50% {\n    transform: scale(1.3);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.95);\n    opacity: 0.8;\n  }\n}\n.gradient-text[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #60a5fa 50%,\n      #06b6d4 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.gradient-text-emerald[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #34d399 50%,\n      #06b6d4 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.feature-glass-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n  transition: all 0.25s ease;\n}\n.feature-glass-card[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n  border-color: var(--primary-color);\n  box-shadow: var(--shadow);\n}\n.feature-icon-box[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  flex-shrink: 0;\n}\n.bg-blue-subtle[_ngcontent-%COMP%] {\n  background-color: var(--primary-light) !important;\n}\n.bg-emerald-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(16, 185, 129, 0.15) !important;\n}\n.bg-cyan-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(6, 182, 212, 0.15) !important;\n}\n.login-glass-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-lg);\n}\n.role-switch-container[_ngcontent-%COMP%] {\n  background-color: var(--table-header-bg);\n  border: 1px solid var(--border-color);\n}\n.role-tab[_ngcontent-%COMP%] {\n  color: var(--text-muted-color);\n  transition: all 0.2s ease;\n}\n.role-tab.active[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: #ffffff !important;\n  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.35);\n}\n.btn-demo-pill[_ngcontent-%COMP%] {\n  background-color: var(--primary-light);\n  border: 1px solid rgba(79, 70, 229, 0.3);\n  color: var(--primary-color);\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.btn-demo-pill[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-color);\n  color: #ffffff;\n}\n.input-glass-group[_ngcontent-%COMP%] {\n  background-color: var(--input-bg);\n  border: 1px solid var(--input-border);\n  transition: all 0.2s ease;\n}\n.input-glass-group[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--input-focus-border);\n  box-shadow: 0 0 0 3px var(--primary-light);\n}\n.input-glass-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.btn-primary-gradient[_ngcontent-%COMP%] {\n  background: var(--gradient-bg);\n  color: #ffffff;\n  border: none;\n  font-weight: 600;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);\n}\n.btn-primary-gradient[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.95;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.45);\n}\n.btn-primary-gradient[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.letter-spacing-1[_ngcontent-%COMP%] {\n  letter-spacing: 0.06em;\n}\n.w-fit[_ngcontent-%COMP%] {\n  width: fit-content;\n}\n.max-w-6xl[_ngcontent-%COMP%] {\n  max-width: 1140px;\n}\n/*# sourceMappingURL=log-in.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogInComponent, [{
    type: Component,
    args: [{ selector: "app-log-in", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: `<div class="login-wrapper position-relative overflow-hidden min-vh-100 d-flex flex-column justify-content-between">

  <!-- Ambient Glowing Mesh Background -->
  <div class="mesh-glow mesh-glow-1"></div>
  <div class="mesh-glow mesh-glow-2"></div>
  <div class="mesh-glow mesh-glow-3"></div>

  <!-- Top Navigation Bar -->
  <header class="login-header d-flex justify-content-between align-items-center px-4 py-3 position-relative z-3">
    <div class="d-flex align-items-center gap-2">
      <div class="brand-logo-box d-flex align-items-center justify-content-center shadow-sm">
        <i class="bi bi-building-fill-gear text-white fs-5"></i>
      </div>
      <div class="d-flex flex-column">
        <span class="fw-bold fs-14 text-heading letter-spacing-1">PG MANAGER</span>
        <span class="fs-10 text-muted">Cloud Management Suite</span>
      </div>
    </div>

    <!-- Theme Switcher & Status -->
    <div class="d-flex align-items-center gap-2">
      <button class="btn btn-sm btn-theme-toggle d-flex align-items-center gap-1.5 rounded-pill px-3 py-1.5"
              (click)="toggleTheme()"
              [title]="currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
        <i [ngClass]="currentTheme === 'dark' ? 'bi bi-sun-fill text-warning' : 'bi bi-moon-stars-fill text-primary'"></i>
        <span class="fs-11 fw-medium">{{ currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode' }}</span>
      </button>
    </div>
  </header>

  <!-- Main Content Area -->
  <main class="container-fluid d-flex flex-grow-1 align-items-center justify-content-center px-3 px-md-5 py-4 position-relative z-2">
    <div class="row w-100 max-w-6xl align-items-center justify-content-center g-4 g-lg-5">

      <!-- Left Hero Showcase (Hidden on Mobile) -->
      <div class="col-lg-6 d-none d-lg-flex flex-column justify-content-center pe-xl-5">
        <div class="hero-badge-pill d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-3 w-fit">
          <span class="status-pulse-dot"></span>
          <span class="fs-11 fw-bold text-uppercase letter-spacing-1 text-primary">Enterprise PG Operations</span>
        </div>

        <h1 class="display-6 fw-extrabold text-heading mb-3 tracking-tight">
          Modern Living, <br>
          <span class="gradient-text">Intelligently Managed.</span>
        </h1>

        <p class="fs-14 text-muted mb-4 pe-lg-4 lh-base">
          All-in-one management suite for PG landlords and property owners. Track occupancy, monitor rent collections, collect payments via Razorpay, and stay connected with tenants over WhatsApp.
        </p>

        <!-- Feature Highlight Pills -->
        <div class="d-flex flex-column gap-3 mb-4">
          <div class="feature-glass-card d-flex align-items-center gap-3 p-3 rounded-4">
            <div class="feature-icon-box bg-blue-subtle text-primary rounded-3 d-flex align-items-center justify-content-center">
              <i class="bi bi-credit-card-2-front-fill fs-5"></i>
            </div>
            <div>
              <strong class="fs-13 d-block text-heading">Razorpay Rent Collections</strong>
              <span class="fs-11 text-muted">Tenants pay instantly via UPI, GPay, PhonePe, Cards, or NetBanking.</span>
            </div>
          </div>

          <div class="feature-glass-card d-flex align-items-center gap-3 p-3 rounded-4">
            <div class="feature-icon-box bg-emerald-subtle text-success rounded-3 d-flex align-items-center justify-content-center">
              <i class="bi bi-whatsapp fs-5"></i>
            </div>
            <div>
              <strong class="fs-13 d-block text-heading">Automated WhatsApp Reminders</strong>
              <span class="fs-11 text-muted">1-Click rent reminders and verified digital payment receipts.</span>
            </div>
          </div>

          <div class="feature-glass-card d-flex align-items-center gap-3 p-3 rounded-4">
            <div class="feature-icon-box bg-cyan-subtle text-info rounded-3 d-flex align-items-center justify-content-center">
              <i class="bi bi-door-open-fill fs-5"></i>
            </div>
            <div>
              <strong class="fs-13 d-block text-heading">Real-Time Bed Occupancy</strong>
              <span class="fs-11 text-muted">Capacity-safe room allocations and instant maintenance resolution.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Login Form Card -->
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="login-glass-card p-4 p-sm-5 rounded-4 shadow-lg position-relative">

          <!-- Role Toggle Tabs -->
          <div class="role-switch-container p-1 rounded-pill mb-4 d-flex">
            <a routerLink="/log-in" class="role-tab active flex-fill text-center py-2 rounded-pill text-decoration-none fw-semibold fs-12">
              <i class="bi bi-building me-1"></i> PG Owner
            </a>
            <a routerLink="/tenant-log-in" class="role-tab flex-fill text-center py-2 rounded-pill text-decoration-none text-muted fw-semibold fs-12">
              <i class="bi bi-person me-1"></i> Tenant
            </a>
          </div>

          <!-- Form Header -->
          <div class="mb-4">
            <div class="d-flex align-items-center justify-content-between mb-1">
              <h3 class="fw-bold text-heading mb-0 fs-20">PG Owner Sign In</h3>
              <button type="button" class="btn btn-sm btn-demo-pill d-flex align-items-center gap-1 rounded-pill px-2.5 py-1 fs-11"
                      (click)="quickFillDemo()"
                      title="Auto-fill demo owner credentials">
                <i class="bi bi-lightning-charge-fill text-warning"></i>
                <span>Demo Fill</span>
              </button>
            </div>
            <p class="fs-12 text-muted mb-0">Enter your credentials to access your properties & rent stats.</p>
          </div>

          <!-- Form -->
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            
            <!-- Email Input -->
            <div class="mb-3">
              <label for="owner-email" class="form-label fs-12 fw-medium text-heading">Email Address</label>
              <div class="input-glass-group d-flex align-items-center rounded-3 px-3 py-2">
                <i class="bi bi-envelope text-muted me-2 fs-14"></i>
                <input id="owner-email" 
                       type="email" 
                       class="form-control border-0 bg-transparent p-0 fs-13 text-heading" 
                       formControlName="email" 
                       placeholder="owner@example.com"
                       autocomplete="email">
              </div>
              @if (loginForm.get('email')?.invalid && loginForm.get('email')?.touched) {
                <div class="text-danger fs-11 mt-1 d-flex align-items-center gap-1">
                  <i class="bi bi-exclamation-circle-fill"></i> Please enter a valid email address
                </div>
              }
            </div>

            <!-- Password Input with Eye Toggle -->
            <div class="mb-4">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <label for="owner-password" class="form-label fs-12 fw-medium text-heading mb-0">Password</label>
                <span class="fs-11 text-muted">Encrypted</span>
              </div>
              <div class="input-glass-group d-flex align-items-center rounded-3 px-3 py-2">
                <i class="bi bi-lock text-muted me-2 fs-14"></i>
                <input id="owner-password" 
                       [type]="showPassword ? 'text' : 'password'" 
                       class="form-control border-0 bg-transparent p-0 fs-13 text-heading" 
                       formControlName="password" 
                       placeholder="Enter password"
                       autocomplete="current-password">
                <button type="button" class="btn btn-sm text-muted p-0 ms-2" (click)="togglePasswordVisibility()" tabindex="-1">
                  <i [ngClass]="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                </button>
              </div>
              @if (loginForm.get('password')?.invalid && loginForm.get('password')?.touched) {
                <div class="text-danger fs-11 mt-1 d-flex align-items-center gap-1">
                  <i class="bi bi-exclamation-circle-fill"></i> Password is required
                </div>
              }
            </div>

            <!-- Submit Button -->
            <button class="btn btn-primary-gradient w-100 rounded-3 py-2.5 d-flex align-items-center justify-content-center gap-2 shadow mb-3"
                    type="submit" 
                    [disabled]="loginForm.invalid || loading">
              @if (loading) {
                <span class="spinner-border spinner-border-sm" role="status"></span>
                <span>Authenticating...</span>
              } @else {
                <i class="bi bi-box-arrow-in-right fs-15"></i>
                <span class="fw-semibold fs-13">Sign In to Dashboard</span>
              }
            </button>

          </form>

          <!-- Divider & Switch Link -->
          <div class="pt-3 border-top text-center mt-3">
            <span class="fs-12 text-muted">Are you a resident/tenant? </span>
            <a routerLink="/tenant-log-in" class="fs-12 fw-semibold text-primary text-decoration-none">
              Tenant Portal Login &rarr;
            </a>
          </div>

          <!-- Bottom Security Badge -->
          <div class="d-flex align-items-center justify-content-center gap-2 mt-4 pt-2 text-muted fs-11">
            <i class="bi bi-shield-check text-success"></i>
            <span>256-Bit SSL Encrypted & Secure Session</span>
          </div>

        </div>
      </div>

    </div>
  </main>

  <!-- Footer -->
  <footer class="login-footer text-center py-3 text-muted fs-11 position-relative z-2">
    <span>&copy; PG Management System. Designed for modern living & secure rent management.</span>
  </footer>

</div>`, styles: ["/* src/app/pages/log-in/log-in.component.css */\n.login-wrapper {\n  background-color: var(--background-color);\n  color: var(--text-color);\n  transition: background-color 0.3s ease;\n  position: relative;\n}\n.mesh-glow {\n  display: none;\n}\n.brand-logo-box {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: var(--gradient-bg);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);\n}\n.btn-theme-toggle {\n  background-color: var(--card-bg-subtle);\n  border: 1px solid var(--border-color);\n  color: var(--text-color);\n  transition: all 0.2s ease;\n}\n.btn-theme-toggle:hover {\n  border-color: var(--primary-color);\n  background-color: var(--primary-light);\n}\n.hero-badge-pill {\n  background-color: var(--primary-light);\n  border: 1px solid rgba(37, 99, 235, 0.25);\n}\n.status-pulse-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background-color: #2563eb;\n  box-shadow: 0 0 8px #2563eb;\n  animation: pulse 2s infinite;\n}\n@keyframes pulse {\n  0% {\n    transform: scale(0.95);\n    opacity: 0.8;\n  }\n  50% {\n    transform: scale(1.3);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.95);\n    opacity: 0.8;\n  }\n}\n.gradient-text {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #60a5fa 50%,\n      #06b6d4 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.gradient-text-emerald {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #34d399 50%,\n      #06b6d4 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.feature-glass-card {\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n  transition: all 0.25s ease;\n}\n.feature-glass-card:hover {\n  transform: translateX(4px);\n  border-color: var(--primary-color);\n  box-shadow: var(--shadow);\n}\n.feature-icon-box {\n  width: 42px;\n  height: 42px;\n  flex-shrink: 0;\n}\n.bg-blue-subtle {\n  background-color: var(--primary-light) !important;\n}\n.bg-emerald-subtle {\n  background-color: rgba(16, 185, 129, 0.15) !important;\n}\n.bg-cyan-subtle {\n  background-color: rgba(6, 182, 212, 0.15) !important;\n}\n.login-glass-card {\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-lg);\n}\n.role-switch-container {\n  background-color: var(--table-header-bg);\n  border: 1px solid var(--border-color);\n}\n.role-tab {\n  color: var(--text-muted-color);\n  transition: all 0.2s ease;\n}\n.role-tab.active {\n  background: var(--primary-color);\n  color: #ffffff !important;\n  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.35);\n}\n.btn-demo-pill {\n  background-color: var(--primary-light);\n  border: 1px solid rgba(79, 70, 229, 0.3);\n  color: var(--primary-color);\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.btn-demo-pill:hover {\n  background-color: var(--primary-color);\n  color: #ffffff;\n}\n.input-glass-group {\n  background-color: var(--input-bg);\n  border: 1px solid var(--input-border);\n  transition: all 0.2s ease;\n}\n.input-glass-group:focus-within {\n  border-color: var(--input-focus-border);\n  box-shadow: 0 0 0 3px var(--primary-light);\n}\n.input-glass-group input:focus {\n  outline: none;\n  box-shadow: none;\n}\n.btn-primary-gradient {\n  background: var(--gradient-bg);\n  color: #ffffff;\n  border: none;\n  font-weight: 600;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);\n}\n.btn-primary-gradient:hover:not(:disabled) {\n  opacity: 0.95;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.45);\n}\n.btn-primary-gradient:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.letter-spacing-1 {\n  letter-spacing: 0.06em;\n}\n.w-fit {\n  width: fit-content;\n}\n.max-w-6xl {\n  max-width: 1140px;\n}\n/*# sourceMappingURL=log-in.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: GlobalService }, { type: ThemeService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogInComponent, { className: "LogInComponent", filePath: "src/app/pages/log-in/log-in.component.ts", lineNumber: 17 });
})();

// src/app/pages/tenant-log-in/tenant-log-in.component.ts
function TenantLogInComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275text(2, " Please enter a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function TenantLogInComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275text(2, " Password is required ");
    \u0275\u0275elementEnd();
  }
}
function TenantLogInComponent_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 66);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Signing in...");
    \u0275\u0275elementEnd();
  }
}
function TenantLogInComponent_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 67);
    \u0275\u0275elementStart(1, "span", 68);
    \u0275\u0275text(2, "Enter Tenant Portal");
    \u0275\u0275elementEnd();
  }
}
var TenantLogInComponent = class _TenantLogInComponent {
  api;
  GF;
  themeService;
  router;
  loginForm;
  showPassword = false;
  loading = false;
  currentTheme = "dark";
  constructor(api, GF, themeService, router) {
    this.api = api;
    this.GF = GF;
    this.themeService = themeService;
    this.router = router;
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required)
    });
  }
  ngOnInit() {
    this.themeService.theme$.subscribe((t) => this.currentTheme = t);
  }
  toggleTheme() {
    const next = this.currentTheme === "dark" ? "light" : "dark";
    this.themeService.setTheme(next);
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  quickFillDemo() {
    this.loginForm.patchValue({
      email: "tenant@demo.com",
      password: "Tenant@123"
    });
    this.loginForm.markAllAsTouched();
    this.GF.showToast("Demo Tenant credentials filled!", "info");
  }
  onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.loading = true;
      this.api.postApi("tenant-login", this.loginForm.value).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.status) {
            localStorage.setItem("token", res.token);
            localStorage.setItem("user_role", "tenant");
            if (res.user) {
              localStorage.setItem("user_data", JSON.stringify(res.user));
            }
            this.GF.showToast(res.message, "success");
            this.router.navigate(["/dashboard"]);
          } else {
            this.GF.showToast(res.message, "danger");
          }
        },
        error: (err) => {
          this.loading = false;
          this.GF.showToast(err.error?.message || "Tenant login failed", "danger");
        }
      });
    }
  }
  static \u0275fac = function TenantLogInComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TenantLogInComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TenantLogInComponent, selectors: [["app-tenant-log-in"]], decls: 111, vars: 10, consts: [[1, "login-wrapper", "position-relative", "overflow-hidden", "min-vh-100", "d-flex", "flex-column", "justify-content-between"], [1, "mesh-glow", "mesh-glow-1"], [1, "mesh-glow", "mesh-glow-2"], [1, "mesh-glow", "mesh-glow-3"], [1, "login-header", "d-flex", "justify-content-between", "align-items-center", "px-4", "py-3", "position-relative", "z-3"], [1, "d-flex", "align-items-center", "gap-2"], [1, "brand-logo-box", "d-flex", "align-items-center", "justify-content-center", "shadow-sm", 2, "background", "linear-gradient(135deg, #059669 0%, #10b981 100%)"], [1, "bi", "bi-person-badge-fill", "text-white", "fs-5"], [1, "d-flex", "flex-column"], [1, "fw-bold", "fs-14", "text-heading", "letter-spacing-1"], [1, "fs-10", "text-muted"], [1, "btn", "btn-sm", "btn-theme-toggle", "d-flex", "align-items-center", "gap-1.5", "rounded-pill", "px-3", "py-1.5", 3, "click", "title"], [3, "ngClass"], [1, "fs-11", "fw-medium"], [1, "container-fluid", "d-flex", "flex-grow-1", "align-items-center", "justify-content-center", "px-3", "px-md-5", "py-4", "position-relative", "z-2"], [1, "row", "w-100", "max-w-6xl", "align-items-center", "justify-content-center", "g-4", "g-lg-5"], [1, "col-lg-6", "d-none", "d-lg-flex", "flex-column", "justify-content-center", "pe-xl-5"], [1, "hero-badge-pill", "d-inline-flex", "align-items-center", "gap-2", "px-3", "py-1.5", "rounded-pill", "mb-3", "w-fit"], [1, "status-pulse-dot", 2, "background-color", "#10b981"], [1, "fs-11", "fw-bold", "text-uppercase", "letter-spacing-1", "text-success"], [1, "display-6", "fw-extrabold", "text-heading", "mb-3", "tracking-tight"], [1, "gradient-text-emerald"], [1, "fs-14", "text-muted", "mb-4", "pe-lg-4", "lh-base"], [1, "d-flex", "flex-column", "gap-3", "mb-4"], [1, "feature-glass-card", "d-flex", "align-items-center", "gap-3", "p-3", "rounded-4"], [1, "feature-icon-box", "bg-emerald-subtle", "text-success", "rounded-3", "d-flex", "align-items-center", "justify-content-center"], [1, "bi", "bi-credit-card-2-front-fill", "fs-5"], [1, "fs-13", "d-block", "text-heading"], [1, "fs-11", "text-muted"], [1, "feature-icon-box", "bg-blue-subtle", "text-primary", "rounded-3", "d-flex", "align-items-center", "justify-content-center"], [1, "bi", "bi-file-earmark-check-fill", "fs-5"], [1, "feature-icon-box", "bg-cyan-subtle", "text-info", "rounded-3", "d-flex", "align-items-center", "justify-content-center"], [1, "bi", "bi-tools", "fs-5"], [1, "col-12", "col-md-8", "col-lg-6", "col-xl-5"], [1, "login-glass-card", "p-4", "p-sm-5", "rounded-4", "shadow-lg", "position-relative"], [1, "role-switch-container", "p-1", "rounded-pill", "mb-4", "d-flex"], ["routerLink", "/log-in", 1, "role-tab", "flex-fill", "text-center", "py-2", "rounded-pill", "text-decoration-none", "text-muted", "fw-semibold", "fs-12"], [1, "bi", "bi-building", "me-1"], ["routerLink", "/tenant-log-in", 1, "role-tab", "active", "flex-fill", "text-center", "py-2", "rounded-pill", "text-decoration-none", "fw-semibold", "fs-12"], [1, "bi", "bi-person", "me-1"], [1, "mb-4"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-1"], [1, "fw-bold", "text-heading", "mb-0", "fs-20"], ["type", "button", "title", "Auto-fill demo tenant credentials", 1, "btn", "btn-sm", "btn-demo-pill", "d-flex", "align-items-center", "gap-1", "rounded-pill", "px-2.5", "py-1", "fs-11", 3, "click"], [1, "bi", "bi-lightning-charge-fill", "text-warning"], [1, "fs-12", "text-muted", "mb-0"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "tenant-email", 1, "form-label", "fs-12", "fw-medium", "text-heading"], [1, "input-glass-group", "d-flex", "align-items-center", "rounded-3", "px-3", "py-2"], [1, "bi", "bi-envelope", "text-muted", "me-2", "fs-14"], ["id", "tenant-email", "type", "email", "formControlName", "email", "placeholder", "tenant@demo.com", "autocomplete", "email", 1, "form-control", "border-0", "bg-transparent", "p-0", "fs-13", "text-heading"], [1, "text-danger", "fs-11", "mt-1", "d-flex", "align-items-center", "gap-1"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1"], ["for", "tenant-password", 1, "form-label", "fs-12", "fw-medium", "text-heading", "mb-0"], [1, "bi", "bi-lock", "text-muted", "me-2", "fs-14"], ["id", "tenant-password", "formControlName", "password", "placeholder", "Enter password", "autocomplete", "current-password", 1, "form-control", "border-0", "bg-transparent", "p-0", "fs-13", "text-heading", 3, "type"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-sm", "text-muted", "p-0", "ms-2", 3, "click"], ["type", "submit", 1, "btn", "btn-primary-gradient", "w-100", "rounded-3", "py-2.5", "d-flex", "align-items-center", "justify-content-center", "gap-2", "shadow", "mb-3", 3, "disabled"], [1, "pt-3", "border-top", "text-center", "mt-3"], [1, "fs-12", "text-muted"], ["routerLink", "/log-in", 1, "fs-12", "fw-semibold", "text-primary", "text-decoration-none"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "mt-4", "pt-2", "text-muted", "fs-11"], [1, "bi", "bi-shield-check", "text-success"], [1, "login-footer", "text-center", "py-3", "text-muted", "fs-11", "position-relative", "z-2"], [1, "bi", "bi-exclamation-circle-fill"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "bi", "bi-box-arrow-in-right", "fs-15"], [1, "fw-semibold", "fs-13"]], template: function TenantLogInComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275elementStart(4, "header", 4)(5, "div", 5)(6, "div", 6);
      \u0275\u0275element(7, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 8)(9, "span", 9);
      \u0275\u0275text(10, "PG RESIDENT PORTAL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 10);
      \u0275\u0275text(12, "Tenant Self-Service Hub");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 5)(14, "button", 11);
      \u0275\u0275listener("click", function TenantLogInComponent_Template_button_click_14_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275element(15, "i", 12);
      \u0275\u0275elementStart(16, "span", 13);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "main", 14)(19, "div", 15)(20, "div", 16)(21, "div", 17);
      \u0275\u0275element(22, "span", 18);
      \u0275\u0275elementStart(23, "span", 19);
      \u0275\u0275text(24, "Resident Self-Service");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "h1", 20);
      \u0275\u0275text(26, " Welcome to Your ");
      \u0275\u0275element(27, "br");
      \u0275\u0275elementStart(28, "span", 21);
      \u0275\u0275text(29, "Comfortable Stay.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "p", 22);
      \u0275\u0275text(31, " Sign in to your resident portal to check your monthly rent status, pay securely via Razorpay with UPI/Cards, report Wi-Fi or maintenance issues, and download rent receipts. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 23)(33, "div", 24)(34, "div", 25);
      \u0275\u0275element(35, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div")(37, "strong", 27);
      \u0275\u0275text(38, "1-Click Razorpay Rent Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 28);
      \u0275\u0275text(40, "Pay rent via Google Pay, PhonePe, UPI, Card, or NetBanking anytime.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 24)(42, "div", 29);
      \u0275\u0275element(43, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div")(45, "strong", 27);
      \u0275\u0275text(46, "Instant WhatsApp Receipts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span", 28);
      \u0275\u0275text(48, "Generate verified digital payment receipts shareable straight to WhatsApp.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 24)(50, "div", 31);
      \u0275\u0275element(51, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div")(53, "strong", 27);
      \u0275\u0275text(54, "Hassle-Free Maintenance Requests");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "span", 28);
      \u0275\u0275text(56, "Raise tickets for Food, Water, Wi-Fi, and Electricity with live tracking.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(57, "div", 33)(58, "div", 34)(59, "div", 35)(60, "a", 36);
      \u0275\u0275element(61, "i", 37);
      \u0275\u0275text(62, " PG Owner ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "a", 38);
      \u0275\u0275element(64, "i", 39);
      \u0275\u0275text(65, " Tenant ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 40)(67, "div", 41)(68, "h3", 42);
      \u0275\u0275text(69, "Tenant Sign In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "button", 43);
      \u0275\u0275listener("click", function TenantLogInComponent_Template_button_click_70_listener() {
        return ctx.quickFillDemo();
      });
      \u0275\u0275element(71, "i", 44);
      \u0275\u0275elementStart(72, "span");
      \u0275\u0275text(73, "Demo Fill");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "p", 45);
      \u0275\u0275text(75, "Sign in with your registered phone or email to pay rent.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "form", 46);
      \u0275\u0275listener("ngSubmit", function TenantLogInComponent_Template_form_ngSubmit_76_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(77, "div", 47)(78, "label", 48);
      \u0275\u0275text(79, "Tenant Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 49);
      \u0275\u0275element(81, "i", 50)(82, "input", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275template(83, TenantLogInComponent_Conditional_83_Template, 3, 0, "div", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 40)(85, "div", 53)(86, "label", 54);
      \u0275\u0275text(87, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "span", 28);
      \u0275\u0275text(89, "Encrypted");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 49);
      \u0275\u0275element(91, "i", 55)(92, "input", 56);
      \u0275\u0275elementStart(93, "button", 57);
      \u0275\u0275listener("click", function TenantLogInComponent_Template_button_click_93_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275element(94, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(95, TenantLogInComponent_Conditional_95_Template, 3, 0, "div", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "button", 58);
      \u0275\u0275template(97, TenantLogInComponent_Conditional_97_Template, 3, 0)(98, TenantLogInComponent_Conditional_98_Template, 3, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 59)(100, "span", 60);
      \u0275\u0275text(101, "Are you a PG Landlord? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "a", 61);
      \u0275\u0275text(103, " PG Owner Portal \u2192 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div", 62);
      \u0275\u0275element(105, "i", 63);
      \u0275\u0275elementStart(106, "span");
      \u0275\u0275text(107, "256-Bit SSL Encrypted & Secure Resident Session");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(108, "footer", 64)(109, "span");
      \u0275\u0275text(110, "\xA9 PG Management System. Designed for modern living & secure rent management.");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_7_0;
      \u0275\u0275advance(14);
      \u0275\u0275property("title", ctx.currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.currentTheme === "dark" ? "bi bi-sun-fill text-warning" : "bi bi-moon-stars-fill text-primary");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentTheme === "dark" ? "Light Mode" : "Dark Mode");
      \u0275\u0275advance(59);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(((tmp_4_0 = ctx.loginForm.get("email")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.loginForm.get("email")) == null ? null : tmp_4_0.touched) ? 83 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.showPassword ? "bi bi-eye-slash" : "bi bi-eye");
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_7_0 = ctx.loginForm.get("password")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.loginForm.get("password")) == null ? null : tmp_7_0.touched) ? 95 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 97 : 98);
    }
  }, dependencies: [CommonModule, NgClass, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.login-wrapper[_ngcontent-%COMP%] {\n  background-color: var(--background-color);\n  color: var(--text-color);\n  transition: background-color 0.3s ease;\n  position: relative;\n}\n.mesh-glow[_ngcontent-%COMP%] {\n  display: none;\n}\n.brand-logo-box[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);\n}\n.btn-theme-toggle[_ngcontent-%COMP%] {\n  background-color: var(--card-bg-subtle);\n  border: 1px solid var(--border-color);\n  color: var(--text-color);\n  transition: all 0.2s ease;\n}\n.btn-theme-toggle[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n  background-color: var(--primary-light);\n}\n.hero-badge-pill[_ngcontent-%COMP%] {\n  background-color: rgba(16, 185, 129, 0.12);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n}\n.status-pulse-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  box-shadow: 0 0 8px #10b981;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(0.95);\n    opacity: 0.8;\n  }\n  50% {\n    transform: scale(1.3);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.95);\n    opacity: 0.8;\n  }\n}\n.gradient-text-emerald[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #34d399 50%,\n      #38bdf8 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.feature-glass-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n  transition: all 0.25s ease;\n}\n.feature-glass-card[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n  border-color: #10b981;\n  box-shadow: var(--shadow);\n}\n.feature-icon-box[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  flex-shrink: 0;\n}\n.bg-blue-subtle[_ngcontent-%COMP%] {\n  background-color: var(--primary-light) !important;\n}\n.bg-emerald-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(16, 185, 129, 0.15) !important;\n}\n.bg-cyan-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(6, 182, 212, 0.15) !important;\n}\n.login-glass-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-lg);\n}\n.role-switch-container[_ngcontent-%COMP%] {\n  background-color: var(--table-header-bg);\n  border: 1px solid var(--border-color);\n}\n.role-tab[_ngcontent-%COMP%] {\n  color: var(--text-muted-color);\n  transition: all 0.2s ease;\n}\n.role-tab.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #059669 0%,\n      #10b981 100%);\n  color: #ffffff !important;\n  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.35);\n}\n.btn-demo-pill[_ngcontent-%COMP%] {\n  background-color: rgba(16, 185, 129, 0.15);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  color: #10b981;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.btn-demo-pill[_ngcontent-%COMP%]:hover {\n  background-color: #10b981;\n  color: #ffffff;\n}\n.input-glass-group[_ngcontent-%COMP%] {\n  background-color: var(--input-bg);\n  border: 1px solid var(--input-border);\n  transition: all 0.2s ease;\n}\n.input-glass-group[_ngcontent-%COMP%]:focus-within {\n  border-color: #10b981;\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.18);\n}\n.input-glass-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.btn-primary-gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #059669 0%,\n      #10b981 100%);\n  color: #ffffff;\n  border: none;\n  font-weight: 600;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);\n}\n.btn-primary-gradient[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.95;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.45);\n}\n.btn-primary-gradient[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.letter-spacing-1[_ngcontent-%COMP%] {\n  letter-spacing: 0.06em;\n}\n.w-fit[_ngcontent-%COMP%] {\n  width: fit-content;\n}\n.max-w-6xl[_ngcontent-%COMP%] {\n  max-width: 1140px;\n}\n/*# sourceMappingURL=tenant-log-in.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantLogInComponent, [{
    type: Component,
    args: [{ selector: "app-tenant-log-in", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: `<div class="login-wrapper position-relative overflow-hidden min-vh-100 d-flex flex-column justify-content-between">

  <!-- Ambient Glowing Mesh Background -->
  <div class="mesh-glow mesh-glow-1"></div>
  <div class="mesh-glow mesh-glow-2"></div>
  <div class="mesh-glow mesh-glow-3"></div>

  <!-- Top Navigation Bar -->
  <header class="login-header d-flex justify-content-between align-items-center px-4 py-3 position-relative z-3">
    <div class="d-flex align-items-center gap-2">
      <div class="brand-logo-box d-flex align-items-center justify-content-center shadow-sm" style="background: linear-gradient(135deg, #059669 0%, #10b981 100%);">
        <i class="bi bi-person-badge-fill text-white fs-5"></i>
      </div>
      <div class="d-flex flex-column">
        <span class="fw-bold fs-14 text-heading letter-spacing-1">PG RESIDENT PORTAL</span>
        <span class="fs-10 text-muted">Tenant Self-Service Hub</span>
      </div>
    </div>

    <!-- Theme Switcher & Status -->
    <div class="d-flex align-items-center gap-2">
      <button class="btn btn-sm btn-theme-toggle d-flex align-items-center gap-1.5 rounded-pill px-3 py-1.5"
              (click)="toggleTheme()"
              [title]="currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
        <i [ngClass]="currentTheme === 'dark' ? 'bi bi-sun-fill text-warning' : 'bi bi-moon-stars-fill text-primary'"></i>
        <span class="fs-11 fw-medium">{{ currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode' }}</span>
      </button>
    </div>
  </header>

  <!-- Main Content Area -->
  <main class="container-fluid d-flex flex-grow-1 align-items-center justify-content-center px-3 px-md-5 py-4 position-relative z-2">
    <div class="row w-100 max-w-6xl align-items-center justify-content-center g-4 g-lg-5">

      <!-- Left Hero Showcase (Hidden on Mobile) -->
      <div class="col-lg-6 d-none d-lg-flex flex-column justify-content-center pe-xl-5">
        <div class="hero-badge-pill d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-3 w-fit">
          <span class="status-pulse-dot" style="background-color: #10b981;"></span>
          <span class="fs-11 fw-bold text-uppercase letter-spacing-1 text-success">Resident Self-Service</span>
        </div>

        <h1 class="display-6 fw-extrabold text-heading mb-3 tracking-tight">
          Welcome to Your <br>
          <span class="gradient-text-emerald">Comfortable Stay.</span>
        </h1>

        <p class="fs-14 text-muted mb-4 pe-lg-4 lh-base">
          Sign in to your resident portal to check your monthly rent status, pay securely via Razorpay with UPI/Cards, report Wi-Fi or maintenance issues, and download rent receipts.
        </p>

        <!-- Feature Highlight Pills -->
        <div class="d-flex flex-column gap-3 mb-4">
          <div class="feature-glass-card d-flex align-items-center gap-3 p-3 rounded-4">
            <div class="feature-icon-box bg-emerald-subtle text-success rounded-3 d-flex align-items-center justify-content-center">
              <i class="bi bi-credit-card-2-front-fill fs-5"></i>
            </div>
            <div>
              <strong class="fs-13 d-block text-heading">1-Click Razorpay Rent Payment</strong>
              <span class="fs-11 text-muted">Pay rent via Google Pay, PhonePe, UPI, Card, or NetBanking anytime.</span>
            </div>
          </div>

          <div class="feature-glass-card d-flex align-items-center gap-3 p-3 rounded-4">
            <div class="feature-icon-box bg-blue-subtle text-primary rounded-3 d-flex align-items-center justify-content-center">
              <i class="bi bi-file-earmark-check-fill fs-5"></i>
            </div>
            <div>
              <strong class="fs-13 d-block text-heading">Instant WhatsApp Receipts</strong>
              <span class="fs-11 text-muted">Generate verified digital payment receipts shareable straight to WhatsApp.</span>
            </div>
          </div>

          <div class="feature-glass-card d-flex align-items-center gap-3 p-3 rounded-4">
            <div class="feature-icon-box bg-cyan-subtle text-info rounded-3 d-flex align-items-center justify-content-center">
              <i class="bi bi-tools fs-5"></i>
            </div>
            <div>
              <strong class="fs-13 d-block text-heading">Hassle-Free Maintenance Requests</strong>
              <span class="fs-11 text-muted">Raise tickets for Food, Water, Wi-Fi, and Electricity with live tracking.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Login Form Card -->
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="login-glass-card p-4 p-sm-5 rounded-4 shadow-lg position-relative">

          <!-- Role Toggle Tabs -->
          <div class="role-switch-container p-1 rounded-pill mb-4 d-flex">
            <a routerLink="/log-in" class="role-tab flex-fill text-center py-2 rounded-pill text-decoration-none text-muted fw-semibold fs-12">
              <i class="bi bi-building me-1"></i> PG Owner
            </a>
            <a routerLink="/tenant-log-in" class="role-tab active flex-fill text-center py-2 rounded-pill text-decoration-none fw-semibold fs-12">
              <i class="bi bi-person me-1"></i> Tenant
            </a>
          </div>

          <!-- Form Header -->
          <div class="mb-4">
            <div class="d-flex align-items-center justify-content-between mb-1">
              <h3 class="fw-bold text-heading mb-0 fs-20">Tenant Sign In</h3>
              <button type="button" class="btn btn-sm btn-demo-pill d-flex align-items-center gap-1 rounded-pill px-2.5 py-1 fs-11"
                      (click)="quickFillDemo()"
                      title="Auto-fill demo tenant credentials">
                <i class="bi bi-lightning-charge-fill text-warning"></i>
                <span>Demo Fill</span>
              </button>
            </div>
            <p class="fs-12 text-muted mb-0">Sign in with your registered phone or email to pay rent.</p>
          </div>

          <!-- Form -->
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            
            <!-- Email Input -->
            <div class="mb-3">
              <label for="tenant-email" class="form-label fs-12 fw-medium text-heading">Tenant Email Address</label>
              <div class="input-glass-group d-flex align-items-center rounded-3 px-3 py-2">
                <i class="bi bi-envelope text-muted me-2 fs-14"></i>
                <input id="tenant-email" 
                       type="email" 
                       class="form-control border-0 bg-transparent p-0 fs-13 text-heading" 
                       formControlName="email" 
                       placeholder="tenant@demo.com"
                       autocomplete="email">
              </div>
              @if (loginForm.get('email')?.invalid && loginForm.get('email')?.touched) {
                <div class="text-danger fs-11 mt-1 d-flex align-items-center gap-1">
                  <i class="bi bi-exclamation-circle-fill"></i> Please enter a valid email address
                </div>
              }
            </div>

            <!-- Password Input with Eye Toggle -->
            <div class="mb-4">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <label for="tenant-password" class="form-label fs-12 fw-medium text-heading mb-0">Password</label>
                <span class="fs-11 text-muted">Encrypted</span>
              </div>
              <div class="input-glass-group d-flex align-items-center rounded-3 px-3 py-2">
                <i class="bi bi-lock text-muted me-2 fs-14"></i>
                <input id="tenant-password" 
                       [type]="showPassword ? 'text' : 'password'" 
                       class="form-control border-0 bg-transparent p-0 fs-13 text-heading" 
                       formControlName="password" 
                       placeholder="Enter password"
                       autocomplete="current-password">
                <button type="button" class="btn btn-sm text-muted p-0 ms-2" (click)="togglePasswordVisibility()" tabindex="-1">
                  <i [ngClass]="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                </button>
              </div>
              @if (loginForm.get('password')?.invalid && loginForm.get('password')?.touched) {
                <div class="text-danger fs-11 mt-1 d-flex align-items-center gap-1">
                  <i class="bi bi-exclamation-circle-fill"></i> Password is required
                </div>
              }
            </div>

            <!-- Submit Button -->
            <button class="btn btn-primary-gradient w-100 rounded-3 py-2.5 d-flex align-items-center justify-content-center gap-2 shadow mb-3"
                    type="submit" 
                    [disabled]="loginForm.invalid || loading">
              @if (loading) {
                <span class="spinner-border spinner-border-sm" role="status"></span>
                <span>Signing in...</span>
              } @else {
                <i class="bi bi-box-arrow-in-right fs-15"></i>
                <span class="fw-semibold fs-13">Enter Tenant Portal</span>
              }
            </button>

          </form>

          <!-- Divider & Switch Link -->
          <div class="pt-3 border-top text-center mt-3">
            <span class="fs-12 text-muted">Are you a PG Landlord? </span>
            <a routerLink="/log-in" class="fs-12 fw-semibold text-primary text-decoration-none">
              PG Owner Portal &rarr;
            </a>
          </div>

          <!-- Bottom Security Badge -->
          <div class="d-flex align-items-center justify-content-center gap-2 mt-4 pt-2 text-muted fs-11">
            <i class="bi bi-shield-check text-success"></i>
            <span>256-Bit SSL Encrypted & Secure Resident Session</span>
          </div>

        </div>
      </div>

    </div>
  </main>

  <!-- Footer -->
  <footer class="login-footer text-center py-3 text-muted fs-11 position-relative z-2">
    <span>&copy; PG Management System. Designed for modern living & secure rent management.</span>
  </footer>

</div>`, styles: ["/* src/app/pages/tenant-log-in/tenant-log-in.component.css */\n.login-wrapper {\n  background-color: var(--background-color);\n  color: var(--text-color);\n  transition: background-color 0.3s ease;\n  position: relative;\n}\n.mesh-glow {\n  display: none;\n}\n.brand-logo-box {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);\n}\n.btn-theme-toggle {\n  background-color: var(--card-bg-subtle);\n  border: 1px solid var(--border-color);\n  color: var(--text-color);\n  transition: all 0.2s ease;\n}\n.btn-theme-toggle:hover {\n  border-color: var(--primary-color);\n  background-color: var(--primary-light);\n}\n.hero-badge-pill {\n  background-color: rgba(16, 185, 129, 0.12);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n}\n.status-pulse-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  box-shadow: 0 0 8px #10b981;\n  animation: pulse 2s infinite;\n}\n@keyframes pulse {\n  0% {\n    transform: scale(0.95);\n    opacity: 0.8;\n  }\n  50% {\n    transform: scale(1.3);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.95);\n    opacity: 0.8;\n  }\n}\n.gradient-text-emerald {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #34d399 50%,\n      #38bdf8 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.feature-glass-card {\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n  transition: all 0.25s ease;\n}\n.feature-glass-card:hover {\n  transform: translateX(4px);\n  border-color: #10b981;\n  box-shadow: var(--shadow);\n}\n.feature-icon-box {\n  width: 42px;\n  height: 42px;\n  flex-shrink: 0;\n}\n.bg-blue-subtle {\n  background-color: var(--primary-light) !important;\n}\n.bg-emerald-subtle {\n  background-color: rgba(16, 185, 129, 0.15) !important;\n}\n.bg-cyan-subtle {\n  background-color: rgba(6, 182, 212, 0.15) !important;\n}\n.login-glass-card {\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-lg);\n}\n.role-switch-container {\n  background-color: var(--table-header-bg);\n  border: 1px solid var(--border-color);\n}\n.role-tab {\n  color: var(--text-muted-color);\n  transition: all 0.2s ease;\n}\n.role-tab.active {\n  background:\n    linear-gradient(\n      135deg,\n      #059669 0%,\n      #10b981 100%);\n  color: #ffffff !important;\n  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.35);\n}\n.btn-demo-pill {\n  background-color: rgba(16, 185, 129, 0.15);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  color: #10b981;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.btn-demo-pill:hover {\n  background-color: #10b981;\n  color: #ffffff;\n}\n.input-glass-group {\n  background-color: var(--input-bg);\n  border: 1px solid var(--input-border);\n  transition: all 0.2s ease;\n}\n.input-glass-group:focus-within {\n  border-color: #10b981;\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.18);\n}\n.input-glass-group input:focus {\n  outline: none;\n  box-shadow: none;\n}\n.btn-primary-gradient {\n  background:\n    linear-gradient(\n      135deg,\n      #059669 0%,\n      #10b981 100%);\n  color: #ffffff;\n  border: none;\n  font-weight: 600;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);\n}\n.btn-primary-gradient:hover:not(:disabled) {\n  opacity: 0.95;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.45);\n}\n.btn-primary-gradient:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.letter-spacing-1 {\n  letter-spacing: 0.06em;\n}\n.w-fit {\n  width: fit-content;\n}\n.max-w-6xl {\n  max-width: 1140px;\n}\n/*# sourceMappingURL=tenant-log-in.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: GlobalService }, { type: ThemeService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TenantLogInComponent, { className: "TenantLogInComponent", filePath: "src/app/pages/tenant-log-in/tenant-log-in.component.ts", lineNumber: 17 });
})();

// src/app/guards/dashboard-auth.guard.ts
var dashboardAuthGuard = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem("token");
  if (token && token !== "null" && token !== "undefined" && token.trim() !== "") {
    return true;
  }
  router.navigate(["/log-in"]);
  return false;
};

// src/app/guards/log-in-auth.guard.ts
var logInAuthGuard = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem("token");
  if (token && token !== "null" && token !== "undefined" && token.trim() !== "") {
    router.navigate(["/dashboard"]);
    return false;
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "log-in",
    pathMatch: "full"
  },
  {
    path: "log-in",
    component: LogInComponent,
    canActivate: [logInAuthGuard]
  },
  {
    path: "tenant-log-in",
    component: TenantLogInComponent,
    canActivate: [logInAuthGuard]
  },
  {
    path: "",
    loadComponent: () => import("./chunk-UM5GF6ML.js").then((m) => m.LayoutComponent),
    canActivate: [dashboardAuthGuard],
    children: [
      {
        path: "dashboard",
        title: "Dashboard",
        loadComponent: () => import("./chunk-JDFONHGW.js").then((m) => m.DashboardComponent)
      },
      {
        path: "pay-rent",
        title: "Pay Rent",
        loadComponent: () => import("./chunk-XAV3JTJZ.js").then((m) => m.PayRentComponent)
      },
      {
        path: "client-master",
        title: "Client Master",
        loadComponent: () => import("./chunk-YNLGG4YP.js").then((m) => m.ClientComponent)
      },
      {
        path: "property-master",
        title: "Property Master",
        loadComponent: () => import("./chunk-6JNZMXUM.js").then((m) => m.PropertyComponent)
      },
      {
        path: "rooms",
        title: "Rooms",
        loadComponent: () => import("./chunk-DU7QMKQY.js").then((m) => m.RoomsComponent)
      },
      {
        path: "tenant",
        title: "Tenant Directory",
        loadComponent: () => import("./chunk-BJ7DMFU3.js").then((m) => m.TenantComponent)
      },
      {
        path: "complaints",
        title: "Complaints",
        loadComponent: () => import("./chunk-FTSN7OCN.js").then((m) => m.ComplaintsComponent)
      },
      {
        path: "setting",
        title: "Settings",
        loadComponent: () => import("./chunk-QR55ZLMJ.js").then((m) => m.SettingComponent)
      }
    ]
  },
  {
    path: "**",
    redirectTo: "log-in"
  }
];

// src/app/interceptors/auth.interceptor.ts
var addHeaderInterceptor = (req, next) => {
  const token = localStorage.getItem("token");
  const newReq = req.clone({
    headers: req.headers.set("Authorization", `Bearer ${token}`)
  });
  return next(newReq);
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([addHeaderInterceptor]))
  ]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "pgms";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet], template: "<router-outlet></router-outlet>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
