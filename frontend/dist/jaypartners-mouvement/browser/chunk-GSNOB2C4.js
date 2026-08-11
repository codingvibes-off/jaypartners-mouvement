import {
  HttpClient,
  environment,
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-Z3NPIKQV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/core/services/seance.service.ts
var SeanceService = class _SeanceService {
  http;
  baseUrl = `${environment.apiUrl}/seances`;
  constructor(http) {
    this.http = http;
  }
  obtenirCatalogue(genre) {
    const params = genre ? { genre } : {};
    return this.http.get(this.baseUrl, { params });
  }
  obtenirDetail(id) {
    return this.http.get(`${this.baseUrl}/${id}`).pipe(map((seance) => __spreadProps(__spreadValues({}, seance), { mouvements: seance.mouvements ?? [] })));
  }
  static \u0275fac = function SeanceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SeanceService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeanceService, factory: _SeanceService.\u0275fac, providedIn: "root" });
};

export {
  SeanceService
};
//# sourceMappingURL=chunk-GSNOB2C4.js.map
