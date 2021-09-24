import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  addToCollection,
  clearAllItemsFromCartList,
  clearItemsFromBuyNowList,
  collectionAddedSuccess,
  getMyCollections,
} from '@store/actions';

import { WebstorageService } from '@core/services';

import { COLLECTION_STORAGE_KEY } from '@store/constants';

@Injectable()
export class CollectionEffects {
  addToCollection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addToCollection),
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

  clearItemsFromBuyNowList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addToCollection),
      mergeMap(() => of(clearItemsFromBuyNowList()))
    );
  });

  clearAllItemsFromCartItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addToCollection),
      mergeMap(({ isCartAction }) => {
        if (isCartAction) {
          return of(clearAllItemsFromCartList());
        }
        return of(clearItemsFromBuyNowList());
      })
    );
  });

  getMyCollections$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getMyCollections),
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
