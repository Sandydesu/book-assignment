import { Injectable } from '@angular/core';

import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  loadingBooks,
  booksApiSuccess,
  booksApiFailure,
} from '@store/actions/book.actions';

import { BookService } from '@core/services/book.service';
import { SpinnerService } from '@core/services/spinner.service';

import { Book } from '@core/models/books.model';

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadingBooks),
      mergeMap(({ bookName }) => {
        this.spinnerService.showSpinner.next(true);
        return this.bookService.getBooksByName(bookName).pipe(
          map((booksResponse: any) => {
            const books: Book[] = booksResponse.items || [];
            this.spinnerService.showSpinner.next(false);
            return booksApiSuccess({ books: books, searchKey: bookName });
          }),
          catchError((err) => {
            this.spinnerService.showSpinner.next(false);
            return of(
              booksApiFailure({ errorMsg: err.message, searchKey: bookName })
            );
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private bookService: BookService,
    private spinnerService: SpinnerService
  ) {}
}
