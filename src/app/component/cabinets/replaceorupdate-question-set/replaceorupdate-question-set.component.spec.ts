import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceorupdateQuestionSetComponent } from './replaceorupdate-question-set.component';

describe('ReplaceorupdateQuestionSetComponent', () => {
  let component: ReplaceorupdateQuestionSetComponent;
  let fixture: ComponentFixture<ReplaceorupdateQuestionSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaceorupdateQuestionSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceorupdateQuestionSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
