import { AbstractEvent } from '../../../timeline-view/event/model/abstract-event.model';
import { EventName } from '../../../timeline-view/event/model/event-name.enum';
import { EventRenamedComponent } from '../event-renamed/event-renamed.component';

export class EventRenamed extends AbstractEvent {
  constructor() {
    super();
    this.eventName = EventName.Renamed;
    this.component = EventRenamedComponent;
  }
}
