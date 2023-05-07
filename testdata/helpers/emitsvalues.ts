import { DiffService, serialize } from '@kodekonveyor/cdd-ts';
import { type Observable, firstValueFrom, toArray } from 'rxjs';

export function emitsvalues(value: Array<unknown>) {
  return async (observable: Observable<unknown>): Promise<unknown> => {
    const returned = await firstValueFrom(observable.pipe(toArray()));
    const returnedRepresentations = serialize(returned);
    const valueRepresentation = serialize(value);
    if (returnedRepresentations === valueRepresentation) return undefined;
    throw new Error(
      new DiffService().diff(valueRepresentation, returnedRepresentations)
    );
  };
}
