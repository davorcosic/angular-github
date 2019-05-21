import { Type } from '@angular/core';

import { AbstractEventComponent } from '../abtract-event.component';
import { EventName } from './event-name.enum';
import { EventProperties } from './event-properties.model';

export abstract class AbstractEvent {
  eventName: EventName;
  component: Type<AbstractEventComponent>;
  properties: EventProperties;
}
