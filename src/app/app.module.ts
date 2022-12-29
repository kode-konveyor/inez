import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeroesComponent } from './heroes/heroes.component'
import { FormsModule } from '@angular/forms'
import { HeroeditorComponent } from './heroeditor/heroeditor.component'
import { SelectHeroRepository } from '../services/SelectHeroService'
import { HeroItemComponent } from './heroitem/heroitem.component'
import { InitializeAppDataService } from '../services/InitializeAppDataService'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeditorComponent,
    HeroItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    SelectHeroRepository,
    InitializeAppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
