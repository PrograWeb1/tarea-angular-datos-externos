import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterLink, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datos-externos';
  esRutaLocations: boolean = false; // Declarar la propiedad aquí

  constructor(private router: Router) {
    // Suscribirse a los eventos de cambio de ruta
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.esRutaLocations = this.router.url === '/locations';
      }
    });
  }
}

