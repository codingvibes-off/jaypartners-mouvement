import {
  ɵɵdefinePipe
} from "./chunk-M2LWS2MJ.js";

// src/app/shared/pipes/localise.pipe.ts
var LocalisePipe = class _LocalisePipe {
  transform(fr, en, langueCourante) {
    if (langueCourante === "en" && en)
      return en;
    return fr || "";
  }
  static \u0275fac = function LocalisePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalisePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "localise", type: _LocalisePipe, pure: true, standalone: true });
};

export {
  LocalisePipe
};
//# sourceMappingURL=chunk-YPSBE6FA.js.map
