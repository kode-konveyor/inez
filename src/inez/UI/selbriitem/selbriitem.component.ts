import { Component, Input, type OnInit } from '@angular/core';
import { Synchronizer } from 'src/common/Synchronizer';
import { setSelectedSelbri } from 'src/inez/repositories/actions';
import { type SelbriitemComponentModel } from 'src/inez/types/SelbriitemComponentModel';
import { type Selbri } from 'src/inez/types/Selbri';

@Component({
  selector: 'selbriitem',
  templateUrl: './selbriitem.component.html',
})
export class SelbriitemComponent implements SelbriitemComponentModel, OnInit {
  @Input() id!: string;
  selbri!: Selbri;
  selected!: boolean;

  constructor(private readonly synchronizeService: Synchronizer) {}

  ngOnInit(): void {
    // eslint-disable-next-line kodekonveyor/no-literals
    this.synchronizeService.fillFields(this, 'selbriitem');
  }

  selbriitemOnClick(): void {
    this.synchronizeService.dispatch(
      setSelectedSelbri({
        payload: this.selbri,
      })
    );
  }
}
