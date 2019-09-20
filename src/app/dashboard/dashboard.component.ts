import {Component, Input} from '@angular/core';

// import { Calendar } from '../calendar';
// import { CalendarService } from '../calendar.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {    // implements OnInit
  public pageTitle = 'Safari';

  now: number;


  opened = this.now >= 9 && this.now < 17;


  // closingSoon = this.now >= 16 && this.now < 17;

 // closed = this.now >= 17 && this.now <= 9;

  constructor() {
    setInterval(() => {
      this.now = Date.now();
    }, 1);
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
}
