import { Component, Input, OnInit } from '@angular/core'
import { Hero } from 'src/com.kodekonveyor.angulartest/types/Hero';
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { setSelectedHero } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { HeroitemComponentModel } from 'src/com.kodekonveyor.angulartest/types/HeroitemComponentModel';

@Component({
  selector: 'heroitem',
  templateUrl: './heroitem.component.html'
})
export class HeroitemComponent implements HeroitemComponentModel, OnInit {

  @Input() id!: string;
  hero!: Hero;
  selected!: Boolean;

  constructor(
    private readonly synchronizeService: Synchronizer,
  ) { }

  ngOnInit(): void {
    this.synchronizeService.fillFields(this, "heroitem")
  }

  heroitemOnClick(): void {
    this.synchronizeService.dispatch(setSelectedHero({
      payload: this.hero
    }))
  }
}

