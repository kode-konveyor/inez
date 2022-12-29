import { Component, Input } from '@angular/core'
import { Hero } from 'src/types/Hero';
import { HeroListComponentModel } from './HeroListComponentModel';

@Component({
  selector: 'herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['../../assets/app.css']
})
export class HeroListComponent implements HeroListComponentModel {
  @Input() heroes?: Hero[];
}
