import { Component, Input } from '@angular/core'
import { combineLatest, map } from 'rxjs';
import { SynchronizeService } from 'src/com.kodekonveyor.angulartest/services/SynchronizeService';
import { Hero } from 'src/com.kodekonveyor.angulartest/types/Hero';
import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';

function filterForHeroitem(params: [heroes: Heroes, filterString: String]): Heroes {

  const r: Heroes = []
  const heroes: Heroes = params[0]
  const filterString = params[1]
  heroes.forEach(
    (h: Hero) => {

      if (h.name.match(filterString as string) != null) {
        r.push(h)
      }
    }
  );

  return r;
}

@Component({
  selector: 'herolist',
  templateUrl: './herolist.component.html'
})
export class HeroListComponent {
  @Input() id!: string;

  heroes: Heroes = [];
  synchronizeService: SynchronizeService


  constructor(synchronizeService: SynchronizeService) {
    this.synchronizeService = synchronizeService
    combineLatest([
      synchronizeService.fromStore<Heroes>('heroes'),
      synchronizeService.fromStore<String>('heroFilter')]
    ).pipe(
      map<[Heroes, String], Heroes>(filterForHeroitem))
      .subscribe(synchronizeService.synchronizeTo(this, 'heroes'));
  }
}
