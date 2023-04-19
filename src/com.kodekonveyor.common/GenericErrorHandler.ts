import { Injectable } from '@angular/core';
import { type Observable, of } from 'rxjs';


@Injectable()
export class GenericErrorHandler {

  run(error: Error): Observable<never> {
    console.log("GEHS", error);
    return of();
  }
}
