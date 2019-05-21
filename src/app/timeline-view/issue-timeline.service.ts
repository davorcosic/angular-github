import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class IssueTimelineService {
  private apiUrl = 'github/repos/bulbtech/job-application-task-1/issues';

  private acceptType = 'application/vnd.github.mockingbird-preview';

  constructor(private httpClient: HttpClient) {}

  get(issueId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/${issueId}/timeline`, this.getHttpOptions(this.acceptType));
  }

  private getHttpOptions(acceptType: string) {
    const headers = {
      Accept: acceptType
    };

    return { headers: new HttpHeaders(headers) };
  }
}
