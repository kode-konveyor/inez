import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subject } from 'rxjs';
import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';
import { statesInitialState } from '../repositories/StatesRepository';
import { States } from '../types/States';
import { Synchronizer } from './Synchronizer';
import { UrlMapConstants } from './UrlMapConstants';

@Injectable()
export class ObtainHeroesService {

  states: States = statesInitialState;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly synchronizer: Synchronizer,
    public auth: AuthService
  ) {
    this.synchronizer.fromStore('states').subscribe(synchronizer.synchronizeCopyTo(this, 'states'))
  }

  public run(): Subject<Heroes> {
    const r = new Subject<Heroes>();
    this.auth.user$.subscribe(
      (user) => {
        console.log("user", user)
        if (user != null) {
          console.log("getting")
          const url = this.states.baseURL.concat(UrlMapConstants.GET_HEROES_URL)
          console.log(url);
          this.httpClient.get<Heroes>(url).subscribe(
            (h) => {
              console.log("got", h)
              r.next(h)
            }
          )
        }
      }
    )
    return r;
  }
}
