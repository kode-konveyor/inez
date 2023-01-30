import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearSelectedHero, setCreateMode } from '../repositories/actions';
import { AppStore } from '../types/AppStore';

@Injectable()
export class ChangeToCreateModeService {

  constructor(
    private readonly store: Store<AppStore>
  ) { }

  public run(): void {
    this.store.dispatch(setCreateMode({ payload: true }));
    this.store.dispatch(clearSelectedHero());
  }
}
