import {
  ApiService,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-CPUT4VSH.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
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
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-CM5MDF2M.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-Y5RQAIA6.js";

// src/app/pages/plans/plans.component.ts
var _c0 = ["planModalClose"];
var _forTrack0 = ($index, $item) => $item.id;
function PlansComponent_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "div", 88);
    \u0275\u0275elementStart(2, "div", 89);
    \u0275\u0275text(3, "Loading subscription packages...");
    \u0275\u0275elementEnd()();
  }
}
function PlansComponent_Conditional_89_For_2_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 114);
    \u0275\u0275element(1, "i", 120);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feat_r3);
  }
}
function PlansComponent_Conditional_89_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91);
    \u0275\u0275element(2, "div", 92);
    \u0275\u0275elementStart(3, "div")(4, "div", 93)(5, "div")(6, "h4", 94);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 95);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 96);
    \u0275\u0275element(11, "i", 97);
    \u0275\u0275elementStart(12, "span", 98);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 99)(15, "div", 100)(16, "span", 101);
    \u0275\u0275text(17, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 102);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 6);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 103);
    \u0275\u0275text(24, "Billed to PG Owner per property group");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 104)(26, "div", 105)(27, "span", 106);
    \u0275\u0275element(28, "i", 107);
    \u0275\u0275text(29, " Max Properties: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "strong", 108);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 105)(33, "span", 106);
    \u0275\u0275element(34, "i", 109);
    \u0275\u0275text(35, " Max Rooms: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "strong", 108);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 105)(39, "span", 106);
    \u0275\u0275element(40, "i", 110);
    \u0275\u0275text(41, " Max Residents: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "strong", 108);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 111)(45, "div", 112);
    \u0275\u0275text(46, "Features Included:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "ul", 113);
    \u0275\u0275repeaterCreate(48, PlansComponent_Conditional_89_For_2_For_49_Template, 4, 1, "li", 114, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 115)(51, "button", 116);
    \u0275\u0275listener("click", function PlansComponent_Conditional_89_For_2_Template_button_click_51_listener() {
      const plan_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.openEditModal(plan_r4));
    });
    \u0275\u0275element(52, "i", 117);
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "Edit Plan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "button", 118);
    \u0275\u0275listener("click", function PlansComponent_Conditional_89_For_2_Template_button_click_55_listener() {
      const plan_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.deletePlan(plan_r4));
    });
    \u0275\u0275element(56, "i", 119);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const plan_r4 = ctx.$implicit;
    const \u0275$index_166_r6 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-top", "4px solid " + ctx_r4.getPlanBorderColor(\u0275$index_166_r6));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r4.getPlanGradient(\u0275$index_166_r6));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(plan_r4.plan_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", plan_r4.status == 1 ? "bg-success-subtle text-success" : "bg-secondary-subtle text-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r4.status == 1 ? "Active" : "Archived", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(plan_r4.subscriber_count || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 13, plan_r4.price, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/ ", plan_r4.billing_cycle || "month", "");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(plan_r4.total_property);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(plan_r4.total_rooms);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(plan_r4.total_tenant);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r4.getFeatureList(plan_r4.features));
  }
}
function PlansComponent_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275repeaterCreate(1, PlansComponent_Conditional_89_For_2_Template, 57, 16, "div", 90, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.plans);
  }
}
function PlansComponent_Conditional_90_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 128);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 129);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 81);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "div", 130);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 81);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "div", 10)(16, "span", 131);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 132);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 133);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "td", 134)(23, "span", 135);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td")(26, "span", 136);
    \u0275\u0275element(27, "i", 137);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "span", 138);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "td", 126)(33, "div", 139)(34, "button", 140);
    \u0275\u0275listener("click", function PlansComponent_Conditional_90_For_23_Template_button_click_34_listener() {
      const plan_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.openEditModal(plan_r8));
    });
    \u0275\u0275element(35, "i", 141);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 142);
    \u0275\u0275listener("click", function PlansComponent_Conditional_90_For_23_Template_button_click_36_listener() {
      const plan_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.deletePlan(plan_r8));
    });
    \u0275\u0275element(37, "i", 143);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const plan_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", plan_r8.id, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r8.plan_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Cycle: ", plan_r8.billing_cycle, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(11, 13, plan_r8.price, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("per ", plan_r8.billing_cycle, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", plan_r8.total_property, " Properties");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", plan_r8.total_rooms, " Rooms");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", plan_r8.total_tenant, " Tenants");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", plan_r8.features);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(plan_r8.features);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", plan_r8.subscriber_count || 0, " Clients ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", plan_r8.status == 1 ? "bg-success-subtle text-success" : "bg-secondary-subtle text-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r8.status == 1 ? "Active" : "Archived", " ");
  }
}
function PlansComponent_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 121)(2, "table", 122)(3, "thead", 123)(4, "tr", 124)(5, "th", 125);
    \u0275\u0275text(6, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Plan Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Pricing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Quotas (Props / Rooms / Residents)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Subscribers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 126);
    \u0275\u0275text(20, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody", 127);
    \u0275\u0275repeaterCreate(22, PlansComponent_Conditional_90_For_23_Template, 38, 16, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r4.plans);
  }
}
function PlansComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "i", 144);
    \u0275\u0275elementStart(2, "h5", 129);
    \u0275\u0275text(3, "No Subscription Plans Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 145);
    \u0275\u0275text(5, "Create your first pricing tier to begin licensing panels to PG Owners.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 146);
    \u0275\u0275listener("click", function PlansComponent_Conditional_91_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openCreateModal());
    });
    \u0275\u0275element(7, "i", 147);
    \u0275\u0275text(8, " Create Plan ");
    \u0275\u0275elementEnd()();
  }
}
function PlansComponent_Conditional_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1, "Plan name is required (3-50 chars).");
    \u0275\u0275elementEnd();
  }
}
function PlansComponent_Conditional_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1, "Valid price required.");
    \u0275\u0275elementEnd();
  }
}
function PlansComponent_Conditional_177_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1, "Features list is required.");
    \u0275\u0275elementEnd();
  }
}
var PlansComponent = class _PlansComponent {
  api;
  GF;
  plans = [];
  loading = false;
  viewMode = "cards";
  editMode = false;
  selectedPlanId = null;
  planModalClose;
  planForm = new FormGroup({
    plan_name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    billing_cycle: new FormControl("monthly", [Validators.required]),
    total_property: new FormControl(1, [Validators.required, Validators.min(1)]),
    total_rooms: new FormControl(50, [Validators.required, Validators.min(1)]),
    total_tenant: new FormControl(100, [Validators.required, Validators.min(1)]),
    features: new FormControl("", [Validators.required]),
    status: new FormControl(1, [Validators.required])
  });
  constructor(api, GF) {
    this.api = api;
    this.GF = GF;
  }
  ngOnInit() {
    this.loadPlans();
  }
  get totalSubscribers() {
    return this.plans.reduce((sum, p) => sum + (Number(p.subscriber_count) || 0), 0);
  }
  get totalEstimatedMrr() {
    return this.plans.reduce((sum, p) => sum + (Number(p.price) || 0) * (Number(p.subscriber_count) || 0), 0);
  }
  get activePlansCount() {
    return this.plans.filter((p) => Number(p.status) === 1).length;
  }
  loadPlans() {
    this.loading = true;
    this.api.postApi("plan-table", {}).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status) {
          this.plans = res.data || [];
        } else {
          this.GF.showToast(res.message || "Failed to load plans", "danger");
        }
      },
      error: (err) => {
        this.loading = false;
        this.GF.showToast(err.error?.message || "Error fetching subscription plans", "danger");
      }
    });
  }
  openCreateModal() {
    this.editMode = false;
    this.selectedPlanId = null;
    this.planForm.reset({
      plan_name: "",
      price: null,
      billing_cycle: "monthly",
      total_property: 1,
      total_rooms: 50,
      total_tenant: 100,
      features: "Single Property, Max 50 Rooms, Rent Tracking, Complaint Management",
      status: 1
    });
  }
  openEditModal(plan) {
    this.editMode = true;
    this.selectedPlanId = plan.id;
    this.planForm.patchValue({
      plan_name: plan.plan_name,
      price: Number(plan.price),
      billing_cycle: plan.billing_cycle || "monthly",
      total_property: Number(plan.total_property),
      total_rooms: Number(plan.total_rooms),
      total_tenant: Number(plan.total_tenant),
      features: plan.features || "",
      status: Number(plan.status)
    });
  }
  savePlan() {
    this.planForm.markAllAsTouched();
    if (this.planForm.invalid)
      return;
    const payload = __spreadProps(__spreadValues({}, this.planForm.value), {
      id: this.selectedPlanId
    });
    const endpoint = this.editMode ? "update-plan" : "add-plan";
    this.api.postApi(endpoint, payload).subscribe({
      next: (res) => {
        if (res.status) {
          this.GF.showToast(res.message, "success");
          this.planModalClose?.nativeElement?.click();
          this.loadPlans();
        } else {
          this.GF.showToast(res.message, "danger");
        }
      },
      error: (err) => {
        this.GF.showToast(err.error?.message || "Failed to save plan", "danger");
      }
    });
  }
  deletePlan(plan) {
    return __async(this, null, function* () {
      if ((Number(plan.subscriber_count) || 0) > 0) {
        this.GF.showToast(`Cannot delete "${plan.plan_name}". ${plan.subscriber_count} client(s) currently subscribed.`, "warning");
        return;
      }
      const confirmed = yield this.GF.confirm({
        title: "Delete Subscription Plan?",
        message: `Are you sure you want to delete "${plan.plan_name}"? This action cannot be undone.`,
        confirmText: "Delete Plan",
        type: "danger"
      });
      if (confirmed) {
        this.api.postApi("delete-plan", { id: plan.id }).subscribe({
          next: (res) => {
            if (res.status) {
              this.GF.showToast(res.message, "success");
              this.loadPlans();
            } else {
              this.GF.showToast(res.message, "danger");
            }
          },
          error: (err) => {
            this.GF.showToast(err.error?.message || "Failed to delete plan", "danger");
          }
        });
      }
    });
  }
  getFeatureList(features) {
    if (!features)
      return [];
    return features.split(",").map((f) => f.trim()).filter((f) => f.length > 0);
  }
  getPlanGradient(index) {
    const gradients = [
      "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.05) 100%)",
      "linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(126, 34, 206, 0.05) 100%)",
      "linear-gradient(135deg, rgba(234, 88, 12, 0.15) 0%, rgba(194, 65, 12, 0.05) 100%)",
      "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.05) 100%)"
    ];
    return gradients[index % gradients.length];
  }
  getPlanBorderColor(index) {
    const borders = ["#3b82f6", "#9333ea", "#ea580c", "#10b981"];
    return borders[index % borders.length];
  }
  static \u0275fac = function PlansComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlansComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(GlobalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlansComponent, selectors: [["app-plans"]], viewQuery: function PlansComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.planModalClose = _t.first);
    }
  }, decls: 193, vars: 25, consts: [["planModalClose", ""], [1, "plans-container", "container-fluid", "p-3", "p-md-4"], [1, "d-flex", "flex-column", "flex-md-row", "align-items-md-center", "justify-content-between", "gap-3", "mb-4"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "badge", "bg-danger-subtle", "text-danger", "text-uppercase", "fw-bold", "letter-spacing-1", "fs-10", "px-2", "py-1", "rounded-pill"], [1, "bi", "bi-shield-lock-fill", "me-1"], [1, "fs-11", "text-muted"], [1, "fs-22", "fw-bold", "text-heading", "mb-0", "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-box-seam-fill", "text-primary"], [1, "fs-12", "text-muted", "mb-0"], [1, "d-flex", "align-items-center", "gap-2"], ["role", "group", 1, "btn-group", "p-1", "bg-body-tertiary", "rounded-pill", "shadow-xs"], ["type", "button", 1, "btn", "btn-sm", "rounded-pill", "px-3", "py-1", "fs-11", "fw-semibold", "d-flex", "align-items-center", "gap-1.5", "transition-all", 3, "click", "ngClass"], [1, "bi", "bi-grid-fill"], [1, "bi", "bi-table"], ["title", "Refresh Plans", 1, "btn", "btn-outline-secondary", "btn-sm", "rounded-pill", "px-2.5", "py-1.5", "d-flex", "align-items-center", "gap-1", 3, "click", "disabled"], [1, "bi", "bi-arrow-clockwise"], ["data-bs-toggle", "modal", "data-bs-target", "#planModal", 1, "btn", "btn-primary", "btn-sm", "rounded-pill", "px-3", "py-1.5", "d-flex", "align-items-center", "gap-1.5", "shadow-sm", "fw-semibold", "fs-12", 3, "click"], [1, "bi", "bi-plus-lg", "fs-14"], [1, "row", "g-3", "mb-4"], [1, "col-6", "col-lg-3"], [1, "kpi-card", "p-3", "rounded-4", "shadow-xs", "border", "card-theme-color"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "fs-11", "fw-semibold", "text-muted", "text-uppercase", "letter-spacing-1"], [1, "kpi-icon-box", "bg-primary-subtle", "text-primary", "rounded-3", "d-flex", "align-items-center", "justify-content-center"], [1, "bi", "bi-layers-fill", "fs-14"], [1, "fs-22", "fw-bold", "text-heading"], [1, "fs-12", "text-muted", "fw-normal"], [1, "fs-11", "text-success", "d-flex", "align-items-center", "gap-1", "mt-1"], [1, "bi", "bi-check-circle-fill"], [1, "kpi-icon-box", "bg-success-subtle", "text-success", "rounded-3", "d-flex", "align-items-center", "justify-content-center"], [1, "bi", "bi-people-fill", "fs-14"], [1, "fs-11", "text-muted", "d-flex", "align-items-center", "gap-1", "mt-1"], [1, "bi", "bi-building"], [1, "kpi-icon-box", "bg-warning-subtle", "text-warning", "rounded-3", "d-flex", "align-items-center", "justify-content-center"], [1, "bi", "bi-currency-rupee", "fs-14"], [1, "fs-22", "fw-bold", "text-success"], [1, "bi", "bi-graph-up-arrow", "text-success"], [1, "kpi-icon-box", "bg-info-subtle", "text-info", "rounded-3", "d-flex", "align-items-center", "justify-content-center"], [1, "bi", "bi-cpu-fill", "fs-14"], [1, "fs-11", "text-info", "d-flex", "align-items-center", "gap-1", "mt-1"], [1, "bi", "bi-shield-check"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "py-5"], [1, "row", "g-3", "g-lg-4", "mb-4"], [1, "card", "border", "rounded-4", "shadow-sm", "overflow-hidden", "card-theme-color", "mb-4"], [1, "text-center", "py-5", "my-4", "border", "rounded-4", "bg-body-tertiary"], ["id", "planModal", "tabindex", "-1", "aria-labelledby", "planModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content", "border-0", "rounded-4", "shadow-lg", "overflow-hidden", "card-theme-color"], [1, "modal-header", "border-bottom", "px-4", "py-3"], [1, "bi", "bi-box-seam-fill", "fs-15"], ["id", "planModalLabel", 1, "modal-title", "fs-15", "fw-bold", "text-heading", "mb-0"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [3, "ngSubmit", "formGroup"], [1, "modal-body", "p-4"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label", "fs-12", "fw-semibold", "text-heading"], [1, "text-danger"], [1, "input-group"], [1, "input-group-text", "bg-body-tertiary", "border-end-0"], [1, "bi", "bi-tag-fill", "text-muted"], ["type", "text", "formControlName", "plan_name", "placeholder", "e.g. Starter, Gold, Enterprise", 1, "form-control", "border-start-0", "fs-12"], [1, "text-danger", "fs-11", "mt-1"], [1, "col-md-3"], ["type", "number", "formControlName", "price", "placeholder", "999", 1, "form-control", "border-start-0", "fs-12"], ["formControlName", "billing_cycle", 1, "form-select", "fs-12"], ["value", "monthly"], ["value", "quarterly"], ["value", "annual"], [1, "col-12", "pt-2"], [1, "fs-11", "fw-bold", "text-uppercase", "text-muted", "letter-spacing-1", "border-bottom", "pb-1"], [1, "col-md-4"], [1, "bi", "bi-buildings", "text-muted"], ["type", "number", "formControlName", "total_property", "placeholder", "1", 1, "form-control", "border-start-0", "fs-12"], [1, "bi", "bi-door-open", "text-muted"], ["type", "number", "formControlName", "total_rooms", "placeholder", "50", 1, "form-control", "border-start-0", "fs-12"], [1, "bi", "bi-people", "text-muted"], ["type", "number", "formControlName", "total_tenant", "placeholder", "100", 1, "form-control", "border-start-0", "fs-12"], [1, "col-12"], ["rows", "3", "formControlName", "features", "placeholder", "e.g. Single Property, Max 50 Rooms, Razorpay Payment, Dynamic UPI QR, Automated WhatsApp Alerts", 1, "form-control", "fs-12"], [1, "fs-10", "text-muted"], ["formControlName", "status", 1, "form-select", "fs-12"], [3, "ngValue"], [1, "modal-footer", "border-top", "px-4", "py-3", "d-flex", "justify-content-between"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-secondary", "btn-sm", "rounded-pill", "px-3"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "rounded-pill", "px-4", "fw-semibold", "d-flex", "align-items-center", "gap-1.5", "shadow-sm", 3, "disabled"], [1, "bi", "bi-check-lg", "fs-14"], ["role", "status", 1, "spinner-border", "text-primary", "mb-3"], [1, "fs-13", "text-muted"], [1, "col-12", "col-md-6", "col-xl-3"], [1, "plan-card", "h-100", "p-4", "rounded-4", "shadow-sm", "border", "d-flex", "flex-column", "justify-content-between", "position-relative", "overflow-hidden", "card-theme-color"], [1, "plan-glow"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-2"], [1, "fs-16", "fw-bold", "text-heading", "mb-0"], [1, "badge", "rounded-pill", "text-uppercase", "mt-1", 2, "font-size", "9px", 3, "ngClass"], ["title", "Current active client subscribers", 1, "subscriber-pill", "px-2", "py-1", "rounded-pill", "bg-body-tertiary", "border", "d-flex", "align-items-center", "gap-1"], [1, "bi", "bi-people-fill", "fs-11", "text-primary"], [1, "fs-11", "fw-bold", "text-heading"], [1, "price-box", "my-3", "p-3", "rounded-3", "bg-body-secondary", "bg-opacity-50"], [1, "d-flex", "align-items-baseline", "gap-1"], [1, "fs-14", "fw-bold", "text-muted"], [1, "fs-28", "fw-extrabold", "text-heading", "lh-1"], [1, "fs-10", "text-muted", "mt-1"], [1, "quotas-container", "mb-3", "pb-3", "border-bottom"], [1, "d-flex", "align-items-center", "justify-content-between", "py-1", "fs-12"], [1, "text-muted", "d-flex", "align-items-center", "gap-1.5"], [1, "bi", "bi-buildings", "text-primary"], [1, "text-heading"], [1, "bi", "bi-door-open", "text-info"], [1, "bi", "bi-person-badge", "text-success"], [1, "features-list", "mb-4"], [1, "fs-11", "fw-bold", "text-uppercase", "text-muted", "letter-spacing-1", "mb-2"], [1, "list-unstyled", "p-0", "m-0", "d-flex", "flex-column", "gap-1.5"], [1, "d-flex", "align-items-start", "gap-2", "fs-11", "text-body-secondary"], [1, "d-flex", "align-items-center", "gap-2", "pt-2", "border-top"], ["data-bs-toggle", "modal", "data-bs-target", "#planModal", 1, "btn", "btn-sm", "btn-outline-primary", "flex-fill", "rounded-pill", "py-1.5", "fs-11", "fw-semibold", "d-flex", "align-items-center", "justify-content-center", "gap-1", 3, "click"], [1, "bi", "bi-pencil-square"], ["title", "Delete Plan", 1, "btn", "btn-sm", "btn-outline-danger", "rounded-pill", "px-2.5", "py-1.5", "fs-11", 3, "click"], [1, "bi", "bi-trash3-fill"], [1, "bi", "bi-check-circle-fill", "text-success", "fs-12", "mt-0.5"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "table-light"], [1, "fs-11", "text-uppercase", "text-muted", "letter-spacing-1"], [1, "ps-4"], [1, "text-end", "pe-4"], [1, "fs-12"], [1, "ps-4", "fw-bold", "text-muted"], [1, "fw-bold", "text-heading"], [1, "fw-bold", "text-success", "fs-13"], [1, "badge", "bg-primary-subtle", "text-primary"], [1, "badge", "bg-info-subtle", "text-info"], [1, "badge", "bg-success-subtle", "text-success"], [2, "max-width", "250px"], [1, "text-truncate", "d-block", "text-muted", "fs-11", 3, "title"], [1, "badge", "bg-dark-subtle", "text-body", "rounded-pill", "px-2.5", "py-1", "fw-bold"], [1, "bi", "bi-people-fill", "me-1", "text-primary"], [1, "badge", "rounded-pill", 3, "ngClass"], [1, "d-flex", "align-items-center", "justify-content-end", "gap-1"], ["data-bs-toggle", "modal", "data-bs-target", "#planModal", "title", "Edit Plan", 1, "btn", "btn-sm", "btn-ghost", "text-primary", "p-1", "rounded", 3, "click"], [1, "bi", "bi-pencil-square", "fs-13"], ["title", "Delete Plan", 1, "btn", "btn-sm", "btn-ghost", "text-danger", "p-1", "rounded", 3, "click"], [1, "bi", "bi-trash3", "fs-13"], [1, "bi", "bi-box-seam", "text-muted", "fs-1", "mb-2", "d-block"], [1, "fs-12", "text-muted", "mb-3"], ["data-bs-toggle", "modal", "data-bs-target", "#planModal", 1, "btn", "btn-primary", "btn-sm", "rounded-pill", "px-3", "py-1.5", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"]], template: function PlansComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "div", 3)(4, "span", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275text(6, " Super Admin Master ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "SaaS Package Pricing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "h2", 7);
      \u0275\u0275element(10, "i", 8);
      \u0275\u0275text(11, " Subscription Plans & Tiers ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 9);
      \u0275\u0275text(13, "Define software packages, limits (properties, rooms, residents), and pricing offered to PG Owners.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "button", 12);
      \u0275\u0275listener("click", function PlansComponent_Template_button_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.viewMode = "cards");
      });
      \u0275\u0275element(17, "i", 13);
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19, "Cards");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "button", 12);
      \u0275\u0275listener("click", function PlansComponent_Template_button_click_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.viewMode = "table");
      });
      \u0275\u0275element(21, "i", 14);
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23, "Table");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "button", 15);
      \u0275\u0275listener("click", function PlansComponent_Template_button_click_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadPlans());
      });
      \u0275\u0275element(25, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 17);
      \u0275\u0275listener("click", function PlansComponent_Template_button_click_26_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openCreateModal());
      });
      \u0275\u0275element(27, "i", 18);
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29, "Create New Plan");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(30, "div", 19)(31, "div", 20)(32, "div", 21)(33, "div", 22)(34, "span", 23);
      \u0275\u0275text(35, "Active Tiers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 24);
      \u0275\u0275element(37, "i", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 26);
      \u0275\u0275text(39);
      \u0275\u0275elementStart(40, "span", 27);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 28);
      \u0275\u0275element(43, "i", 29);
      \u0275\u0275elementStart(44, "span");
      \u0275\u0275text(45, "Available for subscription");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(46, "div", 20)(47, "div", 21)(48, "div", 22)(49, "span", 23);
      \u0275\u0275text(50, "Subscribed Clients");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 30);
      \u0275\u0275element(52, "i", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 26);
      \u0275\u0275text(54);
      \u0275\u0275elementStart(55, "span", 27);
      \u0275\u0275text(56, "PG Owners");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 32);
      \u0275\u0275element(58, "i", 33);
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, "Across all properties");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "div", 20)(62, "div", 21)(63, "div", 22)(64, "span", 23);
      \u0275\u0275text(65, "Platform MRR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 34);
      \u0275\u0275element(67, "i", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 36);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 32);
      \u0275\u0275element(72, "i", 37);
      \u0275\u0275elementStart(73, "span");
      \u0275\u0275text(74, "Estimated recurring revenue");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(75, "div", 20)(76, "div", 21)(77, "div", 22)(78, "span", 23);
      \u0275\u0275text(79, "Platform Capacity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 38);
      \u0275\u0275element(81, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 26);
      \u0275\u0275text(83, "Multi-Tenant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 40);
      \u0275\u0275element(85, "i", 41);
      \u0275\u0275elementStart(86, "span");
      \u0275\u0275text(87, "Owner & Tenant isolated");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(88, PlansComponent_Conditional_88_Template, 4, 0, "div", 42)(89, PlansComponent_Conditional_89_Template, 3, 0, "div", 43)(90, PlansComponent_Conditional_90_Template, 24, 0, "div", 44)(91, PlansComponent_Conditional_91_Template, 9, 0, "div", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 46)(93, "div", 47)(94, "div", 48)(95, "div", 49)(96, "div", 10)(97, "div", 24);
      \u0275\u0275element(98, "i", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div")(100, "h5", 51);
      \u0275\u0275text(101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "span", 6);
      \u0275\u0275text(103, "Configure pricing limits & features for PG Owners");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(104, "button", 52, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "form", 53);
      \u0275\u0275listener("ngSubmit", function PlansComponent_Template_form_ngSubmit_106_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.savePlan());
      });
      \u0275\u0275elementStart(107, "div", 54)(108, "div", 55)(109, "div", 56)(110, "label", 57);
      \u0275\u0275text(111, "Plan Tier Name ");
      \u0275\u0275elementStart(112, "span", 58);
      \u0275\u0275text(113, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "div", 59)(115, "span", 60);
      \u0275\u0275element(116, "i", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275element(117, "input", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275template(118, PlansComponent_Conditional_118_Template, 2, 0, "div", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 64)(120, "label", 57);
      \u0275\u0275text(121, "Price (\u20B9) ");
      \u0275\u0275elementStart(122, "span", 58);
      \u0275\u0275text(123, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "div", 59)(125, "span", 60);
      \u0275\u0275text(126, "\u20B9");
      \u0275\u0275elementEnd();
      \u0275\u0275element(127, "input", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275template(128, PlansComponent_Conditional_128_Template, 2, 0, "div", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "div", 64)(130, "label", 57);
      \u0275\u0275text(131, "Billing Cycle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "select", 66)(133, "option", 67);
      \u0275\u0275text(134, "Monthly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "option", 68);
      \u0275\u0275text(136, "Quarterly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "option", 69);
      \u0275\u0275text(138, "Annual");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(139, "div", 70)(140, "div", 71);
      \u0275\u0275text(141, "Resource Limits for PG Owner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "div", 72)(143, "label", 57);
      \u0275\u0275text(144, "Max Properties ");
      \u0275\u0275elementStart(145, "span", 58);
      \u0275\u0275text(146, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "div", 59)(148, "span", 60);
      \u0275\u0275element(149, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275element(150, "input", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "div", 72)(152, "label", 57);
      \u0275\u0275text(153, "Max Rooms ");
      \u0275\u0275elementStart(154, "span", 58);
      \u0275\u0275text(155, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "div", 59)(157, "span", 60);
      \u0275\u0275element(158, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275element(159, "input", 76);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "div", 72)(161, "label", 57);
      \u0275\u0275text(162, "Max Tenants ");
      \u0275\u0275elementStart(163, "span", 58);
      \u0275\u0275text(164, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "div", 59)(166, "span", 60);
      \u0275\u0275element(167, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275element(168, "input", 78);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "div", 79)(170, "label", 57);
      \u0275\u0275text(171, "Included Features (Comma-separated) ");
      \u0275\u0275elementStart(172, "span", 58);
      \u0275\u0275text(173, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(174, "textarea", 80);
      \u0275\u0275elementStart(175, "span", 81);
      \u0275\u0275text(176, "Separate multiple features with commas for bullet points on cards.");
      \u0275\u0275elementEnd();
      \u0275\u0275template(177, PlansComponent_Conditional_177_Template, 2, 0, "div", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "div", 56)(179, "label", 57);
      \u0275\u0275text(180, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "select", 82)(182, "option", 83);
      \u0275\u0275text(183, "Active (Available for PG Owners)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "option", 83);
      \u0275\u0275text(185, "Archived / Inactive");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(186, "div", 84)(187, "button", 85);
      \u0275\u0275text(188, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "button", 86);
      \u0275\u0275element(190, "i", 87);
      \u0275\u0275elementStart(191, "span");
      \u0275\u0275text(192);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      let tmp_15_0;
      let tmp_16_0;
      let tmp_17_0;
      \u0275\u0275advance(16);
      \u0275\u0275property("ngClass", ctx.viewMode === "cards" ? "btn-primary" : "btn-ghost text-muted");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", ctx.viewMode === "table" ? "btn-primary" : "btn-ghost text-muted");
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275classProp("spin-animate", ctx.loading);
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate1("", ctx.activePlansCount, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("/ ", ctx.plans.length, "");
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate1("", ctx.totalSubscribers, " ");
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(70, 22, ctx.totalEstimatedMrr, "1.0-0"), "");
      \u0275\u0275advance(19);
      \u0275\u0275conditional(ctx.loading ? 88 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.viewMode === "cards" ? 89 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.viewMode === "table" ? 90 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.plans.length === 0 ? 91 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", ctx.editMode ? "Edit Subscription Plan" : "Create New Subscription Plan", " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.planForm);
      \u0275\u0275advance(12);
      \u0275\u0275conditional(((tmp_15_0 = ctx.planForm.get("plan_name")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx.planForm.get("plan_name")) == null ? null : tmp_15_0.touched) ? 118 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275conditional(((tmp_16_0 = ctx.planForm.get("price")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx.planForm.get("price")) == null ? null : tmp_16_0.touched) ? 128 : -1);
      \u0275\u0275advance(49);
      \u0275\u0275conditional(((tmp_17_0 = ctx.planForm.get("features")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx.planForm.get("features")) == null ? null : tmp_17_0.touched) ? 177 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngValue", 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngValue", 0);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.planForm.invalid);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.editMode ? "Update Plan" : "Create Plan");
    }
  }, dependencies: [CommonModule, NgClass, DecimalPipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.plans-container[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\n.kpi-icon-box[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.plan-card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.plan-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08) !important;\n}\n.plan-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 120px;\n  pointer-events: none;\n  z-index: 0;\n}\n.plan-card[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.subscriber-pill[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.spin-animate[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.shadow-xs[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=plans.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlansComponent, [{
    type: Component,
    args: [{ selector: "app-plans", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="plans-container container-fluid p-3 p-md-4">

  <!-- Header Section -->
  <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-4">
    <div>
      <div class="d-flex align-items-center gap-2 mb-1">
        <span class="badge bg-danger-subtle text-danger text-uppercase fw-bold letter-spacing-1 fs-10 px-2 py-1 rounded-pill">
          <i class="bi bi-shield-lock-fill me-1"></i> Super Admin Master
        </span>
        <span class="fs-11 text-muted">SaaS Package Pricing</span>
      </div>
      <h2 class="fs-22 fw-bold text-heading mb-0 d-flex align-items-center gap-2">
        <i class="bi bi-box-seam-fill text-primary"></i>
        Subscription Plans & Tiers
      </h2>
      <p class="fs-12 text-muted mb-0">Define software packages, limits (properties, rooms, residents), and pricing offered to PG Owners.</p>
    </div>

    <!-- Actions -->
    <div class="d-flex align-items-center gap-2">
      <!-- Grid / Table View Switcher -->
      <div class="btn-group p-1 bg-body-tertiary rounded-pill shadow-xs" role="group">
        <button type="button" 
                class="btn btn-sm rounded-pill px-3 py-1 fs-11 fw-semibold d-flex align-items-center gap-1.5 transition-all"
                [ngClass]="viewMode === 'cards' ? 'btn-primary' : 'btn-ghost text-muted'"
                (click)="viewMode = 'cards'">
          <i class="bi bi-grid-fill"></i>
          <span>Cards</span>
        </button>
        <button type="button" 
                class="btn btn-sm rounded-pill px-3 py-1 fs-11 fw-semibold d-flex align-items-center gap-1.5 transition-all"
                [ngClass]="viewMode === 'table' ? 'btn-primary' : 'btn-ghost text-muted'"
                (click)="viewMode = 'table'">
          <i class="bi bi-table"></i>
          <span>Table</span>
        </button>
      </div>

      <!-- Refresh -->
      <button class="btn btn-outline-secondary btn-sm rounded-pill px-2.5 py-1.5 d-flex align-items-center gap-1"
              (click)="loadPlans()" 
              [disabled]="loading"
              title="Refresh Plans">
        <i class="bi bi-arrow-clockwise" [class.spin-animate]="loading"></i>
      </button>

      <!-- Add New Plan Button -->
      <button class="btn btn-primary btn-sm rounded-pill px-3 py-1.5 d-flex align-items-center gap-1.5 shadow-sm fw-semibold fs-12"
              data-bs-toggle="modal" 
              data-bs-target="#planModal"
              (click)="openCreateModal()">
        <i class="bi bi-plus-lg fs-14"></i>
        <span>Create New Plan</span>
      </button>
    </div>
  </div>

  <!-- KPI Cards Row -->
  <div class="row g-3 mb-4">
    <div class="col-6 col-lg-3">
      <div class="kpi-card p-3 rounded-4 shadow-xs border card-theme-color">
        <div class="d-flex align-items-center justify-content-between mb-2">
          <span class="fs-11 fw-semibold text-muted text-uppercase letter-spacing-1">Active Tiers</span>
          <div class="kpi-icon-box bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center">
            <i class="bi bi-layers-fill fs-14"></i>
          </div>
        </div>
        <div class="fs-22 fw-bold text-heading">{{ activePlansCount }} <span class="fs-12 text-muted fw-normal">/ {{ plans.length }}</span></div>
        <div class="fs-11 text-success d-flex align-items-center gap-1 mt-1">
          <i class="bi bi-check-circle-fill"></i>
          <span>Available for subscription</span>
        </div>
      </div>
    </div>

    <div class="col-6 col-lg-3">
      <div class="kpi-card p-3 rounded-4 shadow-xs border card-theme-color">
        <div class="d-flex align-items-center justify-content-between mb-2">
          <span class="fs-11 fw-semibold text-muted text-uppercase letter-spacing-1">Subscribed Clients</span>
          <div class="kpi-icon-box bg-success-subtle text-success rounded-3 d-flex align-items-center justify-content-center">
            <i class="bi bi-people-fill fs-14"></i>
          </div>
        </div>
        <div class="fs-22 fw-bold text-heading">{{ totalSubscribers }} <span class="fs-12 text-muted fw-normal">PG Owners</span></div>
        <div class="fs-11 text-muted d-flex align-items-center gap-1 mt-1">
          <i class="bi bi-building"></i>
          <span>Across all properties</span>
        </div>
      </div>
    </div>

    <div class="col-6 col-lg-3">
      <div class="kpi-card p-3 rounded-4 shadow-xs border card-theme-color">
        <div class="d-flex align-items-center justify-content-between mb-2">
          <span class="fs-11 fw-semibold text-muted text-uppercase letter-spacing-1">Platform MRR</span>
          <div class="kpi-icon-box bg-warning-subtle text-warning rounded-3 d-flex align-items-center justify-content-center">
            <i class="bi bi-currency-rupee fs-14"></i>
          </div>
        </div>
        <div class="fs-22 fw-bold text-success">\u20B9{{ totalEstimatedMrr | number:'1.0-0' }}</div>
        <div class="fs-11 text-muted d-flex align-items-center gap-1 mt-1">
          <i class="bi bi-graph-up-arrow text-success"></i>
          <span>Estimated recurring revenue</span>
        </div>
      </div>
    </div>

    <div class="col-6 col-lg-3">
      <div class="kpi-card p-3 rounded-4 shadow-xs border card-theme-color">
        <div class="d-flex align-items-center justify-content-between mb-2">
          <span class="fs-11 fw-semibold text-muted text-uppercase letter-spacing-1">Platform Capacity</span>
          <div class="kpi-icon-box bg-info-subtle text-info rounded-3 d-flex align-items-center justify-content-center">
            <i class="bi bi-cpu-fill fs-14"></i>
          </div>
        </div>
        <div class="fs-22 fw-bold text-heading">Multi-Tenant</div>
        <div class="fs-11 text-info d-flex align-items-center gap-1 mt-1">
          <i class="bi bi-shield-check"></i>
          <span>Owner & Tenant isolated</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Loading State -->
  @if (loading) {
    <div class="d-flex flex-column align-items-center justify-content-center py-5">
      <div class="spinner-border text-primary mb-3" role="status"></div>
      <div class="fs-13 text-muted">Loading subscription packages...</div>
    </div>
  }

  <!-- View 1: Pricing Cards View -->
  @if (!loading && viewMode === 'cards') {
    <div class="row g-3 g-lg-4 mb-4">
      @for (plan of plans; track plan.id; let i = $index) {
        <div class="col-12 col-md-6 col-xl-3">
          <div class="plan-card h-100 p-4 rounded-4 shadow-sm border d-flex flex-column justify-content-between position-relative overflow-hidden card-theme-color"
               [style.border-top]="'4px solid ' + getPlanBorderColor(i)">

            <!-- Top Background Glow -->
            <div class="plan-glow" [style.background]="getPlanGradient(i)"></div>

            <div>
              <!-- Plan Header -->
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h4 class="fs-16 fw-bold text-heading mb-0">{{ plan.plan_name }}</h4>
                  <span class="badge rounded-pill text-uppercase mt-1" 
                        [ngClass]="plan.status == 1 ? 'bg-success-subtle text-success' : 'bg-secondary-subtle text-secondary'" 
                        style="font-size: 9px;">
                    {{ plan.status == 1 ? 'Active' : 'Archived' }}
                  </span>
                </div>
                <!-- Subscriber Pill -->
                <div class="subscriber-pill px-2 py-1 rounded-pill bg-body-tertiary border d-flex align-items-center gap-1"
                     title="Current active client subscribers">
                  <i class="bi bi-people-fill fs-11 text-primary"></i>
                  <span class="fs-11 fw-bold text-heading">{{ plan.subscriber_count || 0 }}</span>
                </div>
              </div>

              <!-- Price Box -->
              <div class="price-box my-3 p-3 rounded-3 bg-body-secondary bg-opacity-50">
                <div class="d-flex align-items-baseline gap-1">
                  <span class="fs-14 fw-bold text-muted">\u20B9</span>
                  <span class="fs-28 fw-extrabold text-heading lh-1">{{ plan.price | number:'1.0-0' }}</span>
                  <span class="fs-11 text-muted">/ {{ plan.billing_cycle || 'month' }}</span>
                </div>
                <div class="fs-10 text-muted mt-1">Billed to PG Owner per property group</div>
              </div>

              <!-- Quotas List -->
              <div class="quotas-container mb-3 pb-3 border-bottom">
                <div class="d-flex align-items-center justify-content-between py-1 fs-12">
                  <span class="text-muted d-flex align-items-center gap-1.5">
                    <i class="bi bi-buildings text-primary"></i> Max Properties:
                  </span>
                  <strong class="text-heading">{{ plan.total_property }}</strong>
                </div>
                <div class="d-flex align-items-center justify-content-between py-1 fs-12">
                  <span class="text-muted d-flex align-items-center gap-1.5">
                    <i class="bi bi-door-open text-info"></i> Max Rooms:
                  </span>
                  <strong class="text-heading">{{ plan.total_rooms }}</strong>
                </div>
                <div class="d-flex align-items-center justify-content-between py-1 fs-12">
                  <span class="text-muted d-flex align-items-center gap-1.5">
                    <i class="bi bi-person-badge text-success"></i> Max Residents:
                  </span>
                  <strong class="text-heading">{{ plan.total_tenant }}</strong>
                </div>
              </div>

              <!-- Included Features -->
              <div class="features-list mb-4">
                <div class="fs-11 fw-bold text-uppercase text-muted letter-spacing-1 mb-2">Features Included:</div>
                <ul class="list-unstyled p-0 m-0 d-flex flex-column gap-1.5">
                  @for (feat of getFeatureList(plan.features); track feat) {
                    <li class="d-flex align-items-start gap-2 fs-11 text-body-secondary">
                      <i class="bi bi-check-circle-fill text-success fs-12 mt-0.5"></i>
                      <span>{{ feat }}</span>
                    </li>
                  }
                </ul>
              </div>
            </div>

            <!-- Card Bottom Actions -->
            <div class="d-flex align-items-center gap-2 pt-2 border-top">
              <button class="btn btn-sm btn-outline-primary flex-fill rounded-pill py-1.5 fs-11 fw-semibold d-flex align-items-center justify-content-center gap-1"
                      data-bs-toggle="modal" 
                      data-bs-target="#planModal"
                      (click)="openEditModal(plan)">
                <i class="bi bi-pencil-square"></i>
                <span>Edit Plan</span>
              </button>
              <button class="btn btn-sm btn-outline-danger rounded-pill px-2.5 py-1.5 fs-11"
                      (click)="deletePlan(plan)"
                      title="Delete Plan">
                <i class="bi bi-trash3-fill"></i>
              </button>
            </div>

          </div>
        </div>
      }
    </div>
  }

  <!-- View 2: Data Table View -->
  @if (!loading && viewMode === 'table') {
    <div class="card border rounded-4 shadow-sm overflow-hidden card-theme-color mb-4">
      <div class="table-responsive">
        <table class="table table-hover align-middle mb-0">
          <thead class="table-light">
            <tr class="fs-11 text-uppercase text-muted letter-spacing-1">
              <th class="ps-4">ID</th>
              <th>Plan Name</th>
              <th>Pricing</th>
              <th>Quotas (Props / Rooms / Residents)</th>
              <th>Features</th>
              <th>Subscribers</th>
              <th>Status</th>
              <th class="text-end pe-4">Actions</th>
            </tr>
          </thead>
          <tbody class="fs-12">
            @for (plan of plans; track plan.id) {
              <tr>
                <td class="ps-4 fw-bold text-muted">#{{ plan.id }}</td>
                <td>
                  <div class="fw-bold text-heading">{{ plan.plan_name }}</div>
                  <div class="fs-10 text-muted">Cycle: {{ plan.billing_cycle }}</div>
                </td>
                <td>
                  <div class="fw-bold text-success fs-13">\u20B9{{ plan.price | number:'1.0-0' }}</div>
                  <div class="fs-10 text-muted">per {{ plan.billing_cycle }}</div>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-2">
                    <span class="badge bg-primary-subtle text-primary">{{ plan.total_property }} Properties</span>
                    <span class="badge bg-info-subtle text-info">{{ plan.total_rooms }} Rooms</span>
                    <span class="badge bg-success-subtle text-success">{{ plan.total_tenant }} Tenants</span>
                  </div>
                </td>
                <td style="max-width: 250px;">
                  <span class="text-truncate d-block text-muted fs-11" [title]="plan.features">{{ plan.features }}</span>
                </td>
                <td>
                  <span class="badge bg-dark-subtle text-body rounded-pill px-2.5 py-1 fw-bold">
                    <i class="bi bi-people-fill me-1 text-primary"></i>
                    {{ plan.subscriber_count || 0 }} Clients
                  </span>
                </td>
                <td>
                  <span class="badge rounded-pill" 
                        [ngClass]="plan.status == 1 ? 'bg-success-subtle text-success' : 'bg-secondary-subtle text-secondary'">
                    {{ plan.status == 1 ? 'Active' : 'Archived' }}
                  </span>
                </td>
                <td class="text-end pe-4">
                  <div class="d-flex align-items-center justify-content-end gap-1">
                    <button class="btn btn-sm btn-ghost text-primary p-1 rounded" 
                            data-bs-toggle="modal" 
                            data-bs-target="#planModal"
                            (click)="openEditModal(plan)"
                            title="Edit Plan">
                      <i class="bi bi-pencil-square fs-13"></i>
                    </button>
                    <button class="btn btn-sm btn-ghost text-danger p-1 rounded" 
                            (click)="deletePlan(plan)"
                            title="Delete Plan">
                      <i class="bi bi-trash3 fs-13"></i>
                    </button>
                  </div>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  }

  <!-- Empty State -->
  @if (!loading && plans.length === 0) {
    <div class="text-center py-5 my-4 border rounded-4 bg-body-tertiary">
      <i class="bi bi-box-seam text-muted fs-1 mb-2 d-block"></i>
      <h5 class="fw-bold text-heading">No Subscription Plans Found</h5>
      <p class="fs-12 text-muted mb-3">Create your first pricing tier to begin licensing panels to PG Owners.</p>
      <button class="btn btn-primary btn-sm rounded-pill px-3 py-1.5"
              data-bs-toggle="modal" 
              data-bs-target="#planModal"
              (click)="openCreateModal()">
        <i class="bi bi-plus-lg me-1"></i> Create Plan
      </button>
    </div>
  }

</div>

<!-- Modal: Create / Edit Subscription Plan -->
<div class="modal fade" id="planModal" tabindex="-1" aria-labelledby="planModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content border-0 rounded-4 shadow-lg overflow-hidden card-theme-color">

      <!-- Modal Header -->
      <div class="modal-header border-bottom px-4 py-3">
        <div class="d-flex align-items-center gap-2">
          <div class="kpi-icon-box bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center">
            <i class="bi bi-box-seam-fill fs-15"></i>
          </div>
          <div>
            <h5 class="modal-title fs-15 fw-bold text-heading mb-0" id="planModalLabel">
              {{ editMode ? 'Edit Subscription Plan' : 'Create New Subscription Plan' }}
            </h5>
            <span class="fs-11 text-muted">Configure pricing limits & features for PG Owners</span>
          </div>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" #planModalClose></button>
      </div>

      <!-- Modal Body -->
      <form [formGroup]="planForm" (ngSubmit)="savePlan()">
        <div class="modal-body p-4">
          <div class="row g-3">

            <!-- Plan Name -->
            <div class="col-md-6">
              <label class="form-label fs-12 fw-semibold text-heading">Plan Tier Name <span class="text-danger">*</span></label>
              <div class="input-group">
                <span class="input-group-text bg-body-tertiary border-end-0"><i class="bi bi-tag-fill text-muted"></i></span>
                <input type="text" 
                       class="form-control border-start-0 fs-12" 
                       formControlName="plan_name" 
                       placeholder="e.g. Starter, Gold, Enterprise">
              </div>
              @if (planForm.get('plan_name')?.invalid && planForm.get('plan_name')?.touched) {
                <div class="text-danger fs-11 mt-1">Plan name is required (3-50 chars).</div>
              }
            </div>

            <!-- Price -->
            <div class="col-md-3">
              <label class="form-label fs-12 fw-semibold text-heading">Price (\u20B9) <span class="text-danger">*</span></label>
              <div class="input-group">
                <span class="input-group-text bg-body-tertiary border-end-0">\u20B9</span>
                <input type="number" 
                       class="form-control border-start-0 fs-12" 
                       formControlName="price" 
                       placeholder="999">
              </div>
              @if (planForm.get('price')?.invalid && planForm.get('price')?.touched) {
                <div class="text-danger fs-11 mt-1">Valid price required.</div>
              }
            </div>

            <!-- Billing Cycle -->
            <div class="col-md-3">
              <label class="form-label fs-12 fw-semibold text-heading">Billing Cycle</label>
              <select class="form-select fs-12" formControlName="billing_cycle">
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="annual">Annual</option>
              </select>
            </div>

            <!-- Quotas Header -->
            <div class="col-12 pt-2">
              <div class="fs-11 fw-bold text-uppercase text-muted letter-spacing-1 border-bottom pb-1">Resource Limits for PG Owner</div>
            </div>

            <!-- Max Properties -->
            <div class="col-md-4">
              <label class="form-label fs-12 fw-semibold text-heading">Max Properties <span class="text-danger">*</span></label>
              <div class="input-group">
                <span class="input-group-text bg-body-tertiary border-end-0"><i class="bi bi-buildings text-muted"></i></span>
                <input type="number" class="form-control border-start-0 fs-12" formControlName="total_property" placeholder="1">
              </div>
            </div>

            <!-- Max Rooms -->
            <div class="col-md-4">
              <label class="form-label fs-12 fw-semibold text-heading">Max Rooms <span class="text-danger">*</span></label>
              <div class="input-group">
                <span class="input-group-text bg-body-tertiary border-end-0"><i class="bi bi-door-open text-muted"></i></span>
                <input type="number" class="form-control border-start-0 fs-12" formControlName="total_rooms" placeholder="50">
              </div>
            </div>

            <!-- Max Tenants -->
            <div class="col-md-4">
              <label class="form-label fs-12 fw-semibold text-heading">Max Tenants <span class="text-danger">*</span></label>
              <div class="input-group">
                <span class="input-group-text bg-body-tertiary border-end-0"><i class="bi bi-people text-muted"></i></span>
                <input type="number" class="form-control border-start-0 fs-12" formControlName="total_tenant" placeholder="100">
              </div>
            </div>

            <!-- Features List -->
            <div class="col-12">
              <label class="form-label fs-12 fw-semibold text-heading">Included Features (Comma-separated) <span class="text-danger">*</span></label>
              <textarea class="form-control fs-12" 
                        rows="3" 
                        formControlName="features" 
                        placeholder="e.g. Single Property, Max 50 Rooms, Razorpay Payment, Dynamic UPI QR, Automated WhatsApp Alerts"></textarea>
              <span class="fs-10 text-muted">Separate multiple features with commas for bullet points on cards.</span>
              @if (planForm.get('features')?.invalid && planForm.get('features')?.touched) {
                <div class="text-danger fs-11 mt-1">Features list is required.</div>
              }
            </div>

            <!-- Status -->
            <div class="col-md-6">
              <label class="form-label fs-12 fw-semibold text-heading">Status</label>
              <select class="form-select fs-12" formControlName="status">
                <option [ngValue]="1">Active (Available for PG Owners)</option>
                <option [ngValue]="0">Archived / Inactive</option>
              </select>
            </div>

          </div>
        </div>

        <!-- Modal Footer -->
        <div class="modal-footer border-top px-4 py-3 d-flex justify-content-between">
          <button type="button" class="btn btn-outline-secondary btn-sm rounded-pill px-3" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" 
                  class="btn btn-primary btn-sm rounded-pill px-4 fw-semibold d-flex align-items-center gap-1.5 shadow-sm"
                  [disabled]="planForm.invalid">
            <i class="bi bi-check-lg fs-14"></i>
            <span>{{ editMode ? 'Update Plan' : 'Create Plan' }}</span>
          </button>
        </div>
      </form>

    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/plans/plans.component.css */\n.plans-container {\n  min-height: 100%;\n}\n.kpi-icon-box {\n  width: 32px;\n  height: 32px;\n}\n.plan-card {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.plan-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08) !important;\n}\n.plan-glow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 120px;\n  pointer-events: none;\n  z-index: 0;\n}\n.plan-card > div {\n  position: relative;\n  z-index: 1;\n}\n.subscriber-pill {\n  font-size: 11px;\n}\n.spin-animate {\n  animation: spin 0.8s linear infinite;\n  display: inline-block;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.btn-ghost {\n  background: transparent;\n  border: none;\n}\n.btn-ghost:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.shadow-xs {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=plans.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: GlobalService }], { planModalClose: [{
    type: ViewChild,
    args: ["planModalClose"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlansComponent, { className: "PlansComponent", filePath: "src/app/pages/plans/plans.component.ts", lineNumber: 28 });
})();
export {
  PlansComponent
};
//# sourceMappingURL=chunk-GL24QQR3.js.map
