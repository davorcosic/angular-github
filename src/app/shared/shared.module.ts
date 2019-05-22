import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaysAgoPipe } from './pipe/days-ago.pipe';
import { TimelineItemComponent } from './component/timeline-item/timeline-item.component';
import { PaginatorComponent } from './component/paginator/paginator.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DaysAgoPipe, TimelineItemComponent, PaginatorComponent],
  exports: [DaysAgoPipe, TimelineItemComponent, PaginatorComponent]
})
export class SharedModule {}
