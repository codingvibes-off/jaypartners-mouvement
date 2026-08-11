import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ReponseAuth, User } from '../models/models';

const CLE_TOKEN = 'nm_token';
const CLE_USER = 'nm_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = `${environment.apiUrl}/auth`;

  utilisateurCourant = signal<User | null>(this.recupererUserStocke());

  constructor(private http: HttpClient) {}

  inscription(email: string, password: string, prenom: string): Observable<ReponseAuth> {
    return this.http
      .post<ReponseAuth>(`${this.baseUrl}/inscription`, { email, password, prenom })
      .pipe(tap((res) => this.stockerSession(res)));
  }

  connexion(email: string, password: string): Observable<ReponseAuth> {
    return this.http
      .post<ReponseAuth>(`${this.baseUrl}/connexion`, { email, password })
      .pipe(tap((res) => this.stockerSession(res)));
  }

  deconnexion(): void {
    localStorage.removeItem(CLE_TOKEN);
    localStorage.removeItem(CLE_USER);
    this.utilisateurCourant.set(null);
  }

  obtenirToken(): string | null {
    return localStorage.getItem(CLE_TOKEN);
  }

  estConnecte(): boolean {
    return !!this.obtenirToken();
  }

  private stockerSession(res: ReponseAuth) {
    localStorage.setItem(CLE_TOKEN, res.token);
    localStorage.setItem(CLE_USER, JSON.stringify(res.user));
    this.utilisateurCourant.set(res.user);
  }

  private recupererUserStocke(): User | null {
    const raw = localStorage.getItem(CLE_USER);
    return raw ? JSON.parse(raw) : null;
  }
}
