import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaysAgoPipe } from './pipe/days-ago.pipe';

@NgModule({
  declarations: [DaysAgoPipe],
  imports: [CommonModule],
  exports: [DaysAgoPipe]
})
export class SharedModule {}
