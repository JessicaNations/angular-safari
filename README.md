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
## Installations:
* npm install node-sass
* npm i @ngmodule/material-carousel
## Errors:
* carousel index dots off center (maybe img count==5)
* needs array of imgs/slideslist
* I might be on to something with ng image slider
## 8/28/19 Images:
![Carousel](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/dashboard8-29.png)
![Calendars](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/calendars8-29.png)
