import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'my-about-navbar',
  templateUrl: './about-navbar.component.html',
})
export class AboutNavbarComponent implements OnInit {
  currentTab: number;

  constructor() { }

  ngOnInit() { }

  onLinkClick(event: MatTabChangeEvent) {
    this.currentTab = event.index;
  }
}
