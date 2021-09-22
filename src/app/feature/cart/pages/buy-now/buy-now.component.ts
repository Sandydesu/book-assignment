import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { selectBuyNowBook } from '@store/selectors/cart.selector';

import { collectionAdd } from '@store/actions/collections.actions';

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
    private fb: FormBuilder
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
  }

  trackById(index: number, book: Book): string {
    return book.id;
  }

  allowOnlyNumbers(event: any) {
    if (event.type === 'paste') {
      const clipboardData: DataTransfer = event.clipboardData;
      const pastedText = clipboardData.getData('text');

      if (isNaN(Number(pastedText))) {
        event.preventDefault();
      }
    }

    const keyCode = event.keyCode;
    // Allow: backspace, delete, tab, escape, enter
    const includedKeys = [8, 9, 13, 27, 46, 110];

    if (includedKeys.includes(keyCode)) {
      return;
    }
    // Allow: home, end, left, right, down, up
    if (keyCode >= 35 && keyCode <= 40) {
      return;
    }

    const ctrlIncludedKeys = [65, 67, 86, 88];
    if (event.ctrlKey && ctrlIncludedKeys.includes(keyCode)) {
      return;
    }

    if (
      (event.shiftKey || keyCode < 48 || event.keyCode > 57) &&
      (keyCode < 96 || keyCode > 105)
    ) {
      event.preventDefault();
    }
  }

  buyNow() {
    const personInformation = this.buyNowForm.value;
    const collection = {
      ...personInformation,
      items: this.books,
    };
    this.store.dispatch(collectionAdd({ collection: collection }));
    this.router.navigate([COLLECTIONS]);
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
