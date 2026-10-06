import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-TFR4PE7B.js";
import "./chunk-Y5RQAIA6.js";

// src/app/pages/setting/setting.component.ts
var SettingComponent = class _SettingComponent {
  static \u0275fac = function SettingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingComponent, selectors: [["app-setting"]], decls: 51, vars: 0, consts: [[1, "app-page-container"], [1, "app-page-header"], [1, "app-page-title-group"], [1, "app-page-title"], [1, "bi", "bi-gear-fill"], [1, "app-page-subtitle"], [1, "app-table-card", "p-4"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "mb-4", "gap-2"], ["role", "presentation", 1, "nav-item"], ["id", "pills-app-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-app", "type", "button", "role", "tab", 1, "nav-link", "active", "d-flex", "align-items-center", "gap-2", "px-3", "py-2", "fs-12", "fw-semibold"], [1, "bi", "bi-sliders2-vertical"], ["id", "pills-payment-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-payment", "type", "button", "role", "tab", 1, "nav-link", "d-flex", "align-items-center", "gap-2", "px-3", "py-2", "fs-12", "fw-semibold"], [1, "bi", "bi-credit-card-2-front-fill"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-app", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row", "g-3", "max-width-700"], [1, "col-12"], ["for", "applicationLogoId", 1, "form-label"], ["id", "applicationLogoId", "type", "file", 1, "form-control", "form-control-sm"], [1, "fs-10", "text-muted", "mt-1", "d-block"], [1, "col-12", "mt-4"], [1, "my-btn-size", "primary"], [1, "bi", "bi-check2"], ["id", "pills-payment", "role", "tabpanel", 1, "tab-pane", "fade"], ["for", "razorpayKeyId", 1, "form-label"], [1, "input-group", "input-group-sm"], [1, "input-group-text"], [1, "bi", "bi-key-fill"], ["id", "razorpayKeyId", "type", "text", "placeholder", "rzp_live_xxxxxxxx", 1, "form-control", "form-control-sm"], ["for", "razorpaySecretId", 1, "form-label"], [1, "bi", "bi-shield-lock-fill"], ["id", "razorpaySecretId", "type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-control", "form-control-sm"]], template: function SettingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275text(5, " System Settings ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, "Configure application preferences, brand identity, and payment gateway keys");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 6)(9, "ul", 7)(10, "li", 8)(11, "button", 9);
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275text(13, " Application Configuration ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li", 8)(15, "button", 11);
      \u0275\u0275element(16, "i", 12);
      \u0275\u0275text(17, " Payment Gateway (Razorpay) ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "div", 16)(22, "label", 17);
      \u0275\u0275text(23, "Application Logo");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 18);
      \u0275\u0275elementStart(25, "span", 19);
      \u0275\u0275text(26, "Recommended format: SVG, PNG, or WebP. Transparent background preferred.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 20)(28, "button", 21);
      \u0275\u0275element(29, "i", 22);
      \u0275\u0275text(30, " Save Changes ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "div", 23)(32, "div", 15)(33, "div", 16)(34, "label", 24);
      \u0275\u0275text(35, "Razorpay Key ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 25)(37, "span", 26);
      \u0275\u0275element(38, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "input", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 16)(41, "label", 29);
      \u0275\u0275text(42, "Razorpay Key Secret");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 25)(44, "span", 26);
      \u0275\u0275element(45, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "input", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 20)(48, "button", 21);
      \u0275\u0275element(49, "i", 22);
      \u0275\u0275text(50, " Save API Credentials ");
      \u0275\u0275elementEnd()()()()()()();
    }
  }, styles: ["\n\n.max-width-700[_ngcontent-%COMP%] {\n  max-width: 650px;\n}\n.nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border-radius: var(--radius-sm);\n  color: var(--text-muted-color);\n  background-color: var(--card-bg-subtle);\n  border: 1px solid var(--border-color);\n  transition: all 0.2s ease;\n}\n.nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n  color: #ffffff;\n  box-shadow: var(--shadow-sm);\n}\n/*# sourceMappingURL=setting.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingComponent, [{
    type: Component,
    args: [{ selector: "app-setting", imports: [], template: '<div class="app-page-container">\n\n    <!-- Common Page Header -->\n    <div class="app-page-header">\n        <div class="app-page-title-group">\n            <h2 class="app-page-title">\n                <i class="bi bi-gear-fill"></i>\n                System Settings\n            </h2>\n            <p class="app-page-subtitle">Configure application preferences, brand identity, and payment gateway keys</p>\n        </div>\n    </div>\n\n    <!-- Settings Card -->\n    <div class="app-table-card p-4">\n        <!-- Navigation Tabs -->\n        <ul class="nav nav-pills mb-4 gap-2" id="pills-tab" role="tablist">\n            <li class="nav-item" role="presentation">\n                <button class="nav-link active d-flex align-items-center gap-2 px-3 py-2 fs-12 fw-semibold" id="pills-app-tab" \n                        data-bs-toggle="pill" data-bs-target="#pills-app" type="button" role="tab">\n                    <i class="bi bi-sliders2-vertical"></i> Application Configuration\n                </button>\n            </li>\n            <li class="nav-item" role="presentation">\n                <button class="nav-link d-flex align-items-center gap-2 px-3 py-2 fs-12 fw-semibold" id="pills-payment-tab" \n                        data-bs-toggle="pill" data-bs-target="#pills-payment" type="button" role="tab">\n                    <i class="bi bi-credit-card-2-front-fill"></i> Payment Gateway (Razorpay)\n                </button>\n            </li>\n        </ul>\n\n        <!-- Tab Content -->\n        <div class="tab-content" id="pills-tabContent">\n            <!-- Application Tab -->\n            <div class="tab-pane fade show active" id="pills-app" role="tabpanel">\n                <div class="row g-3 max-width-700">\n                    <div class="col-12">\n                        <label for="applicationLogoId" class="form-label">Application Logo</label>\n                        <input id="applicationLogoId" type="file" class="form-control form-control-sm">\n                        <span class="fs-10 text-muted mt-1 d-block">Recommended format: SVG, PNG, or WebP. Transparent background preferred.</span>\n                    </div>\n\n                    <div class="col-12 mt-4">\n                        <button class="my-btn-size primary">\n                            <i class="bi bi-check2"></i> Save Changes\n                        </button>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Payment Tab -->\n            <div class="tab-pane fade" id="pills-payment" role="tabpanel">\n                <div class="row g-3 max-width-700">\n                    <div class="col-12">\n                        <label for="razorpayKeyId" class="form-label">Razorpay Key ID</label>\n                        <div class="input-group input-group-sm">\n                            <span class="input-group-text"><i class="bi bi-key-fill"></i></span>\n                            <input id="razorpayKeyId" type="text" class="form-control form-control-sm" placeholder="rzp_live_xxxxxxxx">\n                        </div>\n                    </div>\n\n                    <div class="col-12">\n                        <label for="razorpaySecretId" class="form-label">Razorpay Key Secret</label>\n                        <div class="input-group input-group-sm">\n                            <span class="input-group-text"><i class="bi bi-shield-lock-fill"></i></span>\n                            <input id="razorpaySecretId" type="password" class="form-control form-control-sm" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022">\n                        </div>\n                    </div>\n\n                    <div class="col-12 mt-4">\n                        <button class="my-btn-size primary">\n                            <i class="bi bi-check2"></i> Save API Credentials\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>', styles: ["/* src/app/pages/setting/setting.component.css */\n.max-width-700 {\n  max-width: 650px;\n}\n.nav-pills .nav-link {\n  border-radius: var(--radius-sm);\n  color: var(--text-muted-color);\n  background-color: var(--card-bg-subtle);\n  border: 1px solid var(--border-color);\n  transition: all 0.2s ease;\n}\n.nav-pills .nav-link:hover {\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.nav-pills .nav-link.active {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n  color: #ffffff;\n  box-shadow: var(--shadow-sm);\n}\n/*# sourceMappingURL=setting.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingComponent, { className: "SettingComponent", filePath: "src/app/pages/setting/setting.component.ts", lineNumber: 9 });
})();
export {
  SettingComponent
};
//# sourceMappingURL=chunk-QR55ZLMJ.js.map
