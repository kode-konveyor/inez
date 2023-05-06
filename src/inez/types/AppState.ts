import { type ComponentModels } from './ComponentModels';
import { type States } from './States';

export interface AppState {
  states: States;
  componentstates: ComponentModels;
}
