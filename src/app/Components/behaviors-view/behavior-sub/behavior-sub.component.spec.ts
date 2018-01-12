import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubComponent } from './behavior-sub.component';

describe('BehaviorSubComponent', () => {
  let component: BehaviorSubComponent;
  let fixture: ComponentFixture<BehaviorSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
