import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { type Action } from '@ngrx/store';
import { exhaustMap, type Observable, of } from 'rxjs';
import { ACTION_LOG_LABEL } from './Messages';

@Injectable()
export class LoggingEffectService {
  constructor(private readonly actions$: Actions) {
    this.loggingEffect = this.loggingEffect.bind(this);
  }

  loggingEffect(): Observable<Action> {
    return this.actions$.pipe(
      exhaustMap((e) => {
        console.log(ACTION_LOG_LABEL, e);
        return of();
      })
    );
  }
}
