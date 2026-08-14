import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslatePipe } from '@ngx-translate/core';
import { IconComponent } from '../icon/icon.component';
import { Mouvement } from '../../../core/models/models';
import { environment } from '../../../../environments/environment';
import { LangService } from '../../../core/services/lang.service';
import { LocalisePipe } from '../../pipes/localise.pipe';
import { LocaliseListePipe } from '../../pipes/localise-liste.pipe';

@Component({
  selector: 'app-movement-card',
  standalone: true,
  imports: [CommonModule, IconComponent, TranslatePipe, LocalisePipe, LocaliseListePipe],
  templateUrl: './movement-card.component.html',
  styleUrls: ['./movement-card.component.css'],
})
export class MovementCardComponent {
  @Input({ required: true }) mouvement!: Mouvement;
  @Input() ordre = 0;
  @Input() repetitions?: string;
  @Input() series?: number;

  detailsOuverts = false;

  constructor(
    private sanitizer: DomSanitizer,
    public lang: LangService,
  ) {}

  basculerDetails(): void {
    this.detailsOuverts = !this.detailsOuverts;
  }

  get videoCloudflarePrete(): boolean {
    return !!this.mouvement.cfStreamUid && this.mouvement.cfStreamStatus === 'ready';
  }

  get urlIframeCloudflare(): SafeResourceUrl {
    const url = `https://${environment.cfStreamCustomerCode}.cloudflarestream.com/${this.mouvement.cfStreamUid}/iframe`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
