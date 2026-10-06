import {
  NgSelectOption,
  ReactiveFormsModule,
  ɵNgSelectMultipleOption
} from "./chunk-SD6QMD7Q.js";
import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-TFR4PE7B.js";

// src/app/components/pagination/pagination.component.ts
function PaginationComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("of ", ctx_r2.total_pages(), "");
  }
}
var PaginationComponent = class _PaginationComponent {
  formGroup = input();
  limit = input();
  page_no = input(0);
  total_pages = input(0);
  callback;
  setLimit(limit) {
    this.formGroup()?.controls["limit"].setValue(limit);
    this.callback?.();
  }
  next() {
    if (this.total_pages() > this.page_no()) {
      this.formGroup()?.controls["page"].setValue(this.page_no() + 1);
      this.callback?.();
    }
  }
  previous() {
    if (this.page_no() > 1) {
      this.formGroup()?.controls["page"].setValue(this.page_no() - 1);
      this.callback?.();
    }
  }
  first() {
    this.formGroup()?.controls["page"].setValue(1);
    this.callback?.();
  }
  last() {
    this.formGroup()?.controls["page"].setValue(this.total_pages());
    this.callback?.();
  }
  static \u0275fac = function PaginationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginationComponent, selectors: [["app-pagination"]], inputs: { formGroup: [1, "formGroup"], limit: [1, "limit"], page_no: [1, "page_no"], total_pages: [1, "total_pages"], callback: "callback" }, decls: 36, vars: 10, consts: [["limit", ""], [1, "pagination-wrapper", "p-2", "px-3", "card-theme-color", "rounded", "mb-2", "border"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2"], [1, "limit-wrapper", "d-flex", "align-items-center", "gap-2"], [1, "fs-11", "text-muted", "fw-medium"], [1, "form-select", "form-select-sm", "limit-select", 3, "change"], ["value", "10"], ["value", "15"], ["value", "20"], ["value", "25"], ["value", "30"], [1, "pagination-controls", "d-flex", "align-items-center", "gap-1"], ["aria-label", "Page navigation"], [1, "pagination", "pagination-sm", "m-0", "cursor-pointer", "align-items-center", "gap-1"], ["title", "First Page", 1, "page-item", 3, "click"], ["aria-label", "First", 1, "page-link", "custom-page-link"], [1, "bi", "bi-chevron-double-left"], ["title", "Previous Page", 1, "page-item", 3, "click"], ["aria-label", "Previous", 1, "page-link", "custom-page-link"], [1, "bi", "bi-chevron-left"], [1, "page-item", "active-page-item"], [1, "page-indicator", "fs-11", "fw-semibold"], [1, "text-muted", "fw-normal"], ["title", "Next Page", 1, "page-item", 3, "click"], ["aria-label", "Next", 1, "page-link", "custom-page-link"], [1, "bi", "bi-chevron-right"], ["title", "Last Page", 1, "page-item", 3, "click"], ["aria-label", "Last", 1, "page-link", "custom-page-link"], [1, "bi", "bi-chevron-double-right"]], template: function PaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "span", 4);
      \u0275\u0275text(4, "Rows per page:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "select", 5, 0);
      \u0275\u0275listener("change", function PaginationComponent_Template_select_change_5_listener() {
        \u0275\u0275restoreView(_r1);
        const limit_r2 = \u0275\u0275reference(6);
        return \u0275\u0275resetView(ctx.setLimit(limit_r2.value));
      });
      \u0275\u0275elementStart(7, "option", 6);
      \u0275\u0275text(8, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "option", 7);
      \u0275\u0275text(10, "15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "option", 8);
      \u0275\u0275text(12, "20");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 9);
      \u0275\u0275text(14, "25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option", 10);
      \u0275\u0275text(16, "30");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 11)(18, "nav", 12)(19, "ul", 13)(20, "li", 14);
      \u0275\u0275listener("click", function PaginationComponent_Template_li_click_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.first());
      });
      \u0275\u0275elementStart(21, "a", 15);
      \u0275\u0275element(22, "i", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "li", 17);
      \u0275\u0275listener("click", function PaginationComponent_Template_li_click_23_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.previous());
      });
      \u0275\u0275elementStart(24, "a", 18);
      \u0275\u0275element(25, "i", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li", 20)(27, "span", 21);
      \u0275\u0275text(28);
      \u0275\u0275template(29, PaginationComponent_Conditional_29_Template, 2, 1, "span", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "li", 23);
      \u0275\u0275listener("click", function PaginationComponent_Template_li_click_30_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.next());
      });
      \u0275\u0275elementStart(31, "a", 24);
      \u0275\u0275element(32, "i", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "li", 26);
      \u0275\u0275listener("click", function PaginationComponent_Template_li_click_33_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.last());
      });
      \u0275\u0275elementStart(34, "a", 27);
      \u0275\u0275element(35, "i", 28);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275classProp("disabled", ctx.page_no() <= 1);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("disabled", ctx.page_no() <= 1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" Page ", ctx.page_no(), " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.total_pages() ? 29 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("disabled", ctx.page_no() >= ctx.total_pages() || ctx.page_no() == 0);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("disabled", ctx.page_no() >= ctx.total_pages() || ctx.page_no() == 0);
    }
  }, dependencies: [ReactiveFormsModule, NgSelectOption, \u0275NgSelectMultipleOption], styles: ["\n\n.pagination-wrapper[_ngcontent-%COMP%] {\n  background-color: var(--card-bg);\n  border-color: var(--border-color) !important;\n  box-shadow: var(--shadow-sm);\n}\n.limit-select[_ngcontent-%COMP%] {\n  width: 75px !important;\n  height: 30px !important;\n  font-size: 0.8125rem !important;\n  border-radius: 6px !important;\n  border-color: var(--border-color) !important;\n}\n.custom-page-link[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px !important;\n  background-color: var(--card-bg-subtle) !important;\n  border-color: var(--border-color) !important;\n  color: var(--text-color) !important;\n  font-size: 0.75rem;\n  transition: all 0.2s ease;\n  padding: 0;\n}\n.custom-page-link[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-light) !important;\n  color: var(--primary-color) !important;\n  border-color: var(--primary-color) !important;\n}\n.page-item.disabled[_ngcontent-%COMP%]   .custom-page-link[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: not-allowed;\n  background-color: transparent !important;\n}\n.page-indicator[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.65rem;\n  border-radius: 6px;\n  background-color: var(--primary-light);\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=pagination.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationComponent, [{
    type: Component,
    args: [{ selector: "app-pagination", imports: [ReactiveFormsModule], template: '<div class="pagination-wrapper p-2 px-3 card-theme-color rounded mb-2 border">\n\n    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">\n\n        <!-- Rows Per Page Selector -->\n        <div class="limit-wrapper d-flex align-items-center gap-2">\n            <span class="fs-11 text-muted fw-medium">Rows per page:</span>\n            <select (change)="setLimit(limit.value)" #limit class="form-select form-select-sm limit-select">\n                <option value="10">10</option>\n                <option value="15">15</option>\n                <option value="20">20</option>\n                <option value="25">25</option>\n                <option value="30">30</option>\n            </select>\n        </div>\n\n        <!-- Page Controls -->\n        <div class="pagination-controls d-flex align-items-center gap-1">\n            <nav aria-label="Page navigation">\n                <ul class="pagination pagination-sm m-0 cursor-pointer align-items-center gap-1">\n                    <li class="page-item" [class.disabled]="page_no() <= 1" (click)="first()" title="First Page">\n                        <a class="page-link custom-page-link" aria-label="First">\n                            <i class="bi bi-chevron-double-left"></i>\n                        </a>\n                    </li>\n                    <li class="page-item" [class.disabled]="page_no() <= 1" (click)="previous()" title="Previous Page">\n                        <a class="page-link custom-page-link" aria-label="Previous">\n                            <i class="bi bi-chevron-left"></i>\n                        </a>\n                    </li>\n\n                    <li class="page-item active-page-item">\n                        <span class="page-indicator fs-11 fw-semibold">\n                            Page {{page_no()}} @if (total_pages()) { <span class="text-muted fw-normal">of {{total_pages()}}</span> }\n                        </span>\n                    </li>\n\n                    <li class="page-item" (click)="next()" [class.disabled]="page_no() >= total_pages() || page_no() == 0" title="Next Page">\n                        <a class="page-link custom-page-link" aria-label="Next">\n                            <i class="bi bi-chevron-right"></i>\n                        </a>\n                    </li>\n                    <li class="page-item" (click)="last()" [class.disabled]="page_no() >= total_pages() || page_no() == 0" title="Last Page">\n                        <a class="page-link custom-page-link" aria-label="Last">\n                            <i class="bi bi-chevron-double-right"></i>\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n\n    </div>\n\n</div>', styles: ["/* src/app/components/pagination/pagination.component.css */\n.pagination-wrapper {\n  background-color: var(--card-bg);\n  border-color: var(--border-color) !important;\n  box-shadow: var(--shadow-sm);\n}\n.limit-select {\n  width: 75px !important;\n  height: 30px !important;\n  font-size: 0.8125rem !important;\n  border-radius: 6px !important;\n  border-color: var(--border-color) !important;\n}\n.custom-page-link {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px !important;\n  background-color: var(--card-bg-subtle) !important;\n  border-color: var(--border-color) !important;\n  color: var(--text-color) !important;\n  font-size: 0.75rem;\n  transition: all 0.2s ease;\n  padding: 0;\n}\n.custom-page-link:hover {\n  background-color: var(--primary-light) !important;\n  color: var(--primary-color) !important;\n  border-color: var(--primary-color) !important;\n}\n.page-item.disabled .custom-page-link {\n  opacity: 0.4;\n  cursor: not-allowed;\n  background-color: transparent !important;\n}\n.page-indicator {\n  display: inline-block;\n  padding: 0.25rem 0.65rem;\n  border-radius: 6px;\n  background-color: var(--primary-light);\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=pagination.component.css.map */\n"] }]
  }], null, { callback: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "src/app/components/pagination/pagination.component.ts", lineNumber: 10 });
})();

// src/app/components/form-validation-message/form-validation-message.component.ts
function FormValidationMessageComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.fieldName, " is required.");
  }
}
function FormValidationMessageComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 1);
    \u0275\u0275text(1, "Enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function FormValidationMessageComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.fieldName, " must be at least ", ctx_r0.control == null ? null : ctx_r0.control.errors == null ? null : ctx_r0.control.errors["minlength"] == null ? null : ctx_r0.control.errors["minlength"].requiredLength, " characters long. ");
  }
}
function FormValidationMessageComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.fieldName, " cannot be more than ", ctx_r0.control == null ? null : ctx_r0.control.errors == null ? null : ctx_r0.control.errors["maxlength"] == null ? null : ctx_r0.control.errors["maxlength"].requiredLength, " characters long. ");
  }
}
function FormValidationMessageComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.fieldName, " must contain only numbers.");
  }
}
function FormValidationMessageComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.fieldName, " must contain only letters.");
  }
}
function FormValidationMessageComponent_Conditional_1_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 1);
    \u0275\u0275text(1, " Password must include uppercase, lowercase, number, and special character. ");
    \u0275\u0275elementEnd();
  }
}
function FormValidationMessageComponent_Conditional_1_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 1);
    \u0275\u0275text(1, "Enter a valid 10-digit phone number.");
    \u0275\u0275elementEnd();
  }
}
function FormValidationMessageComponent_Conditional_1_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 1);
    \u0275\u0275text(1, " Username can contain only letters, numbers, and underscores. ");
    \u0275\u0275elementEnd();
  }
}
function FormValidationMessageComponent_Conditional_1_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.fieldName, " must contain only numbers.");
  }
}
function FormValidationMessageComponent_Conditional_1_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.fieldName, " format is invalid.");
  }
}
function FormValidationMessageComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FormValidationMessageComponent_Conditional_1_Conditional_6_Conditional_0_Template, 2, 0, "small", 1)(1, FormValidationMessageComponent_Conditional_1_Conditional_6_Conditional_1_Template, 2, 0, "small", 1)(2, FormValidationMessageComponent_Conditional_1_Conditional_6_Conditional_2_Template, 2, 0, "small", 1)(3, FormValidationMessageComponent_Conditional_1_Conditional_6_Conditional_3_Template, 2, 1, "small", 1)(4, FormValidationMessageComponent_Conditional_1_Conditional_6_Conditional_4_Template, 2, 1, "small", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.fieldName === "Password" ? 0 : ctx_r0.fieldName === "Mobile No" || ctx_r0.fieldName === "Phone" || ctx_r0.fieldName === "Parent contact" || ctx_r0.fieldName === "Emergency contact" ? 1 : ctx_r0.fieldName === "Username" ? 2 : ctx_r0.fieldName === "Total rooms" || ctx_r0.fieldName === "Room number" || ctx_r0.fieldName === "Pincode" ? 3 : 4);
  }
}
function FormValidationMessageComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FormValidationMessageComponent_Conditional_1_Conditional_0_Template, 2, 1, "small", 1)(1, FormValidationMessageComponent_Conditional_1_Conditional_1_Template, 2, 0, "small", 1)(2, FormValidationMessageComponent_Conditional_1_Conditional_2_Template, 2, 2, "small", 1)(3, FormValidationMessageComponent_Conditional_1_Conditional_3_Template, 2, 2, "small", 1)(4, FormValidationMessageComponent_Conditional_1_Conditional_4_Template, 2, 1, "small", 1)(5, FormValidationMessageComponent_Conditional_1_Conditional_5_Template, 2, 1, "small", 1)(6, FormValidationMessageComponent_Conditional_1_Conditional_6_Template, 5, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((ctx_r0.control == null ? null : ctx_r0.control.hasError("required")) ? 0 : (ctx_r0.control == null ? null : ctx_r0.control.hasError("email")) ? 1 : (ctx_r0.control == null ? null : ctx_r0.control.hasError("minlength")) ? 2 : (ctx_r0.control == null ? null : ctx_r0.control.hasError("maxlength")) ? 3 : (ctx_r0.control == null ? null : ctx_r0.control.hasError("numberOnly")) ? 4 : (ctx_r0.control == null ? null : ctx_r0.control.hasError("alphabetOnly")) ? 5 : (ctx_r0.control == null ? null : ctx_r0.control.hasError("pattern")) ? 6 : -1);
  }
}
var FormValidationMessageComponent = class _FormValidationMessageComponent {
  formGroup;
  controlName;
  fieldName = "";
  get control() {
    return this.formGroup?.get(this.controlName);
  }
  static \u0275fac = function FormValidationMessageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormValidationMessageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormValidationMessageComponent, selectors: [["app-form-validation-message"]], inputs: { formGroup: "formGroup", controlName: "controlName", fieldName: "fieldName" }, decls: 2, vars: 1, consts: [[1, "position-absolute", 2, "margin-top", "1px", "z-index", "5"], [1, "text-danger", "fs-10"]], template: function FormValidationMessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, FormValidationMessageComponent_Conditional_1_Template, 7, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.control == null ? null : ctx.control.invalid) && ((ctx.control == null ? null : ctx.control.dirty) || (ctx.control == null ? null : ctx.control.touched)) ? 1 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormValidationMessageComponent, [{
    type: Component,
    args: [{ selector: "app-form-validation-message", imports: [], template: `<div class="position-absolute" style="margin-top: 1px; z-index: 5;">
@if (control?.invalid && (control?.dirty || control?.touched)) {

  @if (control?.hasError('required')) {
    <small class="text-danger fs-10">{{ fieldName }} is required.</small>
  }
  @else if (control?.hasError('email')) {
    <small class="text-danger fs-10">Enter a valid email address.</small>
  }
  @else if (control?.hasError('minlength')) {
    <small class="text-danger fs-10">
      {{ fieldName }} must be at least 
      {{ control?.errors?.['minlength']?.requiredLength }} characters long.
    </small>
  }
  @else if (control?.hasError('maxlength')) {
    <small class="text-danger fs-10">
      {{ fieldName }} cannot be more than 
      {{ control?.errors?.['maxlength']?.requiredLength }} characters long.
    </small>
  }
  @else if (control?.hasError('numberOnly')) {
    <small class="text-danger fs-10">{{ fieldName }} must contain only numbers.</small>
  }
  @else if (control?.hasError('alphabetOnly')) {
    <small class="text-danger fs-10">{{ fieldName }} must contain only letters.</small>
  }
  @else if (control?.hasError('pattern')) {
    @if (fieldName === 'Password') {
      <small class="text-danger fs-10">
        Password must include uppercase, lowercase, number, and special character.
      </small>
    }
    @else if (fieldName === 'Mobile No' || fieldName === 'Phone' || fieldName === 'Parent contact' || fieldName === 'Emergency contact') {
      <small class="text-danger fs-10">Enter a valid 10-digit phone number.</small>
    }
    @else if (fieldName === 'Username') {
      <small class="text-danger fs-10">
        Username can contain only letters, numbers, and underscores.
      </small>
    }
    @else if (fieldName === 'Total rooms' || fieldName === 'Room number' || fieldName === 'Pincode') {
      <small class="text-danger fs-10">{{ fieldName }} must contain only numbers.</small>
    }
    @else {
      <small class="text-danger fs-10">{{ fieldName }} format is invalid.</small>
    }
  }

}
</div>` }]
  }], null, { formGroup: [{
    type: Input
  }], controlName: [{
    type: Input
  }], fieldName: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormValidationMessageComponent, { className: "FormValidationMessageComponent", filePath: "src/app/components/form-validation-message/form-validation-message.component.ts", lineNumber: 9 });
})();

export {
  PaginationComponent,
  FormValidationMessageComponent
};
//# sourceMappingURL=chunk-22UDIYSK.js.map
