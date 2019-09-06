import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'my-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  title = 'Tour of Calendars';
  events: string[] = [];
  opened: boolean;
  constructor(
    private router: Router
  ) {}

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  triggerMethod() {
    this.trigger.openMenu();
  }

  goBack(): void {
    const link = ['/dashboard'];
    this.router.navigate(link);
  }

  goCalendar(): void {
    const link = ['/calendars'];
    this.router.navigate(link);
  }
}

