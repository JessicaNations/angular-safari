import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'my-admission-navbar',
  templateUrl: './admission-navbar.component.html',
})
export class AdmissionNavbarComponent implements OnInit {
  currentTab: number;

  constructor() { }

  ngOnInit() { }

  onLinkClick(event: MatTabChangeEvent) {
    this.currentTab = event.index;
  }
}
