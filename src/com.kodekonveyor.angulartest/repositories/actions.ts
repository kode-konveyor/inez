/* eslint-disable kodekonveyor/no-literals */
import { type User } from '@auth0/auth0-angular';
import { createAction, props } from '@ngrx/store';
import { type Config } from '../types/Config';
import { type Hero } from '../types/Hero';
import { type Heroes } from '../types/Heroes';

export const modifyHero = createAction(
  'modify Hero',
  props<{ payload: Hero }>()
);
export const showEditor = createAction('show editor');
export const setHeroFilter = createAction(
  'set hero filter',
  props<{ payload: string }>()
);
export const setSelectedHero = createAction(
  'set selected hero',
  props<{ payload: Hero }>()
);
export const changeUser = createAction(
  'change user',
  props<{ payload: User | null | undefined }>()
);
export const storeConfig = createAction(
  'store config',
  props<{ payload: Config }>()
);
export const storeHeroes = createAction(
  'store heroes',
  props<{ payload: Heroes }>()
);
export const createHero = createAction(
  'ceate hero',
  props<{ payload: string }>()
);
export const storeHero = createAction('store Hero', props<{ payload: Hero }>());
export const setAuthenticated = createAction('set Authenticated');
export const clearSelectedHero = createAction('clear selected hero');
export const storedItem = createAction(
  'stored item',
  props<{ action: unknown }>()
);
