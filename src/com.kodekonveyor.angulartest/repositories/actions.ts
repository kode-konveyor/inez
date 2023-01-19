import { createAction, props } from '@ngrx/store';
import { Hero } from '../types/Hero';

export const addHero = createAction('add Hero', props<Hero>());
