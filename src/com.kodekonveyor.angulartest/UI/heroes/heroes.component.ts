import { Component } from '@angular/core';
import { showEditor } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { type HeroesComponentModel } from '../../types/HeroesComponentModel';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements HeroesComponentModel {
  id: string = 'heroes';

  authenticated!: boolean;

  constructor(readonly synchronizer: Synchronizer) {
    // eslint-disable-next-line kodekonveyor/no-literals
    synchronizer.fillFields(this, 'heroes');
  }

  plusbuttonOnClick(): void {
    this.synchronizer.dispatch(showEditor());
  }
}
