import { Component, OnInit } from '@angular/core'
import { appData } from '../app.component'
import { Hero } from '../../types/Hero'
import { HEROES } from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES
  appData = appData;

  onSelect(hero: Hero): void {
    appData.selectedHero = hero;
  }

  ngOnInit(): void {
  }
}
