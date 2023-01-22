import { Component, Input } from '@angular/core'
import { combineLatest, map } from 'rxjs';
import { heroItemFilter } from 'src/com.kodekonveyor.angulartest/filters/heroItemFilter';
import { SynchronizeService } from 'src/com.kodekonveyor.angulartest/services/SynchronizeService';
import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';

@Component({
  selector: 'herolist',
  templateUrl: './herolist.component.html'
})
export class HeroListComponent {
  @Input() id!: string;

  heroes: Heroes = [];

  constructor(
    private readonly synchronizeService: SynchronizeService
  ) {
    combineLatest([
      synchronizeService.fromStore<Heroes>('heroes'),
      synchronizeService.fromStore<String>('heroFilter')]
    ).pipe(map<[Heroes, String], Heroes>(
      heroItemFilter
    ))
      .subscribe(synchronizeService.synchronizeTo(this, 'heroes'));
  }
}
