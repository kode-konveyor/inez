import { type TypedAction } from '@ngrx/store/src/models';
import { MakeTestDataService } from 'cdd-ts';
import { type TestDataDescriptor } from 'cdd-ts/dist/src/types/TestDataDescriptor';
import { HeroesTestData } from './HeroesTestData';
import { HeroTestData } from './HeroTestData';
import { UrlTestData } from './UrlTestData';
import { type User } from '@auth0/auth0-angular';

const user: User = {};

const ActionTestDataDescriptor = {
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
  nullUserAction: { type: 'change user' },
  changeUserAction: { __from: 'nullUserAction', payload: user },
  storeHeroesEmpty: { type: 'store heroes', payload: [] },
  storeHeroesAll: {
    __from: 'storeHeroesEmpty',
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
} satisfies TestDataDescriptor<TypedAction<string> & { payload: unknown }>;

export const ActionTestData = new MakeTestDataService<
  TypedAction<string>,
  typeof ActionTestDataDescriptor
>().makeTestData(ActionTestDataDescriptor);
