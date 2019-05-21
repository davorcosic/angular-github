import { Component, OnInit } from '@angular/core';

import { EventProperties } from '../model/event-properties.model';

@Component({
  selector: 'app-event-commented',
  templateUrl: './event-commented.component.html',
  styleUrls: ['./event-commented.component.scss']
})
export class EventCommentedComponent implements OnInit {
  constructor(public eventProperties: EventProperties) {}

  ngOnInit() {}
}
