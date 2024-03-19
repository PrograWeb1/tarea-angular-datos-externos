import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRickAndMortyService {
  private urlBase ='https://rickandmortyapi.com/api';

  constructor( private  cliente: HttpClient) { }

  getPersonajes(){
    let url = `${this.urlBase}/character`
    this.cliente.get(url).subscribe(respuesta => console.log(respuesta))
  }
}
