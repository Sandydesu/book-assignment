import { combineReducers } from '@ngrx/store';

import { bookReducer, BookReducerState } from './book.reducer';
import { cartReducer, CartReducerState } from './cart.reducer';
import {
  collectionReducer,
  CollectionReducerState,
} from './collection.reducer';

export const bookStore = 'book';
export const booksFeatureKey = 'List';
export const cartFeatureKey = 'cart';
export const collectionFeatureKey = 'collections';

export interface AppState {
  [booksFeatureKey]: BookReducerState;
  [cartFeatureKey]: CartReducerState;
  [collectionFeatureKey]: CollectionReducerState;
}

export const reducer = combineReducers({
  [booksFeatureKey]: bookReducer,
  [cartFeatureKey]: cartReducer,
  [collectionFeatureKey]: collectionReducer,
});
