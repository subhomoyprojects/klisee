import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlooringTypeCabinetsComponent } from './flooring-type-cabinets.component';

describe('FlooringTypeCabinetsComponent', () => {
  let component: FlooringTypeCabinetsComponent;
  let fixture: ComponentFixture<FlooringTypeCabinetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlooringTypeCabinetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlooringTypeCabinetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
