import { Component, Input } from '@angular/core';
import { Synchronizer } from 'src/common/Synchronizer';
import { createSelbri, modifySelbri } from 'src/inez/repositories/actions';
import { type SelbriEditorComponentModel } from 'src/inez/types/SelbriEditorComponentModel';

@Component({
  selector: 'selbrieditor',
  templateUrl: './selbrieditor.component.html',
})
export class SelbriEditorComponent implements SelbriEditorComponentModel {
  @Input() id!: string;
  createMode = false;
  selectedSelbriId = '';
  selectedSelbriName = '';
  show = false;

  constructor(readonly synchronizer: Synchronizer) {
    // eslint-disable-next-line kodekonveyor/no-literals
    synchronizer.fillFields(this, 'selbrieditor');
  }

  createButtonClick(): void {
    this.synchronizer.dispatch(
      createSelbri({
        payload: this.selectedSelbriName,
      })
    );
  }

  onInput(newValue: string): void {
    if (this.createMode) return;
    this.synchronizer.dispatch(
      modifySelbri({
        payload: {
          id: this.selectedSelbriId,
          representation: newValue,
          references: [],
        },
      })
    );
  }
}
