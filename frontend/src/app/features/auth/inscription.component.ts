import { Component, DestroyRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from '../../core/services/auth.service';
import { GoogleAuthService } from '../../core/services/google-auth.service';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, TranslatePipe],
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class InscriptionComponent {
  titreKey = 'nav.inscription';
  prenom = '';
  email = '';
  password = '';
  erreur = signal<string | null>(null);
  enCours = signal(false);
  estInscription = true;
  oauthMessage = signal<string | null>(null);

  constructor(
    private auth: AuthService,
    private router: Router,
    private translate: TranslateService,
    private googleAuth: GoogleAuthService,
    private destroyRef: DestroyRef,
  ) {
    this.googleAuth.resultat$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((accessToken) => this.connecterAvecGoogle(accessToken));
    this.googleAuth.erreur$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.erreur.set(this.translate.instant('auth.oauthErreur')));
    this.googleAuth.precharger();
  }

  soumettre(): void {
    this.erreur.set(null);
    this.enCours.set(true);
    this.auth.inscription(this.email, this.password, this.prenom).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: (err) => {
        this.erreur.set(err?.error?.message || 'Une erreur est survenue');
        this.enCours.set(false);
      },
    });
  }

  connexionOAuth(fournisseur: 'google' | 'apple'): void {
    if (fournisseur === 'google') {
      this.erreur.set(null);
      this.googleAuth.declencherConnexion();
      return;
    }
    this.oauthMessage.set(this.translate.instant('auth.oauthBientot', { fournisseur: 'Apple' }));
    setTimeout(() => this.oauthMessage.set(null), 3000);
  }

  private connecterAvecGoogle(accessToken: string): void {
    this.erreur.set(null);
    this.enCours.set(true);
    this.auth.connexionGoogle(accessToken).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: (err) => {
        this.erreur.set(err?.error?.message || 'Une erreur est survenue');
        this.enCours.set(false);
      },
    });
  }
}
