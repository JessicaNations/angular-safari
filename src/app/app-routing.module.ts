import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarsComponent } from './calendars/calendars.component';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';
// import { CarouselComponent } from './carousel/carousel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VisitComponent } from './visit/visit.component';
import { HoursComponent } from './hours/hours.component';
import { DirectionsComponent } from './directions/directions.component';
import { ParkPoliciesComponent } from './park-policies/park-policies.component';
import { HistoryComponent } from './history/history.component';
import { SupportComponent } from './support/support.component';
import { HiringComponent } from './hiring/hiring.component';
import { RentAnimalsComponent } from './rent-animals/rent-animals.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  // { path: '', redirectTo: '/carousel', pathMatch: 'full' },
  // { path: 'carousel', component: CarouselComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CalendarDetailComponent },
  { path: 'calendars', component: CalendarsComponent },
  { path: 'visit', component: VisitComponent },
  { path: 'hours', component: HoursComponent },
  { path: 'directions', component: DirectionsComponent },
  { path: 'park-policies', component: ParkPoliciesComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'support', component: SupportComponent },
  { path: 'hiring', component: HiringComponent },
  { path: 'rent-animals', component: RentAnimalsComponent },
  { path: 'about', component: AboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
