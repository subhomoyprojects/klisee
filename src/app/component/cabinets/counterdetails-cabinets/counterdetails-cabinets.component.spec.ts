import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterdetailsCabinetsComponent } from './counterdetails-cabinets.component';

describe('CounterdetailsCabinetsComponent', () => {
  let component: CounterdetailsCabinetsComponent;
  let fixture: ComponentFixture<CounterdetailsCabinetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterdetailsCabinetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterdetailsCabinetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
