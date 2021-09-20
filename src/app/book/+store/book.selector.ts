import { createSelector, createFeatureSelector } from '@ngrx/store';

import { booksFeatureKey, BookReducerState } from '@book/+store/book.reducer';

export const selectFeature =
  createFeatureSelector<BookReducerState>(booksFeatureKey);

export const selectBooksList = createSelector(
  selectFeature,
  (state: BookReducerState) => state.books
);
