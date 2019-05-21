import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IssueTimelineService } from '../issue-timeline.service';
import { AbstractEvent } from '../event/model/abstract-event.model';
import { EventProperties } from '../event/model/event-properties.model';

@Component({
  selector: 'app-issue-timeline-view',
  templateUrl: './issue-timeline-view.component.html',
  styleUrls: ['./issue-timeline-view.component.scss']
})
export class IssueTimelineViewComponent implements OnInit {
  issueEvents: AbstractEvent[];

  constructor(private route: ActivatedRoute, private issueTimelineService: IssueTimelineService, private injector: Injector) {}

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
    this.issueTimelineService.get(issueId).subscribe(issueEvents => {
      console.log(issueEvents);
      this.issueEvents = issueEvents;
    });
  }
}
