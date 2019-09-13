import { Component } from '@angular/core';

@Component({
  selector: 'my-group-rates',
  templateUrl: './group-rates.component.html',
})
export class GroupRatesComponent {
  guests: string;
  price: string;
  // displayedColumns: string[] = ['guests', 'price'];
  // dataSource = ELEMENT_DATA;
}

const ELEMENT_DATA: GroupRatesComponent[] = [
  {guests: '0 - 49', price: '$350'},
  {guests: '50 - 100', price: '$500'},
  {guests: '100 - 150', price: '$800'},
  {guests: '151 - 200', price: '$1,050'},
  {guests: '201 - 250', price: '$1,250'},
  {guests: '251 - 300', price: '$1,500'},
  {guests: '300+', price: 'Contact the main office'},
];
