import { createAction, props } from '@ngrx/store';

import { Book } from '@core/models/books.model';

import {
  CART_ADD,
  CART_ADD_SUCCESS,
  CART_BUY_NOW,
  CART_CLEAR_ITEMS_FROM_BUY_NOW,
  CART_CLEAR_ITEMS_FROM_CART_LIST,
  CART_LOAD,
  CART_MOVE_ITEMS_TO_BUY_NOW,
  CART_REMOVE_ITEM_FROM_CART_LIST,
} from '../constants/cart.constants';

export const loadCart = createAction(CART_LOAD);

export const buyNow = createAction(CART_BUY_NOW, props<{ book: Book }>());

export const addToCart = createAction(CART_ADD, props<{ book: Book }>());

export const addToCartSuccess = createAction(
  CART_ADD_SUCCESS,
  props<{ list: Book[] }>()
);

export const clearItemsFromBuyNowList = createAction(
  CART_CLEAR_ITEMS_FROM_BUY_NOW
);

export const removeItemFromCartList = createAction(
  CART_REMOVE_ITEM_FROM_CART_LIST,
  props<{ book: Book }>()
);

export const moveCartItemsToBuy = createAction(
  CART_MOVE_ITEMS_TO_BUY_NOW,
  props<{ books: Book[] }>()
);

export const clearItemsFromCartList = createAction(
  CART_CLEAR_ITEMS_FROM_CART_LIST
);
