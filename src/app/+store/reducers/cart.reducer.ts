import { Action, createReducer, on } from '@ngrx/store';

import { addToCart, buyNow } from '../actions/cart.actions';

import { Book } from '@core/models/books.model';

export interface CartReducerState {
  buyNowBook: Book;
  items: Book[]
}

export const cartFeatureKey = 'cart';

const initialState = {
  buyNowBook: {
    id: '',
    selfLink: '',
    volumeInfo: {
      title: '',
      authors: [],
      description: '',
      publisher: '',
      publishedDate: '',
      pageCount: 0,
      printType: '',
      categories: [],
      imageLinks: {
        smallThumbnail: '',
        thumbnail: '',
      },
      previewLink: '',
      language: '',
    },
  },
  items: []
}

const reducer = createReducer<CartReducerState>(
  initialState,
  on(buyNow, (state, { book }): CartReducerState => ({ ...state, buyNowBook: book })),
  on(addToCart, (state, { book }): CartReducerState => {
    const items = [...state.items];
    if (!items.some(item => item.id === book.id)) {
      items.push(book);
    }
    return {
      ...state,
      items: items
    }
  })
);

export function cartReducer(state: CartReducerState | undefined, action: Action) {
  return reducer(state, action);
}
