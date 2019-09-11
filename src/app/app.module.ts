import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendarService } from './calendar.service';
import { CalendarsComponent } from './calendars/calendars.component';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';
import { CalendarSearchComponent } from './calendar-search/calendar-search.component';
// import { CarouselComponent } from './carousel/carousel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VisitComponent } from './visit/visit.component';
import { VisitNavbarComponent } from './visit-navbar/visit-navbar.component';
import { DirectionsComponent } from './directions/directions.component';
import { ParkPoliciesComponent } from './park-policies/park-policies.component';
import { HoursComponent } from './hours/hours.component';
import { HistoryComponent } from './history/history.component';
import { SupportComponent } from './support/support.component';
import { HiringComponent } from './hiring/hiring.component';
import { RentAnimalsComponent } from './rent-animals/rent-animals.component';
import { AboutNavbarComponent } from './about-navbar/about-navbar.component';
import { AboutComponent } from './about/about.component';
import { AdmissionComponent } from './admission/admission.component';

import { MyMaterialModule } from './material.module';
// import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true
    }),
    MyMaterialModule
  ],
  declarations: [
    AppComponent,
    CalendarSearchComponent,
    CalendarsComponent,
    CalendarDetailComponent,
    // CarouselComponent
    DashboardComponent,
    VisitComponent,
    VisitNavbarComponent,
    DirectionsComponent,
    ParkPoliciesComponent,
    HoursComponent,
    HistoryComponent,
    RentAnimalsComponent,
    HiringComponent,
    SupportComponent,
    AboutNavbarComponent,
    AboutComponent,
    AdmissionComponent
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
