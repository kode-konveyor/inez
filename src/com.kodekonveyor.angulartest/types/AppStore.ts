import { Heroes } from './Heroes';
import { States } from './States';

export interface AppStore {
  heroes: Heroes;
  states: States;
}
