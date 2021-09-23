import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { WebstorageService } from '@app/core/services';

import {
  collectionAdd,
  collectionAddedSuccess,
  getCollection,
} from '../actions/collections.actions';
import {
  clearItemsFromBuyNowList,
  clearItemsFromCartList,
} from '../actions/cart.actions';

import { COLLECTION_STORAGE_KEY } from '../constants/collections.constants';

@Injectable()
export class CollectionEffects {
  addCollection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(collectionAdd),
      mergeMap(({ collection }) => {
        const storageCollection = this.webstorageService.getItem(
          COLLECTION_STORAGE_KEY
        );

        const collections = storageCollection
          ? JSON.parse(storageCollection)
          : [];
        collections.push(collection);

        this.webstorageService.setItem(
          COLLECTION_STORAGE_KEY,
          JSON.stringify(collections)
        );
        return of(collectionAddedSuccess({ collections: collections }));
      })
    );
  });

  clearBuyNowList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(collectionAdd),
      mergeMap(() => of(clearItemsFromBuyNowList()))
    );
  });

  clearCartItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(collectionAdd),
      mergeMap(({ isCartAction }) => {
        if (isCartAction) {
          return of(clearItemsFromCartList());
        }
        return of(clearItemsFromBuyNowList());
      })
    );
  });

  getMyCollections$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCollection),
      mergeMap(() => {
        const storageCollection = this.webstorageService.getItem(
          COLLECTION_STORAGE_KEY
        );
        const collections = storageCollection
          ? JSON.parse(storageCollection)
          : [];
        return of(collectionAddedSuccess({ collections: collections }));
      })
    );
  });

  constructor(
    private actions$: Actions,
    private webstorageService: WebstorageService
  ) {}
}
