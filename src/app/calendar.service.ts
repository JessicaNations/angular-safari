import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Calendar } from './calendar';

@Injectable()
export class CalendarService {
  private calendarsUrl = 'app/calendars'; // URL to web api

  constructor(private http: HttpClient) {}

  getCalendars() {
    return this.http
      .get<Calendar[]>(this.calendarsUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getCalendar(id: number): Observable<Calendar> {
    return this.getCalendars().pipe(
      map(calendars => calendars.find(calendar => calendar.id === id))
    );
  }

  save(calendar: Calendar) {
    if (calendar.id) {
      return this.put(calendar);
    }
    return this.post(calendar);
  }

  delete(calendar: Calendar) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.calendarsUrl}/${calendar.id}`;

    return this.http.delete<Calendar>(url).pipe(catchError(this.handleError));
  }

  // Add new Calendar
  private post(calendar: Calendar) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Calendar>(this.calendarsUrl, calendar)
      .pipe(catchError(this.handleError));
  }

  // Update existing Calendar
  private put(calendar: Calendar) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.calendarsUrl}/${calendar.id}`;

    return this.http.put<Calendar>(url, calendar).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
