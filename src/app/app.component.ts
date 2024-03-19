import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiRickAndMortyService } from './api-rick-and-morty.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'datos-externos';

  constructor (private RickAndMorty: ApiRickAndMortyService){

  }
  ngOnInit(): void {
      this.RickAndMorty.getPersonajes()
  }
}
