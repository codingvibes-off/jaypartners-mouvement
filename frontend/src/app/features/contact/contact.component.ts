import { Component } from '@angular/core';

interface ReseauContact {
  nom: string;
  handle: string;
  description: string;
  href: string;
  icone: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  readonly reseaux: ReseauContact[] = [
    {
      nom: 'WhatsApp',
      handle: 'Groupe communauté',
      description: "Rejoins le groupe pour poser tes questions et suivre l'actu des séances.",
      href: 'https://chat.whatsapp.com/JjnHgQQxVQMF5olJZFvjlc?s=cl&p=i&ilr=4&amv=2',
      icone: '💬',
    },
    {
      nom: 'Instagram',
      handle: '@jaypartner.s',
      description: 'Exercices, conseils et coulisses au quotidien.',
      href: 'https://www.instagram.com/jaypartner.s/',
      icone: '📸',
    },
    {
      nom: 'TikTok',
      handle: '@jaypartner.s',
      description: 'Des mouvements et astuces en vidéo courte.',
      href: 'https://www.tiktok.com/@jaypartner.s',
      icone: '🎵',
    },
    {
      nom: 'YouTube',
      handle: '@JAYPARTNERS',
      description: 'Séances complètes et vidéos de fond.',
      href: 'https://www.youtube.com/@JAYPARTNERS',
      icone: '▶️',
    },
    {
      nom: 'LinkedIn',
      handle: 'Justine Pegas',
      description: 'Parcours professionnel et actualités.',
      href: 'https://www.linkedin.com/in/justine-pegas-3028461b7/',
      icone: '💼',
    },
    {
      nom: 'Calendly',
      handle: 'Réserver un coaching',
      description: 'Prends rendez-vous directement pour une séance.',
      href: 'https://calendly.com/jaypartners-coach',
      icone: '📅',
    },
  ];
}
