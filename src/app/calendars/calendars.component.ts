import { Component, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { Moment } from 'moment';
import { MatCalendar } from '@angular/material';
import { Router } from '@angular/router';
import { Calendar } from 'app/calendar';

@Component({
  selector: 'my-calendars',
  template: `
    <!-- <style>
      .calendar-wrapper{
      width: 300px;
    }
    </style> -->
    <div class="calendar-wrapper">
      <mat-calendar #calendar
        [(selected)]="selectedDate"
        (monthSelected)="monthSelected($event)"
        (selectedChange)="onDateChanged($event)">
      </mat-calendar>
    </div>
 `
})
export class CalendarsComponent implements AfterViewInit {

  @ViewChild('calendar') calendar: MatCalendar<Moment>;

  selectedDate: Moment;
  // selectedCalendar: Calendar;

  constructor(private router: Router, private renderer: Renderer2) {
  }

  monthSelected(date) {
    alert(`Selected: ${date}`);
  }

  // onSelect(calendar: Calendar): void {
  //   this.selectedCalendar = calendar;
  // }

  onDateChanged(date) {
    alert(`Selected: ${date}`);
    // this.router.navigate(['/detail', this.selectedCalendar]);
  }

  ngAfterViewInit() {
    // Find all arrow buttons in the calendar
    const buttons = document.querySelectorAll('mat-calendar mat-calendar-header button');

    if (buttons) {
      // Listen for click event
      Array.from(buttons).forEach(button => {
        this.renderer.listen(button, 'click', () => {
          alert('Arrow button clicked');
        });
      })
    }
  }
}
