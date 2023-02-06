import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable()
export class GenericErrorHandlerServiceEmmitter {

  run(error: Error, instance: any): Observable<never> {
    console.log("GEHS", error);
    return of();
  }

}
