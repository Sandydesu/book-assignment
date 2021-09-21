import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  selectBooksList,
  selectBooksLoadingStatus,
  selectErrorMessage,
  selectSearchKey,
  bookSelected
} from '@store/index';

import { Book } from '@core/models/books.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  books$ = this.store.select(selectBooksList);
  isLoad = false;
  errorMessage = '';
  searchKey = '';

  unSubscribe$ = new Subject();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store
      .select(selectBooksLoadingStatus)
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe((isLoad) => (this.isLoad = !isLoad));
    this.store
      .select(selectErrorMessage)
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe((error) => (this.errorMessage = error));

    this.store
      .select(selectSearchKey)
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe((searchKey) => (this.searchKey = searchKey));
  }

  onSelect(book: Book) {
    this.store.dispatch(bookSelected({ book: book }));
  }

  trackById(index: number, book: Book): string {
    return book.id;
  }

  ngOnDestroy() {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
