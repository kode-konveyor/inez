import { Hero } from '../types/Hero';
import { EventEmitter, Injectable } from '@angular/core';


@Injectable()
export class SelectedHeroRepository {
  public selectedHero?: Hero;
  public readonly selectedHeroEvent = new EventEmitter<Hero>();

  setSelectedHero(hero: Hero): void {
    this.selectedHero = hero;
    this.selectedHeroEvent.emit(hero);
  }

}

