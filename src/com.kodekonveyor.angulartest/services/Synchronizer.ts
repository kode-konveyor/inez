import { Injectable } from "@angular/core";
import { createFeatureSelector, createSelector, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../types/AppState";

@Injectable()
export class Synchronizer {

  constructor(private readonly store: Store<AppState>) {
  }

  fromStore<T>(featureName: string): Observable<T> {
    const selector = createFeatureSelector<T>(featureName);
    return this.store.select<T>(selector)
  }

  fillFields(self: any, operators: any): void {
    const selector = createSelector(operators);
    this.store.select(selector).subscribe(
      (value: any) => {
        for (const field in operators.keys()) {
          self[field] = value[field]
        }
      }
    )
  }

  synchronizeTo<T>(self: any, fieldName: string) {
    return (value: T) => {
      self[fieldName] = value
    };
  }

  synchronizeCopyTo<T>(self: any, fieldName: string) {
    return (value: T) => {
      const serialized = JSON.stringify(value);
      const clone = JSON.parse(serialized);
      self[fieldName] = clone
    };
  }
}

