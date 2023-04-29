import { type HttpClient } from '@angular/common/http';
import { Contract } from 'cdd-ts';
import { SelbriTestData } from './SelbriTestData';
import { ObservableTestData } from './ObservableTestData';
import { UrlTestData } from './UrlTestData';

const HttpClientGetContract = new Contract<HttpClient['get']>()
  .setTitle('get method of Angular http client')
  .ifCalledWith(UrlTestData.url)
  .thenReturn(
    'For the URL of selbris endpoint, returns an observable of the selbris',
    ObservableTestData.selbris
  );
const HttpClientPostContract = new Contract<HttpClient['post']>()
  .setTitle('post method of Angular http cient')
  .ifCalledWith(UrlTestData.postURL, SelbriTestData.withEmtpyId)
  .thenReturn(
    'returns the posted data returned by the server',
    ObservableTestData.idedSelbri
  );
const httpClient = {
  get: HttpClientGetContract.getStub(),
  post: HttpClientPostContract.getStub(),
} as unknown as HttpClient;

export const ExternalServices = {
  httpClient,
};
