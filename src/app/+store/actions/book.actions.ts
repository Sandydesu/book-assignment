import { createAction, props } from '@ngrx/store';

import { Book } from '@core/models';

import {
  BOOKS_API_FAILURE,
  BOOKS_API_SUCCESS,
  LOADING_BOOKS,
  UPDATE_SELECTED_BOOK,
} from '@store/constants';

export const loadingBooks = createAction(
  LOADING_BOOKS,
  props<{ bookName: string }>()
);

export const booksApiSuccess = createAction(
  BOOKS_API_SUCCESS,
  props<{ books: Book[]; searchKey: string }>()
);

export const booksApiFailure = createAction(
  BOOKS_API_FAILURE,
  props<{ errorMsg: string; searchKey: string }>()
);

export const updateSelectedBook = createAction(
  UPDATE_SELECTED_BOOK,
  props<{ book: Book }>()
);
