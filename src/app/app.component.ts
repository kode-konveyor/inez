import { Component, OnInit } from '@angular/core'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/app.css']
})

export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.log("onInint")
  }

}

