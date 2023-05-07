import { Component, Input } from '@angular/core';
import { Synchronizer } from 'src/common/Synchronizer';
import {
  createSelbri,
  messageForUser,
  modifySelbri,
} from 'src/inez/repositories/actions';
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
  references = [];
  idToAdd = '';
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

  addReference(): void {
    this.synchronizer.dispatch(
      messageForUser({
        msg: 'plus clicked',
        kind: '',
        subject: this.idToAdd,
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
