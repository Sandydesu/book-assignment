import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { loadingBooks, selectSearchKey } from '@store/index';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  searchTerm: string = '';

  unSubscribe$ = new Subject();
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store
      .select(selectSearchKey)
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe((searchKey) => (this.searchTerm = searchKey));
  }

  search(): void {
    this.store.dispatch(loadingBooks({ bookName: this.searchTerm }));
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
