import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeroesComponent } from './UI/heroes/heroes.component';
import { HeroeditorComponent } from './UI/heroeditor/heroeditor.component';
import { HeroitemComponent } from './UI/heroitem/heroitem.component';
import { HeroListComponent } from './UI/herolist/herolist.component';
import { HeroFilterComponent } from './UI/herofilter/herofilter.component';
import { StoreModule } from '@ngrx/store';
import { ObtainHeroesService } from './services/ObtainHeroesService';
import { Synchronizer } from '../com.kodekonveyor.common/Synchronizer';
import { GenericErrorHandlerService } from 'src/com.kodekonveyor.common/GenericErrorHandlerService';
import { repository } from './Repository';
import { EffectsModule } from '@ngrx/effects';
import { ChangeUserEffectService } from './effects/ChangeUserEffectService';
import { SaveHeroService } from './services/SaveHeroService';
import { CreateHeroEffectService } from './effects/CreateHeroEffectService';
import { StoreHeroesEffectService } from './effects/StoreHeroesEffectService';
import { StoreHeroesService } from './services/StoreHeroesService';
import { ObtainConfigEffectService } from './effects/ObtainConfigEffectService';
import { FollowAuthenticatedStateEffectService } from './effects/FollowAuthenticatedStateEffectService';
import { Effects } from './Effects';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { LoginButtonComponent } from './login-button.component';
import { LogoutButtonComponent } from './logout-button.component';
import { PageComponent } from './page.component';
import { AngulartestRoutingModule } from './angulartest-routing.module';
import { CommonModule } from '@angular/common';
import { LoggingEffectService } from './effects/LoggingEffectService';

const STORE_FEATURE_NAME = 'r';
@NgModule({
  declarations: [
    HeroesComponent,
    HeroeditorComponent,
    HeroitemComponent,
    HeroListComponent,
    HeroFilterComponent,
    PageComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
  ],
  imports: [
    EffectsModule.forFeature([Effects]),
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AngulartestRoutingModule,
    StoreModule.forFeature(STORE_FEATURE_NAME, repository),
  ],
  providers: [
    GenericErrorHandlerService,
    FollowAuthenticatedStateEffectService,
    ObtainConfigEffectService,
    ChangeUserEffectService,
    CreateHeroEffectService,
    StoreHeroesEffectService,
    LoggingEffectService,
    ObtainHeroesService,
    SaveHeroService,
    Synchronizer,
    StoreHeroesService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AngulartestModule {}
