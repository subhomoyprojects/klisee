import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceOrUpdateAppliancesComponent } from './replace-or-update-appliances.component';

describe('ReplaceOrUpdateAppliancesComponent', () => {
  let component: ReplaceOrUpdateAppliancesComponent;
  let fixture: ComponentFixture<ReplaceOrUpdateAppliancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaceOrUpdateAppliancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceOrUpdateAppliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
