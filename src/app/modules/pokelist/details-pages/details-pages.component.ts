import { Component } from '@angular/core';
import { PokelistService } from 'src/app/services/pokelist.service';

@Component({
  selector: 'app-details-pages',
  templateUrl: './details-pages.component.html',
  styleUrls: ['./details-pages.component.css']
})
export class DetailsPagesComponent {
  pokeDetails:any=[]
  constructor(private listService:PokelistService){}

  ngOnInit(){
    this.details();
  }

  details(){
    this.listService.pokeInfo().subscribe(data=>{
      this.listService.getAllPokes(data).subscribe(datax=>{
        this.pokeDetails = datax;
      })
    })
  }
  flagOff(){
    this.listService.flagDetails.next(0);
  }

}
