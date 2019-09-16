import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { Calendar } from '../calendar';
// import { CalendarService } from '../calendar.service';
@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent{    // implements OnInit
  public pageTitle = 'Safari';
  // calendars: Calendar[] = [];

  constructor(
    private router: Router,
    // private calendarService: CalendarService
  ) {}

  // ngOnInit(): void {
  //   this.calendarService.getCalendars()
  //     .subscribe(calendars => this.calendars = calendars.slice(1, 5));
  // }

  // gotoDetail(calendar: Calendar): void {
  //   const link = ['/detail', calendar.id];
  //   this.router.navigate(link);
  // }
}
