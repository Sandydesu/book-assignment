import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromBook from '@store/reducers/book.reducer';
import * as fromCart from '@store/reducers/cart.reducer';
import * as fromCollection from '@store/reducers/collection.reducer';

import { BookEffects } from '@store/effects/book.effects';
import { CollectionEffects } from '@store/effects/collection.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(fromBook.booksFeatureKey, fromBook.bookReducer),
    StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.cartReducer),
    StoreModule.forFeature(
      fromCollection.collectionFeatureKey,
      fromCollection.collectionReducer
    ),
    EffectsModule.forFeature([BookEffects, CollectionEffects]),
  ],
})
export class BookStoreModule {}
