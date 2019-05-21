import { AbstractEvent } from './abstract-event.model';
import { EventName } from './event-name.enum';
import { EventCommentedComponent } from '../event-commented/event-commented.component';

export class EventCommented extends AbstractEvent {
  constructor() {
    super();
    this.eventName = EventName.Commented;
    this.component = EventCommentedComponent;
  }
}
