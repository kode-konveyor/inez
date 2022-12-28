import { Component } from '@angular/core'
import { AppData } from '../types/AppData';
import { InitializeAppDataService } from '../services/InitializeAppDataService';

export let appData: AppData;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appData: AppData;
  initializeAppDataService: InitializeAppDataService

  constructor(initializeAppDataService: InitializeAppDataService) {
    this.initializeAppDataService = initializeAppDataService;
    appData = this.initializeAppDataService.call()
    this.appData = appData;
  }
}

