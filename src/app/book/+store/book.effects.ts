import { Injectable } from '@angular/core';

import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  loadingBooks,
  booksApiSuccess,
  booksApiFailure,
} from '@book/+store/book.actions';

import { BookService } from '@book/services/book.service';

import { Book } from '../common/models/books.model';

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadingBooks),
      mergeMap(({ bookName }) =>
        this.bookService.getBooksByName(bookName).pipe(
          map((booksResponse: any) => {
            const books: Book[] = booksResponse.items || [];
            return booksApiSuccess({ books: books });
          }),
          catchError((err) => of(booksApiFailure({ errorMsg: err.message })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private bookService: BookService) {}
}
