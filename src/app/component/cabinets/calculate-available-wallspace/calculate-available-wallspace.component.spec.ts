import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateAvailableWallspaceComponent } from './calculate-available-wallspace.component';

describe('CalculateAvailableWallspaceComponent', () => {
  let component: CalculateAvailableWallspaceComponent;
  let fixture: ComponentFixture<CalculateAvailableWallspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateAvailableWallspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateAvailableWallspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
