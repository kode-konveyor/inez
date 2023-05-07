import { Contract } from '@kodekonveyor/cdd-ts';
import { returnsEmptyObservable } from 'testdata/helpers/returnsEmptyObservable';
import { ActionTestData } from 'testdata/ActionTestData';
import {
  ObservableTestData,
  storeSelbriForAll,
} from 'testdata/ObservableTestData';
import { emitsvalues } from 'testdata/helpers/emitsvalues';
import { StoreSelbrisService } from 'src/inez/services/StoreSelbrisService';

export const StoreSelbrisServiceContractParties = [
  new StoreSelbrisService().storeSelbris,
];

export const StoreSelbrisServiceContract = new Contract<
  StoreSelbrisService['storeSelbris']
>()
  .setTitle('emits the actions to store all the selbris')

  .ifCalledWith(ActionTestData.storeSelbrisEmpty)
  .thenReturn('for an empty selbri list returns an empty observable', {
    default: ObservableTestData.empty,
    check: returnsEmptyObservable,
  })

  .ifCalledWith(ActionTestData.storeSelbrisAll)
  .thenReturn('an observable emitting storeSelbri action for each selbris', {
    default: ObservableTestData.storeSelbriForAll,
    check: emitsvalues(storeSelbriForAll),
  });
