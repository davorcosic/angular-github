import { Component, OnInit, Injector, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IssueTimelineService } from '../issue-timeline.service';
import { AbstractEvent } from '../event/model/abstract-event.model';
import { EventProperties } from '../event/model/event-properties.model';
import { EventName } from '../event/model/event-name.enum';

@Component({
  selector: 'app-issue-timeline-view',
  templateUrl: './issue-timeline-view.component.html',
  styleUrls: ['./issue-timeline-view.component.scss']
})
export class IssueTimelineViewComponent implements OnInit {
  issueEvents: AbstractEvent[];

  constructor(
    private route: ActivatedRoute,
    private issueTimelineService: IssueTimelineService,
    private injector: Injector,
    @Inject(EventName) private excludedEventsFromView: EventName[]
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParamMap => this.getIssueEvents(+queryParamMap.get('issue_id')));
  }

  createEventPropertiesInjector(eventProperties: EventProperties): Injector {
    return Injector.create({
      providers: [{ provide: EventProperties, useValue: eventProperties }],
      parent: this.injector
    });
  }

  private getIssueEvents(issueId: number) {
    this.issueTimelineService.get(issueId).subscribe((issueEvents: AbstractEvent[]) => {
      this.issueEvents = this.filterExcludedEvents(issueEvents);
    });
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
