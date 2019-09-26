// import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';
// import { ThemePalette } from '@angular/material';
// import { MatCarouselSlideComponent } from '@ngmodule/material-carousel';  // Orientation

// @Component({
//   selector: 'app-carousel',
//   templateUrl: './carousel.component.html',
// })
// export class CarouselComponent {   // implements OnInit

//   public slidesList = new Array<never>(3);
//   // public slidesList: Array<object> = [
//   //   {image: 'assets/images/calf.jpg'},
//   //   {image: 'assets/images/peacock.jpg'},
//   //   {image: 'assets/images/zebra.jpg'}
//   // ];
//   public showContent = false;

//   public timings = '250ms ease-in';
//   public autoplay = true;
//   public interval = 5000;
//   public loop = true;
//   public hideArrows = false;
//   public hideIndicators = false;
//   public color: ThemePalette = 'accent';
//   public maxWidth = 'auto';
//   public proportion = 25;
//   public slides = this.slidesList.length;
//   public overlayColor = '#00000040';
//   public hideOverlay = false;
//   public useKeyboard = true;
//   public useMouseWheel = false;
//   // public orientation: Orientation = 'ltr';
//   public log: string[] = [];

//   @ViewChildren(MatCarouselSlideComponent) public carouselSlides: QueryList<
//     MatCarouselSlideComponent
//   >;

//   constructor() {}

//   // ngOnInit() {
//   //     this.slidesList = [
//   //       'assets/images/calf.jpg',
//   //       'peacock.jpg',
//   //       'zebra.jpg'
//   //     ];
//   //   }

//   public resetSlides(): void {
//     this.carouselSlides.forEach(item => (item.disabled = false));
//   }

//   public onChange(index: number) {
//     this.log.push(`MatCarousel#change emitted with index ${index}`);
//   }
// }
