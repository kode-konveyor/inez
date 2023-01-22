import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';
import { UrlMapConstants } from './UrlMapConstants';

@Injectable()
export class ObtainHeroesService {

  constructor(private readonly httpClient: HttpClient) { }

  public run(): Observable<Heroes> {
    return this.httpClient.get<Heroes>(UrlMapConstants.GET_HEROES_URL);
  }
}
