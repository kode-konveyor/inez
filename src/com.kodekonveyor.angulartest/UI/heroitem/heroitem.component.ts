import { Component, Input, OnInit } from '@angular/core'
import { Hero } from 'src/com.kodekonveyor.angulartest/types/Hero';
import { isThisHeroSelectedForEditingFilter } from '../../filters/IsThisHeroSelectedForEditingFilter';
import { SelectHeroForEditingService } from '../../services/SelectHeroForEditingService';
import { combineLatest, map, of } from 'rxjs';
import { SynchronizeService } from 'src/com.kodekonveyor.angulartest/services/SynchronizeService';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/com.kodekonveyor.angulartest/repositories/AppStore';

@Component({
  selector: 'heroitem',
  templateUrl: './heroitem.component.html'
})
export class HeroitemComponent implements OnInit {

  @Input() hero!: Hero;
  @Input() id!: string;
  selected?: Boolean;

  constructor(
    private readonly synchronizeService: SynchronizeService,
    private readonly selectHeroForEditingService: SelectHeroForEditingService,
    private readonly store: Store<AppStore>
  ) {
  }

  ngOnInit(): void {
    combineLatest([
      of(this.hero),
      this.synchronizeService.fromStore<Hero>('selectedHero')
    ])
      .pipe(map<[Hero, Hero], Boolean>(
        isThisHeroSelectedForEditingFilter
      ))
      .subscribe(
        this.synchronizeService.synchronizeTo(this, 'selected'))
  }

  heroitemOnClick(): void {
    this.selectHeroForEditingService.run(this.hero)
  }
}


