import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
import { Calendar } from '../calendar';
import { CalendarSearchService } from '../calendar-search.service';

@Component({
  selector: 'my-calendar-search',
  templateUrl: './calendar-search.component.html',
  providers: [CalendarSearchService]
})
export class CalendarSearchComponent implements OnInit {
  calendars: Observable<Calendar[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private calendarSearchService: CalendarSearchService,
    private router: Router
  ) {}

  search(term: string): void {
    // Push a search term into the observable stream.
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.calendars = this.searchTerms.pipe(
      debounceTime(300), // wait for 300ms pause in calendars
      distinctUntilChanged(), // ignore if next search term is same as previous
      switchMap(
        term =>
          term // switch to new observable each time
            ? // return the http search observable
              this.calendarSearchService.search(term)
            : // or the observable of empty calendars if no search term
              of<Calendar[]>([])
      ),
      catchError(error => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        return of<Calendar[]>([]);
      })
    );
  }

  gotoDetail(calendar: Calendar): void {
    const link = ['/detail', calendar.id];
    this.router.navigate(link);
  }
}
