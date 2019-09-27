import { Component, ViewChild, AfterViewInit, Renderer2, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
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
    <style>
    .cdk-virtual-scroll-data-source-example .example-viewport {
      height: 200px;
      width: 200px;
      border: 1px solid black;
    }

    .cdk-virtual-scroll-data-source-example .example-viewport .cdk-virtual-scroll-content-wrapper {
      display: flex;
      flex-direction: row;
    }

    .cdk-virtual-scroll-data-source-example .example-item {
      width: 50px;
      height: 100%;
      writing-mode: vertical-lr;
    }
    </style>
    <div class="cdk-virtual-scroll-data-source-example">
  <cdk-virtual-scroll-viewport orientation="horizontal" itemSize="50" class="example-viewport">
    <div class="calendar-wrapper">
      <mat-calendar #calendar
        [(selected)]="selectedDate"
        (monthSelected)="monthSelected($event)"
        (selectedChange)="onDateChanged($event)">
      </mat-calendar>
    </div>
    </cdk-virtual-scroll-viewport>
</div>`,
    encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
