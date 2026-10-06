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
  ɵɵpropertyInterpolate,
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
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-TFR4PE7B.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-Y5RQAIA6.js";

// src/app/pages/tenant/tenant.component.ts
var _c0 = ["modelClose"];
function TenantComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
  }
}
function TenantComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
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
function TenantComponent_ForEmpty_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1, "No PG found");
    \u0275\u0275elementEnd();
  }
}
function TenantComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
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
function TenantComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
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
function TenantComponent_For_138_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 147);
    \u0275\u0275text(1, " Male ");
  }
}
function TenantComponent_For_138_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 148);
    \u0275\u0275text(1, " Female ");
  }
}
function TenantComponent_For_138_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 149);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const items_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", items_r9.gender, " ");
  }
}
function TenantComponent_For_138_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 150);
    \u0275\u0275listener("click", function TenantComponent_For_138_Conditional_50_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const items_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.sendWhatsAppReminder(items_r9));
    });
    \u0275\u0275element(1, "i", 151);
    \u0275\u0275elementEnd();
  }
}
function TenantComponent_For_138_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 152);
    \u0275\u0275listener("click", function TenantComponent_For_138_Conditional_51_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const items_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.sendWhatsAppReceipt(items_r9));
    });
    \u0275\u0275element(1, "i", 151);
    \u0275\u0275elementEnd();
  }
}
function TenantComponent_For_138_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 125);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "img", 126, 4);
    \u0275\u0275listener("click", function TenantComponent_For_138_Template_img_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const profile_photo_r7 = \u0275\u0275reference(5);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.openBigImage(profile_photo_r7.src));
    })("error", function TenantComponent_For_138_Template_img_error_4_listener($event) {
      const items_r9 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView($event.target.src = "https://ui-avatars.com/api/?name=" + (items_r9.tenant_name || items_r9.name) + "&background=eef2ff&color=4f46e5");
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "div", 127);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 128);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 129);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "span", 130);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span", 131);
    \u0275\u0275template(21, TenantComponent_For_138_Conditional_21_Template, 2, 0)(22, TenantComponent_For_138_Conditional_22_Template, 2, 0)(23, TenantComponent_For_138_Conditional_23_Template, 2, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td")(25, "span", 132);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 133);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "stateName");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td")(38, "div", 134)(39, "button", 135);
    \u0275\u0275listener("click", function TenantComponent_For_138_Template_button_click_39_listener() {
      const items_r9 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.openBigImage(ctx_r7.server_url + "static/" + items_r9.aadhar));
    });
    \u0275\u0275element(40, "i", 136);
    \u0275\u0275text(41, " Aadhar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 137);
    \u0275\u0275listener("click", function TenantComponent_For_138_Template_button_click_42_listener() {
      const items_r9 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.openBigImage(ctx_r7.server_url + "static/" + items_r9.pan));
    });
    \u0275\u0275element(43, "i", 138);
    \u0275\u0275text(44, " PAN ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "td")(46, "span", 132);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "td", 139)(49, "div", 140);
    \u0275\u0275template(50, TenantComponent_For_138_Conditional_50_Template, 2, 0, "button", 141)(51, TenantComponent_For_138_Conditional_51_Template, 2, 0, "button", 142);
    \u0275\u0275elementStart(52, "button", 143);
    \u0275\u0275listener("click", function TenantComponent_For_138_Template_button_click_52_listener() {
      const items_r9 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.EDIT(items_r9.id));
    });
    \u0275\u0275element(53, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 145);
    \u0275\u0275listener("click", function TenantComponent_For_138_Template_button_click_54_listener() {
      const items_r9 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.DELETE(items_r9.id));
    });
    \u0275\u0275element(55, "i", 146);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const items_r9 = ctx.$implicit;
    const \u0275$index_236_r12 = ctx.$index;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r7.page - 1) * ctx_r7.limit + \u0275$index_236_r12 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate2("src", "", ctx_r7.server_url, "static/", items_r9.profile_photo, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(items_r9.tenant_name || items_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(items_r9.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(items_r9.pg_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", items_r9.room_number, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(items_r9.phone);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(items_r9.gender == "male" ? 21 : items_r9.gender == "female" ? 22 : 23);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", items_r9.rent_status === "paid" ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", items_r9.rent_status === "paid" ? "Paid" : "Pending", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(items_r9.occupation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 19, items_r9.dob, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 22, items_r9.state, ctx_r7.state_data));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r7.getDistrictForView(items_r9.district));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngClass", items_r9.status === 1 ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", items_r9.status === 1 ? "Active" : "Inactive", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(items_r9.rent_status !== "paid" ? 50 : 51);
  }
}
function TenantComponent_ForEmpty_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 153);
    \u0275\u0275element(2, "i", 154);
    \u0275\u0275text(3, " No tenants found matching your query. ");
    \u0275\u0275elementEnd()();
  }
}
function TenantComponent_For_162_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r14 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", items_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(items_r14.name);
  }
}
function TenantComponent_ForEmpty_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1, "No PG found");
    \u0275\u0275elementEnd();
  }
}
function TenantComponent_For_174_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r15 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", items_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", items_r15.room_number, " (", items_r15.type, " Sharing)");
  }
}
function TenantComponent_ForEmpty_175_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1, "No rooms available");
    \u0275\u0275elementEnd();
  }
}
function TenantComponent_Conditional_201_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function TenantComponent_For_295_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    \u0275\u0275property("value", item_r17.state_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r17.state_name);
  }
}
function TenantComponent_For_306_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    \u0275\u0275property("value", item_r18.district_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r18.district_name);
  }
}
var server_url = environment.apiUrl;
var TenantComponent = class _TenantComponent {
  api;
  GF;
  server_url = server_url;
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
  EDITId = "";
  property_data;
  roomList;
  imgSrc;
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
    pg_id: new FormControl(""),
    action: new FormControl("tenants"),
    district: new FormControl(""),
    state: new FormControl(""),
    status: new FormControl(""),
    limit: new FormControl(10),
    order: new FormControl("DESC"),
    sort_by: new FormControl("id"),
    page: new FormControl(1),
    name: new FormControl(""),
    email: new FormControl(""),
    address: new FormControl(""),
    dob: new FormControl(""),
    room_number: new FormControl(""),
    occupation: new FormControl(""),
    phone: new FormControl(""),
    emergency_contact: new FormControl(""),
    parent_contact: new FormControl("")
  });
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
      pg_id: "",
      district: "",
      name: "",
      email: "",
      address: "",
      dob: "",
      room_number: "",
      occupation: "",
      phone: "",
      emergency_contact: "",
      parent_contact: ""
    });
    this.getTable();
  }
  dataForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    room_id: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]+$/)]),
    phone: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]+$/)]),
    email: new FormControl("", [Validators.required, Validators.email, Validators.maxLength(50), Validators.minLength(3)]),
    parent_contact: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]+$/)]),
    emergency_contact: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]+$/)]),
    password: new FormControl("", [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).+$"), Validators.minLength(8), Validators.maxLength(15)]),
    gender: new FormControl("", [Validators.required, Validators.pattern(/^(male|female|other)$/)]),
    dob: new FormControl("", [Validators.required]),
    occupation: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(70)]),
    check_in_date: new FormControl("", [Validators.required]),
    rent_status: new FormControl("", [Validators.required, Validators.pattern(/^(pending|paid)$/)]),
    address: new FormControl("", [Validators.required, Validators.maxLength(100)]),
    state: new FormControl("", [Validators.required]),
    district: new FormControl("", [Validators.required]),
    status: new FormControl("", Validators.required),
    pincode: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    id: new FormControl(""),
    pg_id: new FormControl("", [Validators.required]),
    profile_photo: new FormControl("", [Validators.required]),
    aadhar: new FormControl("", [Validators.required]),
    pan: new FormControl("", [Validators.required])
  });
  filterSearch() {
    this.filterForm.get("page")?.setValue(1);
  }
  getTable() {
    this.api.postApi("tenant-table", this.filterForm.value).subscribe((res) => {
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
  getAvailableRooms(pg_id) {
    this.api.postApi("room-list", { pg_id }).subscribe((res) => {
      this.roomList = res;
    }, (err) => {
      this.GF.showToast(err.error.message, "danger");
    });
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
  file;
  // In your component class
  aadharFile;
  profileFile;
  panCardFile;
  // Add more as needed
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
  ADD() {
    const passwordControl = this.dataForm.get("password");
    passwordControl?.setValidators([Validators.required]);
    passwordControl?.updateValueAndValidity();
    this.dataForm.markAllAsTouched();
    this.dataForm.markAllAsTouched();
    const formData = __spreadProps(__spreadValues({}, this.dataForm.value), {
      aadhar: this.aadharFile,
      profile_photo: this.profileFile,
      pan: this.panCardFile
    });
    if (this.dataForm.valid) {
      this.api.postApi("add-tenant", formData).subscribe((res) => {
        if (res.status) {
          this.GF.showToast(res.message, "success");
          this.closedataForm();
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
    this.dataForm.get("district")?.setValue("");
    this.filterForm.get("district")?.setValue("");
    this.district_data = this.state_district_data.district.filter((ele) => {
      return ele.state_id == state_id;
    });
  }
  DELETE(clinetId) {
    this.api.postApi("delete", { action: "property", id: clinetId }).subscribe((res) => {
      if (res.status) {
        this.GF.showToast("Tenant deleted successfully", "success");
        this.getTable();
      } else {
        this.GF.showToast(res.message, "danger");
      }
    }, (err) => {
      this.GF.showToast(err.error.message, "danger");
    });
  }
  EDIT(clientId) {
    this.dataForm.markAsUntouched();
    this.editMode = true;
    this.api.postApi("get-list", { action: "tenants", id: clientId }).subscribe((res) => {
      if (res.status) {
        this.EDITId = res.data.id;
        delete res.data["profile_photo"];
        delete res.data["password"];
        delete res.data["aadhar"];
        delete res.data["pan"];
        delete res.data["id"];
        res.data["dob"] = res.data["dob"].split("T")[0];
        res.data["check_in_date"] = res.data["check_in_date"].split("T")[0];
        this.dataForm.patchValue(res.data);
        setTimeout(() => {
          this.getDistrict(res.data.state);
          this.dataForm.get("district")?.setValue(res.data.district);
        }, 200);
      } else {
        this.GF.showToast(res.message, "danger");
      }
    }, (err) => {
      this.GF.showToast(err.error.message, "danger");
    });
  }
  UPDATE() {
    const passwordControl = this.dataForm.get("password");
    passwordControl?.setValidators([Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).+$"), Validators.minLength(8), Validators.maxLength(15)]);
    passwordControl?.updateValueAndValidity();
    const profileControl = this.dataForm.get("profile_photo");
    const aadharControl = this.dataForm.get("aadhar");
    const panControl = this.dataForm.get("pan");
    profileControl?.clearValidators();
    profileControl?.updateValueAndValidity();
    aadharControl?.clearValidators();
    aadharControl?.updateValueAndValidity();
    panControl?.clearValidators();
    panControl?.updateValueAndValidity();
    this.dataForm.markAllAsTouched();
    const formData = __spreadProps(__spreadValues({}, this.dataForm.value), {
      id: this.EDITId
    });
    if (this.dataForm.valid) {
      this.api.postApi("update-pg-property", formData).subscribe((res) => {
        if (res.status) {
          this.GF.showToast(res.message, "success");
          this.closedataForm();
        } else {
          this.GF.showToast(res.message, "danger");
        }
      }, (err) => {
        this.GF.showToast(err.error.message, "danger");
      });
    }
  }
  closedataForm() {
    this.modelClose.nativeElement.click();
    this.dataForm.reset();
    this.getTable();
  }
  openADDForm() {
    this.dataForm.reset();
    this.dataForm.markAsUntouched();
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
  openBigImage(imgUrl) {
    console.log("Open image");
    this.imgSrc = imgUrl;
  }
  sendWhatsAppReminder(tenant) {
    const rentAmt = Number(tenant.monthly_rent || 8e3).toLocaleString("en-IN");
    const message = `Hi ${tenant.tenant_name || tenant.name}! \u{1F44B}

This is a friendly reminder from *${tenant.pg_name || "PG Management"}*.
Your monthly room rent of *\u20B9${rentAmt}* for *Room ${tenant.room_number || "-"}* is currently *PENDING*.

Please log in to your tenant portal to pay securely online via Razorpay/UPI.
Thank you! \u{1F3E0}`;
    this.GF.openWhatsApp(tenant.phone, message);
  }
  sendWhatsAppReceipt(tenant) {
    const rentAmt = Number(tenant.monthly_rent || 8e3).toLocaleString("en-IN");
    const message = `*\u{1F3E0} PG Rent Payment Receipt*

Tenant Name: ${tenant.tenant_name || tenant.name}
PG: ${tenant.pg_name || "PG Residency"}
Room: ${tenant.room_number || "-"}
Amount Paid: \u20B9${rentAmt}
Status: PAID (Confirmed) \u2705
Date: ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}

Thank you for paying on time! \u{1F60A}`;
    this.GF.openWhatsApp(tenant.phone, message);
  }
  static \u0275fac = function TenantComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TenantComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(GlobalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TenantComponent, selectors: [["app-tenant"]], viewQuery: function TenantComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.modelClose = _t.first);
    }
  }, decls: 352, vars: 41, consts: [["filter_state", ""], ["modelClose", ""], ["pgProperty", ""], ["state_id", ""], ["profile_photo", ""], [1, "app-page-container"], [1, "app-page-header"], [1, "app-page-title-group"], [1, "app-page-title"], [1, "bi", "bi-person-badge-fill"], [1, "app-page-subtitle"], [1, "app-page-actions"], ["type", "button", 1, "btn-filter-toggle", 3, "click"], [1, "bi", "bi-funnel-fill"], [1, "filter-active-dot"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-sm", "btn-primary", "d-flex", "align-items-center", "gap-1", 3, "click"], [1, "bi", "bi-plus-lg"], [1, "app-filter-card", 3, "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "border-bottom", "pb-2"], [1, "filter-header-title"], [1, "bi", "bi-sliders"], ["type", "button", "aria-label", "Close", 1, "btn-close", "btn-sm", 3, "click"], [1, "row", "g-2", "align-items-end", 3, "submit", "formGroup"], [1, "col-xl-2", "col-md-3", "col-sm-6"], [1, "form-label"], ["formControlName", "pg_id", 1, "form-select", "form-select-sm"], ["value", ""], [3, "value"], ["id", "stateId", "formControlName", "state", 1, "form-select", "form-select-sm", 3, "change"], ["id", "districtId", "formControlName", "district", 1, "form-select", "form-select-sm"], ["id", "statusId", "formControlName", "status", 1, "form-select", "form-select-sm"], ["value", "1"], ["value", "0"], ["type", "text", "formControlName", "name", "placeholder", "Search name", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "email", "placeholder", "Search email", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "address", "placeholder", "Search address", 1, "form-control", "form-control-sm"], ["type", "date", "formControlName", "dob", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "room_number", "placeholder", "e.g. 101", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "occupation", "placeholder", "Search occupation", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "emergency_contact", "placeholder", "Search contact", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "parent_contact", "placeholder", "Search contact", 1, "form-control", "form-control-sm"], [1, "col-12", "d-flex", "justify-content-end", "gap-2", "mt-2"], ["type", "button", 1, "btn-filter-reset", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"], ["type", "submit", 1, "btn-filter-apply", 3, "click"], [1, "bi", "bi-search"], [3, "formGroup", "limit", "total_pages", "page_no", "callback"], [1, "app-table-card"], [1, "table-wrapper"], [1, "table", "align-middle"], [2, "width", "50px"], [1, "text-center", 2, "width", "110px"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "fs-14", "fw-bold"], [1, "bi", 3, "ngClass"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", "p-4"], [3, "formGroup"], [1, "row", "g-3"], [1, "col-xl-3", "col-md-4", "col-sm-6"], [1, "text-danger"], ["formControlName", "pg_id", 1, "form-select", "form-select-sm", 3, "change"], ["controlName", "pg_id", "fieldName", "Property name", 3, "formGroup"], ["formControlName", "room_id", 1, "form-select", "form-select-sm"], ["controlName", "room_id", "fieldName", "Room number", 3, "formGroup"], ["type", "text", "formControlName", "name", "maxlength", "30", "placeholder", "Full name", 1, "form-control", "form-control-sm", 3, "input"], ["controlName", "name", "fieldName", "Name", 3, "formGroup"], ["type", "text", "formControlName", "phone", "maxlength", "10", "placeholder", "10 digits", 1, "form-control", "form-control-sm", 3, "keypress", "paste", "input"], ["controlName", "phone", "fieldName", "Phone", 3, "formGroup"], ["type", "text", "formControlName", "email", "maxlength", "50", "placeholder", "Email address", 1, "form-control", "form-control-sm", 3, "input"], ["controlName", "email", "fieldName", "Email", 3, "formGroup"], ["type", "password", "formControlName", "password", "maxlength", "15", "placeholder", "Set password", 1, "form-control", "form-control-sm", 3, "input"], ["controlName", "password", "fieldName", "Password", 3, "formGroup"], ["formControlName", "gender", 1, "form-select", "form-select-sm"], ["value", "male"], ["value", "female"], ["value", "other"], ["controlName", "gender", "fieldName", "Gender", 3, "formGroup"], ["controlName", "dob", "fieldName", "DOB", 3, "formGroup"], ["type", "date", "formControlName", "check_in_date", 1, "form-control", "form-control-sm"], ["controlName", "check_in_date", "fieldName", "Check-in date", 3, "formGroup"], ["formControlName", "rent_status", 1, "form-select", "form-select-sm"], ["value", "paid"], ["value", "pending"], ["controlName", "rent_status", "fieldName", "Rent status", 3, "formGroup"], ["type", "text", "formControlName", "occupation", "maxlength", "70", "placeholder", "Student / Employee", 1, "form-control", "form-control-sm", 3, "input"], ["controlName", "occupation", "fieldName", "Occupation", 3, "formGroup"], ["type", "text", "formControlName", "parent_contact", "maxlength", "10", "placeholder", "Phone number", 1, "form-control", "form-control-sm", 3, "keypress", "paste", "input"], ["controlName", "parent_contact", "fieldName", "Parent contact", 3, "formGroup"], ["type", "text", "formControlName", "emergency_contact", "maxlength", "10", "placeholder", "Emergency number", 1, "form-control", "form-control-sm", 3, "keypress", "paste", "input"], ["controlName", "emergency_contact", "fieldName", "Emergency contact", 3, "formGroup"], [1, "col-xl-6", "col-md-8", "col-sm-12"], ["type", "text", "formControlName", "address", "maxlength", "100", "placeholder", "Full residential address", 1, "form-control", "form-control-sm", 3, "input"], ["controlName", "address", "fieldName", "Address", 3, "formGroup"], ["formControlName", "status", 1, "form-select", "form-select-sm"], ["value", "1", "selected", ""], ["controlName", "status", "fieldName", "Status", 3, "formGroup"], ["formControlName", "state", 1, "form-select", "form-select-sm", 3, "change"], ["controlName", "state", "fieldName", "State", 3, "formGroup"], ["formControlName", "district", 1, "form-select", "form-select-sm"], ["controlName", "district", "fieldName", "District", 3, "formGroup"], ["type", "text", "formControlName", "pincode", "maxlength", "6", "placeholder", "Pincode", 1, "form-control", "form-control-sm", 3, "keypress", "paste", "input"], ["controlName", "pincode", "fieldName", "Pincode", 3, "formGroup"], [1, "col-xl-4", "col-md-4", "col-sm-6"], ["type", "file", "formControlName", "profile_photo", 1, "form-control", "form-control-sm", 3, "change"], ["controlName", "profile_photo", "fieldName", "Profile photo", 3, "formGroup"], ["type", "file", "formControlName", "aadhar", 1, "form-control", "form-control-sm", 3, "change"], ["controlName", "aadhar", "fieldName", "Aadhar card", 3, "formGroup"], ["type", "file", "formControlName", "pan", 1, "form-control", "form-control-sm", 3, "change"], ["controlName", "pan", "fieldName", "Pan card", 3, "formGroup"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "bi", "bi-check2"], ["id", "imageModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content", "border-0", "overflow-hidden", "shadow-lg"], [1, "modal-header", "border-0", "bg-dark", "text-white", "py-2", "px-3"], [1, "fs-12", "fw-medium"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-white"], [1, "modal-body", "p-0", "bg-dark", "d-flex", "align-items-center", "justify-content-center", 2, "min-height", "300px"], ["alt", "Document Preview", 1, "img-fluid", "rounded", 2, "max-height", "80vh", 3, "src"], [1, "text-muted", "fw-semibold"], ["alt", "Profile", "width", "34px", "height", "34px", "title", "Click to view full photo", "data-bs-toggle", "modal", "data-bs-target", "#imageModal", 1, "rounded-circle", "object-fit-cover", "cursor-pointer", "border", 3, "click", "error", "src"], [1, "fw-semibold", "text-heading"], [1, "fs-10", "text-muted"], [1, "badge", "bg-primary"], [1, "badge", "bg-info"], [1, "text-capitalize", "d-inline-flex", "align-items-center", "gap-1"], [1, "badge", 3, "ngClass"], [1, "text-muted"], [1, "d-flex", "align-items-center", "gap-1"], ["data-bs-toggle", "modal", "data-bs-target", "#imageModal", "title", "View Aadhar", 1, "btn", "btn-sm", "btn-outline-secondary", "py-0", "px-1", "fs-10", 3, "click"], [1, "bi", "bi-file-earmark-person"], ["data-bs-toggle", "modal", "data-bs-target", "#imageModal", "title", "View PAN", 1, "btn", "btn-sm", "btn-outline-secondary", "py-0", "px-1", "fs-10", 3, "click"], [1, "bi", "bi-file-earmark-text"], [1, "text-center"], [1, "action-btn-group", "justify-content-center"], ["title", "Send WhatsApp Rent Reminder", 1, "btn-action-icon", "text-success", "border-success"], ["title", "Send WhatsApp Receipt Confirmation", 1, "btn-action-icon", "text-success", "border-success"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", "title", "Edit Tenant", 1, "btn-action-icon", "primary", 3, "click"], [1, "bi", "bi-pencil"], ["title", "Delete Tenant", 1, "btn-action-icon", "danger", 3, "click"], [1, "bi", "bi-trash"], [1, "bi", "bi-gender-male", "text-primary"], [1, "bi", "bi-gender-female", "text-danger"], [1, "bi", "bi-gender-ambiguous", "text-secondary"], ["title", "Send WhatsApp Rent Reminder", 1, "btn-action-icon", "text-success", "border-success", 3, "click"], [1, "bi", "bi-whatsapp"], ["title", "Send WhatsApp Receipt Confirmation", 1, "btn-action-icon", "text-success", "border-success", 3, "click"], ["colspan", "13", 1, "text-center", "py-4", "text-muted"], [1, "bi", "bi-inbox", "fs-3", "d-block", "mb-1", "opacity-50"]], template: function TenantComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "h2", 8);
      \u0275\u0275element(4, "i", 9);
      \u0275\u0275text(5, " Tenant Directory ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 10);
      \u0275\u0275text(7, "Comprehensive directory of active and previous tenants, documents, and room allocations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 11)(9, "button", 12);
      \u0275\u0275listener("click", function TenantComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterOption = !ctx.filterOption);
      });
      \u0275\u0275element(10, "i", 13);
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, TenantComponent_Conditional_13_Template, 1, 0, "span", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 15);
      \u0275\u0275listener("click", function TenantComponent_Template_button_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openADDForm());
      });
      \u0275\u0275element(15, "i", 16);
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "Add Tenant");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "div", 17)(19, "div", 18)(20, "span", 19);
      \u0275\u0275element(21, "i", 20);
      \u0275\u0275text(22, " Filter Tenants ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 21);
      \u0275\u0275listener("click", function TenantComponent_Template_button_click_23_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterOption = false);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "form", 22);
      \u0275\u0275listener("submit", function TenantComponent_Template_form_submit_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.getTable());
      });
      \u0275\u0275elementStart(25, "div", 23)(26, "label", 24);
      \u0275\u0275text(27, "Property Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "select", 25)(29, "option", 26);
      \u0275\u0275text(30, "-- All Properties --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(31, TenantComponent_For_32_Template, 2, 2, "option", 27, \u0275\u0275repeaterTrackByIndex, false, TenantComponent_ForEmpty_33_Template, 2, 0, "option", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 23)(35, "label", 24);
      \u0275\u0275text(36, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "select", 28, 0);
      \u0275\u0275listener("change", function TenantComponent_Template_select_change_37_listener() {
        \u0275\u0275restoreView(_r1);
        const filter_state_r3 = \u0275\u0275reference(38);
        return \u0275\u0275resetView(ctx.getDistrict(filter_state_r3.value));
      });
      \u0275\u0275elementStart(39, "option", 26);
      \u0275\u0275text(40, "-- Select State --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(41, TenantComponent_For_42_Template, 2, 2, "option", 27, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 23)(44, "label", 24);
      \u0275\u0275text(45, "District");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "select", 29)(47, "option", 26);
      \u0275\u0275text(48, "-- Select District --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(49, TenantComponent_For_50_Template, 2, 2, "option", 27, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 23)(52, "label", 24);
      \u0275\u0275text(53, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "select", 30)(55, "option", 26);
      \u0275\u0275text(56, "All Statuses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "option", 31);
      \u0275\u0275text(58, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "option", 32);
      \u0275\u0275text(60, "Inactive");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "div", 23)(62, "label", 24);
      \u0275\u0275text(63, "Tenant Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(64, "input", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 23)(66, "label", 24);
      \u0275\u0275text(67, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(68, "input", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 23)(70, "label", 24);
      \u0275\u0275text(71, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "input", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 23)(74, "label", 24);
      \u0275\u0275text(75, "Date of Birth");
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "input", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 23)(78, "label", 24);
      \u0275\u0275text(79, "Room Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(80, "input", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 23)(82, "label", 24);
      \u0275\u0275text(83, "Occupation");
      \u0275\u0275elementEnd();
      \u0275\u0275element(84, "input", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 23)(86, "label", 24);
      \u0275\u0275text(87, "Emergency Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275element(88, "input", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 23)(90, "label", 24);
      \u0275\u0275text(91, "Parent Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275element(92, "input", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div", 41)(94, "button", 42);
      \u0275\u0275listener("click", function TenantComponent_Template_button_click_94_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilterForm());
      });
      \u0275\u0275element(95, "i", 43);
      \u0275\u0275text(96, " Reset ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "button", 44);
      \u0275\u0275listener("click", function TenantComponent_Template_button_click_97_listener() {
        let tmp_5_0;
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView((tmp_5_0 = ctx.filterForm.get("page")) == null ? null : tmp_5_0.setValue(1));
      });
      \u0275\u0275element(98, "i", 45);
      \u0275\u0275text(99, " Apply Filter ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(100, "app-pagination", 46);
      \u0275\u0275elementStart(101, "div", 47)(102, "div", 48)(103, "table", 49)(104, "thead")(105, "tr")(106, "th", 50);
      \u0275\u0275text(107, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "th");
      \u0275\u0275text(109, "Photo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "th");
      \u0275\u0275text(111, "Tenant Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "th");
      \u0275\u0275text(113, "PG Property");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "th");
      \u0275\u0275text(115, "Room");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "th");
      \u0275\u0275text(117, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "th");
      \u0275\u0275text(119, "Gender");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "th");
      \u0275\u0275text(121, "Rent Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "th");
      \u0275\u0275text(123, "Occupation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "th");
      \u0275\u0275text(125, "DOB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "th");
      \u0275\u0275text(127, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "th");
      \u0275\u0275text(129, "District");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "th");
      \u0275\u0275text(131, "Documents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "th");
      \u0275\u0275text(133, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "th", 51);
      \u0275\u0275text(135, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "tbody");
      \u0275\u0275repeaterCreate(137, TenantComponent_For_138_Template, 56, 25, "tr", null, \u0275\u0275repeaterTrackByIndex, false, TenantComponent_ForEmpty_139_Template, 4, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(140, "div", 52)(141, "div", 53)(142, "div", 54)(143, "div", 55)(144, "h5", 56);
      \u0275\u0275element(145, "i", 57);
      \u0275\u0275text(146);
      \u0275\u0275elementEnd();
      \u0275\u0275element(147, "button", 58, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "div", 59)(150, "form", 60)(151, "div", 61)(152, "div", 62)(153, "label", 24);
      \u0275\u0275text(154, "Property Name ");
      \u0275\u0275elementStart(155, "span", 63);
      \u0275\u0275text(156, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "select", 64, 2);
      \u0275\u0275listener("change", function TenantComponent_Template_select_change_157_listener() {
        \u0275\u0275restoreView(_r1);
        const pgProperty_r13 = \u0275\u0275reference(158);
        return \u0275\u0275resetView(ctx.getAvailableRooms(pgProperty_r13.value));
      });
      \u0275\u0275elementStart(159, "option", 26);
      \u0275\u0275text(160, "-- Select PG --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(161, TenantComponent_For_162_Template, 2, 2, "option", 27, \u0275\u0275repeaterTrackByIndex, false, TenantComponent_ForEmpty_163_Template, 2, 0, "option", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275element(164, "app-form-validation-message", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "div", 62)(166, "label", 24);
      \u0275\u0275text(167, "Room Allocation ");
      \u0275\u0275elementStart(168, "span", 63);
      \u0275\u0275text(169, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "select", 66)(171, "option", 26);
      \u0275\u0275text(172, "-- Select Room --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(173, TenantComponent_For_174_Template, 2, 3, "option", 27, \u0275\u0275repeaterTrackByIndex, false, TenantComponent_ForEmpty_175_Template, 2, 0, "option", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275element(176, "app-form-validation-message", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "div", 62)(178, "label", 24);
      \u0275\u0275text(179, "Tenant Full Name ");
      \u0275\u0275elementStart(180, "span", 63);
      \u0275\u0275text(181, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "input", 68);
      \u0275\u0275listener("input", function TenantComponent_Template_input_input_182_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 30));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(183, "app-form-validation-message", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "div", 62)(185, "label", 24);
      \u0275\u0275text(186, "Phone Number ");
      \u0275\u0275elementStart(187, "span", 63);
      \u0275\u0275text(188, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(189, "input", 70);
      \u0275\u0275listener("keypress", function TenantComponent_Template_input_keypress_189_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.numberOnly($event));
      })("paste", function TenantComponent_Template_input_paste_189_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.handleNumberPaste($event, 10));
      })("input", function TenantComponent_Template_input_input_189_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 10));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(190, "app-form-validation-message", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "div", 62)(192, "label", 24);
      \u0275\u0275text(193, "Email Address ");
      \u0275\u0275elementStart(194, "span", 63);
      \u0275\u0275text(195, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(196, "input", 72);
      \u0275\u0275listener("input", function TenantComponent_Template_input_input_196_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 50));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(197, "app-form-validation-message", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "div", 62)(199, "label", 24);
      \u0275\u0275text(200, "Password ");
      \u0275\u0275template(201, TenantComponent_Conditional_201_Template, 2, 0, "span", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "input", 74);
      \u0275\u0275listener("input", function TenantComponent_Template_input_input_202_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 15));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(203, "app-form-validation-message", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "div", 62)(205, "label", 24);
      \u0275\u0275text(206, "Gender ");
      \u0275\u0275elementStart(207, "span", 63);
      \u0275\u0275text(208, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(209, "select", 76)(210, "option", 26);
      \u0275\u0275text(211, "-- Select Gender --");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "option", 77);
      \u0275\u0275text(213, "Male");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "option", 78);
      \u0275\u0275text(215, "Female");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "option", 79);
      \u0275\u0275text(217, "Other");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(218, "app-form-validation-message", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "div", 62)(220, "label", 24);
      \u0275\u0275text(221, "Date of Birth ");
      \u0275\u0275elementStart(222, "span", 63);
      \u0275\u0275text(223, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(224, "input", 36)(225, "app-form-validation-message", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "div", 62)(227, "label", 24);
      \u0275\u0275text(228, "Check-in Date ");
      \u0275\u0275elementStart(229, "span", 63);
      \u0275\u0275text(230, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(231, "input", 82)(232, "app-form-validation-message", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "div", 62)(234, "label", 24);
      \u0275\u0275text(235, "Rent Status ");
      \u0275\u0275elementStart(236, "span", 63);
      \u0275\u0275text(237, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "select", 84)(239, "option", 26);
      \u0275\u0275text(240, "-- Select Status --");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "option", 85);
      \u0275\u0275text(242, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "option", 86);
      \u0275\u0275text(244, "Pending");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(245, "app-form-validation-message", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "div", 62)(247, "label", 24);
      \u0275\u0275text(248, "Occupation ");
      \u0275\u0275elementStart(249, "span", 63);
      \u0275\u0275text(250, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(251, "input", 88);
      \u0275\u0275listener("input", function TenantComponent_Template_input_input_251_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 70));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(252, "app-form-validation-message", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "div", 62)(254, "label", 24);
      \u0275\u0275text(255, "Parent / Guardian Contact ");
      \u0275\u0275elementStart(256, "span", 63);
      \u0275\u0275text(257, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(258, "input", 90);
      \u0275\u0275listener("keypress", function TenantComponent_Template_input_keypress_258_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.numberOnly($event));
      })("paste", function TenantComponent_Template_input_paste_258_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.handleNumberPaste($event, 10));
      })("input", function TenantComponent_Template_input_input_258_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 10));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(259, "app-form-validation-message", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "div", 62)(261, "label", 24);
      \u0275\u0275text(262, "Emergency Contact ");
      \u0275\u0275elementStart(263, "span", 63);
      \u0275\u0275text(264, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(265, "input", 92);
      \u0275\u0275listener("keypress", function TenantComponent_Template_input_keypress_265_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.numberOnly($event));
      })("paste", function TenantComponent_Template_input_paste_265_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.handleNumberPaste($event, 10));
      })("input", function TenantComponent_Template_input_input_265_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 10));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(266, "app-form-validation-message", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "div", 94)(268, "label", 24);
      \u0275\u0275text(269, "Permanent Address ");
      \u0275\u0275elementStart(270, "span", 63);
      \u0275\u0275text(271, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(272, "input", 95);
      \u0275\u0275listener("input", function TenantComponent_Template_input_input_272_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 100));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(273, "app-form-validation-message", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "div", 62)(275, "label", 24);
      \u0275\u0275text(276, "Status ");
      \u0275\u0275elementStart(277, "span", 63);
      \u0275\u0275text(278, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(279, "select", 97)(280, "option", 98);
      \u0275\u0275text(281, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "option", 32);
      \u0275\u0275text(283, "Inactive");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(284, "app-form-validation-message", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "div", 62)(286, "label", 24);
      \u0275\u0275text(287, "State ");
      \u0275\u0275elementStart(288, "span", 63);
      \u0275\u0275text(289, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(290, "select", 100, 3);
      \u0275\u0275listener("change", function TenantComponent_Template_select_change_290_listener() {
        \u0275\u0275restoreView(_r1);
        const state_id_r16 = \u0275\u0275reference(291);
        return \u0275\u0275resetView(ctx.getDistrict(state_id_r16.value));
      });
      \u0275\u0275elementStart(292, "option", 26);
      \u0275\u0275text(293, "-- Select State --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(294, TenantComponent_For_295_Template, 2, 2, "option", 27, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275element(296, "app-form-validation-message", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "div", 62)(298, "label", 24);
      \u0275\u0275text(299, "District ");
      \u0275\u0275elementStart(300, "span", 63);
      \u0275\u0275text(301, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(302, "select", 102)(303, "option", 26);
      \u0275\u0275text(304, "-- Select District --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(305, TenantComponent_For_306_Template, 2, 2, "option", 27, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275element(307, "app-form-validation-message", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "div", 62)(309, "label", 24);
      \u0275\u0275text(310, "Pincode ");
      \u0275\u0275elementStart(311, "span", 63);
      \u0275\u0275text(312, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(313, "input", 104);
      \u0275\u0275listener("keypress", function TenantComponent_Template_input_keypress_313_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.numberOnly($event));
      })("paste", function TenantComponent_Template_input_paste_313_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.handleNumberPaste($event, 6));
      })("input", function TenantComponent_Template_input_input_313_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 6));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(314, "app-form-validation-message", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "div", 106)(316, "label", 24);
      \u0275\u0275text(317, "Profile Photo ");
      \u0275\u0275elementStart(318, "span", 63);
      \u0275\u0275text(319, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(320, "input", 107);
      \u0275\u0275listener("change", function TenantComponent_Template_input_change_320_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.fileUpload($event, "profileFile"));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(321, "app-form-validation-message", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "div", 106)(323, "label", 24);
      \u0275\u0275text(324, "Aadhar Card Document ");
      \u0275\u0275elementStart(325, "span", 63);
      \u0275\u0275text(326, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(327, "input", 109);
      \u0275\u0275listener("change", function TenantComponent_Template_input_change_327_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.fileUpload($event, "aadharFile"));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(328, "app-form-validation-message", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "div", 106)(330, "label", 24);
      \u0275\u0275text(331, "PAN Card Document ");
      \u0275\u0275elementStart(332, "span", 63);
      \u0275\u0275text(333, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(334, "input", 111);
      \u0275\u0275listener("change", function TenantComponent_Template_input_change_334_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.fileUpload($event, "panCardFile"));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(335, "app-form-validation-message", 112);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(336, "div", 113)(337, "button", 114);
      \u0275\u0275listener("click", function TenantComponent_Template_button_click_337_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.dataForm.reset());
      });
      \u0275\u0275element(338, "i", 43);
      \u0275\u0275text(339, " Reset ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "button", 115);
      \u0275\u0275listener("click", function TenantComponent_Template_button_click_340_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.editMode ? ctx.UPDATE() : ctx.ADD());
      });
      \u0275\u0275element(341, "i", 116);
      \u0275\u0275text(342);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(343, "div", 117)(344, "div", 118)(345, "div", 119)(346, "div", 120)(347, "span", 121);
      \u0275\u0275text(348, "Document Preview");
      \u0275\u0275elementEnd();
      \u0275\u0275element(349, "button", 122);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "div", 123);
      \u0275\u0275element(351, "img", 124);
      \u0275\u0275elementEnd()()()()();
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
      \u0275\u0275advance(51);
      \u0275\u0275property("formGroup", ctx.filterForm)("limit", ctx.limit)("total_pages", ctx.total_pages)("page_no", ctx.page)("callback", ctx.getTable.bind(ctx));
      \u0275\u0275advance(37);
      \u0275\u0275repeater(ctx.table_data);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngClass", ctx.editMode ? "bi-pencil-square" : "bi-person-plus-fill");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.editMode ? "Edit Tenant Details" : "Add New Tenant Registration", " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.property_data);
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.roomList);
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(!ctx.editMode ? 201 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(15);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(13);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(11);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.state_data);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.district_data);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.dataForm);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.editMode ? "Save Changes" : "Register Tenant", " ");
      \u0275\u0275advance(9);
      \u0275\u0275property("src", ctx.imgSrc, \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, CommonModule, NgClass, DatePipe, PaginationComponent, FormValidationMessageComponent, StateNamePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantComponent, [{
    type: Component,
    args: [{ selector: "app-tenant", imports: [ReactiveFormsModule, CommonModule, PaginationComponent, FormValidationMessageComponent, StateNamePipe, DatePipe], template: `<div class="app-page-container">

    <!-- Common Page Header -->
    <div class="app-page-header">
        <div class="app-page-title-group">
            <h2 class="app-page-title">
                <i class="bi bi-person-badge-fill"></i>
                Tenant Directory
            </h2>
            <p class="app-page-subtitle">Comprehensive directory of active and previous tenants, documents, and room allocations</p>
        </div>
        <div class="app-page-actions">
            <button class="btn-filter-toggle" [class.active]="filterOption" (click)="filterOption = !filterOption" type="button">
                <i class="bi bi-funnel-fill"></i>
                <span>Filter</span>
                @if (filterOption) {
                    <span class="filter-active-dot"></span>
                }
            </button>
            <button class="btn btn-sm btn-primary d-flex align-items-center gap-1" (click)="openADDForm()" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                <i class="bi bi-plus-lg"></i>
                <span>Add Tenant</span>
            </button>
        </div>
    </div>

    <!-- Filter Card -->
    <div class="app-filter-card" [ngClass]="filterOption ? '' : 'd-none'">
        <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
            <span class="filter-header-title">
                <i class="bi bi-sliders"></i> Filter Tenants
            </span>
            <button type="button" class="btn-close btn-sm" (click)="filterOption = false" aria-label="Close"></button>
        </div>

        <form [formGroup]="filterForm" class="row g-2 align-items-end" (submit)="getTable()">
            <div class="col-xl-2 col-md-3 col-sm-6">
                <label class="form-label">Property Name</label>
                <select formControlName="pg_id" class="form-select form-select-sm">
                    <option value="">-- All Properties --</option>
                    @for(items of property_data; track $index){
                    <option value="{{items.id}}">{{items.name}}</option>
                    }@empty{
                    <option value="">No PG found</option>
                    }
                </select>
            </div>

            <div class="col-xl-2 col-md-3 col-sm-6">
                <label class="form-label">State</label>
                <select class="form-select form-select-sm" id="stateId" (change)="getDistrict(filter_state.value)"
                    #filter_state formControlName="state">
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

            <div class="col-xl-2 col-md-3 col-sm-6">
                <label class="form-label">Tenant Name</label>
                <input type="text" class="form-control form-control-sm" formControlName="name" placeholder="Search name">
            </div>

            <div class="col-xl-2 col-md-3 col-sm-6">
                <label class="form-label">Email Address</label>
                <input type="text" class="form-control form-control-sm" formControlName="email" placeholder="Search email">
            </div>

            <div class="col-xl-2 col-md-3 col-sm-6">
                <label class="form-label">Address</label>
                <input type="text" class="form-control form-control-sm" formControlName="address" placeholder="Search address">
            </div>

            <div class="col-xl-2 col-md-3 col-sm-6">
                <label class="form-label">Date of Birth</label>
                <input type="date" class="form-control form-control-sm" formControlName="dob">
            </div>

            <div class="col-xl-2 col-md-3 col-sm-6">
                <label class="form-label">Room Number</label>
                <input type="text" class="form-control form-control-sm" formControlName="room_number" placeholder="e.g. 101">
            </div>

            <div class="col-xl-2 col-md-3 col-sm-6">
                <label class="form-label">Occupation</label>
                <input type="text" class="form-control form-control-sm" formControlName="occupation" placeholder="Search occupation">
            </div>

            <div class="col-xl-2 col-md-3 col-sm-6">
                <label class="form-label">Emergency Contact</label>
                <input type="text" class="form-control form-control-sm" formControlName="emergency_contact" placeholder="Search contact">
            </div>

            <div class="col-xl-2 col-md-3 col-sm-6">
                <label class="form-label">Parent Contact</label>
                <input type="text" class="form-control form-control-sm" formControlName="parent_contact" placeholder="Search contact">
            </div>

            <div class="col-12 d-flex justify-content-end gap-2 mt-2">
                <button type="button" class="btn-filter-reset" (click)="resetFilterForm()">
                    <i class="bi bi-arrow-counterclockwise"></i> Reset
                </button>
                <button type="submit" (click)="this.filterForm.get('page')?.setValue(1)" class="btn-filter-apply">
                    <i class="bi bi-search"></i> Apply Filter
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
                        <th style="width: 50px;">#</th>
                        <th>Photo</th>
                        <th>Tenant Name</th>
                        <th>PG Property</th>
                        <th>Room</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Rent Status</th>
                        <th>Occupation</th>
                        <th>DOB</th>
                        <th>State</th>
                        <th>District</th>
                        <th>Documents</th>
                        <th>Status</th>
                        <th class="text-center" style="width: 110px;">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    @for(items of table_data; track $index; let i = $index){
                    <tr>
                        <td class="text-muted fw-semibold">{{ (page - 1) * limit + i + 1 }}</td>
                        <td>
                            <img (click)="openBigImage(profile_photo.src)" #profile_photo 
                                 src="{{server_url}}static/{{items.profile_photo}}"
                                 (error)="$any($event.target).src='https://ui-avatars.com/api/?name=' + (items.tenant_name || items.name) + '&background=eef2ff&color=4f46e5'"
                                 class="rounded-circle object-fit-cover cursor-pointer border" 
                                 alt="Profile" width="34px" height="34px"
                                 title="Click to view full photo" data-bs-toggle="modal" data-bs-target="#imageModal">
                        </td>
                        <td>
                            <div class="fw-semibold text-heading">{{items.tenant_name || items.name}}</div>
                            <div class="fs-10 text-muted">{{items.email}}</div>
                        </td>
                        <td>
                            <span class="badge bg-primary">{{items.pg_name}}</span>
                        </td>
                        <td>
                            <span class="badge bg-info">#{{items.room_number}}</span>
                        </td>
                        <td>{{items.phone}}</td>
                        <td>
                            <span class="text-capitalize d-inline-flex align-items-center gap-1">
                                @if(items.gender == 'male'){
                                    <i class="bi bi-gender-male text-primary"></i> Male
                                }@else if(items.gender == 'female'){
                                    <i class="bi bi-gender-female text-danger"></i> Female
                                }@else{
                                    <i class="bi bi-gender-ambiguous text-secondary"></i> {{items.gender}}
                                }
                            </span>
                        </td>
                        <td>
                            <span class="badge" [ngClass]="items.rent_status === 'paid' ? 'bg-success' : 'bg-danger'">
                                {{ items.rent_status === 'paid' ? 'Paid' : 'Pending' }}
                            </span>
                        </td>
                        <td>{{items.occupation}}</td>
                        <td class="text-muted">{{items.dob | date:'mediumDate'}}</td>
                        <td>{{ items.state | stateName: state_data }}</td>
                        <td>{{ getDistrictForView(items.district) }}</td>
                        <td>
                            <div class="d-flex align-items-center gap-1">
                                <button class="btn btn-sm btn-outline-secondary py-0 px-1 fs-10" (click)="openBigImage(server_url + 'static/' + items.aadhar)"
                                        data-bs-toggle="modal" data-bs-target="#imageModal" title="View Aadhar">
                                    <i class="bi bi-file-earmark-person"></i> Aadhar
                                </button>
                                <button class="btn btn-sm btn-outline-secondary py-0 px-1 fs-10" (click)="openBigImage(server_url + 'static/' + items.pan)"
                                        data-bs-toggle="modal" data-bs-target="#imageModal" title="View PAN">
                                    <i class="bi bi-file-earmark-text"></i> PAN
                                </button>
                            </div>
                        </td>
                        <td>
                            <span class="badge" [ngClass]="items.status === 1 ? 'bg-success' : 'bg-danger'">
                                {{ items.status === 1 ? 'Active' : 'Inactive' }}
                            </span>
                        </td>
                        <td class="text-center">
                            <div class="action-btn-group justify-content-center">
                                @if (items.rent_status !== 'paid') {
                                    <button class="btn-action-icon text-success border-success" (click)="sendWhatsAppReminder(items)" title="Send WhatsApp Rent Reminder">
                                        <i class="bi bi-whatsapp"></i>
                                    </button>
                                } @else {
                                    <button class="btn-action-icon text-success border-success" (click)="sendWhatsAppReceipt(items)" title="Send WhatsApp Receipt Confirmation">
                                        <i class="bi bi-whatsapp"></i>
                                    </button>
                                }
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" (click)="EDIT(items.id)"
                                    class="btn-action-icon primary" title="Edit Tenant">
                                    <i class="bi bi-pencil"></i>
                                </button>
                                <button class="btn-action-icon danger" (click)="DELETE(items.id)" title="Delete Tenant">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                    }@empty{
                    <tr>
                        <td colspan="13" class="text-center py-4 text-muted">
                            <i class="bi bi-inbox fs-3 d-block mb-1 opacity-50"></i>
                            No tenants found matching your query.
                        </td>
                    </tr>
                    }
                </tbody>
            </table>
        </div>
    </div>

    <!-- Add/Edit Tenant Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fs-14 fw-bold" id="exampleModalLabel">
                        <i class="bi" [ngClass]="editMode ? 'bi-pencil-square' : 'bi-person-plus-fill'"></i>
                        {{editMode ? 'Edit Tenant Details' : 'Add New Tenant Registration'}}
                    </h5>
                    <button type="button" #modelClose class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                    <form [formGroup]="dataForm">
                        <div class="row g-3">
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Property Name <span class="text-danger">*</span></label>
                                <select formControlName="pg_id" class="form-select form-select-sm" #pgProperty
                                    (change)="getAvailableRooms(pgProperty.value)">
                                    <option value="">-- Select PG --</option>
                                    @for(items of property_data; track $index){
                                    <option value="{{items.id}}">{{items.name}}</option>
                                    }@empty{
                                    <option value="">No PG found</option>
                                    }
                                </select>
                                <app-form-validation-message [formGroup]="dataForm" controlName="pg_id" fieldName="Property name"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Room Allocation <span class="text-danger">*</span></label>
                                <select formControlName="room_id" class="form-select form-select-sm">
                                    <option value="">-- Select Room --</option>
                                    @for(items of roomList; track $index){
                                    <option value="{{items.id}}">{{items.room_number}} ({{items.type}} Sharing)</option>
                                    }@empty{
                                    <option value="">No rooms available</option>
                                    }
                                </select>
                                <app-form-validation-message [formGroup]="dataForm" controlName="room_id" fieldName="Room number"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Tenant Full Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-sm" formControlName="name" maxlength="30" (input)="GF.enforceMaxLength($event, 30)" placeholder="Full name">
                                <app-form-validation-message [formGroup]="dataForm" controlName="name" fieldName="Name"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Phone Number <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-sm" formControlName="phone" maxlength="10" (keypress)="GF.numberOnly($event)" (paste)="GF.handleNumberPaste($event, 10)" (input)="GF.enforceMaxLength($event, 10)" placeholder="10 digits">
                                <app-form-validation-message [formGroup]="dataForm" controlName="phone" fieldName="Phone"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Email Address <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-sm" formControlName="email" maxlength="50" (input)="GF.enforceMaxLength($event, 50)" placeholder="Email address">
                                <app-form-validation-message [formGroup]="dataForm" controlName="email" fieldName="Email"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Password @if (!editMode) { <span class="text-danger">*</span> }</label>
                                <input type="password" class="form-control form-control-sm" formControlName="password" maxlength="15" (input)="GF.enforceMaxLength($event, 15)" placeholder="Set password">
                                <app-form-validation-message [formGroup]="dataForm" controlName="password" fieldName="Password"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Gender <span class="text-danger">*</span></label>
                                <select formControlName="gender" class="form-select form-select-sm">
                                    <option value="">-- Select Gender --</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                <app-form-validation-message [formGroup]="dataForm" controlName="gender" fieldName="Gender"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Date of Birth <span class="text-danger">*</span></label>
                                <input type="date" class="form-control form-control-sm" formControlName="dob">
                                <app-form-validation-message [formGroup]="dataForm" controlName="dob" fieldName="DOB"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Check-in Date <span class="text-danger">*</span></label>
                                <input type="date" class="form-control form-control-sm" formControlName="check_in_date">
                                <app-form-validation-message [formGroup]="dataForm" controlName="check_in_date" fieldName="Check-in date"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Rent Status <span class="text-danger">*</span></label>
                                <select formControlName="rent_status" class="form-select form-select-sm">
                                    <option value="">-- Select Status --</option>
                                    <option value="paid">Paid</option>
                                    <option value="pending">Pending</option>
                                </select>
                                <app-form-validation-message [formGroup]="dataForm" controlName="rent_status" fieldName="Rent status"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Occupation <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-sm" formControlName="occupation" maxlength="70" (input)="GF.enforceMaxLength($event, 70)" placeholder="Student / Employee">
                                <app-form-validation-message [formGroup]="dataForm" controlName="occupation" fieldName="Occupation"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Parent / Guardian Contact <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-sm" formControlName="parent_contact" maxlength="10" (keypress)="GF.numberOnly($event)" (paste)="GF.handleNumberPaste($event, 10)" (input)="GF.enforceMaxLength($event, 10)" placeholder="Phone number">
                                <app-form-validation-message [formGroup]="dataForm" controlName="parent_contact" fieldName="Parent contact"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Emergency Contact <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-sm" formControlName="emergency_contact" maxlength="10" (keypress)="GF.numberOnly($event)" (paste)="GF.handleNumberPaste($event, 10)" (input)="GF.enforceMaxLength($event, 10)" placeholder="Emergency number">
                                <app-form-validation-message [formGroup]="dataForm" controlName="emergency_contact" fieldName="Emergency contact"></app-form-validation-message>
                            </div>

                            <div class="col-xl-6 col-md-8 col-sm-12">
                                <label class="form-label">Permanent Address <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-sm" formControlName="address" maxlength="100" (input)="GF.enforceMaxLength($event, 100)" placeholder="Full residential address">
                                <app-form-validation-message [formGroup]="dataForm" controlName="address" fieldName="Address"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Status <span class="text-danger">*</span></label>
                                <select formControlName="status" class="form-select form-select-sm">
                                    <option value="1" selected>Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                                <app-form-validation-message [formGroup]="dataForm" controlName="status" fieldName="Status"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">State <span class="text-danger">*</span></label>
                                <select formControlName="state" (change)="getDistrict(state_id.value)" #state_id class="form-select form-select-sm">
                                    <option value="">-- Select State --</option>
                                    @for (item of state_data; track $index) {
                                    <option [value]="item.state_id">{{ item.state_name }}</option>
                                    }
                                </select>
                                <app-form-validation-message [formGroup]="dataForm" controlName="state" fieldName="State"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">District <span class="text-danger">*</span></label>
                                <select formControlName="district" class="form-select form-select-sm">
                                    <option value="">-- Select District --</option>
                                    @for (item of district_data; track $index) {
                                    <option [value]="item.district_id">{{ item.district_name }}</option>
                                    }
                                </select>
                                <app-form-validation-message [formGroup]="dataForm" controlName="district" fieldName="District"></app-form-validation-message>
                            </div>

                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <label class="form-label">Pincode <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-sm" formControlName="pincode" maxlength="6" (keypress)="GF.numberOnly($event)" (paste)="GF.handleNumberPaste($event, 6)" (input)="GF.enforceMaxLength($event, 6)" placeholder="Pincode">
                                <app-form-validation-message [formGroup]="dataForm" controlName="pincode" fieldName="Pincode"></app-form-validation-message>
                            </div>

                            <div class="col-xl-4 col-md-4 col-sm-6">
                                <label class="form-label">Profile Photo <span class="text-danger">*</span></label>
                                <input type="file" (change)="fileUpload($event, 'profileFile')" class="form-control form-control-sm" formControlName="profile_photo">
                                <app-form-validation-message [formGroup]="dataForm" controlName="profile_photo" fieldName="Profile photo"></app-form-validation-message>
                            </div>

                            <div class="col-xl-4 col-md-4 col-sm-6">
                                <label class="form-label">Aadhar Card Document <span class="text-danger">*</span></label>
                                <input type="file" (change)="fileUpload($event, 'aadharFile')" class="form-control form-control-sm" formControlName="aadhar">
                                <app-form-validation-message [formGroup]="dataForm" controlName="aadhar" fieldName="Aadhar card"></app-form-validation-message>
                            </div>

                            <div class="col-xl-4 col-md-4 col-sm-6">
                                <label class="form-label">PAN Card Document <span class="text-danger">*</span></label>
                                <input type="file" (change)="fileUpload($event, 'panCardFile')" class="form-control form-control-sm" formControlName="pan">
                                <app-form-validation-message [formGroup]="dataForm" controlName="pan" fieldName="Pan card"></app-form-validation-message>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" (click)="this.dataForm.reset()" class="btn btn-sm btn-outline-secondary">
                        <i class="bi bi-arrow-counterclockwise"></i> Reset
                    </button>
                    <button type="button" (click)="editMode ? UPDATE() : ADD()" class="btn btn-sm btn-primary">
                        <i class="bi bi-check2"></i> {{editMode ? 'Save Changes' : 'Register Tenant'}}
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
                    <span class="fs-12 fw-medium">Document Preview</span>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0 bg-dark d-flex align-items-center justify-content-center" style="min-height: 300px;">
                    <img [src]="imgSrc" class="img-fluid rounded" alt="Document Preview" style="max-height: 80vh;">
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TenantComponent, { className: "TenantComponent", filePath: "src/app/pages/tenant/tenant.component.ts", lineNumber: 28 });
})();
export {
  TenantComponent
};
//# sourceMappingURL=chunk-BJ7DMFU3.js.map
