/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResturantService } from './resturant.service';

describe('ResturantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResturantService]
    });
  });

  it('should ...', inject([ResturantService], (service: ResturantService) => {
    expect(service).toBeTruthy();
  }));
});
