import { Component } from '@angular/core'
import { SelectHeroRepository } from 'src/services/SelectHeroService';
import { Hero } from 'src/types/Hero'

@Component({
  selector: 'heroeditor',
  templateUrl: './heroeditor.component.html',
  styleUrls: ['./heroeditor.component.css']
})
export class HeroeditorComponent {
  hero?: Hero;
  heroSetter: SelectHeroRepository;

  constructor(heroSetter: SelectHeroRepository) {
    this.heroSetter = heroSetter;
    this.heroSetter.selectedHeroEvent.subscribe(this.setHero)
  }

  setHero = (hero: Hero): void => {
    this.hero = hero;
  }

}
