import { AfterViewInit, Component, HostListener, OnDestroy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AuthService } from '../../../core/services/auth.service';
import { MotivationService } from '../../../core/services/motivation.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  private scrollTrigger?: ScrollTrigger;

  menuOuvert = signal(false);

  constructor(
    public auth: AuthService,
    private motivation: MotivationService,
  ) {}

  allerVersDecouvrir(event: Event): void {
    event.preventDefault();
    this.fermerMenu();
    this.motivation.declencher(['/decouvrir']);
  }

  allerVersProgrammes(event: Event): void {
    event.preventDefault();
    this.fermerMenu();
    this.motivation.declencher(['/programmes']);
  }

  ngAfterViewInit(): void {
    gsap.from('.navbar', { opacity: 0, y: -20, duration: 0.5, ease: 'power2.out' });

    this.scrollTrigger = ScrollTrigger.create({
      start: 60,
      onUpdate: (self) => {
        gsap.to('.navbar-inner', {
          paddingTop: self.progress > 0 ? 14 : 24,
          paddingBottom: self.progress > 0 ? 14 : 24,
          duration: 0.25,
          ease: 'power2.out',
          overwrite: true,
        });
      },
    });
  }

  ngOnDestroy(): void {
    this.scrollTrigger?.kill();
  }

  deconnexion(): void {
    this.auth.deconnexion();
  }

  basculerMenu(): void {
    this.menuOuvert.set(!this.menuOuvert());
    this.animerMenuMobile();
  }

  fermerMenu(): void {
    if (!this.menuOuvert()) return;
    this.menuOuvert.set(false);
    this.animerMenuMobile();
  }

  @HostListener('document:keydown.escape')
  onEchap(): void {
    this.fermerMenu();
  }

  /** Le volet s'ouvre vers le bas avec un effet de rebond à l'atterrissage. */
  private animerMenuMobile(): void {
    setTimeout(() => {
      const panneau = document.querySelector<HTMLElement>('.menu-mobile');
      if (!panneau) return;

      gsap.killTweensOf(panneau);

      if (this.menuOuvert()) {
        panneau.style.height = 'auto';
        const hauteurCible = panneau.scrollHeight;
        gsap.fromTo(
          panneau,
          { height: 0 },
          {
            height: hauteurCible,
            duration: 0.9,
            ease: 'bounce.out',
            onComplete: () => {
              panneau.style.height = 'auto';
            },
          },
        );
      } else {
        gsap.to(panneau, { height: 0, duration: 0.25, ease: 'power2.in' });
      }
    }, 0);
  }
}
