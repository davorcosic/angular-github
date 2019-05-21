import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IssueTimelineService } from '../issue-timeline.service';

@Component({
  selector: 'app-issue-timeline-view',
  templateUrl: './issue-timeline-view.component.html',
  styleUrls: ['./issue-timeline-view.component.scss']
})
export class IssueTimelineViewComponent implements OnInit {
  constructor(private route: ActivatedRoute, private issueTimelineService: IssueTimelineService) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParamMap => this.getIssueTimeline(+queryParamMap.get('issue_id')));
  }

  private getIssueTimeline(issueId: number) {
    this.issueTimelineService.get(issueId).subscribe(issueEvents => console.log(issueEvents));
  }
}
