import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexListComponent } from './pages/pokedex-list/pokedex-list.component';
import { PokedexComponent } from './pokedex.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { WritingOldSchoolTerminalComponent } from './components/writing-old-school-terminal/writing-old-school-terminal.component';
import {RouterOutlet} from "@angular/router";
import {} from "@angular/common/http";
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { CrucetaComponent } from './components/cruceta/cruceta.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { ABButtonsComponent } from './components/a-b-buttons/a-b-buttons.component';



@NgModule({
  declarations: [
    PokedexListComponent,
    PokedexComponent,
    AudioPlayerComponent,
    WritingOldSchoolTerminalComponent,
    PokemonListComponent,
    CrucetaComponent,
    PokemonDetailComponent,
    ABButtonsComponent,
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    RouterOutlet,
  ]
})
export class PokedexModule { }
