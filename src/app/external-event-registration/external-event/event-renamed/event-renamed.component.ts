import { Component, OnInit } from '@angular/core';

import { EventProperties } from '../../../timeline-view/event/model/event-properties.model';

@Component({
  selector: 'app-event-renamed',
  templateUrl: './event-renamed.component.html',
  styleUrls: ['./event-renamed.component.scss']
})
export class EventRenamedComponent implements OnInit {
  constructor(public eventProperties: EventProperties) {}

  ngOnInit() {}
}
