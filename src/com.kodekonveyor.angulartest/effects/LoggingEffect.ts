import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { type Action } from '@ngrx/store';
import { exhaustMap, type Observable, of } from 'rxjs';

@Injectable()
export class LoggingEffect {
  constructor(private readonly actions$: Actions) {
    this.loggingEffect = this.loggingEffect.bind(this);
  }

  loggingEffect(): Observable<Action> {
    return this.actions$.pipe(
      exhaustMap((e) => {
        console.log('action', e);
        return of();
      })
    );
  }
}
