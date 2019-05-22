import { Type } from '@angular/core';

import { EventName } from './event-name.enum';
import { EventProperties } from './event-properties.model';

export abstract class AbstractEvent {
  eventName: EventName;
  component: Type<any>;
  properties: EventProperties;
}
