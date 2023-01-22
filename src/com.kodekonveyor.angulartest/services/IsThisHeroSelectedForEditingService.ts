import { Injectable } from '@angular/core';
import { Hero } from '../types/Hero';

@Injectable()
export class IsThisHeroSelectedForEditingService {
  run(thisHero: Hero, selectedHero: Hero): Boolean {
    return thisHero === selectedHero
  }
}

