import { Injectable } from '@angular/core';
import { UrlMapConstants } from './UrlMapConstants';
import { HttpClient } from '@angular/common/http';
import { type Observable } from 'rxjs';
import { type createSelbri, type storeConfig } from '../repositories/actions';
import { type ActionArgument } from 'src/com.kodekonveyor.common/ActionArgument';
import { type Selbri } from '../types/Selbri';

@Injectable()
export class SaveSelbriService {
  constructor(readonly httpClient: HttpClient) {
    this.saveSelbri = this.saveSelbri.bind(this);
  }

  saveSelbri(arg: {
    createEvent: ActionArgument<typeof createSelbri>;
    configEvent: ActionArgument<typeof storeConfig>;
  }): Observable<Selbri> {
    const baseURL = arg.configEvent.payload.baseUrl;
    const selbri: Selbri = { id: '', representation: arg.createEvent.payload };
    return this.httpClient.post<Selbri>(
      baseURL.concat(UrlMapConstants.ADD_HERO_URL),
      selbri
    );
  }
}
