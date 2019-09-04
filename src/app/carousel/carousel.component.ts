import { Component, QueryList, ViewChildren } from '@angular/core';
import { ThemePalette } from '@angular/material';
import { MatCarouselSlideComponent } from '@ngmodule/material-carousel';  // Orientation

@Component({
  selector: 'my-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  // public slidesList = new Array<never>(3);
  public slidesList = [
    '/assets/images/calf.jpg',
    '/assets/images/peacock.jpg',
    '/assets/images/zebra.jpg'
  ];
  public showContent = false;

  public timings = '250ms ease-in';
  public autoplay = true;
  public interval = 5000;
  public loop = true;
  public hideArrows = false;
  public hideIndicators = false;
  public color: ThemePalette = 'accent';
  public maxWidth = 'auto';
  public proportion = 25;
  public slides = this.slidesList.length;
  public overlayColor = '#00000040';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = false;
  // public orientation: Orientation = 'ltr';
  public log: string[] = [];

  @ViewChildren(MatCarouselSlideComponent) public carouselSlides: QueryList<
    MatCarouselSlideComponent
  >;

  constructor(
  ) {}

  public resetSlides(): void {
    this.carouselSlides.forEach(item => (item.disabled = false));
  }

  public onChange(index: number) {
    this.log.push(`MatCarousel#change emitted with index ${index}`);
  }
}
