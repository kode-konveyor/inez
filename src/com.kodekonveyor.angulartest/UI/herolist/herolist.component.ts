import { Component, Input } from '@angular/core'
import { Observable } from 'rxjs';
import { SelectHeroesWithMatchingNamesService } from 'src/com.kodekonveyor.angulartest/services/SelectHeroesWithMatchingNamesService';
import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';
import { HeroListComponentModel } from './HeroListComponentModel';

@Component({
  selector: 'herolist',
  templateUrl: './herolist.component.html'
})
export class HeroListComponent implements HeroListComponentModel {
  @Input() heroes!: Observable<Heroes>;
  @Input() id!: string;

  selectHeroesWithMatchingNamesService: SelectHeroesWithMatchingNamesService;

  filterForHeroitem(heroes: Heroes | null): Heroes {
    if (heroes == null) {
      return [];
    }
    return this.selectHeroesWithMatchingNamesService.run(heroes)
  }

  constructor(selectHeroesWithMatchingNamesService: SelectHeroesWithMatchingNamesService) {
    this.selectHeroesWithMatchingNamesService = selectHeroesWithMatchingNamesService;
  }
}
