import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { AuthService } from '@auth0/auth0-angular';
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { UrlMapConstants } from 'src/com.kodekonveyor.angulartest/services/UrlMapConstants';
import { Config } from 'src/com.kodekonveyor.angulartest/types/Config';
import { GenericErrorHandlerService } from '../com.kodekonveyor.common/GenericErrorHandlerService';
import { storeConfig, changeUser } from 'src/com.kodekonveyor.angulartest/repositories/actions';

@Injectable()
export class Pipelines {
  constructor(
    private readonly authService: AuthService,
    private readonly httpClient: HttpClient,
    private readonly genericErrorHandlerService: GenericErrorHandlerService,
    private readonly synchronizer: Synchronizer,
  ) {

    httpClient.get<Config>(UrlMapConstants.CONFIG_URL)
      .subscribe({
        next: synchronizer.dispatcher(storeConfig),
        error: genericErrorHandlerService.run,
        complete: () => { }
      });

    authService.user$.subscribe(
      {
        next: synchronizer.dispatcher(changeUser),
        error: genericErrorHandlerService.run
      }
    )
  }
}

