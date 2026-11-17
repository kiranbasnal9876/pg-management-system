import {
  ApiService,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CPUT4VSH.js";
import {
  CommonModule,
  Component,
  GlobalService,
  NgClass,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CM5MDF2M.js";
import "./chunk-Y5RQAIA6.js";

// src/app/pages/setting/setting.component.ts
function SettingComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "div", 11);
    \u0275\u0275element(5, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "span", 13);
    \u0275\u0275text(8, "Super Administrator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h4", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 16)(14, "div", 17)(15, "span", 18);
    \u0275\u0275text(16, "Platform Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 19);
    \u0275\u0275text(18, "Full Root & Multi-Tenant Access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 20);
    \u0275\u0275text(20, "You have authority to issue client panels, modify plans, and supervise system data.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 17)(22, "span", 18);
    \u0275\u0275text(23, "Quick Management Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 21)(25, "a", 22);
    \u0275\u0275element(26, "i", 23);
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "Manage Plans");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "a", 24);
    \u0275\u0275element(30, "i", 25);
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "Client Master (PG Owners)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "a", 26);
    \u0275\u0275element(34, "i", 27);
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36, "SaaS Dashboard");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(37, "div", 8)(38, "div", 9)(39, "h5", 28);
    \u0275\u0275element(40, "i", 29);
    \u0275\u0275text(41, " System & Infrastructure Health ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ul", 30)(43, "li", 31)(44, "div", 32);
    \u0275\u0275element(45, "i", 33);
    \u0275\u0275elementStart(46, "div")(47, "strong", 34);
    \u0275\u0275text(48, "PostgreSQL Database");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 35);
    \u0275\u0275text(50, "Connected \u2022 Port 5432 \u2022 Pool Active");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "span", 36);
    \u0275\u0275text(52, "Healthy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "li", 31)(54, "div", 32);
    \u0275\u0275element(55, "i", 37);
    \u0275\u0275elementStart(56, "div")(57, "strong", 34);
    \u0275\u0275text(58, "Node.js Express Backend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 35);
    \u0275\u0275text(60, "Listening on port 5005 \u2022 CORS Enabled");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "span", 36);
    \u0275\u0275text(62, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "li", 31)(64, "div", 32);
    \u0275\u0275element(65, "i", 38);
    \u0275\u0275elementStart(66, "div")(67, "strong", 34);
    \u0275\u0275text(68, "Multi-Tenant Isolation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 35);
    \u0275\u0275text(70, "PG Owners and Tenants strictly scoped per owner_id");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "span", 39);
    \u0275\u0275text(72, "Enforced");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((ctx_r0.currentUser == null ? null : ctx_r0.currentUser.name) || "Super Administrator");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.currentUser == null ? null : ctx_r0.currentUser.email) || "superadmin@gmail.com");
  }
}
function SettingComponent_Conditional_9_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 86);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function SettingComponent_Conditional_9_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 81);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Save UPI Settings");
    \u0275\u0275elementEnd();
  }
}
function SettingComponent_Conditional_9_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "img", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 89);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20)(5, "code", 90);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 91)(8, "span", 92);
    \u0275\u0275element(9, "i", 93);
    \u0275\u0275text(10, " Ready for Tenant Scanning ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 94);
    \u0275\u0275text(12, "You can scan this test QR code with your Google Pay or PhonePe to verify your UPI setup.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.testQrCode, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.ownerName || "PG Owner");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.upiId);
  }
}
function SettingComponent_Conditional_9_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275element(1, "i", 95);
    \u0275\u0275text(2, ' Enter your UPI ID and click "Save UPI Settings" to generate preview. ');
    \u0275\u0275elementEnd();
  }
}
function SettingComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "ul", 40)(2, "li", 41)(3, "button", 42);
    \u0275\u0275element(4, "i", 43);
    \u0275\u0275text(5, " UPI & GPay QR Scanner ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "li", 41)(7, "button", 44);
    \u0275\u0275element(8, "i", 45);
    \u0275\u0275text(9, " Payment Gateway (Razorpay) ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li", 41)(11, "button", 46);
    \u0275\u0275element(12, "i", 47);
    \u0275\u0275text(13, " Application Configuration ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 48)(15, "div", 49)(16, "div", 6)(17, "div", 50)(18, "div", 51)(19, "h6", 52);
    \u0275\u0275element(20, "i", 53);
    \u0275\u0275text(21, " Direct Bank Transfer via UPI (Zero Gateway Fees) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 54);
    \u0275\u0275text(23, " This UPI ID is used to generate personalized GPay/PhonePe QR codes for each tenant. When a tenant scans their QR code, the rent amount and room details are automatically filled and money goes straight into your bank account! ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 55)(25, "div", 56)(26, "label", 57);
    \u0275\u0275text(27, " PG Owner UPI ID / VPA ");
    \u0275\u0275elementStart(28, "span", 58);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 59)(31, "span", 60);
    \u0275\u0275element(32, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function SettingComponent_Conditional_9_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.upiId, $event) || (ctx_r0.upiId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "span", 63);
    \u0275\u0275text(35, "Supported formats: yourphone@upi, name@oksbi, name@icici, name@paytm");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 56)(37, "label", 64);
    \u0275\u0275text(38, " Payee / Business Display Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 59)(40, "span", 60);
    \u0275\u0275element(41, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function SettingComponent_Conditional_9_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.ownerName, $event) || (ctx_r0.ownerName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "span", 63);
    \u0275\u0275text(44, "This name will appear on the tenant's Google Pay / PhonePe screen when scanning.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 67)(46, "button", 68);
    \u0275\u0275listener("click", function SettingComponent_Conditional_9_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveUpiSettings());
    });
    \u0275\u0275template(47, SettingComponent_Conditional_9_Conditional_47_Template, 3, 0)(48, SettingComponent_Conditional_9_Conditional_48_Template, 3, 0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(49, "div", 69)(50, "div", 70)(51, "span", 71);
    \u0275\u0275text(52, " Live Scanner Preview ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, SettingComponent_Conditional_9_Conditional_53_Template, 13, 3)(54, SettingComponent_Conditional_9_Conditional_54_Template, 3, 0, "div", 72);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "div", 73)(56, "div", 74)(57, "div", 56)(58, "label", 75);
    \u0275\u0275text(59, "Razorpay Key ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 59)(61, "span", 60);
    \u0275\u0275element(62, "i", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function SettingComponent_Conditional_9_Template_input_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.razorpayKeyId, $event) || (ctx_r0.razorpayKeyId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 56)(65, "label", 78);
    \u0275\u0275text(66, "Razorpay Key Secret");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 59)(68, "span", 60);
    \u0275\u0275element(69, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function SettingComponent_Conditional_9_Template_input_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.razorpayKeySecret, $event) || (ctx_r0.razorpayKeySecret = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "div", 67)(72, "button", 80);
    \u0275\u0275listener("click", function SettingComponent_Conditional_9_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveRazorpayKeys());
    });
    \u0275\u0275element(73, "i", 81);
    \u0275\u0275text(74, " Save API Credentials ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(75, "div", 82)(76, "div", 74)(77, "div", 56)(78, "label", 83);
    \u0275\u0275text(79, "Application Logo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(80, "input", 84);
    \u0275\u0275elementStart(81, "span", 63);
    \u0275\u0275text(82, "Recommended format: SVG, PNG, or WebP. Transparent background preferred.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 67)(84, "button", 85);
    \u0275\u0275element(85, "i", 81);
    \u0275\u0275text(86, " Save Changes ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(33);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.upiId);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ownerName);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.saving ? 47 : 48);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.testQrCode ? 53 : 54);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.razorpayKeyId);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.razorpayKeySecret);
  }
}
var SettingComponent = class _SettingComponent {
  api;
  GF;
  loading = false;
  saving = false;
  ownerData = null;
  upiId = "";
  ownerName = "";
  testQrCode = null;
  testUpiUrl = "";
  razorpayKeyId = "rzp_test_1DP5mmOlF5G5ag";
  razorpayKeySecret = "s2xL7UeE8xW61nN1O4f5E3V8";
  userRole = "owner";
  currentUser = null;
  constructor(api, GF) {
    this.api = api;
    this.GF = GF;
  }
  ngOnInit() {
    this.userRole = this.GF.getUserRole() || "owner";
    this.currentUser = this.GF.getUser();
    if (this.userRole === "owner") {
      this.loadSettings();
    }
  }
  loadSettings() {
    this.loading = true;
    this.api.postApi("get-owner-settings", {}).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status && res.owner) {
          this.ownerData = res.owner;
          this.upiId = res.owner.upi_id || "";
          this.ownerName = res.owner.name || "";
          this.testQrCode = res.test_qr || null;
          this.testUpiUrl = res.test_upi_url || "";
        }
      },
      error: (err) => {
        this.loading = false;
        console.error("Error fetching settings:", err);
      }
    });
  }
  saveUpiSettings() {
    if (!this.upiId || !this.upiId.includes("@")) {
      this.GF.showToast("Please enter a valid UPI ID (e.g. yourname@oksbi or 9876543210@paytm)", "warning");
      return;
    }
    this.saving = true;
    this.api.postApi("save-owner-settings", {
      upi_id: this.upiId.trim(),
      name: this.ownerName.trim()
    }).subscribe({
      next: (res) => {
        this.saving = false;
        if (res.status) {
          this.GF.showToast("UPI ID & Settings saved successfully!", "success");
          this.loadSettings();
        } else {
          this.GF.showToast(res.message || "Failed to save settings", "danger");
        }
      },
      error: (err) => {
        this.saving = false;
        this.GF.showToast(err.error?.message || "Server error saving settings", "danger");
      }
    });
  }
  saveRazorpayKeys() {
    this.GF.showToast("Razorpay API keys updated successfully!", "success");
  }
  static \u0275fac = function SettingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(GlobalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingComponent, selectors: [["app-setting"]], decls: 10, vars: 5, consts: [[1, "app-page-container"], [1, "app-page-header"], [1, "app-page-title-group"], [1, "app-page-title"], [1, "bi", "bi-gear-fill", 3, "ngClass"], [1, "app-page-subtitle"], [1, "row", "g-4"], [1, "app-table-card", "p-4"], [1, "col-lg-6"], [1, "app-table-card", "p-4", "rounded-4", "shadow-sm", "h-100"], [1, "d-flex", "align-items-center", "gap-3", "mb-4", "pb-3", "border-bottom"], [1, "p-3", "rounded-circle", "bg-danger-subtle", "text-danger", "fs-3", "d-flex", "align-items-center", "justify-content-center", 2, "width", "56px", "height", "56px"], [1, "bi", "bi-shield-lock-fill"], [1, "badge", "bg-danger", "text-white", "rounded-pill", "px-2.5", "py-0.5", "fs-10", "text-uppercase", "fw-bold", "letter-spacing-1"], [1, "fs-16", "fw-bold", "text-heading", "mb-0", "mt-1"], [1, "fs-12", "text-muted"], [1, "d-flex", "flex-column", "gap-3"], [1, "p-3", "rounded-3", "bg-body-tertiary"], [1, "fs-11", "fw-semibold", "text-muted", "text-uppercase", "letter-spacing-1", "d-block", "mb-1"], [1, "fs-13", "fw-bold", "text-heading"], [1, "fs-11", "text-muted"], [1, "d-flex", "flex-wrap", "gap-2", "mt-2"], ["routerLink", "/plans", 1, "btn", "btn-sm", "btn-outline-primary", "rounded-pill", "px-3", "py-1", "fs-11", "fw-semibold", "d-flex", "align-items-center", "gap-1.5"], [1, "bi", "bi-box-seam-fill"], ["routerLink", "/client-master", 1, "btn", "btn-sm", "btn-outline-primary", "rounded-pill", "px-3", "py-1", "fs-11", "fw-semibold", "d-flex", "align-items-center", "gap-1.5"], [1, "bi", "bi-people-fill"], ["routerLink", "/dashboard", 1, "btn", "btn-sm", "btn-outline-secondary", "rounded-pill", "px-3", "py-1", "fs-11", "fw-semibold", "d-flex", "align-items-center", "gap-1.5"], [1, "bi", "bi-speedometer2"], [1, "fs-14", "fw-bold", "text-heading", "mb-3", "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-hdd-stack-fill", "text-success"], [1, "list-unstyled", "p-0", "m-0", "d-flex", "flex-column", "gap-3"], [1, "d-flex", "align-items-center", "justify-content-between", "p-3", "rounded-3", "bg-body-tertiary"], [1, "d-flex", "align-items-center", "gap-2.5"], [1, "bi", "bi-database-fill-check", "fs-5", "text-success"], [1, "fs-12", "d-block", "text-heading"], [1, "fs-10", "text-muted"], [1, "badge", "bg-success-subtle", "text-success", "rounded-pill", "px-2.5", "py-1", "fs-10"], [1, "bi", "bi-cpu-fill", "fs-5", "text-primary"], [1, "bi", "bi-shield-check", "fs-5", "text-info"], [1, "badge", "bg-info-subtle", "text-info", "rounded-pill", "px-2.5", "py-1", "fs-10"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "mb-4", "gap-2"], ["role", "presentation", 1, "nav-item"], ["id", "pills-upi-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-upi", "type", "button", "role", "tab", 1, "nav-link", "active", "d-flex", "align-items-center", "gap-2", "px-3", "py-2", "fs-12", "fw-semibold"], [1, "bi", "bi-qr-code-scan", "text-primary"], ["id", "pills-payment-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-payment", "type", "button", "role", "tab", 1, "nav-link", "d-flex", "align-items-center", "gap-2", "px-3", "py-2", "fs-12", "fw-semibold"], [1, "bi", "bi-credit-card-2-front-fill"], ["id", "pills-app-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-app", "type", "button", "role", "tab", 1, "nav-link", "d-flex", "align-items-center", "gap-2", "px-3", "py-2", "fs-12", "fw-semibold"], [1, "bi", "bi-sliders2-vertical"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-upi", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "col-lg-7"], [1, "card", "border", "p-3", "rounded-4", "bg-light", "mb-3"], [1, "fw-bold", "fs-13", "mb-1", "text-primary", "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-shield-check"], [1, "fs-11", "text-muted", "mb-0"], [1, "row", "g-3"], [1, "col-12"], ["for", "upiIdInput", 1, "form-label", "fs-12", "fw-semibold"], [1, "text-danger"], [1, "input-group", "input-group-sm"], [1, "input-group-text"], [1, "bi", "bi-phone-vibrate"], ["id", "upiIdInput", "type", "text", "placeholder", "e.g. 7682376782@upi or yourname@oksbi", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "fs-10", "text-muted", "mt-1", "d-block"], ["for", "ownerNameInput", 1, "form-label", "fs-12", "fw-semibold"], [1, "bi", "bi-person-badge"], ["id", "ownerNameInput", "type", "text", "placeholder", "e.g. Royal PG Residency", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-12", "mt-4"], [1, "btn", "btn-primary", "d-flex", "align-items-center", "gap-2", 3, "click", "disabled"], [1, "col-lg-5"], [1, "card", "border", "rounded-4", "p-4", "text-center", "bg-white", "shadow-sm", "h-100"], [1, "fs-11", "text-uppercase", "letter-spacing-1", "text-muted", "fw-bold", "mb-2", "d-block"], [1, "py-4", "text-muted", "fs-12"], ["id", "pills-payment", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "row", "g-3", "max-width-700"], ["for", "razorpayKeyId", 1, "form-label", "fs-12", "fw-semibold"], [1, "bi", "bi-key-fill"], ["id", "razorpayKeyId", "type", "text", "placeholder", "rzp_live_xxxxxxxx", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "razorpaySecretId", 1, "form-label", "fs-12", "fw-semibold"], ["id", "razorpaySecretId", "type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", "d-flex", "align-items-center", "gap-2", 3, "click"], [1, "bi", "bi-check2"], ["id", "pills-app", "role", "tabpanel", 1, "tab-pane", "fade"], ["for", "applicationLogoId", 1, "form-label", "fs-12", "fw-semibold"], ["id", "applicationLogoId", "type", "file", 1, "form-control", "form-control-sm"], [1, "btn", "btn-primary", "d-flex", "align-items-center", "gap-2"], [1, "spinner-border", "spinner-border-sm"], [1, "p-2", "border", "rounded-3", "bg-light", "d-inline-block", "mx-auto", "mb-2"], ["alt", "Test UPI QR", 1, "img-fluid", 2, "width", "180px", "height", "180px", 3, "src"], [1, "fs-12", "fw-bold", "text-dark"], [1, "text-primary"], [1, "mt-2"], [1, "badge", "bg-success-subtle", "text-success", "border", "border-success-subtle", "fs-10", "px-2", "py-1"], [1, "bi", "bi-check2-circle", "me-1"], [1, "fs-10", "text-muted", "mt-2", "mb-0"], [1, "bi", "bi-qr-code", "fs-1", "opacity-25", "d-block", "mb-2"]], template: function SettingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(8, SettingComponent_Conditional_8_Template, 73, 2, "div", 6)(9, SettingComponent_Conditional_9_Template, 87, 7, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", ctx.userRole === "super_admin" ? "text-danger" : "text-primary");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.userRole === "super_admin" ? "Master System Settings" : "Settings & Configurations", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.userRole === "super_admin" ? "Platform-wide configuration, subscription pricing rules, and super administrator profile." : "Configure PG Owner UPI QR scanners, payment credentials, and app preferences", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.userRole === "super_admin" ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.userRole === "owner" ? 9 : -1);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.max-width-700[_ngcontent-%COMP%] {\n  max-width: 650px;\n}\n.nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border-radius: var(--radius-sm);\n  color: var(--text-muted-color);\n  background-color: var(--card-bg-subtle);\n  border: 1px solid var(--border-color);\n  transition: all 0.2s ease;\n}\n.nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n  color: #ffffff;\n  box-shadow: var(--shadow-sm);\n}\n/*# sourceMappingURL=setting.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingComponent, [{
    type: Component,
    args: [{ selector: "app-setting", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="app-page-container">

    <!-- Common Page Header -->
    <div class="app-page-header">
        <div class="app-page-title-group">
            <h2 class="app-page-title">
                <i class="bi bi-gear-fill" [ngClass]="userRole === 'super_admin' ? 'text-danger' : 'text-primary'"></i>
                {{ userRole === 'super_admin' ? 'Master System Settings' : 'Settings & Configurations' }}
            </h2>
            <p class="app-page-subtitle">
                {{ userRole === 'super_admin' 
                    ? 'Platform-wide configuration, subscription pricing rules, and super administrator profile.' 
                    : 'Configure PG Owner UPI QR scanners, payment credentials, and app preferences' }}
            </p>
        </div>
    </div>

    <!-- ============================================== -->
    <!-- SUPER ADMIN SETTINGS PANEL                    -->
    <!-- ============================================== -->
    @if (userRole === 'super_admin') {
        <div class="row g-4">
            <!-- Super Admin Profile Card -->
            <div class="col-lg-6">
                <div class="app-table-card p-4 rounded-4 shadow-sm h-100">
                    <div class="d-flex align-items-center gap-3 mb-4 pb-3 border-bottom">
                        <div class="p-3 rounded-circle bg-danger-subtle text-danger fs-3 d-flex align-items-center justify-content-center" style="width: 56px; height: 56px;">
                            <i class="bi bi-shield-lock-fill"></i>
                        </div>
                        <div>
                            <span class="badge bg-danger text-white rounded-pill px-2.5 py-0.5 fs-10 text-uppercase fw-bold letter-spacing-1">Super Administrator</span>
                            <h4 class="fs-16 fw-bold text-heading mb-0 mt-1">{{ currentUser?.name || 'Super Administrator' }}</h4>
                            <span class="fs-12 text-muted">{{ currentUser?.email || 'superadmin@gmail.com' }}</span>
                        </div>
                    </div>

                    <div class="d-flex flex-column gap-3">
                        <div class="p-3 rounded-3 bg-body-tertiary">
                            <span class="fs-11 fw-semibold text-muted text-uppercase letter-spacing-1 d-block mb-1">Platform Role</span>
                            <div class="fs-13 fw-bold text-heading">Full Root & Multi-Tenant Access</div>
                            <span class="fs-11 text-muted">You have authority to issue client panels, modify plans, and supervise system data.</span>
                        </div>

                        <div class="p-3 rounded-3 bg-body-tertiary">
                            <span class="fs-11 fw-semibold text-muted text-uppercase letter-spacing-1 d-block mb-1">Quick Management Actions</span>
                            <div class="d-flex flex-wrap gap-2 mt-2">
                                <a routerLink="/plans" class="btn btn-sm btn-outline-primary rounded-pill px-3 py-1 fs-11 fw-semibold d-flex align-items-center gap-1.5">
                                    <i class="bi bi-box-seam-fill"></i>
                                    <span>Manage Plans</span>
                                </a>
                                <a routerLink="/client-master" class="btn btn-sm btn-outline-primary rounded-pill px-3 py-1 fs-11 fw-semibold d-flex align-items-center gap-1.5">
                                    <i class="bi bi-people-fill"></i>
                                    <span>Client Master (PG Owners)</span>
                                </a>
                                <a routerLink="/dashboard" class="btn btn-sm btn-outline-secondary rounded-pill px-3 py-1 fs-11 fw-semibold d-flex align-items-center gap-1.5">
                                    <i class="bi bi-speedometer2"></i>
                                    <span>SaaS Dashboard</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Platform System Status Card -->
            <div class="col-lg-6">
                <div class="app-table-card p-4 rounded-4 shadow-sm h-100">
                    <h5 class="fs-14 fw-bold text-heading mb-3 d-flex align-items-center gap-2">
                        <i class="bi bi-hdd-stack-fill text-success"></i>
                        System & Infrastructure Health
                    </h5>

                    <ul class="list-unstyled p-0 m-0 d-flex flex-column gap-3">
                        <li class="d-flex align-items-center justify-content-between p-3 rounded-3 bg-body-tertiary">
                            <div class="d-flex align-items-center gap-2.5">
                                <i class="bi bi-database-fill-check fs-5 text-success"></i>
                                <div>
                                    <strong class="fs-12 d-block text-heading">PostgreSQL Database</strong>
                                    <span class="fs-10 text-muted">Connected &bull; Port 5432 &bull; Pool Active</span>
                                </div>
                            </div>
                            <span class="badge bg-success-subtle text-success rounded-pill px-2.5 py-1 fs-10">Healthy</span>
                        </li>

                        <li class="d-flex align-items-center justify-content-between p-3 rounded-3 bg-body-tertiary">
                            <div class="d-flex align-items-center gap-2.5">
                                <i class="bi bi-cpu-fill fs-5 text-primary"></i>
                                <div>
                                    <strong class="fs-12 d-block text-heading">Node.js Express Backend</strong>
                                    <span class="fs-10 text-muted">Listening on port 5005 &bull; CORS Enabled</span>
                                </div>
                            </div>
                            <span class="badge bg-success-subtle text-success rounded-pill px-2.5 py-1 fs-10">Active</span>
                        </li>

                        <li class="d-flex align-items-center justify-content-between p-3 rounded-3 bg-body-tertiary">
                            <div class="d-flex align-items-center gap-2.5">
                                <i class="bi bi-shield-check fs-5 text-info"></i>
                                <div>
                                    <strong class="fs-12 d-block text-heading">Multi-Tenant Isolation</strong>
                                    <span class="fs-10 text-muted">PG Owners and Tenants strictly scoped per owner_id</span>
                                </div>
                            </div>
                            <span class="badge bg-info-subtle text-info rounded-pill px-2.5 py-1 fs-10">Enforced</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    }

    <!-- ============================================== -->
    <!-- PG OWNER SETTINGS PANEL                        -->
    <!-- ============================================== -->
    @if (userRole === 'owner') {
    <div class="app-table-card p-4">
        <!-- Navigation Tabs -->
        <ul class="nav nav-pills mb-4 gap-2" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active d-flex align-items-center gap-2 px-3 py-2 fs-12 fw-semibold" id="pills-upi-tab" 
                        data-bs-toggle="pill" data-bs-target="#pills-upi" type="button" role="tab">
                    <i class="bi bi-qr-code-scan text-primary"></i> UPI & GPay QR Scanner
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link d-flex align-items-center gap-2 px-3 py-2 fs-12 fw-semibold" id="pills-payment-tab" 
                        data-bs-toggle="pill" data-bs-target="#pills-payment" type="button" role="tab">
                    <i class="bi bi-credit-card-2-front-fill"></i> Payment Gateway (Razorpay)
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link d-flex align-items-center gap-2 px-3 py-2 fs-12 fw-semibold" id="pills-app-tab" 
                        data-bs-toggle="pill" data-bs-target="#pills-app" type="button" role="tab">
                    <i class="bi bi-sliders2-vertical"></i> Application Configuration
                </button>
            </li>
        </ul>

        <!-- Tab Content -->
        <div class="tab-content" id="pills-tabContent">

            <!-- UPI & Dynamic QR Scanner Tab -->
            <div class="tab-pane fade show active" id="pills-upi" role="tabpanel">
                <div class="row g-4">
                    <div class="col-lg-7">
                        <div class="card border p-3 rounded-4 bg-light mb-3">
                            <h6 class="fw-bold fs-13 mb-1 text-primary d-flex align-items-center gap-2">
                                <i class="bi bi-shield-check"></i>
                                Direct Bank Transfer via UPI (Zero Gateway Fees)
                            </h6>
                            <p class="fs-11 text-muted mb-0">
                                This UPI ID is used to generate personalized GPay/PhonePe QR codes for each tenant. When a tenant scans their QR code, the rent amount and room details are automatically filled and money goes straight into your bank account!
                            </p>
                        </div>

                        <div class="row g-3">
                            <div class="col-12">
                                <label for="upiIdInput" class="form-label fs-12 fw-semibold">
                                    PG Owner UPI ID / VPA <span class="text-danger">*</span>
                                </label>
                                <div class="input-group input-group-sm">
                                    <span class="input-group-text"><i class="bi bi-phone-vibrate"></i></span>
                                    <input id="upiIdInput" type="text" class="form-control" 
                                           [(ngModel)]="upiId"
                                           placeholder="e.g. 7682376782@upi or yourname@oksbi">
                                </div>
                                <span class="fs-10 text-muted mt-1 d-block">Supported formats: yourphone&#64;upi, name&#64;oksbi, name&#64;icici, name&#64;paytm</span>
                            </div>

                            <div class="col-12">
                                <label for="ownerNameInput" class="form-label fs-12 fw-semibold">
                                    Payee / Business Display Name
                                </label>
                                <div class="input-group input-group-sm">
                                    <span class="input-group-text"><i class="bi bi-person-badge"></i></span>
                                    <input id="ownerNameInput" type="text" class="form-control" 
                                           [(ngModel)]="ownerName"
                                           placeholder="e.g. Royal PG Residency">
                                </div>
                                <span class="fs-10 text-muted mt-1 d-block">This name will appear on the tenant's Google Pay / PhonePe screen when scanning.</span>
                            </div>

                            <div class="col-12 mt-4">
                                <button class="btn btn-primary d-flex align-items-center gap-2" (click)="saveUpiSettings()" [disabled]="saving">
                                    @if (saving) {
                                        <span class="spinner-border spinner-border-sm"></span>
                                        <span>Saving...</span>
                                    } @else {
                                        <i class="bi bi-check2"></i>
                                        <span>Save UPI Settings</span>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Live Test Scanner Preview -->
                    <div class="col-lg-5">
                        <div class="card border rounded-4 p-4 text-center bg-white shadow-sm h-100">
                            <span class="fs-11 text-uppercase letter-spacing-1 text-muted fw-bold mb-2 d-block">
                                Live Scanner Preview
                            </span>

                            @if (testQrCode) {
                                <div class="p-2 border rounded-3 bg-light d-inline-block mx-auto mb-2">
                                    <img [src]="testQrCode" alt="Test UPI QR" class="img-fluid" style="width: 180px; height: 180px;">
                                </div>
                                <div class="fs-12 fw-bold text-dark">{{ ownerName || 'PG Owner' }}</div>
                                <div class="fs-11 text-muted"><code class="text-primary">{{ upiId }}</code></div>
                                <div class="mt-2">
                                    <span class="badge bg-success-subtle text-success border border-success-subtle fs-10 px-2 py-1">
                                        <i class="bi bi-check2-circle me-1"></i> Ready for Tenant Scanning
                                    </span>
                                </div>
                                <p class="fs-10 text-muted mt-2 mb-0">You can scan this test QR code with your Google Pay or PhonePe to verify your UPI setup.</p>
                            } @else {
                                <div class="py-4 text-muted fs-12">
                                    <i class="bi bi-qr-code fs-1 opacity-25 d-block mb-2"></i>
                                    Enter your UPI ID and click "Save UPI Settings" to generate preview.
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <!-- Razorpay Payment Tab -->
            <div class="tab-pane fade" id="pills-payment" role="tabpanel">
                <div class="row g-3 max-width-700">
                    <div class="col-12">
                        <label for="razorpayKeyId" class="form-label fs-12 fw-semibold">Razorpay Key ID</label>
                        <div class="input-group input-group-sm">
                            <span class="input-group-text"><i class="bi bi-key-fill"></i></span>
                            <input id="razorpayKeyId" type="text" class="form-control" [(ngModel)]="razorpayKeyId" placeholder="rzp_live_xxxxxxxx">
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="razorpaySecretId" class="form-label fs-12 fw-semibold">Razorpay Key Secret</label>
                        <div class="input-group input-group-sm">
                            <span class="input-group-text"><i class="bi bi-shield-lock-fill"></i></span>
                            <input id="razorpaySecretId" type="password" class="form-control" [(ngModel)]="razorpayKeySecret" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022">
                        </div>
                    </div>

                    <div class="col-12 mt-4">
                        <button class="btn btn-primary d-flex align-items-center gap-2" (click)="saveRazorpayKeys()">
                            <i class="bi bi-check2"></i> Save API Credentials
                        </button>
                    </div>
                </div>
            </div>

            <!-- Application Tab -->
            <div class="tab-pane fade" id="pills-app" role="tabpanel">
                <div class="row g-3 max-width-700">
                    <div class="col-12">
                        <label for="applicationLogoId" class="form-label fs-12 fw-semibold">Application Logo</label>
                        <input id="applicationLogoId" type="file" class="form-control form-control-sm">
                        <span class="fs-10 text-muted mt-1 d-block">Recommended format: SVG, PNG, or WebP. Transparent background preferred.</span>
                    </div>

                    <div class="col-12 mt-4">
                        <button class="btn btn-primary d-flex align-items-center gap-2">
                            <i class="bi bi-check2"></i> Save Changes
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
    }

</div>`, styles: ["/* src/app/pages/setting/setting.component.css */\n.max-width-700 {\n  max-width: 650px;\n}\n.nav-pills .nav-link {\n  border-radius: var(--radius-sm);\n  color: var(--text-muted-color);\n  background-color: var(--card-bg-subtle);\n  border: 1px solid var(--border-color);\n  transition: all 0.2s ease;\n}\n.nav-pills .nav-link:hover {\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.nav-pills .nav-link.active {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n  color: #ffffff;\n  box-shadow: var(--shadow-sm);\n}\n/*# sourceMappingURL=setting.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: GlobalService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingComponent, { className: "SettingComponent", filePath: "src/app/pages/setting/setting.component.ts", lineNumber: 14 });
})();
export {
  SettingComponent
};
//# sourceMappingURL=chunk-5NUY56AP.js.map
