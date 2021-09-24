import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectMyCollections } from '@store/selectors';

import { Book, MyCollection } from '@app/core/models';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss'],
})
export class MyCollectionComponent {
  myCollections$ = this.store.select(selectMyCollections);
  constructor(private store: Store) {}
  trackById(index: number, book: Book): string {
    return book.id;
  }
  trackByEmail(index: number, collection: MyCollection): string {
    return collection.email;
  }
}
