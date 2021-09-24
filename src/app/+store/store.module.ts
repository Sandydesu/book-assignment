import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { bookStore, reducer } from '@store/reducers';
import {
  BookEffects,
  CartEffects,
  CollectionEffects,
  PageLoadEffects,
} from '@store/effects';

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
