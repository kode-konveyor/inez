import { Component, Input } from '@angular/core';
import { Synchronizer } from 'src/common/Synchronizer';
import { type UserMessageComponentModel } from '../../types/UserMessageComponentModel';

@Component({
  selector: 'usermessage',
  templateUrl: './usermessage.component.html',
})
export class UserMessageComponent implements UserMessageComponentModel {
  @Input() id!: string;
  message!: string;
  kind!: string;

  constructor(private readonly synchronizer: Synchronizer) {
    // eslint-disable-next-line kodekonveyor/no-literals
    synchronizer.fillFields(this, 'usermessage');
  }
}
