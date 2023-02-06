import { Component, Input } from '@angular/core'
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { HeroListComponentModel } from 'src/com.kodekonveyor.angulartest/types/HeroListComponentModel';
import { IdType } from 'src/com.kodekonveyor.common/IdType';

@Component({
  selector: 'herolist',
  templateUrl: './herolist.component.html'
})
export class HeroListComponent implements HeroListComponentModel {
  @Input() id!: string;
  heroids!: IdType[];

  constructor(
    private readonly synchronizer: Synchronizer
  ) {
    synchronizer.fillFields(this, "herolist");
  }
}
