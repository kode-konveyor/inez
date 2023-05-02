import { Contract, serialize } from 'cdd-ts';
import { SaveSelbriService } from 'src/com.kodekonveyor.angulartest/services/SaveSelbriService';
import { ExternalServices } from 'testdata/ExternalServices';
import { ObservableTestData } from 'testdata/ObservableTestData';
import { SaveSelbriParameterTestData } from '../../testdata/SaveSelbriParameterTestData.js';

export const SaveSelbriServiceContractParties = [
  new SaveSelbriService(ExternalServices.httpClient).saveSelbri,
];

export const SaveSelbriServiceContract = new Contract<
  SaveSelbriService['saveSelbri']
>()
  .setTitle('saves the selbri on the server')
  .ifCalledWith({
    default: [SaveSelbriParameterTestData.default],
    checker: (param) =>
      serialize(param) === serialize(SaveSelbriParameterTestData.default())
        ? undefined
        : param,
  })

  .thenReturn(
    'returns the name of the selbri with an id',
    ObservableTestData.idedSelbri
  );
