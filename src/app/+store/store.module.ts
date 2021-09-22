import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromBook from '@store/reducers/book.reducer';
import * as fromCart from '@store/reducers/cart.reducer';

import { BookEffects } from '@store/effects/book.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(fromBook.booksFeatureKey, fromBook.bookReducer),
    StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.cartReducer),
    EffectsModule.forFeature([BookEffects]),
  ],
})
export class BookStoreModule { }
