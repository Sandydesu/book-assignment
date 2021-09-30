import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BOOK_URL } from '@core/constants/api.constants';
import { BookService } from '@core/services';

import { AuthInterceptor } from './auth.interceptor';
import { environment } from '@env/environment';

describe('AuthInterceptor', () => {
  let service: BookService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BookService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
      ],
    });

    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should add an Authorization header', () => {
    service.getBooksByName('a').subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(
      `${BOOK_URL}?q=a&key=${environment.googleApiKey}`
    );

    expect(httpRequest.request.params.has('key')).toEqual(true);
  });
});
