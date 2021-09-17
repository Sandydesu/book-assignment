import { Component } from '@angular/core';
import {  Store } from '@ngrx/store';

import { selectBooksList } from '@app/book/+store/book.selector';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books$ = this.store.select(selectBooksList);
  constructor(private store: Store) {}
}
