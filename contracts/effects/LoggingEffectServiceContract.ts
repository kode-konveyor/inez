import { ConsoleLogChecker, Contract, serialize } from '@kodekonveyor/cdd-ts';
import { of } from 'rxjs';
import { LoggingEffectService } from 'src/inez/effects/LoggingEffectService';
import { ActionSequenceTestData } from 'testdata/ActionSequenceTestData';
import { ActionFeeder } from 'testdata/helpers/ActionFeeder';
import { returnsEmptyObservable } from 'testdata/helpers/returnsEmptyObservable';

export const LoggingEffectServiceContractParties = [
  new LoggingEffectService(ActionFeeder.actions).loggingEffect,
];

const ACTION = 'action';
const BRACKET_REGEXP = /\[/g;
const BRACKET_REPLACEMENT = '\\[';
const pattern = serialize(
  ActionSequenceTestData.changeuserAndStoreConfig().map((x) => [ACTION, x])
).replace(BRACKET_REGEXP, BRACKET_REPLACEMENT);

export const LoggingEffectServiceContract = new Contract<
  LoggingEffectService['loggingEffect']
>()
  .setTitle('logs all actions to console')
  .when('no actions arriving', new ActionFeeder('default'))
  .ifCalledWith()
  .thenReturn('for no events there is nothing returned', {
    default: () => of(),
    check: returnsEmptyObservable,
  })

  .when('an action arrives', new ActionFeeder('changeuserAndStoreConfig'))
  .ifCalledWith()
  .thenReturn('nothing returned', {
    default: () => of(),
    check: returnsEmptyObservable,
  })
  .meanwhile('logs the actions to console', new ConsoleLogChecker(pattern));
