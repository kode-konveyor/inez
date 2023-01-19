import { createReducer, on } from '@ngrx/store';
import { Heroes } from '../types/Heroes';
import { addHero } from './actions';

export const initialState: Heroes = []

export const appReducer = createReducer(
  initialState,
  on(addHero, (state: Heroes, hero) => {
    const newstate = state.concat([hero])
    return newstate;
  }),
);
