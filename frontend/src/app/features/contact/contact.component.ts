import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface ReseauContact {
  nom: string;
  /** Handle littéral (identique FR/EN, ex: @jaypartner.s) — prioritaire sur handleKey. */
  handle?: string;
  /** Clé de traduction utilisée quand le libellé change selon la langue. */
  handleKey?: string;
  descriptionKey: string;
  href: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  readonly reseaux: ReseauContact[] = [
    {
      nom: 'WhatsApp',
      handleKey: 'contact.whatsappHandle',
      descriptionKey: 'contact.whatsappDescription',
      href: 'https://chat.whatsapp.com/JjnHgQQxVQMF5olJZFvjlc?s=cl&p=i&ilr=4&amv=2',
    },
    {
      nom: 'Instagram',
      handle: '@jaypartner.s',
      descriptionKey: 'contact.instagramDescription',
      href: 'https://www.instagram.com/jaypartner.s/',
    },
    {
      nom: 'TikTok',
      handle: '@jaypartner.s',
      descriptionKey: 'contact.tiktokDescription',
      href: 'https://www.tiktok.com/@jaypartner.s',
    },
    {
      nom: 'YouTube',
      handle: '@JAYPARTNERS',
      descriptionKey: 'contact.youtubeDescription',
      href: 'https://www.youtube.com/@JAYPARTNERS',
    },
    {
      nom: 'LinkedIn',
      handle: 'Justine Pegas',
      descriptionKey: 'contact.linkedinDescription',
      href: 'https://www.linkedin.com/in/justine-pegas-3028461b7/',
    },
    {
      nom: 'Calendly',
      handleKey: 'contact.calendlyHandle',
      descriptionKey: 'contact.calendlyDescription',
      href: 'https://calendly.com/jaypartners-coach',
    },
  ];
}
