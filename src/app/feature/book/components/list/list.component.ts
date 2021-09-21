import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

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

import { BOOK_DETAILS } from '@app/core/constants/router.constants';

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

  constructor(private store: Store, private router: Router) { }

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

  onSelect(book: Book): void {
    this.store.dispatch(bookSelected({ book: book }));
    this.router.navigate([BOOK_DETAILS, book.id]);
  }

  trackById(index: number, book: Book): string {
    return book.id;
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
