import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path: '', redirectTo: '/pokedex/list', pathMatch: 'full'},
  {path: 'pokedex', loadChildren: () => import('./features/pokedex/pokedex.module').then(m => m.PokedexModule)}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
