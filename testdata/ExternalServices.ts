import { type HttpClient } from '@angular/common/http';
import { Contract } from 'cdd-ts';
import { of } from 'rxjs';
import Sinon from 'sinon';
import {
  changeUser,
  storeConfig,
} from 'src/inez/repositories/actions';
import { GenericErrorHandlerService } from 'src/common/GenericErrorHandlerService';
import { type Synchronizer } from 'src/common/Synchronizer';
import { ActionTestData } from './ActionTestData';
import { ObservableTestData } from './ObservableTestData';
import { SelbriTestData } from './SelbriTestData';
import { UrlTestData } from './UrlTestData';

const HttpClientGetContract = new Contract<HttpClient['get']>()
  .setTitle('get method of Angular http client')
  .ifCalledWith(UrlTestData.url)
  .thenReturn(
    'For the URL of selbris endpoint, returns an observable of the selbris',
    ObservableTestData.selbris
  )
  .ifCalledWith(UrlTestData.config)
  .thenReturn(
    'For the config url returns an observable of config.json',
    ObservableTestData.config
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
const SynchronizerDispatcherContract = new Contract<
  Synchronizer['dispatcher']
>()
  .setTitle('dispatches the data')
  // @ts-expect-error ts lost type
  .ifCalledWith(() => changeUser)
  .thenReturn('if called with changeUser, returns a changeuser stored', () => {
    const dispatch = Sinon.stub();
    dispatch.returns(of(ActionTestData.storedCreateuser()));
    (dispatch as unknown as { arg: string }).arg = 'changeUser';
    return dispatch;
  })
  // @ts-expect-error ts lost type
  .ifCalledWith(() => storeConfig)
  .thenReturn(
    'if called with storeConfig, returns a storeConfig stored',
    () => {
      const dispatch = Sinon.stub();
      dispatch.returns(of(ActionTestData.storedConfig()));
      (dispatch as unknown as { arg: string }).arg = 'storeConfig';
      return dispatch;
    }
  );

const synchronizer = {
  dispatcher: SynchronizerDispatcherContract.getStub(),
} as unknown as Synchronizer;

export const ExternalServices = {
  httpClient,
  synchronizer,
  genericErrorHandlerService: new GenericErrorHandlerService(),
};
