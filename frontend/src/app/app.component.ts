import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ContactFabComponent } from './shared/components/contact-fab/contact-fab.component';
import { MotivationSplashComponent } from './shared/components/motivation-splash/motivation-splash.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ContactFabComponent, MotivationSplashComponent],
  template: `
    @if (!estEnEntrainement()) {
      <app-navbar></app-navbar>
    }
    <router-outlet></router-outlet>
    @if (!estEnEntrainement()) {
      <app-footer></app-footer>
      <app-contact-fab></app-contact-fab>
    }
    <app-motivation-splash></app-motivation-splash>
  `,
})
export class AppComponent {
  // Le mode entraînement est une expérience plein écran/immersive : pas de
  // navbar, de footer marketing ni de bouton de contact flottant par-dessus.
  estEnEntrainement = signal(false);

  constructor(private router: Router) {
    this.estEnEntrainement.set(this.router.url.includes('/entrainement'));
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe((e) => {
      this.estEnEntrainement.set(e.urlAfterRedirects.includes('/entrainement'));
    });
  }
}
