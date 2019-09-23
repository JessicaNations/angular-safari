# Safari TODOs
# copying 
![GoogleInfo](https://github.com/JessicaNations/angular-safari/blob/master/src/assets/screenShots/GoogleInfo.png)
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
# ADMISSION TODOs
* modals and steppers
## Hours TODOs
* Red "Closed" next to today's hours
## Job APP
* switch over to google forms
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


