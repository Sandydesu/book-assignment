import { createSelector, createFeatureSelector } from '@ngrx/store';

import { BookReducerState } from '../reducers/book.reducer';
import { AppState, booksFeatureKey, bookStore } from '@store/reducers';

export const selectFeature = createFeatureSelector<AppState>(bookStore);

export const selectList = createSelector(
  selectFeature,
  (state) => state[booksFeatureKey]
);

export const selectBooksList = createSelector(
  selectList,
  (state: BookReducerState) => state.books
);

export const selectBooksLoadingStatus = createSelector(
  selectList,
  (state: BookReducerState) => state.load
);

export const selectSearchKey = createSelector(
  selectList,
  (state: BookReducerState) => state.searchKey
);

export const selectErrorMessage = createSelector(
  selectList,
  (state: BookReducerState) => state.error
);

export const selectBook = createSelector(
  selectList,
  (state: BookReducerState) => state.selectedBook
);
