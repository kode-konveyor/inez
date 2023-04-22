import { DiffService, serialize } from 'cdd-ts';
import { type Observable, firstValueFrom, toArray } from 'rxjs';

export function emitsvalues(value: Array<unknown>) {
  return async (observable: Observable<unknown>): Promise<unknown> => {
    const returned = await firstValueFrom(observable.pipe(toArray()));
    if (serialize(returned) === serialize(value)) return undefined;
    return new DiffService().diff(serialize(value), serialize(returned));
  };
}
