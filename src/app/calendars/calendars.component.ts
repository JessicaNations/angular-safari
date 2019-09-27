import { Component, ViewChild, AfterViewInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { Moment } from 'moment';
import { MatCalendar } from '@angular/material';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CalendarBottomComponent } from '../calendar-bottom/calendar-bottom.component';


@Component({
  selector: 'app-calendars',
  template: `
    <!-- <style>
      .calendar-wrapper{
      width: 300px;
    }
    </style> -->
    <style>.example-custom-date-class {
      background: orange;
      border-radius: 100%;
    }</style>
    <div class="calendar-wrapper">
      <mat-calendar #calendar
      [(selected)]="selectedDate"
        (monthSelected)="monthSelected($event)"
        (selectedChange)="onDateChanged($event)">
      </mat-calendar>
    </div>`,
    encapsulation: ViewEncapsulation.None,
})
export class CalendarsComponent implements AfterViewInit {
  @ViewChild('calendar') calendar: MatCalendar<Moment>;
  selectedDate: Moment;

  constructor(
    private renderer: Renderer2,
    private _bottomSheet: MatBottomSheet) {}

  // monthSelected(date) {
  //   alert(`Selected: ${date}`);
  // }

  onDateChanged(date) {
    this._bottomSheet.open(CalendarBottomComponent);
  }

  ngAfterViewInit() {
    const buttons = document.querySelectorAll('mat-calendar mat-calendar-header button');

    if (buttons) {
      Array.from(buttons).forEach(button => {
        this.renderer.listen(button, 'click', () => {
          // alert('Arrow button clicked');
        });
      })
    }
  }
}
