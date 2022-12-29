import { Component, Input } from '@angular/core'
import { Hero } from 'src/types/Hero';
import { SelectedHeroRepository } from '../../services/SelectedHeroRepository';

@Component({
  selector: 'heroitem',
  templateUrl: './heroitem.component.html',
  styleUrls: ['./heroitem.component.css']
})
export class HeroItemComponent {

  @Input() hero!: Hero;

  selectedHeroRepository: SelectedHeroRepository;

  constructor(selectHeroService: SelectedHeroRepository) {
    this.selectedHeroRepository = selectHeroService;
  }

}


