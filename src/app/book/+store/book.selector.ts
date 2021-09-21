import { createSelector, createFeatureSelector } from '@ngrx/store';

import { booksFeatureKey, BookReducerState } from '@book/+store/book.reducer';

export const selectFeature =
  createFeatureSelector<BookReducerState>(booksFeatureKey);

export const selectBooksList = createSelector(
  selectFeature,
  (state: BookReducerState) => state.books
);

export const selectBooksLoadingStatus = createSelector(
  selectFeature,
  (state: BookReducerState) => state.load
);

export const selectSearchKey = createSelector(
  selectFeature,
  (state: BookReducerState) => state.searchKey
);

export const selectErrorMessage = createSelector(
  selectFeature,
  (state: BookReducerState) => state.error
);
