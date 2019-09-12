# Safari
# DASHBOARD
* Tabs:
    * Events
    * Admission
    * Visit
    * About
    * Support
* might make an img slider of cards
* share button
    * Extra credit: set it overlapping the image and text
# Events
* Link to hours?
* Event Cards (maybe carousel)
* OR Animal gif/carousel
* ?instagram carousel? do they moderate that?
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
## Event Details Page
* Not sure what I'm gonna do with this
* Some type of admission detail thing maybe
# EVENTS TODO:
* On date click show the details in bottom sheet modal
# ADMISSION (offer email subscription at ticket purchase)
* Adults
* Kids
* Feed cups
* Bird feed sticks
* Deer enclosure
* Pony rides
* Hayrides
* Concessions
* Groups
    * parties
    * school tours
    * modals and steppers
# VISIT -- with submenu
* Hours
* FAQs
* Policies
## Hours TODO:
* Connect to calendar?
* Dynamic bold open hours
* Word "Open" next to today's hours
* Red "Closed" next to today's hours
* Subtext below today's bold hours: Tuesday hours
* Monday: 10am - 5pm [format]
## Current Hours Page
![Hours-Detail](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/hours-detail.png)
## Faq
* Easy and clear: either google link img
* Or minimalist line drawing
* Picture of the park entrance
* Picture of the front of the park
## Park Policies
* animal encounters
* park security
* no pets
* no outside food
* Accessibility
    * wheel-chair access
    * strollers and such
# ABOUT -- submenu
* History
* Animal services
* Hiring
## Current Page
![About](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/about.png)
## History
* Row About the Owners
* Row History Blurb with pictures
    * timeline?
* Row Coming soon
## Animalservices (Animals for your event)
* Modals and steppers
## Hiring/”Careers”
* modals? steppers
# SUPPORT
* donations
* volunteer
# Notes
* **DO NOT MOVE ON WITHOUT FIXING ERRORS**
     
# Errors
# Images:
## Dashboard:
![Dashboard](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/dashboard.png)
## Dashboard Actions:
![Dashboard-Actions](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/dashboard-actions.png)
## Calendars:
![Calendars](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/calendars.png)
## Calendars Detail:
![Calendars-Detail](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/calendars-detail.png)
