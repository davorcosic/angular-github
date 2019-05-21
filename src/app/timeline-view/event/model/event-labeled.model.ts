import { AbstractEvent } from './abstract-event.model';
import { EventName } from './event-name.enum';
import { EventLabeledComponent } from '../event-labeled/event-labeled.component';

export class EventLabeled extends AbstractEvent {
  constructor() {
    super();
    this.eventName = EventName.Labeled;
    this.component = EventLabeledComponent;
  }
}
