import { Component } from '@angular/core'
import { SelectedHeroRepository } from 'src/services/SelectedHeroRepository';
import { Hero } from 'src/types/Hero'
import { HeroEditorComponentModel } from './HeroEditorComponentModel';
import { heroeditorSetHeroService } from './HeroeditorSetHeroService';

@Component({
  selector: 'heroeditor',
  templateUrl: './heroeditor.component.html',
  styleUrls: ['./heroeditor.component.css']
})
export class HeroeditorComponent implements HeroEditorComponentModel {
  hero?: Hero;
  selectedHeroRepository: SelectedHeroRepository;

  constructor(selectedHeroRepository: SelectedHeroRepository) {
    this.selectedHeroRepository = selectedHeroRepository;
    this.selectedHeroRepository.selectedHeroEvent.subscribe((hero: Hero) => heroeditorSetHeroService(this, hero))
  }

}


