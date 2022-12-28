import { Injectable } from '@angular/core';
import { AppData } from 'src/types/AppData';
import { HEROES } from './mock-heroes';


@Injectable()
export class InitializeAppDataService {
  call(): AppData {
    return {
      title: "Hello World",
      heroes: HEROES
    }
  };
}
