import { createAction, props } from '@ngrx/store';
import { Hero } from '../types/Hero';

export const addHero =
  createAction('add Hero', props<{ payload: Hero }>());
export const modifyHero =
  createAction('modify Hero', props<{ payload: Hero }>());
export const setCreateMode =
  createAction('set create mode', props<{ payload: Boolean }>());
export const clearSelectedHero =
  createAction('clear selected hero');
export const setSelectedHero =
  createAction('set selected hero', props<{ payload: Hero }>());
export const setHeroFilter =
  createAction('set hero filter', props<{ payload: String }>());
export const setBaseUrl =
  createAction('set base url', props<{ payload: String }>());
