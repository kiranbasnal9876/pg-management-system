import {
  ApiService,
  FormsModule
} from "./chunk-SD6QMD7Q.js";
import {
  CommonModule,
  DatePipe,
  GlobalService,
  NgClass
} from "./chunk-E5VR6ZL4.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TFR4PE7B.js";
import "./chunk-Y5RQAIA6.js";

// src/app/pages/pay-rent/pay-rent.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PayRentComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13)(2, "span", 14);
    \u0275\u0275text(3, "Loading rent details...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 15);
    \u0275\u0275text(5, "Loading your rent statement...");
    \u0275\u0275elementEnd()();
  }
}
function PayRentComponent_Conditional_18_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 58);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Processing...");
    \u0275\u0275elementEnd();
  }
}
function PayRentComponent_Conditional_18_Conditional_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 59);
    \u0275\u0275elementStart(1, "span", 60);
    \u0275\u0275text(2, "Pay via Razorpay");
    \u0275\u0275elementEnd();
  }
}
function PayRentComponent_Conditional_18_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function PayRentComponent_Conditional_18_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.initiateRazorpayPayment());
    });
    \u0275\u0275template(1, PayRentComponent_Conditional_18_Conditional_21_Conditional_1_Template, 3, 0)(2, PayRentComponent_Conditional_18_Conditional_21_Conditional_2_Template, 3, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.paying);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.paying ? 1 : 2);
  }
}
function PayRentComponent_Conditional_18_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "button", 61);
    \u0275\u0275listener("click", function PayRentComponent_Conditional_18_Conditional_22_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.shareReceiptOnWhatsApp());
    });
    \u0275\u0275element(2, "i", 8);
    \u0275\u0275elementStart(3, "span", 60);
    \u0275\u0275text(4, "Share Receipt");
    \u0275\u0275elementEnd()()();
  }
}
function PayRentComponent_Conditional_18_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275text(2, " All dues settled for this cycle ");
    \u0275\u0275elementEnd();
  }
}
function PayRentComponent_Conditional_18_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275text(2, " Please clear dues to avoid late fees ");
    \u0275\u0275elementEnd();
  }
}
function PayRentComponent_Conditional_18_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementStart(2, "p", 65);
    \u0275\u0275text(3, "No past payment transactions recorded yet.");
    \u0275\u0275elementEnd()();
  }
}
function PayRentComponent_Conditional_18_Conditional_78_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 71);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 72);
    \u0275\u0275element(7, "i", 73);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 41);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 74);
    \u0275\u0275element(14, "i", 75);
    \u0275\u0275text(15, " Paid ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 69)(17, "button", 76);
    \u0275\u0275listener("click", function PayRentComponent_Conditional_18_Conditional_78_For_18_Template_button_click_17_listener() {
      const txn_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.shareReceiptOnWhatsApp(txn_r6));
    });
    \u0275\u0275element(18, "i", 8);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Receipt");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const txn_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", txn_r6.transaction_id || "TXN-" + txn_r6.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u20B9", (+txn_r6.amount).toLocaleString("en-IN"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", txn_r6.payment_method || "Razorpay", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 4, txn_r6.payment_date, "dd MMM yyyy, hh:mm a"), " ");
  }
}
function PayRentComponent_Conditional_18_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "table", 66)(2, "thead", 67)(3, "tr")(4, "th", 68);
    \u0275\u0275text(5, "Transaction ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Date & Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 69);
    \u0275\u0275text(15, "Receipt");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, PayRentComponent_Conditional_18_Conditional_78_For_18_Template, 21, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.transactions);
  }
}
function PayRentComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "div", 19)(4, "span", 20);
    \u0275\u0275element(5, "i");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 21);
    \u0275\u0275element(8, "i", 22);
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "256-Bit SSL Encrypted");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 23)(12, "div", 24)(13, "div")(14, "span", 25);
    \u0275\u0275text(15, "Monthly Room Rent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h1", 26);
    \u0275\u0275text(17);
    \u0275\u0275elementStart(18, "span", 27);
    \u0275\u0275text(19, "/ month");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div");
    \u0275\u0275template(21, PayRentComponent_Conditional_18_Conditional_21_Template, 3, 2, "button", 28)(22, PayRentComponent_Conditional_18_Conditional_22_Template, 5, 0, "div", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 30)(24, "div", 29)(25, "span", 31);
    \u0275\u0275text(26, "RAZORPAY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 32);
    \u0275\u0275text(28, "Supported: UPI (GPay, PhonePe, Paytm), Visa/Mastercard, NetBanking, Wallets");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, PayRentComponent_Conditional_18_Conditional_29_Template, 3, 0, "span", 33)(30, PayRentComponent_Conditional_18_Conditional_30_Template, 3, 0, "span", 34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 35)(32, "div", 36)(33, "div")(34, "h5", 37);
    \u0275\u0275element(35, "i", 38);
    \u0275\u0275text(36, " Accommodation Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ul", 39)(38, "li", 40)(39, "span", 41);
    \u0275\u0275text(40, "PG Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 42);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "li", 40)(44, "span", 41);
    \u0275\u0275text(45, "Room Number:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 43);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "li", 40)(49, "span", 41);
    \u0275\u0275text(50, "Tenant Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 44);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "li", 40)(54, "span", 41);
    \u0275\u0275text(55, "Registered Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 44);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "li", 45)(59, "span", 41);
    \u0275\u0275text(60, "Landlord Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 46);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "div", 47)(64, "button", 48);
    \u0275\u0275listener("click", function PayRentComponent_Conditional_18_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.chatWithLandlord());
    });
    \u0275\u0275element(65, "i", 49);
    \u0275\u0275elementStart(66, "span", 50);
    \u0275\u0275text(67, "Chat with Landlord on WhatsApp");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(68, "div", 51)(69, "div", 52)(70, "div")(71, "h5", 53);
    \u0275\u0275element(72, "i", 54);
    \u0275\u0275text(73, " Rent Payment History ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span", 32);
    \u0275\u0275text(75, "All successful and logged online transactions for your room.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div", 55);
    \u0275\u0275template(77, PayRentComponent_Conditional_18_Conditional_77_Template, 4, 0, "div", 11)(78, PayRentComponent_Conditional_18_Conditional_78_Template, 19, 0, "div", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", (ctx_r2.tenantData == null ? null : ctx_r2.tenantData.rent_status) === "paid" ? "bg-success-subtle text-success border border-success-subtle" : "bg-danger-subtle text-danger border border-danger-subtle");
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx_r2.tenantData == null ? null : ctx_r2.tenantData.rent_status) === "paid" ? "bi bi-check-circle-fill me-1" : "bi bi-exclamation-triangle-fill me-1");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Rent Status: ", (ctx_r2.tenantData == null ? null : ctx_r2.tenantData.rent_status) === "paid" ? "PAID / CLEARED" : "PENDING PAYMENT", " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" \u20B9", (ctx_r2.tenantData == null ? null : ctx_r2.tenantData.monthly_rent) ? (+(ctx_r2.tenantData == null ? null : ctx_r2.tenantData.monthly_rent)).toLocaleString("en-IN") : "8,000", " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ctx_r2.tenantData == null ? null : ctx_r2.tenantData.rent_status) !== "paid" ? 21 : 22);
    \u0275\u0275advance(8);
    \u0275\u0275conditional((ctx_r2.tenantData == null ? null : ctx_r2.tenantData.rent_status) === "paid" ? 29 : 30);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate((ctx_r2.tenantData == null ? null : ctx_r2.tenantData.pg_name) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Room ", (ctx_r2.tenantData == null ? null : ctx_r2.tenantData.room_number) || "-", "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.tenantData == null ? null : ctx_r2.tenantData.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.tenantData == null ? null : ctx_r2.tenantData.phone);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r2.tenantData == null ? null : ctx_r2.tenantData.owner_phone) || "Available in Office");
    \u0275\u0275advance(15);
    \u0275\u0275conditional(ctx_r2.transactions.length === 0 ? 77 : 78);
  }
}
function PayRentComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 77)(2, "div", 78)(3, "div", 79)(4, "button", 80);
    \u0275\u0275listener("click", function PayRentComponent_Conditional_19_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeReceiptModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 81);
    \u0275\u0275element(6, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h4", 83);
    \u0275\u0275text(8, "Payment Successful!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 84);
    \u0275\u0275text(10, "Your monthly rent has been credited and confirmed.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 85)(12, "div", 86)(13, "div", 87)(14, "span", 41);
    \u0275\u0275text(15, "Tenant:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 42);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 87)(19, "span", 41);
    \u0275\u0275text(20, "PG Property:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 60);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 87)(24, "span", 41);
    \u0275\u0275text(25, "Room Number:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 88);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 87)(29, "span", 41);
    \u0275\u0275text(30, "Amount Paid:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 89);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 90)(34, "span", 41);
    \u0275\u0275text(35, "Transaction ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 91);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 92);
    \u0275\u0275element(39, "i", 93);
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "Rent status is now marked as ");
    \u0275\u0275elementStart(42, "strong");
    \u0275\u0275text(43, "PAID");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " across your landlord's dashboard.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 94)(46, "button", 95);
    \u0275\u0275listener("click", function PayRentComponent_Conditional_19_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeReceiptModal());
    });
    \u0275\u0275text(47, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 96);
    \u0275\u0275listener("click", function PayRentComponent_Conditional_19_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.shareReceiptOnWhatsApp());
    });
    \u0275\u0275element(49, "i", 8);
    \u0275\u0275elementStart(50, "span");
    \u0275\u0275text(51, "WhatsApp Receipt");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r2.tenantData == null ? null : ctx_r2.tenantData.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.tenantData == null ? null : ctx_r2.tenantData.pg_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Room ", ctx_r2.tenantData == null ? null : ctx_r2.tenantData.room_number, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", (ctx_r2.tenantData == null ? null : ctx_r2.tenantData.monthly_rent) ? (+(ctx_r2.tenantData == null ? null : ctx_r2.tenantData.monthly_rent)).toLocaleString("en-IN") : "8,000", "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.lastPaymentReceipt == null ? null : ctx_r2.lastPaymentReceipt.transaction == null ? null : ctx_r2.lastPaymentReceipt.transaction.transaction_id);
  }
}
var PayRentComponent = class _PayRentComponent {
  api;
  GF;
  loading = true;
  paying = false;
  tenantData = null;
  transactions = [];
  lastPaymentReceipt = null;
  showSuccessModal = false;
  constructor(api, GF) {
    this.api = api;
    this.GF = GF;
  }
  ngOnInit() {
    this.loadRentInfo();
  }
  loadRentInfo() {
    this.loading = true;
    this.api.postApi("tenant-rent-info", {}).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status) {
          this.tenantData = res.tenant;
          this.transactions = res.transactions || [];
        } else {
          this.GF.showToast(res.message || "Failed to load rent details", "danger");
        }
      },
      error: (err) => {
        this.loading = false;
        this.GF.showToast(err.error?.message || "Server error loading rent info", "danger");
      }
    });
  }
  // Pay rent using Razorpay Checkout
  initiateRazorpayPayment() {
    if (!this.tenantData)
      return;
    this.paying = true;
    const rentAmount = Number(this.tenantData.monthly_rent || 8e3);
    this.api.postApi("create-razorpay-order", { amount: rentAmount }).subscribe({
      next: (orderRes) => {
        if (!orderRes.status) {
          this.paying = false;
          this.GF.showToast(orderRes.message || "Order creation failed", "danger");
          return;
        }
        if (typeof Razorpay !== "undefined") {
          const options = {
            key: orderRes.key_id,
            amount: orderRes.amount,
            currency: orderRes.currency || "INR",
            name: this.tenantData.pg_name || "PG Management",
            description: `Monthly Rent - Room ${this.tenantData.room_number || ""}`,
            order_id: orderRes.order_id.startsWith("order_demo_") ? void 0 : orderRes.order_id,
            prefill: {
              name: this.tenantData.name,
              email: this.tenantData.email,
              contact: this.tenantData.phone
            },
            theme: {
              color: "#4f46e5"
            },
            handler: (response) => {
              this.verifyPaymentOnServer({
                razorpay_order_id: response.razorpay_order_id || orderRes.order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                amount: rentAmount
              });
            },
            modal: {
              ondismiss: () => {
                this.paying = false;
                this.GF.showToast("Payment window closed", "info");
              }
            }
          };
          try {
            const rzp = new Razorpay(options);
            rzp.on("payment.failed", (resp) => {
              this.paying = false;
              this.GF.showToast("Payment failed: " + (resp.error?.description || "Error"), "danger");
            });
            rzp.open();
          } catch (e) {
            console.warn("Standard modal error, using simulated demo payment:", e);
            this.simulateDemoPayment(orderRes.order_id, rentAmount);
          }
        } else {
          this.simulateDemoPayment(orderRes.order_id, rentAmount);
        }
      },
      error: (err) => {
        this.paying = false;
        this.GF.showToast(err.error?.message || "Error communicating with payment gateway", "danger");
      }
    });
  }
  // Simulated demo payment for instant testing
  simulateDemoPayment(orderId, amount) {
    const demoPaymentId = "pay_demo_" + Date.now();
    this.verifyPaymentOnServer({
      razorpay_order_id: orderId,
      razorpay_payment_id: demoPaymentId,
      amount
    });
  }
  // Verify payment on backend
  verifyPaymentOnServer(payload) {
    this.api.postApi("verify-rent-payment", payload).subscribe({
      next: (verifyRes) => {
        this.paying = false;
        if (verifyRes.status) {
          this.GF.showToast(verifyRes.message, "success");
          this.lastPaymentReceipt = verifyRes;
          this.showSuccessModal = true;
          this.loadRentInfo();
        } else {
          this.GF.showToast(verifyRes.message || "Payment verification failed", "danger");
        }
      },
      error: (err) => {
        this.paying = false;
        this.GF.showToast(err.error?.message || "Payment confirmation failed", "danger");
      }
    });
  }
  // Share Receipt to Landlord / Caretaker on WhatsApp
  shareReceiptOnWhatsApp(txn) {
    const data = txn || this.lastPaymentReceipt?.transaction;
    const tenant = this.tenantData;
    const amount = data ? Number(data.amount).toLocaleString("en-IN") : Number(tenant?.monthly_rent || 0).toLocaleString("en-IN");
    const txnId = data?.transaction_id || data?.razorpay_payment_id || "ONLINE_TXN";
    const dateStr = data?.payment_date ? new Date(data.payment_date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN");
    const message = `*\u{1F3E0} PG Rent Payment Receipt*

Tenant Name: ${tenant?.name}
PG: ${tenant?.pg_name || "PG Residency"}
Room: ${tenant?.room_number || "-"}
Amount Paid: \u20B9${amount}
Status: PAID (Success) \u2705
Payment Mode: Razorpay (Online)
Transaction ID: ${txnId}
Date: ${dateStr}

Thank you for confirming my stay! \u{1F60A}`;
    const targetPhone = tenant?.owner_phone || tenant?.phone;
    this.GF.openWhatsApp(targetPhone, message);
  }
  // Chat with Landlord / Caretaker on WhatsApp
  chatWithLandlord() {
    const ownerPhone = this.tenantData?.owner_phone;
    if (!ownerPhone) {
      this.GF.showToast("PG Owner phone number is not available", "warning");
      return;
    }
    const message = `Hello! I am ${this.tenantData?.name} from Room ${this.tenantData?.room_number} (${this.tenantData?.pg_name}). I had a query regarding my PG stay / rent.`;
    this.GF.openWhatsApp(ownerPhone, message);
  }
  closeReceiptModal() {
    this.showSuccessModal = false;
  }
  static \u0275fac = function PayRentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PayRentComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(GlobalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PayRentComponent, selectors: [["app-pay-rent"]], decls: 20, vars: 2, consts: [[1, "app-page-container"], [1, "app-page-header"], [1, "app-page-title-group"], [1, "app-page-title"], [1, "bi", "bi-credit-card-2-front-fill", "text-primary"], [1, "app-page-subtitle"], [1, "app-page-actions"], [1, "btn", "btn-sm", "btn-outline-success", "d-flex", "align-items-center", "gap-2", 3, "click"], [1, "bi", "bi-whatsapp"], [1, "btn", "btn-sm", "btn-outline-primary", "d-flex", "align-items-center", "gap-1", 3, "click"], [1, "bi", "bi-arrow-clockwise"], [1, "text-center", "py-5"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background-color", "rgba(0,0,0,0.5)", "z-index", "1055"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "fs-12", "text-muted", "mt-2"], [1, "row", "g-3", "mb-4"], [1, "col-lg-8"], [1, "card", "border-0", "shadow-sm", "rounded-4", "overflow-hidden", "h-100", "card-theme-color"], [1, "card-header", "border-0", "bg-transparent", "pt-4", "px-4", "pb-0", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "rounded-pill", "px-3", "py-2", "fs-11", "fw-semibold", "text-uppercase", 3, "ngClass"], [1, "d-flex", "align-items-center", "gap-2", "text-muted", "fs-11"], [1, "bi", "bi-shield-lock-fill", "text-primary"], [1, "card-body", "px-4", "py-3"], [1, "d-flex", "flex-column", "flex-md-row", "justify-content-between", "align-items-md-center", "gap-3", "my-2"], [1, "fs-12", "text-muted", "fw-medium", "d-block"], [1, "display-6", "fw-bold", "text-heading", "mb-0", "text-primary"], [1, "fs-14", "fw-normal", "text-muted"], [1, "btn", "btn-primary", "btn-lg", "rounded-pill", "px-4", "py-2", "d-flex", "align-items-center", "gap-2", "shadow", 3, "disabled"], [1, "d-flex", "align-items-center", "gap-2"], [1, "mt-4", "pt-3", "border-top", "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-2"], [1, "badge", "bg-primary", "text-white", "px-2", "py-1", "fs-10", "fw-bold", "letter-spacing-1"], [1, "fs-11", "text-muted"], [1, "text-success", "fs-12", "fw-medium", "d-flex", "align-items-center", "gap-1"], [1, "text-danger", "fs-12", "fw-medium", "d-flex", "align-items-center", "gap-1"], [1, "col-lg-4"], [1, "card", "border-0", "shadow-sm", "rounded-4", "overflow-hidden", "h-100", "card-theme-color", "p-4", "d-flex", "flex-column", "justify-content-between"], [1, "fw-bold", "fs-14", "text-heading", "mb-3", "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-building-check", "text-primary"], [1, "list-unstyled", "mb-0", "d-flex", "flex-column", "gap-2", "fs-12"], [1, "d-flex", "justify-content-between", "border-bottom", "pb-2"], [1, "text-muted"], [1, "fw-semibold", "text-heading"], [1, "badge", "bg-primary-subtle", "text-primary", "fw-bold", "px-2", "py-1"], [1, "fw-medium"], [1, "d-flex", "justify-content-between"], [1, "fw-medium", "text-primary"], [1, "mt-3", "pt-3", "border-top"], [1, "btn", "btn-outline-success", "w-100", "btn-sm", "rounded-3", "d-flex", "align-items-center", "justify-content-center", "gap-2", "py-2", 3, "click"], [1, "bi", "bi-whatsapp", "fs-14"], [1, "fw-semibold", "fs-11"], [1, "card", "border-0", "shadow-sm", "rounded-4", "overflow-hidden", "card-theme-color", "mt-4"], [1, "card-header", "bg-transparent", "border-0", "pt-4", "px-4", "pb-2", "d-flex", "justify-content-between", "align-items-center"], [1, "fw-bold", "fs-14", "text-heading", "mb-1", "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-journal-text", "text-primary"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "btn", "btn-primary", "btn-lg", "rounded-pill", "px-4", "py-2", "d-flex", "align-items-center", "gap-2", "shadow", 3, "click", "disabled"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "bi", "bi-lightning-charge-fill", "text-warning"], [1, "fw-semibold"], [1, "btn", "btn-success", "btn-lg", "rounded-pill", "px-4", "py-2", "d-flex", "align-items-center", "gap-2", "shadow-sm", 3, "click"], [1, "bi", "bi-check2-circle", "fs-15"], [1, "bi", "bi-clock-history"], [1, "bi", "bi-receipt-cutoff", "fs-1", "text-muted", "opacity-50"], [1, "fs-12", "text-muted", "mt-2", "mb-0"], [1, "table", "table-hover", "align-middle", "mb-0", "fs-12"], [1, "fs-11", "text-uppercase"], [1, "ps-4"], [1, "text-end", "pe-4"], [1, "ps-4", "fw-mono", "text-primary", "fw-medium"], [1, "fw-bold", "text-heading"], [1, "badge", "badge-subtle"], [1, "bi", "bi-credit-card", "me-1"], [1, "badge", "bg-success-subtle", "text-success", "border", "border-success-subtle", "px-2", "py-1"], [1, "bi", "bi-check-circle-fill", "me-1"], ["title", "Share receipt on WhatsApp", 1, "btn", "btn-sm", "btn-outline-success", "rounded-pill", "px-2", "py-1", "fs-11", "d-inline-flex", "align-items-center", "gap-1", 3, "click"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "border-0", "rounded-4", "shadow-lg", "overflow-hidden"], [1, "modal-header", "border-0", "bg-success", "text-white", "py-4", "px-4", "flex-column", "align-items-center", "text-center", "position-relative"], ["type", "button", 1, "btn-close", "btn-close-white", "position-absolute", "top-0", "end-0", "m-3", 3, "click"], [1, "bg-white", "rounded-circle", "p-3", "d-flex", "align-items-center", "justify-content-center", "shadow", "mb-2", "text-success"], [1, "bi", "bi-check2-circle", "fs-1"], [1, "fw-bold", "mb-1"], [1, "fs-12", "opacity-75"], [1, "modal-body", "p-4", "fs-12"], [1, "bg-subtle-box", "p-3", "rounded-3", "mb-3"], [1, "d-flex", "justify-content-between", "py-1", "border-bottom"], [1, "badge", "bg-primary", "px-2", "py-1"], [1, "fw-bold", "text-success", "fs-14"], [1, "d-flex", "justify-content-between", "py-1"], [1, "fw-mono", "text-muted", "fs-11"], ["role", "alert", 1, "alert", "alert-success", "d-flex", "align-items-center", "gap-2", "py-2", "px-3", "mb-0"], [1, "bi", "bi-info-circle-fill", "fs-14"], [1, "modal-footer", "border-0", "p-4", "pt-0", "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", "flex-fill", "rounded-pill", "py-2", 3, "click"], ["type", "button", 1, "btn", "btn-success", "flex-fill", "rounded-pill", "py-2", "d-flex", "align-items-center", "justify-content-center", "gap-2", "shadow", 3, "click"]], template: function PayRentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275text(5, " Rent & Online Payments ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, "Pay your monthly room rent securely via Razorpay (UPI, Credit/Debit Card, NetBanking, Wallets).");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function PayRentComponent_Template_button_click_9_listener() {
        return ctx.chatWithLandlord();
      });
      \u0275\u0275element(10, "i", 8);
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "WhatsApp Landlord");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 9);
      \u0275\u0275listener("click", function PayRentComponent_Template_button_click_13_listener() {
        return ctx.loadRentInfo();
      });
      \u0275\u0275element(14, "i", 10);
      \u0275\u0275elementStart(15, "span");
      \u0275\u0275text(16, "Refresh");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(17, PayRentComponent_Conditional_17_Template, 6, 0, "div", 11)(18, PayRentComponent_Conditional_18_Template, 79, 13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, PayRentComponent_Conditional_19_Template, 52, 5, "div", 12);
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275conditional(ctx.loading ? 17 : 18);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showSuccessModal ? 19 : -1);
    }
  }, dependencies: [CommonModule, NgClass, DatePipe, FormsModule], styles: ["\n\n.fw-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06) !important;\n}\n.letter-spacing-1[_ngcontent-%COMP%] {\n  letter-spacing: 0.08em;\n}\n/*# sourceMappingURL=pay-rent.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PayRentComponent, [{
    type: Component,
    args: [{ selector: "app-pay-rent", standalone: true, imports: [CommonModule, FormsModule, DatePipe], template: `<div class="app-page-container">

  <!-- Page Header -->
  <div class="app-page-header">
    <div class="app-page-title-group">
      <h2 class="app-page-title">
        <i class="bi bi-credit-card-2-front-fill text-primary"></i>
        Rent & Online Payments
      </h2>
      <p class="app-page-subtitle">Pay your monthly room rent securely via Razorpay (UPI, Credit/Debit Card, NetBanking, Wallets).</p>
    </div>
    <div class="app-page-actions">
      <button class="btn btn-sm btn-outline-success d-flex align-items-center gap-2" (click)="chatWithLandlord()">
        <i class="bi bi-whatsapp"></i>
        <span>WhatsApp Landlord</span>
      </button>
      <button class="btn btn-sm btn-outline-primary d-flex align-items-center gap-1" (click)="loadRentInfo()">
        <i class="bi bi-arrow-clockwise"></i>
        <span>Refresh</span>
      </button>
    </div>
  </div>

  <!-- Loading State -->
  @if (loading) {
    <div class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading rent details...</span>
      </div>
      <p class="fs-12 text-muted mt-2">Loading your rent statement...</p>
    </div>
  } @else {

    <!-- Main Payment Banner & Overview -->
    <div class="row g-3 mb-4">
      
      <!-- Primary Payment Box -->
      <div class="col-lg-8">
        <div class="card border-0 shadow-sm rounded-4 overflow-hidden h-100 card-theme-color">
          <div class="card-header border-0 bg-transparent pt-4 px-4 pb-0 d-flex justify-content-between align-items-center">
            <span class="badge rounded-pill px-3 py-2 fs-11 fw-semibold text-uppercase"
                  [ngClass]="tenantData?.rent_status === 'paid' ? 'bg-success-subtle text-success border border-success-subtle' : 'bg-danger-subtle text-danger border border-danger-subtle'">
              <i [class]="tenantData?.rent_status === 'paid' ? 'bi bi-check-circle-fill me-1' : 'bi bi-exclamation-triangle-fill me-1'"></i>
              Rent Status: {{ tenantData?.rent_status === 'paid' ? 'PAID / CLEARED' : 'PENDING PAYMENT' }}
            </span>

            <div class="d-flex align-items-center gap-2 text-muted fs-11">
              <i class="bi bi-shield-lock-fill text-primary"></i>
              <span>256-Bit SSL Encrypted</span>
            </div>
          </div>

          <div class="card-body px-4 py-3">
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 my-2">
              <div>
                <span class="fs-12 text-muted fw-medium d-block">Monthly Room Rent</span>
                <h1 class="display-6 fw-bold text-heading mb-0 text-primary">
                  \u20B9{{ tenantData?.monthly_rent ? (+tenantData?.monthly_rent).toLocaleString('en-IN') : '8,000' }}
                  <span class="fs-14 fw-normal text-muted">/ month</span>
                </h1>
              </div>

              <!-- Action Button -->
              <div>
                @if (tenantData?.rent_status !== 'paid') {
                  <button class="btn btn-primary btn-lg rounded-pill px-4 py-2 d-flex align-items-center gap-2 shadow"
                          (click)="initiateRazorpayPayment()"
                          [disabled]="paying">
                    @if (paying) {
                      <span class="spinner-border spinner-border-sm" role="status"></span>
                      <span>Processing...</span>
                    } @else {
                      <i class="bi bi-lightning-charge-fill text-warning"></i>
                      <span class="fw-semibold">Pay via Razorpay</span>
                    }
                  </button>
                } @else {
                  <div class="d-flex align-items-center gap-2">
                    <button class="btn btn-success btn-lg rounded-pill px-4 py-2 d-flex align-items-center gap-2 shadow-sm"
                            (click)="shareReceiptOnWhatsApp()">
                      <i class="bi bi-whatsapp"></i>
                      <span class="fw-semibold">Share Receipt</span>
                    </button>
                  </div>
                }
              </div>
            </div>

            <!-- Razorpay Brand Pill & Methods Supported -->
            <div class="mt-4 pt-3 border-top d-flex flex-wrap align-items-center justify-content-between gap-2">
              <div class="d-flex align-items-center gap-2">
                <span class="badge bg-primary text-white px-2 py-1 fs-10 fw-bold letter-spacing-1">RAZORPAY</span>
                <span class="fs-11 text-muted">Supported: UPI (GPay, PhonePe, Paytm), Visa/Mastercard, NetBanking, Wallets</span>
              </div>
              @if (tenantData?.rent_status === 'paid') {
                <span class="text-success fs-12 fw-medium d-flex align-items-center gap-1">
                  <i class="bi bi-check2-circle fs-15"></i> All dues settled for this cycle
                </span>
              } @else {
                <span class="text-danger fs-12 fw-medium d-flex align-items-center gap-1">
                  <i class="bi bi-clock-history"></i> Please clear dues to avoid late fees
                </span>
              }
            </div>
          </div>
        </div>
      </div>

      <!-- Stay Details & Owner Contact Card -->
      <div class="col-lg-4">
        <div class="card border-0 shadow-sm rounded-4 overflow-hidden h-100 card-theme-color p-4 d-flex flex-column justify-content-between">
          <div>
            <h5 class="fw-bold fs-14 text-heading mb-3 d-flex align-items-center gap-2">
              <i class="bi bi-building-check text-primary"></i>
              Accommodation Details
            </h5>

            <ul class="list-unstyled mb-0 d-flex flex-column gap-2 fs-12">
              <li class="d-flex justify-content-between border-bottom pb-2">
                <span class="text-muted">PG Name:</span>
                <span class="fw-semibold text-heading">{{ tenantData?.pg_name || 'N/A' }}</span>
              </li>
              <li class="d-flex justify-content-between border-bottom pb-2">
                <span class="text-muted">Room Number:</span>
                <span class="badge bg-primary-subtle text-primary fw-bold px-2 py-1">Room {{ tenantData?.room_number || '-' }}</span>
              </li>
              <li class="d-flex justify-content-between border-bottom pb-2">
                <span class="text-muted">Tenant Name:</span>
                <span class="fw-medium">{{ tenantData?.name }}</span>
              </li>
              <li class="d-flex justify-content-between border-bottom pb-2">
                <span class="text-muted">Registered Phone:</span>
                <span class="fw-medium">{{ tenantData?.phone }}</span>
              </li>
              <li class="d-flex justify-content-between">
                <span class="text-muted">Landlord Phone:</span>
                <span class="fw-medium text-primary">{{ tenantData?.owner_phone || 'Available in Office' }}</span>
              </li>
            </ul>
          </div>

          <div class="mt-3 pt-3 border-top">
            <button class="btn btn-outline-success w-100 btn-sm rounded-3 d-flex align-items-center justify-content-center gap-2 py-2"
                    (click)="chatWithLandlord()">
              <i class="bi bi-whatsapp fs-14"></i>
              <span class="fw-semibold fs-11">Chat with Landlord on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

    </div>

    <!-- Payment History Table Section -->
    <div class="card border-0 shadow-sm rounded-4 overflow-hidden card-theme-color mt-4">
      <div class="card-header bg-transparent border-0 pt-4 px-4 pb-2 d-flex justify-content-between align-items-center">
        <div>
          <h5 class="fw-bold fs-14 text-heading mb-1 d-flex align-items-center gap-2">
            <i class="bi bi-journal-text text-primary"></i>
            Rent Payment History
          </h5>
          <span class="fs-11 text-muted">All successful and logged online transactions for your room.</span>
        </div>
      </div>

      <div class="card-body p-0">
        @if (transactions.length === 0) {
          <div class="text-center py-5">
            <i class="bi bi-receipt-cutoff fs-1 text-muted opacity-50"></i>
            <p class="fs-12 text-muted mt-2 mb-0">No past payment transactions recorded yet.</p>
          </div>
        } @else {
          <div class="table-responsive">
            <table class="table table-hover align-middle mb-0 fs-12">
              <thead class="fs-11 text-uppercase">
                <tr>
                  <th class="ps-4">Transaction ID</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Date & Time</th>
                  <th>Status</th>
                  <th class="text-end pe-4">Receipt</th>
                </tr>
              </thead>
              <tbody>
                @for (txn of transactions; track txn.id) {
                  <tr>
                    <td class="ps-4 fw-mono text-primary fw-medium">
                      {{ txn.transaction_id || ('TXN-' + txn.id) }}
                    </td>
                    <td class="fw-bold text-heading">
                      \u20B9{{ (+txn.amount).toLocaleString('en-IN') }}
                    </td>
                    <td>
                      <span class="badge badge-subtle">
                        <i class="bi bi-credit-card me-1"></i>
                        {{ txn.payment_method || 'Razorpay' }}
                      </span>
                    </td>
                    <td class="text-muted">
                      {{ txn.payment_date | date:'dd MMM yyyy, hh:mm a' }}
                    </td>
                    <td>
                      <span class="badge bg-success-subtle text-success border border-success-subtle px-2 py-1">
                        <i class="bi bi-check-circle-fill me-1"></i> Paid
                      </span>
                    </td>
                    <td class="text-end pe-4">
                      <button class="btn btn-sm btn-outline-success rounded-pill px-2 py-1 fs-11 d-inline-flex align-items-center gap-1"
                              (click)="shareReceiptOnWhatsApp(txn)"
                              title="Share receipt on WhatsApp">
                        <i class="bi bi-whatsapp"></i>
                        <span>Receipt</span>
                      </button>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      </div>
    </div>

  }

</div>

<!-- Payment Success Modal -->
@if (showSuccessModal) {
  <div class="modal fade show d-block" tabindex="-1" style="background-color: rgba(0,0,0,0.5); z-index: 1055;">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 rounded-4 shadow-lg overflow-hidden">
        <div class="modal-header border-0 bg-success text-white py-4 px-4 flex-column align-items-center text-center position-relative">
          <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3" (click)="closeReceiptModal()"></button>
          <div class="bg-white rounded-circle p-3 d-flex align-items-center justify-content-center shadow mb-2 text-success">
            <i class="bi bi-check2-circle fs-1"></i>
          </div>
          <h4 class="fw-bold mb-1">Payment Successful!</h4>
          <span class="fs-12 opacity-75">Your monthly rent has been credited and confirmed.</span>
        </div>

        <div class="modal-body p-4 fs-12">
          <div class="bg-subtle-box p-3 rounded-3 mb-3">
            <div class="d-flex justify-content-between py-1 border-bottom">
              <span class="text-muted">Tenant:</span>
              <span class="fw-semibold text-heading">{{ tenantData?.name }}</span>
            </div>
            <div class="d-flex justify-content-between py-1 border-bottom">
              <span class="text-muted">PG Property:</span>
              <span class="fw-semibold">{{ tenantData?.pg_name }}</span>
            </div>
            <div class="d-flex justify-content-between py-1 border-bottom">
              <span class="text-muted">Room Number:</span>
              <span class="badge bg-primary px-2 py-1">Room {{ tenantData?.room_number }}</span>
            </div>
            <div class="d-flex justify-content-between py-1 border-bottom">
              <span class="text-muted">Amount Paid:</span>
              <span class="fw-bold text-success fs-14">\u20B9{{ tenantData?.monthly_rent ? (+tenantData?.monthly_rent).toLocaleString('en-IN') : '8,000' }}</span>
            </div>
            <div class="d-flex justify-content-between py-1">
              <span class="text-muted">Transaction ID:</span>
              <span class="fw-mono text-muted fs-11">{{ lastPaymentReceipt?.transaction?.transaction_id }}</span>
            </div>
          </div>

          <div class="alert alert-success d-flex align-items-center gap-2 py-2 px-3 mb-0" role="alert">
            <i class="bi bi-info-circle-fill fs-14"></i>
            <span>Rent status is now marked as <strong>PAID</strong> across your landlord's dashboard.</span>
          </div>
        </div>

        <div class="modal-footer border-0 p-4 pt-0 d-flex gap-2">
          <button type="button" class="btn btn-outline-secondary flex-fill rounded-pill py-2" (click)="closeReceiptModal()">
            Close
          </button>
          <button type="button" class="btn btn-success flex-fill rounded-pill py-2 d-flex align-items-center justify-content-center gap-2 shadow"
                  (click)="shareReceiptOnWhatsApp()">
            <i class="bi bi-whatsapp"></i>
            <span>WhatsApp Receipt</span>
          </button>
        </div>
      </div>
    </div>
  </div>
}
`, styles: ["/* src/app/pages/pay-rent/pay-rent.component.css */\n.fw-mono {\n  font-family: monospace;\n}\n.card {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.card:hover {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06) !important;\n}\n.letter-spacing-1 {\n  letter-spacing: 0.08em;\n}\n/*# sourceMappingURL=pay-rent.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: GlobalService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PayRentComponent, { className: "PayRentComponent", filePath: "src/app/pages/pay-rent/pay-rent.component.ts", lineNumber: 16 });
})();
export {
  PayRentComponent
};
//# sourceMappingURL=chunk-XAV3JTJZ.js.map
