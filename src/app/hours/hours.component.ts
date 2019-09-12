import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-hours',
  templateUrl: './hours.component.html',
})
export class HoursComponent {

// idk trying it out
// And try this ng-template[matExpansionPanelContent]
@Input()
collapsedHeight: string
}
