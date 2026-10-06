import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-TFR4PE7B.js";

// src/app/pipes/state-name.pipe.ts
var StateNamePipe = class _StateNamePipe {
  transform(stateId, stateData) {
    const state = stateData.find((ele) => ele.state_id == stateId);
    return state ? state.state_name : "Unknown";
  }
  static \u0275fac = function StateNamePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StateNamePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "stateName", type: _StateNamePipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StateNamePipe, [{
    type: Pipe,
    args: [{
      name: "stateName"
    }]
  }], null, null);
})();

export {
  StateNamePipe
};
//# sourceMappingURL=chunk-RVCEBUUJ.js.map
