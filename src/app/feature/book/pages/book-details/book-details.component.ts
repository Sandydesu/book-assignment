import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Book } from '@core/models/books.model';
import { selectBook } from '@store/selectors/book.selector';

import { BOOK_SEARCH } from '@core/constants/router.constants';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
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

  unSubscribe$ = new Subject();

  constructor(private store: Store, private router: Router) { }

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
  addToCart(): void { }

  buyNow(): void { }

  back(): void {
    this.router.navigate([BOOK_SEARCH]);
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
