import { createReducer, on } from '@ngrx/store';
import { Heroes } from '../types/Heroes';
import { addHero, modifyHero } from './actions';
import { addHeroTransition } from '../transitions/addHeroTransition';
import { modifyHeroTransition } from '../transitions/modifyHeroTransition';

const heroesInitialState: Heroes = []

export const heroesReducer = createReducer(
  heroesInitialState,
  on(addHero, addHeroTransition),
  on(modifyHero, modifyHeroTransition),
);
