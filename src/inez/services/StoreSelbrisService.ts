import { Injectable } from '@angular/core';
import { type Observable, of } from 'rxjs';
import { type ActionArgument } from 'src/common/ActionArgument';
import { storeSelbri, type storeSelbris } from '../repositories/actions';

@Injectable()
export class StoreSelbrisService {
  storeSelbris(
    action: ActionArgument<typeof storeSelbris>
  ): Observable<ReturnType<typeof storeSelbri>> {
    const actions: Array<ReturnType<typeof storeSelbri>> = [];
    for (const selbri of action.payload) {
      actions.push(storeSelbri({ payload: selbri }));
    }
    return of(...actions);
  }
}
