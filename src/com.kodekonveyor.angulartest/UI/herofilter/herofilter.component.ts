import { Component, Input } from '@angular/core'
import { setHeroFilter } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { type HeroFilterComponentModel } from 'src/com.kodekonveyor.angulartest/types/HeroFilterComponentModel';
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';

@Component({
  selector: 'herofilter',
  templateUrl: './herofilter.component.html'
})
export class HeroFilterComponent implements HeroFilterComponentModel {

  @Input() id!: string;
  heroFilter: string = "";

  constructor(
    readonly synchronizer: Synchronizer,
  ) {
    synchronizer.fillFields(this, "herofilter")
  }

  onInput(): void {
    this.synchronizer.dispatch(setHeroFilter({ payload: this.heroFilter }))
  }

}


