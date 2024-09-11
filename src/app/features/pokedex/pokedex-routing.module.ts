import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {PokedexListComponent} from "./pages/pokedex-list/pokedex-list.component";
import {PokedexComponent} from "./pokedex.component";

const routes : Routes = [
  {
    path : '',
    component: PokedexComponent,
    children:[
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {path: 'list', component: PokedexListComponent}
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class PokedexRoutingModule { }
