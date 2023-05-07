import { Injectable } from '@angular/core';
import {
  type Action,
  type ActionCreator,
  createSelector,
  Store,
} from '@ngrx/store';
import { of, type Observable } from 'rxjs';
import { type Selector, type TypedAction } from '@ngrx/store/src/models';
import { multiComponents } from 'src/inez/types/ComponentModels';
import { type StoreState } from 'src/inez/types/StoreState';
import { storedItem } from 'src/inez/repositories/actions';
import { states } from 'src/inez/states/states';

type Selectors = Record<string, Selector<StoreState, any>>;

@Injectable()
export class Synchronizer {
  constructor(private readonly store: Store<StoreState>) {}

  getStoreView(operators: Selectors): Observable<any> {
    const selector = createSelector(operators);
    const storeView = this.store.select(selector);
    return storeView;
  }

  fillFieldsSubscriber(
    context: any
  ): (value: { foo: Record<string, unknown> }) => void {
    return (value: { foo: Record<string, unknown> }): void => {
      for (const field of Object.keys(value.foo)) {
        context[field] = value.foo[field];
      }
    };
  }

  fillFields(context: any, model: string): void {
    let operator;
    if (multiComponents.includes(model)) {
      const id = context.itemId;
      operator = (states.componentstates as any)[model]._(id);
    } else {
      operator = (states.componentstates as any)[model]._;
    }
    const operators = { foo: operator };
    const storeView = this.getStoreView(operators);
    storeView.subscribe(this.fillFieldsSubscriber(context));
  }

  dispatch(action: Action): void {
    this.store.dispatch(action);
  }

  dispatcher<T>(
    action: ActionCreator<
      string,
      (props: { payload: T }) => {
        payload: T;
      } & TypedAction<string>
    >
  ): (arg: T) => Observable<Action> {
    return (arg: T): Observable<Action> => {
      this.dispatch(action({ payload: arg }));
      return of(storedItem({ action: action.type }));
    };
  }
}
