import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydocumentComponent } from './mydocument.component';

describe('MydocumentComponent', () => {
  let component: MydocumentComponent;
  let fixture: ComponentFixture<MydocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
