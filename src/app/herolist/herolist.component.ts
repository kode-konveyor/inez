import { Component, Input } from '@angular/core'
import { Heroes } from 'src/types/Heroes';
import { HeroListComponentModel } from './HeroListComponentModel';

@Component({
  selector: 'herolist',
  templateUrl: './herolist.component.html'
})
export class HeroListComponent implements HeroListComponentModel {
  @Input() heroes?: Heroes;
}
