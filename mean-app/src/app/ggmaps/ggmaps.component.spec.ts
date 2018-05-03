/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GgmapsComponent } from './ggmaps.component';

describe('GgmapsComponent', () => {
  let component: GgmapsComponent;
  let fixture: ComponentFixture<GgmapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GgmapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GgmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
