import { Component, OnInit } from '@angular/core';

import { EventProperties } from '../model/event-properties.model';

@Component({
  selector: 'app-event-labeled',
  templateUrl: './event-labeled.component.html',
  styleUrls: ['./event-labeled.component.scss']
})
export class EventLabeledComponent implements OnInit {
  constructor(public eventProperties: EventProperties) {}

  ngOnInit() {}
}
