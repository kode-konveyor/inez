import { Contract } from 'cdd-ts';
import { SaveHeroService } from 'src/com.kodekonveyor.angulartest/services/SaveHeroService';
import {
  ActionTestData,
  ExternalServices,
  ObservableTestData,
} from 'testdata/TestData';

export const SaveHeroServiceContractParties = [
  new SaveHeroService(ExternalServices.httpClient).run,
];
export const SaveHeroServiceContract = new Contract<SaveHeroService['run']>()
  .setTitle('saves the hero on the server')
  .ifCalledWith(
    ActionTestData.createHeroAction,
    ActionTestData.storeConfigAction
  )
  .thenReturn(
    'returns the name of the hero with an id',
    ObservableTestData.idedHero
  );
