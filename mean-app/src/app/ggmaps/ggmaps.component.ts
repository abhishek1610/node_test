import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ggmaps',
  templateUrl: '../ggmaps/ggmaps.component.html',
  styleUrls: ['../ggmaps/ggmaps.component.css']
})
export class GgmapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  lat: number = -32.9477132;
  lng: number = -60.630465800000025;
}
