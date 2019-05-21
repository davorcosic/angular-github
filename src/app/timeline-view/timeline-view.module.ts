import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineViewRoutingModule } from './timeline-view-routing.module';
import { IssueTimelineViewComponent } from './issue-timeline-view/issue-timeline-view.component';
import { IssueTimelineService } from './issue-timeline.service';

@NgModule({
  declarations: [IssueTimelineViewComponent],
  providers: [IssueTimelineService],
  imports: [CommonModule, TimelineViewRoutingModule]
})
export class TimelineViewModule {}
