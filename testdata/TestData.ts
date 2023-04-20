import { type HttpClient } from '@angular/common/http';
import { type User } from '@auth0/auth0-angular';
import { type TypedAction } from '@ngrx/store/src/models';
import { Contract, MakeTestDataService, serialize } from 'cdd-ts';
import { type TestDataDescriptor } from 'cdd-ts/dist/src/types/TestDataDescriptor';
import { type Observable, of, firstValueFrom, toArray } from 'rxjs';
import { storeHero } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { UrlMapConstants } from 'src/com.kodekonveyor.angulartest/services/UrlMapConstants';
import { type Hero } from 'src/com.kodekonveyor.angulartest/types/Hero';

export const HeroesTestdata = {
  default: [
    { id: '12', name: 'Dr. Nice' },
    { id: '13', name: 'Bombasto' },
    { id: '14', name: 'Celeritas' },
    { id: '15', name: 'Magneta' },
    { id: '16', name: 'RubberMan' },
    { id: '17', name: 'Dynama' },
    { id: '18', name: 'Dr. IQ' },
    { id: '19', name: 'Magma' },
    { id: '20', name: 'Tornado' },
  ],

  withE: [
    { id: '12', name: 'Dr. Nice' },
    { id: '14', name: 'Celeritas' },
    { id: '15', name: 'Magneta' },
    { id: '16', name: 'RubberMan' },
  ],

  withoutE: [
    { id: '13', name: 'Bombasto' },
    { id: '17', name: 'Dynama' },
    { id: '18', name: 'Dr. IQ' },
    { id: '19', name: 'Magma' },
    { id: '20', name: 'Tornado' },
  ],
};

const TEST_HERO_NAME = 'Test Hero';
export const baseUrl = 'BASE_URL';

const HeroTestDatadescriptor = {
  default: { name: TEST_HERO_NAME },
  withEmtpyId: { id: '', name: TEST_HERO_NAME },
  withId: { __from: 'default', id: '1' },
  modified: { __from: 'withId', name: 'Test Hero modified' },
  another: { id: '2', name: 'Another Test Hero' },
} satisfies TestDataDescriptor<Hero>;

export const HeroTestData = new MakeTestDataService<
  Hero,
  typeof HeroTestDatadescriptor
>().makeTestData(HeroTestDatadescriptor);

const URL = 'BASE_URL' + UrlMapConstants.GET_HEROES_URL;

export const UrlTestData = {
  url: () => URL,
  postURL: () => 'BASE_URL' + UrlMapConstants.ADD_HERO_URL,
};

function observableOf<T>(value: T): Observable<T> {
  const observable: Observable<T> = of(value);
  (observable as unknown as { _name: string })._name = serialize(value);
  return observable;
}
const emptyObservable = of();
(emptyObservable as unknown as { _name: string })._name = 'of()';

export const storeHeroForAll = HeroesTestdata.default.map((h) =>
  storeHero({ payload: h })
);

export const ObservableTestData = {
  heroes: () => observableOf(HeroesTestdata.default),
  empty: () => emptyObservable,
  idedHero: () => observableOf(HeroTestData.withId()),
  storeHeroForAll: () => observableOf(storeHeroForAll),
};

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

const user: User = {};

const ActionTestDataDescriptor = {
  createHeroAction: {
    type: 'create hero',
    payload: TEST_HERO_NAME,
  },
  storeHero: {
    type: 'store hero',
    payload: HeroTestData.withId(),
  },
  storeConfigAction: {
    type: 'store config',
    payload: { baseUrl: 'BASE_URL' },
  },
  nullUserAction: { type: 'change user' },
  changeUserAction: { __from: 'nullUserAction', payload: user },
  storeHeroesEmpty: { type: 'store heroes', payload: [] },
  storeHeroesAll: {
    __from: 'storeHeroesEmpty',
    payload: HeroesTestdata.default,
  },
  setHeroFilter: { type: 'set hero filter', payload: 'e' },
  setSelectedHero: {
    type: 'set selected hero',
    payload: HeroTestData.withId(),
  },
  storeConfig: { type: 'store config', payload: { baseUrl } },
} satisfies TestDataDescriptor<TypedAction<string> & { payload: unknown }>;

export const ActionTestData = new MakeTestDataService<
  TypedAction<string>,
  typeof ActionTestDataDescriptor
>().makeTestData(ActionTestDataDescriptor);

export async function returnsEmptyObservable(
  observable: Observable<unknown>
): Promise<string | undefined> {
  const result = await firstValueFrom(observable, {
    defaultValue: 'no value',
  });
  if (result === 'no value') return undefined;
  return serialize(result);
}

export function emitsvalues(value: unknown[]) {
  return async (observable: Observable<unknown>): Promise<unknown> => {
    const returned = await firstValueFrom(observable.pipe(toArray()));
    if (serialize(returned) === serialize(value)) return undefined;
    return serialize(returned);
  };
}
