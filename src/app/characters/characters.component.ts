import {  Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiRickAndMortyService } from '../api-rick-and-morty.service';
import { ICharacter } from '../interfaces/IPersonaje';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
  public cargando: boolean = true;
  public characters: ICharacter[] = [];

  constructor(private apiCharacters: ApiRickAndMortyService){}

  ngOnInit(): void {
    this.cargando = true;
    this.apiCharacters.getCharacters()
      .subscribe(response => {
        this.characters = response.results;
        this.cargando = false;
      });
  }
}
