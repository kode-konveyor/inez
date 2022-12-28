import { Component, Input } from '@angular/core'
import { Hero } from 'src/types/Hero';
import { appData } from '../app.component';
import { SelectHeroService } from '../../services/SelectHeroService';

@Component({
  selector: 'heroitem',
  templateUrl: './heroitem.component.html',
  styleUrls: ['./heroitem.component.css']
})
export class HeroItemComponent {

  appData = appData;
  @Input() hero!: Hero;
  selectHeroService: SelectHeroService;

  constructor(selectHeroService: SelectHeroService) {
    this.selectHeroService = selectHeroService;
  }

}


