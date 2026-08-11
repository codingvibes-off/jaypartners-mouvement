import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class InscriptionComponent {
  titre = 'Inscription';
  prenom = '';
  email = '';
  password = '';
  erreur = signal<string | null>(null);
  enCours = signal(false);
  estInscription = true;
  oauthMessage = signal<string | null>(null);

  constructor(private auth: AuthService, private router: Router) {}

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
    const nom = fournisseur === 'google' ? 'Google' : 'Apple';
    this.oauthMessage.set(`Inscription ${nom} bientôt disponible !`);
    setTimeout(() => this.oauthMessage.set(null), 3000);
  }
}
