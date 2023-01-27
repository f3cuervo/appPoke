import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokelistService } from 'src/app/services/pokelist.service';

@Component({
  selector: 'app-list-pages',
  templateUrl: './list-pages.component.html',
  styleUrls: ['./list-pages.component.css']
})
export class ListPagesComponent implements OnInit {
  private API_URL = 'https://pokeapi.co/api/v2/pokemon'
  pokes:Pokemon[]=[];
  next:string = '';
  prev:string= '';
  count:number = 20

  constructor(private listService:PokelistService){}

  ngOnInit(){
    this.gotchAll(this.API_URL)
  }

  gotchAll(url:string){
    this.listService.getAllPokes(url).subscribe(data=>{
      this.next = data.next;
      this.prev = data.previous;
      this.pokes = data.results
      console.log(data)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  }

  counter(letter:string){
    if(letter === 'x'){
      this.count -= 20;
    }else if(letter === 'y'){
      this.count += 20;
    }
  }

  sendName(name:string){
    this.listService.namePoke.next('https://pokeapi.co/api/v2/pokemon/'+name);
  }

}
