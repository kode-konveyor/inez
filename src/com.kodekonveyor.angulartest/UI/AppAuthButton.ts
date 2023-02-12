import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Browser } from '@capacitor/browser';
import { App } from '@capacitor/app';
import { REDIRECT_URI } from '../module';


@Component({
  selector: 'app-auth-button',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button id="logout_button" (click)="auth.logout({ logoutParams: { returnTo: document.location.href } })">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button id="login_button" (click)="login()">Log in</button>
    </ng-template>
  `,
  styles: [],
})
export class AuthButtonComponent implements OnInit {
  constructor
    (@Inject(DOCUMENT) public document: Document,
      readonly ngZone: NgZone,
      readonly auth: AuthService
    ) { }

  ngOnInit(): void {
    console.log("ngOnInit")
    const promise = App.addListener('appUrlOpen', ({ url }) => {
      console.log("appUrlOpen", url)
      this.ngZone.run(() => {
        if (url.startsWith(REDIRECT_URI)) {
          // If the URL is an authentication callback URL..
          if (
            (url.includes('state=') &&
              (url.includes('error=') || url.includes('code=')))
          ) {
            this.auth
              .handleRedirectCallback(url)
              .subscribe((): void => { void Browser.close() });
          } else {
            void Browser.close();
          }
        }
      });
    });
    console.log("ngOnInit", promise)
  }

  login(): void {
    this.auth
      .loginWithRedirect({
        async openUrl(url: string) {
          await Browser.open({ url, windowName: '_self' });
        }
      })
      .subscribe();
  }
}
