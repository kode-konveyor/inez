import { bound, ConsoleLogChecker, Contract } from '@kodekonveyor/cdd-ts';
import { of } from 'rxjs';
import { GenericErrorHandlerService } from 'src/common/GenericErrorHandlerService';
import { ActionFeeder } from 'testdata/helpers/ActionFeeder';
import { returnsEmptyObservable } from 'testdata/helpers/returnsEmptyObservable';

export const GenericErrorHandlerServiceContractParties = [
  bound(GenericErrorHandlerService),
];

const output = `\\[
 \\[
  {
   "__class": "Error",
   "message": "foo",
   "stack": "fake stack"
  }
 ]
]`;
export const GenericErrorHandlerServiceContract = new Contract()
  .setTitle('logs the error to the console')
  .when('an error is catched', new ActionFeeder('default'))
  .ifCalledWith(() => {
    const err = new Error('foo');
    err.stack = 'fake stack';
    return err;
  })
  .thenReturn('nothing returned', {
    default: () => of(),
    check: returnsEmptyObservable,
  })
  .meanwhile(
    'the error is logged to the console',
    new ConsoleLogChecker(output)
  );
