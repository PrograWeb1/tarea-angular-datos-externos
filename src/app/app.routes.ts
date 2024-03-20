import { Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { LocationsComponent } from './locations/locations.component';

export const routes: Routes = [
    {
        path:"characters", component: CharactersComponent
    },
    {
        path:"locations", component: LocationsComponent
    }
];
