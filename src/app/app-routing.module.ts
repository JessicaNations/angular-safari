import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarsComponent } from './calendars/calendars.component';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';
// import { CarouselComponent } from './carousel/carousel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VisitComponent } from './visit/visit.component';
import { HoursComponent } from './hours/hours.component';
import { DirectionsComponent } from './directions/directions.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { ParkPoliciesComponent } from './park-policies/park-policies.component';


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
  { path: 'accessibility', component: AccessibilityComponent },
  { path: 'park-policies', component: ParkPoliciesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
