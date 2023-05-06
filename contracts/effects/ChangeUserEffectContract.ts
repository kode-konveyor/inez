import { Contract } from 'cdd-ts';
import { ObtainSelbrisServiceContract } from 'contracts/services/ObtainSelbrisServiceContract';
import { of } from 'rxjs';
import { GenericErrorHandlerService } from 'src/common/GenericErrorHandlerService';
import { ChangeUserEffectService } from 'src/inez/effects/ChangeUserEffectService';
import { type ObtainSelbrisService } from 'src/inez/services/ObtainSelbrisService';
import { emitsvalues } from 'testdata/helpers/emitsvalues';
import { returnsEmptyObservable } from 'testdata/helpers/returnsEmptyObservable';
import { ActionSequenceTestData } from '../../testdata/ActionSequenceTestData';
import { ActionFeeder } from '../../testdata/helpers/ActionFeeder';

const obtainSelbrisService: ObtainSelbrisService = {
  obtainSelbris: ObtainSelbrisServiceContract.getStub(),
} as unknown as ObtainSelbrisService;

const genericErrorHandler = new GenericErrorHandlerService();

export const ChangeUserEffectContractParties = [
  new ChangeUserEffectService(
    ActionFeeder.actions,
    obtainSelbrisService,
    genericErrorHandler
  ).changeUserEffect,
];

export const ChangeUserEffectContract = new Contract()
  .setTitle('things happening on change user effect')

  .when('no actions arriving', new ActionFeeder('default'))
  .ifCalledWith()
  .thenReturn('for no events there is nothing returned', {
    default: () => of(),
    check: returnsEmptyObservable,
  })

  .when(
    'a changeUser follows a storeConfig',
    new ActionFeeder('changeuserAndStoreConfig')
  )
  .ifCalledWith()
  .thenReturn('a storeSelbris and  setAuthenticated are emitted', {
    default: ActionSequenceTestData.storeSelbrisAndSetAuthenticated,
    check: emitsvalues(
      ActionSequenceTestData.storeSelbrisAndSetAuthenticated()
    ),
  });
