import { ActionTestData } from 'testdata/ActionTestData';

export const SaveSelbriParameterTestData = {
  default: () => {
    return {
      createEvent: ActionTestData.createSelbriAction(),
      configEvent: ActionTestData.storeConfigAction(),
    };
  },
};
