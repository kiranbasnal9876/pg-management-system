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
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-SD6QMD7Q.js";
import {
  CommonModule,
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
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
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

// src/app/pages/client/client.component.ts
var _c0 = ["modelClose"];
var _c1 = (a0) => ({ "d-none": a0 });
function ClientComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 11);
  }
}
function ClientComponent_For_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 86);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 87);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 88);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 89);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 90)(14, "div", 91)(15, "button", 92);
    \u0275\u0275listener("click", function ClientComponent_For_85_Template_button_click_15_listener() {
      const items_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editClient(items_r3.id));
    });
    \u0275\u0275element(16, "i", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 94);
    \u0275\u0275listener("click", function ClientComponent_For_85_Template_button_click_17_listener() {
      const items_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteClient(items_r3.id));
    });
    \u0275\u0275element(18, "i", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 96)(20, "button", 97);
    \u0275\u0275element(21, "i", 98);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const items_r3 = ctx.$implicit;
    const \u0275$index_150_r5 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r3.page - 1) * ctx_r3.limit + \u0275$index_150_r5 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(items_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(items_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(items_r3.phone);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", items_r3.status === 1 ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", items_r3.status === 1 ? "Active" : "Inactive", " ");
    \u0275\u0275advance(7);
    \u0275\u0275propertyInterpolate1("href", "https://wa.me/", items_r3.phone, "", \u0275\u0275sanitizeUrl);
  }
}
function ClientComponent_ForEmpty_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 99);
    \u0275\u0275element(2, "i", 100);
    \u0275\u0275text(3, " No clients found matching the criteria. ");
    \u0275\u0275elementEnd()();
  }
}
function ClientComponent_For_162_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275property("value", item_r7.state_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r7.state_name);
  }
}
function ClientComponent_For_173_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275property("value", item_r8.district_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r8.district_name);
  }
}
var ClientComponent = class _ClientComponent {
  api;
  GF;
  filterOption = false;
  table_data;
  total_records = 0;
  page = 0;
  limit = 0;
  total_pages = 0;
  state_district_data;
  state_data;
  district_data;
  editMode = false;
  editClientId = "";
  modelClose;
  constructor(api, GF) {
    this.api = api;
    this.GF = GF;
  }
  ngOnInit() {
    this.getTable();
    this.getState();
  }
  filterForm = new FormGroup({
    name: new FormControl(""),
    action: new FormControl("pg_owner"),
    email: new FormControl(""),
    phone: new FormControl(""),
    status: new FormControl(""),
    limit: new FormControl(10),
    order: new FormControl("DESC"),
    sort_by: new FormControl("id"),
    page: new FormControl(1)
  });
  clientForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    email: new FormControl("", [Validators.required, Validators.email, Validators.maxLength(50)]),
    phone: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.maxLength(10), Validators.minLength(10)]),
    state: new FormControl("", [Validators.required]),
    district: new FormControl("", [Validators.required]),
    status: new FormControl("", Validators.required),
    profile: new FormControl("", Validators.required),
    address: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).+$"), Validators.minLength(8), Validators.maxLength(15)]),
    pincode: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    id: new FormControl("")
  });
  filterSearch() {
    this.filterForm.get("page")?.setValue(1);
  }
  getTable() {
    this.api.postApi("pg-owner-table", this.filterForm.value).subscribe((res) => {
      if (res.status) {
        this.limit = res.limit;
        this.total_pages = res.total_pages;
        this.page = res.page;
        this.total_records = res.total_records;
        this.table_data = res.data;
      } else {
        this.GF.showToast(res.message, "danger");
      }
    }, (err) => {
      this.GF.showToast(err.error.message, "danger");
    });
  }
  resetFilterForm() {
    this.filterForm.get("page")?.setValue(1);
    this.GF.preserveField(this.filterForm, ["action", "limit", "sort"], null);
    this.filterForm.patchValue({
      status: "",
      email: "",
      limit: 10,
      order: "DESC",
      sort_by: "id",
      page: 1,
      name: "",
      phone: ""
    });
    this.getTable();
  }
  // table shorting 
  sortColumn = "";
  sortOrder = "DESC";
  sortingTable(sortOn) {
    if (this.sortColumn === sortOn) {
      this.sortOrder = this.sortOrder === "ASC" ? "DESC" : "ASC";
    } else {
      this.sortColumn = sortOn;
      this.sortOrder = "ASC";
    }
    this.filterForm.controls["order"].setValue(this.sortOrder);
    this.filterForm.controls["sort_by"].setValue(sortOn);
    this.getTable();
  }
  addClient() {
    const passwordControl = this.clientForm.get("password");
    passwordControl?.setValidators([Validators.required]);
    passwordControl?.updateValueAndValidity();
    this.clientForm.markAllAsTouched();
    const formData = __spreadProps(__spreadValues({}, this.clientForm.value), {
      profile: this.ownerProfile
    });
    if (this.clientForm.valid) {
      this.api.postApi("add-pg-owner", formData).subscribe((res) => {
        if (res.status) {
          this.GF.showToast(res.message, "success");
          this.closeClientForm();
          this.getTable();
        } else {
          this.GF.showToast(res.message, "danger");
        }
      }, (err) => {
        this.GF.showToast(err.error.message, "danger");
      });
    }
  }
  getState() {
    this.api.getState().subscribe((res) => {
      this.state_district_data = res;
      this.state_data = this.state_district_data.state;
    }, (err) => {
      this.GF.showToast(err.error.message, "danger");
    });
  }
  getDistrict(state_id) {
    this.clientForm.get("district")?.setValue("");
    this.district_data = this.state_district_data.district.filter((ele) => {
      return ele.state_id == state_id;
    });
  }
  // In your component class
  ownerProfile;
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
  deleteClient(clinetId) {
    this.api.postApi("delete", { action: "pg_owner", id: clinetId }).subscribe((res) => {
      if (res.status) {
        this.GF.showToast("Client deleted successfully", "success");
        this.getTable();
      } else {
        this.GF.showToast(res.message, "danger");
      }
    }, (err) => {
      this.GF.showToast(err.error.message, "danger");
    });
  }
  editClient(clientId) {
    this.clientForm.markAsUntouched();
    this.editMode = true;
    this.ownerProfile = "";
    this.api.postApi("get-list", { action: "pg_owner", id: clientId }).subscribe((res) => {
      if (res.status) {
        this.editClientId = res.data.id;
        delete res.data["profile"];
        delete res.data["password"];
        delete res.data["id"];
        this.clientForm.patchValue(res.data);
        setTimeout(() => {
          this.getDistrict(res.data.state);
          this.clientForm.get("district")?.setValue(res.data.district);
        }, 200);
      } else {
        this.GF.showToast(res.message, "danger");
      }
    }, (err) => {
      this.GF.showToast(err.error.message, "danger");
    });
  }
  updateClient() {
    const passwordControl = this.clientForm.get("password");
    passwordControl?.setValidators([Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).+$"), Validators.minLength(8), Validators.maxLength(15)]);
    passwordControl?.updateValueAndValidity();
    const profileControl = this.clientForm.get("profile");
    profileControl?.clearValidators();
    profileControl?.updateValueAndValidity();
    this.clientForm.markAllAsTouched();
    const formData = __spreadProps(__spreadValues({}, this.clientForm.value), {
      profile: this.ownerProfile,
      id: this.editClientId
    });
    if (this.clientForm.valid) {
      this.api.postApi("update-pg-owner", formData).subscribe((res) => {
        if (res.status) {
          this.GF.showToast(res.message, "success");
          this.closeClientForm();
        } else {
          this.GF.showToast(res.message, "danger");
        }
      }, (err) => {
        this.GF.showToast(err.error.message, "danger");
      });
    }
  }
  closeClientForm() {
    this.modelClose.nativeElement.click();
    this.clientForm.reset();
    this.getTable();
  }
  openAddClientForm() {
    this.clientForm.reset();
    this.clientForm.markAsUntouched();
    this.editMode = false;
    this.district_data = [];
  }
  static \u0275fac = function ClientComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(GlobalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientComponent, selectors: [["app-client"]], viewQuery: function ClientComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.modelClose = _t.first);
    }
  }, decls: 189, vars: 31, consts: [["modelClose", ""], ["state_id", ""], [1, "app-page-container"], [1, "app-page-header"], [1, "app-page-title-group"], [1, "app-page-title"], [1, "bi", "bi-people-fill"], [1, "app-page-subtitle"], [1, "app-page-actions"], ["type", "button", 1, "btn-filter-toggle", 3, "click"], [1, "bi", "bi-funnel-fill"], [1, "filter-active-dot"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-sm", "btn-primary", "d-flex", "align-items-center", "gap-1", 3, "click"], [1, "bi", "bi-plus-lg"], [1, "app-filter-card", 3, "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "border-bottom", "pb-2"], [1, "filter-header-title"], [1, "bi", "bi-sliders"], ["type", "button", "aria-label", "Close", 1, "btn-close", "btn-sm", 3, "click"], [1, "row", "g-2", "align-items-end", 3, "submit", "formGroup"], [1, "col-xl-3", "col-md-3", "col-sm-6"], [1, "form-label"], [1, "input-group", "input-group-sm"], [1, "input-group-text"], [1, "bi", "bi-person"], ["type", "text", "formControlName", "name", "placeholder", "Search by name", 1, "form-control", "form-control-sm"], [1, "bi", "bi-envelope"], ["type", "text", "formControlName", "email", "placeholder", "Search by email", 1, "form-control", "form-control-sm"], [1, "col-xl-2", "col-md-3", "col-sm-6"], [1, "bi", "bi-telephone"], ["type", "text", "formControlName", "phone", "maxlength", "10", "placeholder", "Search phone", 1, "form-control", "form-control-sm", 3, "keypress", "input"], ["formControlName", "status", 1, "form-select", "form-select-sm"], ["value", ""], ["value", "1"], ["value", "0"], [1, "col-xl-2", "col-md-12", "d-flex", "gap-2"], ["type", "submit", 1, "btn-filter-apply", "flex-grow-1", 3, "click"], [1, "bi", "bi-search"], ["type", "button", 1, "btn-filter-reset", "flex-grow-1", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"], [3, "formGroup", "limit", "total_pages", "page_no", "callback"], [1, "app-table-card"], [1, "table-wrapper"], [1, "table", "align-middle"], [2, "width", "60px"], [1, "cursor-pointer", "user-selection-none", 3, "click"], [1, "bi", "bi-arrow-up-short", 3, "ngClass"], [1, "bi", "bi-arrow-down-short", 3, "ngClass"], [1, "text-center", 2, "width", "140px"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "fs-14", "fw-bold"], [1, "bi", 3, "ngClass"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", "p-4"], [3, "formGroup"], [1, "row", "g-3"], [1, "col-xl-3", "col-md-4", "col-sm-6"], [1, "text-danger"], ["type", "text", "formControlName", "name", "maxlength", "30", "placeholder", "Enter full name", 1, "form-control", "form-control-sm", 3, "input"], ["controlName", "name", "fieldName", "Name", 3, "formGroup"], ["type", "text", "formControlName", "email", "maxlength", "50", "placeholder", "Enter email", 1, "form-control", "form-control-sm", 3, "input"], ["controlName", "email", "fieldName", "Email", 3, "formGroup"], ["type", "text", "formControlName", "phone", "maxlength", "10", "placeholder", "10-digit number", 1, "form-control", "form-control-sm", 3, "keypress", "paste", "input"], ["controlName", "phone", "fieldName", "Phone", 3, "formGroup"], ["type", "password", "formControlName", "password", "maxlength", "15", "placeholder", "Set password", 1, "form-control", "form-control-sm", 3, "input"], ["controlName", "password", "fieldName", "Password", 3, "formGroup"], ["type", "text", "formControlName", "address", "maxlength", "100", "placeholder", "Street address", 1, "form-control", "form-control-sm", 3, "input"], ["controlName", "address", "fieldName", "Address", 3, "formGroup"], ["type", "text", "formControlName", "pincode", "maxlength", "6", "placeholder", "Pincode", 1, "form-control", "form-control-sm", 3, "keypress", "paste", "input"], ["controlName", "pincode", "fieldName", "Pincode", 3, "formGroup"], ["value", "1", "selected", ""], ["controlName", "status", "fieldName", "Status", 3, "formGroup"], ["formControlName", "state", 1, "form-select", "form-select-sm", 3, "change"], [3, "value"], ["controlName", "state", "fieldName", "State", 3, "formGroup"], ["formControlName", "district", 1, "form-select", "form-select-sm"], ["controlName", "district", "fieldName", "District", 3, "formGroup"], ["formControlName", "profile", "type", "file", 1, "form-control", "form-control-sm", 3, "change"], ["controlName", "profile", "fieldName", "Profile", 3, "formGroup"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "bi", "bi-check2"], [1, "text-muted", "fw-semibold"], [1, "fw-semibold", "text-heading"], [1, "text-muted"], [1, "badge", 3, "ngClass"], [1, "text-center"], [1, "action-btn-group", "justify-content-center"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", "title", "Edit Client", 1, "btn-action-icon", "primary", 3, "click"], [1, "bi", "bi-pencil"], ["title", "Delete Client", 1, "btn-action-icon", "danger", 3, "click"], [1, "bi", "bi-trash"], ["target", "_blank", 1, "text-decoration-none", 3, "href"], ["title", "Chat on WhatsApp", 1, "btn-action-icon", "success"], [1, "bi", "bi-whatsapp"], ["colspan", "6", 1, "text-center", "py-4", "text-muted"], [1, "bi", "bi-inbox", "fs-3", "d-block", "mb-1", "opacity-50"]], template: function ClientComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h2", 5);
      \u0275\u0275element(4, "i", 6);
      \u0275\u0275text(5, " Client Master ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 7);
      \u0275\u0275text(7, "Manage registered clients, contact details, and account status");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 8)(9, "button", 9);
      \u0275\u0275listener("click", function ClientComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterOption = !ctx.filterOption);
      });
      \u0275\u0275element(10, "i", 10);
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, ClientComponent_Conditional_13_Template, 1, 0, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 12);
      \u0275\u0275listener("click", function ClientComponent_Template_button_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddClientForm());
      });
      \u0275\u0275element(15, "i", 13);
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "Add Client");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "div", 14)(19, "div", 15)(20, "span", 16);
      \u0275\u0275element(21, "i", 17);
      \u0275\u0275text(22, " Filter Clients ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 18);
      \u0275\u0275listener("click", function ClientComponent_Template_button_click_23_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterOption = false);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "form", 19);
      \u0275\u0275listener("submit", function ClientComponent_Template_form_submit_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.getTable());
      });
      \u0275\u0275elementStart(25, "div", 20)(26, "label", 21);
      \u0275\u0275text(27, "Client Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 22)(29, "span", 23);
      \u0275\u0275element(30, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 20)(33, "label", 21);
      \u0275\u0275text(34, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 22)(36, "span", 23);
      \u0275\u0275element(37, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "input", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 28)(40, "label", 21);
      \u0275\u0275text(41, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 22)(43, "span", 23);
      \u0275\u0275element(44, "i", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "input", 30);
      \u0275\u0275listener("keypress", function ClientComponent_Template_input_keypress_45_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.numberOnly($event));
      })("input", function ClientComponent_Template_input_input_45_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 10));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 28)(47, "label", 21);
      \u0275\u0275text(48, "Account Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "select", 31)(50, "option", 32);
      \u0275\u0275text(51, "All Statuses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "option", 33);
      \u0275\u0275text(53, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "option", 34);
      \u0275\u0275text(55, "Inactive");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "div", 35)(57, "button", 36);
      \u0275\u0275listener("click", function ClientComponent_Template_button_click_57_listener() {
        let tmp_3_0;
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView((tmp_3_0 = ctx.filterForm.get("page")) == null ? null : tmp_3_0.setValue(1));
      });
      \u0275\u0275element(58, "i", 37);
      \u0275\u0275text(59, " Apply ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "button", 38);
      \u0275\u0275listener("click", function ClientComponent_Template_button_click_60_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilterForm());
      });
      \u0275\u0275element(61, "i", 39);
      \u0275\u0275text(62, " Reset ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(63, "app-pagination", 40);
      \u0275\u0275elementStart(64, "div", 41)(65, "div", 42)(66, "table", 43)(67, "thead")(68, "tr")(69, "th", 44);
      \u0275\u0275text(70, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th", 45);
      \u0275\u0275listener("click", function ClientComponent_Template_th_click_71_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sortingTable("name"));
      });
      \u0275\u0275text(72, " Name ");
      \u0275\u0275element(73, "i", 46)(74, "i", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th");
      \u0275\u0275text(76, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th");
      \u0275\u0275text(78, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th");
      \u0275\u0275text(80, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 48);
      \u0275\u0275text(82, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "tbody");
      \u0275\u0275repeaterCreate(84, ClientComponent_For_85_Template, 22, 8, "tr", null, \u0275\u0275repeaterTrackByIndex, false, ClientComponent_ForEmpty_86_Template, 4, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(87, "div", 49)(88, "div", 50)(89, "div", 51)(90, "div", 52)(91, "h5", 53);
      \u0275\u0275element(92, "i", 54);
      \u0275\u0275text(93);
      \u0275\u0275elementEnd();
      \u0275\u0275element(94, "button", 55, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 56)(97, "form", 57)(98, "div", 58)(99, "div", 59)(100, "label", 21);
      \u0275\u0275text(101, "Full Name ");
      \u0275\u0275elementStart(102, "span", 60);
      \u0275\u0275text(103, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "input", 61);
      \u0275\u0275listener("input", function ClientComponent_Template_input_input_104_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 30));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(105, "app-form-validation-message", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div", 59)(107, "label", 21);
      \u0275\u0275text(108, "Email Address ");
      \u0275\u0275elementStart(109, "span", 60);
      \u0275\u0275text(110, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "input", 63);
      \u0275\u0275listener("input", function ClientComponent_Template_input_input_111_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 50));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(112, "app-form-validation-message", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 59)(114, "label", 21);
      \u0275\u0275text(115, "Phone Number ");
      \u0275\u0275elementStart(116, "span", 60);
      \u0275\u0275text(117, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "input", 65);
      \u0275\u0275listener("keypress", function ClientComponent_Template_input_keypress_118_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.numberOnly($event));
      })("paste", function ClientComponent_Template_input_paste_118_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.handleNumberPaste($event, 10));
      })("input", function ClientComponent_Template_input_input_118_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 10));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(119, "app-form-validation-message", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 59)(121, "label", 21);
      \u0275\u0275text(122, "Password ");
      \u0275\u0275elementStart(123, "span", 60);
      \u0275\u0275text(124, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "input", 67);
      \u0275\u0275listener("input", function ClientComponent_Template_input_input_125_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 15));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(126, "app-form-validation-message", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "div", 59)(128, "label", 21);
      \u0275\u0275text(129, "Address ");
      \u0275\u0275elementStart(130, "span", 60);
      \u0275\u0275text(131, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "input", 69);
      \u0275\u0275listener("input", function ClientComponent_Template_input_input_132_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 100));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(133, "app-form-validation-message", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "div", 59)(135, "label", 21);
      \u0275\u0275text(136, "Pincode ");
      \u0275\u0275elementStart(137, "span", 60);
      \u0275\u0275text(138, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "input", 71);
      \u0275\u0275listener("keypress", function ClientComponent_Template_input_keypress_139_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.numberOnly($event));
      })("paste", function ClientComponent_Template_input_paste_139_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.handleNumberPaste($event, 6));
      })("input", function ClientComponent_Template_input_input_139_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 6));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(140, "app-form-validation-message", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "div", 59)(142, "label", 21);
      \u0275\u0275text(143, "Status ");
      \u0275\u0275elementStart(144, "span", 60);
      \u0275\u0275text(145, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "select", 31)(147, "option", 73);
      \u0275\u0275text(148, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "option", 34);
      \u0275\u0275text(150, "Inactive");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(151, "app-form-validation-message", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "div", 59)(153, "label", 21);
      \u0275\u0275text(154, "State ");
      \u0275\u0275elementStart(155, "span", 60);
      \u0275\u0275text(156, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "select", 75, 1);
      \u0275\u0275listener("change", function ClientComponent_Template_select_change_157_listener() {
        \u0275\u0275restoreView(_r1);
        const state_id_r6 = \u0275\u0275reference(158);
        return \u0275\u0275resetView(ctx.getDistrict(state_id_r6.value));
      });
      \u0275\u0275elementStart(159, "option", 32);
      \u0275\u0275text(160, "-- Select State --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(161, ClientComponent_For_162_Template, 2, 2, "option", 76, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275element(163, "app-form-validation-message", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "div", 59)(165, "label", 21);
      \u0275\u0275text(166, "District ");
      \u0275\u0275elementStart(167, "span", 60);
      \u0275\u0275text(168, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "select", 78)(170, "option", 32);
      \u0275\u0275text(171, "-- Select District --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(172, ClientComponent_For_173_Template, 2, 2, "option", 76, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275element(174, "app-form-validation-message", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "div", 59)(176, "label", 21);
      \u0275\u0275text(177, "Profile Photo ");
      \u0275\u0275elementStart(178, "span", 60);
      \u0275\u0275text(179, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "input", 80);
      \u0275\u0275listener("change", function ClientComponent_Template_input_change_180_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.fileUpload($event, "ownerProfile"));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(181, "app-form-validation-message", 81);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(182, "div", 82)(183, "button", 83);
      \u0275\u0275listener("click", function ClientComponent_Template_button_click_183_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clientForm.reset());
      });
      \u0275\u0275element(184, "i", 39);
      \u0275\u0275text(185, " Reset Form ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "button", 84);
      \u0275\u0275listener("click", function ClientComponent_Template_button_click_186_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.editMode ? ctx.updateClient() : ctx.addClient());
      });
      \u0275\u0275element(187, "i", 85);
      \u0275\u0275text(188);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275classProp("active", ctx.filterOption);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.filterOption ? 13 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", ctx.filterOption ? "" : "d-none");
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.filterForm);
      \u0275\u0275advance(39);
      \u0275\u0275property("formGroup", ctx.filterForm)("limit", ctx.limit)("total_pages", ctx.total_pages)("page_no", ctx.page)("callback", ctx.getTable.bind(ctx));
      \u0275\u0275advance(10);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(27, _c1, ctx.sortColumn === "name" && ctx.sortOrder === "ASC"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(29, _c1, ctx.sortColumn === "name" && ctx.sortOrder === "DESC"));
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.table_data);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngClass", ctx.editMode ? "bi-pencil-square" : "bi-person-plus-fill");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.editMode ? "Edit Client Account" : "Register New Client", " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.clientForm);
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.clientForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.clientForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.clientForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.clientForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.clientForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.clientForm);
      \u0275\u0275advance(11);
      \u0275\u0275property("formGroup", ctx.clientForm);
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.state_data);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.clientForm);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.district_data);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.clientForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.clientForm);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.editMode ? "Save Changes" : "Create Client", " ");
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, CommonModule, NgClass, PaginationComponent, FormValidationMessageComponent], styles: ["\n\n.text-heading[_ngcontent-%COMP%] {\n  color: var(--text-heading-color);\n}\n/*# sourceMappingURL=client.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientComponent, [{
    type: Component,
    args: [{ selector: "app-client", imports: [ReactiveFormsModule, CommonModule, PaginationComponent, FormValidationMessageComponent], template: `<div class="app-page-container">

    <!-- Common Page Header -->
    <div class="app-page-header">
        <div class="app-page-title-group">
            <h2 class="app-page-title">
                <i class="bi bi-people-fill"></i>
                Client Master
            </h2>
            <p class="app-page-subtitle">Manage registered clients, contact details, and account status</p>
        </div>
        <div class="app-page-actions">
            <button class="btn-filter-toggle" [class.active]="filterOption" (click)="filterOption = !filterOption" type="button">
                <i class="bi bi-funnel-fill"></i>
                <span>Filter</span>
                @if (filterOption) {
                    <span class="filter-active-dot"></span>
                }
            </button>
            <button class="btn btn-sm btn-primary d-flex align-items-center gap-1" (click)="openAddClientForm()" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                <i class="bi bi-plus-lg"></i>
                <span>Add Client</span>
            </button>
        </div>
    </div>

    <!-- Filter Card -->
    <div class="app-filter-card" [ngClass]="filterOption ? '' : 'd-none'">
        <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
            <span class="filter-header-title">
                <i class="bi bi-sliders"></i> Filter Clients
            </span>
            <button type="button" class="btn-close btn-sm" (click)="filterOption = false" aria-label="Close"></button>
        </div>

        <form [formGroup]="filterForm" class="row g-2 align-items-end" (submit)="getTable()">
            <div class="col-xl-3 col-md-3 col-sm-6">
                <label class="form-label">Client Name</label>
                <div class="input-group input-group-sm">
                    <span class="input-group-text"><i class="bi bi-person"></i></span>
                    <input type="text" class="form-control form-control-sm" formControlName="name" placeholder="Search by name">
                </div>
            </div>

            <div class="col-xl-3 col-md-3 col-sm-6">
                <label class="form-label">Email Address</label>
                <div class="input-group input-group-sm">
                    <span class="input-group-text"><i class="bi bi-envelope"></i></span>
                    <input type="text" class="form-control form-control-sm" formControlName="email" placeholder="Search by email">
                </div>
            </div>

            <div class="col-xl-2 col-md-3 col-sm-6">
                <label class="form-label">Phone Number</label>
                <div class="input-group input-group-sm">
                    <span class="input-group-text"><i class="bi bi-telephone"></i></span>
                    <input type="text" class="form-control form-control-sm" formControlName="phone" maxlength="10" (keypress)="GF.numberOnly($event)" (input)="GF.enforceMaxLength($event, 10)" placeholder="Search phone">
                </div>
            </div>

            <div class="col-xl-2 col-md-3 col-sm-6">
                <label class="form-label">Account Status</label>
                <select class="form-select form-select-sm" formControlName="status">
                    <option value="">All Statuses</option>
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                </select>
            </div>

            <div class="col-xl-2 col-md-12 d-flex gap-2">
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
                        <th class="cursor-pointer user-selection-none" (click)="sortingTable('name')">
                            Name 
                            <i class="bi bi-arrow-up-short" [ngClass]="{'d-none': sortColumn === 'name' && sortOrder === 'ASC'}"></i>
                            <i class="bi bi-arrow-down-short" [ngClass]="{'d-none': sortColumn === 'name' && sortOrder === 'DESC'}"></i>
                        </th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th class="text-center" style="width: 140px;">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    @for(items of table_data; track $index; let i = $index){
                    <tr>
                        <td class="text-muted fw-semibold">{{ (page - 1) * limit + i + 1 }}</td>
                        <td>
                            <div class="fw-semibold text-heading">{{items.name}}</div>
                        </td>
                        <td class="text-muted">{{items.email}}</td>
                        <td>{{items.phone}}</td>
                        <td>
                            <span class="badge" [ngClass]="items.status === 1 ? 'bg-success' : 'bg-danger'">
                                {{ items.status === 1 ? 'Active' : 'Inactive' }}
                            </span>
                        </td>
                        <td class="text-center">
                            <div class="action-btn-group justify-content-center">
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" (click)="editClient(items.id)"
                                    class="btn-action-icon primary" title="Edit Client">
                                    <i class="bi bi-pencil"></i>
                                </button>
                                <button class="btn-action-icon danger" (click)="deleteClient(items.id)" title="Delete Client">
                                    <i class="bi bi-trash"></i>
                                </button>
                                <a href="https://wa.me/{{items.phone}}" target="_blank" class="text-decoration-none">
                                    <button class="btn-action-icon success" title="Chat on WhatsApp">
                                        <i class="bi bi-whatsapp"></i>
                                    </button>
                                </a>
                            </div>
                        </td>
                    </tr>
                    }@empty{
                    <tr>
                        <td colspan="6" class="text-center py-4 text-muted">
                            <i class="bi bi-inbox fs-3 d-block mb-1 opacity-50"></i>
                            No clients found matching the criteria.
                        </td>
                    </tr>
                    }
                </tbody>
            </table>
        </div>
    </div>

    <!-- Add/Edit Client Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fs-14 fw-bold" id="exampleModalLabel">
                        <i class="bi" [ngClass]="editMode ? 'bi-pencil-square' : 'bi-person-plus-fill'"></i>
                        {{editMode ? 'Edit Client Account' : 'Register New Client'}}
                    </h5>
                    <button type="button" #modelClose class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                    <form [formGroup]="clientForm">
                        <div class="row g-3">
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Full Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-sm" formControlName="name" maxlength="30" (input)="GF.enforceMaxLength($event, 30)" placeholder="Enter full name">
                                <app-form-validation-message [formGroup]="clientForm" controlName="name" fieldName="Name"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Email Address <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-sm" formControlName="email" maxlength="50" (input)="GF.enforceMaxLength($event, 50)" placeholder="Enter email">
                                <app-form-validation-message [formGroup]="clientForm" controlName="email" fieldName="Email"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Phone Number <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-sm" formControlName="phone" maxlength="10" (keypress)="GF.numberOnly($event)" (paste)="GF.handleNumberPaste($event, 10)" (input)="GF.enforceMaxLength($event, 10)" placeholder="10-digit number">
                                <app-form-validation-message [formGroup]="clientForm" controlName="phone" fieldName="Phone"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Password <span class="text-danger">*</span></label>
                                <input type="password" class="form-control form-control-sm" formControlName="password" maxlength="15" (input)="GF.enforceMaxLength($event, 15)" placeholder="Set password">
                                <app-form-validation-message [formGroup]="clientForm" controlName="password" fieldName="Password"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Address <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-sm" formControlName="address" maxlength="100" (input)="GF.enforceMaxLength($event, 100)" placeholder="Street address">
                                <app-form-validation-message [formGroup]="clientForm" controlName="address" fieldName="Address"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Pincode <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-sm" formControlName="pincode" maxlength="6" (keypress)="GF.numberOnly($event)" (paste)="GF.handleNumberPaste($event, 6)" (input)="GF.enforceMaxLength($event, 6)" placeholder="Pincode">
                                <app-form-validation-message [formGroup]="clientForm" controlName="pincode" fieldName="Pincode"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Status <span class="text-danger">*</span></label>
                                <select formControlName="status" class="form-select form-select-sm">
                                    <option value="1" selected>Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                                <app-form-validation-message [formGroup]="clientForm" controlName="status" fieldName="Status"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">State <span class="text-danger">*</span></label>
                                <select formControlName="state" (change)="getDistrict(state_id.value)" #state_id class="form-select form-select-sm">
                                    <option value="">-- Select State --</option>
                                    @for (item of state_data; track $index) {
                                    <option [value]="item.state_id">{{ item.state_name }}</option>
                                    }
                                </select>
                                <app-form-validation-message [formGroup]="clientForm" controlName="state" fieldName="State"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">District <span class="text-danger">*</span></label>
                                <select formControlName="district" class="form-select form-select-sm">
                                    <option value="">-- Select District --</option>
                                    @for (item of district_data; track $index) {
                                    <option [value]="item.district_id">{{ item.district_name }}</option>
                                    }
                                </select>
                                <app-form-validation-message [formGroup]="clientForm" controlName="district" fieldName="District"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Profile Photo <span class="text-danger">*</span></label>
                                <input formControlName="profile" (change)="fileUpload($event, 'ownerProfile')" type="file" class="form-control form-control-sm">
                                <app-form-validation-message [formGroup]="clientForm" controlName="profile" fieldName="Profile"></app-form-validation-message>
                            </div>
                            
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" (click)="this.clientForm.reset()" class="btn btn-sm btn-outline-secondary">
                        <i class="bi bi-arrow-counterclockwise"></i> Reset Form
                    </button>
                    <button type="button" (click)="editMode ? updateClient() : addClient()" class="btn btn-sm btn-primary">
                        <i class="bi bi-check2"></i> {{editMode ? 'Save Changes' : 'Create Client'}}
                    </button>
                </div>
            </div>
        </div>
    </div>

</div>`, styles: ["/* src/app/pages/client/client.component.css */\n.text-heading {\n  color: var(--text-heading-color);\n}\n/*# sourceMappingURL=client.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: GlobalService }], { modelClose: [{
    type: ViewChild,
    args: ["modelClose"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientComponent, { className: "ClientComponent", filePath: "src/app/pages/client/client.component.ts", lineNumber: 30 });
})();
export {
  ClientComponent
};
//# sourceMappingURL=chunk-YNLGG4YP.js.map
