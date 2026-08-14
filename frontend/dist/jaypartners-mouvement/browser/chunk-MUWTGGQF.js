import {
  environment
} from "./chunk-MHOTHGQB.js";
import {
  HttpClient
} from "./chunk-U75DGTTD.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-M2LWS2MJ.js";

// src/app/core/services/mouvement.service.ts
var MouvementService = class _MouvementService {
  http;
  baseUrl = `${environment.apiUrl}/mouvements`;
  constructor(http) {
    this.http = http;
  }
  obtenirTous() {
    return this.http.get(this.baseUrl);
  }
  creerUploadVideo(mouvementId) {
    return this.http.post(`${this.baseUrl}/${mouvementId}/video-upload-url`, {});
  }
  obtenirStatutVideo(mouvementId) {
    return this.http.get(`${this.baseUrl}/${mouvementId}/video-status`);
  }
  static \u0275fac = function MouvementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MouvementService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MouvementService, factory: _MouvementService.\u0275fac, providedIn: "root" });
};

export {
  MouvementService
};
//# sourceMappingURL=chunk-MUWTGGQF.js.map
