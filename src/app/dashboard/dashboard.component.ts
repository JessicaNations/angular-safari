// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// import { Calendar } from '../calendar';
// import { CalendarService } from '../calendar.service';

// // import { HttpClient } from '@angular/common/http';
// // import { map } from 'rxjs/operators';

// @Component({
//   selector: 'my-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//   calendars: Calendar[] = [];

//   // jwtToken = window.localStorage.getItem('jwtToken');
//   // images$ = this.httpClient
//   //   .get(`https://api.giphy.com/v1/gifs/search?q=dogs&imit=10&api_key=dc6zaTOxFJmzC`)
//   //   .pipe(map((resp: any) => resp.data));

//   constructor(
//     private router: Router,
//     private calendarService: CalendarService,
//     // private httpClient: HttpClient
//     ) {}

//   ngOnInit(): void {
//     this.calendarService.getCalendars()
//       .subscribe(calendars => this.calendars = calendars.slice(1, 5));
//   }

//   gotoDetail(calendar: Calendar): void {
//     const link = ['/detail', calendar.id];
//     this.router.navigate(link);
//   }

//   // setJwtToken(token: string): void {
//   //   this.jwtToken = token;
//   //   window.localStorage.setItem('jwtToken', token);
//   // }
// }
