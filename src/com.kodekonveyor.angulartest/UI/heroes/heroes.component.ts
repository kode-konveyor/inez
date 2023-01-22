import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearSelectedHero, setCreateMode } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { AppStore } from 'src/com.kodekonveyor.angulartest/repositories/AppStore';

import { InitializeStatesService } from 'src/com.kodekonveyor.angulartest/services/InitializeStatesService';
import { SynchronizeService } from 'src/com.kodekonveyor.angulartest/services/SynchronizeService';
import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';
import { HeroesComponentModel } from './HeroesComponentModel';


@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements HeroesComponentModel, OnInit {

  initializeStatesService: InitializeStatesService;
  synchronizeService: SynchronizeService
  store: Store<AppStore>
  id: string = "heroes";
  heroes: Observable<Heroes>;

  constructor(initializeStatesService: InitializeStatesService,
    synchronizeService: SynchronizeService,
    store: Store<AppStore>) {
    this.initializeStatesService = initializeStatesService;
    this.synchronizeService = synchronizeService;
    this.store = store;


    this.heroes = this.synchronizeService.fromStore<Heroes>('heroes');
  }

  ngOnInit(): void {
    this.initializeStatesService.run(this)
  }

  plusbuttonOnClick(): void {

    this.store.dispatch(setCreateMode());
    this.store.dispatch(clearSelectedHero());
  }

}

