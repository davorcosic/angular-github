import { AbstractEvent } from '../timeline-view/event/model/abstract-event.model';
import { EventRenamed } from './external-event/model/event-renamed.model';

export const externalEventProviders = [{ provide: AbstractEvent, useClass: EventRenamed, multi: true }];
