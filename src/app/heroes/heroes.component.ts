import { Component, OnInit } from '@angular/core'
import { HeroesRepository } from 'src/services/HeroesRepository';
import { SelectedHeroRepository } from 'src/services/SelectedHeroRepository';
import { Hero } from 'src/types/Hero';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['../../assets/app.css']
})
export class HeroesComponent implements OnInit {
  heroes?: Hero[];
  heroesRepository: HeroesRepository;
  selectedHeroRepository: SelectedHeroRepository;

  constructor(heroesRepository: HeroesRepository, selectedHeroRepository: SelectedHeroRepository) {
    this.heroesRepository = heroesRepository;
    this.selectedHeroRepository = selectedHeroRepository;
  }

  ngOnInit(): void {
    this.heroes = this.heroesRepository.heroes;
  }
}


