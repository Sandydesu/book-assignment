import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { bookStore, reducer } from './reducers';

import { BookEffects } from '@store/effects/book.effects';
import { CollectionEffects } from '@store/effects/collection.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(bookStore, reducer),
    EffectsModule.forFeature([BookEffects, CollectionEffects]),
  ],
})
export class BookStoreModule {}
