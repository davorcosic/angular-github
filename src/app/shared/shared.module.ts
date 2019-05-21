import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaysAgoPipe } from './pipe/days-ago.pipe';
import { TimelineItemComponent } from './component/timeline-item/timeline-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DaysAgoPipe, TimelineItemComponent],
  exports: [DaysAgoPipe, TimelineItemComponent]
})
export class SharedModule {}
