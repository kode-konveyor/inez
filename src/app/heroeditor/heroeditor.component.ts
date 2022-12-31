import { Component } from '@angular/core'
import { SelectedHeroRepository } from 'src/app/repositories/SelectedHeroRepository';
import { Hero } from 'src/types/Hero'
import { HeroEditorComponentModel } from './HeroEditorComponentModel';
import { heroeditorSetHeroService } from '../../services/HeroeditorSetHeroService';

@Component({
  selector: 'heroeditor',
  templateUrl: './heroeditor.component.html',
  styleUrls: ['../../assets/app.css']
})
export class HeroeditorComponent implements HeroEditorComponentModel {
  hero?: Hero;

  selectedHeroRepository: SelectedHeroRepository;

  constructor(selectedHeroRepository: SelectedHeroRepository) {
    this.selectedHeroRepository = selectedHeroRepository;
    this.selectedHeroRepository.selectedHeroEvent.subscribe((hero: Hero) => heroeditorSetHeroService(this, hero))
  }

}


