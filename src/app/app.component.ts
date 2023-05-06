import { Component, type OnInit, NgZone } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

import { mergeMap } from 'rxjs/operators';
import { Browser } from '@capacitor/browser';
import { App } from '@capacitor/app';
import { callbackUri } from 'src/auth.config';

const STATE_IS = 'state=';
const ERROR_IS = 'error=';
const CODE_IS = 'code=';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor(public auth: AuthService, private readonly ngZone: NgZone) {}

  ngOnInit(): void {
    const APP_URL_OPEN = 'appUrlOpen';
    void App.addListener(APP_URL_OPEN, ({ url }) => {
      this.ngZone.run(() => {
        if (url?.startsWith(callbackUri)) {
          if (
            url.includes(STATE_IS) &&
            (url.includes(ERROR_IS) || url.includes(CODE_IS))
          ) {
            this.auth
              .handleRedirectCallback(url)
              .pipe(
                mergeMap(async () => {
                  await Browser.close();
                })
              )
              .subscribe(() => {});
          } else {
            void Browser.close();
          }
        } else {
          void Browser.close();
        }
      });
    });
  }
}
