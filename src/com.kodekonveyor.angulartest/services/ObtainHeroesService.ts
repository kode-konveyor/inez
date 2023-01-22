import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';

@Injectable()
export class ObtainHeroesService {

  readonly REST_API_URL = "/angulartest/heroes";

  constructor(private readonly httpClient: HttpClient) { }

  public run(): Observable<Heroes> {

    return this.httpClient.get<Heroes>(this.REST_API_URL);
  }
}
