import { Component, OnInit } from '@angular/core'
import { Heroes } from 'src/types/Heroes';
import { HeroesComponentInitService } from '../../services/HeroesComponentInitService';
import { HeroesComponentModel } from './HeroesComponentModel';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['../../assets/app.css']
})
export class HeroesComponent implements HeroesComponentModel, OnInit {

  heroes?: Heroes;

  heroesComponentInitService: HeroesComponentInitService;

  constructor(heroesComponentInitService: HeroesComponentInitService) {
    this.heroesComponentInitService = heroesComponentInitService;
  }

  ngOnInit(): void {
    this.heroesComponentInitService.heroesComponentInitService(this)
  }
}

