import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostPerLinearTableComponent } from './cost-per-linear-table.component';

describe('CostPerLinearTableComponent', () => {
  let component: CostPerLinearTableComponent;
  let fixture: ComponentFixture<CostPerLinearTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostPerLinearTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostPerLinearTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
