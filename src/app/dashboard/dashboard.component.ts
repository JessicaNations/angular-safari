import {Component, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

// import { Calendar } from '../calendar';
// import { CalendarService } from '../calendar.service';


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

    sliderWidth: Number = 940;
    sliderImageWidth: Number = 300;
    sliderImageHeight: Number = 225;
    sliderArrowShow: Boolean = true;
    sliderInfinite: Boolean = false;
    sliderImagePopup: Boolean = true;
    sliderAutoSlide: Boolean = false;
    sliderSlideImage: Number = 1;
    sliderAnimationSpeed: any = 1;
    imageObject: Array<object> = [];


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
            video: 'https://youtu.be/tYa6OLQHrEc',
            title: 'Youtube example one with title.',
            alt: 'youtube video'
        }, {
            video: 'https://youtu.be/6pxRHBw-k8M',
            alt: 'youtube video'
        }, {
            video: 'assets/video/movie2.mp4',
            posterImage: 'assets/img/slider/11.jpg',
            title: 'MP4 Video exmaple two with Poster-Image.',
            alt: 'alt MP4 Video exmaple two with Poster-Image.'
        }, {
            image: 'assets/img/slider/calf.jpg',
            thumbImage: 'assets/img/slider/calf.jpeg',
            title: 'calf'
        }, {
            image: 'assets/img/slider/zebra.jpg',
            thumbImage: 'assets/img/slider/zebra.jpeg',
            alt: 'zebra'
        }, {
            image: 'assets/img/slider/peacock.jpg',
            thumbImage: 'assets/img/slider/peacock.jpeg',
            alt: 'peacock',
            title: 'peacock'
        }, {
            image: 'assets/img/slider/8.jpg',
            thumbImage: 'assets/img/slider/8_min.jpeg'
        }, {
            image: 'assets/img/slider/9.jpg',
            thumbImage: 'assets/img/slider/9_min.jpeg',
            title: 'Image nine title'
        }];
    }

    prevImageClick() {
        this.ds.prev();
    }

    nextImageClick() {
        this.ds.next();
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
