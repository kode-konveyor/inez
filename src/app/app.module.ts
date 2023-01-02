import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms'

import { HeroesComponent } from './heroes/heroes.component'
import { HeroeditorComponent } from './heroeditor/heroeditor.component'
import { SelectedHeroRepository } from './repositories/SelectedHeroRepository'
import { HeroitemComponent } from './heroitem/heroitem.component'
import { HeroesRepository } from 'src/app/repositories/HeroesRepository'
import { HeroListComponent } from './herolist/herolist.component'
import { GetTheActualListOfHeroesService } from '../com.kodekonveyor.angulartest/services/GetTheActualListOfHeroesService'
import { IsThisHeroSelectedForEditingService } from '../com.kodekonveyor.angulartest/services/IsThisHeroSelectedForEditingService'
import { SelectHeroForEditingService } from '../com.kodekonveyor.angulartest/services/SelectHeroForEditingService'
import { HeroFilterRepository } from './repositories/HeroFilterRepository'
import { HeroFilterComponent } from './herofilter/herofilter.component'
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
