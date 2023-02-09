import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { UrlMapConstants } from 'src/com.kodekonveyor.angulartest/services/UrlMapConstants';
import { Config } from 'src/com.kodekonveyor.angulartest/types/Config';
import { GenericErrorHandler } from '../../com.kodekonveyor.common/GenericErrorHandler';
import { storeConfig } from 'src/com.kodekonveyor.angulartest/repositories/actions';

@Injectable()
export class ObtainConfigEffect {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly genericErrorHandlerService: GenericErrorHandler,
    private readonly synchronizer: Synchronizer,
  ) { }

  obtainConfig = this.httpClient.get<Config>(UrlMapConstants.CONFIG_URL)
    .subscribe({
      next: this.synchronizer.dispatcher(storeConfig),
      error: this.genericErrorHandlerService.run,
      complete: () => { }
    });
}

