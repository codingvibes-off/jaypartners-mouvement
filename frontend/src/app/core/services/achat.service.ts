import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AchatService {
  private baseUrl = `${environment.apiUrl}/achats`;

  constructor(private http: HttpClient) {}

  demarrerAchat(seanceId: string): Observable<{ url: string }> {
    return this.http.post<{ url: string }>(`${this.baseUrl}/checkout`, { seanceId });
  }

  obtenirStatut(seanceId: string): Observable<{ achete: boolean }> {
    return this.http.get<{ achete: boolean }>(`${this.baseUrl}/${seanceId}`);
  }

  /** Vérifie une session Stripe Checkout au retour sur le site (achat invité inclus) et
   *  renvoie un jeton d'accès si le paiement est confirmé — aucun compte requis. */
  verifierSession(sessionId: string): Observable<{ deverrouille: boolean; seanceId?: string; jeton?: string }> {
    return this.http.get<{ deverrouille: boolean; seanceId?: string; jeton?: string }>(
      `${this.baseUrl}/verifier-session/${sessionId}`,
    );
  }
}
