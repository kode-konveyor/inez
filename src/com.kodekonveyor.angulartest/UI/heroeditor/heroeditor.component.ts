import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core'
import { CreateHeroService } from 'src/com.kodekonveyor.angulartest/services/CreateHeroService';
import { ModifyHeroService } from 'src/com.kodekonveyor.angulartest/services/ModifyHeroService';
import { SynchronizeService } from 'src/com.kodekonveyor.angulartest/services/SynchronizeService';
import { Hero } from 'src/com.kodekonveyor.angulartest/types/Hero';

@Component({
  selector: 'heroeditor',
  templateUrl: './heroeditor.component.html'
})
export class HeroeditorComponent {


  @Input() id!: string;
  createMode: boolean = false;
  selectedHero!: Hero;


  constructor(synchronizeService: SynchronizeService,
    private readonly createHeroService: CreateHeroService,
    private readonly httpClient: HttpClient,
    private readonly modifyHeroService: ModifyHeroService
  ) {
    synchronizeService.fromStore<boolean>('createMode').subscribe(
      synchronizeService.synchronizeTo(this, 'createMode'))
    synchronizeService.fromStore<Hero>('selectedHero').subscribe(
      synchronizeService.synchronizeCopyTo(this, 'selectedHero'))
  }


  REST_API_URL: string = "/angulartest/hero/add";

  createButtonClick(): void {
    this.createHeroService.run(this.selectedHero);
  }

  onInput(): void {
    this.modifyHeroService.run(this.selectedHero);
  }
}


