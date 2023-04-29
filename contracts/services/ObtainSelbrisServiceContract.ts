import { ObtainSelbrisService } from '../../src/com.kodekonveyor.angulartest/services/ObtainSelbrisService';
import { Contract, serialize } from 'cdd-ts';
import { returnsEmptyObservable } from 'testdata/helpers/returnsEmptyObservable';
import { ObservableTestData } from 'testdata/ObservableTestData';
import { SelbrisTestData } from 'testdata/SelbrisTestData';
import { emitsvalues } from 'testdata/helpers/emitsvalues';
import { ExternalServices } from 'testdata/ExternalServices';
import { ObtainSelbrisParameterTestData } from 'testdata/ObtainSelbrisParameterTestData';

export const ObtainSelbrisServiceContractParties = [
  new ObtainSelbrisService(ExternalServices.httpClient).obtainSelbris,
];

export const ObtainSelbrisServiceContract = new Contract<
  ObtainSelbrisService['obtainSelbris']
>()
  .setTitle('Obtain selbris service')
  .ifCalledWith({
    default: [ObtainSelbrisParameterTestData.default],
    checker: (param) =>
      serialize(param) === serialize(ObtainSelbrisParameterTestData.default())
        ? undefined
        : param,
  })
  .thenReturn('returns a Selbris observable', {
    default: ObservableTestData.selbris,
    check: emitsvalues([SelbrisTestData.default]),
  })

  .ifCalledWith(ObtainSelbrisParameterTestData.nullUser)
  .thenReturn('if there is no user, returns an empty observable', {
    default: ObservableTestData.empty,
    check: returnsEmptyObservable,
  });
