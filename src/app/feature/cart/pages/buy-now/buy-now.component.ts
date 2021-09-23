import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  selectBuyNowBook,
  selectCartActionStatus,
} from '@store/selectors/cart.selector';

import { collectionAdd } from '@store/actions/collections.actions';

import { allowOnlyNumber } from '@core/utils/only-numbers';

import { Book } from '@core/models/books.model';

import { BOOK_SEARCH, COLLECTIONS } from '@core/constants/router.constants';
import { REGEX } from '@core/constants/app.constants';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.scss'],
})
export class BuyNowComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  isCartAction: boolean = false;
  buyNowForm = this.fb.group({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(REGEX.Name),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.maxLength(14),
      Validators.pattern(REGEX.Phone),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(REGEX.Email),
    ]),
    address: new FormControl('', [Validators.required]),
  });

  unSubscribe$ = new Subject();

  constructor(
    private store: Store,
    private router: Router,
    private fb: FormBuilder,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.store
      .select(selectBuyNowBook)
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe((buyNowBooks) => {
        if (!buyNowBooks.length) {
          this.router.navigate([BOOK_SEARCH]);
          return;
        }
        this.books = buyNowBooks;
      });

    this.store
      .select(selectCartActionStatus)
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe((isCartAction) => {
        this.isCartAction = isCartAction;
      });
  }

  trackById(index: number, book: Book): string {
    return book.id;
  }

  allowOnlyNumbers(event: any): void {
    allowOnlyNumber(event);
  }

  buyNow(): void {
    const personInformation = this.buyNowForm.value;
    const collection = {
      ...personInformation,
      items: this.books,
    };
    this.store.dispatch(
      collectionAdd({ collection: collection, isCartAction: this.isCartAction })
    );
    this.router.navigate([COLLECTIONS]);
  }

  back(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
