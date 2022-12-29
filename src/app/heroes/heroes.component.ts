import { Component, OnInit } from '@angular/core'
import { HeroesRepository } from 'src/services/HeroesRepository';
import { SelectedHeroRepository } from 'src/services/SelectedHeroRepository';
import { Hero } from 'src/types/Hero';
import { HeroesComponentInitService } from './HeroesComponentInitService';
import { HeroesComponentModel } from './HeroesComponentModel';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['../../assets/app.css']
})
export class HeroesComponent implements HeroesComponentModel, OnInit {

  heroes?: Hero[];

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

