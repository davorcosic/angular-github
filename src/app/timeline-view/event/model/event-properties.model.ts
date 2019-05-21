import { EventName } from './event-name.enum';

export interface EventProperties {
  actor: EventActor;
  event: EventName;
  createdAt: Date;
}

interface EventActor {
  login: string;
}
