import { Component, OnInit, Input } from '@angular/core';
import { EventProperties } from '../../../timeline-view/event/model/event-properties.model';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  @Input()
  eventProperties: EventProperties;

  @Input()
  iconClass: string;

  constructor() {}

  ngOnInit() {}
}
