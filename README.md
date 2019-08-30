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
# Angular Material Implemented
* Console errors unresolved
* side nav executed, but not the way it should be lol
    * It is appears under the existing content or else it's transparent
    * It doesn't close until you click the menu button again
    
* I deleted and changed over to angular theming and didn't break it!
    * Needs a core
    * button styling is lame
    * Added chiplist module to app and material -- it totally breaks the whole app lol

## Errors:
* Angular is running in the development mode. Call enableProdMode() to enable the production mode.
* sockjs.js:2998 WebSocket connection to 'ws://localhost:4200/sockjs-node/074/nrgdwlyn/websocket' failed: WebSocket is closed before the connection is established.
## Began implementation of Mat Carousel
* I'm probably going to forget what I'm doing in the middle of the thing I'm doing :/
* Trying to figure out where the images go
* I need to make it display on the dashboard
* Maybe comment out the dashboard and point to the carousel instead


## 8/28/19 Images:
![Dashboard](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/images/dashboard8-29.png)
![Calendars](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/images/calendars8-29.png)
