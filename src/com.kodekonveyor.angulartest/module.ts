import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './routing'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeroesComponent } from './UI/heroes/heroes.component'
import { HeroeditorComponent } from './UI/heroeditor/heroeditor.component'
import { HeroitemComponent } from './UI/heroitem/heroitem.component'
import { HeroListComponent } from './UI/herolist/herolist.component'
import { GetTheActualListOfHeroesService } from './services/GetTheActualListOfHeroesService'
import { SelectHeroForEditingService } from './services/SelectHeroForEditingService'
import { HeroFilterComponent } from './UI/herofilter/herofilter.component'
import { InitializeStatesService } from 'src/com.kodekonveyor.angulartest/services/InitializeStatesService'
import { StoreModule } from '@ngrx/store'
import { heroesReducer } from './repositories/HeroesRepository'
import { ObtainHeroesService } from './services/ObtainHeroesService';
import { Synchronizer } from './services/Synchronizer';
import { CreateHeroService } from './services/CreateHeroService';
import { ModifyHeroService } from './services/ModifyHeroService';
import { ChangeToCreateModeService } from './services/ChangeToCreateModeService';
import { statesReducer } from './repositories/StatesRepository';
import { SetHeroFilterService } from './services/SetHeroFilterService';
import { ObtainUrlBaseService } from './services/ObtainUrlBaseService';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './UI/AppAuthButton';
import { UserProfileComponent } from './UI/UserProfileComponent';


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
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      heroes: heroesReducer,
      states: statesReducer,
    }),
    AuthModule.forRoot({
      domain: 'kode-konveyor.eu.auth0.com',
      clientId: 'OqUGGMvs9Ch8yitD3sf2lm6mN61MZqPw',
      authorizationParams: {
        redirect_uri: window.location.href,
        audience: 'https://test.kodekonveyor.com/angulartest',
        scope: 'read:current_user'
      },
      httpInterceptor: {
        allowedList: [
          {
            uri: 'https://test.kodekonveyor.com/angulartest/*',
            tokenOptions: {
              authorizationParams: {
                audience: 'https://test.kodekonveyor.com/angulartest',
                scope: 'read:current_user'
              }
            }
          },
          {
            uri: 'https://localhost:9090/angulartest/*',
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
    GetTheActualListOfHeroesService,
    SelectHeroForEditingService,
    InitializeStatesService,
    ObtainHeroesService,
    Synchronizer,
    CreateHeroService,
    ModifyHeroService,
    ChangeToCreateModeService,
    SetHeroFilterService,
    ObtainUrlBaseService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [
    AuthButtonComponent,
    UserProfileComponent,
    HeroesComponent
  ]
})
export class Angulartest { }
