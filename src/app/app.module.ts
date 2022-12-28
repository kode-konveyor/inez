import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeroesComponent } from './heroes/heroes.component'
import { FormsModule } from '@angular/forms'
import { HeroeditorComponent } from './heroeditor/heroeditor.component'
import { SelectHeroService } from './heroes/SelectHeroService'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    SelectHeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
