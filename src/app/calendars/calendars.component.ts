import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from '../calendar';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'my-calendars',
  templateUrl: './calendars.component.html',
})
export class CalendarsComponent implements OnInit {
  calendars: Calendar[];
  selectedCalendar: Calendar;
  addingCalendar = false;
  error: any;
  showNgFor = false;

  constructor(private router: Router, private calendarService: CalendarService) {}

  getCalendars(): void {
    this.calendarService
      .getCalendars()
      .subscribe(
        calendars => (this.calendars = calendars),
        error => (this.error = error)
      )
  }

  addCalendar(): void {
    this.addingCalendar = true;
    this.selectedCalendar = null;
  }

  close(savedCalendar: Calendar): void {
    this.addingCalendar = false;
    if (savedCalendar) {
      this.getCalendars();
    }
  }

  deleteCalendar(calendar: Calendar, event: any): void {
    event.stopPropagation();
    this.calendarService.delete(calendar).subscribe(res => {
      this.calendars = this.calendars.filter(h => h !== calendar);
      if (this.selectedCalendar === calendar) {
        this.selectedCalendar = null;
      }
    }, error => (this.error = error));
  }

  ngOnInit(): void {
    this.getCalendars();
  }

  onSelect(calendar: Calendar): void {
    this.selectedCalendar = calendar;
    this.addingCalendar = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCalendar.id]);
  }
}
