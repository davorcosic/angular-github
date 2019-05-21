import { EventName } from './event-name.enum';

export class EventProperties {
  actor: EventActor;
  event: EventName;
  created_at: string;
  label: EventLabel;
  rename: EventRename;
  body: string;
}

interface EventActor {
  login: string;
}

interface EventLabel {
  name: string;
  color: string;
}

interface EventRename {
  from: string;
  to: string;
}
