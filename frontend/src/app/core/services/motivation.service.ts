import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MESSAGES_MOTIVATION } from '../constants/messages-motivation';

/** Doit correspondre à la durée totale de la timeline GSAP jouée par MotivationSplashComponent. */
export const DUREE_SPLASH_MS = 1500;

@Injectable({ providedIn: 'root' })
export class MotivationService {
  visible = signal(false);
  message = signal('');

  constructor(private router: Router) {}

  /** Affiche un message de motivation aléatoire puis redirige automatiquement vers `commands`. */
  declencher(commands: any[]): void {
    const message = MESSAGES_MOTIVATION[Math.floor(Math.random() * MESSAGES_MOTIVATION.length)];
    this.message.set(message);
    this.visible.set(true);
    setTimeout(() => {
      this.visible.set(false);
      this.router.navigate(commands);
    }, DUREE_SPLASH_MS);
  }
}
