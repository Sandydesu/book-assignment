import { createSelector, createFeatureSelector } from '@ngrx/store';

import { cartFeatureKey, CartReducerState } from '@store/reducers/cart.reducer';

export const selectFeature =
  createFeatureSelector<CartReducerState>(cartFeatureKey);

export const selectBuyNowBook = createSelector(
  selectFeature,
  (state: CartReducerState) => state.buyNowBook
);
