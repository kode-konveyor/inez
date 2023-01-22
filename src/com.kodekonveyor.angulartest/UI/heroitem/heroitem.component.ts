import { Component, Input } from '@angular/core'
import { Hero } from 'src/com.kodekonveyor.angulartest/types/Hero';
import { IsThisHeroSelectedForEditingService } from '../../services/IsThisHeroSelectedForEditingService';
import { SelectHeroForEditingService } from '../../services/SelectHeroForEditingService';
import { combineLatest, map, Observable, of } from 'rxjs';
import { SynchronizeService } from 'src/com.kodekonveyor.angulartest/services/SynchronizeService';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/com.kodekonveyor.angulartest/repositories/AppStore';

@Component({
  selector: 'heroitem',
  templateUrl: './heroitem.component.html'
})
export class HeroitemComponent {

  @Input() hero!: Hero;
  @Input() id!: string;
  selected: Observable<Boolean>;

  constructor(
    private readonly isThisHeroSelectedForEditingService: IsThisHeroSelectedForEditingService,
    private readonly synchronizeService: SynchronizeService,
    private readonly selectHeroForEditingService: SelectHeroForEditingService,
    private readonly store: Store<AppStore>
  ) {
    this.selected = combineLatest([
      of(this.hero),
      synchronizeService.fromStore<Hero>('selectedHero')
    ])
      .pipe(map<[Hero, Hero], Boolean>(
        isThisHeroSelectedForEditingService.run.apply
      ))
  }

  heroitemOnClick(): void {
    this.selectHeroForEditingService.run(this.hero)
  }
}


