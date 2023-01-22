import { Component, Input } from '@angular/core'
import { Hero } from 'src/com.kodekonveyor.angulartest/types/Hero';
import { IsThisHeroSelectedForEditingService } from '../../services/IsThisHeroSelectedForEditingService';
import { SelectHeroForEditingService } from '../../services/SelectHeroForEditingService';
import { combineLatest, map, Observable, of } from 'rxjs';
import { SynchronizeService } from 'src/com.kodekonveyor.angulartest/services/SynchronizeService';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/com.kodekonveyor.angulartest/repositories/AppStore';
import { setSelectedHero } from 'src/com.kodekonveyor.angulartest/repositories/actions';

@Component({
  selector: 'heroitem',
  templateUrl: './heroitem.component.html'
})
export class HeroitemComponent {

  @Input() hero!: Hero;
  @Input() id!: string;
  selected: Observable<Boolean>;

  isThisHeroSelectedForEditingService: IsThisHeroSelectedForEditingService;
  selectHeroForEditingService: SelectHeroForEditingService;
  store: Store<AppStore>;

  constructor(heroItemClassSelectorService: IsThisHeroSelectedForEditingService,
    heroItemOnClickService: SelectHeroForEditingService,
    synchronizeService: SynchronizeService,
    store: Store<AppStore>) {
    this.isThisHeroSelectedForEditingService = heroItemClassSelectorService;
    this.selectHeroForEditingService = heroItemOnClickService;
    this.store = store;
    this.selected = combineLatest([
      of(this.hero),
      synchronizeService.fromStore<Hero>('selectedHero')
    ])
      .pipe(map<[Hero, Hero], Boolean>(
        this.isThisHeroSelectedForEditingService.run.apply
      ))
  }

  heroitemOnClick(): void {
    this.store.dispatch(setSelectedHero({ hero: this.hero }))
  }
}


