import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeroesComponent } from './heroes/heroes.component'
import { FormsModule } from '@angular/forms'
import { HeroeditorComponent } from './heroeditor/heroeditor.component'
import { SelectedHeroRepository } from '../services/SelectedHeroRepository'
import { HeroItemComponent } from './heroitem/heroitem.component'
import { HeroesRepository } from 'src/services/HeroesRepository'
import { HeroListComponent } from './herolist/herolist.component'

@NgModule({
  declarations: [
    AppComponent,
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
    HeroesRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
