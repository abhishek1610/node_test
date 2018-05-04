import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { ResturantService } from '../resturant-list/resturant.service';
import { Resturant } from '../resturant';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  private peopleService : ResturantService ;
  markers : Resturant [ ];

  markers1: marker1[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 28.60,
		  lng: 77.22,
		  label: 'B',
		  draggable: false
    } ]
    
  
    
  constructor( peopleService: ResturantService) {
    this.peopleService = peopleService;
    
    }

    getPosts(): void {
      this.peopleService.getAll()
          .subscribe(
              resultArray => {this.markers = resultArray,
                console.log (this.markers ) } ,
              error => console.log("Error :: " + error)
          )
  } 

  

  ngOnInit() {
     this.getPosts()
  }
  zoom : 8;
  lat: number = 28.60;
  lng: number = 77.22;

}
interface marker1 {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
