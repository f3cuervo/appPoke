import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //home
  {
    path:'',
    loadChildren:()=>import('./modules/home/home.module').then(m=>m.HomeModule)
  },
  //pokelist
  {
    path:'pokelist',
    loadChildren:()=>import('./modules/pokelist/pokelist.module').then(m=>m.PokelistModule)
  },
  //404
  {
    path:'**',
    redirectTo:'/'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
