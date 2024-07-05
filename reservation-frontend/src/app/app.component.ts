// src/app/app.module.ts
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // Importez RouterModule si vous utilisez des routes
import { routes } from './app.routes'; // Importez vos routes si nécessaire

import { TablesComponent } from './tables/tables.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AppComponent } from './app/app.component';

@Component({
  declarations: [
    AppComponent,
    TablesComponent,
    ReservationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) // Configurez les routes avec RouterModule.forRoot() si nécessaire
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppComponent { }
