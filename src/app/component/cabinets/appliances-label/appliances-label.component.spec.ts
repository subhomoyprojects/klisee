import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliancesLabelComponent } from './appliances-label.component';

describe('AppliancesLabelComponent', () => {
  let component: AppliancesLabelComponent;
  let fixture: ComponentFixture<AppliancesLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliancesLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliancesLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
