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
  dataUrl$ = this.src$.pipe(switchMap(url => this.loadImage(url)));


  constructor(private httpClient: HttpClient, private domSanitizer: DomSanitizer) {
  }

  ngOnChanges(): void {
      this.src$.next(this.src);
    }

  private loadImage(url: string): Observable<any> {
    return this.httpClient
      .get(url, {responseType: 'blob'})
      .pipe(map(e => this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(e))));
  }
}
