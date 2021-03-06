import { environment } from './../../../environments/environment';
import { GuestBookings } from './../../shared/models/guest.bookings.model';
import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reservation } from '../../shared/models/guest.model';

@Injectable({
  providedIn: 'root'
})
export class GuestBookingsService {
  private reservationsUrl = `${environment.apiBaseUrl}/reservation`

  guestIds: string[] = [];
  constructor(private httpClient: HttpClient) { }

  getNextNDayBookings(numOfDays: number): Observable<GuestBookings[]> {
    return this.httpClient.get<GuestBookings[]>(`${this.reservationsUrl}/${numOfDays}`);
  }

  getReservationsForDate(date: Date): Observable<GuestBookings> {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dayStr = day < 10 ? `0${day}` : day;
    let monthStr = month < 10 ? `0${month}` : month;
    let formattedDate = `${dayStr}-${monthStr}-${year}`;
    const params = {
      'dateStr' : formattedDate
    };

    return this.httpClient.get<GuestBookings>(`${this.reservationsUrl}/date`, { params: params })
      .pipe(
        map(bookings => {
          this.guestIds = [];
          bookings.guests.map(guest => this.guestIds.push(guest.guacId))
          return bookings;
        })
      )
  }
}
