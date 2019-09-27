import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-calendar-bottom',
  templateUrl: './calendar-bottom.component.html'
})
export class CalendarBottomComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<CalendarBottomComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

  // calendars: Calendar[] = [];

  // ngOnInit(): void {
  //   this.calendarService.getCalendars()
  //     .subscribe(calendars => this.calendars = calendars.slice(1, 5));
  // }

  // gotoDetail(calendar: Calendar): void {
  //   const link = ['/detail', calendar.id];
  //   this.router.navigate(link);
  // }
