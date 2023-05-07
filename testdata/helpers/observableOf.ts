import { serialize } from '@kodekonveyor/cdd-ts';
import { type Observable, of } from 'rxjs';

export function observableOf<T>(value: T): Observable<T> {
  const observable: Observable<T> = of(value);
  (observable as unknown as { _name: string })._name = serialize(value);
  return observable;
}
