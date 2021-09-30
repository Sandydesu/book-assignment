import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { SharedModule } from '@shared/shared.module';
import { CustomeMaterialModule } from '@app/material-module';

import { selectBook } from '@store/selectors';
import { addToCart } from '@store/actions';

import { BOOK_SEARCH, BUY_NOW } from '@core/constants/router.constants';

import { BookDetailsComponent } from './book-details.component';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let debugElement: DebugElement;
  let store: MockStore;

  const books = require('src/assets/books.json');
  const initialBook = {
    id: '',
    selfLink: '',
    volumeInfo: {
      title: '',
      authors: [],
      description: '',
      publishedDate: '',
      publisher: '',
      pageCount: 0,
      printType: '',
      categories: [],
      imageLinks: {
        smallThumbnail: '',
        thumbnail: '',
      },
      previewLink: '',
      language: '',
    },
  };

  const mockRouter = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        CustomeMaterialModule,
      ],
      declarations: [BookDetailsComponent],
      providers: [
        provideMockStore(),
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    store = TestBed.inject(MockStore);
    store.overrideSelector(selectBook, books[0]);
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture.detectChanges();
  });

  afterEach(() => {
    component.book = initialBook;
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to search page when click on back button', () => {
    const backButton = debugElement.query(By.css('#backButton'));
    backButton.nativeElement.click();

    expect(mockRouter.navigate).toHaveBeenCalledWith([BOOK_SEARCH]);
  });

  it('should navigate to buy now page when click on buynow button', () => {
    const buyNowButton = debugElement.query(By.css('#buyNowButton'));
    buyNowButton.nativeElement.click();

    expect(mockRouter.navigate).toHaveBeenCalledWith([BUY_NOW]);
  });

  it('should fetch selected book from store', () => {
    component.ngOnInit();
    expect(component.book.id).toEqual(books[0].id);
  });

  it('should fetch selected book from store', () => {
    component.ngOnInit();
    expect(component.book.id).toEqual(books[0].id);
  });

  it('should add to cart', () => {
    const addToCartButton = debugElement.query(By.css('#addToCart'));
    addToCartButton.nativeElement.click();

    expect(store.dispatch).toHaveBeenCalledWith(
      addToCart({ book: component.book })
    );
  });
});
