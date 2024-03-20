import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICharacters } from './interfaces/ICharacters';
import { ILocations } from './interfaces/ILocations';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRickAndMortyService {
  private urlBase ='https://rickandmortyapi.com/api';

  constructor( private  cliente: HttpClient) { }

  getCharacters(): Observable<ICharacters>{
    let url = `${this.urlBase}/character`;
    return this.cliente.get<ICharacters>(url);
  }

  getLocations():Observable<ILocations>{
    let url = `${this.urlBase}/location`;
    return this.cliente.get<ILocations>(url);
  }

}
