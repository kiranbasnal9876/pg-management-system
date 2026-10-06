import {
  FormValidationMessageComponent,
  PaginationComponent
} from "./chunk-22UDIYSK.js";
import {
  ApiService,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  environment,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-SD6QMD7Q.js";
import {
  CommonModule,
  DatePipe,
  GlobalService,
  NgClass
} from "./chunk-E5VR6ZL4.js";
import {
  Component,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-TFR4PE7B.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-Y5RQAIA6.js";

// src/app/pages/complaints/complaints.component.ts
var _c0 = ["modelClose"];
function ComplaintsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 11);
  }
}
function ComplaintsComponent_For_103_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 103, 1);
    \u0275\u0275listener("click", function ComplaintsComponent_For_103_Conditional_7_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const profile_photo_r4 = \u0275\u0275reference(1);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.openBigImage(profile_photo_r4.src));
    })("error", function ComplaintsComponent_For_103_Conditional_7_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.target.src = "assets/images/logo.avif");
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate2("src", "", ctx_r4.server_url, "static/", items_r6.profile_photo || items_r6.image, "", \u0275\u0275sanitizeUrl);
  }
}
function ComplaintsComponent_For_103_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275text(1, "No file");
    \u0275\u0275elementEnd();
  }
}
function ComplaintsComponent_For_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 90);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 91);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275template(7, ComplaintsComponent_For_103_Conditional_7_Template, 2, 3, "img", 92)(8, ComplaintsComponent_For_103_Conditional_8_Template, 2, 0, "span", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 94);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "span", 95);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 96);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 96);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 97)(22, "div", 98)(23, "button", 99);
    \u0275\u0275listener("click", function ComplaintsComponent_For_103_Template_button_click_23_listener() {
      const items_r6 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.EDIT(items_r6.id));
    });
    \u0275\u0275element(24, "i", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 101);
    \u0275\u0275element(26, "i", 102);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const items_r6 = ctx.$implicit;
    const \u0275$index_179_r7 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r4.page - 1) * ctx_r4.limit + \u0275$index_179_r7 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(items_r6.description);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(items_r6.profile_photo || items_r6.image ? 7 : 8);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(items_r6.category);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", items_r6.status === "resolved" ? "bg-success" : items_r6.status === "in-progress" ? "bg-warning" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", items_r6.status === "resolved" ? "Resolved" : items_r6.status === "in-progress" ? "In-Progress" : "Pending", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 8, items_r6.created_at, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(items_r6.updated_at === null ? "No update" : \u0275\u0275pipeBind2(20, 11, items_r6.updated_at, "medium"));
  }
}
function ComplaintsComponent_ForEmpty_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 104);
    \u0275\u0275element(2, "i", 105);
    \u0275\u0275text(3, " No complaints registered yet. ");
    \u0275\u0275elementEnd()();
  }
}
function ComplaintsComponent_Conditional_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "label", 35);
    \u0275\u0275text(2, "Resolution Status ");
    \u0275\u0275elementStart(3, "span", 65);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 40)(6, "option", 106);
    \u0275\u0275text(7, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 43);
    \u0275\u0275text(9, "In-Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 44);
    \u0275\u0275text(11, "Resolved");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "app-form-validation-message", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("formGroup", ctx_r4.myForm);
  }
}
var server_url = environment.apiUrl;
var ComplaintsComponent = class _ComplaintsComponent {
  api;
  GF;
  server_url = server_url;
  filterOption = false;
  editMode = false;
  table_data;
  total_records = 0;
  page = 0;
  limit = 0;
  total_pages = 0;
  editId = "";
  pending_complaints = [];
  in_progress_complaints = [];
  resolved_complaints = [];
  imgSrc = "";
  modelClose;
  constructor(api, GF) {
    this.api = api;
    this.GF = GF;
  }
  ngOnInit() {
    this.getTable();
  }
  filterForm = new FormGroup({
    description: new FormControl(""),
    action: new FormControl("tenant_complaint"),
    status: new FormControl(""),
    limit: new FormControl(10),
    order: new FormControl("DESC"),
    sort_by: new FormControl("id"),
    page: new FormControl(1)
  });
  myForm = new FormGroup({
    description: new FormControl("", [Validators.required, Validators.maxLength(300), Validators.minLength(3)]),
    category: new FormControl("", [Validators.required]),
    // category: new FormControl('', [Validators.required, Validators.pattern(/^(Food|Water|Wi-Fi|Electricity|Other')$/)]),
    status: new FormControl("", [Validators.pattern(/^(pending|in-progress|resolved)$/)]),
    image: new FormControl("")
  });
  resetFilterForm() {
    this.filterForm.get("page")?.setValue(1);
    this.GF.preserveField(this.filterForm, ["action", "limit", "sort"], null);
    this.filterForm.patchValue({
      status: "",
      limit: 10,
      order: "DESC",
      sort_by: "id",
      page: 1,
      description: ""
    });
    this.getTable();
  }
  getTable() {
    this.api.postApi("tenant-complaint-table", this.filterForm.value).subscribe((res) => {
      if (res.status) {
        this.limit = res.limit;
        this.total_pages = res.total_pages;
        this.page = res.page;
        this.total_records = res.total_records;
        this.table_data = res.data;
        this.filterComplaints();
      } else {
        this.GF.showToast(res.message, "danger");
      }
    }, (err) => {
      this.GF.showToast(err.error.message, "danger");
    });
  }
  OpenAddForm() {
    this.myForm.reset();
    this.myForm.markAsUntouched();
    this.editMode = false;
  }
  add() {
    this.myForm.markAllAsTouched();
    const formData = __spreadProps(__spreadValues({}, this.myForm.value), {
      image: this.Attachment
    });
    if (this.myForm.valid) {
      this.api.postApi("add-complaint", formData).subscribe((res) => {
        if (res.status) {
          this.GF.showToast(res.message, "success");
          this.closeForm();
          this.getTable();
        } else {
          this.GF.showToast(res.message, "danger");
        }
      }, (err) => {
        this.GF.showToast(err.error.message, "danger");
      });
    }
  }
  closeForm() {
    this.modelClose.nativeElement.click();
    this.myForm.reset();
    this.getTable();
  }
  UPDATE() {
    this.myForm.markAllAsTouched();
    const formData = __spreadProps(__spreadValues({}, this.myForm.value), {
      image: this.Attachment,
      id: this.editId
    });
    if (this.myForm.valid) {
      this.api.postApi("update-complaint", formData).subscribe((res) => {
        if (res.status) {
          this.GF.showToast(res.message, "success");
          this.closeForm();
        } else {
          this.GF.showToast(res.message, "danger");
        }
      }, (err) => {
        this.GF.showToast(err.error.message, "danger");
      });
    }
  }
  EDIT(clientId) {
    this.myForm.markAsUntouched();
    this.editMode = true;
    this.Attachment = "";
    this.api.postApi("get-list", { action: "tenant_complaint", id: clientId }).subscribe((res) => {
      if (res.status) {
        this.editId = res.data.id;
        delete res.data["image"];
        delete res.data["password"];
        delete res.data["id"];
        this.myForm.patchValue(res.data);
      } else {
        this.GF.showToast(res.message, "danger");
      }
    }, (err) => {
      this.GF.showToast(err.error.message, "danger");
    });
  }
  // In your component class
  Attachment;
  fileUpload(event, fieldName) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this[fieldName] = reader.result;
      };
    }
  }
  filterComplaints() {
    this.pending_complaints = [];
    this.resolved_complaints = [];
    this.in_progress_complaints = [];
    this.table_data.forEach((ele) => {
      switch (ele.status) {
        case "pending":
          this.pending_complaints.push(ele);
          break;
        case "resolved":
          this.resolved_complaints.push(ele);
          break;
        case "in-progress":
          this.in_progress_complaints.push(ele);
          break;
      }
    });
    console.log(this.pending_complaints, "hello ji");
  }
  openBigImage(imgUrl) {
    console.log("Open image");
    this.imgSrc = imgUrl;
  }
  static \u0275fac = function ComplaintsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComplaintsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(GlobalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComplaintsComponent, selectors: [["app-complaints"]], viewQuery: function ComplaintsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.modelClose = _t.first);
    }
  }, decls: 163, vars: 23, consts: [["modelClose", ""], ["profile_photo", ""], [1, "app-page-container"], [1, "app-page-header"], [1, "app-page-title-group"], [1, "app-page-title"], [1, "bi", "bi-exclamation-octagon-fill"], [1, "app-page-subtitle"], [1, "app-page-actions"], ["type", "button", 1, "btn-filter-toggle", 3, "click"], [1, "bi", "bi-funnel-fill"], [1, "filter-active-dot"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-sm", "btn-primary", "d-flex", "align-items-center", "gap-1", 3, "click"], [1, "bi", "bi-plus-lg"], [1, "row", "g-3"], [1, "col-md-4", "col-sm-6"], [1, "my-dashboard-card", "d-flex", "align-items-center", "justify-content-between"], [1, "fs-11", "text-muted", "fw-medium", "d-block", "mb-1"], [1, "fw-bold", "mb-0", "text-danger"], [1, "icon-bubble", 2, "background-color", "var(--danger-light)", "color", "var(--danger-color)"], [1, "bi", "bi-clock-history"], [1, "fw-bold", "mb-0", "text-warning"], [1, "icon-bubble", 2, "background-color", "var(--warning-light)", "color", "var(--warning-color)"], [1, "bi", "bi-hourglass-split"], [1, "col-md-4", "col-sm-12"], [1, "fw-bold", "mb-0", "text-success"], [1, "icon-bubble", 2, "background-color", "var(--success-light)", "color", "var(--success-color)"], [1, "bi", "bi-check2-circle"], [1, "app-filter-card", "mt-1", 3, "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "border-bottom", "pb-2"], [1, "filter-header-title"], [1, "bi", "bi-sliders"], ["type", "button", "aria-label", "Close", 1, "btn-close", "btn-sm", 3, "click"], [1, "row", "g-2", "align-items-end", 3, "submit", "formGroup"], [1, "col-md-5", "col-sm-12"], [1, "form-label"], [1, "input-group", "input-group-sm"], [1, "input-group-text"], [1, "bi", "bi-search"], ["type", "text", "formControlName", "description", "maxlength", "100", "placeholder", "Search by complaint description...", 1, "form-control", "form-control-sm", 3, "input"], ["formControlName", "status", 1, "form-select", "form-select-sm"], ["value", ""], ["value", "pending"], ["value", "in-progress"], ["value", "resolved"], [1, "col-md-3", "col-sm-6", "d-flex", "gap-2"], ["type", "submit", 1, "btn-filter-apply", "flex-grow-1", 3, "click"], ["type", "button", 1, "btn-filter-reset", "flex-grow-1", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"], [3, "formGroup", "limit", "total_pages", "page_no", "callback"], [1, "app-table-card"], [1, "table-wrapper"], [1, "table", "align-middle"], [2, "width", "60px"], [1, "text-center", 2, "width", "120px"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "fs-14", "fw-bold"], [1, "bi", 3, "ngClass"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", "p-4"], [3, "formGroup"], [1, "col-12"], [1, "text-danger"], ["rows", "3", "maxlength", "300", "formControlName", "description", "placeholder", "Describe the issue in detail...", 1, "form-control", 3, "input"], ["controlName", "description", "fieldName", "Description", 3, "formGroup"], [1, "col-md-6"], ["formControlName", "category", 1, "form-select", "form-select-sm"], ["value", "Food", "selected", ""], ["value", "Water"], ["value", "Wi-Fi"], ["value", "Electricity"], ["value", "Other"], ["controlName", "category", "fieldName", "Complaint category", 3, "formGroup"], ["formControlName", "image", "type", "file", 1, "form-control", "form-control-sm", 3, "change"], ["controlName", "image", "fieldName", "image", 3, "formGroup"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "bi", "bi-check2"], ["id", "imageModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content", "border-0", "overflow-hidden", "shadow-lg"], [1, "modal-header", "border-0", "bg-dark", "text-white", "py-2", "px-3"], [1, "fs-12", "fw-medium"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-white"], [1, "modal-body", "p-0", "bg-dark", "d-flex", "align-items-center", "justify-content-center", 2, "min-height", "300px"], ["alt", "Attachment", 1, "img-fluid", "rounded", 2, "max-height", "80vh", 3, "src"], [1, "text-muted", "fw-semibold"], [1, "fw-semibold", "text-heading"], ["alt", "Attachment", "width", "36px", "height", "36px", "title", "Click to view attachment", "data-bs-toggle", "modal", "data-bs-target", "#imageModal", 1, "rounded", "object-fit-cover", "cursor-pointer", "border", 3, "src"], [1, "fs-10", "text-muted", "fst-italic"], [1, "badge", "bg-secondary"], [1, "badge", 3, "ngClass"], [1, "text-muted", "fs-11"], [1, "text-center"], [1, "action-btn-group", "justify-content-center"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", "title", "Edit Complaint", 1, "btn-action-icon", "primary", 3, "click"], [1, "bi", "bi-pencil"], ["title", "Delete Complaint", 1, "btn-action-icon", "danger"], [1, "bi", "bi-trash"], ["alt", "Attachment", "width", "36px", "height", "36px", "title", "Click to view attachment", "data-bs-toggle", "modal", "data-bs-target", "#imageModal", 1, "rounded", "object-fit-cover", "cursor-pointer", "border", 3, "click", "error", "src"], ["colspan", "8", 1, "text-center", "py-4", "text-muted"], [1, "bi", "bi-inbox", "fs-3", "d-block", "mb-1", "opacity-50"], ["value", "pending", "selected", ""], ["controlName", "status", "fieldName", "Complaint status", 3, "formGroup"]], template: function ComplaintsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h2", 5);
      \u0275\u0275element(4, "i", 6);
      \u0275\u0275text(5, " Complaints Tracker ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 7);
      \u0275\u0275text(7, "Monitor tenant tickets, maintenance requests, and track resolution lifecycles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 8)(9, "button", 9);
      \u0275\u0275listener("click", function ComplaintsComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterOption = !ctx.filterOption);
      });
      \u0275\u0275element(10, "i", 10);
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, ComplaintsComponent_Conditional_13_Template, 1, 0, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 12);
      \u0275\u0275listener("click", function ComplaintsComponent_Template_button_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.OpenAddForm());
      });
      \u0275\u0275element(15, "i", 13);
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "Add Complaint");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "div", 14)(19, "div", 15)(20, "div", 16)(21, "div")(22, "span", 17);
      \u0275\u0275text(23, "Pending Complaints");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "h4", 18);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 19);
      \u0275\u0275element(27, "i", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 15)(29, "div", 16)(30, "div")(31, "span", 17);
      \u0275\u0275text(32, "In-Progress Tickets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "h4", 21);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 22);
      \u0275\u0275element(36, "i", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 24)(38, "div", 16)(39, "div")(40, "span", 17);
      \u0275\u0275text(41, "Resolved Complaints");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "h4", 25);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 26);
      \u0275\u0275element(45, "i", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(46, "div", 28)(47, "div", 29)(48, "span", 30);
      \u0275\u0275element(49, "i", 31);
      \u0275\u0275text(50, " Filter Complaints ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "button", 32);
      \u0275\u0275listener("click", function ComplaintsComponent_Template_button_click_51_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterOption = false);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "form", 33);
      \u0275\u0275listener("submit", function ComplaintsComponent_Template_form_submit_52_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.getTable());
      });
      \u0275\u0275elementStart(53, "div", 34)(54, "label", 35);
      \u0275\u0275text(55, "Search Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 36)(57, "span", 37);
      \u0275\u0275element(58, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "input", 39);
      \u0275\u0275listener("input", function ComplaintsComponent_Template_input_input_59_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 100));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 15)(61, "label", 35);
      \u0275\u0275text(62, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "select", 40)(64, "option", 41);
      \u0275\u0275text(65, "All Statuses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "option", 42);
      \u0275\u0275text(67, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "option", 43);
      \u0275\u0275text(69, "In-Progress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "option", 44);
      \u0275\u0275text(71, "Resolved");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "div", 45)(73, "button", 46);
      \u0275\u0275listener("click", function ComplaintsComponent_Template_button_click_73_listener() {
        let tmp_2_0;
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView((tmp_2_0 = ctx.filterForm.get("page")) == null ? null : tmp_2_0.setValue(1));
      });
      \u0275\u0275element(74, "i", 38);
      \u0275\u0275text(75, " Apply ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "button", 47);
      \u0275\u0275listener("click", function ComplaintsComponent_Template_button_click_76_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilterForm());
      });
      \u0275\u0275element(77, "i", 48);
      \u0275\u0275text(78, " Reset ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(79, "app-pagination", 49);
      \u0275\u0275elementStart(80, "div", 50)(81, "div", 51)(82, "table", 52)(83, "thead")(84, "tr")(85, "th", 53);
      \u0275\u0275text(86, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "th");
      \u0275\u0275text(88, "Complaint Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th");
      \u0275\u0275text(90, "Attachment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "th");
      \u0275\u0275text(92, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "th");
      \u0275\u0275text(94, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "th");
      \u0275\u0275text(96, "Created At");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "th");
      \u0275\u0275text(98, "Last Updated");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "th", 54);
      \u0275\u0275text(100, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "tbody");
      \u0275\u0275repeaterCreate(102, ComplaintsComponent_For_103_Template, 27, 14, "tr", null, \u0275\u0275repeaterTrackByIndex, false, ComplaintsComponent_ForEmpty_104_Template, 4, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(105, "div", 55)(106, "div", 56)(107, "div", 57)(108, "div", 58)(109, "h5", 59);
      \u0275\u0275element(110, "i", 60);
      \u0275\u0275text(111);
      \u0275\u0275elementEnd();
      \u0275\u0275element(112, "button", 61, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div", 62)(115, "form", 63)(116, "div", 14)(117, "div", 64)(118, "label", 35);
      \u0275\u0275text(119, "Description ");
      \u0275\u0275elementStart(120, "span", 65);
      \u0275\u0275text(121, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "textarea", 66);
      \u0275\u0275listener("input", function ComplaintsComponent_Template_textarea_input_122_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 300));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(123, "app-form-validation-message", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div", 68)(125, "label", 35);
      \u0275\u0275text(126, "Complaint Category ");
      \u0275\u0275elementStart(127, "span", 65);
      \u0275\u0275text(128, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "select", 69)(130, "option", 70);
      \u0275\u0275text(131, "Food");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "option", 71);
      \u0275\u0275text(133, "Water");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "option", 72);
      \u0275\u0275text(135, "Wi-Fi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "option", 73);
      \u0275\u0275text(137, "Electricity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "option", 74);
      \u0275\u0275text(139, "Other");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(140, "app-form-validation-message", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "div", 68)(142, "label", 35);
      \u0275\u0275text(143, "Photo Attachment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "input", 76);
      \u0275\u0275listener("change", function ComplaintsComponent_Template_input_change_144_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.fileUpload($event, "Attachment"));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(145, "app-form-validation-message", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275template(146, ComplaintsComponent_Conditional_146_Template, 13, 1, "div", 64);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(147, "div", 78)(148, "button", 79);
      \u0275\u0275listener("click", function ComplaintsComponent_Template_button_click_148_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.myForm.reset());
      });
      \u0275\u0275element(149, "i", 48);
      \u0275\u0275text(150, " Reset ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "button", 80);
      \u0275\u0275listener("click", function ComplaintsComponent_Template_button_click_151_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.editMode ? ctx.UPDATE() : ctx.add());
      });
      \u0275\u0275element(152, "i", 81);
      \u0275\u0275text(153);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(154, "div", 82)(155, "div", 83)(156, "div", 84)(157, "div", 85)(158, "span", 86);
      \u0275\u0275text(159, "Attachment Preview");
      \u0275\u0275elementEnd();
      \u0275\u0275element(160, "button", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "div", 88);
      \u0275\u0275element(162, "img", 89);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275classProp("active", ctx.filterOption);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.filterOption ? 13 : -1);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.pending_complaints.length);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.in_progress_complaints.length);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.resolved_complaints.length);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", ctx.filterOption ? "" : "d-none");
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.filterForm);
      \u0275\u0275advance(27);
      \u0275\u0275property("formGroup", ctx.filterForm)("limit", ctx.limit)("total_pages", ctx.total_pages)("page_no", ctx.page)("callback", ctx.getTable.bind(ctx));
      \u0275\u0275advance(23);
      \u0275\u0275repeater(ctx.table_data);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngClass", ctx.editMode ? "bi-pencil-square" : "bi-exclamation-circle-fill");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.editMode ? "Update Complaint Status" : "Register New Complaint", " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.myForm);
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.myForm);
      \u0275\u0275advance(17);
      \u0275\u0275property("formGroup", ctx.myForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.myForm);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.editMode ? 146 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.editMode ? "Update Ticket" : "Submit Ticket", " ");
      \u0275\u0275advance(9);
      \u0275\u0275property("src", ctx.imgSrc, \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [CommonModule, NgClass, DatePipe, PaginationComponent, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, FormValidationMessageComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComplaintsComponent, [{
    type: Component,
    args: [{ selector: "app-complaints", imports: [CommonModule, PaginationComponent, ReactiveFormsModule, FormValidationMessageComponent, DatePipe], template: `<div class="app-page-container">

    <!-- Common Page Header -->
    <div class="app-page-header">
        <div class="app-page-title-group">
            <h2 class="app-page-title">
                <i class="bi bi-exclamation-octagon-fill"></i>
                Complaints Tracker
            </h2>
            <p class="app-page-subtitle">Monitor tenant tickets, maintenance requests, and track resolution lifecycles</p>
        </div>
        <div class="app-page-actions">
            <button class="btn-filter-toggle" [class.active]="filterOption" (click)="filterOption = !filterOption" type="button">
                <i class="bi bi-funnel-fill"></i>
                <span>Filter</span>
                @if (filterOption) {
                    <span class="filter-active-dot"></span>
                }
            </button>
            <button class="btn btn-sm btn-primary d-flex align-items-center gap-1" (click)="OpenAddForm()" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                <i class="bi bi-plus-lg"></i>
                <span>Add Complaint</span>
            </button>
        </div>
    </div>

    <!-- Status Metric Cards Grid -->
    <div class="row g-3">
        <!-- Pending Complaints -->
        <div class="col-md-4 col-sm-6">
            <div class="my-dashboard-card d-flex align-items-center justify-content-between">
                <div>
                    <span class="fs-11 text-muted fw-medium d-block mb-1">Pending Complaints</span>
                    <h4 class="fw-bold mb-0 text-danger">{{pending_complaints.length}}</h4>
                </div>
                <div class="icon-bubble" style="background-color: var(--danger-light); color: var(--danger-color);">
                    <i class="bi bi-clock-history"></i>
                </div>
            </div>
        </div>

        <!-- In-Progress Complaints -->
        <div class="col-md-4 col-sm-6">
            <div class="my-dashboard-card d-flex align-items-center justify-content-between">
                <div>
                    <span class="fs-11 text-muted fw-medium d-block mb-1">In-Progress Tickets</span>
                    <h4 class="fw-bold mb-0 text-warning">{{in_progress_complaints.length}}</h4>
                </div>
                <div class="icon-bubble" style="background-color: var(--warning-light); color: var(--warning-color);">
                    <i class="bi bi-hourglass-split"></i>
                </div>
            </div>
        </div>

        <!-- Resolved Complaints -->
        <div class="col-md-4 col-sm-12">
            <div class="my-dashboard-card d-flex align-items-center justify-content-between">
                <div>
                    <span class="fs-11 text-muted fw-medium d-block mb-1">Resolved Complaints</span>
                    <h4 class="fw-bold mb-0 text-success">{{resolved_complaints.length}}</h4>
                </div>
                <div class="icon-bubble" style="background-color: var(--success-light); color: var(--success-color);">
                    <i class="bi bi-check2-circle"></i>
                </div>
            </div>
        </div>
    </div>

    <!-- Filter Card -->
    <div class="app-filter-card mt-1" [ngClass]="filterOption ? '' : 'd-none'">
        <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
            <span class="filter-header-title">
                <i class="bi bi-sliders"></i> Filter Complaints
            </span>
            <button type="button" class="btn-close btn-sm" (click)="filterOption = false" aria-label="Close"></button>
        </div>

        <form [formGroup]="filterForm" class="row g-2 align-items-end" (submit)="getTable()">
            <div class="col-md-5 col-sm-12">
                <label class="form-label">Search Description</label>
                <div class="input-group input-group-sm">
                    <span class="input-group-text"><i class="bi bi-search"></i></span>
                    <input type="text" class="form-control form-control-sm" formControlName="description" maxlength="100" (input)="GF.enforceMaxLength($event, 100)" placeholder="Search by complaint description...">
                </div>
            </div>

            <div class="col-md-4 col-sm-6">
                <label class="form-label">Status</label>
                <select class="form-select form-select-sm" formControlName="status">
                    <option value="">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In-Progress</option>
                    <option value="resolved">Resolved</option>
                </select>
            </div>

            <div class="col-md-3 col-sm-6 d-flex gap-2">
                <button type="submit" (click)="this.filterForm.get('page')?.setValue(1)" class="btn-filter-apply flex-grow-1">
                    <i class="bi bi-search"></i> Apply
                </button>
                <button type="button" class="btn-filter-reset flex-grow-1" (click)="resetFilterForm()">
                    <i class="bi bi-arrow-counterclockwise"></i> Reset
                </button>
            </div>
        </form>
    </div>

    <!-- Pagination and limit component -->
    <app-pagination [formGroup]="filterForm" [limit]="limit" [total_pages]="total_pages" [page_no]="page"
        [callback]="getTable.bind(this)"></app-pagination>

    <!-- Table Container Card -->
    <div class="app-table-card">
        <div class="table-wrapper">
            <table class="table align-middle">
                <thead>
                    <tr>
                        <th style="width: 60px;">#</th>
                        <th>Complaint Details</th>
                        <th>Attachment</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Created At</th>
                        <th>Last Updated</th>
                        <th class="text-center" style="width: 120px;">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    @for(items of table_data; track $index; let i = $index){
                    <tr>
                        <td class="text-muted fw-semibold">{{ (page - 1) * limit + i + 1 }}</td>
                        <td>
                            <div class="fw-semibold text-heading">{{items.description}}</div>
                        </td>
                        <td>
                            @if(items.profile_photo || items.image){
                                <img (click)="openBigImage(profile_photo.src)" #profile_photo 
                                     src="{{server_url}}static/{{items.profile_photo || items.image}}"
                                     (error)="$any($event.target).src='assets/images/logo.avif'"
                                     class="rounded object-fit-cover cursor-pointer border" alt="Attachment" width="36px" height="36px"
                                     title="Click to view attachment" data-bs-toggle="modal" data-bs-target="#imageModal">
                            }@else{
                                <span class="fs-10 text-muted fst-italic">No file</span>
                            }
                        </td>
                        <td>
                            <span class="badge bg-secondary">{{items.category}}</span>
                        </td>
                        <td>
                            <span class="badge"
                                [ngClass]="items.status === 'resolved' ? 'bg-success' : items.status === 'in-progress' ? 'bg-warning' : 'bg-danger'">
                                {{ items.status === 'resolved' ? 'Resolved' : items.status === 'in-progress' ? 'In-Progress' : 'Pending' }}
                            </span>
                        </td>
                        <td class="text-muted fs-11">{{items.created_at | date:'medium'}}</td>
                        <td class="text-muted fs-11">{{items.updated_at === null ? 'No update' : (items.updated_at | date:'medium')}}</td>
                        <td class="text-center">
                            <div class="action-btn-group justify-content-center">
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn-action-icon primary" (click)="EDIT(items.id)" title="Edit Complaint">
                                    <i class="bi bi-pencil"></i>
                                </button>
                                <button class="btn-action-icon danger" title="Delete Complaint">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                    }@empty{
                    <tr>
                        <td colspan="8" class="text-center py-4 text-muted">
                            <i class="bi bi-inbox fs-3 d-block mb-1 opacity-50"></i>
                            No complaints registered yet.
                        </td>
                    </tr>
                    }
                </tbody>
            </table>
        </div>
    </div>

    <!-- Add/Edit Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fs-14 fw-bold" id="exampleModalLabel">
                        <i class="bi" [ngClass]="editMode ? 'bi-pencil-square' : 'bi-exclamation-circle-fill'"></i>
                        {{editMode ? 'Update Complaint Status' : 'Register New Complaint'}}
                    </h5>
                    <button type="button" #modelClose class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                    <form [formGroup]="myForm">
                        <div class="row g-3">
                            <div class="col-12">
                                <label class="form-label">Description <span class="text-danger">*</span></label>
                                <textarea class="form-control" rows="3" maxlength="300" (input)="GF.enforceMaxLength($event, 300)"
                                    formControlName="description" placeholder="Describe the issue in detail..."></textarea>
                                <app-form-validation-message [formGroup]="myForm" controlName="description" fieldName="Description"></app-form-validation-message>
                            </div>

                            <div class="col-md-6">
                                <label class="form-label">Complaint Category <span class="text-danger">*</span></label>
                                <select formControlName="category" class="form-select form-select-sm">
                                    <option value="Food" selected>Food</option>
                                    <option value="Water">Water</option>
                                    <option value="Wi-Fi">Wi-Fi</option>
                                    <option value="Electricity">Electricity</option>
                                    <option value="Other">Other</option>
                                </select>
                                <app-form-validation-message [formGroup]="myForm" controlName="category" fieldName="Complaint category"></app-form-validation-message>
                            </div>

                            <div class="col-md-6">
                                <label class="form-label">Photo Attachment</label>
                                <input formControlName="image" (change)="fileUpload($event, 'Attachment')" type="file" class="form-control form-control-sm">
                                <app-form-validation-message [formGroup]="myForm" controlName="image" fieldName="image"></app-form-validation-message>
                            </div>

                            @if(editMode){
                            <div class="col-12">
                                <label class="form-label">Resolution Status <span class="text-danger">*</span></label>
                                <select formControlName="status" class="form-select form-select-sm">
                                    <option value="pending" selected>Pending</option>
                                    <option value="in-progress">In-Progress</option>
                                    <option value="resolved">Resolved</option>
                                </select>
                                <app-form-validation-message [formGroup]="myForm" controlName="status" fieldName="Complaint status"></app-form-validation-message>
                            </div>
                            }
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" (click)="this.myForm.reset()" class="btn btn-sm btn-outline-secondary">
                        <i class="bi bi-arrow-counterclockwise"></i> Reset
                    </button>
                    <button type="button" (click)="editMode ? UPDATE() : add()" class="btn btn-sm btn-primary">
                        <i class="bi bi-check2"></i> {{editMode ? 'Update Ticket' : 'Submit Ticket'}}
                    </button>
                </div>
            </div>
        </div> 
    </div>

    <!-- Image Preview Modal -->
    <div class="modal fade" id="imageModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content border-0 overflow-hidden shadow-lg">
                <div class="modal-header border-0 bg-dark text-white py-2 px-3">
                    <span class="fs-12 fw-medium">Attachment Preview</span>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0 bg-dark d-flex align-items-center justify-content-center" style="min-height: 300px;">
                    <img [src]="imgSrc" class="img-fluid rounded" alt="Attachment" style="max-height: 80vh;">
                </div>
            </div>
        </div>
    </div>

</div>` }]
  }], () => [{ type: ApiService }, { type: GlobalService }], { modelClose: [{
    type: ViewChild,
    args: ["modelClose"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComplaintsComponent, { className: "ComplaintsComponent", filePath: "src/app/pages/complaints/complaints.component.ts", lineNumber: 18 });
})();
export {
  ComplaintsComponent
};
//# sourceMappingURL=chunk-FTSN7OCN.js.map
