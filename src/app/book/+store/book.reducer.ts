import { Action, createReducer, on, State } from '@ngrx/store';

import { Book } from '@book/common/models/books.model';

import {
  loadingBooks,
  booksApiSuccess,
  booksApiFailure,
} from '@book/+store/book.actions';

export interface BookReducerState {
  books: Book[];
  error: string;
  load: boolean;
}

export const booksFeatureKey = 'booksList';

export const initialState = { books: [], error: '', load: false };

const bookReducer = createReducer<BookReducerState>(
  initialState,
  on(loadingBooks, (state): BookReducerState => ({ ...state, load: true })),
  on(
    booksApiSuccess,
    (state, { books }): BookReducerState => ({
      ...state,
      books: books,
      load: false,
    })
  ),
  on(
    booksApiFailure,
    (state, { errorMsg }): BookReducerState => ({
      ...state,
      error: errorMsg,
      load: false,
    })
  )
);

export function reducer(state: BookReducerState | undefined, action: Action) {
  return bookReducer(state, action);
}
