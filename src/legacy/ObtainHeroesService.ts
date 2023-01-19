import { Injectable } from '@angular/core';
import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';
import { HEROES } from './mock-heroes';

@Injectable()
export class ObtainHeroesService {

  readonly REST_API_SERVER = "http://localhost:8080/angulartest/heroes";

  constructor(private httpClient: HttpClient) { }

  public run(): Heroes {
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
