/* eslint-disable kodekonveyor/no-literals */
import { type User } from '@auth0/auth0-angular';
import { createAction, props } from '@ngrx/store';
import { type Config } from '../types/Config';
import { type SelbriDTO } from '@kodekonveyor/inez-server/src/DTO/SelbriDTO';
import { type Selbris } from '../types/Selbris';

export const modifySelbri = createAction(
  'modify Selbri',
  props<{ payload: SelbriDTO }>()
);
export const showEditor = createAction('show editor');
export const setSelbriFilter = createAction(
  'set selbri filter',
  props<{ payload: string }>()
);
export const setSelectedSelbri = createAction(
  'set selected selbri',
  props<{ payload: SelbriDTO }>()
);
export const changeUser = createAction(
  'change user',
  props<{ payload: User | null | undefined }>()
);
export const storeConfig = createAction(
  'store config',
  props<{ payload: Config }>()
);
export const storeSelbris = createAction(
  'store selbris',
  props<{ payload: Selbris }>()
);
export const createSelbri = createAction(
  'create selbri',
  props<{ payload: string }>()
);
export const storeSelbri = createAction(
  'store Selbri',
  props<{ payload: SelbriDTO }>()
);
export const setAuthenticated = createAction('set Authenticated');
export const clearSelectedSelbri = createAction('clear selected selbri');
export const storedItem = createAction(
  'stored item',
  props<{ action: unknown }>()
);

export const commandEntered = createAction(
  'command entered',
  props<{ payload: string }>()
);

export const messageForUser = createAction(
  'message for user',
  props<{ kind: '' | 'error'; msg: string; subject: unknown }>()
);
