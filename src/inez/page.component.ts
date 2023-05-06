import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'page.component.html',
})
export class PageComponent {
  constructor(public auth: AuthService) { }
}
