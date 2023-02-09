import { ComponentModels } from './ComponentModels';
import { States } from './States';

export interface AppState {
  states: States;
  componentstates: ComponentModels
}
