import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { loadingBooks } from '@book/+store/book.actions';
import { selectSearchKey } from '@app/book/+store/book.selector';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  searchTerm: string = '';

  unSubscribe$ = new Subject();
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(selectSearchKey)
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe((searchKey) => (this.searchTerm = searchKey));
  }

  search() {
    this.store.dispatch(loadingBooks({ bookName: this.searchTerm }));
  }

  ngOnDestroy() {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
