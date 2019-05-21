import { Injectable, Inject, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AbstractEvent } from './event/model/abstract-event.model';
import { AbstractEventComponent } from './event/abtract-event.component';
import { EventDefaultComponent } from './event/event-default/event-default.component';
import { EventName } from './event/model/event-name.enum';
import { EventProperties } from './event/model/event-properties.model';

@Injectable()
export class IssueTimelineService {
  private apiUrl = 'github/repos/bulbtech/job-application-task-1/issues';

  private acceptType = 'application/vnd.github.mockingbird-preview';

  constructor(private httpClient: HttpClient, @Inject(AbstractEvent) private providedEvents: AbstractEvent[]) {
    console.log('Event providers:');
    console.log(providedEvents);
  }

  get(issueId: number): Observable<AbstractEvent[]> {
    return this.httpClient
      .get<EventProperties[]>(`${this.apiUrl}/${issueId}/timeline`, this.getHttpOptions(this.acceptType))
      .pipe(map((issueEvents: EventProperties[]) => this.mapToIssueEventItems(issueEvents)));
  }

  private getHttpOptions(acceptType: string) {
    const headers = {
      Accept: acceptType
    };

    return { headers: new HttpHeaders(headers) };
  }

  private mapToIssueEventItems(gitIssueEvents: EventProperties[]): AbstractEvent[] {
    return Array.from(gitIssueEvents, gitIssueEvent => {
      return {
        eventName: gitIssueEvent.event as EventName,
        component: this.getEventComponent(gitIssueEvent.event),
        properties: gitIssueEvent
      };
    });
  }

  private getEventComponent(eventName: string): Type<AbstractEventComponent> {
    const event: AbstractEvent = this.providedEvents.find((providedEvent: AbstractEvent) => providedEvent.eventName === eventName);

    if (event) {
      return event.component;
    }

    return EventDefaultComponent;
  }
}
