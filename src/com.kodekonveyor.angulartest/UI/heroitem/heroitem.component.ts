import { Component, Input, type OnInit } from '@angular/core';
import { type Hero } from 'src/com.kodekonveyor.angulartest/types/Hero';
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { setSelectedHero } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { type HeroitemComponentModel } from 'src/com.kodekonveyor.angulartest/types/HeroitemComponentModel';

@Component({
  selector: 'heroitem',
  templateUrl: './heroitem.component.html',
})
export class HeroitemComponent implements HeroitemComponentModel, OnInit {
  @Input() id!: string;
  hero!: Hero;
  selected!: boolean;

  constructor(private readonly synchronizeService: Synchronizer) {}

  ngOnInit(): void {
    // eslint-disable-next-line kodekonveyor/no-literals
    this.synchronizeService.fillFields(this, 'heroitem');
  }

  heroitemOnClick(): void {
    this.synchronizeService.dispatch(
      setSelectedHero({
        payload: this.hero,
      })
    );
  }
}
