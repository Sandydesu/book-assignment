import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Location } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { CustomeMaterialModule } from '@app/material-module';
import { SharedModule } from '@shared/shared.module';

import { selectCartItems } from '@store/selectors';

import { CartListComponent } from './cart-list.component';
import { moveCartItemsToBuy } from '@app/+store/actions';

describe('CartListComponent', () => {
  let component: CartListComponent;
  let fixture: ComponentFixture<CartListComponent>;
  let store: MockStore;
  let router: Router;

  const books = require('src/assets/books.json');
  const cartItems = books.slice(0, 3);
  const removedCartItems = books.slice(0, 2);
  const mockLoaction = jasmine.createSpyObj('Location', ['back']);
  const routerMock = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        CustomeMaterialModule,
        SharedModule,
        FlexLayoutModule,
      ],
      declarations: [CartListComponent],
      providers: [
        provideMockStore(),
        { provide: Location, useValue: mockLoaction },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    store.overrideSelector(selectCartItems, cartItems);
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to back when click on back button', () => {
    const backButton = fixture.debugElement.query(By.css('#backButton'));
    backButton.nativeElement.click();

    expect(mockLoaction.back).toHaveBeenCalled();
  });

  it('should navigate to buynow when click on buy now button', () => {
    const buyNowButton = fixture.debugElement.query(By.css('#buyNowButton'));
    buyNowButton.nativeElement.click();

    expect(store.dispatch).toHaveBeenCalledWith(
      moveCartItemsToBuy({ books: cartItems })
    );
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it('should remove book from cart list', () => {
    store.overrideSelector(selectCartItems, removedCartItems);
    component.ngOnInit();
    const buyNowButton = fixture.debugElement.query(By.css('#removeButton'));
    buyNowButton.nativeElement.click();

    expect(component.books.length).toEqual(2);
  });
});
