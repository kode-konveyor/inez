import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'page.component.html',
})
export class PageComponent implements OnInit {
  constructor(public auth: AuthService) { }
  ngOnInit(): void {
  }
}
