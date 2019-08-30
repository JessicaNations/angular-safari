import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarsComponent } from './calendars/calendars.component';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  { path: '', redirectTo: '/carousel', pathMatch: 'full' },
  { path: 'carousel', component: CarouselComponent },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CalendarDetailComponent },
  { path: 'calendars', component: CalendarsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
