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
  createSelbriAndStoreConfig: () => [
    ActionTestData.createSelbriAction(),
    ActionTestData.storeConfig(),
  ],
  storeSelbriAndCearSelectedSelbri: () => [
    ActionTestData.storeSelbri(),
    ActionTestData.clearSelectedSelbri(),
  ],
  authenticateduser: () => [{ name: 'joe' } as unknown as Action],
  authenticatedEvent: () => [ActionTestData.storedCreateuser()],
  storedConfig: () => [ActionTestData.storedConfig()],
  newCommand: () => [ActionTestData.newCommand()],
  errorMessage: () => [ActionTestData.errorMessage()],
  createCommand: () => [ActionTestData.createCommand()],
  createdByCommand: () => [
    ActionTestData.createdMessage(),
    ActionTestData.createSelbriFromCommand(),
  ],
} satisfies Record<string, () => Array<Action>>;
