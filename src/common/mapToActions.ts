import { type Action } from '@ngrx/store';
import { exhaustMap, of, type OperatorFunction } from 'rxjs';

export function mapToActions<T>(
  ...actionCreators: Array<(v: T) => Action>
): OperatorFunction<T, Action> {
  return exhaustMap((arg: T) => {
    const actions: Array<Action> = [];
    for (const creator of actionCreators) {
      actions.push(creator(arg));
    }
    return of(...actions);
  });
}
