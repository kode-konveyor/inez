import { Component, type OnInit, NgZone } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

import { mergeMap } from 'rxjs/operators';
import { Browser } from '@capacitor/browser';
import { App } from '@capacitor/app';
import { callbackUri } from 'src/auth.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  constructor(public auth: AuthService, private readonly ngZone: NgZone) { }

  ngOnInit(): void {
    console.log("ngOnInit")
    void App.addListener('appUrlOpen', ({ url }) => {
      console.log("listening to", url)
      this.ngZone.run(() => {
        console.log("in zone, comparing to", callbackUri)
        if (url?.startsWith(callbackUri)) {
          console.log("url start checked")
          if (
            url.includes('state=') &&
            (url.includes('error=') || url.includes('code='))
          ) {
            console.log("url parameters checked")
            this.auth
              .handleRedirectCallback(url)
              // eslint-disable-next-line @typescript-eslint/promise-function-async
              .pipe(mergeMap(() => Browser.close()))
              .subscribe(() => {
                console.log("in subscriber for browser close")
              });
          } else {
            console.log("closing browser 1")
            void Browser.close();
          }
        } else {
          console.log("closing browser 2")
          void Browser.close();
        }
      });
    });
  }

  ngOnInitOld(): void {
    void App.addListener('appUrlOpen', ({ url }) => {
      this.ngZone.run(() => {
        if (url?.startsWith(callbackUri)) {
          if (
            url.includes('state=') &&
            (url.includes('error=') || url.includes('code='))
          ) {
            this.auth
              .handleRedirectCallback(url)
              .pipe(mergeMap(async () => { await Browser.close(); }))
          } else {
            void Browser.close();
          }
        }
      });
    });
  }
}
