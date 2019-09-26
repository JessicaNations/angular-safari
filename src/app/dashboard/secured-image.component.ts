import { Component, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-secured-image',
  template: `
    <img src="dataUrl$|async"/>
  `
})
export class SecuredImageComponent implements OnChanges  {
  @Input() private src: string;
  private src$ = new BehaviorSubject(this.src);
//   dataUrl$ = this.src$.pipe(switchMap(url => this.loadImage(url)));


//   constructor(private httpClient: HttpClient, private domSanitizer: DomSanitizer) {
//   }

//   ngOnChanges(): void {
//       this.src$.next(this.src);
//     }

//   private loadImage(url: string): Observable<any> {
//     return this.httpClient
//       .get(url, {responseType: 'blob'})
//       .pipe(map(e => this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(e))));
//   }
// }
ngOnChanges(): void {
  this.src$.next(this.src);
}

// this stream will contain the actual url that our img tag will load
// everytime the src changes, the previous call would be canceled and the
// new resource would be loaded
dataUrl$ = this.src$.pipe(switchMap(url => this.loadImage(url)))

// we need HttpClient to load the image and DomSanitizer to trust the url
constructor(private httpClient: HttpClient, private domSanitizer: DomSanitizer) {
}

private loadImage(url: string): Observable<any> {
  return this.httpClient
    .get(url, {responseType: 'blob'})
    .pipe(map(e => this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(e))))
}
}
