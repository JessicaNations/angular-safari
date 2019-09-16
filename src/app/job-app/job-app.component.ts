import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

/** @title Form field with label */
@Component({
  selector: 'my-job-app',
  templateUrl: 'job-app.component.html',
})
export class JobAppComponent {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
}
