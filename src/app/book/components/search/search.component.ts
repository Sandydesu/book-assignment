import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadingBooks } from '@book/+store/book.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchTerm: string = '';
  constructor(private store: Store) {}

  search() {
    this.store.dispatch(loadingBooks({ bookName: this.searchTerm }));
  }
}
