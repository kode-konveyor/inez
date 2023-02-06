import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { storeHero } from '../repositories/actions';
import { Heroes } from '../types/Heroes';

@Injectable()
export class StoreHeroesService {

  run = (action: { payload: Heroes }): Observable<Action> => {
    const actions = []
    for (const hero of action.payload) {
      actions.push(storeHero({ payload: hero }))
    }
    return of(...actions);
  };


}
