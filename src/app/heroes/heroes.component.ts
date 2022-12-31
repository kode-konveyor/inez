import { Component, OnInit } from '@angular/core'
import { InitializeStatesService } from 'src/services/InitializeStatesService';
import { HeroesRepository } from '../repositories/HeroesRepository';
import { HeroesComponentModel } from './HeroesComponentModel';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements HeroesComponentModel, OnInit {

  initializeStatesService: InitializeStatesService;
  heroesRepository: HeroesRepository;


  constructor(initializeStatesService: InitializeStatesService, heroesRepository: HeroesRepository) {
    this.initializeStatesService = initializeStatesService;
    this.heroesRepository = heroesRepository;
  }

  ngOnInit(): void {
    this.initializeStatesService.run(this)
  }
}

