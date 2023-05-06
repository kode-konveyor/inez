import { Component } from '@angular/core';
import { Synchronizer } from 'src/common/Synchronizer';
import { commandEntered } from 'src/inez/repositories/actions';
import { type CommandlineComponentModel } from '../../types/CommandlineComponentModel';

@Component({
  selector: 'commandline',
  templateUrl: './commandline.component.html',
})
export class CommandlineComponent implements CommandlineComponentModel {
  constructor(readonly synchronizer: Synchronizer) {
    // eslint-disable-next-line kodekonveyor/no-literals
    synchronizer.fillFields(this, 'commandline');
  }

  line: string = '';
  messageIDs: Array<string> = [];

  handleKeyUp(event: KeyboardEvent): void {
    if (event.code === 'Enter')
      this.synchronizer.dispatch(
        commandEntered({
          payload: this.line,
        })
      );
  }
}
