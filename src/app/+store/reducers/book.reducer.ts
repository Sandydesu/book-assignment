import { Action, createReducer, on } from '@ngrx/store';

import {
  booksApiFailure,
  booksApiSuccess,
  loadingBooks,
  updateSelectedBook,
} from '@store/actions';

import { Book } from '@core/models';

export interface BookReducerState {
  books: Book[];
  error: string;
  load: boolean;
  selectedBook: Book;
  searchKey: string;
}

const initialState = {
  books: [],
  error: '',
  load: false,
  searchKey: '',
  selectedBook: {
    id: '',
    selfLink: '',
    volumeInfo: {
      title: '',
      authors: [],
      description: '',
      publisher: '',
      publishedDate: '',
      pageCount: 0,
      printType: '',
      categories: [],
      imageLinks: {
        smallThumbnail: '',
        thumbnail: '',
      },
      previewLink: '',
      language: '',
    },
  },
};

const reducer = createReducer<BookReducerState>(
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
    updateSelectedBook,
    (state, { book }): BookReducerState => ({
      ...state,
      selectedBook: book,
    })
  )
);

export function bookReducer(
  state: BookReducerState | undefined,
  action: Action
) {
  return reducer(state, action);
}
