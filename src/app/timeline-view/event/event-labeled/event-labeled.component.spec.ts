import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLabeledComponent } from './event-labeled.component';

describe('EventLabeledComponent', () => {
  let component: EventLabeledComponent;
  let fixture: ComponentFixture<EventLabeledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventLabeledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLabeledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
