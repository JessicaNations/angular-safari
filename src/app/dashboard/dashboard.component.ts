import {Component} from '@angular/core';

// import { Calendar } from '../calendar';
// import { CalendarService } from '../calendar.service';
@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {    // implements OnInit
  public pageTitle = 'Safari';
  // calendars: Calendar[] = [];









  // ngOnInit(): void {
  //   this.calendarService.getCalendars()
  //     .subscribe(calendars => this.calendars = calendars.slice(1, 5));
  // }

  // gotoDetail(calendar: Calendar): void {
  //   const link = ['/detail', calendar.id];
  //   this.router.navigate(link);
  // }
}
