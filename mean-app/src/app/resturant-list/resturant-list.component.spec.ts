/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResturantListComponent } from './resturant-list.component';

describe('ResturantListComponent', () => {
  let component: ResturantListComponent;
  let fixture: ComponentFixture<ResturantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
