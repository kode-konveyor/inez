import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store';
import { setHeroFilter } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { AppStore } from 'src/com.kodekonveyor.angulartest/types/AppStore';

@Injectable()
export class SetHeroFilterService {

  constructor(
    private readonly store: Store<AppStore>
  ) { }

  public run(heroFilter: String): void {
    this.store.dispatch(setHeroFilter({ payload: heroFilter }));
  }
}


