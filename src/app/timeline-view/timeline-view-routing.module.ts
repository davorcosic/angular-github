import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueTimelineViewComponent } from './issue-timeline-view/issue-timeline-view.component';

const routes: Routes = [
  {
    path: 'timeline',
    component: IssueTimelineViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimelineViewRoutingModule {}
