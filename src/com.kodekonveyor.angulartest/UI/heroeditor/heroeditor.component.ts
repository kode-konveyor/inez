import { Component, Input } from '@angular/core';
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { type HeroEditorComponentModel } from 'src/com.kodekonveyor.angulartest/types/HeroEditorComponentModel';
import {
  createHero,
  modifyHero,
} from 'src/com.kodekonveyor.angulartest/repositories/actions';

@Component({
  selector: 'heroeditor',
  templateUrl: './heroeditor.component.html',
})
export class HeroeditorComponent implements HeroEditorComponentModel {
  @Input() id!: string;
  createMode = false;
  selectedHeroId = '';
  selectedHeroName = '';
  show = false;

  constructor(readonly synchronizer: Synchronizer) {
    // eslint-disable-next-line kodekonveyor/no-literals
    synchronizer.fillFields(this, 'heroeditor');
  }

  createButtonClick(): void {
    this.synchronizer.dispatch(
      createHero({
        payload: this.selectedHeroName,
      })
    );
  }

  onInput(newValue: string): void {
    if (this.createMode) return;
    this.synchronizer.dispatch(
      modifyHero({
        payload: {
          id: this.selectedHeroId,
          name: newValue,
        },
      })
    );
  }
}
