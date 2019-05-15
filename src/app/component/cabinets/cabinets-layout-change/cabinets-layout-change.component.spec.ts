import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetsLayoutChangeComponent } from './cabinets-layout-change.component';

describe('CabinetsLayoutChangeComponent', () => {
  let component: CabinetsLayoutChangeComponent;
  let fixture: ComponentFixture<CabinetsLayoutChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinetsLayoutChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetsLayoutChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
