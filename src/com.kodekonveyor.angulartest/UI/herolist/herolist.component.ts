import { Component, Input } from '@angular/core'
import { SelectHeroesWithMatchingNamesService } from 'src/com.kodekonveyor.angulartest/services/SelectHeroesWithMatchingNamesService';
import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';
import { HeroListComponentModel } from './HeroListComponentModel';

@Component({
  selector: 'herolist',
  templateUrl: './herolist.component.html'
})
export class HeroListComponent implements HeroListComponentModel {
  @Input() heroes?: Heroes;
  @Input() id!: string;

  selectHeroesWithMatchingNamesService: SelectHeroesWithMatchingNamesService;

  filterForHeroitem(heroes: Heroes): Heroes {
    return this.selectHeroesWithMatchingNamesService.run()
  }

  constructor(selectHeroesWithMatchingNamesService: SelectHeroesWithMatchingNamesService) {
    this.selectHeroesWithMatchingNamesService = selectHeroesWithMatchingNamesService;

  }
}
