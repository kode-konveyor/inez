import { createReducer, on } from '@ngrx/store';
import {
  clearSelectedSelbri,
  modifySelbri,
  storeConfig,
  setSelbriFilter,
  setSelectedSelbri,
  showEditor,
  storeSelbri,
  setAuthenticated,
  commandEntered,
} from './repositories/actions';
import { SetAuthenticatedTransitionService } from './transitions/SetAuthenticatedTransitionService';
import { bindTransition } from '../bindTransition';
import { initialState } from './states/initialState';
import { ClearSelectedSelbriTransitionService } from './transitions/ClearSelectedSelbriTransitionService';
import { ModifySelbriTransitionService } from './transitions/ModifySelbriTransitionService';
import { SetSelbriFilterTransitionService } from './transitions/SetSelbriFilterTransitionService';
import { SetSelectedSelbriTransitionService } from './transitions/SetSelectedSelbriTransitionService';
import { ShowEditorTransitionService } from './transitions/ShowEditorTransitionService';
import { StoreConfigTransitionService } from './transitions/StoreConfigTransitionService';
import { StoreSelbriTransitionService } from './transitions/StoreSelbriTransitionService';
import { CommandEnteredTransitionService } from './transitions/CommandEnteredTransitionService';

export const repository = createReducer(
  initialState,
  on(modifySelbri, bindTransition(ModifySelbriTransitionService)),
  on(showEditor, bindTransition(ShowEditorTransitionService)),
  on(setSelbriFilter, bindTransition(SetSelbriFilterTransitionService)),
  on(setSelectedSelbri, bindTransition(SetSelectedSelbriTransitionService)),
  on(storeConfig, bindTransition(StoreConfigTransitionService)),
  on(storeSelbri, bindTransition(StoreSelbriTransitionService)),
  on(setAuthenticated, bindTransition(SetAuthenticatedTransitionService)),
  on(clearSelectedSelbri, bindTransition(ClearSelectedSelbriTransitionService)),
  on(commandEntered, bindTransition(CommandEnteredTransitionService))
);
