import { Injectable } from '@angular/core'
import { AuthService } from '@auth0/auth0-angular';
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { GenericErrorHandler } from '../../com.kodekonveyor.common/GenericErrorHandler';
import { changeUser } from 'src/com.kodekonveyor.angulartest/repositories/actions';

@Injectable()
export class FollowAuthenticatedStateEffect {
  constructor(
    private readonly authService: AuthService,
    private readonly genericErrorHandlerService: GenericErrorHandler,
    private readonly synchronizer: Synchronizer,
  ) { }


  followAuthenticatedState = this.authService.user$.subscribe(
    {
      next: this.synchronizer.dispatcher(changeUser),
      error: this.genericErrorHandlerService.run
    }
  )
}


