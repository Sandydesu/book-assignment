import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { bookStore, reducer } from './reducers';

import { BookEffects } from '@store/effects/book.effects';
import { CollectionEffects } from '@store/effects/collection.effects';
import { CartEffects } from '@store/effects/cart.effects';
import { PageLoadEffects } from '@store/effects/page-load.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(bookStore, reducer),
    EffectsModule.forFeature([
      BookEffects,
      CollectionEffects,
      CartEffects,
      PageLoadEffects,
    ]),
  ],
})
export class BookStoreModule {}
