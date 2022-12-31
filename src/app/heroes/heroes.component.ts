import { Component, OnInit } from '@angular/core'
import { InitializeStatesService } from 'src/services/InitializeStatesService';
import { Heroes } from 'src/types/Heroes';
import { GetTheActualListOfHeroesService } from '../../services/GetTheActualListOfHeroesService';
import { HeroesComponentModel } from './HeroesComponentModel';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements HeroesComponentModel, OnInit {

  heroes?: Heroes;
  initializeStatesService: InitializeStatesService;


  constructor(initializeStatesService: InitializeStatesService) {
    this.initializeStatesService = initializeStatesService;
  }

  ngOnInit(): void {
    this.initializeStatesService.run(this)
  }
}

