import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PokelistService {

  namePoke = new BehaviorSubject<any>('https://pokeapi.co/api/v2/pokemon/gengar');

  constructor(private hhtp:HttpClient) { }

  public getAllPokes(url:string):Observable<any>{
    return this.hhtp.get(url)
  }
  public pokeInfo():Observable<any>{
    return this.namePoke.asObservable();
  }
}
