import { Contract, serialize } from '@kodekonveyor/cdd-ts';
import { SaveSelbriService } from 'src/inez/services/SaveSelbriService.js';
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
