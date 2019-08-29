import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Calendar } from '../calendar';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'my-calendar-detail',
  templateUrl: './calendar-detail.component.html',
  styleUrls: ['./calendar-detail.component.css']
})
export class CalendarDetailComponent implements OnInit {
  @Input() calendar: Calendar;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private calendarService: CalendarService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.navigated = true;
        this.calendarService.getCalendar(id).subscribe(calendar => (this.calendar = calendar));
      } else {
        this.navigated = false;
        this.calendar = new Calendar();
      }
    });
  }

  save(): void {
    this.calendarService.save(this.calendar).subscribe(calendar => {
      this.calendar = calendar; // saved calendar, w/ id if new
      this.goBack(calendar);
    }, error => (this.error = error)); // TODO: Display error message
  }

  goBack(savedCalendar: Calendar = null): void {
    this.close.emit(savedCalendar);
    if (this.navigated) {
      window.history.back();
    }
  }
}
