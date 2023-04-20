import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { GenericErrorHandler } from '../../com.kodekonveyor.common/GenericErrorHandler';
import { changeUser } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { catchError, exhaustMap, type Observable } from 'rxjs';
import { type Action } from '@ngrx/store';

@Injectable()
export class FollowAuthenticatedStateEffect {
  constructor(
    private readonly authService: AuthService,
    private readonly genericErrorHandlerService: GenericErrorHandler,
    private readonly synchronizer: Synchronizer
  ) {
    this.followAuthenticatedState = this.followAuthenticatedState.bind(this);
  }

  followAuthenticatedState(): Observable<Action> {
    return this.authService.user$.pipe(
      exhaustMap(this.synchronizer.dispatcher(changeUser)),
      catchError(this.genericErrorHandlerService.run)
    );
  }
}
