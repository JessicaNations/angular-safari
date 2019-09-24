import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgImageSliderModule, NgImageSliderComponent } from 'ng-image-slider';

@Component({
    selector: 'my-dash-slider',
    templateUrl: './dash-slider.component.html',
    // styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class DashSliderComponent {
    @ViewChild('nav') ds: NgImageSliderComponent;
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

    constructor() {
        this.setImageObject();
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
            image: 'assets/img/slider/5.jpg',
            thumbImage: 'assets/img/slider/5_min.jpeg',
            title: 'image five'
        }, {
            image: 'assets/img/slider/6.jpg',
            thumbImage: 'assets/img/slider/6_min.jpeg',
            alt: 'image six'
        }, {
            image: 'assets/img/slider/7.jpg',
            thumbImage: 'assets/img/slider/7_min.jpeg',
            alt: 'alt of image seven',
            title: 'title of image seven'
        }, {
            image: 'assets/img/slider/8.jpg',
            thumbImage: 'assets/img/slider/8_min.jpeg'
        }, {
            image: 'assets/img/slider/9.jpg',
            thumbImage: 'assets/img/slider/9_min.jpeg',
            title: 'Image nine title'
        }];
    }

    imageOnClick(index) {
        console.log('index', index);
    }

    arrowOnClick(event) {
        console.log('arrow click event', event);
    }

    lightboxArrowClick(event) {
        console.log('popup arrow click', event);
    }

    prevImageClick() {
        this.ds.prev();
    }

    nextImageClick() {
        this.ds.next();
    }
}
