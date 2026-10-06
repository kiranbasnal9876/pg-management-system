import {
  StateNamePipe
} from "./chunk-RVCEBUUJ.js";
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
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

// src/app/pages/property/property.component.ts
var _c0 = ["modelClose"];
var _c1 = (a0) => ({ "d-none": a0 });
function PropertyComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 12);
  }
}
function PropertyComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r2 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", items_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(items_r2.name);
  }
}
function PropertyComponent_ForEmpty_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1, "No properties found");
    \u0275\u0275elementEnd();
  }
}
function PropertyComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("value", item_r4.state_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.state_name);
  }
}
function PropertyComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("value", item_r5.district_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5.district_name);
  }
}
function PropertyComponent_For_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 78);
    \u0275\u0275element(5, "i", 79);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 80);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 81);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "stateName");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 82);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 83)(21, "div", 84)(22, "button", 85);
    \u0275\u0275listener("click", function PropertyComponent_For_96_Template_button_click_22_listener() {
      const items_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.edit(items_r7.id));
    });
    \u0275\u0275element(23, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 87);
    \u0275\u0275listener("click", function PropertyComponent_For_96_Template_button_click_24_listener() {
      const items_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.delete(items_r7.id));
    });
    \u0275\u0275element(25, "i", 88);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const items_r7 = ctx.$implicit;
    const \u0275$index_167_r9 = ctx.$index;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r7.page - 1) * ctx_r7.limit + \u0275$index_167_r9 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", items_r7.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", items_r7.total_rooms, " Rooms");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(items_r7.location);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 8, items_r7.state, ctx_r7.state_data));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r7.getDistrictForView(items_r7.district));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", items_r7.status === 1 ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", items_r7.status === 1 ? "Active" : "Inactive", " ");
  }
}
function PropertyComponent_ForEmpty_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 89);
    \u0275\u0275element(2, "i", 90);
    \u0275\u0275text(3, " No properties found matching the criteria. ");
    \u0275\u0275elementEnd()();
  }
}
function PropertyComponent_For_159_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275property("value", item_r11.state_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r11.state_name);
  }
}
function PropertyComponent_For_170_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    \u0275\u0275property("value", item_r12.district_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r12.district_name);
  }
}
var PropertyComponent = class _PropertyComponent {
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
  districtViewData;
  editMode = false;
  editPropertyId = "";
  property_data;
  modelClose;
  constructor(api, GF) {
    this.api = api;
    this.GF = GF;
  }
  ngOnInit() {
    this.getTable();
    this.getState();
    this.getPropertyData();
  }
  filterForm = new FormGroup({
    id: new FormControl(""),
    action: new FormControl("property"),
    district: new FormControl(""),
    state: new FormControl(""),
    status: new FormControl(""),
    limit: new FormControl(10),
    order: new FormControl("DESC"),
    sort_by: new FormControl("id"),
    page: new FormControl(1)
  });
  propertyForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    state: new FormControl("", [Validators.required]),
    location: new FormControl("", [Validators.required, Validators.maxLength(100), Validators.minLength(3)]),
    district: new FormControl("", [Validators.required]),
    status: new FormControl("", Validators.required),
    pincode: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    total_rooms: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.maxLength(4)]),
    id: new FormControl("")
  });
  filterSearch() {
    this.filterForm.get("page")?.setValue(1);
  }
  getTable() {
    this.api.postApi("property-table", this.filterForm.value).subscribe((res) => {
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
      state: "",
      limit: 10,
      order: "DESC",
      sort_by: "id",
      page: 1,
      id: "",
      district: ""
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
  add() {
    this.propertyForm.markAllAsTouched();
    const formData = __spreadValues({}, this.propertyForm.value);
    if (this.propertyForm.valid) {
      this.api.postApi("add-pg-property", formData).subscribe((res) => {
        if (res.status) {
          this.GF.showToast(res.message, "success");
          this.closepropertyForm();
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
  getDistrictForView(district_id) {
    return this.state_district_data.district.filter((ele) => {
      return ele.district_id == district_id;
    })[0].district_name;
  }
  getDistrict(state_id) {
    this.propertyForm.get("district")?.setValue("");
    this.filterForm.get("district")?.setValue("");
    this.district_data = this.state_district_data.district.filter((ele) => {
      return ele.state_id == state_id;
    });
  }
  delete(clinetId) {
    this.api.postApi("delete", { action: "property", id: clinetId }).subscribe((res) => {
      if (res.status) {
        this.GF.showToast("Property deleted successfully", "success");
        this.getTable();
      } else {
        this.GF.showToast(res.message, "danger");
      }
    }, (err) => {
      this.GF.showToast(err.error.message, "danger");
    });
  }
  edit(clientId) {
    this.propertyForm.markAsUntouched();
    this.editMode = true;
    this.api.postApi("get-list", { action: "property", id: clientId }).subscribe((res) => {
      if (res.status) {
        this.editPropertyId = res.data.id;
        delete res.data["profile"];
        delete res.data["password"];
        delete res.data["id"];
        this.propertyForm.patchValue(res.data);
        setTimeout(() => {
          this.getDistrict(res.data.state);
          this.propertyForm.get("district")?.setValue(res.data.district);
        }, 200);
      } else {
        this.GF.showToast(res.message, "danger");
      }
    }, (err) => {
      this.GF.showToast(err.error.message, "danger");
    });
  }
  update() {
    this.propertyForm.markAllAsTouched();
    const formData = __spreadProps(__spreadValues({}, this.propertyForm.value), {
      id: this.editPropertyId
    });
    if (this.propertyForm.valid) {
      this.api.postApi("update-pg-property", formData).subscribe((res) => {
        if (res.status) {
          this.GF.showToast(res.message, "success");
          this.closepropertyForm();
        } else {
          this.GF.showToast(res.message, "danger");
        }
      }, (err) => {
        this.GF.showToast(err.error.message, "danger");
      });
    }
  }
  closepropertyForm() {
    this.modelClose.nativeElement.click();
    this.propertyForm.reset();
    this.getTable();
  }
  openAddpropertyForm() {
    this.propertyForm.reset();
    this.propertyForm.markAsUntouched();
    this.editMode = false;
    this.district_data = [];
  }
  getPropertyData() {
    this.api.postApi("property-data", {}).subscribe((res) => {
      if (res.status) {
        this.property_data = res.data;
      } else {
        this.GF.showToast(res.message, "danger");
      }
    }, (err) => {
      this.GF.showToast(err.error.message, "danger");
    });
  }
  static \u0275fac = function PropertyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PropertyComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(GlobalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PropertyComponent, selectors: [["app-property"]], viewQuery: function PropertyComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.modelClose = _t.first);
    }
  }, decls: 179, vars: 35, consts: [["filter_state", ""], ["modelClose", ""], ["state_id", ""], [1, "app-page-container"], [1, "app-page-header"], [1, "app-page-title-group"], [1, "app-page-title"], [1, "bi", "bi-buildings-fill"], [1, "app-page-subtitle"], [1, "app-page-actions"], ["type", "button", 1, "btn-filter-toggle", 3, "click"], [1, "bi", "bi-funnel-fill"], [1, "filter-active-dot"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-sm", "btn-primary", "d-flex", "align-items-center", "gap-1", 3, "click"], [1, "bi", "bi-plus-lg"], [1, "app-filter-card", 3, "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "border-bottom", "pb-2"], [1, "filter-header-title"], [1, "bi", "bi-sliders"], ["type", "button", "aria-label", "Close", 1, "btn-close", "btn-sm", 3, "click"], [1, "row", "g-2", "align-items-end", 3, "submit", "formGroup"], [1, "col-xl-3", "col-md-3", "col-sm-6"], [1, "form-label"], ["formControlName", "id", 1, "form-select", "form-select-sm"], ["value", ""], [3, "value"], ["id", "stateId", "formControlName", "state", 1, "form-select", "form-select-sm", 3, "change"], [1, "col-xl-2", "col-md-3", "col-sm-6"], ["id", "districtId", "formControlName", "district", 1, "form-select", "form-select-sm"], ["id", "statusId", "formControlName", "status", 1, "form-select", "form-select-sm"], ["value", "1"], ["value", "0"], [1, "col-xl-2", "col-md-12", "d-flex", "gap-2"], ["type", "submit", 1, "btn-filter-apply", "flex-grow-1", 3, "click"], [1, "bi", "bi-search"], ["type", "button", 1, "btn-filter-reset", "flex-grow-1", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"], [3, "formGroup", "limit", "total_pages", "page_no", "callback"], [1, "app-table-card"], [1, "table-wrapper"], [1, "table", "align-middle"], [2, "width", "60px"], [1, "cursor-pointer", "user-selection-none", 3, "click"], [1, "bi", "bi-arrow-up-short", 3, "ngClass"], [1, "bi", "bi-arrow-down-short", 3, "ngClass"], [1, "text-center", 2, "width", "120px"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "fs-14", "fw-bold"], [1, "bi", 3, "ngClass"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", "p-4"], [3, "formGroup"], [1, "row", "g-3"], [1, "col-xl-4", "col-md-4", "col-sm-6"], [1, "text-danger"], ["type", "text", "formControlName", "name", "maxlength", "30", "placeholder", "e.g. Sunrise Luxury PG", 1, "form-control", "form-control-sm", 3, "input"], ["controlName", "name", "fieldName", "Name", 3, "formGroup"], ["type", "text", "formControlName", "total_rooms", "maxlength", "4", "placeholder", "e.g. 25", 1, "form-control", "form-control-sm", 3, "keypress", "paste", "input"], ["controlName", "total_rooms", "fieldName", "Total rooms", 3, "formGroup"], ["type", "text", "formControlName", "location", "maxlength", "100", "placeholder", "Street or Area location", 1, "form-control", "form-control-sm", 3, "input"], ["controlName", "location", "fieldName", "Location", 3, "formGroup"], ["type", "text", "formControlName", "pincode", "maxlength", "6", "placeholder", "Pincode", 1, "form-control", "form-control-sm", 3, "keypress", "paste", "input"], ["controlName", "pincode", "fieldName", "Pincode", 3, "formGroup"], ["formControlName", "status", 1, "form-select", "form-select-sm"], ["value", "1", "selected", ""], ["controlName", "status", "fieldName", "Status", 3, "formGroup"], ["formControlName", "state", 1, "form-select", "form-select-sm", 3, "change"], ["controlName", "state", "fieldName", "State", 3, "formGroup"], ["formControlName", "district", 1, "form-select", "form-select-sm"], ["controlName", "district", "fieldName", "District", 3, "formGroup"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "bi", "bi-check2"], [1, "text-muted", "fw-semibold"], [1, "fw-semibold", "text-heading", "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-building", "text-primary"], [1, "badge", "bg-info", "fw-semibold"], [1, "text-muted"], [1, "badge", 3, "ngClass"], [1, "text-center"], [1, "action-btn-group", "justify-content-center"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", "title", "Edit Property", 1, "btn-action-icon", "primary", 3, "click"], [1, "bi", "bi-pencil"], ["title", "Delete Property", 1, "btn-action-icon", "danger", 3, "click"], [1, "bi", "bi-trash"], ["colspan", "8", 1, "text-center", "py-4", "text-muted"], [1, "bi", "bi-inbox", "fs-3", "d-block", "mb-1", "opacity-50"]], template: function PropertyComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "h2", 6);
      \u0275\u0275element(4, "i", 7);
      \u0275\u0275text(5, " Property Master ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 8);
      \u0275\u0275text(7, "Manage your PG hostels, branch locations, and total room capacities");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 9)(9, "button", 10);
      \u0275\u0275listener("click", function PropertyComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterOption = !ctx.filterOption);
      });
      \u0275\u0275element(10, "i", 11);
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, PropertyComponent_Conditional_13_Template, 1, 0, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 13);
      \u0275\u0275listener("click", function PropertyComponent_Template_button_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddpropertyForm());
      });
      \u0275\u0275element(15, "i", 14);
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "Add Property");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "div", 15)(19, "div", 16)(20, "span", 17);
      \u0275\u0275element(21, "i", 18);
      \u0275\u0275text(22, " Filter Properties ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 19);
      \u0275\u0275listener("click", function PropertyComponent_Template_button_click_23_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterOption = false);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "form", 20);
      \u0275\u0275listener("submit", function PropertyComponent_Template_form_submit_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.getTable());
      });
      \u0275\u0275elementStart(25, "div", 21)(26, "label", 22);
      \u0275\u0275text(27, "Property Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "select", 23)(29, "option", 24);
      \u0275\u0275text(30, "-- All Properties --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(31, PropertyComponent_For_32_Template, 2, 2, "option", 25, \u0275\u0275repeaterTrackByIndex, false, PropertyComponent_ForEmpty_33_Template, 2, 0, "option", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 21)(35, "label", 22);
      \u0275\u0275text(36, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "select", 26, 0);
      \u0275\u0275listener("change", function PropertyComponent_Template_select_change_37_listener() {
        \u0275\u0275restoreView(_r1);
        const filter_state_r3 = \u0275\u0275reference(38);
        return \u0275\u0275resetView(ctx.getDistrict(filter_state_r3.value));
      });
      \u0275\u0275elementStart(39, "option", 24);
      \u0275\u0275text(40, "-- Select State --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(41, PropertyComponent_For_42_Template, 2, 2, "option", 25, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 27)(44, "label", 22);
      \u0275\u0275text(45, "District");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "select", 28)(47, "option", 24);
      \u0275\u0275text(48, "-- Select District --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(49, PropertyComponent_For_50_Template, 2, 2, "option", 25, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 27)(52, "label", 22);
      \u0275\u0275text(53, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "select", 29)(55, "option", 24);
      \u0275\u0275text(56, "All Statuses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "option", 30);
      \u0275\u0275text(58, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "option", 31);
      \u0275\u0275text(60, "Inactive");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "div", 32)(62, "button", 33);
      \u0275\u0275listener("click", function PropertyComponent_Template_button_click_62_listener() {
        let tmp_4_0;
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView((tmp_4_0 = ctx.filterForm.get("page")) == null ? null : tmp_4_0.setValue(1));
      });
      \u0275\u0275element(63, "i", 34);
      \u0275\u0275text(64, " Apply ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "button", 35);
      \u0275\u0275listener("click", function PropertyComponent_Template_button_click_65_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilterForm());
      });
      \u0275\u0275element(66, "i", 36);
      \u0275\u0275text(67, " Reset ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(68, "app-pagination", 37);
      \u0275\u0275elementStart(69, "div", 38)(70, "div", 39)(71, "table", 40)(72, "thead")(73, "tr")(74, "th", 41);
      \u0275\u0275text(75, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th", 42);
      \u0275\u0275listener("click", function PropertyComponent_Template_th_click_76_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sortingTable("name"));
      });
      \u0275\u0275text(77, " Property Name ");
      \u0275\u0275element(78, "i", 43)(79, "i", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 42);
      \u0275\u0275listener("click", function PropertyComponent_Template_th_click_80_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sortingTable("total_rooms"));
      });
      \u0275\u0275text(81, " Total Rooms ");
      \u0275\u0275element(82, "i", 43)(83, "i", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th");
      \u0275\u0275text(85, "Address / Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th");
      \u0275\u0275text(87, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th");
      \u0275\u0275text(89, "District");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th");
      \u0275\u0275text(91, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th", 45);
      \u0275\u0275text(93, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(94, "tbody");
      \u0275\u0275repeaterCreate(95, PropertyComponent_For_96_Template, 26, 11, "tr", null, \u0275\u0275repeaterTrackByIndex, false, PropertyComponent_ForEmpty_97_Template, 4, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(98, "div", 46)(99, "div", 47)(100, "div", 48)(101, "div", 49)(102, "h5", 50);
      \u0275\u0275element(103, "i", 51);
      \u0275\u0275text(104);
      \u0275\u0275elementEnd();
      \u0275\u0275element(105, "button", 52, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 53)(108, "form", 54)(109, "div", 55)(110, "div", 56)(111, "label", 22);
      \u0275\u0275text(112, "Property Name ");
      \u0275\u0275elementStart(113, "span", 57);
      \u0275\u0275text(114, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "input", 58);
      \u0275\u0275listener("input", function PropertyComponent_Template_input_input_115_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 30));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(116, "app-form-validation-message", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "div", 56)(118, "label", 22);
      \u0275\u0275text(119, "Total Rooms ");
      \u0275\u0275elementStart(120, "span", 57);
      \u0275\u0275text(121, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "input", 60);
      \u0275\u0275listener("keypress", function PropertyComponent_Template_input_keypress_122_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.numberOnly($event));
      })("paste", function PropertyComponent_Template_input_paste_122_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.handleNumberPaste($event, 4));
      })("input", function PropertyComponent_Template_input_input_122_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 4));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(123, "app-form-validation-message", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div", 56)(125, "label", 22);
      \u0275\u0275text(126, "Address / Location ");
      \u0275\u0275elementStart(127, "span", 57);
      \u0275\u0275text(128, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "input", 62);
      \u0275\u0275listener("input", function PropertyComponent_Template_input_input_129_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 100));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(130, "app-form-validation-message", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "div", 21)(132, "label", 22);
      \u0275\u0275text(133, "Pincode ");
      \u0275\u0275elementStart(134, "span", 57);
      \u0275\u0275text(135, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "input", 64);
      \u0275\u0275listener("keypress", function PropertyComponent_Template_input_keypress_136_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.numberOnly($event));
      })("paste", function PropertyComponent_Template_input_paste_136_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.handleNumberPaste($event, 6));
      })("input", function PropertyComponent_Template_input_input_136_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 6));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(137, "app-form-validation-message", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "div", 21)(139, "label", 22);
      \u0275\u0275text(140, "Status ");
      \u0275\u0275elementStart(141, "span", 57);
      \u0275\u0275text(142, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "select", 66)(144, "option", 67);
      \u0275\u0275text(145, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "option", 31);
      \u0275\u0275text(147, "Inactive");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(148, "app-form-validation-message", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "div", 21)(150, "label", 22);
      \u0275\u0275text(151, "State ");
      \u0275\u0275elementStart(152, "span", 57);
      \u0275\u0275text(153, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "select", 69, 2);
      \u0275\u0275listener("change", function PropertyComponent_Template_select_change_154_listener() {
        \u0275\u0275restoreView(_r1);
        const state_id_r10 = \u0275\u0275reference(155);
        return \u0275\u0275resetView(ctx.getDistrict(state_id_r10.value));
      });
      \u0275\u0275elementStart(156, "option", 24);
      \u0275\u0275text(157, "-- Select State --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(158, PropertyComponent_For_159_Template, 2, 2, "option", 25, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275element(160, "app-form-validation-message", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "div", 21)(162, "label", 22);
      \u0275\u0275text(163, "District ");
      \u0275\u0275elementStart(164, "span", 57);
      \u0275\u0275text(165, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "select", 71)(167, "option", 24);
      \u0275\u0275text(168, "-- Select District --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(169, PropertyComponent_For_170_Template, 2, 2, "option", 25, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275element(171, "app-form-validation-message", 72);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(172, "div", 73)(173, "button", 74);
      \u0275\u0275listener("click", function PropertyComponent_Template_button_click_173_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.propertyForm.reset());
      });
      \u0275\u0275element(174, "i", 36);
      \u0275\u0275text(175, " Reset ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "button", 75);
      \u0275\u0275listener("click", function PropertyComponent_Template_button_click_176_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.editMode ? ctx.update() : ctx.add());
      });
      \u0275\u0275element(177, "i", 76);
      \u0275\u0275text(178);
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
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.property_data);
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.state_data);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.district_data);
      \u0275\u0275advance(19);
      \u0275\u0275property("formGroup", ctx.filterForm)("limit", ctx.limit)("total_pages", ctx.total_pages)("page_no", ctx.page)("callback", ctx.getTable.bind(ctx));
      \u0275\u0275advance(10);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(27, _c1, ctx.sortColumn === "name" && ctx.sortOrder === "ASC"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(29, _c1, ctx.sortColumn === "name" && ctx.sortOrder === "DESC"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(31, _c1, ctx.sortColumn === "total_rooms" && ctx.sortOrder === "ASC"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(33, _c1, ctx.sortColumn === "total_rooms" && ctx.sortOrder === "DESC"));
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.table_data);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngClass", ctx.editMode ? "bi-pencil-square" : "bi-building-fill-add");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.editMode ? "Edit Property Details" : "Register New Property", " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.propertyForm);
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.propertyForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.propertyForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.propertyForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.propertyForm);
      \u0275\u0275advance(11);
      \u0275\u0275property("formGroup", ctx.propertyForm);
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.state_data);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.propertyForm);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.district_data);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.propertyForm);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.editMode ? "Save Changes" : "Create Property", " ");
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, CommonModule, NgClass, PaginationComponent, FormValidationMessageComponent, StateNamePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyComponent, [{
    type: Component,
    args: [{ selector: "app-property", imports: [ReactiveFormsModule, CommonModule, PaginationComponent, FormValidationMessageComponent, StateNamePipe], template: `<div class="app-page-container">

    <!-- Common Page Header -->
    <div class="app-page-header">
        <div class="app-page-title-group">
            <h2 class="app-page-title">
                <i class="bi bi-buildings-fill"></i>
                Property Master
            </h2>
            <p class="app-page-subtitle">Manage your PG hostels, branch locations, and total room capacities</p>
        </div>
        <div class="app-page-actions">
            <button class="btn-filter-toggle" [class.active]="filterOption" (click)="filterOption = !filterOption" type="button">
                <i class="bi bi-funnel-fill"></i>
                <span>Filter</span>
                @if (filterOption) {
                    <span class="filter-active-dot"></span>
                }
            </button>
            <button class="btn btn-sm btn-primary d-flex align-items-center gap-1" (click)="openAddpropertyForm()" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                <i class="bi bi-plus-lg"></i>
                <span>Add Property</span>
            </button>
        </div>
    </div>

    <!-- Filter Card -->
    <div class="app-filter-card" [ngClass]="filterOption ? '' : 'd-none'">
        <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
            <span class="filter-header-title">
                <i class="bi bi-sliders"></i> Filter Properties
            </span>
            <button type="button" class="btn-close btn-sm" (click)="filterOption = false" aria-label="Close"></button>
        </div>

        <form [formGroup]="filterForm" class="row g-2 align-items-end" (submit)="getTable()">
            <div class="col-xl-3 col-md-3 col-sm-6">
                <label class="form-label">Property Name</label>
                <select formControlName="id" class="form-select form-select-sm">
                    <option value="">-- All Properties --</option>
                    @for(items of property_data; track $index){
                        <option value="{{items.id}}">{{items.name}}</option>
                    }@empty{
                        <option value="">No properties found</option>
                    }
                </select>
            </div>

            <div class="col-xl-3 col-md-3 col-sm-6">
                <label class="form-label">State</label>
                <select class="form-select form-select-sm" id="stateId" (change)="getDistrict(filter_state.value)" #filter_state formControlName="state">
                    <option value="">-- Select State --</option>
                    @for (item of state_data; track $index) {
                    <option [value]="item.state_id">{{ item.state_name }}</option>
                    }
                </select>
            </div>

            <div class="col-xl-2 col-md-3 col-sm-6">
                <label class="form-label">District</label>
                <select class="form-select form-select-sm" id="districtId" formControlName="district">
                    <option value="">-- Select District --</option>
                    @for (item of district_data; track $index) {
                    <option [value]="item.district_id">{{ item.district_name }}</option>
                    }
                </select>
            </div>

            <div class="col-xl-2 col-md-3 col-sm-6">
                <label class="form-label">Status</label>
                <select class="form-select form-select-sm" id="statusId" formControlName="status">
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
                            Property Name 
                            <i class="bi bi-arrow-up-short" [ngClass]="{'d-none': sortColumn === 'name' && sortOrder === 'ASC'}"></i>
                            <i class="bi bi-arrow-down-short" [ngClass]="{'d-none': sortColumn === 'name' && sortOrder === 'DESC'}"></i>
                        </th>
                        <th class="cursor-pointer user-selection-none" (click)="sortingTable('total_rooms')">
                            Total Rooms 
                            <i class="bi bi-arrow-up-short" [ngClass]="{'d-none': sortColumn === 'total_rooms' && sortOrder === 'ASC'}"></i>
                            <i class="bi bi-arrow-down-short" [ngClass]="{'d-none': sortColumn === 'total_rooms' && sortOrder === 'DESC'}"></i>
                        </th>
                        <th>Address / Location</th>
                        <th>State</th>
                        <th>District</th>
                        <th>Status</th>
                        <th class="text-center" style="width: 120px;">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    @for(items of table_data; track $index; let i = $index){
                    <tr>
                        <td class="text-muted fw-semibold">{{ (page - 1) * limit + i + 1 }}</td>
                        <td>
                            <div class="fw-semibold text-heading d-flex align-items-center gap-2">
                                <i class="bi bi-building text-primary"></i>
                                {{items.name}}
                            </div>
                        </td>
                        <td>
                            <span class="badge bg-info fw-semibold">{{items.total_rooms}} Rooms</span>
                        </td>
                        <td class="text-muted">{{items.location}}</td>
                        <td>{{ items.state | stateName: state_data }}</td>
                        <td>{{getDistrictForView(items.district)}}</td>
                        <td>
                            <span class="badge" [ngClass]="items.status === 1 ? 'bg-success' : 'bg-danger'">
                                {{ items.status === 1 ? 'Active' : 'Inactive' }}
                            </span>
                        </td>
                        <td class="text-center">
                            <div class="action-btn-group justify-content-center">
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" (click)="edit(items.id)"
                                    class="btn-action-icon primary" title="Edit Property">
                                    <i class="bi bi-pencil"></i>
                                </button>
                                <button class="btn-action-icon danger" (click)="delete(items.id)" title="Delete Property">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                    }@empty{
                    <tr>
                        <td colspan="8" class="text-center py-4 text-muted">
                            <i class="bi bi-inbox fs-3 d-block mb-1 opacity-50"></i>
                            No properties found matching the criteria.
                        </td>
                    </tr>
                    }
                </tbody>
            </table>
        </div>
    </div>

    <!-- Add/Edit Property Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fs-14 fw-bold" id="exampleModalLabel">
                        <i class="bi" [ngClass]="editMode ? 'bi-pencil-square' : 'bi-building-fill-add'"></i>
                        {{editMode ? 'Edit Property Details' : 'Register New Property'}}
                    </h5>
                    <button type="button" #modelClose class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                    <form [formGroup]="propertyForm">
                        <div class="row g-3">
                            <div class="col-xl-4 col-md-4 col-sm-6">
                                <label class="form-label">Property Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-sm" formControlName="name" maxlength="30" (input)="GF.enforceMaxLength($event, 30)" placeholder="e.g. Sunrise Luxury PG">
                                <app-form-validation-message [formGroup]="propertyForm" controlName="name" fieldName="Name"></app-form-validation-message>
                            </div>

                            <div class="col-xl-4 col-md-4 col-sm-6">
                                <label class="form-label">Total Rooms <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-sm" formControlName="total_rooms" maxlength="4" (keypress)="GF.numberOnly($event)" (paste)="GF.handleNumberPaste($event, 4)" (input)="GF.enforceMaxLength($event, 4)" placeholder="e.g. 25">
                                <app-form-validation-message [formGroup]="propertyForm" controlName="total_rooms" fieldName="Total rooms"></app-form-validation-message>
                            </div>

                            <div class="col-xl-4 col-md-4 col-sm-6">
                                <label class="form-label">Address / Location <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-sm" formControlName="location" maxlength="100" (input)="GF.enforceMaxLength($event, 100)" placeholder="Street or Area location">
                                <app-form-validation-message [formGroup]="propertyForm" controlName="location" fieldName="Location"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-3 col-sm-6">
                                <label class="form-label">Pincode <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-sm" formControlName="pincode" maxlength="6" (keypress)="GF.numberOnly($event)" (paste)="GF.handleNumberPaste($event, 6)" (input)="GF.enforceMaxLength($event, 6)" placeholder="Pincode">
                                <app-form-validation-message [formGroup]="propertyForm" controlName="pincode" fieldName="Pincode"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-3 col-sm-6">
                                <label class="form-label">Status <span class="text-danger">*</span></label>
                                <select formControlName="status" class="form-select form-select-sm">
                                    <option value="1" selected>Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                                <app-form-validation-message [formGroup]="propertyForm" controlName="status" fieldName="Status"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-3 col-sm-6">
                                <label class="form-label">State <span class="text-danger">*</span></label>
                                <select formControlName="state" (change)="getDistrict(state_id.value)" #state_id class="form-select form-select-sm">
                                    <option value="">-- Select State --</option>
                                    @for (item of state_data; track $index) {
                                    <option [value]="item.state_id">{{ item.state_name }}</option>
                                    }
                                </select>
                                <app-form-validation-message [formGroup]="propertyForm" controlName="state" fieldName="State"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-3 col-sm-6">
                                <label class="form-label">District <span class="text-danger">*</span></label>
                                <select formControlName="district" class="form-select form-select-sm">
                                    <option value="">-- Select District --</option>
                                    @for (item of district_data; track $index) {
                                    <option [value]="item.district_id">{{ item.district_name }}</option>
                                    }
                                </select>
                                <app-form-validation-message [formGroup]="propertyForm" controlName="district" fieldName="District"></app-form-validation-message>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" (click)="this.propertyForm.reset()" class="btn btn-sm btn-outline-secondary">
                        <i class="bi bi-arrow-counterclockwise"></i> Reset
                    </button>
                    <button type="button" (click)="editMode ? update() : add()" class="btn btn-sm btn-primary">
                        <i class="bi bi-check2"></i> {{editMode ? 'Save Changes' : 'Create Property'}}
                    </button>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PropertyComponent, { className: "PropertyComponent", filePath: "src/app/pages/property/property.component.ts", lineNumber: 25 });
})();
export {
  PropertyComponent
};
//# sourceMappingURL=chunk-6JNZMXUM.js.map
