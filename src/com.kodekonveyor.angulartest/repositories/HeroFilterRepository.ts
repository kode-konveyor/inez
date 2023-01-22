import { createReducer, on } from '@ngrx/store';
import { setHeroFilter } from './actions';


export const heroFilterInitialState: String = "";


function setHeroFilterTransition(
  state: String,
  newFilter: { heroFilter: String }): String {


  return newFilter.heroFilter;
}

export const heroFilterReducer = createReducer(
  heroFilterInitialState,
  on(setHeroFilter, setHeroFilterTransition),
);

