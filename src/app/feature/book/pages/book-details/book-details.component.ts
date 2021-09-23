import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { addToCart, buyNow } from '@store/actions/cart.actions';

import { Book } from '@core/models/books.model';

import { selectBook } from '@store/selectors/book.selector';

import {
  BOOK_SEARCH,
  BUY_NOW,
} from '@core/constants/router.constants';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  book: Book = {
    id: '',
    selfLink: '',
    volumeInfo: {
      title: '',
      authors: [],
      description: '',
      publishedDate: '',
      publisher: '',
      pageCount: 0,
      printType: '',
      categories: [],
      imageLinks: {
        smallThumbnail: '',
        thumbnail: '',
      },
      previewLink: '',
      language: '',
    },
  };
  addToCardButtonDisable = false;

  unSubscribe$ = new Subject();

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store
      .select(selectBook)
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe((book) => {
        if (book.id === '') {
          this.router.navigate([BOOK_SEARCH]);
          return;
        }
        this.book = book;
      });
  }
  addToCart(): void {
    this.store.dispatch(addToCart({ book: this.book }));
    this.addToCardButtonDisable = true;
  }

  buyNow(): void {
    this.store.dispatch(buyNow({ book: this.book }));
    this.router.navigate([BUY_NOW]);
  }

  back(): void {
    this.router.navigate([BOOK_SEARCH]);
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
