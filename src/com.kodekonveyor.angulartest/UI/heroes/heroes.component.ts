import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStore } from 'src/com.kodekonveyor.angulartest/repositories/AppStore';
import { InitializeStatesService } from 'src/com.kodekonveyor.angulartest/services/InitializeStatesService';
import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';
import { HeroesComponentModel } from './HeroesComponentModel';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements HeroesComponentModel, OnInit {

  initializeStatesService: InitializeStatesService;
  id: string = "heroes";
  heroes: Observable<Heroes>;


  constructor(initializeStatesService: InitializeStatesService, private readonly store: Store<AppStore>) {
    this.initializeStatesService = initializeStatesService;
    this.heroes = store.select('heroes')
  }

  ngOnInit(): void {
    this.initializeStatesService.run(this)
  }

}

