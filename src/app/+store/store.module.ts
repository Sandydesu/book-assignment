import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromBooks from '@store/reducers/book.reducer';
import { BookEffects } from '@store/effects/book.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(fromBooks.booksFeatureKey, fromBooks.reducer),
    EffectsModule.forFeature([BookEffects]),
  ],
})
export class BookStoreModule {}
