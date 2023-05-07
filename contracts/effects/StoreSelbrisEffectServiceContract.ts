import { Contract } from '@kodekonveyor/cdd-ts';
import { StoreSelbrisServiceContract } from 'contracts/services/StoreSelbrisServiceContract';
import { of } from 'rxjs';
import { StoreSelbrisEffectService } from 'src/inez/effects/StoreSelbrisEffectService';
import { ExternalServices } from 'testdata/ExternalServices';
import { ActionFeeder } from 'testdata/helpers/ActionFeeder';
import { returnsEmptyObservable } from 'testdata/helpers/returnsEmptyObservable';

const storeSelbrisService = {
  storeSelbris: StoreSelbrisServiceContract.getStub(),
};

export const StoreSelbrisEffectServiceContractParties = [
  new StoreSelbrisEffectService(
    ActionFeeder.actions,
    ExternalServices.genericErrorHandlerService,
    storeSelbrisService
  ).storeSelbrisEffect,
];

export const StoreSelbrisEffectServiceContract = new Contract<
  StoreSelbrisEffectService['storeSelbrisEffect']
>()
  .setTitle('emits a store selbri event for each of the selbris')

  .when('no actions arriving', new ActionFeeder('default'))
  .ifCalledWith()
  .thenReturn('for no events there is nothing returned', {
    default: () => of(),
    check: returnsEmptyObservable,
  });
