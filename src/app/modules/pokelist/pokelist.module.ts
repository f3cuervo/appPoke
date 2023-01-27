import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokelistRoutingModule } from './pokelist-routing.module';
import { PokeindexPagesComponent } from './pokeindex-pages/pokeindex-pages.component';
import { ListPagesComponent } from './list-pages/list-pages.component';
import { DetailsPagesComponent } from './details-pages/details-pages.component';


@NgModule({
  declarations: [
    PokeindexPagesComponent,
    ListPagesComponent,
    DetailsPagesComponent
  ],
  imports: [
    CommonModule,
    PokelistRoutingModule,
    SharedModule
  ]
})
export class PokelistModule { }
