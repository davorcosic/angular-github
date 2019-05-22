import { Injectable, Inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AbstractEvent } from './event/model/abstract-event.model';
import { IssueTimelineService } from './issue-timeline.service';
import { EventName } from './event/model/event-name.enum';

@Injectable()
export class TimelineResolverService implements Resolve<AbstractEvent[]> {
  constructor(
    private router: Router,
    private issueTimelineService: IssueTimelineService,
    @Inject(EventName) private excludedEventsFromView: EventName[]
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<AbstractEvent[]> {
    const issueId: string = route.queryParamMap.get('issue_id');

    if (!issueId || isNaN(+issueId)) {
      this.router.navigateByUrl('/404');
    }

    return this.issueTimelineService.get(+issueId).pipe(map(issueEvents => this.filterExcludedEvents(issueEvents)));
  }

  /**
   * If no events to exclude are provided, issue events are returned as is.
   * If events to exclude are provided, issue events that are not included in the array of event names are returned.
   *
   * @param issueEvents issue events fetched from API
   *
   */
  private filterExcludedEvents(issueEvents: AbstractEvent[]) {
    if (!(this.excludedEventsFromView && this.excludedEventsFromView.length)) {
      return issueEvents;
    }

    return issueEvents.filter((issueEvent: AbstractEvent) => {
      return !this.excludedEventsFromView.includes(issueEvent.eventName);
    });
  }
}
