import { Component, OnInit } from '@angular/core';
import { Resturant } from '../resturant';
import { ResturantService } from '../resturant-list/resturant.service';

@Component({
  selector: 'app-resturant-list',
  template: `
  <ul>
  <li *ngFor="let resultArray of people">
   {{person.name}}
  </li>
</ul>
`,
  styleUrls: ['./resturant-list.component.css']
})
export class ResturantListComponent implements OnInit  {

  private peopleService : ResturantService ;
  people: Resturant[] = [ ]
    
  constructor( peopleService: ResturantService) {
    }

    getPosts(): void {
      this.peopleService.getAll()
          .subscribe(
              resultArray => this.people = resultArray,
              error => console.log("Error :: " + error)
          )
  }


  ngOnInit() { 
}
 


}
