import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesViewComponent } from './observables-view.component';

describe('ObservablesViewComponent', () => {
  let component: ObservablesViewComponent;
  let fixture: ComponentFixture<ObservablesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
