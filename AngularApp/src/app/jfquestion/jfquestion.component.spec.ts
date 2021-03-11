import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JFQuestionComponent } from './jfquestion.component';

describe('JFQuestionComponent', () => {
  let component: JFQuestionComponent;
  let fixture: ComponentFixture<JFQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JFQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JFQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
