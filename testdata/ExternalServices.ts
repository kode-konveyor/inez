import { type HttpClient } from '@angular/common/http';
import { Contract } from 'cdd-ts';
import { HeroTestData } from './HeroTestData';
import { ObservableTestData } from './ObservableTestData';
import { UrlTestData } from './UrlTestData';

const HttpClientGetContract = new Contract<HttpClient['get']>()
  .setTitle('get method of Angular http client')
  .ifCalledWith(UrlTestData.url)
  .thenReturn(
    'For the URL of heroes endpoint, returns an observable of the heroes',
    ObservableTestData.heroes
  );
const HttpClientPostContract = new Contract<HttpClient['post']>()
  .setTitle('post method of Angular http cient')
  .ifCalledWith(UrlTestData.postURL, HeroTestData.withEmtpyId)
  .thenReturn(
    'returns the posted data returned by the server',
    ObservableTestData.idedHero
  );
const httpClient = {
  get: HttpClientGetContract.getStub(),
  post: HttpClientPostContract.getStub(),
} as unknown as HttpClient;

export const ExternalServices = {
  httpClient,
};
