import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCommentedComponent } from './event-commented.component';

describe('EventCommentedComponent', () => {
  let component: EventCommentedComponent;
  let fixture: ComponentFixture<EventCommentedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCommentedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCommentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
