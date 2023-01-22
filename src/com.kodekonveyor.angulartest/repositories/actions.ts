import { createAction, props } from '@ngrx/store';
import { Hero } from '../types/Hero';

export const addHero =
  createAction('add Hero', props<{ hero: Hero }>());
export const modifyHero =
  createAction('modify Hero', props<{ hero: Hero }>());
export const setCreateMode =
  createAction('set create mode', props<{ createMode: Boolean }>());
export const clearSelectedHero =
  createAction('clear selected hero');
export const setSelectedHero =
  createAction('set selected hero', props<{ hero: Hero }>());
export const setHeroFilter =
  createAction('set hero filter', props<{ heroFilter: String }>());
