import { HeroesTestData } from './HeroesTestData';
import { HeroTestData } from './HeroTestData';
import { UrlTestData } from './UrlTestData';
import { type User } from '@auth0/auth0-angular';
import { MakeTestDataService } from 'cdd-ts';

const user: User = { name: 'joe' };

export const ActionTestDataDescriptor = {
  createHeroAction: {
    type: 'create hero',
    payload: HeroTestData.default().name,
  },
  storeHero: {
    type: 'store hero',
    payload: HeroTestData.withId(),
  },
  storeConfigAction: {
    type: 'store config',
    payload: { baseUrl: 'BASE_URL' },
  },
  nullUserAction: { type: 'change user', payload: undefined },
  changeUserAction: { type: 'change user', payload: user },
  storeHeroesEmpty: { type: 'store heroes', payload: [] },
  storeHeroesAll: {
    type: 'store heroes',
    payload: HeroesTestData.default,
  },
  setHeroFilter: { type: 'set hero filter', payload: 'e' },
  setSelectedHero: {
    type: 'set selected hero',
    payload: HeroTestData.withId(),
  },
  storeConfig: {
    type: 'store config',
    payload: { baseUrl: UrlTestData.baseUrl() },
  },
  setAuthenticated: { type: 'set Authenticated' },
};

type Foo<T extends Record<string, unknown>> = {
  [K in keyof T]: () => T[K];
};

export const ActionTestData = new MakeTestDataService().makeTestData(
  ActionTestDataDescriptor
) as Foo<typeof ActionTestDataDescriptor>;
