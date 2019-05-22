import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IssueListView } from './issue-list-view.model';
import { GitIssue } from './git-issue.model';
import { environment } from '../../environments/environment';
import { PagingResults } from '../shared/model/paging-results.model';

@Injectable()
export class IssueListService {
  constructor(private httpClient: HttpClient) {}

  getPage(pageNumber: number): Observable<PagingResults<IssueListView>> {
    const options = {
      params: new HttpParams().set('page', pageNumber.toString()),
      observe: 'response' as 'body'
    };

    return this.httpClient.get<GitIssue[]>(environment.baseUrl, options).pipe(
      map(response => {
        return this.mapToIssueListViewItemsPage(response);
      })
    );
  }

  private mapToIssueListViewItemsPage(response): PagingResults<IssueListView> {
    const linkHeader = response.headers.get('Link');

    const results = Array.from(response.body, (gitIssue: GitIssue) => {
      return { id: gitIssue.number, title: gitIssue.title, createdAt: gitIssue.created_at, author: gitIssue.user.login };
    });

    return {
      results,
      linkHeader
    };
  }
}
