import { Injectable } from '@angular/core';
import { Resturant } from '../resturant';
import { Http, Response,Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ResturantService {



 /*getAll() : Resturant[]  {
   return [ {name: 'Luke Skywalker'},
    {name: 'Darth Vader'},
    {name: 'Han Solo'} ]
}; */

private baseUrl: string = 'http://localhost:3000/resturants';
private baseUrl1: string = 'http://localhost:3000/loc';
  constructor(private http : Http){
  }

 getAll(): Observable<Resturant[]>{
    let people$ = this.http
      .get(this.baseUrl)
      .map((response: Response) => {
        return <Resturant[]>response.json();
    });
    return people$;
 }
 
 getAll_upd(lat: string, log: string): Observable<Resturant[]>{
  let myHeaders = new Headers();
	myHeaders.set('Content-Type', 'application/json');   
	let myParams = new URLSearchParams();
	myParams.set('lat', lat);
  myParams.set('log', log);		
  console.log (lat +'   ' + log)
        let options = new RequestOptions({ headers: myHeaders, params: myParams });
  let people$ = this.http
    .get(this.baseUrl1+'/'+lat+'/'+log)
    .map((response: Response) => {
      //console.log(response.json()) ;
      return <Resturant[]>response.json();

  });
  return people$;
}
     
  }
  
  function mapPersons(response:Response): Resturant[] {
    // The response of the API has a results
    // property with the actual results
    return response.json().results.map(toPerson) ;
 }
 
 function toPerson(r:any): Resturant{
   let person = <Resturant>({
     name: r.name
     
   });
   console.log('Parsed person:', person);
   return person;
 }



