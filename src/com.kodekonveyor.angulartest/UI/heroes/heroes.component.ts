import { Component, OnInit } from '@angular/core'
import { ChangeToCreateModeService } from 'src/com.kodekonveyor.angulartest/services/ChangeToCreateModeService';

import { InitializeStatesService } from 'src/com.kodekonveyor.angulartest/services/InitializeStatesService';


@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  id: string = "heroes";

  constructor(
    private readonly initializeStatesService: InitializeStatesService,
    private readonly changeToCreateModeService: ChangeToCreateModeService
  ) { }

  ngOnInit(): void {
    this.initializeStatesService.run()
  }

  plusbuttonOnClick(): void {
    this.changeToCreateModeService.run()
  }

}

