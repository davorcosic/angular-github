import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineViewRoutingModule } from './timeline-view-routing.module';
import { IssueTimelineViewComponent } from './issue-timeline-view/issue-timeline-view.component';
import { IssueTimelineService } from './issue-timeline.service';
import { EventCommentedComponent } from './event/event-commented/event-commented.component';
import { EventLabeledComponent } from './event/event-labeled/event-labeled.component';
import { EventDefaultComponent } from './event/event-default/event-default.component';
import { eventProviders } from './event/event-providers';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, TimelineViewRoutingModule, SharedModule],
  declarations: [IssueTimelineViewComponent, EventCommentedComponent, EventLabeledComponent, EventDefaultComponent],
  entryComponents: [EventCommentedComponent, EventLabeledComponent, EventDefaultComponent],
  providers: [eventProviders, IssueTimelineService]
})
export class TimelineViewModule {}
