import { AuthConfig } from "@auth0/auth0-angular";
import { isPlatform } from "@ionic/angular";
import config from "capacitor.config";

const auth0Domain = 'kode-konveyor.eu.auth0.com';
const auth0ClientId = 'OqUGGMvs9Ch8yitD3sf2lm6mN61MZqPw'

const applicationId = config.appId as string;

const iosOrAndroid = isPlatform('ios') || isPlatform('android');

export const callbackUri: string = iosOrAndroid
  ? `${applicationId}://${auth0Domain}/capacitor/${applicationId}/callback`
  : 'http://localhost:4200';


export const authConfig: AuthConfig = {
  domain: auth0Domain,
  clientId: auth0ClientId,
  authorizationParams: {
    audience: 'https://test.kodekonveyor.com/angulartest',
    scope: 'read:current_user',
    redirect_uri: callbackUri,
  },
  httpInterceptor: {
    allowedList: [
      {
        uri: 'https://test.kodekonveyor.com/angulartest/api/v1/hero',
        tokenOptions: {
          authorizationParams: {
            audience: 'https://test.kodekonveyor.com/angulartest',
            scope: 'read:current_user'
          }
        }
      },
      {
        uri: 'http://localhost:9090/angulartest/api/v1/hero',
        tokenOptions: {
          authorizationParams: {
            audience: 'https://test.kodekonveyor.com/angulartest',
            scope: 'read:current_user'
          }
        }
      },
      {
        uri: '/angulartest/api/v1/hero',
        tokenOptions: {
          authorizationParams: {
            audience: 'https://test.kodekonveyor.com/angulartest',
            scope: 'read:current_user'
          }
        }
      }
    ]
  }

};



