import { ActionTestData } from './ActionTestData';

export const ObtainHeroesParameterTestData = {
  default: () => {
    return {
      changeUserAction: ActionTestData.changeUserAction(),
      storeConfigAction: ActionTestData.storeConfigAction(),
    };
  },
  nullUser: () => {
    return {
      changeUserAction: ActionTestData.nullUserAction(),
      storeConfigAction: ActionTestData.storeConfigAction(),
    };
  },
};
