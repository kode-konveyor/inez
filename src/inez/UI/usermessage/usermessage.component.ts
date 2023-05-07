import { Component, Input, type OnInit } from '@angular/core';
import { Synchronizer } from 'src/common/Synchronizer';
import { type UserMessageComponentModel } from '../../types/UserMessageComponentModel';

@Component({
  selector: 'usermessage',
  templateUrl: './usermessage.component.html',
})
export class UserMessageComponent implements UserMessageComponentModel, OnInit {
  @Input() id!: string;
  @Input() itemId!: string;
  message!: string;
  kind!: string;
  subject!: string;

  constructor(private readonly synchronizer: Synchronizer) {}

  ngOnInit(): void {
    // eslint-disable-next-line kodekonveyor/no-literals
    this.synchronizer.fillFields(this, 'userMessages');
  }
}
