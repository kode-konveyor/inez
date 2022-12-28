import { appData } from '../app.component';
import { Hero } from '../../types/Hero';
import { Injectable } from '@angular/core';

@Injectable()
export class SelectHeroService {
  call(hero: Hero): void {
    appData.selectedHero = hero;
  }
}
