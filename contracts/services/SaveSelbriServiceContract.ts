import { Contract } from 'cdd-ts';
import { SaveSelbriService } from 'src/com.kodekonveyor.angulartest/services/SaveSelbriService';
import { ActionTestData } from 'testdata/ActionTestData';
import { ExternalServices } from 'testdata/ExternalServices';
import { ObservableTestData } from 'testdata/ObservableTestData';

export const SaveSelbriServiceContractParties = [
  new SaveSelbriService(ExternalServices.httpClient).saveSelbri,
];
export const SaveSelbriServiceContract = new Contract<
  SaveSelbriService['saveSelbri']
>()
  .setTitle('saves the selbri on the server')
  .ifCalledWith(
    ActionTestData.createSelbriAction,
    ActionTestData.storeConfigAction
  )
  .thenReturn(
    'returns the name of the selbri with an id',
    ObservableTestData.idedSelbri
  );
