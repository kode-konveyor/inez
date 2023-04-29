import { Component } from '@angular/core';
import { showEditor } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { type SelbrisComponentModel } from '../../types/SelbrisComponentModel';

@Component({
  selector: 'selbris',
  templateUrl: './selbris.component.html',
})
export class SelbrisComponent implements SelbrisComponentModel {
  id: string = 'selbris';

  authenticated!: boolean;

  constructor(readonly synchronizer: Synchronizer) {
    // eslint-disable-next-line kodekonveyor/no-literals
    synchronizer.fillFields(this, 'selbris');
  }

  plusbuttonOnClick(): void {
    this.synchronizer.dispatch(showEditor());
  }
}
