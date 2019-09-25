import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  HostListener
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgImageSliderService } from './../ng-image-slider.service';

const youtubeRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/,
  validFileExtensions = ['jpeg', 'jpg', 'gif', 'png'],
  validVideoExtensions = ['mp4'];

@Component({
  selector: 'app-slider-lightbox',
  templateUrl: './slider-lightbox.component.html'
})
export class SliderLightboxComponent implements OnInit, AfterViewInit, OnDestroy {
  YOUTUBE = 'youtube';
  IMAGE = 'image';
  VIDEO = 'video';
  fileUrl: SafeResourceUrl = '';
  fileExtension = '';
  type = this.IMAGE;

  // @Inputs
  @Input() videoAutoPlay = false;
  @Input()
  set currentImageSrc(url) {
      if (url && typeof (url) === 'string') {
          this.fileExtension = url.replace(/^.*\./, '');
          if (this.imageSliderService.base64FileExtension(url)
          && (validFileExtensions.indexOf(this.imageSliderService.base64FileExtension(url).toLowerCase()) > -1
          || validVideoExtensions.indexOf(this.imageSliderService.base64FileExtension(url).toLowerCase()) > -1)) {
              this.fileExtension = this.imageSliderService.base64FileExtension(url);
          }
          // verify for youtube url
          const match = url.match(youtubeRegExp);
          if (match && match[2].length === 11) {
              this.type = '';
              setTimeout(() => {
                  this.type = this.YOUTUBE;
                  url = `${'//www.youtube.com/embed/'}${match[2]}${this.videoAutoPlay ? '?autoplay=1' : '?autoplay=0'}`;
                  this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
              }, 50);
          } else if (this.fileExtension && validFileExtensions.indexOf(this.fileExtension.toLowerCase()) > -1) {
              this.type = this.IMAGE;
              this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          } else if (this.fileExtension && validVideoExtensions.indexOf(this.fileExtension.toLowerCase()) > -1) {
              this.type = '';
              setTimeout(() => {
                  this.type = this.VIDEO;
                  this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
              }, 50);
          }
      }
  }
  @Input() currentImageTitle;
  @Input() showImage;
  @Input() lightboxPrevDisable;
  @Input() lightboxNextDisable;
  @Input() direction = 'ltr';

  // @Output
  @Output() close = new EventEmitter<any>();
  @Output() prevImage = new EventEmitter<any>();
  @Output() nextImage = new EventEmitter<any>();

  /* @ViewChild('lightboxDiv') lightboxDiv;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
      const widthAspectRatio = 16 / 9;
      const heightAspectRatio = 9 / 16;
      console.log('this.lightboxDiv.nativeElement.offsetWidth', this.lightboxDiv.nativeElement.offsetWidth);
      console.log('this.lightboxDiv.nativeElement.offsetHeight', this.lightboxDiv.nativeElement.offsetHeight);
      if (this.lightboxDiv.nativeElement.offsetWidth && this.lightboxDiv.nativeElement.offsetHeight) {
          const calculatedWidth = 480 * (this.lightboxDiv.nativeElement.offsetWidth / this.lightboxDiv.nativeElement.offsetHeight);
          const calculatedHeight = 385 * (this.lightboxDiv.nativeElement.offsetHeight / this.lightboxDiv.nativeElement.offsetWidth);
          console.log('calculated widht and height =>', calculatedWidth, calculatedHeight);

      }
  } */

  constructor(private sanitizer: DomSanitizer, public imageSliderService: NgImageSliderService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
     this.resetState();
  }

  closeLightbox() {
      this.close.emit();
  }

  prevImageLightbox() {
      this.prevImage.emit();
  }

  nextImageLightbox() {
      this.nextImage.emit();
  }

  resetState() {
      this.fileUrl = '';
      this.fileExtension = '';
      this.type = this.IMAGE;
  }
}
