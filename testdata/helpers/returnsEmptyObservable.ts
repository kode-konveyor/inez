import { serialize } from '@kodekonveyor/cdd-ts';
import { type Observable, firstValueFrom } from 'rxjs';

export async function returnsEmptyObservable(
  observable: Observable<unknown>
): Promise<string | undefined> {
  const result = await firstValueFrom(observable, {
    defaultValue: 'no value',
  });
  if (result === 'no value') return undefined;
  return serialize(result);
}
