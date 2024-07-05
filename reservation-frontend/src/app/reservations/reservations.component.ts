// src/app/reservations/reservations.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  tables: any[] = [];
  reservation: any = {
    table_id: null,
    customer_name: '',
    reservation_date: '',
    reservation_time: '',
    duration: ''
  };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTables().subscribe(data => {
      this.tables = data;
    });
  }

  submitReservation(): void {
    this.apiService.createReservation(this.reservation).subscribe(response => {
      alert('Réservation effectuée avec succès');
      this.reservation = {
        table_id: null,
        customer_name: '',
        reservation_date: '',
        reservation_time: '',
        duration: ''
      };
    });
  }
}
