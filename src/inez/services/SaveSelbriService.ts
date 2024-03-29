import { Injectable } from '@angular/core';
import { UrlMapConstants } from './UrlMapConstants';
import { HttpClient } from '@angular/common/http';
import { type Observable } from 'rxjs';
import { type createSelbri, type storeConfig } from '../repositories/actions';
import { type ActionArgument } from 'src/common/ActionArgument';
import { type SelbriDTO } from '@kodekonveyor/inez-server/src/DTO/SelbriDTO';

@Injectable()
export class SaveSelbriService {
  constructor(readonly httpClient: HttpClient) {
    this.saveSelbri = this.saveSelbri.bind(this);
  }

  saveSelbri(arg: {
    createEvent: ActionArgument<typeof createSelbri>;
    configEvent: ActionArgument<typeof storeConfig>;
  }): Observable<SelbriDTO> {
    const baseURL = arg.configEvent.payload.baseUrl;
    const selbri: SelbriDTO = {
      id: '',
      representation: arg.createEvent.payload,
      references: [],
    };
    return this.httpClient.post<SelbriDTO>(
      baseURL.concat(UrlMapConstants.ADD_HERO_URL),
      selbri
    );
  }
}
