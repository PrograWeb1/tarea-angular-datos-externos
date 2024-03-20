import {  Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiRickAndMortyService } from '../api-rick-and-morty.service';
import { ILocation } from '../interfaces/ILocation';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent implements OnInit{
  public cargando: boolean = true;
  public locations: ILocation[] = [];

  constructor(private apiCharacters: ApiRickAndMortyService){}

ngOnInit(): void {
  this.cargando = true;
  this.apiCharacters.getLocations()
    .subscribe(response =>{
      this.locations =response.results;
      this.cargando= false;
    })
}

}
