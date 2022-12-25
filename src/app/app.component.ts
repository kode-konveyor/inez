import { Component } from '@angular/core'
import { AppData } from '../types/AppData';

export let appData: AppData;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appData: AppData = {
    title: "Hello World",
  }

  constructor() {
    appData = this.appData;
  }
}


