import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearSelectedHero, setCreateMode } from '../repositories/actions';
import { AppState } from '../types/AppState';

@Injectable()
export class ChangeToCreateModeService {

  constructor(
    private readonly store: Store<AppState>
  ) { }

  public run(): void {
    this.store.dispatch(setCreateMode({ payload: true }));
    this.store.dispatch(clearSelectedHero());
  }
}
