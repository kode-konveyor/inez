import { createReducer, on } from '@ngrx/store';
import {
  clearSelectedHero,
  modifyHero,
  storeConfig,
  setHeroFilter,
  setSelectedHero,
  showEditor,
  storeHero,
  setAuthenticated,
} from './repositories/actions';
import { SetAuthenticatedTransitionService } from './transitions/SetAuthenticatedTransitionService';
import { ClearSelectedHeroTransitionService } from './transitions/ClearSelectedHeroTransitionService';
import { ModifyHeroTransitionService } from './transitions/ModifyHeroTransitionService';
import { ShowEditorTransitionService } from './transitions/ShowEditorTransitionService';
import { SetHeroFilterTransitionService } from './transitions/SetHeroFilterTransitionService';
import { SetSelectedHeroTransitionService } from './transitions/SetSelectedHeroTransitionService';
import { StoreConfigTransitionService } from './transitions/StoreConfigTransitionService';
import { StoreHeroTransitionService } from './transitions/StoreHeroTransitionService';
import { bindTransition } from '../bindTransition';
import { initialState } from './states/initialState';

export const repository = createReducer(
  initialState,
  on(modifyHero, bindTransition(ModifyHeroTransitionService)),
  on(showEditor, bindTransition(ShowEditorTransitionService)),
  on(setHeroFilter, bindTransition(SetHeroFilterTransitionService)),
  on(setSelectedHero, bindTransition(SetSelectedHeroTransitionService)),
  on(storeConfig, bindTransition(StoreConfigTransitionService)),
  on(storeHero, bindTransition(StoreHeroTransitionService)),
  on(setAuthenticated, bindTransition(SetAuthenticatedTransitionService)),
  on(clearSelectedHero, bindTransition(ClearSelectedHeroTransitionService))
);
