import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RangeeSeances, Seance } from '../../core/models/models';
import { LangService } from '../../core/services/lang.service';
import { MotivationService } from '../../core/services/motivation.service';
import { SeanceService } from '../../core/services/seance.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { SeanceCardComponent } from '../../shared/components/seance-card/seance-card.component';
import { LocalisePipe } from '../../shared/pipes/localise.pipe';

gsap.registerPlugin(ScrollTrigger);

const TAILLE_TOP10 = 10;

/**
 * Rubrique Duo : uniquement les séances animées par les deux coachs ensemble
 * (coach=DUO), accessible quel que soit le coach choisi sur l'accueil. Contenu
 * unique, pas de toggle — remplace l'ancienne rubrique "Autres".
 */
@Component({
  selector: 'app-duo',
  standalone: true,
  imports: [CommonModule, RouterLink, SeanceCardComponent, IconComponent, TranslatePipe, LocalisePipe],
  templateUrl: './duo.component.html',
  styleUrls: ['./duo.component.css'],
})
export class DuoComponent implements OnInit, AfterViewInit, OnDestroy {
  rangees = signal<RangeeSeances[]>([]);
  chargement = signal(true);

  top10 = computed<Seance[]>(() => {
    const vues = new Set<string>();
    const seances: Seance[] = [];
    for (const rangee of this.rangees()) {
      for (const seance of rangee.seances) {
        if (vues.has(seance.id)) continue;
        vues.add(seance.id);
        seances.push(seance);
        if (seances.length >= TAILLE_TOP10) return seances;
      }
    }
    return seances;
  });

  top10Ids = computed<Set<string>>(() => new Set(this.top10().map((s) => s.id)));

  constructor(
    private seanceService: SeanceService,
    private motivation: MotivationService,
    public lang: LangService,
  ) {}

  ngOnInit(): void {
    this.chargerCatalogue();
    window.addEventListener('resize', this.majToutesLesFleches);
  }

  ngAfterViewInit(): void {
    this.animerHero();
  }

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    window.removeEventListener('resize', this.majToutesLesFleches);
  }

  ouvrirSelectionProfil(): void {
    this.motivation.declencher(['/programmes']);
  }

  faireDefiler(conteneur: HTMLElement, direction: 1 | -1): void {
    const distance = conteneur.clientWidth * 0.85 * direction;
    conteneur.scrollBy({ left: distance, behavior: 'smooth' });
  }

  /** Masque la flèche gauche/droite quand il n'y a rien à faire défiler dans cette direction (comme Netflix). */
  majFleches(conteneur: HTMLElement): void {
    const wrapper = conteneur.closest('.defilement-conteneur');
    if (!wrapper) return;
    const flecheGauche = wrapper.querySelector<HTMLElement>('.fleche-gauche');
    const flecheDroite = wrapper.querySelector<HTMLElement>('.fleche-droite');
    const { scrollLeft, scrollWidth, clientWidth } = conteneur;
    const debordement = scrollWidth > clientWidth + 4;
    flecheGauche?.classList.toggle('fleche-masquee', !debordement || scrollLeft <= 4);
    flecheDroite?.classList.toggle(
      'fleche-masquee',
      !debordement || scrollLeft >= scrollWidth - clientWidth - 4,
    );
  }

  private majToutesLesFleches = (): void => {
    document.querySelectorAll<HTMLElement>('.defilement').forEach((el) => this.majFleches(el));
  };

  private chargerCatalogue(): void {
    this.chargement.set(true);
    this.seanceService.obtenirCatalogue(undefined, undefined, 'DUO').subscribe({
      next: (rangees) => {
        this.rangees.set(rangees);
        this.chargement.set(false);
        setTimeout(() => {
          this.animerCatalogue();
          this.majToutesLesFleches();
        }, 0);
      },
      error: () => this.chargement.set(false),
    });
  }

  /** Timeline d'entrée du hero — volontairement percutante (scale + back.out) */
  private animerHero(): void {
    const cibleTransitionCss = gsap.utils.toArray<HTMLElement>('.hero-actions > *, .hero-carte');
    gsap.set(cibleTransitionCss, { transition: 'none' });

    const tl = gsap.timeline({
      defaults: { ease: 'expo.out' },
      onComplete: () => gsap.set(cibleTransitionCss, { clearProps: 'transition' }),
    });

    tl.from('.hero-cluster', { opacity: 0, y: -20, scale: 0.85, duration: 0.6 })
      .from('.hero-contenu h1', { opacity: 0, y: 70, scale: 1.06, duration: 0.9 }, '-=0.35')
      .from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.6 }, '-=0.55')
      .from(
        '.hero-actions > *',
        { opacity: 0, y: 24, scale: 0.8, stagger: 0.12, duration: 0.6, ease: 'back.out(2)' },
        '-=0.3',
      )
      .from(
        '.hero-carte',
        { opacity: 0, y: 30, scale: 0.92, stagger: 0.15, duration: 0.65, ease: 'back.out(1.8)' },
        '-=0.3',
      );

    gsap.to('.hero-contenu h1 .accent-gold', {
      textShadow: '0 0 24px rgba(125, 211, 252, 0.85)',
      duration: 1.1,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1,
    });
  }

  /** Révélations au scroll pour le catalogue */
  private animerCatalogue(): void {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    gsap.utils.toArray<HTMLElement>('.rangee').forEach((rangee, i) => {
      gsap.from(rangee, {
        opacity: 0,
        y: 70,
        scale: 0.97,
        duration: 0.7,
        ease: 'power3.out',
        delay: i === 0 ? 0.05 : 0,
        scrollTrigger: {
          trigger: rangee,
          start: 'top 88%',
          once: true,
        },
      });
    });

    gsap.from('.cta-section', {
      opacity: 0,
      y: 60,
      scale: 0.96,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 90%',
        once: true,
      },
    });
  }
}
