import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorShowComponent } from './behavior-show.component';

describe('BehaviorShowComponent', () => {
  let component: BehaviorShowComponent;
  let fixture: ComponentFixture<BehaviorShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
