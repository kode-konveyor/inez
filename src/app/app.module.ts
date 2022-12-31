import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { HeroesComponent } from './heroes/heroes.component'
import { FormsModule } from '@angular/forms'
import { HeroeditorComponent } from './heroeditor/heroeditor.component'
import { SelectedHeroRepository } from './repositories/SelectedHeroRepository'
import { HeroItemComponent } from './heroitem/heroitem.component'
import { HeroesRepository } from 'src/app/repositories/HeroesRepository'
import { HeroListComponent } from './herolist/herolist.component'
import { HeroesComponentInitService } from '../services/HeroesComponentInitService'
import { HeroItemClassSelectorService } from '../services/HeroItemClassSelectorService'
import { HeroItemOnClickService } from '../services/HeroItemOnClickService'

@NgModule({
  declarations: [
    HeroesComponent,
    HeroeditorComponent,
    HeroItemComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    SelectedHeroRepository,
    HeroesRepository,
    HeroesComponentInitService,
    HeroItemClassSelectorService,
    HeroItemOnClickService
  ],
  bootstrap: [HeroesComponent]
})
export class AppModule { }
