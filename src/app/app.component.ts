import { Component, ViewChild, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;  // check if this works
  title = 'Big Joel\'s Safari';
  events: string[] = [];
  opened: boolean;
  constructor(
    private router: Router,
    public breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
        } else {
        }
      });
  }

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

  goAdmission(): void {
    const link = ['/admission'];
    this.router.navigate(link);
  }

}

