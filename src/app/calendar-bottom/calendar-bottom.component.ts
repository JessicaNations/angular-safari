import {Component} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'my-calendar-bottom',
  templateUrl: './calendar-bottom.component.html'
})
export class CalendarBottomComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<CalendarBottomComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
