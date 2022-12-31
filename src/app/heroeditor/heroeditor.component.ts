import { Component } from '@angular/core'
import { SelectedHeroRepository } from 'src/app/repositories/SelectedHeroRepository';
import { HeroEditorComponentModel } from './HeroEditorComponentModel';

@Component({
  selector: 'heroeditor',
  templateUrl: './heroeditor.component.html'
})
export class HeroeditorComponent implements HeroEditorComponentModel {

  selectedHeroRepository: SelectedHeroRepository;

  constructor(selectedHeroRepository: SelectedHeroRepository) {
    this.selectedHeroRepository = selectedHeroRepository;
  }

}


