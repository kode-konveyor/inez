import { Component, Input, OnInit } from '@angular/core'
import { Hero } from 'src/com.kodekonveyor.angulartest/types/Hero';
import { combineLatest, map, of } from 'rxjs';
import { Synchronizer } from 'src/com.kodekonveyor.angulartest/services/Synchronizer';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/com.kodekonveyor.angulartest/types/AppStore';
import { isThisHeroSelectedForEditingOperator } from 'src/com.kodekonveyor.angulartest/operators/IsThisHeroSelectedForEditingOperator';
import { SelectHeroForEditingService } from 'src/com.kodekonveyor.angulartest/services/SelectHeroForEditingService';
import { States } from 'src/com.kodekonveyor.angulartest/types/States';

@Component({
  selector: 'heroitem',
  templateUrl: './heroitem.component.html'
})
export class HeroitemComponent implements OnInit {

  @Input() hero!: Hero;
  @Input() id!: string;
  selected?: Boolean;

  constructor(
    private readonly synchronizeService: Synchronizer,
    private readonly selectHeroForEditingService: SelectHeroForEditingService,
    private readonly store: Store<AppStore>
  ) {
  }

  ngOnInit(): void {
    combineLatest([
      of(this.hero),
      this.synchronizeService.fromStore<States>('states')
    ])
      .pipe(map<[Hero, States], Boolean>(
        isThisHeroSelectedForEditingOperator
      ))
      .subscribe(
        this.synchronizeService.synchronizeTo(this, 'selected'))
  }

  heroitemOnClick(): void {
    this.selectHeroForEditingService.run(this.hero)
  }
}

