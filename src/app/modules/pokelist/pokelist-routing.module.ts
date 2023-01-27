import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeindexPagesComponent } from './pokeindex-pages/pokeindex-pages.component';
import { ListPagesComponent } from './list-pages/list-pages.component';

const routes: Routes = [
  {
    path:'',
    component:PokeindexPagesComponent
  },
  //esta url es para una prueba, si se me olvida quitarla me excuso jasja
  {
    path:'x',
    component:ListPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokelistRoutingModule { }
