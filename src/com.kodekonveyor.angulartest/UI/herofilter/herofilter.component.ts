import { Component, Input } from '@angular/core'
import { SetHeroFilterService } from 'src/com.kodekonveyor.angulartest/services/SetHeroFilterService';

@Component({
  selector: 'herofilter',
  templateUrl: './herofilter.component.html'
})
export class HeroFilterComponent {

  @Input() id!: string;
  heroFilter: String = "";

  constructor(
    private readonly setHeroFilterService: SetHeroFilterService
  ) { }

  onInput(): void {
    this.setHeroFilterService.run(this.heroFilter);
  }

}


