import { Injectable } from '@angular/core';
import { type Observable, of } from 'rxjs';
import { type ActionArgument } from 'src/com.kodekonveyor.common/ActionArgument';
import { storeHero, type storeHeroes } from '../repositories/actions';

@Injectable()
export class StoreHeroesService {
  storeHeroes(
    action: ActionArgument<typeof storeHeroes>
  ): Observable<ReturnType<typeof storeHero>> {
    const actions: Array<ReturnType<typeof storeHero>> = [];
    for (const hero of action.payload) {
      actions.push(storeHero({ payload: hero }));
    }
    return of(...actions);
  }
}
