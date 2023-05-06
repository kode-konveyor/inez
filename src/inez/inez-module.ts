import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SelbrisComponent } from './UI/selbris/selbris.component';
import { StoreModule } from '@ngrx/store';
import { ObtainSelbrisService } from './services/ObtainSelbrisService';
import { Synchronizer } from '../common/Synchronizer';
import { GenericErrorHandlerService } from 'src/common/GenericErrorHandlerService';
import { repository } from './Repository';
import { EffectsModule } from '@ngrx/effects';
import { ChangeUserEffectService } from './effects/ChangeUserEffectService';
import { StoreSelbrisEffectService } from './effects/StoreSelbrisEffectService';
import { StoreSelbrisService } from './services/StoreSelbrisService';
import { ObtainConfigEffectService } from './effects/ObtainConfigEffectService';
import { FollowAuthenticatedStateEffectService } from './effects/FollowAuthenticatedStateEffectService';
import { Effects } from './Effects';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { LoginButtonComponent } from './login-button.component';
import { LogoutButtonComponent } from './logout-button.component';
import { PageComponent } from './page.component';
import { InezRoutingModule } from './inez-routing.module';
import { CommonModule } from '@angular/common';
import { LoggingEffectService } from './effects/LoggingEffectService';
import { CreateSelbriEffectService } from './effects/CreateSelbriEffectService';
import { SaveSelbriService } from './services/SaveSelbriService';
import { SelbriEditorComponent } from './UI/selbrieditor/selbrieditor.component';
import { SelbriFilterComponent } from './UI/selbrifilter/selbrifilter.component';
import { SelbriitemComponent } from './UI/selbriitem/selbriitem.component';
import { SelbriListComponent } from './UI/selbrilist/selbrilist.component';

const STORE_FEATURE_NAME = 'r';
@NgModule({
  declarations: [
    SelbrisComponent,
    SelbriEditorComponent,
    SelbriitemComponent,
    SelbriListComponent,
    SelbriFilterComponent,
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
    InezRoutingModule,
    StoreModule.forFeature(STORE_FEATURE_NAME, repository),
  ],
  providers: [
    GenericErrorHandlerService,
    FollowAuthenticatedStateEffectService,
    ObtainConfigEffectService,
    ChangeUserEffectService,
    CreateSelbriEffectService,
    StoreSelbrisEffectService,
    LoggingEffectService,
    ObtainSelbrisService,
    SaveSelbriService,
    Synchronizer,
    StoreSelbrisService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InezModule {}
