import { Injectable } from '@angular/core';
import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';

@Injectable()
export class HeroesRepository {
  public readonly heroes: Heroes = [];
}
