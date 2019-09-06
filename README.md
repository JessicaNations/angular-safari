# Safari
# DASHBOARD/CALENDAR
* Welcome page
* Title header
* Nav bar
* With tabs:
    * Dashboard
    * Calendars (Events)
    * Admission
    * Visit
    * About
    * Support
* Animal gif/carousel
* ?instagram carousel? do they moderate that?
    * Not resizing :(
    * style="display: block; width: 100%;"
    * Center it!
* Blocks of Upcoming holidays/events
* Search Calendar/Events
# EVENTS (maybe make this the dashboard)
* New and upcoming attractions
* If current month == month from range, display the holidays in the specified range.
## Counts the number of upcoming holidays to fetch:
* moment().nextHolidays(5).isHoliday();
## easy way
* display all dates for each holiday
* moment.holiday(Christmas);
* and format the date
## complicated way
* Create an array of each holiday to be displayed
* If holiday in date range is in the array, display it?
    * <container-element [ngSwitch]=”var now = moment().month()”>
    * <some-element *ngSwitchCase=”1”>  
    * moment().holidaysBetween(moment(‘1/1’ | ‘4/3’));
* etc
    * moment().holidaysBetween(moment(‘1/1’ | ‘4/3’));
    * moment().holidaysBetween(moment(‘2/1’ | ‘5/31’));
    * moment().holidaysBetween(moment(‘3/1’ | ‘6/30’));
    * moment().holidaysBetween(moment(‘4/1’ | ‘7/31’));
    * moment().holidaysBetween(moment(‘5/1’ | ‘8/31’));
    * moment().holidaysBetween(moment(‘6/1’ | ‘9/30’));
    * moment().holidaysBetween(moment(‘7/1’ | ‘10/31’));
    * moment().holidaysBetween(moment(‘8/1’ | ‘11/30’));
    * moment().holidaysBetween(moment(‘9/1’ | ‘12/31’));
    * moment().holidaysBetween(moment(‘10/1’ | ‘1/31’));
    * moment().holidaysBetween(moment(‘11/1’ | ‘2/28’));
# ADMISSION (offer email subscription at ticket purchase)
* Adults
* Kids
* Feed cups
* Bird feed sticks
* Deer enclosure
* Pony rides
* Hayrides
* Concessions
# VISIT
* Hours
* Monday: 10am - 5pm [format]
* Hide info until it's the relevant time of day/year? 
    * With a button to reveal it
    * Entrance to the park ends at 4:30
    * Park closes at 5
    * Special holiday hours
* Map
    * Easy and clear: either google link img
    * Or minimalist line drawing
    * Picture of the the park entrance
    * ?Picture of the street view in google maps?
* Groups
    * parties
    * school tours
    * modals and steppers
* Accessibility
    * wheel-chair access
    * Input box for access suggestions
* Park Policies
    * animal encounters
    * park security
    * no pets
    * no outside food
# ABOUT
* Historical blurb
* Meet the owners
* Animals for your event
    * Modals and steppers
* Meet our animals 
    * (tour of heroes table)
* Hiring/”Careers”
# SUPPORT
* donations
* volunteer
# Notes
* might make an img slider of cards
* added a basic share button
    * it doesn't work
    * Extra credit: set it overlapping the image and text
* 4 details buttons for some reason that was with the original app
# Stackblitz Errors
* Error in /turbo_modules/@angular/compiler@6.0.0/bundles/compiler.umd.js (301:17)
* Template parse errors:
    * More than one component matched on this element.
    * Make sure that only one component's selector can match a given element.
* Conflicting components: MatFormField,MatFormField ("
<div>
<label>July 4th through the&nbsp;</label>{{calendar.id}}th</div>
* ERROR
<mat-form-field class="example-full-width">
<input matInput [matDatepicker]="picker" placeholder="): ng:///AppModule/CalendarDetailComponent.html@5:2

# Images:
## Dashboard:
![Dashboard](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/dashboard.png)
## Dashboard Actions:
![Dashboard-Actions](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/dashboard-actions.png)
## Calendars:
![Calendars](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/calendars.png)
## Calendars Detail:
![Calendars-Detail](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/calendars-detail.png)
