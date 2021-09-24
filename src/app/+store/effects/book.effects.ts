import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import {
  loadingBooks,
  booksApiSuccess,
  booksApiFailure,
} from '@store/actions';

import { BookService, SpinnerService } from '@core/services';

import { Book } from '@core/models';

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
