import { Component, ViewEncapsulation, Input } from '@angular/core';

/** @title Datepicker with custom date classes */
@Component({
  selector: 'app-datepicker-date-class-example',
  templateUrl: 'datepicker-date-class-example.html',
  styleUrls: ['datepicker-date-class-example.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DatepickerDateClassExample {
  today = new Date();
  tomorrow = new Date(new Date().setDate(this.today.getDate() + 1));
  twoDaysAgo = new Date(new Date().setDate(this.today.getDate() - 2));
  nextWeek = new Date(new Date().setDate(this.today.getDate() + 9));
  someDateArray: Date[] = [
    this.tomorrow,
    this.twoDaysAgo,
    this.nextWeek,
  ];
}

@Component({
  selector: 'app-highlighted-dates',
  template: `
  <mat-form-field class="example-full-width">
    <input matInput [matDatepicker]="picker" placeholder="Choose a date">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker [dateClass]="dateClass" #picker></mat-datepicker>
  </mat-form-field>
  `,
  styleUrls: ['datepicker-date-class-example.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HighlightedDatesComponent {
  private _datesArray: Date[];
  @Input()
  get datesArray(): Date[] { return this._datesArray; }
  set datesArray(d: Date[]) {
    this._datesArray = d;

    this._setupClassFunction();
  }

  dateClass: (d: Date) => any;

  private _setupClassFunction() {
    this.dateClass = (d: Date) => {
      let selected = false;

      if (this._datesArray) {
        selected = this._datesArray.some((item: Date) =>
          item.getFullYear() === d.getFullYear()
          && item.getDate() === d.getDate()
          && item.getMonth() === d.getMonth());
      }

      return selected ? 'example-custom-date-class' : undefined;
    }
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
