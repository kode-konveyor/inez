import { Component, Input } from '@angular/core';
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { type HeroListComponentModel } from 'src/com.kodekonveyor.angulartest/types/HeroListComponentModel';
import { type IdType } from 'src/com.kodekonveyor.common/IdType';

@Component({
  selector: 'herolist',
  templateUrl: './herolist.component.html',
})
export class HeroListComponent implements HeroListComponentModel {
  @Input() id!: string;
  heroids!: Array<IdType>;

  constructor(private readonly synchronizer: Synchronizer) {
    // eslint-disable-next-line kodekonveyor/no-literals
    synchronizer.fillFields(this, 'herolist');
  }
}
