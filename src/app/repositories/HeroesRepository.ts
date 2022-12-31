import { EventEmitter, Injectable } from '@angular/core';
import { obtainHeroesService } from '../../services/ObtainHeroesService';
import { Heroes } from 'src/types/Heroes';

@Injectable()
export class HeroesRepository {
  public readonly heroes: Heroes = [];
  public readonly heroesEvent = new EventEmitter<Heroes>();
}

