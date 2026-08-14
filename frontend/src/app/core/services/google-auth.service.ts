import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

declare global {
  interface Window {
    google?: any;
  }
}

const SCRIPT_ID = 'google-identity-script';

/** Pont vers Google Identity Services (flux OAuth2 "token client") : ouvre la popup de
 *  connexion Google depuis N'IMPORTE QUEL bouton custom (contrairement au bouton officiel
 *  Google, qui impose son propre style). Le jeton obtenu est un access token, vérifié côté
 *  backend (jamais fait confiance au profil renvoyé par le client). */
@Injectable({ providedIn: 'root' })
export class GoogleAuthService {
  private tokenClient: any;
  private chargementPromesse?: Promise<void>;

  private resultatSubject = new Subject<string>();
  /** Émet l'access token à chaque connexion Google réussie. */
  resultat$ = this.resultatSubject.asObservable();

  private erreurSubject = new Subject<void>();
  erreur$ = this.erreurSubject.asObservable();

  /** Préchauffe le script + le client dès que possible (ex: à l'ouverture de la page de
   *  connexion), pour que declencherConnexion() puisse ouvrir la popup de façon synchrone
   *  avec le clic utilisateur — indispensable pour éviter le blocage popup des navigateurs. */
  precharger(): void {
    this.initialiserClient().catch(() => {});
  }

  declencherConnexion(): void {
    if (this.tokenClient) {
      this.tokenClient.requestAccessToken();
      return;
    }
    this.initialiserClient()
      .then(() => this.tokenClient?.requestAccessToken())
      .catch(() => this.erreurSubject.next());
  }

  private initialiserClient(): Promise<void> {
    if (this.tokenClient) return Promise.resolve();
    if (!this.chargementPromesse) {
      this.chargementPromesse = this.chargerScript().then(() => {
        this.tokenClient = window.google!.accounts.oauth2.initTokenClient({
          client_id: environment.googleClientId,
          scope: 'openid email profile',
          callback: (reponse: any) => {
            if (reponse?.access_token) {
              this.resultatSubject.next(reponse.access_token);
            } else {
              this.erreurSubject.next();
            }
          },
        });
      });
    }
    return this.chargementPromesse;
  }

  private chargerScript(): Promise<void> {
    if (window.google?.accounts?.oauth2) return Promise.resolve();

    return new Promise((resolve, reject) => {
      const existant = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
      if (existant) {
        existant.addEventListener('load', () => resolve());
        existant.addEventListener('error', () => reject());
        return;
      }

      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject();
      document.head.appendChild(script);
    });
  }
}
