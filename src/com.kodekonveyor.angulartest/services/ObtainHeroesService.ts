import { Injectable } from '@angular/core';
import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';
import { UrlMapConstants } from './UrlMapConstants';
import { Hero } from '../types/Hero';
import { addHero } from '../repositories/actions';
import { ObtainHeroesServiceBase } from '../servicebases/ObtainHeroesServiceBase';

@Injectable()
export class ObtainHeroesService extends ObtainHeroesServiceBase {

  public run(): void {
    this.auth.user$.subscribe(
      user => {
        if (this.baseURL != null) {
          const url = this.baseURL.concat(UrlMapConstants.GET_HEROES_URL)
          this.httpClient.get<Heroes>(url).subscribe(
            (heroes: Heroes) => {
              if (heroes != null) {
                heroes.forEach(
                  (hero: Hero) => {
                    this.store.dispatch(addHero({ payload: hero }));
                  }
                )
              }
            }
          )
        }
      }
    )
  }
}
