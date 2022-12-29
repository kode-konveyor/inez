import { Component, OnInit } from '@angular/core'
import { HeroesRepository } from 'src/services/HeroesRepository';
import { SelectedHeroRepository } from 'src/services/SelectedHeroRepository';
import { Heroes } from 'src/types/Heroes';
import { HeroesComponentInitService } from './HeroesComponentInitService';
import { HeroesComponentModel } from './HeroesComponentModel';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['../../assets/app.css']
})
export class HeroesComponent implements HeroesComponentModel, OnInit {

  heroes?: Heroes;

  heroesRepository: HeroesRepository;
  selectedHeroRepository: SelectedHeroRepository;
  heroesComponentInitService: HeroesComponentInitService;

  constructor(heroesRepository: HeroesRepository, selectedHeroRepository: SelectedHeroRepository, heroesComponentInitService: HeroesComponentInitService) {
    this.heroesRepository = heroesRepository;
    this.heroesComponentInitService = heroesComponentInitService;
    this.selectedHeroRepository = selectedHeroRepository;
  }

  ngOnInit(): void {
    this.heroesComponentInitService.heroesComponentInitService(this)
  }
}

