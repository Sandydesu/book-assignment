import { createAction, props } from '@ngrx/store';

import { Book } from '@core/models';

import {
  ADD_TO_CART,
  ADD_TO_CART_SUCCESS,
  BUY_NOW,
  CLEAR_ITEMS_FROM_BUY_NOW,
  CLEAR_ALL_ITEMS_FROM_CART_LIST,
  LOADING_CART,
  MOVE_CART_ITEMS_TO_BUY_NOW,
  REMOVE_ITEM_FROM_CART,
} from '@store/constants';

export const loadCart = createAction(LOADING_CART);

export const buyNow = createAction(BUY_NOW, props<{ book: Book }>());

export const addToCart = createAction(ADD_TO_CART, props<{ book: Book }>());

export const addToCartSuccess = createAction(
  ADD_TO_CART_SUCCESS,
  props<{ list: Book[] }>()
);

export const clearItemsFromBuyNowList = createAction(CLEAR_ITEMS_FROM_BUY_NOW);

export const removeItemFromCartList = createAction(
  REMOVE_ITEM_FROM_CART,
  props<{ book: Book }>()
);

export const moveCartItemsToBuy = createAction(
  MOVE_CART_ITEMS_TO_BUY_NOW,
  props<{ books: Book[] }>()
);

export const clearAllItemsFromCartList = createAction(
  CLEAR_ALL_ITEMS_FROM_CART_LIST
);
