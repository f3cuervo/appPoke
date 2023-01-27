import { PokelistService } from 'src/app/services/pokelist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokeindex-pages',
  templateUrl: './pokeindex-pages.component.html',
  styleUrls: ['./pokeindex-pages.component.css']
})
export class PokeindexPagesComponent implements OnInit {
  flag:number = 0
  poke:string = 'hola';
  constructor(
    private listService:PokelistService
  ){}

  ngOnInit(){
    this.changeFlag();
  }

  changeFlag(){
    this.listService.flag().subscribe(data=>{
      this.flag = data
    })
    console.log(this.flag)
  }


}
