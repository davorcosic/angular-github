import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IssueTimelineViewComponent } from './issue-timeline-view/issue-timeline-view.component';
import { TimelineResolverService } from './timeline-resolver.service';

const routes: Routes = [
  {
    path: 'timeline',
    component: IssueTimelineViewComponent,
    resolve: { issueEvents: TimelineResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimelineViewRoutingModule {}
