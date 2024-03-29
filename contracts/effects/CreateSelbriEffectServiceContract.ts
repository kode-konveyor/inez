import { type Action } from '@ngrx/store';
import { Contract } from '@kodekonveyor/cdd-ts';
import { SaveSelbriServiceContract } from 'contracts/services/SaveSelbriServiceContract';
import { of } from 'rxjs';
import { GenericErrorHandlerService } from 'src/common/GenericErrorHandlerService';
import { CreateSelbriEffectService } from 'src/inez/effects/CreateSelbriEffectService';
import { type SaveSelbriService } from 'src/inez/services/SaveSelbriService';
import { ActionSequenceTestData } from 'testdata/ActionSequenceTestData';
import { ActionFeeder } from 'testdata/helpers/ActionFeeder';
import { emitsvalues } from 'testdata/helpers/emitsvalues';
import { returnsEmptyObservable } from 'testdata/helpers/returnsEmptyObservable';

const saveSelbriService = {
  saveSelbri: SaveSelbriServiceContract.getStub(),
} as unknown as SaveSelbriService;

const genericErrorHandler = new GenericErrorHandlerService();

export const CreateSelbriEffectServiceContractParties = [
  new CreateSelbriEffectService(
    ActionFeeder.actions,
    saveSelbriService,
    genericErrorHandler
  ).createSelbriEffect,
];

export const CreateSelbriEffectServiceContract = new Contract<
  CreateSelbriEffectService['createSelbriEffect']
>()
  .setTitle('the effect running when a selbri is created')
  .when('no actions arriving', new ActionFeeder('default'))
  .ifCalledWith()
  .thenReturn('for no events there is nothing returned', {
    default: () => of(),
    check: returnsEmptyObservable,
  })

  .when(
    'config is stored and selbri created',
    new ActionFeeder('createSelbriAndStoreConfig')
  )
  .ifCalledWith()
  .thenReturn('a storeSelbri and a clearSelectedSelbri is returned', {
    default: () =>
      of(
        ActionSequenceTestData.storeSelbriAndCearSelectedSelbri() as unknown as Action
      ),
    check: emitsvalues(
      ActionSequenceTestData.storeSelbriAndCearSelectedSelbri()
    ),
  });
