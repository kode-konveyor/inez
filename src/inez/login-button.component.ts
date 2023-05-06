import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-login-button',
  template: `<ion-button id="login_button" (click)="login()"
    >Log in</ion-button
  >`,
})
export class LoginButtonComponent {
  constructor(public auth: AuthService) {}

  login(): void {
    this.auth
      .loginWithRedirect({
        async openUrl(url: string): Promise<void> {
          await Browser.open({ url, windowName: '_self' });
        },
      })
      .subscribe(() => {});
  }

  loginOld(): void {
    this.auth.loginWithRedirect({
      async openUrl(url: string) {
        void Browser.open({ url, windowName: '_self' });
      },
    });
  }
}
