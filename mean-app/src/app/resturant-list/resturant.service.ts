import { Injectable } from '@angular/core';
import { Resturant } from '../resturant';

@Injectable()
export class ResturantService {

  constructor() { }

  getAll() : Resturant[]  {
   return [ {name: 'Luke Skywalker'},
    {name: 'Darth Vader'},
    {name: 'Han Solo'} ]
};

}
