export type Genre = 'HOMME' | 'FEMME' | 'MIXTE';
export type Niveau = 'DEBUTANT' | 'INTERMEDIAIRE' | 'AVANCE';

export interface Mouvement {
  id: string;
  nom: string;
  description?: string;
  videoUrl: string;
  muscleprincipal?: string;
  musclesSecondaires: string[];
  niveau: Niveau;
  materiel: string[];
  erreursFrequentes: string[];
  regression?: string;
  progression?: string;
  dureeConseillee?: number;
}

export interface SeanceMouvement {
  id: string;
  ordre: number;
  series?: number;
  repetitions?: string;
  mouvement: Mouvement;
}

export interface Seance {
  id: string;
  titre: string;
  description?: string;
  genre: Genre;
  niveau: Niveau;
  dureeMin: number;
  imageUrl?: string;
  categorie?: string;
  createdAt?: string;
  mouvements?: SeanceMouvement[];
}

export interface RangeeSeances {
  categorie: string;
  seances: Seance[];
}

export interface User {
  id: string;
  email: string;
  prenom: string;
  role: 'USER' | 'ADMIN';
  xp: number;
  streak: number;
}

export interface ReponseAuth {
  token: string;
  user: User;
}

export interface HistoriqueEntry {
  id: string;
  seanceId: string;
  terminee: boolean;
  xpGagne: number;
  createdAt: string;
  seance?: { titre: string; categorie?: string };
}

export interface ReponseValidation {
  historique: HistoriqueEntry;
  user: User;
}
