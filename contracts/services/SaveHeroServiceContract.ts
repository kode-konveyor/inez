import { Contract } from 'cdd-ts';
import { SaveHeroService } from 'src/com.kodekonveyor.angulartest/services/SaveHeroService';
import { ActionTestData } from 'testdata/ActionTestData';
import { ExternalServices } from 'testdata/ExternalServices';
import { ObservableTestData } from 'testdata/ObservableTestData';

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
