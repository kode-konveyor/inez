import { Component } from '@angular/core'
import { appData } from '../app.component';
import { SelectHeroService } from './SelectHeroService';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  appData = appData;
  selectHeroService: SelectHeroService;

  constructor(selectHeroService: SelectHeroService) {
    this.selectHeroService = selectHeroService;
  }
}


