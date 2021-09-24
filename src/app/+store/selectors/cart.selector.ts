import { createSelector, createFeatureSelector } from '@ngrx/store';

import { CartReducerState } from '@store/reducers/cart.reducer';
import { AppState, bookStore, cartFeatureKey } from '@store/reducers';

const selectFeature = createFeatureSelector<AppState>(bookStore);

const selectCart = createSelector(
  selectFeature,
  (state) => state[cartFeatureKey]
);

export const selectBuyNowBook = createSelector(
  selectCart,
  (state: CartReducerState) => state.buyNowBooks
);

export const selectCartItems = createSelector(
  selectCart,
  (state: CartReducerState) => state.items
);

export const selectCartItemsCount = createSelector(
  selectCart,
  (state: CartReducerState) => state.items.length
);

export const selectCartActionStatus = createSelector(
  selectCart,
  (state: CartReducerState) => state.isCartAction
);
