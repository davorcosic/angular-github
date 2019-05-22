import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = this.addToken(req);

    return next.handle(req);
  }

  /**
   * Adds GitHub personal access token to request's authorization header.
   */
  private addToken(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: `token ${environment.accessToken}`
      }
    });
  }
}
