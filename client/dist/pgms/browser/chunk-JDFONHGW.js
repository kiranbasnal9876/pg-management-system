import {
  ApiService,
  FormsModule
} from "./chunk-SD6QMD7Q.js";
import {
  CommonModule,
  DecimalPipe,
  GlobalService,
  NgClass,
  RouterLink,
  isPlatformBrowser
} from "./chunk-E5VR6ZL4.js";
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  NgZone,
  PLATFORM_ID,
  asapScheduler,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-TFR4PE7B.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-Y5RQAIA6.js";

// node_modules/ng-apexcharts/fesm2022/ng-apexcharts.mjs
var _c0 = ["chart"];
var ChartComponent = class _ChartComponent {
  constructor() {
    this.chart = input();
    this.annotations = input();
    this.colors = input();
    this.dataLabels = input();
    this.series = input();
    this.stroke = input();
    this.labels = input();
    this.legend = input();
    this.markers = input();
    this.noData = input();
    this.fill = input();
    this.tooltip = input();
    this.plotOptions = input();
    this.responsive = input();
    this.xaxis = input();
    this.yaxis = input();
    this.forecastDataPoints = input();
    this.grid = input();
    this.states = input();
    this.title = input();
    this.subtitle = input();
    this.theme = input();
    this.autoUpdateSeries = input(true);
    this.chartReady = output();
    this.chartInstance = signal(null);
    this.chartElement = viewChild.required("chart");
    this.ngZone = inject(NgZone);
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  }
  ngOnChanges(changes) {
    if (!this.isBrowser) return;
    this.ngZone.runOutsideAngular(() => {
      asapScheduler.schedule(() => this.hydrate(changes));
    });
  }
  ngOnDestroy() {
    this.destroy();
  }
  hydrate(changes) {
    const shouldUpdateSeries = this.autoUpdateSeries() && Object.keys(changes).filter((c) => c !== "series").length === 0;
    if (shouldUpdateSeries) {
      this.updateSeries(this.series(), true);
      return;
    }
    this.createElement();
  }
  createElement() {
    return __async(this, null, function* () {
      const {
        default: ApexCharts
      } = yield import("./chunk-RKYJPG4T.js");
      window.ApexCharts ||= ApexCharts;
      const options = {};
      const properties = ["annotations", "chart", "colors", "dataLabels", "series", "stroke", "labels", "legend", "fill", "tooltip", "plotOptions", "responsive", "markers", "noData", "xaxis", "yaxis", "forecastDataPoints", "grid", "states", "title", "subtitle", "theme"];
      properties.forEach((property) => {
        const value = this[property]();
        if (value) {
          options[property] = value;
        }
      });
      this.destroy();
      const chartInstance = this.ngZone.runOutsideAngular(() => new ApexCharts(this.chartElement().nativeElement, options));
      this.chartInstance.set(chartInstance);
      this.render();
      this.chartReady.emit({
        chartObj: chartInstance
      });
    });
  }
  render() {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.render());
  }
  updateOptions(options, redrawPaths, animate, updateSyncedCharts) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.updateOptions(options, redrawPaths, animate, updateSyncedCharts));
  }
  updateSeries(newSeries, animate) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.updateSeries(newSeries, animate));
  }
  appendSeries(newSeries, animate) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.appendSeries(newSeries, animate));
  }
  appendData(newData) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.appendData(newData));
  }
  highlightSeries(seriesName) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.highlightSeries(seriesName));
  }
  toggleSeries(seriesName) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.toggleSeries(seriesName));
  }
  showSeries(seriesName) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.showSeries(seriesName));
  }
  hideSeries(seriesName) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.hideSeries(seriesName));
  }
  resetSeries() {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.resetSeries());
  }
  zoomX(min, max) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.zoomX(min, max));
  }
  toggleDataPointSelection(seriesIndex, dataPointIndex) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.toggleDataPointSelection(seriesIndex, dataPointIndex));
  }
  destroy() {
    this.chartInstance()?.destroy();
    this.chartInstance.set(null);
  }
  setLocale(localeName) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.setLocale(localeName));
  }
  paper() {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.paper());
  }
  addXaxisAnnotation(options, pushToMemory, context) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.addXaxisAnnotation(options, pushToMemory, context));
  }
  addYaxisAnnotation(options, pushToMemory, context) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.addYaxisAnnotation(options, pushToMemory, context));
  }
  addPointAnnotation(options, pushToMemory, context) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.addPointAnnotation(options, pushToMemory, context));
  }
  removeAnnotation(id, options) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.removeAnnotation(id, options));
  }
  clearAnnotations(options) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.clearAnnotations(options));
  }
  dataURI(options) {
    return this.chartInstance()?.dataURI(options);
  }
  static {
    this.\u0275fac = function ChartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _ChartComponent,
      selectors: [["apx-chart"]],
      viewQuery: function ChartComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuerySignal(ctx.chartElement, _c0, 5);
        }
        if (rf & 2) {
          \u0275\u0275queryAdvance();
        }
      },
      inputs: {
        chart: [1, "chart"],
        annotations: [1, "annotations"],
        colors: [1, "colors"],
        dataLabels: [1, "dataLabels"],
        series: [1, "series"],
        stroke: [1, "stroke"],
        labels: [1, "labels"],
        legend: [1, "legend"],
        markers: [1, "markers"],
        noData: [1, "noData"],
        fill: [1, "fill"],
        tooltip: [1, "tooltip"],
        plotOptions: [1, "plotOptions"],
        responsive: [1, "responsive"],
        xaxis: [1, "xaxis"],
        yaxis: [1, "yaxis"],
        forecastDataPoints: [1, "forecastDataPoints"],
        grid: [1, "grid"],
        states: [1, "states"],
        title: [1, "title"],
        subtitle: [1, "subtitle"],
        theme: [1, "theme"],
        autoUpdateSeries: [1, "autoUpdateSeries"]
      },
      outputs: {
        chartReady: "chartReady"
      },
      features: [\u0275\u0275NgOnChangesFeature],
      decls: 2,
      vars: 0,
      consts: [["chart", ""]],
      template: function ChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275element(0, "div", null, 0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartComponent, [{
    type: Component,
    args: [{
      selector: "apx-chart",
      template: `<div #chart></div>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], null, null);
})();
var declarations = [ChartComponent];
var NgApexchartsModule = class _NgApexchartsModule {
  static {
    this.\u0275fac = function NgApexchartsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgApexchartsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgApexchartsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgApexchartsModule, [{
    type: NgModule,
    args: [{
      imports: [declarations],
      exports: [declarations]
    }]
  }], null, null);
})();

// src/app/pages/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DashboardComponent_Conditional_1_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275elementStart(2, "p", 77);
    \u0275\u0275text(3, "No tenants found in this category.");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_1_Conditional_84_For_18_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2, " PAID ");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_1_Conditional_84_For_18_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275text(2, " PENDING ");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_1_Conditional_84_For_18_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Conditional_84_For_18_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const t_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.sendWhatsAppReminder(t_r4));
    });
    \u0275\u0275element(1, "i", 92);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Remind on WhatsApp");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 93);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Conditional_84_For_18_Conditional_24_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const t_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleTenantRentStatus(t_r4, "paid"));
    });
    \u0275\u0275text(5, " Mark Paid ");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_1_Conditional_84_For_18_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 94);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Conditional_84_For_18_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const t_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.sendWhatsAppReceipt(t_r4));
    });
    \u0275\u0275element(1, "i", 92);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Send Receipt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 95);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Conditional_84_For_18_Conditional_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const t_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleTenantRentStatus(t_r4, "pending"));
    });
    \u0275\u0275text(5, " Reset ");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_1_Conditional_84_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 80)(2, "div", 71)(3, "div", 82);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 83);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 74);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 84);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 14);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 85);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 86);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275template(20, DashboardComponent_Conditional_1_Conditional_84_For_18_Conditional_20_Template, 3, 0, "span", 87)(21, DashboardComponent_Conditional_1_Conditional_84_For_18_Conditional_21_Template, 3, 0, "span", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 81)(23, "div", 89);
    \u0275\u0275template(24, DashboardComponent_Conditional_1_Conditional_84_For_18_Conditional_24_Template, 6, 0)(25, DashboardComponent_Conditional_1_Conditional_84_For_18_Conditional_25_Template, 6, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4.name ? t_r4.name.substring(0, 2).toUpperCase() : "TN", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Room ", t_r4.room_number || "-", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4.pg_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4.phone, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u20B9", (+t_r4.monthly_rent).toLocaleString("en-IN"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(t_r4.rent_status === "paid" ? 20 : 21);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(t_r4.rent_status !== "paid" ? 24 : 25);
  }
}
function DashboardComponent_Conditional_1_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "table", 78)(2, "thead", 79)(3, "tr")(4, "th", 80);
    \u0275\u0275text(5, "Tenant Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Room & PG");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Monthly Rent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Rent Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 81);
    \u0275\u0275text(15, "Actions / WhatsApp");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, DashboardComponent_Conditional_1_Conditional_84_For_18_Template, 26, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.filteredTenants);
  }
}
function DashboardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2", 3);
    \u0275\u0275element(3, "i", 4);
    \u0275\u0275text(4, " Landlord Dashboard Overview ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 5);
    \u0275\u0275text(6, "Real-time rent collections, occupancy metrics, and tenant WhatsApp alerts.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshAll());
    });
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Refresh Data");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div")(16, "span", 12);
    \u0275\u0275text(17, "Total Tenants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h3", 13);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 14);
    \u0275\u0275text(21, "Across all your active PGs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 15);
    \u0275\u0275element(23, "i", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 10)(25, "div", 17)(26, "div")(27, "div", 18)(28, "span", 19);
    \u0275\u0275text(29, "Rent Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 20);
    \u0275\u0275element(31, "i", 21);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "h3", 22);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 14);
    \u0275\u0275text(36, "Collected for current cycle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 23);
    \u0275\u0275element(38, "i", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 10)(40, "div", 25)(41, "div")(42, "div", 18)(43, "span", 26);
    \u0275\u0275text(44, "Rent Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 27);
    \u0275\u0275element(46, "i", 28);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "h3", 29);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 14);
    \u0275\u0275text(51, "Awaiting collection");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 30);
    \u0275\u0275element(53, "i", 31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 10)(55, "div", 11)(56, "div")(57, "span", 12);
    \u0275\u0275text(58, "Occupancy & Rooms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "h3", 32);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 14);
    \u0275\u0275text(62, "Available / Total Rooms");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 33);
    \u0275\u0275element(64, "i", 34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(65, "div", 35)(66, "div", 36)(67, "div")(68, "h5", 37);
    \u0275\u0275element(69, "i", 38);
    \u0275\u0275text(70, " Tenant Rent Status & WhatsApp Reminders ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 39);
    \u0275\u0275text(72, "Review who has paid their rent and instantly ping unpaid tenants via WhatsApp.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 40)(74, "button", 41);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rentFilterTab = "all");
    });
    \u0275\u0275text(75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "button", 41);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Template_button_click_76_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rentFilterTab = "pending");
    });
    \u0275\u0275element(77, "i", 42);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "button", 41);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Template_button_click_79_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rentFilterTab = "paid");
    });
    \u0275\u0275element(80, "i", 43);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "div", 44);
    \u0275\u0275template(83, DashboardComponent_Conditional_1_Conditional_83_Template, 4, 0, "div", 45)(84, DashboardComponent_Conditional_1_Conditional_84_Template, 19, 0, "div", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 47)(86, "div", 48)(87, "div", 49)(88, "h5", 50);
    \u0275\u0275element(89, "i", 51);
    \u0275\u0275text(90, " Rent Collection Ratio ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 52);
    \u0275\u0275element(92, "apx-chart", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "div", 54)(94, "div", 55)(95, "span", 56);
    \u0275\u0275text(96, "Paid Tenants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "strong", 57);
    \u0275\u0275text(98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 55)(100, "span", 56);
    \u0275\u0275text(101, "Pending Tenants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "strong", 58);
    \u0275\u0275text(103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 55)(105, "span", 56);
    \u0275\u0275text(106, "Collection %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "strong", 59);
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "number");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(110, "div", 60)(111, "div", 61)(112, "div")(113, "h5", 50);
    \u0275\u0275element(114, "i", 62);
    \u0275\u0275text(115, " Quick Actions & Maintenance ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "div", 63)(117, "div", 64)(118, "a", 65)(119, "div", 18);
    \u0275\u0275element(120, "i", 66);
    \u0275\u0275elementStart(121, "strong", 67);
    \u0275\u0275text(122, "Add New Tenant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "span", 14);
    \u0275\u0275text(124, "Register resident, upload KYC and assign room.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(125, "div", 64)(126, "a", 68)(127, "div", 18);
    \u0275\u0275element(128, "i", 69);
    \u0275\u0275elementStart(129, "strong", 67);
    \u0275\u0275text(130);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "span", 14);
    \u0275\u0275text(132, "Resolve open Wi-Fi, Food, and plumbing issues.");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(133, "div", 70)(134, "div", 71);
    \u0275\u0275element(135, "i", 72);
    \u0275\u0275elementStart(136, "div")(137, "strong", 73);
    \u0275\u0275text(138, "Razorpay Online Payments Enabled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "span", 74);
    \u0275\u0275text(140, "Tenants can directly clear rent from their resident panel.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(141, "span", 75);
    \u0275\u0275text(142, "Active");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate(ctx_r1.total_tenant);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("", ctx_r1.total_paid_rent, " Tenants ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u20B9", ctx_r1.paid_amount.toLocaleString("en-IN"), " ");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("", ctx_r1.total_pending_rent, " Unpaid ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u20B9", ctx_r1.pending_amount.toLocaleString("en-IN"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate2("", ctx_r1.total_rooms_available, " / ", ctx_r1.total_rooms, "");
    \u0275\u0275advance(14);
    \u0275\u0275classProp("active-all", ctx_r1.rentFilterTab === "all");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" All Tenants (", ctx_r1.allTenantsList.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active-pending", ctx_r1.rentFilterTab === "pending");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Unpaid / Pending (", ctx_r1.pendingTenantsList.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active-paid", ctx_r1.rentFilterTab === "paid");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Paid (", ctx_r1.paidTenantsList.length, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.filteredTenants.length === 0 ? 83 : 84);
    \u0275\u0275advance(9);
    \u0275\u0275property("series", ctx_r1.chartOptions.series)("chart", ctx_r1.chartOptions.chart)("labels", ctx_r1.chartOptions.labels)("responsive", ctx_r1.chartOptions.responsive);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.total_paid_rent);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.total_pending_rent);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.total_tenant > 0 ? \u0275\u0275pipeBind2(109, 25, ctx_r1.total_paid_rent / ctx_r1.total_tenant * 100, "1.0-0") : "0", "% ");
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate1("Review Complaints (", ctx_r1.total_pending_complaints, ")");
  }
}
function DashboardComponent_Conditional_2_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 106);
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275elementStart(2, "span", 124);
    \u0275\u0275text(3, "Pay via Razorpay Now");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_2_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 107);
    \u0275\u0275element(1, "i", 125);
    \u0275\u0275elementStart(2, "span", 124);
    \u0275\u0275text(3, "View Payment Receipt");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2", 3);
    \u0275\u0275element(3, "i", 96);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 5);
    \u0275\u0275text(6, "Manage your room, track monthly rent, and pay securely via Razorpay.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 97);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.chatWithLandlord());
    });
    \u0275\u0275element(9, "i", 92);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "WhatsApp Landlord");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 7);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_2_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadTenantDashboard());
    });
    \u0275\u0275element(13, "i", 8);
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Refresh");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 9)(17, "div", 60)(18, "div", 61)(19, "div")(20, "div", 98)(21, "span", 99);
    \u0275\u0275text(22, "Current Billing Cycle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 100);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 101)(26, "span", 102);
    \u0275\u0275text(27, "Monthly Room Rent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "h1", 103);
    \u0275\u0275text(29);
    \u0275\u0275elementStart(30, "span", 104);
    \u0275\u0275text(31, "/ month");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 105);
    \u0275\u0275template(33, DashboardComponent_Conditional_2_Conditional_33_Template, 4, 0, "a", 106)(34, DashboardComponent_Conditional_2_Conditional_34_Template, 4, 0, "a", 107);
    \u0275\u0275elementStart(35, "button", 108);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_2_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.chatWithLandlord());
    });
    \u0275\u0275element(36, "i", 92);
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38, "Chat with Landlord");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(39, "div", 48)(40, "div", 49)(41, "h5", 50);
    \u0275\u0275element(42, "i", 109);
    \u0275\u0275text(43, " Room & Property Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "ul", 110)(45, "li", 111)(46, "span", 112);
    \u0275\u0275text(47, "PG Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "strong", 113);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "li", 111)(51, "span", 112);
    \u0275\u0275text(52, "Assigned Room:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 114);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "li", 111)(56, "span", 112);
    \u0275\u0275text(57, "Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "li", 111)(61, "span", 112);
    \u0275\u0275text(62, "Landlord / Caretaker:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span");
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "li", 115)(66, "span", 112);
    \u0275\u0275text(67, "Landlord WhatsApp:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 116);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(70, "div", 47)(71, "div", 117)(72, "a", 118)(73, "div", 119)(74, "div", 15);
    \u0275\u0275element(75, "i", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div")(77, "h5", 121);
    \u0275\u0275text(78, "Razorpay Online Rent Gateway");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span", 39);
    \u0275\u0275text(80, "Pay monthly rent via UPI (GPay, PhonePe), Cards or NetBanking.");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(81, "div", 117)(82, "a", 122)(83, "div", 119)(84, "div", 30);
    \u0275\u0275element(85, "i", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div")(87, "h5", 121);
    \u0275\u0275text(88, "Service & Maintenance Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "span", 39);
    \u0275\u0275text(90, "Report Wi-Fi, Food, Water, or Cleaning issues directly to management.");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Welcome, ", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.name) || "Resident", "! ");
    \u0275\u0275advance(19);
    \u0275\u0275property("ngClass", (ctx_r1.tenantRentData == null ? null : ctx_r1.tenantRentData.rent_status) === "paid" ? "bg-success text-white" : "bg-danger text-white");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.tenantRentData == null ? null : ctx_r1.tenantRentData.rent_status) === "paid" ? "PAID / CLEARED \u2705" : "PENDING PAYMENT \u26A0\uFE0F", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u20B9", (ctx_r1.tenantRentData == null ? null : ctx_r1.tenantRentData.monthly_rent) ? (+(ctx_r1.tenantRentData == null ? null : ctx_r1.tenantRentData.monthly_rent)).toLocaleString("en-IN") : "8,000", " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ctx_r1.tenantRentData == null ? null : ctx_r1.tenantRentData.rent_status) !== "paid" ? 33 : 34);
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate((ctx_r1.tenantRentData == null ? null : ctx_r1.tenantRentData.pg_name) || "PG Residency");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Room ", (ctx_r1.tenantRentData == null ? null : ctx_r1.tenantRentData.room_number) || "-", "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.tenantRentData == null ? null : ctx_r1.tenantRentData.pg_location) || "Noida");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.tenantRentData == null ? null : ctx_r1.tenantRentData.owner_name) || "Office Desk");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.tenantRentData == null ? null : ctx_r1.tenantRentData.owner_phone) || "-");
  }
}
var DashboardComponent = class _DashboardComponent {
  api;
  GF;
  userRole = "owner";
  currentUser = null;
  // Owner dashboard metrics
  property_id = [];
  total_tenant = 0;
  total_complaints = 0;
  total_pending_rent = 0;
  // count of tenants pending
  total_paid_rent = 0;
  // count of tenants paid
  pending_amount = 0;
  // ₹ amount pending
  paid_amount = 0;
  // ₹ amount collected
  total_pending_complaints = 0;
  total_rooms = 0;
  total_rooms_available = 0;
  room_pi_data = [{ id: 0, pg_name: "", total_rooms: 0, filled_rooms: 0 }];
  // Owner rent collection breakdown
  allTenantsList = [];
  paidTenantsList = [];
  pendingTenantsList = [];
  rentFilterTab = "all";
  loadingRentSummary = false;
  // Tenant dashboard data
  tenantRentData = null;
  tenantTransactions = [];
  loadingTenantData = false;
  constructor(api, GF) {
    this.api = api;
    this.GF = GF;
  }
  chartOptions = {
    series: [10, 10],
    chart: {
      type: "donut",
      width: 280
    },
    colors: ["#10b981", "#f43f5e"],
    labels: ["Paid Rent", "Pending Rent"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 260
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };
  ngOnInit() {
    this.currentUser = this.GF.getUser();
    this.userRole = this.GF.getUserRole() || "owner";
    if (this.userRole === "tenant") {
      this.loadTenantDashboard();
    } else {
      this.getProperty();
      this.loadOwnerRentSummary();
    }
  }
  // --- TENANT DASHBOARD METHODS ---
  loadTenantDashboard() {
    this.loadingTenantData = true;
    this.api.postApi("tenant-rent-info", {}).subscribe({
      next: (res) => {
        this.loadingTenantData = false;
        if (res.status) {
          this.tenantRentData = res.tenant;
          this.tenantTransactions = res.transactions || [];
        }
      },
      error: () => {
        this.loadingTenantData = false;
      }
    });
  }
  chatWithLandlord() {
    const phone = this.tenantRentData?.owner_phone;
    if (!phone) {
      this.GF.showToast("Landlord phone number is not available", "warning");
      return;
    }
    const message = `Hi! I am ${this.tenantRentData?.name} from Room ${this.tenantRentData?.room_number} (${this.tenantRentData?.pg_name}). I had a query regarding my PG stay.`;
    this.GF.openWhatsApp(phone, message);
  }
  // --- OWNER DASHBOARD METHODS ---
  getProperty() {
    this.api.postApi("property-data", {}).subscribe({
      next: (res) => {
        if (res.status && Array.isArray(res.data)) {
          this.property_id = res.data.map((ele) => ele.id);
          this.getPgDetails();
        }
      },
      error: (err) => {
        this.GF.showToast(err.error?.message || "Error fetching properties", "danger");
      }
    });
  }
  getPgDetails() {
    this.api.postApi("client-dashboard-data", { properties: this.property_id }).subscribe({
      next: (res) => {
        if (res.status) {
          this.total_tenant = res.total_tenant || 0;
          this.total_complaints = res.total_complaints || 0;
          this.total_pending_rent = res.total_pending_rent || 0;
          this.total_paid_rent = res.total_paid_rent || 0;
          this.pending_amount = res.pending_amount || 0;
          this.paid_amount = res.paid_amount || 0;
          this.total_pending_complaints = res.total_pending_complaints || 0;
          this.total_rooms = res.total_rooms || 0;
          this.total_rooms_available = res.total_rooms_available || 0;
          this.room_pi_data = res.room_pi_data || [];
          this.chartOptions = __spreadProps(__spreadValues({}, this.chartOptions), {
            series: [this.total_paid_rent, this.total_pending_rent]
          });
        }
      },
      error: (err) => {
        this.GF.showToast(err.error?.message || "Error fetching dashboard metrics", "danger");
      }
    });
  }
  loadOwnerRentSummary() {
    this.loadingRentSummary = true;
    this.api.postApi("owner-rent-summary", {}).subscribe({
      next: (res) => {
        this.loadingRentSummary = false;
        if (res.status) {
          this.paidTenantsList = res.paid_tenants || [];
          this.pendingTenantsList = res.pending_tenants || [];
          this.allTenantsList = [...this.pendingTenantsList, ...this.paidTenantsList];
        }
      },
      error: () => {
        this.loadingRentSummary = false;
      }
    });
  }
  get filteredTenants() {
    if (this.rentFilterTab === "paid")
      return this.paidTenantsList;
    if (this.rentFilterTab === "pending")
      return this.pendingTenantsList;
    return this.allTenantsList;
  }
  // Send WhatsApp Reminder to Tenant
  sendWhatsAppReminder(tenant) {
    if (tenant.whatsapp_link) {
      window.open(tenant.whatsapp_link, "_blank");
      return;
    }
    const rentAmt = Number(tenant.monthly_rent || 8e3).toLocaleString("en-IN");
    const message = `Hi ${tenant.name}! \u{1F44B}

This is a friendly reminder from *${tenant.pg_name || "PG Management"}*.
Your monthly room rent of *\u20B9${rentAmt}* for *Room ${tenant.room_number || "-"}* is currently *PENDING*.

Please log in to your tenant portal to pay securely online via Razorpay/UPI.
Thank you! \u{1F3E0}`;
    this.GF.openWhatsApp(tenant.phone, message);
  }
  // Send WhatsApp Receipt Confirmation to Tenant
  sendWhatsAppReceipt(tenant) {
    const rentAmt = Number(tenant.monthly_rent || 8e3).toLocaleString("en-IN");
    const message = `*\u{1F3E0} PG Rent Payment Receipt*

Tenant Name: ${tenant.name}
PG: ${tenant.pg_name || "PG Residency"}
Room: ${tenant.room_number || "-"}
Amount Paid: \u20B9${rentAmt}
Status: PAID (Confirmed) \u2705
Date: ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}

Thank you for paying on time! \u{1F60A}`;
    this.GF.openWhatsApp(tenant.phone, message);
  }
  // Owner manually marks tenant rent as paid or pending
  toggleTenantRentStatus(tenant, newStatus) {
    this.api.postApi("toggle-rent-status", {
      tenant_id: tenant.id,
      rent_status: newStatus,
      payment_method: "Cash",
      amount: tenant.monthly_rent
    }).subscribe({
      next: (res) => {
        if (res.status) {
          this.GF.showToast(res.message, "success");
          this.getPgDetails();
          this.loadOwnerRentSummary();
        } else {
          this.GF.showToast(res.message, "danger");
        }
      },
      error: (err) => {
        this.GF.showToast(err.error?.message || "Error updating rent status", "danger");
      }
    });
  }
  refreshAll() {
    if (this.userRole === "tenant") {
      this.loadTenantDashboard();
    } else {
      this.getProperty();
      this.loadOwnerRentSummary();
    }
    this.GF.showToast("Dashboard data refreshed", "info");
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(GlobalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 3, vars: 2, consts: [[1, "app-page-container"], [1, "app-page-header"], [1, "app-page-title-group"], [1, "app-page-title"], [1, "bi", "bi-grid-1x2-fill", "text-primary"], [1, "app-page-subtitle"], [1, "app-page-actions"], [1, "btn", "btn-sm", "btn-primary", "d-flex", "align-items-center", "gap-1", "shadow-sm", 3, "click"], [1, "bi", "bi-arrow-clockwise"], [1, "row", "g-3", "mb-4"], [1, "col-xl-3", "col-md-6"], [1, "my-dashboard-card", "d-flex", "align-items-center", "justify-content-between", "p-3", "rounded-4", "shadow-sm", "card-theme-color", "border-0"], [1, "fs-11", "text-muted", "fw-semibold", "text-uppercase", "letter-spacing-1", "d-block", "mb-1"], [1, "fw-bold", "mb-0", "text-heading"], [1, "fs-11", "text-muted"], [1, "icon-bubble", 2, "background-color", "var(--primary-light)", "color", "var(--primary-color)"], [1, "bi", "bi-people-fill", "fs-4"], [1, "my-dashboard-card", "d-flex", "align-items-center", "justify-content-between", "p-3", "rounded-4", "shadow-sm", "card-theme-color", "border-0", "border-start", "border-success", "border-4"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "fs-11", "text-success", "fw-bold", "text-uppercase", "letter-spacing-1"], [1, "badge", "bg-success-subtle", "text-success", "fs-10", "px-2", "py-0.5", "rounded-pill"], [1, "bi", "bi-check-circle-fill", "me-1"], [1, "fw-bold", "mb-0", "text-success"], [1, "icon-bubble", 2, "background-color", "var(--success-light)", "color", "var(--success-color)"], [1, "bi", "bi-cash-stack", "fs-4"], [1, "my-dashboard-card", "d-flex", "align-items-center", "justify-content-between", "p-3", "rounded-4", "shadow-sm", "card-theme-color", "border-0", "border-start", "border-danger", "border-4"], [1, "fs-11", "text-danger", "fw-bold", "text-uppercase", "letter-spacing-1"], [1, "badge", "bg-danger-subtle", "text-danger", "fs-10", "px-2", "py-0.5", "rounded-pill"], [1, "bi", "bi-exclamation-circle-fill", "me-1"], [1, "fw-bold", "mb-0", "text-danger"], [1, "icon-bubble", 2, "background-color", "var(--danger-light)", "color", "var(--danger-color)"], [1, "bi", "bi-clock-history", "fs-4"], [1, "fw-bold", "mb-0", "text-info"], [1, "icon-bubble", 2, "background-color", "var(--info-light)", "color", "var(--info-color)"], [1, "bi", "bi-door-open-fill", "fs-4"], [1, "card", "border-0", "shadow-sm", "rounded-4", "overflow-hidden", "card-theme-color", "mb-4"], [1, "card-header", "bg-transparent", "border-0", "pt-4", "px-4", "pb-3", "d-flex", "flex-column", "flex-md-row", "justify-content-between", "align-items-md-center", "gap-3"], [1, "fw-bold", "fs-15", "text-heading", "mb-1", "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-cash-coin", "text-success"], [1, "fs-12", "text-muted"], [1, "dashboard-filter-pills"], ["type", "button", 1, "dashboard-filter-btn", 3, "click"], [1, "bi", "bi-exclamation-circle-fill"], [1, "bi", "bi-check-circle-fill"], [1, "card-body", "p-0"], [1, "text-center", "py-5"], [1, "table-responsive"], [1, "row", "g-3"], [1, "col-lg-5"], [1, "card", "border-0", "shadow-sm", "rounded-4", "p-4", "card-theme-color", "h-100"], [1, "fw-bold", "fs-14", "text-heading", "mb-3", "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-pie-chart-fill", "text-primary"], [1, "d-flex", "justify-content-center", "py-2"], [3, "series", "chart", "labels", "responsive"], [1, "d-flex", "justify-content-around", "mt-3", "pt-2", "border-top", "fs-12"], [1, "text-center"], [1, "text-muted", "d-block", "fs-11"], [1, "text-success", "fs-14"], [1, "text-danger", "fs-14"], [1, "text-primary", "fs-14"], [1, "col-lg-7"], [1, "card", "border-0", "shadow-sm", "rounded-4", "p-4", "card-theme-color", "h-100", "d-flex", "flex-column", "justify-content-between"], [1, "bi", "bi-lightning-charge-fill", "text-warning"], [1, "row", "g-2", "mb-3"], [1, "col-sm-6"], ["routerLink", "/tenant", 1, "card", "border", "p-3", "text-decoration-none", "text-heading", "h-100", "rounded-3", "hover-shadow", "card-theme-color"], [1, "bi", "bi-person-plus-fill", "text-primary", "fs-5"], [1, "fs-12"], ["routerLink", "/complaints", 1, "card", "border", "p-3", "text-decoration-none", "text-heading", "h-100", "rounded-3", "hover-shadow", "card-theme-color"], [1, "bi", "bi-exclamation-octagon-fill", "text-danger", "fs-5"], [1, "p-3", "bg-subtle-box", "rounded-3", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-shield-check", "text-success", "fs-4"], [1, "fs-12", "d-block"], [1, "fs-10", "text-muted"], [1, "badge", "bg-success", "text-white", "px-2", "py-1", "fs-10"], [1, "bi", "bi-check2-circle", "fs-1", "text-success", "opacity-50"], [1, "fs-13", "text-muted", "mt-2", "mb-0"], [1, "table", "table-hover", "align-middle", "mb-0", "fs-12"], [1, "fs-11", "text-uppercase"], [1, "ps-4"], [1, "text-end", "pe-4"], [1, "rounded-circle", "bg-primary-subtle", "text-primary", "fw-bold", "d-flex", "align-items-center", "justify-content-center", 2, "width", "32px", "height", "32px", "font-size", "11px"], [1, "fw-semibold", "text-heading"], [1, "badge", "badge-subtle", "me-1"], [1, "text-muted", "fw-mono"], [1, "fw-bold", "text-heading"], [1, "badge", "bg-success-subtle", "text-success", "border", "border-success-subtle", "px-2", "py-1"], [1, "badge", "bg-danger-subtle", "text-danger", "border", "border-danger-subtle", "px-2", "py-1"], [1, "d-inline-flex", "align-items-center", "gap-2"], [1, "bi", "bi-exclamation-triangle-fill", "me-1"], ["title", "Send WhatsApp rent reminder", 1, "btn", "btn-sm", "btn-success", "rounded-pill", "px-3", "py-1", "fs-11", "d-flex", "align-items-center", "gap-1", "shadow-sm", 3, "click"], [1, "bi", "bi-whatsapp"], ["title", "Tenant paid in cash", 1, "btn", "btn-sm", "btn-outline-secondary", "rounded-pill", "px-2", "py-1", "fs-11", 3, "click"], ["title", "Send rent payment receipt on WhatsApp", 1, "btn", "btn-sm", "btn-outline-success", "rounded-pill", "px-3", "py-1", "fs-11", "d-flex", "align-items-center", "gap-1", 3, "click"], ["title", "Reset status to pending", 1, "btn-table-reset", 3, "click"], [1, "bi", "bi-house-door-fill", "text-primary"], [1, "btn", "btn-sm", "btn-outline-success", "d-flex", "align-items-center", "gap-2", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "fs-11", "text-muted", "fw-bold", "text-uppercase", "letter-spacing-1"], [1, "badge", "rounded-pill", "px-3", "py-1.5", "fs-11", 3, "ngClass"], [1, "my-3"], [1, "fs-12", "text-muted", "fw-medium", "d-block"], [1, "display-6", "fw-bold", "text-primary", "mb-1"], [1, "fs-14", "text-muted", "fw-normal"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-3", "mt-3", "pt-3", "border-top"], ["routerLink", "/pay-rent", 1, "btn", "btn-primary", "btn-lg", "rounded-pill", "px-4", "py-2", "d-flex", "align-items-center", "gap-2", "shadow"], ["routerLink", "/pay-rent", 1, "btn", "btn-success", "btn-lg", "rounded-pill", "px-4", "py-2", "d-flex", "align-items-center", "gap-2", "shadow-sm"], [1, "btn", "btn-outline-success", "rounded-pill", "px-3", "py-2", "d-flex", "align-items-center", "gap-2", 3, "click"], [1, "bi", "bi-geo-alt-fill", "text-primary"], [1, "list-unstyled", "mb-0", "d-flex", "flex-column", "gap-2", "fs-12"], [1, "d-flex", "justify-content-between", "border-bottom", "pb-2"], [1, "text-muted"], [1, "text-heading"], [1, "badge", "bg-primary-subtle", "text-primary", "fw-bold", "px-2", "py-1"], [1, "d-flex", "justify-content-between"], [1, "text-success", "fw-bold"], [1, "col-md-6"], ["routerLink", "/pay-rent", 1, "card", "border-0", "shadow-sm", "rounded-4", "p-4", "text-decoration-none", "text-heading", "card-theme-color", "h-100", "hover-shadow"], [1, "d-flex", "align-items-center", "gap-3"], [1, "bi", "bi-credit-card-2-front-fill", "fs-3"], [1, "fw-bold", "fs-14", "mb-1"], ["routerLink", "/complaints", 1, "card", "border-0", "shadow-sm", "rounded-4", "p-4", "text-decoration-none", "text-heading", "card-theme-color", "h-100", "hover-shadow"], [1, "bi", "bi-exclamation-octagon-fill", "fs-3"], [1, "fw-semibold"], [1, "bi", "bi-receipt", "me-1"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, DashboardComponent_Conditional_1_Template, 143, 28)(2, DashboardComponent_Conditional_2_Template, 91, 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.userRole === "owner" ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.userRole === "tenant" ? 2 : -1);
    }
  }, dependencies: [CommonModule, NgClass, DecimalPipe, FormsModule, RouterLink, ChartComponent], styles: ["\n\n.chart-container[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 320px;\n  display: flex;\n  justify-content: center;\n}\n.text-heading[_ngcontent-%COMP%] {\n  color: var(--text-heading-color);\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, FormsModule, RouterLink, ChartComponent], template: `<div class="app-page-container">

  <!-- ========================================== -->
  <!-- 1. PG OWNER DASHBOARD VIEW                 -->
  <!-- ========================================== -->
  @if (userRole === 'owner') {

    <!-- Common Page Header -->
    <div class="app-page-header">
      <div class="app-page-title-group">
        <h2 class="app-page-title">
          <i class="bi bi-grid-1x2-fill text-primary"></i>
          Landlord Dashboard Overview
        </h2>
        <p class="app-page-subtitle">Real-time rent collections, occupancy metrics, and tenant WhatsApp alerts.</p>
      </div>
      <div class="app-page-actions">
        <button class="btn btn-sm btn-primary d-flex align-items-center gap-1 shadow-sm" (click)="refreshAll()">
          <i class="bi bi-arrow-clockwise"></i>
          <span>Refresh Data</span>
        </button>
      </div>
    </div>

    <!-- KPI Metric Cards Grid -->
    <div class="row g-3 mb-4">
      
      <!-- Total Tenants -->
      <div class="col-xl-3 col-md-6">
        <div class="my-dashboard-card d-flex align-items-center justify-content-between p-3 rounded-4 shadow-sm card-theme-color border-0">
          <div>
            <span class="fs-11 text-muted fw-semibold text-uppercase letter-spacing-1 d-block mb-1">Total Tenants</span>
            <h3 class="fw-bold mb-0 text-heading">{{ total_tenant }}</h3>
            <span class="fs-11 text-muted">Across all your active PGs</span>
          </div>
          <div class="icon-bubble" style="background-color: var(--primary-light); color: var(--primary-color);">
            <i class="bi bi-people-fill fs-4"></i>
          </div>
        </div>
      </div>

      <!-- Tenants Paid Rent -->
      <div class="col-xl-3 col-md-6">
        <div class="my-dashboard-card d-flex align-items-center justify-content-between p-3 rounded-4 shadow-sm card-theme-color border-0 border-start border-success border-4">
          <div>
            <div class="d-flex align-items-center gap-2 mb-1">
              <span class="fs-11 text-success fw-bold text-uppercase letter-spacing-1">Rent Paid</span>
              <span class="badge bg-success-subtle text-success fs-10 px-2 py-0.5 rounded-pill">
                <i class="bi bi-check-circle-fill me-1"></i>{{ total_paid_rent }} Tenants
              </span>
            </div>
            <h3 class="fw-bold mb-0 text-success">
              \u20B9{{ paid_amount.toLocaleString('en-IN') }}
            </h3>
            <span class="fs-11 text-muted">Collected for current cycle</span>
          </div>
          <div class="icon-bubble" style="background-color: var(--success-light); color: var(--success-color);">
            <i class="bi bi-cash-stack fs-4"></i>
          </div>
        </div>
      </div>

      <!-- Tenants Pending Rent (Unpaid) -->
      <div class="col-xl-3 col-md-6">
        <div class="my-dashboard-card d-flex align-items-center justify-content-between p-3 rounded-4 shadow-sm card-theme-color border-0 border-start border-danger border-4">
          <div>
            <div class="d-flex align-items-center gap-2 mb-1">
              <span class="fs-11 text-danger fw-bold text-uppercase letter-spacing-1">Rent Pending</span>
              <span class="badge bg-danger-subtle text-danger fs-10 px-2 py-0.5 rounded-pill">
                <i class="bi bi-exclamation-circle-fill me-1"></i>{{ total_pending_rent }} Unpaid
              </span>
            </div>
            <h3 class="fw-bold mb-0 text-danger">
              \u20B9{{ pending_amount.toLocaleString('en-IN') }}
            </h3>
            <span class="fs-11 text-muted">Awaiting collection</span>
          </div>
          <div class="icon-bubble" style="background-color: var(--danger-light); color: var(--danger-color);">
            <i class="bi bi-clock-history fs-4"></i>
          </div>
        </div>
      </div>

      <!-- Available Rooms -->
      <div class="col-xl-3 col-md-6">
        <div class="my-dashboard-card d-flex align-items-center justify-content-between p-3 rounded-4 shadow-sm card-theme-color border-0">
          <div>
            <span class="fs-11 text-muted fw-semibold text-uppercase letter-spacing-1 d-block mb-1">Occupancy & Rooms</span>
            <h3 class="fw-bold mb-0 text-info">{{ total_rooms_available }} / {{ total_rooms }}</h3>
            <span class="fs-11 text-muted">Available / Total Rooms</span>
          </div>
          <div class="icon-bubble" style="background-color: var(--info-light); color: var(--info-color);">
            <i class="bi bi-door-open-fill fs-4"></i>
          </div>
        </div>
      </div>

    </div>

    <!-- Rent Collection Breakdown & WhatsApp Reminders Table -->
    <div class="card border-0 shadow-sm rounded-4 overflow-hidden card-theme-color mb-4">
      <div class="card-header bg-transparent border-0 pt-4 px-4 pb-3 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
        <div>
          <h5 class="fw-bold fs-15 text-heading mb-1 d-flex align-items-center gap-2">
            <i class="bi bi-cash-coin text-success"></i>
            Tenant Rent Status & WhatsApp Reminders
          </h5>
          <span class="fs-12 text-muted">Review who has paid their rent and instantly ping unpaid tenants via WhatsApp.</span>
        </div>

        <!-- Filter Pills: All / Pending / Paid (High Contrast in Light & Dark Mode) -->
        <div class="dashboard-filter-pills">
          <button type="button" class="dashboard-filter-btn"
                  [class.active-all]="rentFilterTab === 'all'"
                  (click)="rentFilterTab = 'all'">
            All Tenants ({{ allTenantsList.length }})
          </button>
          <button type="button" class="dashboard-filter-btn"
                  [class.active-pending]="rentFilterTab === 'pending'"
                  (click)="rentFilterTab = 'pending'">
            <i class="bi bi-exclamation-circle-fill"></i>
            Unpaid / Pending ({{ pendingTenantsList.length }})
          </button>
          <button type="button" class="dashboard-filter-btn"
                  [class.active-paid]="rentFilterTab === 'paid'"
                  (click)="rentFilterTab = 'paid'">
            <i class="bi bi-check-circle-fill"></i>
            Paid ({{ paidTenantsList.length }})
          </button>
        </div>
      </div>

      <div class="card-body p-0">
        @if (filteredTenants.length === 0) {
          <div class="text-center py-5">
            <i class="bi bi-check2-circle fs-1 text-success opacity-50"></i>
            <p class="fs-13 text-muted mt-2 mb-0">No tenants found in this category.</p>
          </div>
        } @else {
          <div class="table-responsive">
            <table class="table table-hover align-middle mb-0 fs-12">
              <thead class="fs-11 text-uppercase">
                <tr>
                  <th class="ps-4">Tenant Name</th>
                  <th>Room & PG</th>
                  <th>Phone Number</th>
                  <th>Monthly Rent</th>
                  <th>Rent Status</th>
                  <th class="text-end pe-4">Actions / WhatsApp</th>
                </tr>
              </thead>
              <tbody>
                @for (t of filteredTenants; track t.id) {
                  <tr>
                    <!-- Name & Avatar -->
                    <td class="ps-4">
                      <div class="d-flex align-items-center gap-2">
                        <div class="rounded-circle bg-primary-subtle text-primary fw-bold d-flex align-items-center justify-content-center" style="width: 32px; height: 32px; font-size: 11px;">
                          {{ t.name ? t.name.substring(0,2).toUpperCase() : 'TN' }}
                        </div>
                        <div>
                          <div class="fw-semibold text-heading">{{ t.name }}</div>
                          <div class="fs-10 text-muted">{{ t.email }}</div>
                        </div>
                      </div>
                    </td>

                    <!-- Room & PG -->
                    <td>
                      <span class="badge badge-subtle me-1">Room {{ t.room_number || '-' }}</span>
                      <span class="fs-11 text-muted">{{ t.pg_name }}</span>
                    </td>

                    <!-- Phone -->
                    <td class="text-muted fw-mono">
                      {{ t.phone }}
                    </td>

                    <!-- Monthly Rent -->
                    <td class="fw-bold text-heading">
                      \u20B9{{ (+t.monthly_rent).toLocaleString('en-IN') }}
                    </td>

                    <!-- Status -->
                    <td>
                      @if (t.rent_status === 'paid') {
                        <span class="badge bg-success-subtle text-success border border-success-subtle px-2 py-1">
                          <i class="bi bi-check-circle-fill me-1"></i> PAID
                        </span>
                      } @else {
                        <span class="badge bg-danger-subtle text-danger border border-danger-subtle px-2 py-1">
                          <i class="bi bi-exclamation-triangle-fill me-1"></i> PENDING
                        </span>
                      }
                    </td>

                    <!-- Action Buttons -->
                    <td class="text-end pe-4">
                      <div class="d-inline-flex align-items-center gap-2">
                        @if (t.rent_status !== 'paid') {
                          <!-- Send WhatsApp Reminder Button -->
                          <button class="btn btn-sm btn-success rounded-pill px-3 py-1 fs-11 d-flex align-items-center gap-1 shadow-sm"
                                  (click)="sendWhatsAppReminder(t)"
                                  title="Send WhatsApp rent reminder">
                            <i class="bi bi-whatsapp"></i>
                            <span>Remind on WhatsApp</span>
                          </button>
                          
                          <!-- Mark as Paid via Cash -->
                          <button class="btn btn-sm btn-outline-secondary rounded-pill px-2 py-1 fs-11"
                                  (click)="toggleTenantRentStatus(t, 'paid')"
                                  title="Tenant paid in cash">
                            Mark Paid
                          </button>
                        } @else {
                          <!-- Send Receipt on WhatsApp -->
                          <button class="btn btn-sm btn-outline-success rounded-pill px-3 py-1 fs-11 d-flex align-items-center gap-1"
                                  (click)="sendWhatsAppReceipt(t)"
                                  title="Send rent payment receipt on WhatsApp">
                            <i class="bi bi-whatsapp"></i>
                            <span>Send Receipt</span>
                          </button>

                          <!-- Reset to Pending -->
                          <button class="btn-table-reset"
                                  (click)="toggleTenantRentStatus(t, 'pending')"
                                  title="Reset status to pending">
                            Reset
                          </button>
                        }
                      </div>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      </div>
    </div>

    <!-- Secondary Charts & Analytics Row -->
    <div class="row g-3">
      <!-- Rent Status Donut Breakdown -->
      <div class="col-lg-5">
        <div class="card border-0 shadow-sm rounded-4 p-4 card-theme-color h-100">
          <h5 class="fw-bold fs-14 text-heading mb-3 d-flex align-items-center gap-2">
            <i class="bi bi-pie-chart-fill text-primary"></i>
            Rent Collection Ratio
          </h5>
          <div class="d-flex justify-content-center py-2">
            <apx-chart
              [series]="chartOptions.series"
              [chart]="chartOptions.chart"
              [labels]="chartOptions.labels"
              [responsive]="chartOptions.responsive">
            </apx-chart>
          </div>
          <div class="d-flex justify-content-around mt-3 pt-2 border-top fs-12">
            <div class="text-center">
              <span class="text-muted d-block fs-11">Paid Tenants</span>
              <strong class="text-success fs-14">{{ total_paid_rent }}</strong>
            </div>
            <div class="text-center">
              <span class="text-muted d-block fs-11">Pending Tenants</span>
              <strong class="text-danger fs-14">{{ total_pending_rent }}</strong>
            </div>
            <div class="text-center">
              <span class="text-muted d-block fs-11">Collection %</span>
              <strong class="text-primary fs-14">
                {{ total_tenant > 0 ? (total_paid_rent / total_tenant * 100 | number:'1.0-0') : '0' }}%
              </strong>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions & Complaints Card -->
      <div class="col-lg-7">
        <div class="card border-0 shadow-sm rounded-4 p-4 card-theme-color h-100 d-flex flex-column justify-content-between">
          <div>
            <h5 class="fw-bold fs-14 text-heading mb-3 d-flex align-items-center gap-2">
              <i class="bi bi-lightning-charge-fill text-warning"></i>
              Quick Actions & Maintenance
            </h5>

            <div class="row g-2 mb-3">
              <div class="col-sm-6">
                <a routerLink="/tenant" class="card border p-3 text-decoration-none text-heading h-100 rounded-3 hover-shadow card-theme-color">
                  <div class="d-flex align-items-center gap-2 mb-1">
                    <i class="bi bi-person-plus-fill text-primary fs-5"></i>
                    <strong class="fs-12">Add New Tenant</strong>
                  </div>
                  <span class="fs-11 text-muted">Register resident, upload KYC and assign room.</span>
                </a>
              </div>
              <div class="col-sm-6">
                <a routerLink="/complaints" class="card border p-3 text-decoration-none text-heading h-100 rounded-3 hover-shadow card-theme-color">
                  <div class="d-flex align-items-center gap-2 mb-1">
                    <i class="bi bi-exclamation-octagon-fill text-danger fs-5"></i>
                    <strong class="fs-12">Review Complaints ({{ total_pending_complaints }})</strong>
                  </div>
                  <span class="fs-11 text-muted">Resolve open Wi-Fi, Food, and plumbing issues.</span>
                </a>
              </div>
            </div>
          </div>

          <div class="p-3 bg-subtle-box rounded-3 d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-shield-check text-success fs-4"></i>
              <div>
                <strong class="fs-12 d-block">Razorpay Online Payments Enabled</strong>
                <span class="fs-10 text-muted">Tenants can directly clear rent from their resident panel.</span>
              </div>
            </div>
            <span class="badge bg-success text-white px-2 py-1 fs-10">Active</span>
          </div>
        </div>
      </div>
    </div>

  }

  <!-- ========================================== -->
  <!-- 2. TENANT RESIDENT DASHBOARD VIEW          -->
  <!-- ========================================== -->
  @if (userRole === 'tenant') {

    <!-- Tenant Page Header -->
    <div class="app-page-header">
      <div class="app-page-title-group">
        <h2 class="app-page-title">
          <i class="bi bi-house-door-fill text-primary"></i>
          Welcome, {{ currentUser?.name || 'Resident' }}!
        </h2>
        <p class="app-page-subtitle">Manage your room, track monthly rent, and pay securely via Razorpay.</p>
      </div>
      <div class="app-page-actions">
        <button class="btn btn-sm btn-outline-success d-flex align-items-center gap-2" (click)="chatWithLandlord()">
          <i class="bi bi-whatsapp"></i>
          <span>WhatsApp Landlord</span>
        </button>
        <button class="btn btn-sm btn-primary d-flex align-items-center gap-1 shadow-sm" (click)="loadTenantDashboard()">
          <i class="bi bi-arrow-clockwise"></i>
          <span>Refresh</span>
        </button>
      </div>
    </div>

    <!-- Main Rent Card for Tenant -->
    <div class="row g-3 mb-4">
      
      <!-- Primary Rent Status Box -->
      <div class="col-lg-7">
        <div class="card border-0 shadow-sm rounded-4 p-4 card-theme-color h-100 d-flex flex-column justify-content-between">
          <div>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <span class="fs-11 text-muted fw-bold text-uppercase letter-spacing-1">Current Billing Cycle</span>
              <span class="badge rounded-pill px-3 py-1.5 fs-11"
                    [ngClass]="tenantRentData?.rent_status === 'paid' ? 'bg-success text-white' : 'bg-danger text-white'">
                {{ tenantRentData?.rent_status === 'paid' ? 'PAID / CLEARED \u2705' : 'PENDING PAYMENT \u26A0\uFE0F' }}
              </span>
            </div>

            <div class="my-3">
              <span class="fs-12 text-muted fw-medium d-block">Monthly Room Rent</span>
              <h1 class="display-6 fw-bold text-primary mb-1">
                \u20B9{{ tenantRentData?.monthly_rent ? (+tenantRentData?.monthly_rent).toLocaleString('en-IN') : '8,000' }}
                <span class="fs-14 text-muted fw-normal">/ month</span>
              </h1>
            </div>
          </div>

          <div class="d-flex flex-wrap align-items-center gap-3 mt-3 pt-3 border-top">
            @if (tenantRentData?.rent_status !== 'paid') {
              <a routerLink="/pay-rent" class="btn btn-primary btn-lg rounded-pill px-4 py-2 d-flex align-items-center gap-2 shadow">
                <i class="bi bi-lightning-charge-fill text-warning"></i>
                <span class="fw-semibold">Pay via Razorpay Now</span>
              </a>
            } @else {
              <a routerLink="/pay-rent" class="btn btn-success btn-lg rounded-pill px-4 py-2 d-flex align-items-center gap-2 shadow-sm">
                <i class="bi bi-receipt me-1"></i>
                <span class="fw-semibold">View Payment Receipt</span>
              </a>
            }

            <button class="btn btn-outline-success rounded-pill px-3 py-2 d-flex align-items-center gap-2"
                    (click)="chatWithLandlord()">
              <i class="bi bi-whatsapp"></i>
              <span>Chat with Landlord</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Stay Details Card -->
      <div class="col-lg-5">
        <div class="card border-0 shadow-sm rounded-4 p-4 card-theme-color h-100">
          <h5 class="fw-bold fs-14 text-heading mb-3 d-flex align-items-center gap-2">
            <i class="bi bi-geo-alt-fill text-primary"></i>
            Room & Property Details
          </h5>

          <ul class="list-unstyled mb-0 d-flex flex-column gap-2 fs-12">
            <li class="d-flex justify-content-between border-bottom pb-2">
              <span class="text-muted">PG Name:</span>
              <strong class="text-heading">{{ tenantRentData?.pg_name || 'PG Residency' }}</strong>
            </li>
            <li class="d-flex justify-content-between border-bottom pb-2">
              <span class="text-muted">Assigned Room:</span>
              <span class="badge bg-primary-subtle text-primary fw-bold px-2 py-1">Room {{ tenantRentData?.room_number || '-' }}</span>
            </li>
            <li class="d-flex justify-content-between border-bottom pb-2">
              <span class="text-muted">Location:</span>
              <span>{{ tenantRentData?.pg_location || 'Noida' }}</span>
            </li>
            <li class="d-flex justify-content-between border-bottom pb-2">
              <span class="text-muted">Landlord / Caretaker:</span>
              <span>{{ tenantRentData?.owner_name || 'Office Desk' }}</span>
            </li>
            <li class="d-flex justify-content-between">
              <span class="text-muted">Landlord WhatsApp:</span>
              <span class="text-success fw-bold">{{ tenantRentData?.owner_phone || '-' }}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>

    <!-- Quick Navigation Tiles for Tenant -->
    <div class="row g-3">
      <div class="col-md-6">
        <a routerLink="/pay-rent" class="card border-0 shadow-sm rounded-4 p-4 text-decoration-none text-heading card-theme-color h-100 hover-shadow">
          <div class="d-flex align-items-center gap-3">
            <div class="icon-bubble" style="background-color: var(--primary-light); color: var(--primary-color);">
              <i class="bi bi-credit-card-2-front-fill fs-3"></i>
            </div>
            <div>
              <h5 class="fw-bold fs-14 mb-1">Razorpay Online Rent Gateway</h5>
              <span class="fs-12 text-muted">Pay monthly rent via UPI (GPay, PhonePe), Cards or NetBanking.</span>
            </div>
          </div>
        </a>
      </div>

      <div class="col-md-6">
        <a routerLink="/complaints" class="card border-0 shadow-sm rounded-4 p-4 text-decoration-none text-heading card-theme-color h-100 hover-shadow">
          <div class="d-flex align-items-center gap-3">
            <div class="icon-bubble" style="background-color: var(--danger-light); color: var(--danger-color);">
              <i class="bi bi-exclamation-octagon-fill fs-3"></i>
            </div>
            <div>
              <h5 class="fw-bold fs-14 mb-1">Service & Maintenance Requests</h5>
              <span class="fs-12 text-muted">Report Wi-Fi, Food, Water, or Cleaning issues directly to management.</span>
            </div>
          </div>
        </a>
      </div>
    </div>

  }

</div>`, styles: ["/* src/app/pages/dashboard/dashboard.component.css */\n.chart-container {\n  width: 100%;\n  min-height: 320px;\n  display: flex;\n  justify-content: center;\n}\n.text-heading {\n  color: var(--text-heading-color);\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: GlobalService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/pages/dashboard/dashboard.component.ts", lineNumber: 34 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-JDFONHGW.js.map
