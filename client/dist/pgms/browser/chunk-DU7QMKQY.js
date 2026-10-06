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
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
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

// src/app/pages/rooms/rooms.component.ts
var _c0 = ["modelClose"];
var _c1 = (a0) => ({ "d-none": a0 });
function RoomsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 10);
  }
}
function RoomsComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r2 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", items_r2.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(items_r2.name);
  }
}
function RoomsComponent_ForEmpty_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1, "No PG found");
    \u0275\u0275elementEnd();
  }
}
function RoomsComponent_For_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 77);
    \u0275\u0275element(5, "i", 78);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 79);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 80);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 81);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 82)(17, "div", 83)(18, "button", 84);
    \u0275\u0275listener("click", function RoomsComponent_For_88_Template_button_click_18_listener() {
      const items_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.editRoom(items_r4.id));
    });
    \u0275\u0275element(19, "i", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 86);
    \u0275\u0275listener("click", function RoomsComponent_For_88_Template_button_click_20_listener() {
      const items_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.deleteRoom(items_r4.id));
    });
    \u0275\u0275element(21, "i", 87);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const items_r4 = ctx.$implicit;
    const \u0275$index_157_r6 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r4.page - 1) * ctx_r4.limit + \u0275$index_157_r6 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", items_r4.pg_name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Room #", items_r4.room_number, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", items_r4.type, " Sharing");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", items_r4.status === 1 ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", items_r4.status === 1 ? "Active" : "Inactive", " ");
  }
}
function RoomsComponent_ForEmpty_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 88);
    \u0275\u0275element(2, "i", 89);
    \u0275\u0275text(3, " No rooms found matching the criteria. ");
    \u0275\u0275elementEnd()();
  }
}
function RoomsComponent_For_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r7 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", items_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(items_r7.name);
  }
}
function RoomsComponent_ForEmpty_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1, "No properties found");
    \u0275\u0275elementEnd();
  }
}
var RoomsComponent = class _RoomsComponent {
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
  editRoomId = "";
  property_data;
  modelClose;
  constructor(api, GF) {
    this.api = api;
    this.GF = GF;
  }
  ngOnInit() {
    this.getTable();
    this.getPropertyData();
  }
  filterForm = new FormGroup({
    pg_name: new FormControl(""),
    action: new FormControl("rooms"),
    status: new FormControl(""),
    limit: new FormControl(10),
    order: new FormControl("DESC"),
    sort_by: new FormControl("id"),
    page: new FormControl(1),
    room_number: new FormControl(""),
    type: new FormControl("")
  });
  roomForm = new FormGroup({
    room_number: new FormControl("", [Validators.required, Validators.maxLength(10)]),
    type: new FormControl("1", [Validators.required, Validators.pattern(/^[0-9]+$/)]),
    property_id: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]+$/)]),
    status: new FormControl("", Validators.required),
    id: new FormControl("")
  });
  filterSearch() {
    this.filterForm.get("page")?.setValue(1);
  }
  getTable() {
    this.api.postApi("room-table", this.filterForm.value).subscribe((res) => {
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
      limit: 10,
      order: "DESC",
      sort_by: "id",
      page: 1,
      pg_name: "",
      room_number: "",
      type: ""
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
  addRoom() {
    this.roomForm.markAllAsTouched();
    const formData = __spreadValues({}, this.roomForm.value);
    if (this.roomForm.valid) {
      this.api.postApi("add-pg-room", formData).subscribe((res) => {
        if (res.status) {
          this.GF.showToast(res.message, "success");
          this.closeroomForm();
          this.getTable();
        } else {
          this.GF.showToast(res.message, "danger");
        }
      }, (err) => {
        this.GF.showToast(err.error.message, "danger");
      });
    }
  }
  deleteRoom(clinetId) {
    this.api.postApi("delete", { action: "property", id: clinetId }).subscribe((res) => {
      if (res.status) {
        this.GF.showToast("Room deleted successfully", "success");
        this.getTable();
      } else {
        this.GF.showToast(res.message, "danger");
      }
    }, (err) => {
      this.GF.showToast(err.error.message, "danger");
    });
  }
  editRoom(clientId) {
    this.roomForm.markAsUntouched();
    this.editMode = true;
    this.api.postApi("get-list", { action: "room", id: clientId }).subscribe((res) => {
      if (res.status) {
        this.editRoomId = res.data.id;
        delete res.data["id"];
        this.roomForm.patchValue(res.data);
      } else {
        this.GF.showToast(res.message, "danger");
      }
    }, (err) => {
      this.GF.showToast(err.error.message, "danger");
    });
  }
  updateProperty() {
    this.roomForm.markAllAsTouched();
    const formData = __spreadProps(__spreadValues({}, this.roomForm.value), {
      id: this.editRoomId
    });
    if (this.roomForm.valid) {
      this.api.postApi("update-pg-room", formData).subscribe((res) => {
        if (res.status) {
          this.GF.showToast(res.message, "success");
          this.closeroomForm();
        } else {
          this.GF.showToast(res.message, "danger");
        }
      }, (err) => {
        this.GF.showToast(err.error.message, "danger");
      });
    }
  }
  closeroomForm() {
    this.modelClose.nativeElement.click();
    this.roomForm.reset();
    this.getTable();
  }
  openaddRoomForm() {
    this.roomForm.reset();
    this.roomForm.markAsUntouched();
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
  static \u0275fac = function RoomsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoomsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(GlobalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomsComponent, selectors: [["app-rooms"]], viewQuery: function RoomsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.modelClose = _t.first);
    }
  }, decls: 158, vars: 39, consts: [["modelClose", ""], [1, "app-page-container"], [1, "app-page-header"], [1, "app-page-title-group"], [1, "app-page-title"], [1, "bi", "bi-door-open-fill"], [1, "app-page-subtitle"], [1, "app-page-actions"], ["type", "button", 1, "btn-filter-toggle", 3, "click"], [1, "bi", "bi-funnel-fill"], [1, "filter-active-dot"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-sm", "btn-primary", "d-flex", "align-items-center", "gap-1", 3, "click"], [1, "bi", "bi-plus-lg"], [1, "app-filter-card", 3, "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "border-bottom", "pb-2"], [1, "filter-header-title"], [1, "bi", "bi-sliders"], ["type", "button", "aria-label", "Close", 1, "btn-close", "btn-sm", 3, "click"], [1, "row", "g-2", "align-items-end", 3, "submit", "formGroup"], [1, "col-xl-3", "col-md-3", "col-sm-6"], [1, "form-label"], ["formControlName", "pg_name", 1, "form-select", "form-select-sm"], ["value", ""], [3, "value"], [1, "input-group", "input-group-sm"], [1, "input-group-text"], [1, "bi", "bi-door-closed"], ["type", "text", "formControlName", "room_number", "maxlength", "10", "placeholder", "e.g. 101, 202", 1, "form-control", "form-control-sm", 3, "input"], [1, "col-xl-2", "col-md-3", "col-sm-6"], ["type", "text", "formControlName", "type", "maxlength", "2", "placeholder", "e.g. 1, 2, 3", 1, "form-control", "form-control-sm", 3, "keypress", "input"], ["formControlName", "status", 1, "form-select", "form-select-sm"], ["value", "1"], ["value", "0"], [1, "col-xl-2", "col-md-12", "d-flex", "gap-2"], ["type", "submit", 1, "btn-filter-apply", "flex-grow-1", 3, "click"], [1, "bi", "bi-search"], ["type", "button", 1, "btn-filter-reset", "flex-grow-1", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"], [3, "formGroup", "limit", "total_pages", "page_no", "callback"], [1, "app-table-card"], [1, "table-wrapper"], [1, "table", "align-middle"], [2, "width", "60px"], [1, "cursor-pointer", "user-selection-none", 3, "click"], [1, "bi", "bi-arrow-up-short", 3, "ngClass"], [1, "bi", "bi-arrow-down-short", 3, "ngClass"], [1, "text-center", 2, "width", "120px"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "fs-14", "fw-bold"], [1, "bi", 3, "ngClass"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", "p-4"], [3, "formGroup"], [1, "row", "g-3"], [1, "col-md-6"], [1, "text-danger"], ["formControlName", "property_id", 1, "form-select", "form-select-sm"], ["controlName", "property_id", "fieldName", "Property name", 3, "formGroup"], ["type", "text", "formControlName", "room_number", "maxlength", "10", "placeholder", "e.g. 101", 1, "form-control", "form-control-sm", 3, "input"], ["controlName", "room_number", "fieldName", "Room number", 3, "formGroup"], ["formControlName", "type", 1, "form-select", "form-select-sm"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["controlName", "type", "fieldName", "type", 3, "formGroup"], ["value", "1", "selected", ""], ["controlName", "status", "fieldName", "Status", 3, "formGroup"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "bi", "bi-check2"], [1, "text-muted", "fw-semibold"], [1, "fw-semibold", "text-heading", "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-building", "text-primary"], [1, "badge", "bg-primary", "fs-12", "px-2", "py-1"], [1, "badge", "bg-info", "fw-semibold"], [1, "badge", 3, "ngClass"], [1, "text-center"], [1, "action-btn-group", "justify-content-center"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", "title", "Edit Room", 1, "btn-action-icon", "primary", 3, "click"], [1, "bi", "bi-pencil"], ["title", "Delete Room", 1, "btn-action-icon", "danger", 3, "click"], [1, "bi", "bi-trash"], ["colspan", "6", 1, "text-center", "py-4", "text-muted"], [1, "bi", "bi-inbox", "fs-3", "d-block", "mb-1", "opacity-50"]], template: function RoomsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h2", 4);
      \u0275\u0275element(4, "i", 5);
      \u0275\u0275text(5, " Rooms Management ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 6);
      \u0275\u0275text(7, "Configure room numbers, sharing capacities, and occupancy states");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "button", 8);
      \u0275\u0275listener("click", function RoomsComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterOption = !ctx.filterOption);
      });
      \u0275\u0275element(10, "i", 9);
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, RoomsComponent_Conditional_13_Template, 1, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 11);
      \u0275\u0275listener("click", function RoomsComponent_Template_button_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openaddRoomForm());
      });
      \u0275\u0275element(15, "i", 12);
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "Add Room");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "div", 13)(19, "div", 14)(20, "span", 15);
      \u0275\u0275element(21, "i", 16);
      \u0275\u0275text(22, " Filter Rooms ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 17);
      \u0275\u0275listener("click", function RoomsComponent_Template_button_click_23_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterOption = false);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "form", 18);
      \u0275\u0275listener("submit", function RoomsComponent_Template_form_submit_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.getTable());
      });
      \u0275\u0275elementStart(25, "div", 19)(26, "label", 20);
      \u0275\u0275text(27, "Property Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "select", 21)(29, "option", 22);
      \u0275\u0275text(30, "-- All Properties --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(31, RoomsComponent_For_32_Template, 2, 2, "option", 23, \u0275\u0275repeaterTrackByIndex, false, RoomsComponent_ForEmpty_33_Template, 2, 0, "option", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 19)(35, "label", 20);
      \u0275\u0275text(36, "Room Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 24)(38, "span", 25);
      \u0275\u0275element(39, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "input", 27);
      \u0275\u0275listener("input", function RoomsComponent_Template_input_input_40_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 10));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 28)(42, "label", 20);
      \u0275\u0275text(43, "Sharing Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "input", 29);
      \u0275\u0275listener("keypress", function RoomsComponent_Template_input_keypress_44_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.numberOnly($event));
      })("input", function RoomsComponent_Template_input_input_44_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 2));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 28)(46, "label", 20);
      \u0275\u0275text(47, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "select", 30)(49, "option", 22);
      \u0275\u0275text(50, "All Statuses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "option", 31);
      \u0275\u0275text(52, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "option", 32);
      \u0275\u0275text(54, "Inactive");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 33)(56, "button", 34);
      \u0275\u0275listener("click", function RoomsComponent_Template_button_click_56_listener() {
        let tmp_2_0;
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView((tmp_2_0 = ctx.filterForm.get("page")) == null ? null : tmp_2_0.setValue(1));
      });
      \u0275\u0275element(57, "i", 35);
      \u0275\u0275text(58, " Apply ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "button", 36);
      \u0275\u0275listener("click", function RoomsComponent_Template_button_click_59_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilterForm());
      });
      \u0275\u0275element(60, "i", 37);
      \u0275\u0275text(61, " Reset ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(62, "app-pagination", 38);
      \u0275\u0275elementStart(63, "div", 39)(64, "div", 40)(65, "table", 41)(66, "thead")(67, "tr")(68, "th", 42);
      \u0275\u0275text(69, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 43);
      \u0275\u0275listener("click", function RoomsComponent_Template_th_click_70_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sortingTable("pg_name"));
      });
      \u0275\u0275text(71, " Property ");
      \u0275\u0275element(72, "i", 44)(73, "i", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 43);
      \u0275\u0275listener("click", function RoomsComponent_Template_th_click_74_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sortingTable("room_number"));
      });
      \u0275\u0275text(75, " Room Number ");
      \u0275\u0275element(76, "i", 44)(77, "i", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 43);
      \u0275\u0275listener("click", function RoomsComponent_Template_th_click_78_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sortingTable("type"));
      });
      \u0275\u0275text(79, " Sharing Capacity ");
      \u0275\u0275element(80, "i", 44)(81, "i", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th");
      \u0275\u0275text(83, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th", 46);
      \u0275\u0275text(85, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "tbody");
      \u0275\u0275repeaterCreate(87, RoomsComponent_For_88_Template, 22, 6, "tr", null, \u0275\u0275repeaterTrackByIndex, false, RoomsComponent_ForEmpty_89_Template, 4, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(90, "div", 47)(91, "div", 48)(92, "div", 49)(93, "div", 50)(94, "h5", 51);
      \u0275\u0275element(95, "i", 52);
      \u0275\u0275text(96);
      \u0275\u0275elementEnd();
      \u0275\u0275element(97, "button", 53, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 54)(100, "form", 55)(101, "div", 56)(102, "div", 57)(103, "label", 20);
      \u0275\u0275text(104, "Property Name ");
      \u0275\u0275elementStart(105, "span", 58);
      \u0275\u0275text(106, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "select", 59)(108, "option", 22);
      \u0275\u0275text(109, "-- Select Property --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(110, RoomsComponent_For_111_Template, 2, 2, "option", 23, \u0275\u0275repeaterTrackByIndex, false, RoomsComponent_ForEmpty_112_Template, 2, 0, "option", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275element(113, "app-form-validation-message", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div", 57)(115, "label", 20);
      \u0275\u0275text(116, "Room Number ");
      \u0275\u0275elementStart(117, "span", 58);
      \u0275\u0275text(118, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "input", 61);
      \u0275\u0275listener("input", function RoomsComponent_Template_input_input_119_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 10));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(120, "app-form-validation-message", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div", 57)(122, "label", 20);
      \u0275\u0275text(123, "Sharing Capacity ");
      \u0275\u0275elementStart(124, "span", 58);
      \u0275\u0275text(125, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "select", 63)(127, "option", 31);
      \u0275\u0275text(128, "1 Person (Single)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "option", 64);
      \u0275\u0275text(130, "2 Person (Double)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "option", 65);
      \u0275\u0275text(132, "3 Person (Triple)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "option", 66);
      \u0275\u0275text(134, "4 Person (Quad)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "option", 67);
      \u0275\u0275text(136, "5 Person");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "option", 68);
      \u0275\u0275text(138, "6 Person");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(139, "app-form-validation-message", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "div", 57)(141, "label", 20);
      \u0275\u0275text(142, "Status ");
      \u0275\u0275elementStart(143, "span", 58);
      \u0275\u0275text(144, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "select", 30)(146, "option", 70);
      \u0275\u0275text(147, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "option", 32);
      \u0275\u0275text(149, "Inactive");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(150, "app-form-validation-message", 71);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(151, "div", 72)(152, "button", 73);
      \u0275\u0275listener("click", function RoomsComponent_Template_button_click_152_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.roomForm.reset());
      });
      \u0275\u0275element(153, "i", 37);
      \u0275\u0275text(154, " Reset ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "button", 74);
      \u0275\u0275listener("click", function RoomsComponent_Template_button_click_155_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.editMode ? ctx.updateProperty() : ctx.addRoom());
      });
      \u0275\u0275element(156, "i", 75);
      \u0275\u0275text(157);
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
      \u0275\u0275advance(31);
      \u0275\u0275property("formGroup", ctx.filterForm)("limit", ctx.limit)("total_pages", ctx.total_pages)("page_no", ctx.page)("callback", ctx.getTable.bind(ctx));
      \u0275\u0275advance(10);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(27, _c1, ctx.sortColumn === "pg_name" && ctx.sortOrder === "ASC"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(29, _c1, ctx.sortColumn === "pg_name" && ctx.sortOrder === "DESC"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(31, _c1, ctx.sortColumn === "room_number" && ctx.sortOrder === "ASC"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(33, _c1, ctx.sortColumn === "room_number" && ctx.sortOrder === "DESC"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(35, _c1, ctx.sortColumn === "type" && ctx.sortOrder === "ASC"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(37, _c1, ctx.sortColumn === "type" && ctx.sortOrder === "DESC"));
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.table_data);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngClass", ctx.editMode ? "bi-pencil-square" : "bi-door-open-fill");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.editMode ? "Edit Room Details" : "Add New Room", " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.roomForm);
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.property_data);
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.roomForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.roomForm);
      \u0275\u0275advance(19);
      \u0275\u0275property("formGroup", ctx.roomForm);
      \u0275\u0275advance(11);
      \u0275\u0275property("formGroup", ctx.roomForm);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.editMode ? "Save Changes" : "Create Room", " ");
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, CommonModule, NgClass, PaginationComponent, FormValidationMessageComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomsComponent, [{
    type: Component,
    args: [{ selector: "app-rooms", imports: [ReactiveFormsModule, CommonModule, PaginationComponent, FormValidationMessageComponent], template: `<div class="app-page-container">

    <!-- Common Page Header -->
    <div class="app-page-header">
        <div class="app-page-title-group">
            <h2 class="app-page-title">
                <i class="bi bi-door-open-fill"></i>
                Rooms Management
            </h2>
            <p class="app-page-subtitle">Configure room numbers, sharing capacities, and occupancy states</p>
        </div>
        <div class="app-page-actions">
            <button class="btn-filter-toggle" [class.active]="filterOption" (click)="filterOption = !filterOption" type="button">
                <i class="bi bi-funnel-fill"></i>
                <span>Filter</span>
                @if (filterOption) {
                    <span class="filter-active-dot"></span>
                }
            </button>
            <button class="btn btn-sm btn-primary d-flex align-items-center gap-1" (click)="openaddRoomForm()" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                <i class="bi bi-plus-lg"></i>
                <span>Add Room</span>
            </button>
        </div>
    </div>

    <!-- Filter Card -->
    <div class="app-filter-card" [ngClass]="filterOption ? '' : 'd-none'">
        <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
            <span class="filter-header-title">
                <i class="bi bi-sliders"></i> Filter Rooms
            </span>
            <button type="button" class="btn-close btn-sm" (click)="filterOption = false" aria-label="Close"></button>
        </div>

        <form [formGroup]="filterForm" class="row g-2 align-items-end" (submit)="getTable()">
            <div class="col-xl-3 col-md-3 col-sm-6">
                <label class="form-label">Property Name</label>
                <select formControlName="pg_name" class="form-select form-select-sm">
                    <option value="">-- All Properties --</option>
                    @for(items of property_data; track $index){
                        <option value="{{items.name}}">{{items.name}}</option>
                    }@empty{
                        <option value="">No PG found</option>
                    }
                </select>
            </div>

            <div class="col-xl-3 col-md-3 col-sm-6">
                <label class="form-label">Room Number</label>
                <div class="input-group input-group-sm">
                    <span class="input-group-text"><i class="bi bi-door-closed"></i></span>
                    <input type="text" class="form-control form-control-sm" formControlName="room_number" maxlength="10" (input)="GF.enforceMaxLength($event, 10)" placeholder="e.g. 101, 202">
                </div>
            </div>

            <div class="col-xl-2 col-md-3 col-sm-6">
                <label class="form-label">Sharing Type</label>
                <input type="text" class="form-control form-control-sm" formControlName="type" maxlength="2" (keypress)="GF.numberOnly($event)" (input)="GF.enforceMaxLength($event, 2)" placeholder="e.g. 1, 2, 3">
            </div>

            <div class="col-xl-2 col-md-3 col-sm-6">
                <label class="form-label">Status</label>
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
                        <th class="cursor-pointer user-selection-none" (click)="sortingTable('pg_name')">
                            Property
                            <i class="bi bi-arrow-up-short" [ngClass]="{'d-none': sortColumn === 'pg_name' && sortOrder === 'ASC'}"></i>
                            <i class="bi bi-arrow-down-short" [ngClass]="{'d-none': sortColumn === 'pg_name' && sortOrder === 'DESC'}"></i>
                        </th>
                        <th class="cursor-pointer user-selection-none" (click)="sortingTable('room_number')">
                            Room Number
                            <i class="bi bi-arrow-up-short" [ngClass]="{'d-none': sortColumn === 'room_number' && sortOrder === 'ASC'}"></i>
                            <i class="bi bi-arrow-down-short" [ngClass]="{'d-none': sortColumn === 'room_number' && sortOrder === 'DESC'}"></i>
                        </th>
                        <th class="cursor-pointer user-selection-none" (click)="sortingTable('type')">
                            Sharing Capacity
                            <i class="bi bi-arrow-up-short" [ngClass]="{'d-none': sortColumn === 'type' && sortOrder === 'ASC'}"></i>
                            <i class="bi bi-arrow-down-short" [ngClass]="{'d-none': sortColumn === 'type' && sortOrder === 'DESC'}"></i>
                        </th>
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
                                {{items.pg_name}}
                            </div>
                        </td>
                        <td>
                            <span class="badge bg-primary fs-12 px-2 py-1">Room #{{items.room_number}}</span>
                        </td>
                        <td>
                            <span class="badge bg-info fw-semibold">{{items.type}} Sharing</span>
                        </td>
                        <td>
                            <span class="badge" [ngClass]="items.status === 1 ? 'bg-success' : 'bg-danger'">
                                {{ items.status === 1 ? 'Active' : 'Inactive' }}
                            </span>
                        </td>
                        <td class="text-center">
                            <div class="action-btn-group justify-content-center">
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" (click)="editRoom(items.id)"
                                    class="btn-action-icon primary" title="Edit Room">
                                    <i class="bi bi-pencil"></i>
                                </button>
                                <button class="btn-action-icon danger" (click)="deleteRoom(items.id)" title="Delete Room">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                    }@empty{
                    <tr>
                        <td colspan="6" class="text-center py-4 text-muted">
                            <i class="bi bi-inbox fs-3 d-block mb-1 opacity-50"></i>
                            No rooms found matching the criteria.
                        </td>
                    </tr>
                    }
                </tbody>
            </table>
        </div>
    </div>

    <!-- Add/Edit Room Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fs-14 fw-bold" id="exampleModalLabel">
                        <i class="bi" [ngClass]="editMode ? 'bi-pencil-square' : 'bi-door-open-fill'"></i>
                        {{editMode ? 'Edit Room Details' : 'Add New Room'}}
                    </h5>
                    <button type="button" #modelClose class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                    <form [formGroup]="roomForm">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label">Property Name <span class="text-danger">*</span></label>
                                <select formControlName="property_id" class="form-select form-select-sm">
                                    <option value="">-- Select Property --</option>
                                    @for(items of property_data; track $index){
                                        <option value="{{items.id}}">{{items.name}}</option>
                                    }@empty{
                                        <option value="">No properties found</option>
                                    }
                                </select>
                                <app-form-validation-message [formGroup]="roomForm" controlName="property_id" fieldName="Property name"></app-form-validation-message>
                            </div>

                            <div class="col-md-6">
                                <label class="form-label">Room Number <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-sm" formControlName="room_number" maxlength="10" (input)="GF.enforceMaxLength($event, 10)" placeholder="e.g. 101">
                                <app-form-validation-message [formGroup]="roomForm" controlName="room_number" fieldName="Room number"></app-form-validation-message>
                            </div>

                            <div class="col-md-6">
                                <label class="form-label">Sharing Capacity <span class="text-danger">*</span></label>
                                <select formControlName="type" class="form-select form-select-sm">
                                    <option value="1">1 Person (Single)</option>
                                    <option value="2">2 Person (Double)</option>
                                    <option value="3">3 Person (Triple)</option>
                                    <option value="4">4 Person (Quad)</option>
                                    <option value="5">5 Person</option>
                                    <option value="6">6 Person</option>
                                </select>
                                <app-form-validation-message [formGroup]="roomForm" controlName="type" fieldName="type"></app-form-validation-message>
                            </div>

                            <div class="col-md-6">
                                <label class="form-label">Status <span class="text-danger">*</span></label>
                                <select formControlName="status" class="form-select form-select-sm">
                                    <option value="1" selected>Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                                <app-form-validation-message [formGroup]="roomForm" controlName="status" fieldName="Status"></app-form-validation-message>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" (click)="this.roomForm.reset()" class="btn btn-sm btn-outline-secondary">
                        <i class="bi bi-arrow-counterclockwise"></i> Reset
                    </button>
                    <button type="button" (click)="editMode ? updateProperty() : addRoom()" class="btn btn-sm btn-primary">
                        <i class="bi bi-check2"></i> {{editMode ? 'Save Changes' : 'Create Room'}}
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomsComponent, { className: "RoomsComponent", filePath: "src/app/pages/rooms/rooms.component.ts", lineNumber: 25 });
})();
export {
  RoomsComponent
};
//# sourceMappingURL=chunk-DU7QMKQY.js.map
