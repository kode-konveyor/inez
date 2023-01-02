import { Hero } from '../types/Hero';
import { Injectable } from '@angular/core';


@Injectable()
export class SelectedHeroRepository {
  public selectedHero?: Hero;
}

