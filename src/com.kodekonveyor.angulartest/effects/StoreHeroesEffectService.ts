import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { type Action } from '@ngrx/store';
import { type Observable } from 'rxjs';
import { exhaustMap, catchError } from 'rxjs/operators';
import { GenericErrorHandlerService } from 'src/com.kodekonveyor.common/GenericErrorHandlerService';
import { storeHeroes } from '../repositories/actions';
import { StoreHeroesService } from '../services/StoreHeroesService';

@Injectable()
export class StoreHeroesEffectService {
  constructor(
    private readonly actions$: Actions,
    private readonly genericErrorHandlerService: GenericErrorHandlerService,
    private readonly storeHeroesService: StoreHeroesService
  ) {
    this.storeHeroesEffect = this.storeHeroesEffect.bind(this);
  }

  storeHeroesEffect(): Observable<Action> {
    return this.actions$.pipe(
      ofType(storeHeroes.type),
      exhaustMap(this.storeHeroesService.storeHeroes),
      catchError(this.genericErrorHandlerService.genericErrorHandler)
    );
  }
}
