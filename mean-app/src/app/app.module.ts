import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { HttpClientModule } from '@angular/http';
import { ResturantListComponent } from './resturant-list/resturant-list.component';

import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { ResturantService } from './resturant-list/resturant.service';

@NgModule({
  declarations: [
    AppComponent,
    ResturantListComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDM-oi8L0mSTfAM26PvjButvGQg9KHTH88'
    })
  ],
  providers: [ResturantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
