import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslatePipe } from '@ngx-translate/core';
import { gsap } from 'gsap';
import { AuthService } from '../../core/services/auth.service';
import { HistoriqueService } from '../../core/services/historique.service';
import { LangService } from '../../core/services/lang.service';
import { SeanceService } from '../../core/services/seance.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { LocalisePipe } from '../../shared/pipes/localise.pipe';
import { Seance, SeanceMouvement } from '../../core/models/models';
import { CITATIONS_DERNIERE_SERIE, CITATIONS_DERNIERE_SERIE_EN } from './citations';
import { environment } from '../../../environments/environment';

const DELAI_FERMETURE_AUTO_MS = 6000;
const DUREE_REPOS_S = 90;

@Component({
  selector: 'app-entrainement',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent, TranslatePipe, LocalisePipe],
  templateUrl: './entrainement.component.html',
  styleUrls: ['./entrainement.component.css'],
})
export class EntrainementComponent implements OnInit, OnDestroy {
  @ViewChild('videoRef') videoElRef?: ElementRef<HTMLVideoElement>;

  seance = signal<Seance | null>(null);
  chargement = signal(true);
  indexActuel = signal(0);
  enPause = signal(false);
  tempsRestant = signal<number | null>(null);
  terminee = signal(false);
  validation = signal<{ xpGagne: number } | null>(null);
  erreurValidation = signal<string | null>(null);
  enCoursValidation = signal(false);

  serieActuelle = signal(1);
  encouragementVisible = signal(false);
  citationActuelle = signal('');

  /** Repos chronométré entre deux séries d'un même exercice (voir demarrerRepos). */
  enRepos = signal(false);
  tempsRepos = signal(DUREE_REPOS_S);

  private encouragementDejaAffichePourExercice = false;
  private intervalId?: ReturnType<typeof setInterval>;
  private reposIntervalId?: ReturnType<typeof setInterval>;
  private fermetureAutoId?: ReturnType<typeof setTimeout>;
  private audioContext?: AudioContext;

  mouvements = computed<SeanceMouvement[]>(() => this.seance()?.mouvements ?? []);
  exerciceActuel = computed<SeanceMouvement | null>(() => this.mouvements()[this.indexActuel()] ?? null);
  prochainExercice = computed<SeanceMouvement | null>(
    () => this.mouvements()[this.indexActuel() + 1] ?? null,
  );
  videoCloudflarePrete = computed<boolean>(() => {
    const mouvement = this.exerciceActuel()?.mouvement;
    return !!mouvement?.cfStreamUid && mouvement.cfStreamStatus === 'ready';
  });
  urlIframeCloudflare = computed<SafeResourceUrl | null>(() => {
    const uid = this.exerciceActuel()?.mouvement.cfStreamUid;
    if (!uid) return null;
    const url = `https://${environment.cfStreamCustomerCode}.cloudflarestream.com/${uid}/iframe?autoplay=true&muted=true&loop=true&controls=true`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });
  progression = computed<number>(() => {
    const total = this.mouvements().length;
    return total ? Math.round(((this.indexActuel() + 1) / total) * 100) : 0;
  });
  totalSeries = computed<number>(() => this.exerciceActuel()?.series ?? 0);
  plageSeries = computed<number[]>(() => Array.from({ length: this.totalSeries() }, (_, i) => i + 1));
  /** Vrai s'il s'agit de la dernière série (ou d'un exercice sans découpage en séries). */
  estDerniereSerie = computed<boolean>(() => {
    const total = this.totalSeries();
    return total <= 1 || this.serieActuelle() >= total;
  });

  libelleTempsRepos = computed<string>(() => {
    const s = Math.max(0, this.tempsRepos());
    const minutes = Math.floor(s / 60);
    const secondes = s % 60;
    return `${minutes}:${String(secondes).padStart(2, '0')}`;
  });

  /** Donnée principale de l'exercice : le temps s'il y en a un, sinon les répétitions. Jamais les deux à la fois. */
  donneePrincipaleTexte = computed<string | null>(() => {
    const temps = this.tempsRestant();
    if (temps !== null) return String(temps);
    return this.exerciceActuel()?.repetitions?.trim() || null;
  });
  donneePrincipaleLabel = computed<string | null>(() => {
    if (this.tempsRestant() !== null) return this.tempsRestant() === 1 ? 'Seconde' : 'Secondes';
    return this.exerciceActuel()?.repetitions ? 'Répétitions' : null;
  });
  /** Les répétitions saisies vont d'un simple "12" à une phrase entière ("100 pompages (10x10)") :
   *  on réduit la taille du chiffre selon sa longueur pour ne jamais casser la mise en page. */
  donneePrincipaleTaille = computed<'xl' | 'lg' | 'md'>(() => {
    const longueur = (this.donneePrincipaleTexte() ?? '').length;
    if (longueur <= 4) return 'xl';
    if (longueur <= 14) return 'lg';
    return 'md';
  });

  constructor(
    private route: ActivatedRoute,
    private seanceService: SeanceService,
    private historiqueService: HistoriqueService,
    public auth: AuthService,
    public lang: LangService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.seanceService.obtenirDetail(id).subscribe({
      next: (seance) => {
        this.seance.set(seance);
        this.chargement.set(false);
        this.demarrerMinuteur();
      },
      error: () => this.chargement.set(false),
    });
  }

  ngOnDestroy(): void {
    this.arreterMinuteur();
    if (this.reposIntervalId) clearInterval(this.reposIntervalId);
    if (this.fermetureAutoId) clearTimeout(this.fermetureAutoId);
    this.audioContext?.close();
  }

  basculerPause(): void {
    const video = this.videoElRef?.nativeElement;
    if (!video) return;

    const enPause = !this.enPause();
    this.enPause.set(enPause);
    if (enPause) {
      video.pause();
      this.arreterMinuteur();
    } else {
      video.play().catch(() => {});
      this.demarrerMinuteur();
    }
  }

  /** Action du bouton principal : passe en repos chronométré avant la série suivante,
   *  ou directement à l'exercice suivant sur la dernière série. */
  validerEtape(): void {
    if (this.estDerniereSerie()) {
      this.exerciceSuivant();
    } else {
      this.demarrerRepos();
    }
  }

  exerciceSuivant(): void {
    this.arreterRepos();
    this.arreterMinuteur();
    this.reinitialiserSeries();
    const suivant = this.indexActuel() + 1;
    if (suivant < this.mouvements().length) {
      this.indexActuel.set(suivant);
      this.enPause.set(false);
      this.demarrerMinuteur();
    } else {
      this.terminee.set(true);
    }
  }

  /** Passe à la série suivante du même exercice. Sur l'avant-dernière série validée
   *  (on entre alors dans la dernière), affiche le bandeau d'encouragement. */
  private serieSuivante(): void {
    const prochaine = this.serieActuelle() + 1;
    this.serieActuelle.set(prochaine);

    if (prochaine === this.totalSeries() && !this.encouragementDejaAffichePourExercice) {
      this.encouragementDejaAffichePourExercice = true;
      this.afficherEncouragement();
    }

    this.enPause.set(false);
    this.demarrerMinuteur();
  }

  /** Ouvre l'écran de repos plein écran (1 min 30) avant la série suivante ; reprend seul à zéro. */
  private demarrerRepos(): void {
    this.arreterMinuteur();
    this.enRepos.set(true);
    this.tempsRepos.set(DUREE_REPOS_S);
    this.reposIntervalId = setInterval(() => {
      const restant = this.tempsRepos();
      if (restant <= 1) {
        this.arreterRepos();
        this.serieSuivante();
        return;
      }
      const nouveauTemps = restant - 1;
      this.tempsRepos.set(nouveauTemps);
      if (nouveauTemps <= 3 && nouveauTemps >= 1) {
        this.jouerBip();
      }
    }, 1000);
  }

  private arreterRepos(): void {
    if (this.reposIntervalId) {
      clearInterval(this.reposIntervalId);
      this.reposIntervalId = undefined;
    }
    this.enRepos.set(false);
  }

  /** Bip du décompte 3-2-1 avant la reprise. Créé au clic (geste utilisateur) pour éviter
   *  le blocage autoplay des navigateurs sur l'audio déclenché par un minuteur. */
  private obtenirAudioContext(): AudioContext {
    if (!this.audioContext) {
      this.audioContext = new AudioContext();
    }
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
    return this.audioContext;
  }

  private jouerBip(): void {
    const ctx = this.obtenirAudioContext();
    const oscillateur = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillateur.type = 'sine';
    oscillateur.frequency.value = 880;
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    oscillateur.connect(gain).connect(ctx.destination);
    oscillateur.start();
    oscillateur.stop(ctx.currentTime + 0.15);
  }

  fermerEncouragement(): void {
    if (!this.encouragementVisible()) return;
    if (this.fermetureAutoId) clearTimeout(this.fermetureAutoId);
    this.encouragementVisible.set(false);
    this.animerBandeau();
  }

  validerSeance(): void {
    const seance = this.seance();
    if (!seance) return;
    this.enCoursValidation.set(true);
    this.erreurValidation.set(null);
    this.historiqueService.validerSeance(seance.id).subscribe({
      next: (res) => {
        this.validation.set({ xpGagne: res.historique.xpGagne });
        this.enCoursValidation.set(false);
      },
      error: () => {
        this.erreurValidation.set('Impossible de valider la séance pour le moment.');
        this.enCoursValidation.set(false);
      },
    });
  }

  private reinitialiserSeries(): void {
    this.serieActuelle.set(1);
    this.encouragementDejaAffichePourExercice = false;
    if (this.fermetureAutoId) clearTimeout(this.fermetureAutoId);
    const etaitVisible = this.encouragementVisible();
    this.encouragementVisible.set(false);
    if (etaitVisible) this.animerBandeau();
  }

  private afficherEncouragement(): void {
    const citations = this.lang.langue() === 'en' ? CITATIONS_DERNIERE_SERIE_EN : CITATIONS_DERNIERE_SERIE;
    this.citationActuelle.set(citations[Math.floor(Math.random() * citations.length)]);
    this.encouragementVisible.set(true);
    this.animerBandeau();

    this.fermetureAutoId = setTimeout(() => this.fermerEncouragement(), DELAI_FERMETURE_AUTO_MS);
  }

  /** Le bandeau glisse depuis le haut avec un effet de rebond à l'atterrissage. */
  private animerBandeau(): void {
    setTimeout(() => {
      const bandeau = document.querySelector<HTMLElement>('.bandeau-encouragement');
      if (!bandeau) return;

      gsap.killTweensOf(bandeau);

      if (this.encouragementVisible()) {
        gsap.fromTo(
          bandeau,
          { y: '-120%' },
          { y: '0%', duration: 0.9, ease: 'bounce.out' },
        );
      } else {
        gsap.to(bandeau, { y: '-120%', duration: 0.3, ease: 'power2.in' });
      }
    }, 0);
  }

  private demarrerMinuteur(): void {
    this.arreterMinuteur();
    const duree = this.exerciceActuel()?.mouvement.dureeConseillee;
    if (!duree) {
      this.tempsRestant.set(null);
      return;
    }
    this.tempsRestant.set(duree);
    this.intervalId = setInterval(() => {
      const restant = this.tempsRestant();
      if (restant === null) return;
      if (restant <= 1) {
        this.arreterMinuteur();
        this.validerEtape();
        return;
      }
      this.tempsRestant.set(restant - 1);
    }, 1000);
  }

  private arreterMinuteur(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }
}
