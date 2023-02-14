import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-login-button',
  template: `<ion-button (click)="login()">Log in</ion-button>`,
})
export class LoginButtonComponent {
  constructor(public auth: AuthService) { }

  login(): void {
    this.auth
      .loginWithRedirect({
        async openUrl(url: string): Promise<void> {
          console.log("opening auth browser", url)
          // eslint-disable-next-line @typescript-eslint/return-await
          return Browser.open({ url, windowName: '_self' });
        }
      })
      .subscribe(() => {
        console.log("in subscriber")
      });
  }

  loginOld(): void {
    this.auth
      .loginWithRedirect({
        async openUrl(url: string) {
          console.log("opening auth browser", url)
          void Browser.open({ url, windowName: '_self' });
        }
      })
  }
}
