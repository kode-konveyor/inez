import { Component } from '@angular/core'
import { appData } from '../app.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  appData = appData;
}


