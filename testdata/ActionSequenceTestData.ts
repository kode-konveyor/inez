import { type Action } from '@ngrx/store';
import { ActionTestData } from 'testdata/ActionTestData';

export const ActionSequenceTestData = {
  default: () => [] as Array<Action>,
  changeuserAndStoreConfig: () => [
    ActionTestData.changeUserAction(),
    ActionTestData.storeConfigAction(),
  ],
  storeSelbrisAndSetAuthenticated: () => [
    ActionTestData.storeSelbrisAll(),
    ActionTestData.setAuthenticated(),
  ],
} satisfies Record<string, () => Array<Action>>;
