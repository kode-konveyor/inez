import { Component, Input } from '@angular/core';
import { setSelbriFilter } from 'src/inez/repositories/actions';
import { type SelbriFilterComponentModel } from 'src/inez/types/SelbriFilterComponentModel';
import { Synchronizer } from 'src/common/Synchronizer';

@Component({
  selector: 'selbrifilter',
  templateUrl: './selbrifilter.component.html',
})
export class SelbriFilterComponent implements SelbriFilterComponentModel {
  @Input() id!: string;
  selbriFilter: string = '';

  constructor(readonly synchronizer: Synchronizer) {
    // eslint-disable-next-line kodekonveyor/no-literals
    synchronizer.fillFields(this, 'selbrifilter');
  }

  onInput(): void {
    this.synchronizer.dispatch(setSelbriFilter({ payload: this.selbriFilter }));
  }
}
