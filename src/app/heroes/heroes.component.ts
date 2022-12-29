import { Component, Input } from '@angular/core'
import { AppData } from 'src/types/AppData';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  @Input() appData!: AppData;
}


