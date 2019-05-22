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

  issueListPage: number;

  constructor(private route: ActivatedRoute, private injector: Injector) {}

  ngOnInit() {
    this.issueEvents = this.route.snapshot.data['issueEvents'];
    this.issueListPage = +this.route.snapshot.queryParamMap.get('page');
  }

  createEventPropertiesInjector(eventProperties: EventProperties): Injector {
    return Injector.create({
      providers: [{ provide: EventProperties, useValue: eventProperties }],
      parent: this.injector
    });
  }
}
