import { Action, createReducer, on } from '@ngrx/store';

import { addToCart, buyNow } from '../actions/cart.actions';

import { Book } from '@core/models/books.model';

export interface CartReducerState {
  buyNowBooks: Book[];
  items: Book[];
}

export const cartFeatureKey = 'cart';

const initialState = {
  buyNowBooks: [],
  items: [],
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
  on(addToCart, (state, { book }): CartReducerState => {
    const items = [...state.items];
    if (!items.some((item) => item.id === book.id)) {
      items.push(book);
    }
    return {
      ...state,
      items: items,
    };
  })
);

export function cartReducer(
  state: CartReducerState | undefined,
  action: Action
) {
  return reducer(state, action);
}
