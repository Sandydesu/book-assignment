import { Action, createReducer, on } from '@ngrx/store';

import {
  loadingBooks,
  booksApiSuccess,
  booksApiFailure,
  bookSelected,
} from '@store/actions/book.actions';

import { Book } from '@core/models/books.model';

export interface BookReducerState {
  books: Book[];
  error: string;
  load: boolean;
  selectedBook?: Book;
  searchKey: string;
}

export const booksFeatureKey = 'booksList';

export const initialState = {
  books: [],
  error: '',
  load: false,
  searchKey: '',
};

const bookReducer = createReducer<BookReducerState>(
  initialState,
  on(loadingBooks, (state): BookReducerState => ({ ...state, load: true })),
  on(
    booksApiSuccess,
    (state, { books, searchKey }): BookReducerState => ({
      ...state,
      books: books,
      searchKey: searchKey,
      error: '',
      load: false,
    })
  ),
  on(
    booksApiFailure,
    (state, { errorMsg, searchKey }): BookReducerState => ({
      ...state,
      error: errorMsg,
      searchKey: searchKey,
      load: false,
    })
  ),
  on(
    bookSelected,
    (state, { book }): BookReducerState => ({
      ...state,
      selectedBook: book,
    })
  )
);

export function reducer(state: BookReducerState | undefined, action: Action) {
  return bookReducer(state, action);
}
