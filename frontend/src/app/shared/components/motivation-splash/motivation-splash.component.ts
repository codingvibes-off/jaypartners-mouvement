import { Component, effect } from '@angular/core';
import { gsap } from 'gsap';
import { MotivationService } from '../../../core/services/motivation.service';

@Component({
  selector: 'app-motivation-splash',
  standalone: true,
  templateUrl: './motivation-splash.component.html',
  styleUrls: ['./motivation-splash.component.css'],
})
export class MotivationSplashComponent {
  constructor(public service: MotivationService) {
    effect(() => {
      if (this.service.visible()) {
        setTimeout(() => this.jouerAnimation(), 0);
      }
    });
  }

  /** La bande glisse de la gauche vers la droite, puis le titre file de gauche vers le centre. */
  private jouerAnimation(): void {
    const tl = gsap.timeline();

    tl.from('.voile-motivation', {
      xPercent: -100,
      opacity: 0,
      duration: 0.7,
      ease: 'bounce.out',
    }).from(
      '.titre-motivation',
      {
        x: -400,
        opacity: 0,
        duration: 0.35,
        ease: 'power4.out',
      },
      '-=0.15',
    );
  }
}
