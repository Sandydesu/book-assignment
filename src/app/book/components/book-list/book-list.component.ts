import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  selectBooksList,
  selectBooksLoadingStatus,
} from '@app/book/+store/book.selector';

import { Book } from '@app/book/common/models/books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books$ = this.store.select(selectBooksList);
  isLoad = false;

  unSubscribe$ = new Subject();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(selectBooksLoadingStatus)
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe((isLoad) => (this.isLoad = !isLoad));
  }

  ngOnDestroy() {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
