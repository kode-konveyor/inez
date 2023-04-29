import { Component, Input, type OnInit } from '@angular/core';
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { setSelectedSelbri } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { type SelbriitemComponentModel } from 'src/com.kodekonveyor.angulartest/types/SelbriitemComponentModel';
import { type Selbri } from 'src/com.kodekonveyor.angulartest/types/Selbri';

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
