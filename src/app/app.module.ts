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
// import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarsComponent } from './calendars/calendars.component';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';
import { CalendarSearchComponent } from './calendar-search/calendar-search.component';
import { CarouselComponent } from './carousel/carousel.component';

// import { SecuredImageComponent } from './dashboard/secured-image.component';
// import { MyHttpInterceptor } from './dashboard/my-http.interceptor';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';

// import { CarouselModule } from 'ngx-bootstrap/carousel';

import { MyMaterialModule } from './material.module';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule
} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true
    }),
    // CarouselModule.forRoot(),
    MatCarouselModule,
    MyMaterialModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatMenuModule
  ],
  declarations: [
    AppComponent,
    // DashboardComponent,
    // SecuredImageComponent,
    CalendarSearchComponent,
    CalendarsComponent,
    CalendarDetailComponent,
    CarouselComponent
  ],
  providers: [CalendarService,
    // {provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
