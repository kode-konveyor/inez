import { Component } from '@angular/core'
import { AppData } from '../types/AppData';
import { HEROES } from './mock-heroes';

export let appData: AppData;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appData: AppData;

  constructor() {
    this.appData = {
      title: "Hello World",
      heroes: HEROES
    };
    appData = this.appData;
  }
}


