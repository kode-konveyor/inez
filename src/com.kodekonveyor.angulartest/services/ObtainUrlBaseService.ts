import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { first, Subject } from 'rxjs';
import { setBaseUrl } from '../repositories/actions';
import { AppStore } from '../types/AppStore';
import { Config } from '../types/Config';
import { UrlMapConstants } from './UrlMapConstants';

@Injectable()
export class ObtainUrlBaseService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly store: Store<AppStore>
  ) { }

  public run(): Subject<boolean> {
    const subject: Subject<boolean> = new Subject<boolean>()
    this.httpClient.get<Config>(UrlMapConstants.CONFIG_URL)
      .pipe(first())
      .subscribe(
        (result: Config) => {
          this.store.dispatch(setBaseUrl({ payload: result.baseUrl }));
          console.log("new base url ", result)
          subject.next(true)
        });
    return subject;
  }
}

