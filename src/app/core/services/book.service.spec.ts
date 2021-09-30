import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';

import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;
  const booksList = require('src/assets/books.json');
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BookService,
        {
          provide: HttpClient,
          useValue: httpClientSpy,
        },
      ],
    });
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return books', fakeAsync((done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(booksList));
    service.getBooksByName('Angular').subscribe((books) => {
      expect(books).toEqual(booksList);
    });
  }));
});
