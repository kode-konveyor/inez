import { Component, Input } from '@angular/core'
import { Hero } from 'src/types/Hero';
import { SelectedHeroRepository } from '../../services/SelectedHeroRepository';
import { HeroItemComponentModel } from './HeroItemComponentModel';

@Component({
  selector: 'heroitem',
  templateUrl: './heroitem.component.html',
  styleUrls: ['../../assets/app.css']
})
export class HeroItemComponent implements HeroItemComponentModel {

  @Input() hero!: Hero;

  selectedHeroRepository: SelectedHeroRepository;

  constructor(selectedHeroRepository: SelectedHeroRepository) {
    this.selectedHeroRepository = selectedHeroRepository;
  }

}


