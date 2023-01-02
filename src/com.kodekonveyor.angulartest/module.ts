import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './routing'
import { FormsModule } from '@angular/forms'

import { HeroesComponent } from './UI/heroes/heroes.component'
import { HeroeditorComponent } from './UI/heroeditor/heroeditor.component'
import { SelectedHeroRepository } from './repositories/SelectedHeroRepository'
import { HeroitemComponent } from './UI/heroitem/heroitem.component'
import { HeroesRepository } from 'src/com.kodekonveyor.angulartest/repositories/HeroesRepository'
import { HeroListComponent } from './UI/herolist/herolist.component'
import { GetTheActualListOfHeroesService } from './services/GetTheActualListOfHeroesService'
import { IsThisHeroSelectedForEditingService } from './services/IsThisHeroSelectedForEditingService'
import { SelectHeroForEditingService } from './services/SelectHeroForEditingService'
import { HeroFilterRepository } from './repositories/HeroFilterRepository'
import { HeroFilterComponent } from './UI/herofilter/herofilter.component'
import { InitializeStatesService } from 'src/com.kodekonveyor.angulartest/services/InitializeStatesService'
import { SelectHeroesWithMatchingNamesService } from 'src/com.kodekonveyor.angulartest/services/SelectHeroesWithMatchingNamesService'

@NgModule({
  declarations: [
    HeroesComponent,
    HeroeditorComponent,
    HeroitemComponent,
    HeroListComponent,
    HeroFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    SelectedHeroRepository,
    HeroesRepository,
    HeroFilterRepository,
    GetTheActualListOfHeroesService,
    IsThisHeroSelectedForEditingService,
    SelectHeroForEditingService,
    InitializeStatesService,
    SelectHeroesWithMatchingNamesService,
  ],
  bootstrap: [HeroesComponent]
})
export class AppModule { }
