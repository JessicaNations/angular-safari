import { Component, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
  now: number;

  @ViewChild('nav') ds: NgImageSliderComponent;  // , {static: false}
  showSlider = true;

  sliderWidth: Number = 300;
  sliderImageWidth: Number = 300;
  sliderImageHeight: Number = 225;
  sliderArrowShow: Boolean = true;
  sliderInfinite: Boolean = true;
  sliderImagePopup: Boolean = true;
  sliderAutoSlide: Boolean = false;
  sliderSlideImage: Number = 1;
  sliderAnimationSpeed: any = 1;
  imageObject: Array<object> = [];


  private swipeCoord?: [number, number];
  private swipeTime?: number;

  // opened = this.now >= 9 && this.now < 17;
  // closingSoon = this.now >= 16 && this.now < 17;
  // closed = this.now >= 17 && this.now <= 9;

  constructor() {
    this.setImageObject();
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }

  onChangeHandler() {
    this.setImageObject();
    this.showSlider = false;
    setTimeout(() => {
      this.showSlider = true;
    }, 10);
  }

  setImageObject() {
    this.imageObject = [{
      image: 'http://www.bigjoelsafari.com/uploads/3/4/3/2/34325501/2650386.jpg',
      thumbImage: 'http://www.bigjoelsafari.com/uploads/3/4/3/2/34325501/2650386.jpg',
      alt: 'logo'
    }, {
      video: 'https://youtu.be/tYa6OLQHrEc',
      title: 'Youtube example one with title.',
      alt: 'youtube video'
    }, {
      video: 'https://youtu.be/6pxRHBw-k8M',
      alt: 'youtube video'
    }, {
      image: 'http://www.bigjoelsafari.com/uploads/3/4/3/2/34325501/9820928.jpg',
      thumbImage: 'http://www.bigjoelsafari.com/uploads/3/4/3/2/34325501/9820928.jpg',
      title: 'Zebra'
    },
    {
      image: 'http://www.bigjoelsafari.com/uploads/3/4/3/2/34325501/4821874_orig.jpg',
      thumbImage: 'http://www.bigjoelsafari.com/uploads/3/4/3/2/34325501/4821874_orig.jpg',
      title: 'Newborn calf'
    }, {
      image: 'http://www.bigjoelsafari.com/uploads/3/4/3/2/34325501/4152886.jpg',
      thumbImage: 'http://www.bigjoelsafari.com/uploads/3/4/3/2/34325501/4152886.jpg',
      alt: 'Peacock',
      title: 'Peacock'
    }, {
      image: 'http://www.bigjoelsafari.com/uploads/3/4/3/2/34325501/7283907.jpg',
      thumbImage: 'http://www.bigjoelsafari.com/uploads/3/4/3/2/34325501/7283907.jpg',
      alt: 'Camel',
      title: 'Camel'
    }, {
      image: 'http://www.bigjoelsafari.com/uploads/3/4/3/2/34325501/9557704.jpg',
      thumbImage: 'http://www.bigjoelsafari.com/uploads/3/4/3/2/34325501/9557704.jpg',
      title: 'Snake'
    }, {
      image: 'http://www.bigjoelsafari.com/uploads/3/4/3/2/34325501/9487075.jpg',
      thumbImage: 'http://www.bigjoelsafari.com/uploads/3/4/3/2/34325501/9487075.jpg',
      title: 'Bison and Deer'
    }];
  }


  prevImageClick() {
    this.ds.prev();
  }

  nextImageClick() {
    this.ds.next();
  }

  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
    const time = new Date().getTime();

    if (when === 'start') {
        this.swipeCoord = coord;
        this.swipeTime = time;
    } else if (when === 'end') {
        // const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
        // const duration = time - this.swipeTime;

        // if (duration < 1000 //
        //     && Math.abs(direction[0]) > 30 // Long enough
        //     && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
        //     if (direction[0] < 0) {
        //         this.next();
        //     } else {
        //         this.prev();
        //     }
        // }
    }
}

  // calendars: Calendar[] = [];

  // ngOnInit(): void {
  //   this.calendarService.getCalendars()
  //     .subscribe(calendars => this.calendars = calendars.slice(1, 5));
  // }

  // gotoDetail(calendar: Calendar): void {
  //   const link = ['/detail', calendar.id];
  //   this.router.navigate(link);
  // }
}
