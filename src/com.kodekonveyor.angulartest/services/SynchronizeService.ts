import { Injectable } from "@angular/core";
import { createFeatureSelector, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppStore } from "../repositories/AppStore";

@Injectable()
export class SynchronizeService {

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
      self[fieldName] = { ...value }
    };
  }
}

