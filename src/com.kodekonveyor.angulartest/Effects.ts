import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { ChangeUserEffectService } from './effects/ChangeUserEffectService';
import { CreateHeroEffectService } from './effects/CreateHeroEffectService';
import { FollowAuthenticatedStateEffectService } from './effects/FollowAuthenticatedStateEffectService';
import { LoggingEffectService } from './effects/LoggingEffectService';
import { ObtainConfigEffectService } from './effects/ObtainConfigEffectService';
import { StoreHeroesEffectService } from './effects/StoreHeroesEffectService';

@Injectable()
export class Effects {
  constructor(
    private readonly followAuthenticatedStateEffect: FollowAuthenticatedStateEffectService,
    private readonly obtainConfigEffect: ObtainConfigEffectService,
    private readonly changeUserEffect: ChangeUserEffectService,
    private readonly createHeroEffect: CreateHeroEffectService,
    private readonly storeHeroeseffect: StoreHeroesEffectService,
    private readonly loggingEffect: LoggingEffectService
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

  createHeroEffect$ = createEffect(this.createHeroEffect.createHeroEffect, {
    dispatch: true,
  });

  storeHeroeseffect$ = createEffect(this.storeHeroeseffect.storeHeroesEffect, {
    dispatch: true,
  });

  loggingEffect$ = createEffect(this.loggingEffect.loggingEffect, {
    dispatch: true,
  });
}
