import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  currentPage: number;

  constructor(private issueListService: IssueListService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadIssues(this.getPageNumber());
  }

  loadIssues(pageNumber: number) {
    this.currentPage = pageNumber;
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

  private getPageNumber(): number {
    const pageNumber: string = this.route.snapshot.queryParamMap.get('page');

    if (!pageNumber || isNaN(+pageNumber)) {
      return 1;
    }

    return +pageNumber;
  }
}
