import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { WebstorageService } from '@app/core/services';

import { addToCart, addToCartSuccess, loadCart } from '@store/actions/cart.actions';

import { Book } from '@app/core/models/books.model';

import { CART_STORAGE_KEY } from '@store/constants/cart.constants';

@Injectable()
export class CartEffects {
  addToCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addToCart),
      mergeMap(({ book }) => {
        const cartStorage = this.webstorageService.getItem(CART_STORAGE_KEY);

        const cartList = cartStorage ? JSON.parse(cartStorage) : [];
        if (!cartList.some((item: Book) => item.id === book.id)) {
          cartList.push(book);
        }

        this.webstorageService.setItem(
          CART_STORAGE_KEY,
          JSON.stringify(cartList)
        );
        return of(addToCartSuccess({ list: cartList }));
      })
    );
  });

  loadCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCart),
      mergeMap(() => {
        const cartStorage = this.webstorageService.getItem(CART_STORAGE_KEY);
        const cartList = cartStorage ? JSON.parse(cartStorage) : [];
        return of(addToCartSuccess({ list: cartList }));
      })
    );
  });

  constructor(
    private actions$: Actions,
    private webstorageService: WebstorageService
  ) {}
}
