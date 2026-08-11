import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  signal,
} from '@angular/core';
import { gsap } from 'gsap';
import { Seance } from '../../core/models/models';
import { SeanceService } from '../../core/services/seance.service';
import { SeanceCardComponent } from '../../shared/components/seance-card/seance-card.component';

export interface UniversConfig {
  id: string;
  label: string;
  categorie: string;
  accent: string;
  accentRgb: string;
  fond: string;
  tagline: string;
}

const TAILLE_LOT = 10;
const MARGE_CHARGEMENT_PX = 500;

export const UNIVERS: UniversConfig[] = [
  {
    id: 'force',
    label: 'Force',
    categorie: 'Renforcement',
    accent: '#ff4d4d',
    accentRgb: '255, 77, 77',
    fond: '#150505',
    tagline: 'Construis ta puissance brute.',
  },
  {
    id: 'pilates',
    label: 'Pilates',
    categorie: 'Pilates',
    accent: '#e879f9',
    accentRgb: '232, 121, 249',
    fond: '#130a17',
    tagline: 'Contrôle, gainage, précision.',
  },
  {
    id: 'athletisme',
    label: 'Athlétisme',
    categorie: 'Athlétisme',
    accent: '#38bdf8',
    accentRgb: '56, 189, 248',
    fond: '#050e15',
    tagline: 'Vitesse, cardio, foulée.',
  },
  {
    id: 'hyrox',
    label: 'Hyrox',
    categorie: 'Hyrox',
    accent: '#f97316',
    accentRgb: '249, 115, 22',
    fond: '#170b02',
    tagline: 'La course fonctionnelle ultime.',
  },
  {
    id: 'explosivite',
    label: 'Explosivité',
    categorie: 'Plyométrie',
    accent: '#fde047',
    accentRgb: '253, 224, 71',
    fond: '#151304',
    tagline: 'Puissance et détente verticale.',
  },
];

interface CarteVisible {
  cle: string;
  seance: Seance;
}

@Component({
  selector: 'app-programmes',
  standalone: true,
  imports: [CommonModule, SeanceCardComponent],
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.css'],
})
export class ProgrammesComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('voile') voileRef?: ElementRef<HTMLElement>;
  @ViewChild('sentinelle') sentinelleRef?: ElementRef<HTMLElement>;

  readonly univers = UNIVERS;
  universActif = signal<UniversConfig>(UNIVERS[0]);
  visibles = signal<CarteVisible[]>([]);
  chargement = signal(true);
  aucunProgramme = signal(false);

  private base: Seance[] = [];
  private pool: Seance[] = [];
  private curseur = 0;
  private observateur?: IntersectionObserver;

  constructor(private seanceService: SeanceService) {}

  ngOnInit(): void {
    this.chargerUnivers(this.universActif());
  }

  ngAfterViewInit(): void {
    if (!this.sentinelleRef) return;
    this.observateur = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) this.chargerSiVisible();
      },
      { rootMargin: `${MARGE_CHARGEMENT_PX}px` },
    );
    this.observateur.observe(this.sentinelleRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observateur?.disconnect();
  }

  trackByCle(_index: number, item: CarteVisible): string {
    return item.cle;
  }

  changerUnivers(u: UniversConfig): void {
    if (this.universActif().id === u.id) return;
    this.jouerTransitionCouleur(u);
    this.universActif.set(u);
    this.chargerUnivers(u);
  }

  private chargerUnivers(u: UniversConfig): void {
    this.chargement.set(true);
    this.aucunProgramme.set(false);
    this.visibles.set([]);
    this.base = [];
    this.pool = [];
    this.curseur = 0;

    this.seanceService.obtenirParCategorie(u.categorie).subscribe({
      next: (seances) => {
        this.base = seances;
        this.chargement.set(false);
        if (seances.length === 0) {
          this.aucunProgramme.set(true);
          return;
        }
        // Laisse Angular peindre la grille avant de mesurer la position du sentinel.
        requestAnimationFrame(() => this.chargerSiVisible());
      },
      error: () => {
        this.chargement.set(false);
        this.aucunProgramme.set(true);
      },
    });
  }

  /** L'IntersectionObserver ne se redéclenche que sur un changement d'état : si le sentinel
   *  reste dans la marge de chargement après un ajout (petit univers, grand écran), aucun nouvel
   *  événement ne partirait. On vérifie donc sa position réelle et on boucle nous-mêmes tant
   *  qu'il est visible, ce qui donne l'impression d'un flux de programmes infini et continu. */
  private chargerSiVisible(): void {
    if (this.chargement() || this.base.length === 0) return;
    const el = this.sentinelleRef?.nativeElement;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top > window.innerHeight + MARGE_CHARGEMENT_PX) return;

    this.ajouterLot();
    requestAnimationFrame(() => this.chargerSiVisible());
  }

  /** Pioche le prochain lot dans un pool mélangé, en le renouvelant (mélangé à nouveau) à
   *  chaque tour complet — donne l'impression d'un flux continu plutôt qu'une répétition brute. */
  private ajouterLot(): void {
    if (this.base.length === 0) return;
    const nouveaux: CarteVisible[] = [];
    const departIndex = this.visibles().length;

    for (let i = 0; i < TAILLE_LOT; i++) {
      if (this.curseur >= this.pool.length) {
        this.pool = this.melanger(this.base);
        this.curseur = 0;
      }
      const seance = this.pool[this.curseur];
      nouveaux.push({ seance, cle: `${seance.id}--${departIndex + i}` });
      this.curseur++;
    }

    this.visibles.update((v) => [...v, ...nouveaux]);
  }

  private melanger(items: Seance[]): Seance[] {
    const copie = [...items];
    for (let i = copie.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copie[i], copie[j]] = [copie[j], copie[i]];
    }
    return copie;
  }

  private jouerTransitionCouleur(u: UniversConfig): void {
    const voile = this.voileRef?.nativeElement;
    if (!voile) return;
    gsap.killTweensOf(voile);
    gsap.set(voile, { background: u.accent, opacity: 0 });
    gsap.to(voile, {
      opacity: 0.4,
      duration: 0.28,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to(voile, { opacity: 0, duration: 0.6, ease: 'power2.in' });
      },
    });
  }
}
