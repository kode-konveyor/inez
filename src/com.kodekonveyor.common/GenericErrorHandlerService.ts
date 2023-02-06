import { Injectable } from '@angular/core';


@Injectable()
export class GenericErrorHandlerService {
  run(error: Error): void {
    console.log("GEHS", error);
  }
}
