import { Component, Input } from '@angular/core'
import { SelectHeroesWithMatchingNamesService } from 'src/services/SelectHeroesWithMatchingNamesService';
import { Heroes } from 'src/types/Heroes';
import { HeroListComponentModel } from './HeroListComponentModel';

@Component({
  selector: 'herolist',
  templateUrl: './herolist.component.html'
})
export class HeroListComponent implements HeroListComponentModel {
  @Input() heroes?: Heroes;
  selectHeroesWithMatchingNamesService: SelectHeroesWithMatchingNamesService;

  filterForHeroitem(heroes: Heroes): Heroes {
    return this.selectHeroesWithMatchingNamesService.run()
  }

  constructor(selectHeroesWithMatchingNamesService: SelectHeroesWithMatchingNamesService) {
    this.selectHeroesWithMatchingNamesService = selectHeroesWithMatchingNamesService;

  }
}
