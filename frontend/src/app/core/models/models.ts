export type Genre = 'HOMME' | 'FEMME' | 'MIXTE';
export type Niveau = 'DEBUTANT' | 'INTERMEDIAIRE' | 'AVANCE';
export type Coach = 'FEMME' | 'HOMME' | 'DUO';
export type JourSemaine = 'LUNDI' | 'MARDI' | 'MERCREDI' | 'JEUDI' | 'VENDREDI' | 'SAMEDI' | 'DIMANCHE';

export interface Mouvement {
  id: string;
  nom: string;
  nomEn?: string;
  description?: string;
  descriptionEn?: string;
  videoUrl: string;
  cfStreamUid?: string;
  cfStreamStatus?: string;
  muscleprincipal?: string;
  muscleprincipalEn?: string;
  musclesSecondaires: string[];
  musclesSecondairesEn?: string[];
  niveau: Niveau;
  materiel: string[];
  materielEn?: string[];
  erreursFrequentes: string[];
  erreursFrequentesEn?: string[];
  regression?: string;
  regressionEn?: string;
  progression?: string;
  progressionEn?: string;
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
  titreEn?: string;
  description?: string;
  descriptionEn?: string;
  genre: Genre;
  coach: Coach;
  niveau: Niveau;
  dureeMin: number;
  imageUrl?: string;
  categorie?: string;
  categorieEn?: string;
  createdAt?: string;
  mouvements?: SeanceMouvement[];
}

export interface RangeeSeances {
  categorie: string;
  categorieEn?: string;
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

export interface EngagementHebdomadaire {
  id: string;
  seanceId: string;
  jour: JourSemaine;
  dureeSemaines: number;
  dateDebut: string;
  createdAt: string;
}
