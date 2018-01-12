import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsViewComponent } from './subjects-view.component';

describe('SubjectsViewComponent', () => {
  let component: SubjectsViewComponent;
  let fixture: ComponentFixture<SubjectsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
