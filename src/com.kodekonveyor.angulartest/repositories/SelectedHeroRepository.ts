import { createReducer, on } from '@ngrx/store';
import { Hero } from '../types/Hero';
import { clearSelectedHero, setSelectedHero } from './actions';


export const selectedHeroInitialState = {
  id: null,
  name: ""
};

function clearSelectedHeroTransition(state: Hero): Hero {
  return selectedHeroInitialState;
}

function setSelectedHeroTransition(state: Hero, newHero: { hero: Hero }): Hero {
  return newHero.hero
}

export const selectedHeroReducer = createReducer(
  selectedHeroInitialState as Hero,
  on(clearSelectedHero, clearSelectedHeroTransition),
  on(setSelectedHero, setSelectedHeroTransition),
);

