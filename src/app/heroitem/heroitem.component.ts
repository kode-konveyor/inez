import { Component, Input } from '@angular/core'
import { Hero } from 'src/types/Hero';
import { SelectHeroRepository } from '../../services/SelectHeroService';

@Component({
  selector: 'heroitem',
  templateUrl: './heroitem.component.html',
  styleUrls: ['./heroitem.component.css']
})
export class HeroItemComponent {

  @Input() hero!: Hero;
  @Input() selected?: Hero;

  selectHeroService: SelectHeroRepository;

  constructor(selectHeroService: SelectHeroRepository) {
    this.selectHeroService = selectHeroService;
  }

}


