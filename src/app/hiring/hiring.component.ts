import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
})
export class HiringComponent {
  constructor(
    private router: Router) { }

  goJobApp(): void {
    const link = ['/job-app'];
    this.router.navigate(link);
  }
}




