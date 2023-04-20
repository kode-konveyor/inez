import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { ChangeUserEffect } from './ChangeUserEffect';
import { CreateHeroEffect } from './CreateHeroEfffect';
import { FollowAuthenticatedStateEffect } from './FollowAuthenticatedStateEffect';
import { LoggingEffect } from './LoggingEffect';
import { ObtainConfigEffect } from './ObtainConfigEffect';
import { StoreHeroesEffect } from './StoreHeroesEffect';

@Injectable()
export class Effects {
  constructor(
    private readonly followAuthenticatedStateEffect: FollowAuthenticatedStateEffect,
    private readonly obtainConfigEffect: ObtainConfigEffect,
    private readonly changeUserEffect: ChangeUserEffect,
    private readonly createHeroEffect: CreateHeroEffect,
    private readonly storeHeroeseffect: StoreHeroesEffect,
    private readonly loggingEffect: LoggingEffect
  ) {}

  followAuthenticatedState$ = createEffect(
    this.followAuthenticatedStateEffect.followAuthenticatedState,
    { dispatch: true }
  );

  obtainConfig$ = createEffect(this.obtainConfigEffect.obtainConfig, {
    dispatch: true,
  });

  changeUsereffect$ = createEffect(this.changeUserEffect.changeUserEffect, {
    dispatch: true,
  });

  createHeroEffect$ = createEffect(this.createHeroEffect.createHeroEffect, {
    dispatch: true,
  });

  storeHeroeseffect$ = createEffect(this.storeHeroeseffect.storeHeroeseffect, {
    dispatch: true,
  });

  loggingEffect$ = createEffect(this.loggingEffect.loggingEffect);
}
