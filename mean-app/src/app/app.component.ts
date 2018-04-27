import { Component } from '@angular/core';
import { ResturantService } from './resturant-list/resturant.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ResturantService]
})
export class AppComponent {
  title = 'app works! great';
}
