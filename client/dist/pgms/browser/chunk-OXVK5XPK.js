import {
  StateNamePipe
} from "./chunk-WQB6EMPB.js";
import {
  FormValidationMessageComponent,
  PaginationComponent
} from "./chunk-ND5FSM5G.js";
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
} from "./chunk-CPUT4VSH.js";
import {
  CommonModule,
  Component,
  DatePipe,
  GlobalService,
  NgClass,
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
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-CM5MDF2M.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-Y5RQAIA6.js";

// src/app/pages/tenant/tenant.component.ts
var _c0 = ["modelClose"];
var _c1 = ["qrModalClose"];
var _c2 = (a0) => ({ "d-none": a0 });
function TenantComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 142);
    \u0275\u0275listener("click", function TenantComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelected());
    });
    \u0275\u0275element(1, "i", 143);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Delete Selected (", ctx_r2.selectedTenantIds.size, ")");
  }
}
function TenantComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
  }
}
function TenantComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r4 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", items_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(items_r4.name);
  }
}
function TenantComponent_ForEmpty_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1, "No PG found");
    \u0275\u0275elementEnd();
  }
}
function TenantComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275property("value", item_r6.state_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6.state_name);
  }
}
function TenantComponent_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275property("value", item_r7.district_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r7.district_name);
  }
}
function TenantComponent_For_149_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 170);
    \u0275\u0275text(1, " Male ");
  }
}
function TenantComponent_For_149_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 171);
    \u0275\u0275text(1, " Female ");
  }
}
function TenantComponent_For_149_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 172);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const items_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", items_r9.gender, " ");
  }
}
function TenantComponent_For_149_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 173);
    \u0275\u0275listener("click", function TenantComponent_For_149_Conditional_55_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const items_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendWhatsAppReminder(items_r9));
    });
    \u0275\u0275element(1, "i", 174);
    \u0275\u0275elementEnd();
  }
}
function TenantComponent_For_149_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 175);
    \u0275\u0275listener("click", function TenantComponent_For_149_Conditional_56_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const items_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendWhatsAppReceipt(items_r9));
    });
    \u0275\u0275element(1, "i", 174);
    \u0275\u0275elementEnd();
  }
}
function TenantComponent_For_149_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 144)(2, "input", 145);
    \u0275\u0275listener("change", function TenantComponent_For_149_Template_input_change_2_listener() {
      const items_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSelectTenant(items_r9.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td", 146);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "img", 147);
    \u0275\u0275listener("click", function TenantComponent_For_149_Template_img_click_6_listener() {
      const items_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openBigImage(ctx_r2.server_url + "static/" + items_r9.profile_photo));
    })("error", function TenantComponent_For_149_Template_img_error_6_listener($event) {
      const items_r9 = \u0275\u0275restoreView(_r8).$implicit;
      return \u0275\u0275resetView($event.target.src = "https://ui-avatars.com/api/?name=" + (items_r9.tenant_name || items_r9.name) + "&background=eef2ff&color=4f46e5");
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 148);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 149);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "span", 150);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "span", 151);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "span", 152);
    \u0275\u0275template(22, TenantComponent_For_149_Conditional_22_Template, 2, 0)(23, TenantComponent_For_149_Conditional_23_Template, 2, 0)(24, TenantComponent_For_149_Conditional_24_Template, 2, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td")(26, "div", 153);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 154);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td", 155);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "stateName");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "td");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td")(41, "div", 156)(42, "button", 157);
    \u0275\u0275listener("click", function TenantComponent_For_149_Template_button_click_42_listener() {
      const items_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(items_r9.aadhar && ctx_r2.openBigImage(ctx_r2.server_url + "static/" + items_r9.aadhar));
    });
    \u0275\u0275element(43, "i", 158);
    \u0275\u0275text(44, " Aadhar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 159);
    \u0275\u0275listener("click", function TenantComponent_For_149_Template_button_click_45_listener() {
      const items_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(items_r9.pan && ctx_r2.openBigImage(ctx_r2.server_url + "static/" + items_r9.pan));
    });
    \u0275\u0275element(46, "i", 160);
    \u0275\u0275text(47, " PAN ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "td")(49, "span", 154);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "td", 144)(52, "div", 161)(53, "button", 162);
    \u0275\u0275listener("click", function TenantComponent_For_149_Template_button_click_53_listener() {
      const items_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTenantQrModal(items_r9));
    });
    \u0275\u0275element(54, "i", 163);
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, TenantComponent_For_149_Conditional_55_Template, 2, 0, "button", 164)(56, TenantComponent_For_149_Conditional_56_Template, 2, 0, "button", 165);
    \u0275\u0275elementStart(57, "button", 166);
    \u0275\u0275listener("click", function TenantComponent_For_149_Template_button_click_57_listener() {
      const items_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.EDIT(items_r9.id));
    });
    \u0275\u0275element(58, "i", 167);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 168);
    \u0275\u0275listener("click", function TenantComponent_For_149_Template_button_click_59_listener() {
      const items_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.DELETE(items_r9.id));
    });
    \u0275\u0275element(60, "i", 169);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const items_r9 = ctx.$implicit;
    const \u0275$index_264_r12 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.isTenantSelected(items_r9.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.page - 1) * ctx_r2.limit + \u0275$index_264_r12 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate2("src", "", ctx_r2.server_url, "static/", items_r9.profile_photo, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
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
    \u0275\u0275conditional(items_r9.gender == "male" ? 22 : items_r9.gender == "female" ? 23 : 24);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", items_r9.monthly_rent ? (+items_r9.monthly_rent).toLocaleString("en-IN") : "8,000", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", items_r9.rent_status === "paid" ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", items_r9.rent_status === "paid" ? "Paid" : "Pending", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(items_r9.occupation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 23, items_r9.dob, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 26, items_r9.state, ctx_r2.state_data));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getDistrictForView(items_r9.district));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !items_r9.aadhar);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !items_r9.pan);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", items_r9.status === 1 ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", items_r9.status === 1 ? "Active" : "Inactive", " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(items_r9.rent_status !== "paid" ? 55 : 56);
  }
}
function TenantComponent_ForEmpty_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 176);
    \u0275\u0275element(2, "i", 177);
    \u0275\u0275text(3, " No tenants found matching your query. ");
    \u0275\u0275elementEnd()();
  }
}
function TenantComponent_For_173_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r14 = ctx.$implicit;
    \u0275\u0275property("value", items_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(items_r14.name);
  }
}
function TenantComponent_ForEmpty_174_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1, "No PG found");
    \u0275\u0275elementEnd();
  }
}
function TenantComponent_For_185_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r15 = ctx.$implicit;
    \u0275\u0275property("value", items_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", items_r15.room_number, " (", items_r15.type, " Sharing)");
  }
}
function TenantComponent_ForEmpty_186_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1, "No rooms available");
    \u0275\u0275elementEnd();
  }
}
function TenantComponent_Conditional_212_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function TenantComponent_For_306_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
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
function TenantComponent_For_317_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
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
function TenantComponent_Conditional_377_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 140);
    \u0275\u0275element(1, "div", 178);
    \u0275\u0275elementStart(2, "p", 179);
    \u0275\u0275text(3, "Generating tenant UPI QR code...");
    \u0275\u0275elementEnd()();
  }
}
function TenantComponent_Conditional_378_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 207);
    \u0275\u0275listener("click", function TenantComponent_Conditional_378_Conditional_54_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.markRentPaid(ctx_r2.selectedQrTenant));
    });
    \u0275\u0275element(1, "i", 208);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Mark Paid");
    \u0275\u0275elementEnd()();
  }
}
function TenantComponent_Conditional_378_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 180)(1, "div", 181)(2, "div", 182)(3, "h6", 183);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 149);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 184);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 185)(10, "h5", 186);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 187);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 188)(15, "span", 189);
    \u0275\u0275text(16, "Monthly Room Rent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 190);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 191)(20, "span", 154);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 192);
    \u0275\u0275element(23, "img", 193);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 194)(25, "span", 195);
    \u0275\u0275text(26, "Google Pay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 195);
    \u0275\u0275text(28, "PhonePe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 195);
    \u0275\u0275text(30, "Paytm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 195);
    \u0275\u0275text(32, "BHIM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 196)(34, "div")(35, "strong", 197);
    \u0275\u0275text(36, "Payee UPI ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "code", 198);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 199);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 200)(42, "button", 201);
    \u0275\u0275listener("click", function TenantComponent_Conditional_378_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.printQrCard());
    });
    \u0275\u0275element(43, "i", 202);
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45, "Print Sticker");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "button", 203);
    \u0275\u0275listener("click", function TenantComponent_Conditional_378_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadQrImage());
    });
    \u0275\u0275element(47, "i", 204);
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49, "Download PNG");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "button", 205);
    \u0275\u0275listener("click", function TenantComponent_Conditional_378_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendWhatsAppQr(ctx_r2.selectedQrTenant));
    });
    \u0275\u0275element(51, "i", 174);
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53, "Share on WhatsApp");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(54, TenantComponent_Conditional_378_Conditional_54_Template, 4, 0, "button", 206);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r2.qrData.tenant == null ? null : ctx_r2.qrData.tenant.pg_name) || "PG Residency");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.qrData.tenant == null ? null : ctx_r2.qrData.tenant.pg_location) || "Room Accommodations");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Room #", (ctx_r2.qrData.tenant == null ? null : ctx_r2.qrData.tenant.room_number) || "-", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.qrData.tenant == null ? null : ctx_r2.qrData.tenant.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.qrData.tenant == null ? null : ctx_r2.qrData.tenant.phone);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r2.qrData.formatted_amount || "8,000", "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", (ctx_r2.qrData.tenant == null ? null : ctx_r2.qrData.tenant.rent_status) === "paid" ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r2.qrData.tenant == null ? null : ctx_r2.qrData.tenant.rent_status) === "paid" ? "STATUS: PAID" : "STATUS: PENDING", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.qrData.qr_code_image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r2.qrData.payee == null ? null : ctx_r2.qrData.payee.upi_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Scan using any UPI app to pay exact \u20B9", ctx_r2.qrData.formatted_amount, "");
    \u0275\u0275advance(14);
    \u0275\u0275conditional((ctx_r2.qrData.tenant == null ? null : ctx_r2.qrData.tenant.rent_status) !== "paid" ? 54 : -1);
  }
}
function TenantComponent_Conditional_379_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141);
    \u0275\u0275element(1, "i", 209);
    \u0275\u0275elementStart(2, "p", 210);
    \u0275\u0275text(3, "Failed to load QR code. Please check PG owner UPI configuration in Settings.");
    \u0275\u0275elementEnd()();
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
  selectedTenantIds = /* @__PURE__ */ new Set();
  selectAll = false;
  modelClose;
  qrModalClose;
  selectedQrTenant = null;
  loadingQr = false;
  qrData = null;
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
        this.selectedTenantIds.clear();
        this.selectAll = false;
      } else {
        this.GF.showToast(res.message, "danger");
      }
    }, (err) => {
      this.GF.showToast(err.error?.message || "Failed to fetch tenants", "danger");
    });
  }
  getAvailableRooms(pg_id, current_room_id) {
    if (!pg_id) {
      this.roomList = [];
      return;
    }
    this.api.postApi("room-list", { pg_id, current_room_id }).subscribe((res) => {
      if (Array.isArray(res)) {
        this.roomList = res;
      } else if (res?.data && Array.isArray(res.data)) {
        this.roomList = res.data;
      } else {
        this.roomList = [];
      }
    }, (err) => {
      this.roomList = [];
      this.GF.showToast(err.error?.message || "Failed to load rooms", "danger");
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
    passwordControl?.setValidators([
      Validators.required,
      Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).+$"),
      Validators.minLength(8),
      Validators.maxLength(15)
    ]);
    passwordControl?.updateValueAndValidity();
    this.dataForm.get("profile_photo")?.setValidators([Validators.required]);
    this.dataForm.get("profile_photo")?.updateValueAndValidity();
    this.dataForm.get("aadhar")?.setValidators([Validators.required]);
    this.dataForm.get("aadhar")?.updateValueAndValidity();
    this.dataForm.get("pan")?.setValidators([Validators.required]);
    this.dataForm.get("pan")?.updateValueAndValidity();
    this.dataForm.markAllAsTouched();
    if (this.dataForm.invalid) {
      this.GF.showToast("Please fill all required fields correctly", "danger");
      return;
    }
    const formData = __spreadProps(__spreadValues({}, this.dataForm.value), {
      aadhar: this.aadharFile,
      profile_photo: this.profileFile,
      pan: this.panCardFile
    });
    delete formData.id;
    this.api.postApi("add-tenant", formData).subscribe((res) => {
      if (res.status) {
        this.GF.showToast(res.message, "success");
        this.closedataForm();
      } else {
        this.GF.showToast(res.message, "danger");
      }
    }, (err) => {
      this.GF.showToast(err.error?.message || "Failed to register tenant", "danger");
    });
  }
  getState() {
    this.api.getState().subscribe((res) => {
      this.state_district_data = res;
      this.state_data = this.state_district_data.state;
    }, (err) => {
      this.GF.showToast(err.error?.message || "Failed to fetch states", "danger");
    });
  }
  getDistrictForView(district_id) {
    if (!this.state_district_data?.district)
      return district_id || "-";
    const found = this.state_district_data.district.find((ele) => ele.district_id == district_id);
    return found ? found.district_name : district_id || "-";
  }
  getDistrict(state_id) {
    this.dataForm.get("district")?.setValue("");
    this.filterForm.get("district")?.setValue("");
    if (!this.state_district_data?.district) {
      this.district_data = [];
      return;
    }
    this.district_data = this.state_district_data.district.filter((ele) => ele.state_id == state_id);
  }
  toggleSelectAll(event) {
    this.selectAll = event.target.checked;
    if (this.selectAll && Array.isArray(this.table_data)) {
      this.table_data.forEach((item) => this.selectedTenantIds.add(item.id));
    } else {
      this.selectedTenantIds.clear();
    }
  }
  toggleSelectTenant(id) {
    if (this.selectedTenantIds.has(id)) {
      this.selectedTenantIds.delete(id);
    } else {
      this.selectedTenantIds.add(id);
    }
    this.selectAll = !!(this.table_data && this.table_data.length > 0 && this.selectedTenantIds.size === this.table_data.length);
  }
  isTenantSelected(id) {
    return this.selectedTenantIds.has(id);
  }
  deleteSelected() {
    return __async(this, null, function* () {
      if (this.selectedTenantIds.size === 0) {
        this.GF.showToast("Please select at least one tenant to delete", "warning");
        return;
      }
      const count = this.selectedTenantIds.size;
      const confirmed = yield this.GF.confirm({
        title: "Delete Selected Tenants",
        message: `Are you sure you want to permanently delete ${count} selected tenant(s)? Associated complaints and rent records will also be removed.`,
        confirmText: `Yes, Delete (${count})`,
        cancelText: "Cancel",
        type: "danger"
      });
      if (!confirmed)
        return;
      this.api.postApi("delete", { action: "tenants", ids: Array.from(this.selectedTenantIds) }).subscribe((res) => {
        if (res.status) {
          this.GF.showToast(res.message || `${count} tenants deleted successfully`, "success");
          this.selectedTenantIds.clear();
          this.selectAll = false;
          this.getTable();
        } else {
          this.GF.showToast(res.message, "danger");
        }
      }, (err) => {
        this.GF.showToast(err.error?.message || "Failed to delete selected tenants", "danger");
      });
    });
  }
  DELETE(clinetId) {
    return __async(this, null, function* () {
      const confirmed = yield this.GF.confirm({
        title: "Delete Tenant",
        message: "Are you sure you want to delete this tenant? This action will permanently remove all associated tenant records.",
        confirmText: "Yes, Delete",
        cancelText: "Cancel",
        type: "danger"
      });
      if (!confirmed)
        return;
      this.api.postApi("delete", { action: "tenants", id: clinetId }).subscribe((res) => {
        if (res.status) {
          this.GF.showToast("Tenant deleted successfully", "success");
          this.getTable();
        } else {
          this.GF.showToast(res.message, "danger");
        }
      }, (err) => {
        this.GF.showToast(err.error?.message || "Failed to delete tenant", "danger");
      });
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
        if (res.data["dob"]) {
          res.data["dob"] = res.data["dob"].split("T")[0];
        }
        if (res.data["check_in_date"]) {
          res.data["check_in_date"] = res.data["check_in_date"].split("T")[0];
        }
        this.dataForm.get("password")?.clearValidators();
        this.dataForm.get("password")?.updateValueAndValidity();
        this.dataForm.get("profile_photo")?.clearValidators();
        this.dataForm.get("profile_photo")?.updateValueAndValidity();
        this.dataForm.get("aadhar")?.clearValidators();
        this.dataForm.get("aadhar")?.updateValueAndValidity();
        this.dataForm.get("pan")?.clearValidators();
        this.dataForm.get("pan")?.updateValueAndValidity();
        this.aadharFile = null;
        this.profileFile = null;
        this.panCardFile = null;
        if (res.data.pg_id) {
          this.getAvailableRooms(res.data.pg_id, res.data.room_id);
        }
        this.dataForm.patchValue(res.data);
        setTimeout(() => {
          if (res.data.state && this.state_district_data?.district) {
            this.district_data = this.state_district_data.district.filter((ele) => ele.state_id == res.data.state);
            this.dataForm.get("district")?.setValue(res.data.district);
          }
        }, 200);
      } else {
        this.GF.showToast(res.message, "danger");
      }
    }, (err) => {
      this.GF.showToast(err.error?.message || "Failed to load tenant", "danger");
    });
  }
  UPDATE() {
    const passwordControl = this.dataForm.get("password");
    const enteredPassword = passwordControl?.value;
    if (enteredPassword && enteredPassword.trim() !== "") {
      passwordControl?.setValidators([
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).+$"),
        Validators.minLength(8),
        Validators.maxLength(15)
      ]);
    } else {
      passwordControl?.clearValidators();
    }
    passwordControl?.updateValueAndValidity();
    this.dataForm.get("profile_photo")?.clearValidators();
    this.dataForm.get("profile_photo")?.updateValueAndValidity();
    this.dataForm.get("aadhar")?.clearValidators();
    this.dataForm.get("aadhar")?.updateValueAndValidity();
    this.dataForm.get("pan")?.clearValidators();
    this.dataForm.get("pan")?.updateValueAndValidity();
    this.dataForm.markAllAsTouched();
    if (this.dataForm.invalid) {
      this.GF.showToast("Please fill all required fields correctly", "danger");
      return;
    }
    const formData = __spreadProps(__spreadValues({}, this.dataForm.value), {
      id: this.EDITId
    });
    if (this.aadharFile) {
      formData.aadhar = this.aadharFile;
    } else {
      delete formData.aadhar;
    }
    if (this.profileFile) {
      formData.profile_photo = this.profileFile;
    } else {
      delete formData.profile_photo;
    }
    if (this.panCardFile) {
      formData.pan = this.panCardFile;
    } else {
      delete formData.pan;
    }
    if (!enteredPassword || enteredPassword.trim() === "") {
      delete formData.password;
    }
    this.api.postApi("update-tenant", formData).subscribe((res) => {
      if (res.status) {
        this.GF.showToast(res.message || "Tenant updated successfully", "success");
        this.closedataForm();
      } else {
        this.GF.showToast(res.message, "danger");
      }
    }, (err) => {
      this.GF.showToast(err.error?.message || "Failed to update tenant", "danger");
    });
  }
  closedataForm() {
    this.modelClose.nativeElement.click();
    this.dataForm.reset();
    this.aadharFile = null;
    this.profileFile = null;
    this.panCardFile = null;
    this.roomList = [];
    this.district_data = [];
    this.getTable();
  }
  openADDForm() {
    this.dataForm.reset();
    this.dataForm.markAsUntouched();
    this.editMode = false;
    this.district_data = [];
    this.roomList = [];
    this.aadharFile = null;
    this.profileFile = null;
    this.panCardFile = null;
    this.dataForm.patchValue({
      status: 1,
      rent_status: "pending"
    });
    const passwordControl = this.dataForm.get("password");
    passwordControl?.setValidators([
      Validators.required,
      Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).+$"),
      Validators.minLength(8),
      Validators.maxLength(15)
    ]);
    passwordControl?.updateValueAndValidity();
    this.dataForm.get("profile_photo")?.setValidators([Validators.required]);
    this.dataForm.get("profile_photo")?.updateValueAndValidity();
    this.dataForm.get("aadhar")?.setValidators([Validators.required]);
    this.dataForm.get("aadhar")?.updateValueAndValidity();
    this.dataForm.get("pan")?.setValidators([Validators.required]);
    this.dataForm.get("pan")?.updateValueAndValidity();
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
  openTenantQrModal(tenant) {
    this.selectedQrTenant = tenant;
    this.loadingQr = true;
    this.qrData = null;
    this.api.postApi("generate-tenant-upi-qr", { tenant_id: tenant.id }).subscribe({
      next: (res) => {
        this.loadingQr = false;
        if (res.status) {
          this.qrData = res;
        } else {
          this.GF.showToast(res.message || "Failed to generate QR code", "danger");
        }
      },
      error: (err) => {
        this.loadingQr = false;
        this.GF.showToast(err.error?.message || "Server error generating QR code", "danger");
      }
    });
  }
  downloadQrImage() {
    if (!this.qrData?.qr_code_image)
      return;
    const link = document.createElement("a");
    link.href = this.qrData.qr_code_image;
    const tenantName = (this.selectedQrTenant?.tenant_name || this.selectedQrTenant?.name || "Tenant").replace(/\s+/g, "_");
    const roomNo = this.selectedQrTenant?.room_number || "Room";
    link.download = `PG_Rent_QR_${tenantName}_Room_${roomNo}.png`;
    link.click();
    this.GF.showToast("QR Code image downloaded!", "success");
  }
  printQrCard() {
    window.print();
  }
  sendWhatsAppQr(tenant) {
    if (!tenant)
      return;
    const rentAmt = Number(tenant.monthly_rent || 8e3).toLocaleString("en-IN");
    const upiLink = this.qrData?.upi_url || "";
    const message = `Hi ${tenant.tenant_name || tenant.name}! \u{1F44B}

Here is your monthly rent payment QR code & UPI payment link for *${tenant.pg_name || "PG Management"}*.

\u{1F3E0} *Room:* ${tenant.room_number || "-"}
\u{1F4B0} *Amount Due:* \u20B9${rentAmt}
\u{1F4F1} *Payee UPI ID:* ${this.qrData?.payee?.upi_id || "PG Owner UPI"}

Tap this link to open Google Pay / PhonePe / Paytm and pay directly:
${upiLink}

Thank you! \u{1F3E0}`;
    this.GF.openWhatsApp(tenant.phone, message);
  }
  markRentPaid(tenant) {
    const name = tenant.tenant_name || tenant.name || "Tenant";
    if (!confirm(`Confirm mark rent as PAID for ${name}?`))
      return;
    this.api.postApi("toggle-rent-status", {
      tenant_id: tenant.id,
      rent_status: "paid",
      payment_method: "UPI",
      amount: tenant.monthly_rent || 8e3
    }).subscribe({
      next: (res) => {
        if (res.status) {
          this.GF.showToast("Rent marked as PAID successfully!", "success");
          tenant.rent_status = "paid";
          if (this.selectedQrTenant)
            this.selectedQrTenant.rent_status = "paid";
          if (this.qrData?.tenant)
            this.qrData.tenant.rent_status = "paid";
          this.getTable();
        } else {
          this.GF.showToast(res.message || "Failed to update rent status", "danger");
        }
      },
      error: (err) => {
        this.GF.showToast(err.error?.message || "Error updating rent status", "danger");
      }
    });
  }
  static \u0275fac = function TenantComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TenantComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(GlobalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TenantComponent, selectors: [["app-tenant"]], viewQuery: function TenantComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.modelClose = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.qrModalClose = _t.first);
    }
  }, decls: 380, vars: 68, consts: [["filter_state", ""], ["modelClose", ""], ["pgProperty", ""], ["state_id", ""], ["qrModalClose", ""], [1, "app-page-container"], [1, "app-page-header"], [1, "app-page-title-group"], [1, "app-page-title"], [1, "bi", "bi-person-badge-fill"], [1, "app-page-subtitle"], [1, "app-page-actions"], ["type", "button", "title", "Delete Selected Tenants", 1, "btn", "btn-sm", "btn-danger", "d-flex", "align-items-center", "gap-1", "shadow-sm"], ["type", "button", 1, "btn-filter-toggle", 3, "click"], [1, "bi", "bi-funnel-fill"], [1, "filter-active-dot"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-sm", "btn-primary", "d-flex", "align-items-center", "gap-1", 3, "click"], [1, "bi", "bi-plus-lg"], [1, "app-filter-card", 3, "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "border-bottom", "pb-2"], [1, "filter-header-title"], [1, "bi", "bi-sliders"], ["type", "button", "aria-label", "Close", 1, "btn-close", "btn-sm", 3, "click"], [1, "row", "g-2", "align-items-end", 3, "submit", "formGroup"], [1, "col-xl-2", "col-md-3", "col-sm-6"], [1, "form-label"], ["formControlName", "pg_id", 1, "form-select", "form-select-sm"], ["value", ""], [3, "value"], ["id", "stateId", "formControlName", "state", 1, "form-select", "form-select-sm", 3, "change"], ["id", "districtId", "formControlName", "district", 1, "form-select", "form-select-sm"], ["id", "statusId", "formControlName", "status", 1, "form-select", "form-select-sm"], ["value", "1"], ["value", "0"], ["type", "text", "formControlName", "name", "placeholder", "Search name", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "email", "placeholder", "Search email", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "address", "placeholder", "Search address", 1, "form-control", "form-control-sm"], ["type", "date", "formControlName", "dob", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "room_number", "placeholder", "e.g. 101", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "occupation", "placeholder", "Search occupation", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "emergency_contact", "placeholder", "Search contact", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "parent_contact", "placeholder", "Search contact", 1, "form-control", "form-control-sm"], [1, "col-12", "d-flex", "justify-content-end", "gap-2", "mt-2"], ["type", "button", 1, "btn-filter-reset", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"], ["type", "submit", 1, "btn-filter-apply", 3, "click"], [1, "bi", "bi-search"], [3, "formGroup", "limit", "total_pages", "page_no", "callback"], [1, "app-table-card"], [1, "table-wrapper"], [1, "table", "align-middle"], [1, "text-center", 2, "width", "38px"], ["type", "checkbox", "title", "Select all on this page", 1, "form-check-input", 3, "change", "checked"], [2, "width", "50px"], [1, "cursor-pointer", "user-select-none", 3, "click"], [1, "bi", "bi-arrow-up-short", 3, "ngClass"], [1, "bi", "bi-arrow-down-short", 3, "ngClass"], [1, "text-center", 2, "width", "140px"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "fs-14", "fw-bold"], [1, "bi", 3, "ngClass"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", "p-4"], [3, "formGroup"], [1, "row", "g-3"], [1, "col-xl-3", "col-md-4", "col-sm-6"], [1, "text-danger"], ["formControlName", "pg_id", 1, "form-select", "form-select-sm", 3, "change"], ["controlName", "pg_id", "fieldName", "Property name", 3, "formGroup"], ["formControlName", "room_id", 1, "form-select", "form-select-sm"], ["controlName", "room_id", "fieldName", "Room number", 3, "formGroup"], ["type", "text", "formControlName", "name", "maxlength", "30", "placeholder", "Full name", 1, "form-control", "form-control-sm", 3, "input"], ["controlName", "name", "fieldName", "Name", 3, "formGroup"], ["type", "text", "formControlName", "phone", "maxlength", "10", "placeholder", "10 digits", 1, "form-control", "form-control-sm", 3, "keypress", "paste", "input"], ["controlName", "phone", "fieldName", "Phone", 3, "formGroup"], ["type", "text", "formControlName", "email", "maxlength", "50", "placeholder", "Email address", 1, "form-control", "form-control-sm", 3, "input"], ["controlName", "email", "fieldName", "Email", 3, "formGroup"], ["type", "password", "formControlName", "password", "maxlength", "15", "placeholder", "Set password", 1, "form-control", "form-control-sm", 3, "input"], ["controlName", "password", "fieldName", "Password", 3, "formGroup"], ["formControlName", "gender", 1, "form-select", "form-select-sm"], ["value", "male"], ["value", "female"], ["value", "other"], ["controlName", "gender", "fieldName", "Gender", 3, "formGroup"], ["controlName", "dob", "fieldName", "DOB", 3, "formGroup"], ["type", "date", "formControlName", "check_in_date", 1, "form-control", "form-control-sm"], ["controlName", "check_in_date", "fieldName", "Check-in date", 3, "formGroup"], ["formControlName", "rent_status", 1, "form-select", "form-select-sm"], ["value", "paid"], ["value", "pending"], ["controlName", "rent_status", "fieldName", "Rent status", 3, "formGroup"], ["type", "text", "formControlName", "occupation", "maxlength", "70", "placeholder", "Student / Employee", 1, "form-control", "form-control-sm", 3, "input"], ["controlName", "occupation", "fieldName", "Occupation", 3, "formGroup"], ["type", "text", "formControlName", "parent_contact", "maxlength", "10", "placeholder", "Phone number", 1, "form-control", "form-control-sm", 3, "keypress", "paste", "input"], ["controlName", "parent_contact", "fieldName", "Parent contact", 3, "formGroup"], ["type", "text", "formControlName", "emergency_contact", "maxlength", "10", "placeholder", "Emergency number", 1, "form-control", "form-control-sm", 3, "keypress", "paste", "input"], ["controlName", "emergency_contact", "fieldName", "Emergency contact", 3, "formGroup"], [1, "col-xl-6", "col-md-8", "col-sm-12"], ["type", "text", "formControlName", "address", "maxlength", "100", "placeholder", "Full residential address", 1, "form-control", "form-control-sm", 3, "input"], ["controlName", "address", "fieldName", "Address", 3, "formGroup"], ["formControlName", "status", 1, "form-select", "form-select-sm"], ["value", "1", "selected", ""], ["controlName", "status", "fieldName", "Status", 3, "formGroup"], ["formControlName", "state", 1, "form-select", "form-select-sm", 3, "change"], ["controlName", "state", "fieldName", "State", 3, "formGroup"], ["formControlName", "district", 1, "form-select", "form-select-sm"], ["controlName", "district", "fieldName", "District", 3, "formGroup"], ["type", "text", "formControlName", "pincode", "maxlength", "6", "placeholder", "Pincode", 1, "form-control", "form-control-sm", 3, "keypress", "paste", "input"], ["controlName", "pincode", "fieldName", "Pincode", 3, "formGroup"], [1, "col-xl-4", "col-md-4", "col-sm-6"], ["type", "file", "formControlName", "profile_photo", 1, "form-control", "form-control-sm", 3, "change"], ["controlName", "profile_photo", "fieldName", "Profile photo", 3, "formGroup"], ["type", "file", "formControlName", "aadhar", 1, "form-control", "form-control-sm", 3, "change"], ["controlName", "aadhar", "fieldName", "Aadhar card", 3, "formGroup"], ["type", "file", "formControlName", "pan", 1, "form-control", "form-control-sm", 3, "change"], ["controlName", "pan", "fieldName", "Pan card", 3, "formGroup"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "bi", "bi-check2"], ["id", "imageModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content", "border-0", "overflow-hidden", "shadow-lg"], [1, "modal-header", "border-0", "bg-dark", "text-white", "py-2", "px-3"], [1, "fs-12", "fw-medium"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-white"], [1, "modal-body", "p-0", "bg-dark", "d-flex", "align-items-center", "justify-content-center", 2, "min-height", "300px"], ["alt", "Document Preview", 1, "img-fluid", "rounded", 2, "max-height", "80vh", 3, "src"], ["id", "tenantQrModal", "tabindex", "-1", "aria-labelledby", "tenantQrModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-md"], [1, "modal-content", "border-0", "shadow-lg", "rounded-4", "overflow-hidden"], [1, "modal-header", "border-0", "bg-primary", "text-white", "py-3", "px-4"], [1, "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-qr-code-scan", "fs-5"], ["id", "tenantQrModalLabel", 1, "modal-title", "fs-14", "fw-bold", "mb-0", "text-white"], [1, "fs-10", "text-white-50"], [1, "modal-body", "p-4", "text-center"], [1, "py-5", "text-center"], [1, "py-4", "text-danger"], ["type", "button", "title", "Delete Selected Tenants", 1, "btn", "btn-sm", "btn-danger", "d-flex", "align-items-center", "gap-1", "shadow-sm", 3, "click"], [1, "bi", "bi-trash-fill"], [1, "text-center"], ["type", "checkbox", 1, "form-check-input", 3, "change", "checked"], [1, "text-muted", "fw-semibold"], ["alt", "Profile", "width", "34px", "height", "34px", "title", "Click to view full photo", "data-bs-toggle", "modal", "data-bs-target", "#imageModal", 1, "rounded-circle", "object-fit-cover", "cursor-pointer", "border", 3, "click", "error", "src"], [1, "fw-semibold", "text-heading"], [1, "fs-10", "text-muted"], [1, "badge", "bg-primary"], [1, "badge", "bg-info"], [1, "text-capitalize", "d-inline-flex", "align-items-center", "gap-1"], [1, "fw-bold", "fs-12", "text-heading"], [1, "badge", 3, "ngClass"], [1, "text-muted"], [1, "d-flex", "align-items-center", "gap-1"], ["data-bs-toggle", "modal", "data-bs-target", "#imageModal", "title", "View Aadhar", 1, "btn", "btn-sm", "btn-outline-secondary", "py-0", "px-1", "fs-10", 3, "click", "disabled"], [1, "bi", "bi-file-earmark-person"], ["data-bs-toggle", "modal", "data-bs-target", "#imageModal", "title", "View PAN", 1, "btn", "btn-sm", "btn-outline-secondary", "py-0", "px-1", "fs-10", 3, "click", "disabled"], [1, "bi", "bi-file-earmark-text"], [1, "action-btn-group", "justify-content-center"], ["data-bs-toggle", "modal", "data-bs-target", "#tenantQrModal", "title", "View / Print Tenant GPay & UPI QR Scanner", 1, "btn-action-icon", "text-primary", "border-primary", 3, "click"], [1, "bi", "bi-qr-code-scan"], ["title", "Send WhatsApp Rent Reminder", 1, "btn-action-icon", "text-success", "border-success"], ["title", "Send WhatsApp Receipt Confirmation", 1, "btn-action-icon", "text-success", "border-success"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", "title", "Edit Tenant", 1, "btn-action-icon", "primary", 3, "click"], [1, "bi", "bi-pencil"], ["title", "Delete Tenant", 1, "btn-action-icon", "danger", 3, "click"], [1, "bi", "bi-trash"], [1, "bi", "bi-gender-male", "text-primary"], [1, "bi", "bi-gender-female", "text-danger"], [1, "bi", "bi-gender-ambiguous", "text-secondary"], ["title", "Send WhatsApp Rent Reminder", 1, "btn-action-icon", "text-success", "border-success", 3, "click"], [1, "bi", "bi-whatsapp"], ["title", "Send WhatsApp Receipt Confirmation", 1, "btn-action-icon", "text-success", "border-success", 3, "click"], ["colspan", "16", 1, "text-center", "py-4", "text-muted"], [1, "bi", "bi-inbox", "fs-3", "d-block", "mb-1", "opacity-50"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "fs-12", "text-muted", "mt-2", "mb-0"], ["id", "printableTenantQrCard", 1, "tenant-qr-card", "p-4", "rounded-4", "border", "bg-light", "text-center", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "border-bottom", "pb-2", "mb-3"], [1, "text-start"], [1, "fw-bold", "text-primary", "mb-0", "fs-14"], [1, "badge", "bg-primary-subtle", "text-primary", "border", "border-primary-subtle", "fs-11", "px-2", "py-1"], [1, "mb-2"], [1, "fw-bold", "text-dark", "mb-0", "fs-16"], [1, "fs-11", "text-muted"], [1, "rent-amount-pill", "py-2", "px-3", "rounded-3", "my-3", "bg-white", "border", "shadow-sm", "d-inline-block"], [1, "fs-10", "text-uppercase", "letter-spacing-1", "text-muted", "fw-bold", "d-block"], [1, "fs-22", "fw-bold", "text-success"], [1, "mt-1"], [1, "qr-image-wrapper", "p-2", "bg-white", "rounded-3", "border", "shadow-sm", "d-inline-block", "mx-auto", "mb-3"], ["alt", "UPI QR Code", 1, "img-fluid", 2, "width", "240px", "height", "240px", "display", "block", 3, "src"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-wrap", "mb-2"], [1, "badge", "bg-secondary-subtle", "text-dark", "border", "fs-10", "px-2", "py-1"], [1, "fs-11", "text-muted", "border-top", "pt-2", "mt-2"], [1, "text-dark"], [1, "fs-11", "text-primary", "fw-bold"], [1, "fs-10", "text-muted", "mt-1"], [1, "d-flex", "flex-wrap", "gap-2", "justify-content-center"], ["type", "button", "title", "Print as Room Sticker", 1, "btn", "btn-sm", "btn-outline-primary", "d-flex", "align-items-center", "gap-1", 3, "click"], [1, "bi", "bi-printer-fill"], ["type", "button", "title", "Download QR PNG", 1, "btn", "btn-sm", "btn-outline-dark", "d-flex", "align-items-center", "gap-1", 3, "click"], [1, "bi", "bi-download"], ["type", "button", "title", "Send QR via WhatsApp", 1, "btn", "btn-sm", "btn-outline-success", "d-flex", "align-items-center", "gap-1", 3, "click"], ["type", "button", "title", "Mark Rent Paid", 1, "btn", "btn-sm", "btn-success", "d-flex", "align-items-center", "gap-1"], ["type", "button", "title", "Mark Rent Paid", 1, "btn", "btn-sm", "btn-success", "d-flex", "align-items-center", "gap-1", 3, "click"], [1, "bi", "bi-check-circle-fill"], [1, "bi", "bi-exclamation-triangle", "fs-3", "d-block", "mb-2"], [1, "fs-12", "mb-0"]], template: function TenantComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "h2", 8);
      \u0275\u0275element(4, "i", 9);
      \u0275\u0275text(5, " Tenant Directory ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 10);
      \u0275\u0275text(7, "Comprehensive directory of active and previous tenants, documents, and room allocations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 11);
      \u0275\u0275template(9, TenantComponent_Conditional_9_Template, 4, 1, "button", 12);
      \u0275\u0275elementStart(10, "button", 13);
      \u0275\u0275listener("click", function TenantComponent_Template_button_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterOption = !ctx.filterOption);
      });
      \u0275\u0275element(11, "i", 14);
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, TenantComponent_Conditional_14_Template, 1, 0, "span", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 16);
      \u0275\u0275listener("click", function TenantComponent_Template_button_click_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openADDForm());
      });
      \u0275\u0275element(16, "i", 17);
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18, "Add Tenant");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 18)(20, "div", 19)(21, "span", 20);
      \u0275\u0275element(22, "i", 21);
      \u0275\u0275text(23, " Filter Tenants ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 22);
      \u0275\u0275listener("click", function TenantComponent_Template_button_click_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterOption = false);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "form", 23);
      \u0275\u0275listener("submit", function TenantComponent_Template_form_submit_25_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.getTable());
      });
      \u0275\u0275elementStart(26, "div", 24)(27, "label", 25);
      \u0275\u0275text(28, "Property Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "select", 26)(30, "option", 27);
      \u0275\u0275text(31, "-- All Properties --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(32, TenantComponent_For_33_Template, 2, 2, "option", 28, \u0275\u0275repeaterTrackByIndex, false, TenantComponent_ForEmpty_34_Template, 2, 0, "option", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 24)(36, "label", 25);
      \u0275\u0275text(37, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "select", 29, 0);
      \u0275\u0275listener("change", function TenantComponent_Template_select_change_38_listener() {
        \u0275\u0275restoreView(_r1);
        const filter_state_r5 = \u0275\u0275reference(39);
        return \u0275\u0275resetView(ctx.getDistrict(filter_state_r5.value));
      });
      \u0275\u0275elementStart(40, "option", 27);
      \u0275\u0275text(41, "-- Select State --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(42, TenantComponent_For_43_Template, 2, 2, "option", 28, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 24)(45, "label", 25);
      \u0275\u0275text(46, "District");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "select", 30)(48, "option", 27);
      \u0275\u0275text(49, "-- Select District --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(50, TenantComponent_For_51_Template, 2, 2, "option", 28, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 24)(53, "label", 25);
      \u0275\u0275text(54, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "select", 31)(56, "option", 27);
      \u0275\u0275text(57, "All Statuses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "option", 32);
      \u0275\u0275text(59, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "option", 33);
      \u0275\u0275text(61, "Inactive");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "div", 24)(63, "label", 25);
      \u0275\u0275text(64, "Tenant Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "input", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 24)(67, "label", 25);
      \u0275\u0275text(68, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(69, "input", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 24)(71, "label", 25);
      \u0275\u0275text(72, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(73, "input", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 24)(75, "label", 25);
      \u0275\u0275text(76, "Date of Birth");
      \u0275\u0275elementEnd();
      \u0275\u0275element(77, "input", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 24)(79, "label", 25);
      \u0275\u0275text(80, "Room Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(81, "input", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 24)(83, "label", 25);
      \u0275\u0275text(84, "Occupation");
      \u0275\u0275elementEnd();
      \u0275\u0275element(85, "input", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 24)(87, "label", 25);
      \u0275\u0275text(88, "Emergency Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275element(89, "input", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 24)(91, "label", 25);
      \u0275\u0275text(92, "Parent Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275element(93, "input", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 42)(95, "button", 43);
      \u0275\u0275listener("click", function TenantComponent_Template_button_click_95_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilterForm());
      });
      \u0275\u0275element(96, "i", 44);
      \u0275\u0275text(97, " Reset ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "button", 45);
      \u0275\u0275listener("click", function TenantComponent_Template_button_click_98_listener() {
        let tmp_6_0;
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView((tmp_6_0 = ctx.filterForm.get("page")) == null ? null : tmp_6_0.setValue(1));
      });
      \u0275\u0275element(99, "i", 46);
      \u0275\u0275text(100, " Apply Filter ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(101, "app-pagination", 47);
      \u0275\u0275elementStart(102, "div", 48)(103, "div", 49)(104, "table", 50)(105, "thead")(106, "tr")(107, "th", 51)(108, "input", 52);
      \u0275\u0275listener("change", function TenantComponent_Template_input_change_108_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleSelectAll($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "th", 53);
      \u0275\u0275text(110, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "th");
      \u0275\u0275text(112, "Photo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "th", 54);
      \u0275\u0275listener("click", function TenantComponent_Template_th_click_113_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sortingTable("name"));
      });
      \u0275\u0275text(114, " Tenant Name ");
      \u0275\u0275element(115, "i", 55)(116, "i", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "th");
      \u0275\u0275text(118, "PG Property");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "th");
      \u0275\u0275text(120, "Room");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "th");
      \u0275\u0275text(122, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "th");
      \u0275\u0275text(124, "Gender");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "th", 54);
      \u0275\u0275listener("click", function TenantComponent_Template_th_click_125_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sortingTable("rent_status"));
      });
      \u0275\u0275text(126, " Rent Status ");
      \u0275\u0275element(127, "i", 55)(128, "i", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "th");
      \u0275\u0275text(130, "Occupation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "th", 54);
      \u0275\u0275listener("click", function TenantComponent_Template_th_click_131_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sortingTable("dob"));
      });
      \u0275\u0275text(132, " DOB ");
      \u0275\u0275element(133, "i", 55)(134, "i", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "th");
      \u0275\u0275text(136, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "th");
      \u0275\u0275text(138, "District");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "th");
      \u0275\u0275text(140, "Documents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "th", 54);
      \u0275\u0275listener("click", function TenantComponent_Template_th_click_141_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sortingTable("status"));
      });
      \u0275\u0275text(142, " Status ");
      \u0275\u0275element(143, "i", 55)(144, "i", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "th", 57);
      \u0275\u0275text(146, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(147, "tbody");
      \u0275\u0275repeaterCreate(148, TenantComponent_For_149_Template, 61, 29, "tr", null, \u0275\u0275repeaterTrackByIndex, false, TenantComponent_ForEmpty_150_Template, 4, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(151, "div", 58)(152, "div", 59)(153, "div", 60)(154, "div", 61)(155, "h5", 62);
      \u0275\u0275element(156, "i", 63);
      \u0275\u0275text(157);
      \u0275\u0275elementEnd();
      \u0275\u0275element(158, "button", 64, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "div", 65)(161, "form", 66)(162, "div", 67)(163, "div", 68)(164, "label", 25);
      \u0275\u0275text(165, "Property Name ");
      \u0275\u0275elementStart(166, "span", 69);
      \u0275\u0275text(167, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "select", 70, 2);
      \u0275\u0275listener("change", function TenantComponent_Template_select_change_168_listener() {
        \u0275\u0275restoreView(_r1);
        const pgProperty_r13 = \u0275\u0275reference(169);
        return \u0275\u0275resetView(ctx.getAvailableRooms(pgProperty_r13.value));
      });
      \u0275\u0275elementStart(170, "option", 27);
      \u0275\u0275text(171, "-- Select PG --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(172, TenantComponent_For_173_Template, 2, 2, "option", 28, \u0275\u0275repeaterTrackByIndex, false, TenantComponent_ForEmpty_174_Template, 2, 0, "option", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275element(175, "app-form-validation-message", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "div", 68)(177, "label", 25);
      \u0275\u0275text(178, "Room Allocation ");
      \u0275\u0275elementStart(179, "span", 69);
      \u0275\u0275text(180, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(181, "select", 72)(182, "option", 27);
      \u0275\u0275text(183, "-- Select Room --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(184, TenantComponent_For_185_Template, 2, 3, "option", 28, \u0275\u0275repeaterTrackByIndex, false, TenantComponent_ForEmpty_186_Template, 2, 0, "option", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275element(187, "app-form-validation-message", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "div", 68)(189, "label", 25);
      \u0275\u0275text(190, "Tenant Full Name ");
      \u0275\u0275elementStart(191, "span", 69);
      \u0275\u0275text(192, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(193, "input", 74);
      \u0275\u0275listener("input", function TenantComponent_Template_input_input_193_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 30));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(194, "app-form-validation-message", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "div", 68)(196, "label", 25);
      \u0275\u0275text(197, "Phone Number ");
      \u0275\u0275elementStart(198, "span", 69);
      \u0275\u0275text(199, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(200, "input", 76);
      \u0275\u0275listener("keypress", function TenantComponent_Template_input_keypress_200_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.numberOnly($event));
      })("paste", function TenantComponent_Template_input_paste_200_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.handleNumberPaste($event, 10));
      })("input", function TenantComponent_Template_input_input_200_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 10));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(201, "app-form-validation-message", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "div", 68)(203, "label", 25);
      \u0275\u0275text(204, "Email Address ");
      \u0275\u0275elementStart(205, "span", 69);
      \u0275\u0275text(206, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(207, "input", 78);
      \u0275\u0275listener("input", function TenantComponent_Template_input_input_207_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 50));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(208, "app-form-validation-message", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "div", 68)(210, "label", 25);
      \u0275\u0275text(211, "Password ");
      \u0275\u0275template(212, TenantComponent_Conditional_212_Template, 2, 0, "span", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "input", 80);
      \u0275\u0275listener("input", function TenantComponent_Template_input_input_213_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 15));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(214, "app-form-validation-message", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "div", 68)(216, "label", 25);
      \u0275\u0275text(217, "Gender ");
      \u0275\u0275elementStart(218, "span", 69);
      \u0275\u0275text(219, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "select", 82)(221, "option", 27);
      \u0275\u0275text(222, "-- Select Gender --");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "option", 83);
      \u0275\u0275text(224, "Male");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "option", 84);
      \u0275\u0275text(226, "Female");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "option", 85);
      \u0275\u0275text(228, "Other");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(229, "app-form-validation-message", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "div", 68)(231, "label", 25);
      \u0275\u0275text(232, "Date of Birth ");
      \u0275\u0275elementStart(233, "span", 69);
      \u0275\u0275text(234, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(235, "input", 37)(236, "app-form-validation-message", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "div", 68)(238, "label", 25);
      \u0275\u0275text(239, "Check-in Date ");
      \u0275\u0275elementStart(240, "span", 69);
      \u0275\u0275text(241, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(242, "input", 88)(243, "app-form-validation-message", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "div", 68)(245, "label", 25);
      \u0275\u0275text(246, "Rent Status ");
      \u0275\u0275elementStart(247, "span", 69);
      \u0275\u0275text(248, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(249, "select", 90)(250, "option", 27);
      \u0275\u0275text(251, "-- Select Status --");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "option", 91);
      \u0275\u0275text(253, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "option", 92);
      \u0275\u0275text(255, "Pending");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(256, "app-form-validation-message", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "div", 68)(258, "label", 25);
      \u0275\u0275text(259, "Occupation ");
      \u0275\u0275elementStart(260, "span", 69);
      \u0275\u0275text(261, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(262, "input", 94);
      \u0275\u0275listener("input", function TenantComponent_Template_input_input_262_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 70));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(263, "app-form-validation-message", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "div", 68)(265, "label", 25);
      \u0275\u0275text(266, "Parent / Guardian Contact ");
      \u0275\u0275elementStart(267, "span", 69);
      \u0275\u0275text(268, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(269, "input", 96);
      \u0275\u0275listener("keypress", function TenantComponent_Template_input_keypress_269_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.numberOnly($event));
      })("paste", function TenantComponent_Template_input_paste_269_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.handleNumberPaste($event, 10));
      })("input", function TenantComponent_Template_input_input_269_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 10));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(270, "app-form-validation-message", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "div", 68)(272, "label", 25);
      \u0275\u0275text(273, "Emergency Contact ");
      \u0275\u0275elementStart(274, "span", 69);
      \u0275\u0275text(275, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "input", 98);
      \u0275\u0275listener("keypress", function TenantComponent_Template_input_keypress_276_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.numberOnly($event));
      })("paste", function TenantComponent_Template_input_paste_276_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.handleNumberPaste($event, 10));
      })("input", function TenantComponent_Template_input_input_276_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 10));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(277, "app-form-validation-message", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "div", 100)(279, "label", 25);
      \u0275\u0275text(280, "Permanent Address ");
      \u0275\u0275elementStart(281, "span", 69);
      \u0275\u0275text(282, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(283, "input", 101);
      \u0275\u0275listener("input", function TenantComponent_Template_input_input_283_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 100));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(284, "app-form-validation-message", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "div", 68)(286, "label", 25);
      \u0275\u0275text(287, "Status ");
      \u0275\u0275elementStart(288, "span", 69);
      \u0275\u0275text(289, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(290, "select", 103)(291, "option", 104);
      \u0275\u0275text(292, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "option", 33);
      \u0275\u0275text(294, "Inactive");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(295, "app-form-validation-message", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "div", 68)(297, "label", 25);
      \u0275\u0275text(298, "State ");
      \u0275\u0275elementStart(299, "span", 69);
      \u0275\u0275text(300, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(301, "select", 106, 3);
      \u0275\u0275listener("change", function TenantComponent_Template_select_change_301_listener() {
        \u0275\u0275restoreView(_r1);
        const state_id_r16 = \u0275\u0275reference(302);
        return \u0275\u0275resetView(ctx.getDistrict(state_id_r16.value));
      });
      \u0275\u0275elementStart(303, "option", 27);
      \u0275\u0275text(304, "-- Select State --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(305, TenantComponent_For_306_Template, 2, 2, "option", 28, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275element(307, "app-form-validation-message", 107);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "div", 68)(309, "label", 25);
      \u0275\u0275text(310, "District ");
      \u0275\u0275elementStart(311, "span", 69);
      \u0275\u0275text(312, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(313, "select", 108)(314, "option", 27);
      \u0275\u0275text(315, "-- Select District --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(316, TenantComponent_For_317_Template, 2, 2, "option", 28, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275element(318, "app-form-validation-message", 109);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "div", 68)(320, "label", 25);
      \u0275\u0275text(321, "Pincode ");
      \u0275\u0275elementStart(322, "span", 69);
      \u0275\u0275text(323, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(324, "input", 110);
      \u0275\u0275listener("keypress", function TenantComponent_Template_input_keypress_324_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.numberOnly($event));
      })("paste", function TenantComponent_Template_input_paste_324_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.handleNumberPaste($event, 6));
      })("input", function TenantComponent_Template_input_input_324_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.GF.enforceMaxLength($event, 6));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(325, "app-form-validation-message", 111);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "div", 112)(327, "label", 25);
      \u0275\u0275text(328, "Profile Photo ");
      \u0275\u0275elementStart(329, "span", 69);
      \u0275\u0275text(330, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(331, "input", 113);
      \u0275\u0275listener("change", function TenantComponent_Template_input_change_331_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.fileUpload($event, "profileFile"));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(332, "app-form-validation-message", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "div", 112)(334, "label", 25);
      \u0275\u0275text(335, "Aadhar Card Document ");
      \u0275\u0275elementStart(336, "span", 69);
      \u0275\u0275text(337, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(338, "input", 115);
      \u0275\u0275listener("change", function TenantComponent_Template_input_change_338_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.fileUpload($event, "aadharFile"));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(339, "app-form-validation-message", 116);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "div", 112)(341, "label", 25);
      \u0275\u0275text(342, "PAN Card Document ");
      \u0275\u0275elementStart(343, "span", 69);
      \u0275\u0275text(344, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(345, "input", 117);
      \u0275\u0275listener("change", function TenantComponent_Template_input_change_345_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.fileUpload($event, "panCardFile"));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(346, "app-form-validation-message", 118);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(347, "div", 119)(348, "button", 120);
      \u0275\u0275listener("click", function TenantComponent_Template_button_click_348_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.editMode ? ctx.EDIT(ctx.EDITId) : ctx.openADDForm());
      });
      \u0275\u0275element(349, "i", 44);
      \u0275\u0275text(350, " Reset ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "button", 121);
      \u0275\u0275listener("click", function TenantComponent_Template_button_click_351_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.editMode ? ctx.UPDATE() : ctx.ADD());
      });
      \u0275\u0275element(352, "i", 122);
      \u0275\u0275text(353);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(354, "div", 123)(355, "div", 124)(356, "div", 125)(357, "div", 126)(358, "span", 127);
      \u0275\u0275text(359, "Document Preview");
      \u0275\u0275elementEnd();
      \u0275\u0275element(360, "button", 128);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(361, "div", 129);
      \u0275\u0275element(362, "img", 130);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(363, "div", 131)(364, "div", 132)(365, "div", 133)(366, "div", 134)(367, "div", 135);
      \u0275\u0275element(368, "i", 136);
      \u0275\u0275elementStart(369, "div")(370, "h6", 137);
      \u0275\u0275text(371, "Tenant UPI QR Scanner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(372, "span", 138);
      \u0275\u0275text(373, "Instant GPay / PhonePe / Paytm Payment");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(374, "button", 128, 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(376, "div", 139);
      \u0275\u0275template(377, TenantComponent_Conditional_377_Template, 4, 0, "div", 140)(378, TenantComponent_Conditional_378_Template, 55, 12)(379, TenantComponent_Conditional_379_Template, 4, 0, "div", 141);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.selectedTenantIds.size > 0 ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.filterOption);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.filterOption ? 14 : -1);
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
      \u0275\u0275advance(7);
      \u0275\u0275property("checked", ctx.selectAll);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(52, _c2, ctx.sortColumn === "name" && ctx.sortOrder === "ASC"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(54, _c2, ctx.sortColumn === "name" && ctx.sortOrder === "DESC"));
      \u0275\u0275advance(11);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(56, _c2, ctx.sortColumn === "rent_status" && ctx.sortOrder === "ASC"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(58, _c2, ctx.sortColumn === "rent_status" && ctx.sortOrder === "DESC"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(60, _c2, ctx.sortColumn === "dob" && ctx.sortOrder === "ASC"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(62, _c2, ctx.sortColumn === "dob" && ctx.sortOrder === "DESC"));
      \u0275\u0275advance(9);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(64, _c2, ctx.sortColumn === "status" && ctx.sortOrder === "ASC"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(66, _c2, ctx.sortColumn === "status" && ctx.sortOrder === "DESC"));
      \u0275\u0275advance(4);
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
      \u0275\u0275conditional(!ctx.editMode ? 212 : -1);
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
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.loadingQr ? 377 : ctx.qrData ? 378 : 379);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, CommonModule, NgClass, DatePipe, PaginationComponent, FormValidationMessageComponent, StateNamePipe], styles: ["\n\n@media print {\n  body[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    visibility: hidden !important;\n  }\n  #printableTenantQrCard[_ngcontent-%COMP%], \n   #printableTenantQrCard[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    visibility: visible !important;\n  }\n  #printableTenantQrCard[_ngcontent-%COMP%] {\n    position: fixed !important;\n    left: 50% !important;\n    top: 15% !important;\n    transform: translate(-50%, -15%) !important;\n    width: 360px !important;\n    border: 2px solid #0f172a !important;\n    box-shadow: none !important;\n    background: #ffffff !important;\n    padding: 24px !important;\n    margin: 0 auto !important;\n    border-radius: 16px !important;\n  }\n}\n.tenant-qr-card[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n}\n.rent-amount-pill[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.qr-image-wrapper[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: transform 0.2s ease;\n}\n.qr-image-wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n/*# sourceMappingURL=tenant.component.css.map */"] });
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
            @if (selectedTenantIds.size > 0) {
                <button class="btn btn-sm btn-danger d-flex align-items-center gap-1 shadow-sm" (click)="deleteSelected()" type="button" title="Delete Selected Tenants">
                    <i class="bi bi-trash-fill"></i>
                    <span>Delete Selected ({{selectedTenantIds.size}})</span>
                </button>
            }
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
                        <th style="width: 38px;" class="text-center">
                            <input type="checkbox" class="form-check-input" [checked]="selectAll" (change)="toggleSelectAll($event)" title="Select all on this page">
                        </th>
                        <th style="width: 50px;">#</th>
                        <th>Photo</th>
                        <th class="cursor-pointer user-select-none" (click)="sortingTable('name')">
                            Tenant Name
                            <i class="bi bi-arrow-up-short" [ngClass]="{'d-none': sortColumn === 'name' && sortOrder === 'ASC'}"></i>
                            <i class="bi bi-arrow-down-short" [ngClass]="{'d-none': sortColumn === 'name' && sortOrder === 'DESC'}"></i>
                        </th>
                        <th>PG Property</th>
                        <th>Room</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th class="cursor-pointer user-select-none" (click)="sortingTable('rent_status')">
                            Rent Status
                            <i class="bi bi-arrow-up-short" [ngClass]="{'d-none': sortColumn === 'rent_status' && sortOrder === 'ASC'}"></i>
                            <i class="bi bi-arrow-down-short" [ngClass]="{'d-none': sortColumn === 'rent_status' && sortOrder === 'DESC'}"></i>
                        </th>
                        <th>Occupation</th>
                        <th class="cursor-pointer user-select-none" (click)="sortingTable('dob')">
                            DOB
                            <i class="bi bi-arrow-up-short" [ngClass]="{'d-none': sortColumn === 'dob' && sortOrder === 'ASC'}"></i>
                            <i class="bi bi-arrow-down-short" [ngClass]="{'d-none': sortColumn === 'dob' && sortOrder === 'DESC'}"></i>
                        </th>
                        <th>State</th>
                        <th>District</th>
                        <th>Documents</th>
                        <th class="cursor-pointer user-select-none" (click)="sortingTable('status')">
                            Status
                            <i class="bi bi-arrow-up-short" [ngClass]="{'d-none': sortColumn === 'status' && sortOrder === 'ASC'}"></i>
                            <i class="bi bi-arrow-down-short" [ngClass]="{'d-none': sortColumn === 'status' && sortOrder === 'DESC'}"></i>
                        </th>
                        <th class="text-center" style="width: 140px;">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    @for(items of table_data; track $index; let i = $index){
                    <tr>
                        <td class="text-center">
                            <input type="checkbox" class="form-check-input" [checked]="isTenantSelected(items.id)" (change)="toggleSelectTenant(items.id)">
                        </td>
                        <td class="text-muted fw-semibold">{{ (page - 1) * limit + i + 1 }}</td>
                        <td>
                            <img (click)="openBigImage(server_url + 'static/' + items.profile_photo)" 
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
                            <div class="fw-bold fs-12 text-heading">\u20B9{{ items.monthly_rent ? (+items.monthly_rent).toLocaleString('en-IN') : '8,000' }}</div>
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
                                <button class="btn btn-sm btn-outline-secondary py-0 px-1 fs-10" 
                                        [disabled]="!items.aadhar"
                                        (click)="items.aadhar && openBigImage(server_url + 'static/' + items.aadhar)"
                                        data-bs-toggle="modal" data-bs-target="#imageModal" title="View Aadhar">
                                    <i class="bi bi-file-earmark-person"></i> Aadhar
                                </button>
                                <button class="btn btn-sm btn-outline-secondary py-0 px-1 fs-10" 
                                        [disabled]="!items.pan"
                                        (click)="items.pan && openBigImage(server_url + 'static/' + items.pan)"
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
                                <button class="btn-action-icon text-primary border-primary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#tenantQrModal"
                                        (click)="openTenantQrModal(items)"
                                        title="View / Print Tenant GPay & UPI QR Scanner">
                                    <i class="bi bi-qr-code-scan"></i>
                                </button>
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
                        <td colspan="16" class="text-center py-4 text-muted">
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
                                    <option [value]="items.id">{{items.name}}</option>
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
                                    <option [value]="items.id">{{items.room_number}} ({{items.type}} Sharing)</option>
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
                    <button type="button" (click)="editMode ? EDIT(EDITId) : openADDForm()" class="btn btn-sm btn-outline-secondary">
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

    <!-- Dynamic Tenant UPI QR Modal -->
    <div class="modal fade" id="tenantQrModal" tabindex="-1" aria-labelledby="tenantQrModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
                <div class="modal-header border-0 bg-primary text-white py-3 px-4">
                    <div class="d-flex align-items-center gap-2">
                        <i class="bi bi-qr-code-scan fs-5"></i>
                        <div>
                            <h6 class="modal-title fs-14 fw-bold mb-0 text-white" id="tenantQrModalLabel">Tenant UPI QR Scanner</h6>
                            <span class="fs-10 text-white-50">Instant GPay / PhonePe / Paytm Payment</span>
                        </div>
                    </div>
                    <button type="button" #qrModalClose class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body p-4 text-center">
                    @if (loadingQr) {
                        <div class="py-5 text-center">
                            <div class="spinner-border text-primary" role="status"></div>
                            <p class="fs-12 text-muted mt-2 mb-0">Generating tenant UPI QR code...</p>
                        </div>
                    } @else if (qrData) {
                        <!-- Printable Card Container -->
                        <div id="printableTenantQrCard" class="tenant-qr-card p-4 rounded-4 border bg-light text-center mb-3">
                            <div class="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                                <div class="text-start">
                                    <h6 class="fw-bold text-primary mb-0 fs-14">{{ qrData.tenant?.pg_name || 'PG Residency' }}</h6>
                                    <span class="fs-10 text-muted">{{ qrData.tenant?.pg_location || 'Room Accommodations' }}</span>
                                </div>
                                <span class="badge bg-primary-subtle text-primary border border-primary-subtle fs-11 px-2 py-1">
                                    Room #{{ qrData.tenant?.room_number || '-' }}
                                </span>
                            </div>

                            <!-- Tenant Meta -->
                            <div class="mb-2">
                                <h5 class="fw-bold text-dark mb-0 fs-16">{{ qrData.tenant?.name }}</h5>
                                <span class="fs-11 text-muted">{{ qrData.tenant?.phone }}</span>
                            </div>

                            <!-- Rent Amount Display -->
                            <div class="rent-amount-pill py-2 px-3 rounded-3 my-3 bg-white border shadow-sm d-inline-block">
                                <span class="fs-10 text-uppercase letter-spacing-1 text-muted fw-bold d-block">Monthly Room Rent</span>
                                <span class="fs-22 fw-bold text-success">\u20B9{{ qrData.formatted_amount || '8,000' }}</span>
                                <div class="mt-1">
                                    <span class="badge" [ngClass]="qrData.tenant?.rent_status === 'paid' ? 'bg-success' : 'bg-danger'">
                                        {{ qrData.tenant?.rent_status === 'paid' ? 'STATUS: PAID' : 'STATUS: PENDING' }}
                                    </span>
                                </div>
                            </div>

                            <!-- QR Code Image -->
                            <div class="qr-image-wrapper p-2 bg-white rounded-3 border shadow-sm d-inline-block mx-auto mb-3">
                                <img [src]="qrData.qr_code_image" alt="UPI QR Code" class="img-fluid" style="width: 240px; height: 240px; display: block;">
                            </div>

                            <!-- Supported UPI Apps Bar -->
                            <div class="d-flex align-items-center justify-content-center gap-2 flex-wrap mb-2">
                                <span class="badge bg-secondary-subtle text-dark border fs-10 px-2 py-1">Google Pay</span>
                                <span class="badge bg-secondary-subtle text-dark border fs-10 px-2 py-1">PhonePe</span>
                                <span class="badge bg-secondary-subtle text-dark border fs-10 px-2 py-1">Paytm</span>
                                <span class="badge bg-secondary-subtle text-dark border fs-10 px-2 py-1">BHIM</span>
                            </div>

                            <!-- Payee UPI Details -->
                            <div class="fs-11 text-muted border-top pt-2 mt-2">
                                <div><strong class="text-dark">Payee UPI ID:</strong> <code class="fs-11 text-primary fw-bold">{{ qrData.payee?.upi_id }}</code></div>
                                <div class="fs-10 text-muted mt-1">Scan using any UPI app to pay exact \u20B9{{ qrData.formatted_amount }}</div>
                            </div>
                        </div>

                        <!-- Actions Bar -->
                        <div class="d-flex flex-wrap gap-2 justify-content-center">
                            <button class="btn btn-sm btn-outline-primary d-flex align-items-center gap-1" (click)="printQrCard()" type="button" title="Print as Room Sticker">
                                <i class="bi bi-printer-fill"></i>
                                <span>Print Sticker</span>
                            </button>
                            <button class="btn btn-sm btn-outline-dark d-flex align-items-center gap-1" (click)="downloadQrImage()" type="button" title="Download QR PNG">
                                <i class="bi bi-download"></i>
                                <span>Download PNG</span>
                            </button>
                            <button class="btn btn-sm btn-outline-success d-flex align-items-center gap-1" (click)="sendWhatsAppQr(selectedQrTenant)" type="button" title="Send QR via WhatsApp">
                                <i class="bi bi-whatsapp"></i>
                                <span>Share on WhatsApp</span>
                            </button>
                            @if (qrData.tenant?.rent_status !== 'paid') {
                                <button class="btn btn-sm btn-success d-flex align-items-center gap-1" (click)="markRentPaid(selectedQrTenant)" type="button" title="Mark Rent Paid">
                                    <i class="bi bi-check-circle-fill"></i>
                                    <span>Mark Paid</span>
                                </button>
                            }
                        </div>
                    } @else {
                        <div class="py-4 text-danger">
                            <i class="bi bi-exclamation-triangle fs-3 d-block mb-2"></i>
                            <p class="fs-12 mb-0">Failed to load QR code. Please check PG owner UPI configuration in Settings.</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>

</div>`, styles: ["/* src/app/pages/tenant/tenant.component.css */\n@media print {\n  body * {\n    visibility: hidden !important;\n  }\n  #printableTenantQrCard,\n  #printableTenantQrCard * {\n    visibility: visible !important;\n  }\n  #printableTenantQrCard {\n    position: fixed !important;\n    left: 50% !important;\n    top: 15% !important;\n    transform: translate(-50%, -15%) !important;\n    width: 360px !important;\n    border: 2px solid #0f172a !important;\n    box-shadow: none !important;\n    background: #ffffff !important;\n    padding: 24px !important;\n    margin: 0 auto !important;\n    border-radius: 16px !important;\n  }\n}\n.tenant-qr-card {\n  transition: all 0.2s ease;\n}\n.rent-amount-pill {\n  min-width: 180px;\n}\n.qr-image-wrapper {\n  display: inline-block;\n  transition: transform 0.2s ease;\n}\n.qr-image-wrapper:hover {\n  transform: scale(1.02);\n}\n/*# sourceMappingURL=tenant.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: GlobalService }], { modelClose: [{
    type: ViewChild,
    args: ["modelClose"]
  }], qrModalClose: [{
    type: ViewChild,
    args: ["qrModalClose"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TenantComponent, { className: "TenantComponent", filePath: "src/app/pages/tenant/tenant.component.ts", lineNumber: 28 });
})();
export {
  TenantComponent
};
//# sourceMappingURL=chunk-OXVK5XPK.js.map
