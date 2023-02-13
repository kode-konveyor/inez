import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeroesComponent } from './UI/heroes/heroes.component';
import { HeroeditorComponent } from './UI/heroeditor/heroeditor.component';
import { HeroitemComponent } from './UI/heroitem/heroitem.component';
import { HeroListComponent } from './UI/herolist/herolist.component';
import { HeroFilterComponent } from './UI/herofilter/herofilter.component';
import { StoreModule } from '@ngrx/store';
import { ObtainHeroesService } from './services/ObtainHeroesService';
import { Synchronizer } from '../com.kodekonveyor.common/Synchronizer';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './UI/AppAuthButton';
import { UserProfileComponent } from './UI/UserProfileComponent';
import { GenericErrorHandler } from 'src/com.kodekonveyor.common/GenericErrorHandler';
import { repository } from './repositories/Repository';
import { EffectsModule } from '@ngrx/effects';
import { ChangeUserEffect } from './effects/ChangeUserEffect';
import { SaveHeroService } from './services/SaveHeroService';
import { CreateHeroEffect } from './effects/CreateHeroEfffect';
import { StoreHeroesEffect } from './effects/StoreHeroesEffect';
import { StoreHeroesService } from './services/StoreHeroesService';
import { ObtainConfigEffect } from './effects/ObtainConfigEffect';
import { FollowAuthenticatedStateEffect } from './effects/FollowAuthenticatedStateEffect';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

export const REDIRECT_URI = 'com.kodekonveyor.angulartest://kode-konveyor.eu.auth0.com/capacitor/com.kodekonveyor.angulartest/callback';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroeditorComponent,
    HeroitemComponent,
    HeroListComponent,
    HeroFilterComponent,
    AuthButtonComponent,
    UserProfileComponent
  ],
  imports: [
    EffectsModule.forRoot([ChangeUserEffect, CreateHeroEffect, FollowAuthenticatedStateEffect, ObtainConfigEffect, StoreHeroesEffect]),
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ r: repository }),
    AuthModule.forRoot({
      domain: 'kode-konveyor.eu.auth0.com',
      clientId: 'OqUGGMvs9Ch8yitD3sf2lm6mN61MZqPw',
      authorizationParams: {
        redirect_uri: REDIRECT_URI,
        audience: 'https://test.kodekonveyor.com/angulartest',
        scope: 'read:current_user'
      },
      httpInterceptor: {
        allowedList: [
          {
            uri: 'https://test.kodekonveyor.com/angulartest/api/v1/hero',
            tokenOptions: {
              authorizationParams: {
                audience: 'https://test.kodekonveyor.com/angulartest',
                scope: 'read:current_user'
              }
            }
          },
          {
            uri: 'http://localhost:9090/angulartest/api/v1/hero',
            tokenOptions: {
              authorizationParams: {
                audience: 'https://test.kodekonveyor.com/angulartest',
                scope: 'read:current_user'
              }
            }
          },
          {
            uri: '/angulartest/api/v1/hero',
            tokenOptions: {
              authorizationParams: {
                audience: 'https://test.kodekonveyor.com/angulartest',
                scope: 'read:current_user'
              }
            }
          }
        ]
      }
    })
  ],
  providers: [
    GenericErrorHandler,
    ObtainHeroesService,
    SaveHeroService,
    Synchronizer,
    StoreHeroesService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [
    AuthButtonComponent,
    UserProfileComponent,
    HeroesComponent
  ]
})
export class Angulartest { }
