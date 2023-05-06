import { Component, Input } from '@angular/core';
import { Synchronizer } from 'src/common/Synchronizer';
import { type IdType } from 'src/common/IdType';
import { type SelbriListComponentModel } from 'src/inez/types/SelbriListComponentModel';

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
