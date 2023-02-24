import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { callbackUri } from '../auth.config';

@Component({
  selector: 'app-logout-button',
  template: `<ion-button id="logout_button" (click)="logout()">Log out</ion-button>`,
})
export class LogoutButtonComponent {
  constructor(public auth: AuthService) { }


  logout(): void {
    this.auth
      .logout({
        logoutParams: {
          returnTo: callbackUri,
        },
        async openUrl(url: string) {
          void Browser.open({ url, windowName: '_self' });
        }
      })
      .subscribe();
  }
}
