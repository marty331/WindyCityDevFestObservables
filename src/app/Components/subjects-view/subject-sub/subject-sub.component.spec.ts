import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSubComponent } from './subject-sub.component';

describe('SubjectSubComponent', () => {
  let component: SubjectSubComponent;
  let fixture: ComponentFixture<SubjectSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
