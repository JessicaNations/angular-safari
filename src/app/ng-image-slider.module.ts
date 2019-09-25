import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImageSliderComponent } from './ng-image-slider.component';

import { NgImageSliderService } from './ng-image-slider.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NgImageSliderComponent
    ],
    providers: [
        NgImageSliderService
    ],
    exports: [NgImageSliderComponent]
})
export class NgImageSliderModule { }
