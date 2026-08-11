import { Component, HostListener, signal } from '@angular/core';

const SEUIL_AFFICHAGE_PX = 160;

@Component({
  selector: 'app-contact-fab',
  standalone: true,
  templateUrl: './contact-fab.component.html',
  styleUrls: ['./contact-fab.component.css'],
})
export class ContactFabComponent {
  ouvert = signal(false);
  // Masqué tant qu'on est en haut de page : sur mobile, la hauteur d'écran varie
  // énormément (iPhone SE ≈ 667px, autres ≈ 900px+) et le bouton fixe peut sinon
  // chevaucher le CTA du hero selon la hauteur exacte. On ne l'affiche qu'une fois
  // l'utilisateur a commencé à parcourir la page.
  visible = signal(this.estAuDelaDuSeuil());

  @HostListener('window:scroll')
  onScroll(): void {
    this.visible.set(this.estAuDelaDuSeuil());
    if (!this.visible()) this.fermer();
  }

  basculer(): void {
    this.ouvert.set(!this.ouvert());
  }

  fermer(): void {
    this.ouvert.set(false);
  }

  @HostListener('document:keydown.escape')
  onEchap(): void {
    this.fermer();
  }

  private estAuDelaDuSeuil(): boolean {
    return window.scrollY > SEUIL_AFFICHAGE_PX;
  }
}
