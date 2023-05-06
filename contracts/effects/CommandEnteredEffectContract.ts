import { Contract } from 'cdd-ts';
import { of } from 'rxjs';
import { GenericErrorHandlerService } from '../../src/common/GenericErrorHandlerService.js';
import { CommandEnteredEffectService } from '../../src/inez/effects/CommandEnteredEffectService.js';
import { ActionFeeder } from '../../testdata/helpers/ActionFeeder.js';
import { returnsEmptyObservable } from '../../testdata/helpers/returnsEmptyObservable.js';
import { ActionSequenceTestData } from '../../testdata/ActionSequenceTestData.js';
import { emitsvalues } from '../../testdata/helpers/emitsvalues.js';

const genericErrorHandler = new GenericErrorHandlerService();

export const CommandEnteredEffectContractParties = [
  new CommandEnteredEffectService(ActionFeeder.actions, genericErrorHandler)
    .commandEnteredEffect,
];
export const CommandEnteredEffectContract = new Contract()
  .setTitle('processes the command entereds')

  .when('no actions arriving', new ActionFeeder('default'))
  .ifCalledWith()
  .thenReturn('for no events there is nothing returned', {
    default: () => of(),
    check: returnsEmptyObservable,
  })
  .when('an erroneus command entered', new ActionFeeder('newCommand'))
  .ifCalledWith()
  .thenReturn('a syntax error is messaged to the user', {
    default: () => of(),
    check: emitsvalues(ActionSequenceTestData.errorMessage()),
  })

  .when('a creation command entered', new ActionFeeder('createCommand'))
  .ifCalledWith()
  .thenReturn('a selbri is created', {
    default: () => of(),
    check: emitsvalues(ActionSequenceTestData.createdByCommand()),
  });
