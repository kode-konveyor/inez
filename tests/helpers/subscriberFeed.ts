import { MockProxy } from "jest-mock-extended";
import { Observable, Subscription } from "rxjs";

export function subscriberFeed<T>(mock: MockProxy<Observable<T>>, value: T): void {
  mock.subscribe.mockImplementation(x => {
    if (x != null)
      x(value); return new Subscription();
  });
}
