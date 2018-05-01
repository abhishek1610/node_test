import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core'

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  lat: number = 51.678418;
  lng: number = 7.809007;

}
