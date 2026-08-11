import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class ConnexionComponent {
  titre = 'Connexion';
  prenom = '';
  email = '';
  password = '';
  erreur = signal<string | null>(null);
  enCours = signal(false);
  estInscription = false;
  oauthMessage = signal<string | null>(null);

  constructor(private auth: AuthService, private router: Router) {}

  soumettre(): void {
    this.erreur.set(null);
    this.enCours.set(true);
    this.auth.connexion(this.email, this.password).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: (err) => {
        this.erreur.set(err?.error?.message || 'Une erreur est survenue');
        this.enCours.set(false);
      },
    });
  }

  connexionOAuth(fournisseur: 'google' | 'apple'): void {
    const nom = fournisseur === 'google' ? 'Google' : 'Apple';
    this.oauthMessage.set(`Connexion ${nom} bientôt disponible !`);
    setTimeout(() => this.oauthMessage.set(null), 3000);
  }
}
