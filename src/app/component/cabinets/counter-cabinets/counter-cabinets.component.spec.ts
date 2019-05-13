import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCabinetsComponent } from './counter-cabinets.component';

describe('CounterCabinetsComponent', () => {
  let component: CounterCabinetsComponent;
  let fixture: ComponentFixture<CounterCabinetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterCabinetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterCabinetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
