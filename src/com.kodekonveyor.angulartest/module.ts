import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './routing'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { HeroesComponent } from './UI/heroes/heroes.component'
import { HeroeditorComponent } from './UI/heroeditor/heroeditor.component'
import { HeroitemComponent } from './UI/heroitem/heroitem.component'
import { HeroListComponent } from './UI/herolist/herolist.component'
import { GetTheActualListOfHeroesService } from './services/GetTheActualListOfHeroesService'
import { IsThisHeroSelectedForEditingService } from './services/IsThisHeroSelectedForEditingService'
import { SelectHeroForEditingService } from './services/SelectHeroForEditingService'
import { HeroFilterComponent } from './UI/herofilter/herofilter.component'
import { InitializeStatesService } from 'src/com.kodekonveyor.angulartest/services/InitializeStatesService'
import { StoreModule } from '@ngrx/store'
import { heroesReducer } from './repositories/HeroesRepository'
import { ObtainHeroesService } from './services/ObtainHeroesService';
import { SynchronizeService } from './services/SynchronizeService';
import { selectedHeroReducer } from './repositories/SelectedHeroRepository';
import { heroFilterReducer } from './repositories/HeroFilterRepository';
import { createModeReducer } from './repositories/showSaveButtonRepository';


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
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      heroes: heroesReducer,
      selectedHero: selectedHeroReducer,
      heroFilter: heroFilterReducer,
      createMode: createModeReducer,
    })
  ],
  providers: [
    GetTheActualListOfHeroesService,
    IsThisHeroSelectedForEditingService,
    SelectHeroForEditingService,
    InitializeStatesService,
    ObtainHeroesService,
    SynchronizeService,
  ],
  bootstrap: [HeroesComponent]
})
export class Angulartest { }
