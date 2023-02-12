import { Component, OnInit } from '@angular/core'
import { showEditor } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { HeroesComponentModel } from '../../types/HeroesComponentModel';


@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
})

export class HeroesComponent implements HeroesComponentModel, OnInit {
  id: string = "heroes";

  authenticated!: Boolean;

  constructor(
    readonly synchronizer: Synchronizer,
  ) {
    synchronizer.fillFields(this, "heroes")
  }

  plusbuttonOnClick(): void {
    this.synchronizer.dispatch(showEditor())
  }


  ngOnInit(): void {
  }
}

