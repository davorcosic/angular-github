import { Component, OnInit } from '@angular/core';

import { IssueListService } from '../issue-list.service';
import { IssueListView } from '../issue-list-view.model';

@Component({
  selector: 'app-issue-list-view',
  templateUrl: './issue-list-view.component.html',
  styleUrls: ['./issue-list-view.component.scss']
})
export class IssueListViewComponent implements OnInit {
  issues: IssueListView[];

  constructor(private issueListService: IssueListService) {}

  ngOnInit() {
    this.issueListService.getAll().subscribe((issues: IssueListView[]) => {
      this.issues = issues;
    });
  }
}
