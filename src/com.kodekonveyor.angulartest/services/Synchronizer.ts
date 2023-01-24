import { Injectable } from "@angular/core";
import { createFeatureSelector, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppStore } from "../types/AppStore";

@Injectable()
export class Synchronizer {

  constructor(private readonly store: Store<AppStore>) {
  }

  fromStore<T>(featureName: string): Observable<T> {
    const selector = createFeatureSelector<T>(featureName);
    return this.store.select<T>(selector)
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

