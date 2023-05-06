import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { ChangeUserEffectService } from './effects/ChangeUserEffectService';
import { CreateSelbriEffectService } from './effects/CreateSelbriEffectService';
import { FollowAuthenticatedStateEffectService } from './effects/FollowAuthenticatedStateEffectService';
import { LoggingEffectService } from './effects/LoggingEffectService';
import { ObtainConfigEffectService } from './effects/ObtainConfigEffectService';
import { StoreSelbrisEffectService } from './effects/StoreSelbrisEffectService';
import { CommandEnteredEffectService } from './effects/CommandEnteredEffectService';

@Injectable()
export class Effects {
  constructor(
    private readonly followAuthenticatedStateEffect: FollowAuthenticatedStateEffectService,
    private readonly obtainConfigEffect: ObtainConfigEffectService,
    private readonly changeUserEffect: ChangeUserEffectService,
    private readonly createSelbriEffect: CreateSelbriEffectService,
    private readonly storeSelbriseffect: StoreSelbrisEffectService,
    private readonly loggingEffect: LoggingEffectService,
    private readonly commandEnteredEffect: CommandEnteredEffectService
  ) {}

  followAuthenticatedState$ = createEffect(
    this.followAuthenticatedStateEffect.followAuthenticatedStateEffect,
    { dispatch: true }
  );

  obtainConfig$ = createEffect(this.obtainConfigEffect.obtainConfigEffect, {
    dispatch: true,
  });

  changeUsereffect$ = createEffect(this.changeUserEffect.changeUserEffect, {
    dispatch: true,
  });

  createSelbriEffect$ = createEffect(
    this.createSelbriEffect.createSelbriEffect,
    {
      dispatch: true,
    }
  );

  storeSelbriseffect$ = createEffect(
    this.storeSelbriseffect.storeSelbrisEffect,
    {
      dispatch: true,
    }
  );

  loggingEffect$ = createEffect(this.loggingEffect.loggingEffect, {
    dispatch: true,
  });

  commandEnteredEffect$ = createEffect(
    this.commandEnteredEffect.commandEnteredEffect,
    {
      dispatch: true,
    }
  );
}
