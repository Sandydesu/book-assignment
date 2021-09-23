import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { selectCartItems } from '@store/selectors/cart.selector';

import {
  moveCartItemsToBuy,
  removeItemFromCartList,
} from '@store/actions/cart.actions';

import { Book } from '@core/models/books.model';

import { BUY_NOW } from '@app/core/constants/router.constants';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit, OnDestroy {
  books: Book[] = [];

  unSubscribe$ = new Subject();
  constructor(
    private store: Store,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store
      .select(selectCartItems)
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe((items: Book[]) => {
        this.books = items;
      });
  }

  trackById(index: number, book: Book): string {
    return book.id;
  }

  remove(book: Book): void {
    this.store.dispatch(removeItemFromCartList({ book: book }));
  }

  back(): void {
    this.location.back();
  }

  buyNow(): void {
    this.store.dispatch(moveCartItemsToBuy({ books: this.books }));
    this.router.navigate([BUY_NOW]);
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
