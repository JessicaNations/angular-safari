import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-visit-navbar',
  templateUrl: './visit-navbar.component.html',
})
export class VisitNavbarComponent implements OnInit {
  currentTab: number;

  constructor() { }

  ngOnInit() { }

  onLinkClick(event: MatTabChangeEvent) {
    this.currentTab = event.index;
  }
}
