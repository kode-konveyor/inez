import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store';
import { setHeroFilter } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { AppState } from 'src/com.kodekonveyor.angulartest/types/AppState';

@Injectable()
export class SetHeroFilterService {

  constructor(
    private readonly store: Store<AppState>
  ) { }

  public run(heroFilter: String): void {
    this.store.dispatch(setHeroFilter({ payload: heroFilter }));
  }
}


