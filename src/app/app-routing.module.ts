import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarsComponent } from './calendars/calendars.component';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';
// import { CarouselComponent } from './carousel/carousel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VisitComponent } from './visit/visit.component';
import { HoursComponent } from './hours/hours.component';
import { FaqComponent } from './faq/faq.component';
import { ParkPoliciesComponent } from './park-policies/park-policies.component';
import { HistoryComponent } from './history/history.component';
import { SupportComponent } from './support/support.component';
import { HiringComponent } from './hiring/hiring.component';
import { ParkServicesComponent } from './park-services/park-services.component';
import { AboutComponent } from './about/about.component';
import { AdmissionComponent } from './admission/admission.component';
import { CalendarBottomComponent } from './calendar-bottom/calendar-bottom.component';


const routes: Routes = [
  // { path: '', redirectTo: '/carousel', pathMatch: 'full' },
  // { path: 'carousel', component: CarouselComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CalendarDetailComponent },
  { path: 'calendars', component: CalendarsComponent },
  { path: 'visit', component: VisitComponent },
  { path: 'hours', component: HoursComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'park-policies', component: ParkPoliciesComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'support', component: SupportComponent },
  { path: 'hiring', component: HiringComponent },
  { path: 'park-services', component: ParkServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admission', component: AdmissionComponent },
  { path: 'calendar-bottom', component: CalendarBottomComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
