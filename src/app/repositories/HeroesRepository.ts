import { EventEmitter, Injectable } from '@angular/core';
import { obtainHeroesService } from '../../services/ObtainHeroesService';
import { Heroes } from 'src/types/Heroes';

@Injectable()
export class HeroesRepository {
  private _heroes!: Heroes;
  public readonly heroesEvent = new EventEmitter<Heroes>();

  private initializeIfUndefined(): void {
    if (this._heroes === undefined) {
      this._heroes = obtainHeroesService();
    }
  }

  get heroes(): Heroes {
    this.initializeIfUndefined();
    return this._heroes.slice()
  }

}

