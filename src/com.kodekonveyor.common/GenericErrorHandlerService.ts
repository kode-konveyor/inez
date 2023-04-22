import { Injectable } from '@angular/core';
import { type Observable, of } from 'rxjs';

@Injectable()
export class GenericErrorHandlerService {
  genericErrorHandler(error: Error): Observable<never> {
    console.log(error);
    return of();
  }
}
