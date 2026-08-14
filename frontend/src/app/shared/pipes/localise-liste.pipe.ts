import { Pipe, PipeTransform } from '@angular/core';

/** Équivalent de LocalisePipe pour les champs tableau (musclesSecondaires, materiel, erreursFrequentes...). */
@Pipe({ name: 'localiseListe', standalone: true })
export class LocaliseListePipe implements PipeTransform {
  transform(fr: string[] | null | undefined, en: string[] | null | undefined, langueCourante: string): string[] {
    if (langueCourante === 'en' && en && en.length > 0) return en;
    return fr || [];
  }
}
