// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { TablesComponent } from './tables/tables.component';
import { ReservationsComponent } from './reservations/reservations.component';

export const routes: Routes = [
  { path: 'tables', component: TablesComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: '', redirectTo: '/tables', pathMatch: 'full' } // Redirection par défaut vers /tables
];
