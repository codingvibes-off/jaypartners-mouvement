import { Component, computed, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ContactFabComponent } from './shared/components/contact-fab/contact-fab.component';
import { MotivationSplashComponent } from './shared/components/motivation-splash/motivation-splash.component';
import { CoachGateComponent } from './shared/components/coach-gate/coach-gate.component';
import { LangService } from './core/services/lang.service';
import { CoachService } from './core/services/coach.service';

const MESSAGE_PAR_LANGUE: Record<string, string> = {
  en: 'Switch to English',
  fr: 'Passage en français',
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    ContactFabComponent,
    MotivationSplashComponent,
    CoachGateComponent,
    TranslatePipe,
  ],
  template: `
    <div class="modale-langue" [class.visible]="lang.transitionEnCours()" aria-hidden="true">
      <div class="modale-langue-contenu">
        <span class="modale-langue-code">{{ (lang.langueCible() ?? lang.langue()).toUpperCase() }}</span>
        <span class="modale-langue-ligne"></span>
        <span class="modale-langue-texte">{{ messageModale() }}</span>
      </div>
    </div>

    <div
      class="modale-coach"
      [class.visible]="coach.transitionEnCours()"
      [style.background]="coach.coachCible() === 'FEMME' ? '#e879f9' : '#c6ff3d'"
      aria-hidden="true"
    >
      <div class="modale-coach-contenu">
        <span class="modale-coach-icone">{{ coach.coachCible() === 'FEMME' ? '💜' : '💪' }}</span>
        <span class="modale-coach-texte">{{ (coach.coachCible() === 'FEMME' ? 'coach.femmeTitre' : 'coach.hommeTitre') | translate }}</span>
      </div>
    </div>

    @if (!coach.coach()) {
      <app-coach-gate></app-coach-gate>
    } @else {
      <div class="fondu-langue theme-{{ coach.themeClasse() }}" [class.en-transition]="lang.transitionEnCours()">
        @if (!estEnEntrainement()) {
          <app-navbar></app-navbar>
        }
        <router-outlet></router-outlet>
        @if (!estEnEntrainement()) {
          <app-footer></app-footer>
          <app-contact-fab></app-contact-fab>
        }
        <app-motivation-splash></app-motivation-splash>
      </div>
    }
  `,
  styles: [
    `
      .fondu-langue {
        opacity: 1;
        transition: opacity 180ms ease;
      }

      .fondu-langue.en-transition {
        opacity: 0;
      }

      /* Révélation circulaire depuis le bouton FR/EN cliqué (coordonnées posées par LangService). */
      .modale-langue {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #c6ff3d;
        clip-path: circle(0% at var(--lang-origin-x, 50%) var(--lang-origin-y, 50%));
        transition: clip-path 480ms cubic-bezier(0.65, 0, 0.35, 1);
        pointer-events: none;
      }

      .modale-langue.visible {
        clip-path: circle(150% at var(--lang-origin-x, 50%) var(--lang-origin-y, 50%));
      }

      .modale-langue-contenu {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;
        opacity: 0;
        transform: translateY(18px) scale(0.9);
        transition: opacity 260ms ease 140ms, transform 320ms cubic-bezier(0.34, 1.56, 0.64, 1) 140ms;
      }

      .modale-langue.visible .modale-langue-contenu {
        opacity: 1;
        transform: translateY(0) scale(1);
      }

      .modale-langue-code {
        font-family: var(--font-display);
        font-size: clamp(56px, 12vw, 120px);
        font-weight: 900;
        letter-spacing: -2px;
        line-height: 1;
        color: #0a0a0a;
      }

      .modale-langue-ligne {
        width: 56px;
        height: 3px;
        border-radius: 2px;
        background: #0a0a0a;
        opacity: 0.6;
      }

      .modale-langue-texte {
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: #0a0a0a;
        opacity: 0.75;
      }

      /* Révélation circulaire depuis le panneau coach cliqué — même mécanisme que .modale-langue
         (coordonnées posées par CoachService via --coach-origin-x/y). */
      .modale-coach {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        clip-path: circle(0% at var(--coach-origin-x, 50%) var(--coach-origin-y, 50%));
        transition: clip-path 480ms cubic-bezier(0.65, 0, 0.35, 1);
        pointer-events: none;
      }

      .modale-coach.visible {
        clip-path: circle(150% at var(--coach-origin-x, 50%) var(--coach-origin-y, 50%));
      }

      .modale-coach-contenu {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;
        opacity: 0;
        transform: translateY(18px) scale(0.9);
        transition: opacity 260ms ease 140ms, transform 320ms cubic-bezier(0.34, 1.56, 0.64, 1) 140ms;
      }

      .modale-coach.visible .modale-coach-contenu {
        opacity: 1;
        transform: translateY(0) scale(1);
      }

      .modale-coach-icone {
        font-size: clamp(56px, 12vw, 100px);
        line-height: 1;
      }

      .modale-coach-texte {
        font-family: var(--font-display);
        font-size: clamp(24px, 4vw, 40px);
        font-weight: 800;
        letter-spacing: -0.5px;
        color: #0a0a0a;
        text-transform: uppercase;
      }
    `,
  ],
})
export class AppComponent {
  // Le mode entraînement est une expérience plein écran/immersive : pas de
  // navbar, de footer marketing ni de bouton de contact flottant par-dessus.
  estEnEntrainement = signal(false);

  messageModale = computed(() => MESSAGE_PAR_LANGUE[this.lang.langueCible() ?? this.lang.langue()]);

  constructor(
    private router: Router,
    public lang: LangService,
    public coach: CoachService,
  ) {
    this.estEnEntrainement.set(this.router.url.includes('/entrainement'));
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe((e) => {
      this.estEnEntrainement.set(e.urlAfterRedirects.includes('/entrainement'));
    });
  }
}
