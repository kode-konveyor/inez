import { createReducer, on } from '@ngrx/store';
import { Hero } from '../types/Hero';
import { Heroes } from '../types/Heroes';
import { addHero, modifyHero } from './actions';

const heroesInitialState: Heroes = []

function addHeroTransition(state: Heroes, hero: { hero: Hero }): Heroes {
  const newstate = state.concat([hero.hero])

  return newstate;
}

function modifyHeroTransition(state: Heroes, hero: { hero: Hero }): Heroes {
  return state.map(
    h => {
      if (h.id === hero.hero.id)
        return hero.hero
      return h
    }
  )
}

export const heroesReducer = createReducer(
  heroesInitialState,
  on(addHero, addHeroTransition),
  on(modifyHero, modifyHeroTransition),
);
