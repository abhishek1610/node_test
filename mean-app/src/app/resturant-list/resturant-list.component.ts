import { Component, OnInit } from '@angular/core';
import { Resturant } from '../resturant';
import { ResturantService } from '../resturant-list/resturant.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-resturant-list',
  template: `<div>
  <form #bookByIdForm= "ngForm" (ngSubmit)="getPosts_upd(lat,log)">
	 <div> 
	  Enter lat Id: <input name="lat" ngModel required #lat="ngModel">
   </div> 
   <div> 
   Enter log Id: <input name="log" ngModel required #log="ngModel">
  </div> 
	 <div> <br/> 	  
	   <button [disabled]="bookByIdForm.invalid">Submit</button>
	 </div>	  
  </form>
  </div>
  <div >
  <ul>
  <li *ngFor="let peoples of people1">
   {{peoples.name}} {{peoples.id}} {{peoples.lat}} {{peoples.log}}
  </li>
</ul>
</div>
<app-maps  (locchanges)='changeinloc($event)'></app-maps>
`,
  styleUrls: ['./resturant-list.component.css']
})
export
 class ResturantListComponent implements OnInit  {
  //@Input() result:string="";  
  
  private peopleService : ResturantService ;
  people  : Resturant [ ];
  people1 : Resturant [ ];
    
  constructor( peopleService: ResturantService) {
   this.peopleService = peopleService;
    
    }

   
  /*  resultArray = [ {name: 'Luke Skywalker'},
       {name: 'Darth Vader'},
       {name: 'Han Solo'} ]*/
   
 getPosts(): void {
      this.peopleService.getAll()
          .subscribe(
              resultArray => {this.people = resultArray
               console.log (this.people ) 
            } ,
              error => console.log("Error :: " + error)
          )
  } 
  dataAvailableById= true;
  dataAvailableAfterFilter= true;
  errorMessage: String;

  getPosts_upd(lat: string, log: string) {
    this.dataAvailableAfterFilter= true;
this.people = null;
    this.peopleService.getAll_upd(lat, log)
.subscribe(
            data => {  
    if(data.length > 0) {
        this.people1 = data; 
        console.log (this.people1 )
    } else {
  this.dataAvailableAfterFilter= false; 
    }	
},
            error =>  this.errorMessage = <any>error
);    
}
lat : string;
log :string;
changeinloc(p) {
  this.lat = p.lat
  this.log =  p.log;
  console.log('in parent'+  this.lat)
  this.getPosts_upd(this.lat,this.log)
}

  ngOnInit() { 
    this.getPosts()
}
 


}
