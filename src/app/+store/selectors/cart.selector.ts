import { createSelector, createFeatureSelector } from '@ngrx/store';

import { CartReducerState } from '@store/reducers/cart.reducer';
import { AppState, bookStore, cartFeatureKey } from '@store/reducers';

export const selectFeature = createFeatureSelector<AppState>(bookStore);

export const selectCart = createSelector(
  selectFeature,
  (state) => state[cartFeatureKey]
);

export const selectBuyNowBook = createSelector(
  selectCart,
  (state: CartReducerState) => state.buyNowBooks
);
