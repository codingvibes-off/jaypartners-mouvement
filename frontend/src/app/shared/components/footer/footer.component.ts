import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { estActive } from '../../../core/guards/fonctionnalite.guard';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  /** Sections masquées selon environment.fonctionnalites. */
  readonly estActive = estActive;

  anneeCourante = new Date().getFullYear();
}
