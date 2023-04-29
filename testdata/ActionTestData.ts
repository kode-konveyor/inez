import { SelbrisTestData } from './SelbrisTestData';
import { UrlTestData } from './UrlTestData';
import { type User } from '@auth0/auth0-angular';
import { MakeTestDataService } from 'cdd-ts';
import { SelbriTestData } from './SelbriTestData';

const user: User = { name: 'joe' };

export const ActionTestDataDescriptor = {
  createSelbriAction: {
    type: 'create selbri',
    payload: SelbriTestData.default().representation,
  },
  storeSelbri: {
    type: 'store selbri',
    payload: SelbriTestData.withId(),
  },
  storeConfigAction: {
    type: 'store config',
    payload: { baseUrl: 'BASE_URL' },
  },
  nullUserAction: { type: 'change user', payload: undefined },
  changeUserAction: { type: 'change user', payload: user },
  storeSelbrisEmpty: { type: 'store selbris', payload: [] },
  storeSelbrisAll: {
    type: 'store selbris',
    payload: SelbrisTestData.default,
  },
  setSelbriFilter: { type: 'set selbri filter', payload: 'e' },
  setSelectedSelbri: {
    type: 'set selected selbri',
    payload: SelbriTestData.withId(),
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
