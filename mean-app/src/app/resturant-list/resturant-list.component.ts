import { Component, OnInit } from '@angular/core';
import { Resturant } from '../resturant';

@Component({
  selector: 'app-resturant-list',
  template: `
  <ul>
  <li *ngFor="let person of people">
   {{person.name}}
  </li>
</ul>

  `,
  styleUrls: ['./resturant-list.component.css']
})
export class ResturantListComponent implements OnInit {

  people: Resturant[] = [
    {name: 'Luke Skywalker'},
    {name: 'Darth Vader'},
    {name: 'Han Solo'},
  ];

  constructor(){}
  ngOnInit(){}


}
