import { Action, createReducer, on } from '@ngrx/store';

import {
  buyNow,
  moveCartItemsToBuy,
  clearItemsFromBuyNowList,
  removeItemFromCartList,
  clearItemsFromCartList,
  addToCartSuccess,
} from '../actions/cart.actions';

import { Book } from '@core/models/books.model';

export interface CartReducerState {
  buyNowBooks: Book[];
  items: Book[];
  isCartAction: boolean;
}

const initialState = {
  buyNowBooks: [],
  items: [],
  isCartAction: false,
};

const reducer = createReducer<CartReducerState>(
  initialState,
  on(buyNow, (state, { book }): CartReducerState => {
    const items = [...state.buyNowBooks];
    if (!items.some((item) => item.id === book.id)) {
      items.push(book);
    }
    return { ...state, buyNowBooks: items };
  }),
  on(
    addToCartSuccess,
    (state, { list }): CartReducerState => ({
      ...state,
      items: list,
      isCartAction: false,
    })
  ),
  on(
    clearItemsFromBuyNowList,
    (state): CartReducerState => ({
      ...state,
      buyNowBooks: [],
      isCartAction: false,
    })
  ),
  on(removeItemFromCartList, (state, { book }): CartReducerState => {
    const items = [...state.items];
    const index = items.findIndex((item) => item.id === book.id);
    items.splice(index, 1);
    return {
      ...state,
      items: items,
      isCartAction: false,
    };
  }),
  on(
    moveCartItemsToBuy,
    (state, { books }): CartReducerState => ({
      ...state,
      buyNowBooks: books,
      isCartAction: true,
    })
  ),
  on(
    clearItemsFromCartList,
    (state): CartReducerState => ({
      ...state,
      items: [],
      isCartAction: false,
    })
  )
);

export function cartReducer(
  state: CartReducerState | undefined,
  action: Action
) {
  return reducer(state, action);
}
