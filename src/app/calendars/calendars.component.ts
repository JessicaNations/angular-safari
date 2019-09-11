import { Component, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { Moment } from 'moment';
import { MatCalendar } from '@angular/material';
import { Router } from '@angular/router';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { CalendarBottomComponent } from '../calendar-bottom/calendar-bottom.component';


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
    <!-- <br/>
    <button mat-raised-button (click)="openBottomSheet()">Share Calendar Details</button> -->
 `
})
export class CalendarsComponent implements AfterViewInit {

  @ViewChild('calendar') calendar: MatCalendar<Moment>;

  selectedDate: Moment;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private _bottomSheet: MatBottomSheet) {}

  monthSelected(date) {
    alert(`Selected: ${date}`);
  }

  // onSelect(calendar: Calendar): void {
  //   this.selectedCalendar = calendar;
  // }

  onDateChanged(date) {
    // alert(`Selected: ${date}`);
    this._bottomSheet.open(CalendarBottomComponent);
  }

  // openBottomSheet(): void {
  //   this._bottomSheet.open(CalendarBottomComponent);
  // }

  // goDetail(): void {
  //   const link = ['/detail'];
  //   this.router.navigate(link);
  // }

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
