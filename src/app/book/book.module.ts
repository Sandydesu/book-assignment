import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BookRoutingModule } from './book-routing.module';

import { BookService } from '@book/services/book.service';

import * as fromBooks from '@book/+store/book.reducer';
import { BookEffects } from '@book/+store/book.effects';

@NgModule({
  imports: [
    BookRoutingModule,
    StoreModule.forFeature(fromBooks.booksFeatureKey, fromBooks.reducer),
    EffectsModule.forFeature([BookEffects]),
  ],
  providers: [BookService],
})
export class BookModule {}
