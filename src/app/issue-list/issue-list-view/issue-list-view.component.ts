import { Component, OnInit } from '@angular/core';

import { IssueListService } from '../issue-list.service';
import { IssueListView } from '../issue-list-view.model';
import { PagingResults } from 'src/app/shared/model/paging-results.model';

@Component({
  selector: 'app-issue-list-view',
  templateUrl: './issue-list-view.component.html',
  styleUrls: ['./issue-list-view.component.scss']
})
export class IssueListViewComponent implements OnInit {
  issues: IssueListView[];

  issuePaginationLinks: string;

  loading: boolean;

  constructor(private issueListService: IssueListService) {}

  ngOnInit() {
    this.loadIssues(1);
  }

  loadIssues(pageNumber: number) {
    this.loading = true;

    this.issueListService.getPage(pageNumber).subscribe(
      (issuesPagingResults: PagingResults<IssueListView>) => {
        this.issues = issuesPagingResults.results;
        this.issuePaginationLinks = issuesPagingResults.linkHeader;
        this.loading = false;
      },
      error => {
        this.loading = false;
        throw error;
      }
    );
  }
}
