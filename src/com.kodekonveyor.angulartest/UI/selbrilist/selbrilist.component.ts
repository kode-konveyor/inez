import { Component, Input } from '@angular/core';
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { type IdType } from 'src/com.kodekonveyor.common/IdType';
import { type SelbriListComponentModel } from 'src/com.kodekonveyor.angulartest/types/SelbriListComponentModel';

@Component({
  selector: 'selbrilist',
  templateUrl: './selbrilist.component.html',
})
export class SelbriListComponent implements SelbriListComponentModel {
  @Input() id!: string;
  selbriids!: Array<IdType>;

  constructor(private readonly synchronizer: Synchronizer) {
    // eslint-disable-next-line kodekonveyor/no-literals
    synchronizer.fillFields(this, 'selbrilist');
  }
}
