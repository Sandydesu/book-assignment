import { createAction, props } from '@ngrx/store';

import { Book } from '@core/models/books.model';

import {
  CART_ADD,
  CART_BUY_NOW,
  CART_REMOVE_ITEMS_FROM_BUY_NOW,
} from '../constants/cart.constants';

export const buyNow = createAction(CART_BUY_NOW, props<{ book: Book }>());

export const addToCart = createAction(CART_ADD, props<{ book: Book }>());

export const removeItemsFromBuyNowList = createAction(
  CART_REMOVE_ITEMS_FROM_BUY_NOW
);
