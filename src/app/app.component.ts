import { Component, OnInit } from '@angular/core'
import { AppData } from '../types/AppData';
import { InitializeAppDataService } from '../services/InitializeAppDataService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  static appData: AppData = {};

  ngOnInit(): void {
    console.log("onInint")
    AppComponent.appData = new InitializeAppDataService().call();
  }

  get appData(): AppData {
    return AppComponent.appData;
  }
}

