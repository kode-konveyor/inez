import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store';
import { addHero, modifyHero, setSelectedHero } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { AppStore } from 'src/com.kodekonveyor.angulartest/repositories/AppStore';
import { SynchronizeService } from 'src/com.kodekonveyor.angulartest/services/SynchronizeService';
import { Hero } from 'src/com.kodekonveyor.angulartest/types/Hero';

@Component({
  selector: 'heroeditor',
  templateUrl: './heroeditor.component.html'
})
export class HeroeditorComponent {

  store: Store<AppStore>;

  @Input() id!: string;
  createMode: boolean = false;
  selectedHero!: Hero;


  constructor(synchronizeService: SynchronizeService,
    store: Store<AppStore>,
    readonly httpClient: HttpClient
  ) {
    this.store = store;
    this.httpClient = httpClient
    synchronizeService.fromStore<boolean>('createMode').subscribe(
      synchronizeService.synchronizeTo(this, 'createMode'))
    synchronizeService.fromStore<Hero>('selectedHero').subscribe(
      synchronizeService.synchronizeCopyTo(this, 'selectedHero'))
  }


  REST_API_URL: string = "/angulartest/hero/add";

  createButtonClick(): void {
    this.httpClient.post<Hero>(this.REST_API_URL, this.selectedHero).subscribe(
      (hero: Hero) => {
        this.store.dispatch(addHero({ hero }));
        this.store.dispatch(setSelectedHero({ hero }))
      });
  }

  onInput(): void {
    this.store.dispatch(modifyHero({ hero: this.selectedHero }))
  }
}


