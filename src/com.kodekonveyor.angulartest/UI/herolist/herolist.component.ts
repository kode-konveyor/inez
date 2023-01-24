import { Component, Input } from '@angular/core'
import { combineLatest, map } from 'rxjs';
import { heroItemOperator } from 'src/com.kodekonveyor.angulartest/operators/heroItemOperator';
import { Synchronizer } from 'src/com.kodekonveyor.angulartest/services/Synchronizer';
import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';
import { States } from 'src/com.kodekonveyor.angulartest/types/States';

@Component({
  selector: 'herolist',
  templateUrl: './herolist.component.html'
})
export class HeroListComponent {
  @Input() id!: string;

  heroes: Heroes = [];

  constructor(
    private readonly synchronizeService: Synchronizer
  ) {
    combineLatest([
      synchronizeService.fromStore<Heroes>('heroes'),
      synchronizeService.fromStore<States>('states')]
    ).pipe(map<[Heroes, States], Heroes>(
      heroItemOperator
    ))
      .subscribe(synchronizeService.synchronizeTo(this, 'heroes'));
  }
}
