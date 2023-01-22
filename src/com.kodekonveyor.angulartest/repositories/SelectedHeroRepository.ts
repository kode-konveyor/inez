import { createReducer, on } from '@ngrx/store';
import { Hero } from '../types/Hero';
import { clearSelectedHero, setSelectedHero } from './actions';


export const selectedHeroInitialState = null;

function clearSelectedHeroTransition(state: Hero | null): Hero | null {
  return selectedHeroInitialState;
}

function setSelectedHeroTransition(state: Hero | null, newHero: { hero: Hero }): Hero {
  return newHero.hero
}

export const selectedHeroReducer = createReducer(
  selectedHeroInitialState as Hero | null,
  on(clearSelectedHero, clearSelectedHeroTransition),
  on(setSelectedHero, setSelectedHeroTransition),
);

