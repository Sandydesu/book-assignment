import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Book } from '@core/models/books.model';

import { selectBuyNowBook } from '@store/selectors/cart.selector';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.scss']
})
export class BuyNowComponent implements OnInit, OnDestroy {
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

  unSubscribe$ = new Subject();
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectBuyNowBook)
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe(buyNowBook => this.book = buyNowBook);
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
