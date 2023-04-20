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
import { Effects } from './effects/Effects';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { LoginButtonComponent } from './login-button.component';
import { LogoutButtonComponent } from './logout-button.component';
import { PageComponent } from './page.component';
import { AngulartestRoutingModule } from './angulartest-routing.module';
import { CommonModule } from '@angular/common';
import { LoggingEffect } from './effects/LoggingEffect';

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
    EffectsModule.forFeature([Effects, LoggingEffect]),
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AngulartestRoutingModule,
    StoreModule.forFeature('r', repository),
  ],
  providers: [
    GenericErrorHandler,
    FollowAuthenticatedStateEffect,
    ObtainConfigEffect,
    ChangeUserEffect,
    CreateHeroEffect,
    StoreHeroesEffect,
    ObtainHeroesService,
    SaveHeroService,
    Synchronizer,
    StoreHeroesService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AngulartestModule {}
