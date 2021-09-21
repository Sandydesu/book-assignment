import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const params = request.params;
    params.set('key', environment.googleApiKey);

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    const req = request.clone({
      headers: headers,
      params: params,
    });
    return next.handle(req);
  }
}
