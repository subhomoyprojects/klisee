import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResemblesCurrentLayoutComponent } from './resembles-current-layout.component';

describe('ResemblesCurrentLayoutComponent', () => {
  let component: ResemblesCurrentLayoutComponent;
  let fixture: ComponentFixture<ResemblesCurrentLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResemblesCurrentLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResemblesCurrentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
