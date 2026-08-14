import { Pipe, PipeTransform } from '@angular/core';

/**
 * Bascule entre le champ français (source) et son équivalent anglais.
 * Le 3e argument (langue courante) doit être passé explicitement pour que ce
 * pipe pur soit réévalué quand la langue change : `{{ x.nom | localise: x.nomEn : lang.langue() }}`.
 * Repli automatique sur le français si la traduction anglaise est absente.
 */
@Pipe({ name: 'localise', standalone: true })
export class LocalisePipe implements PipeTransform {
  transform(fr: string | null | undefined, en: string | null | undefined, langueCourante: string): string {
    if (langueCourante === 'en' && en) return en;
    return fr || '';
  }
}
