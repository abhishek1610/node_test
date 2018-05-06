import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { ResturantService } from '../resturant-list/resturant.service';
import { Resturant } from '../resturant';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps'; 

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  private peopleService : ResturantService ;
  markers : Resturant [];
  marks : marker[];

  @ViewChild("search")
  public searchElementRef: ElementRef;
  markers1: marker1[] = [
	  {
		  lat: 28.6003150449,
		  log: 77.2271443158,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 28.6080761000,
		  log: 77.22,
		  label: 'B',
		  draggable: false
    } ]
    
  
    
  constructor( peopleService: ResturantService, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {
    this.peopleService = peopleService;
    
    }

    getPosts(): void {
      this.peopleService.getAll()
          .subscribe(
              resultArray => {this.markers = resultArray,
                console.log (this.markers ) }

          )
  } 

pushMarkers() : void{
  this.markers.forEach(element => {
    this.marks.push({
    lat:Number(element.lat),
    lng:Number (element.log),
      draggable:false
    })
    console.log("pushed"+element.lat+","+element.log);
    });
  }
  
  private convertStringToNumber(value: string): number {
    return +value;
}

public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  
  public formatted_address: string;

  ngOnInit() {
     this.getPosts();
     this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.formatted_address = place.formatted_address;
          //this.zoom = 14;
          console.log(this.formatted_address);
          console.log(this.latitude);
          console.log(this.longitude);
          console.log(this.zoom);
          //set latitude, longitude and zoom
          
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 14;
      });
    }
  }

     //this.pushMarkers();
  }
  /*zoom : 8;
  lat: number = 28.60;
  lng: number = 77.22; */

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  }

interface marker1 {
  lat: number;
  log: number;
  label?: string;
  draggable: boolean;
}
