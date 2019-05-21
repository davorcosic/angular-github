import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRenamedComponent } from './event-renamed.component';

describe('EventRenamedComponent', () => {
  let component: EventRenamedComponent;
  let fixture: ComponentFixture<EventRenamedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventRenamedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRenamedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
