import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActionArgument } from 'src/com.kodekonveyor.common/ActionArgument';
import { storeHero, storeHeroes } from '../repositories/actions';

@Injectable()
export class StoreHeroesService {

  run = (action: ActionArgument<typeof storeHeroes>): Observable<ReturnType<typeof storeHero>> => {
    const actions: Array<ReturnType<typeof storeHero>> = []
    for (const hero of action.payload) {
      actions.push(storeHero({ payload: hero }))
    }
    return of(...actions);
  };


}
