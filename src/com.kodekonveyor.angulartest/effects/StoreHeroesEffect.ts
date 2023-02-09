import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, catchError } from 'rxjs/operators';
import { GenericErrorHandler } from 'src/com.kodekonveyor.common/GenericErrorHandler';
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { storeHeroes } from '../repositories/actions';
import { StoreHeroesService } from '../services/StoreHeroesService';

@Injectable()
export class StoreHeroesEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly genericErrorHandlerService: GenericErrorHandler,
    private readonly storeHeroesService: StoreHeroesService,
    private readonly synchronizer: Synchronizer
  ) { }

  changeUsereffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(storeHeroes.type),
      exhaustMap(this.storeHeroesService.run),
      catchError(this.genericErrorHandlerService.run),
    ),
    { dispatch: true }
  )
}

