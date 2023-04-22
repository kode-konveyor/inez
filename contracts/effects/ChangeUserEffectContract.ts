import { Contract } from 'cdd-ts';
import { ObtainHeroesServiceContract } from 'contracts/services/ObtainHeroesServiceContract';
import { of } from 'rxjs';
import { ChangeUserEffectService } from 'src/com.kodekonveyor.angulartest/effects/ChangeUserEffectService';
import { type ObtainHeroesService } from 'src/com.kodekonveyor.angulartest/services/ObtainHeroesService';
import { GenericErrorHandlerService } from 'src/com.kodekonveyor.common/GenericErrorHandlerService';
import { emitsvalues } from 'testdata/helpers/emitsvalues';
import { returnsEmptyObservable } from 'testdata/helpers/returnsEmptyObservable';
import { ActionSequenceTestData } from '../../testdata/ActionSequenceTestData';
import { ActionFeeder } from '../../testdata/helpers/ActionFeeder';

const obtainHeroesService: ObtainHeroesService = {
  obtainHeroes: ObtainHeroesServiceContract.getStub(),
} as unknown as ObtainHeroesService;

const genericErrorHandler = new GenericErrorHandlerService();

export const ChangeUserEffectContractParties = [
  new ChangeUserEffectService(
    ActionFeeder.actions,
    obtainHeroesService,
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
  .thenReturn('a storeHeroes and  setAuthenticated are emitted', {
    default: ActionSequenceTestData.storeHeroesAndSetAuthenticated,
    check: emitsvalues(ActionSequenceTestData.storeHeroesAndSetAuthenticated()),
  });
