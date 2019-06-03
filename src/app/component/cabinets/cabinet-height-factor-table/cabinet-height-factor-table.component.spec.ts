import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetHeightFactorTableComponent } from './cabinet-height-factor-table.component';

describe('CabinetHeightFactorTableComponent', () => {
  let component: CabinetHeightFactorTableComponent;
  let fixture: ComponentFixture<CabinetHeightFactorTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinetHeightFactorTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetHeightFactorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
