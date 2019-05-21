import { Component, OnInit } from '@angular/core';

import { EventProperties } from '../model/event-properties.model';

@Component({
  selector: 'app-event-default',
  templateUrl: './event-default.component.html',
  styleUrls: ['./event-default.component.scss']
})
export class EventDefaultComponent implements OnInit {
  constructor(public eventProperties: EventProperties) {}

  ngOnInit() {}
}
