import { Component, Output, EventEmitter, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { Moment } from 'moment';
import * as moment from 'moment';
import { MatCalendar } from '@angular/material';

@Component({
  selector: 'app-calendarb',
  template: `
  <!--<style>
      .calendar-wrapper{
      width: 300px;
    }
    </style>-->
  <div class="calendar-wrapper">
  <button mat-button (click)="prevDay()">Prev</button>
  <button mat-button (click)="today()">Today</button>
  <button mat-button (click)="nextDay()">Next</button>

  <mat-calendar #calendar (monthSelected)="monthSelected($event)" [(selected)]="selectedDate"
    (selectedChange)="dateChanged()"></mat-calendar>
</div>`
})
export class CalendarbComponent implements AfterViewInit {

  @Output()
  dateSelected: EventEmitter<Moment> = new EventEmitter();

  @Output()
  selectedDate = moment();

  @ViewChild('calendarb')  // , { static: true }
  calendar: MatCalendar<Moment>;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    const buttons = document.querySelectorAll('.mat-calendar-previous-button, .mat-calendar-next-button');

    if (buttons) {
      Array.from(buttons).forEach(button => {
        this.renderer.listen(button, 'click', () => {
          console.log('Arrow buttons clicked');
        });
      });
    }
  }

  monthSelected(date: Moment) {
    console.log('month changed');
  }

  dateChanged() {
    this.calendar.activeDate = this.selectedDate;
    this.dateSelected.emit(this.selectedDate);
  }

  prevDay() {
    const prevMoment = moment(this.selectedDate).add(-1, 'days');
    this.selectedDate = prevMoment;
    this.dateChanged();
  }

  today() {
    this.selectedDate = moment();
    this.dateChanged();
  }

  nextDay() {
    const nextMoment = moment(this.selectedDate).add(1, 'days');
    this.selectedDate = nextMoment;
    this.dateChanged();
  }
}
