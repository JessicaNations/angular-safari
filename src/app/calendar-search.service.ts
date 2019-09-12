import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Calendar } from './calendar';

@Injectable()
export class CalendarSearchService {
  constructor(private http: HttpClient) {}

  search(term: string): Observable<Calendar[]> {
    return this.http
      .get<Calendar[]>(`./calendars/?name=${term}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }
}
