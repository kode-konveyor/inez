import { type AuthConfig } from '@auth0/auth0-angular';
import { isPlatform } from '@ionic/angular';
import config from 'capacitor.config';

const auth0Domain = 'kode-konveyor.eu.auth0.com';
const auth0ClientId = 'Sh4vKImmKHGwBnOCoFqjZF9c4TVKdL9N';
const AUDIENCE = 'https://test.kodekonveyor.com/inez';
const API_URL = 'https://test.kodekonveyor.com/inez/api/v1/selbri';
const SCOPE = 'read:current_user';
const TEST_API_URL = 'http://localhost:9090/inez/api/v1/selbri';

const IOS = 'ios';
const ANDROID = 'android';
const iosOrAndroid = isPlatform(IOS) || isPlatform(ANDROID);

const applicationId = config.appId as string;

export const callbackUri: string = iosOrAndroid
  ? `${applicationId}://${auth0Domain}/capacitor/${applicationId}/callback`
  : window.location.toString();

export const authConfig: AuthConfig = {
  domain: auth0Domain,
  clientId: auth0ClientId,
  authorizationParams: {
    audience: AUDIENCE,
    scope: SCOPE,
    redirect_uri: callbackUri,
  },
  httpInterceptor: {
    allowedList: [
      {
        uri: API_URL,
        tokenOptions: {
          authorizationParams: {
            audience: AUDIENCE,
            scope: SCOPE,
          },
        },
      },
      {
        uri: TEST_API_URL,
        tokenOptions: {
          authorizationParams: {
            audience: AUDIENCE,
            scope: SCOPE,
          },
        },
      },
      {
        uri: '/inez/api/v1/selbri',
        tokenOptions: {
          authorizationParams: {
            audience: AUDIENCE,
            scope: SCOPE,
          },
        },
      },
    ],
  },
};
