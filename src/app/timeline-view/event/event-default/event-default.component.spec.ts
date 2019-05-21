import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDefaultComponent } from './event-default.component';

describe('EventDefaultComponent', () => {
  let component: EventDefaultComponent;
  let fixture: ComponentFixture<EventDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
