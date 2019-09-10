import { Component, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger, ThemePalette } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'my-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;  // check if this works
  title = 'Tour of Calendars';
  events: string[] = [];
  opened: boolean;
  constructor(
    private router: Router
  ) {}


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

  goVisit(): void {
    const link = ['/visit'];
    this.router.navigate(link);
  }

  goAbout(): void {
    const link = ['/about'];
    this.router.navigate(link);
  }

}

