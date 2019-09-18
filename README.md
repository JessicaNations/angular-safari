# Safari TODOs
# DASHBOARD TODOs
* might make an img slider of event cards
* share button (with bottom modal) on each event card
    * Extra credit: set it overlapping the image and text
# CALENDAR TODOs
* calendar month scroll like google calendars
    * finger swipe in the middle of the calendar (along with the arrows)
* On date click show the details in bottom sheet modal
* Link to event cards
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
# ADMISSION TODOs
* modals and steppers
## Hours TODOs
* Dynamic bold open hours
* Word "Open" next to today's hours
* Red "Closed" next to today's hours
* Subtext below today's bold hours: Tuesday hours
## Job APP
* everything
* does anyone still use google forms?
## ERROR
JobAppComponent.html:12 ERROR Error: formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
       directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      
    <div [formGroup]="myGroup">
      <input formControlName="firstName">
    </div>

    In your class:

    this.myGroup = new FormGroup({
       firstName: new FormControl()
    });
    at Function.push../node_modules/@angular/forms/fesm5/forms.js.ReactiveErrors.controlParentException (forms.js:1177)
    at FormControlName.push../node_modules/@angular/forms/fesm5/forms.js.FormControlName._checkParentType (forms.js:5631)
    at FormControlName.push../node_modules/@angular/forms/fesm5/forms.js.FormControlName._setUpControl (forms.js:5635)
    at FormControlName.push../node_modules/@angular/forms/fesm5/forms.js.FormControlName.ngOnChanges (forms.js:5586)
    at checkAndUpdateDirectiveInline (core.js:10101)
    at checkAndUpdateNodeInline (core.js:11371)
    at checkAndUpdateNode (core.js:11333)
    at debugCheckAndUpdateNode (core.js:11970)
    at debugCheckDirectivesFn (core.js:11930)
    at Object.eval [as updateDirectives] (JobAppComponent.html:12)
## History TODOs
* Row About the Owners
* Row History Blurb with pictures
    * timeline?
* Row Coming soon
## Animalservices (Animals for your event) TODOs
* Modals and steppers
# Images:
## Current Hours Page
![Hours](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/hours.png)
## Current About Page
![About](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/about.png)
## Dashboard:
![Dashboard](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/dashboard.png)
## Dashboard Actions:
![Dashboard-Actions](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/dashboard-actions.png)
## Calendars:
![Calendars](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/calendars.png)
## Calendars Detail:
![Calendars-Detail](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/calendars-detail.png)
## Party Table
![PartyTable](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/partytable.png)
## Admission
![Admission](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/admission.png)


