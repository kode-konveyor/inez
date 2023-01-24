import { Component, Input } from '@angular/core'
import { map } from 'rxjs';
import { statesInitialState } from 'src/com.kodekonveyor.angulartest/repositories/StatesRepository';
import { CreateHeroService } from 'src/com.kodekonveyor.angulartest/services/CreateHeroService';
import { ModifyHeroService } from 'src/com.kodekonveyor.angulartest/services/ModifyHeroService';
import { Synchronizer } from 'src/com.kodekonveyor.angulartest/services/Synchronizer';
import { States } from 'src/com.kodekonveyor.angulartest/types/States';
import { shouldEditorBeShownOperator } from '../../operators/shouldEditorBeShownOperator';

@Component({
  selector: 'heroeditor',
  templateUrl: './heroeditor.component.html'
})
export class HeroeditorComponent {


  @Input() id!: string;
  states: States = statesInitialState;
  show: Boolean = false;

  constructor(synchronizer: Synchronizer,
    private readonly createHeroService: CreateHeroService,
    private readonly modifyHeroService: ModifyHeroService
  ) {
    synchronizer
      .fromStore<States>('states')
      .subscribe(
        synchronizer.synchronizeCopyTo(this, 'states'))
    synchronizer
      .fromStore<States>('states')
      .pipe<boolean>(map(
        shouldEditorBeShownOperator
      ))
      .subscribe(
        synchronizer.synchronizeCopyTo(this, 'show'))
  }

  createButtonClick(): void {
    this.createHeroService.run(this.states.selectedHero);
  }

  onInput(): void {
    this.modifyHeroService.run(this.states.selectedHero);
  }
}

