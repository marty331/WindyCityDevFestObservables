import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorsViewComponent } from './behaviors-view.component';

describe('BehaviorsViewComponent', () => {
  let component: BehaviorsViewComponent;
  let fixture: ComponentFixture<BehaviorsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
