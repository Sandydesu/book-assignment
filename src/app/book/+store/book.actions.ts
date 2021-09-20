import { createAction, props } from '@ngrx/store';

import { Book } from '../common/models/books.model';

import {
  BOOKS_API_FAILURE,
  BOOKS_API_SUCCESS,
  BOOKS_LOADING,
} from '@book/+store/book.constants';

export const loadingBooks = createAction(
  BOOKS_LOADING,
  props<{ bookName: string }>()
);

export const booksApiSuccess = createAction(
  BOOKS_API_SUCCESS,
  props<{ books: Book[] }>()
);

export const booksApiFailure = createAction(
  BOOKS_API_FAILURE,
  props<{ errorMsg: string }>()
);
