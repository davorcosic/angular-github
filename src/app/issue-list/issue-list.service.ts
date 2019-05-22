import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IssueListView } from './issue-list-view.model';
import { GitIssue } from './git-issue.model';
import { environment } from '../../environments/environment';

@Injectable()
export class IssueListService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<IssueListView[]> {
    return this.httpClient.get<GitIssue[]>(environment.baseUrl).pipe(map((issues: GitIssue[]) => this.mapToIssueListViewItems(issues)));
  }

  private mapToIssueListViewItems(gitIssues: GitIssue[]): IssueListView[] {
    return Array.from(gitIssues, (gitIssue: GitIssue) => {
      return { id: gitIssue.number, title: gitIssue.title, createdAt: gitIssue.created_at, author: gitIssue.user.login };
    });
  }
}
