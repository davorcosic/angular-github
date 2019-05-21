import { EventCommented } from './model/event-commented.model';
import { EventLabeled } from './model/event-labeled.model';
import { AbstractEvent } from './model/abstract-event.model';

export const eventProviders = [
  { provide: AbstractEvent, useClass: EventCommented, multi: true },
  { provide: AbstractEvent, useClass: EventLabeled, multi: true }
];
