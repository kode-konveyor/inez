import { Component, Input } from '@angular/core'
import { map } from 'rxjs';
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
  createMode: Boolean = false;
  selectedHeroId: number | null = null;
  selectedHeroName: String = "";

  show: Boolean = false;

  constructor(
    private readonly synchronizer: Synchronizer,
    private readonly createHeroService: CreateHeroService,
    private readonly modifyHeroService: ModifyHeroService
  ) {
    synchronizer
      .fromStore<States>('states').subscribe(
        (x: States) => {
          this.selectedHeroName = x.selectedHero.name
          this.selectedHeroId = x.selectedHero.id
          this.createMode = x.createMode
        }
      )
    synchronizer
      .fromStore<States>('states')
      .pipe<boolean>(map(
        shouldEditorBeShownOperator
      ))
      .subscribe(
        x => {
          this.show = x
        }
      )
  }

  createButtonClick(): void {
    this.createHeroService.run({ id: null, name: this.selectedHeroName });
  }

  onInput(newValue: String): void {
    const hero = { id: this.selectedHeroId, name: newValue };
    this.modifyHeroService.run(hero);
  }
}

