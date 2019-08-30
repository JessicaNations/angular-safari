import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'my-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  title = 'Tour of Calendars';
  events: string[] = [];
  opened: boolean;

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  triggerMethod() {
    this.trigger.openMenu();
  }

}

