import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CustomeMaterialModule } from '@app/material-module';
import { SharedModule } from '@shared/shared.module';

import { selectBuyNowBook, selectCartActionStatus } from '@store/selectors';

import { BuyNowComponent } from './buy-now.component';

import { BOOK_SEARCH } from '@core/constants/router.constants';

describe('BuyNowComponent', () => {
  let component: BuyNowComponent;
  let fixture: ComponentFixture<BuyNowComponent>;
  let store: MockStore;

  const books = require('src/assets/books.json');
  const buyNowItems = books.slice(0, 2);

  const locationSpy = jasmine.createSpyObj('Location', ['back']);
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        SharedModule,
        FlexLayoutModule,
        CustomeMaterialModule,
        BrowserAnimationsModule,
      ],
      declarations: [BuyNowComponent],
      providers: [
        provideMockStore(),
        FormBuilder,
        {
          provide: Location,
          useValue: locationSpy,
        },
        {
          provide: Router,
          useValue: routerSpy,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyNowComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    store.overrideSelector(selectBuyNowBook, buyNowItems);
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display buynow books', () => {
    expect(component.books.length).toEqual(2);
  });

  it('should navigate to search page when buynow books are not available', () => {
    store.overrideSelector(selectBuyNowBook, []);
    component.ngOnInit();

    expect(routerSpy.navigate).toHaveBeenCalledWith([BOOK_SEARCH]);
  });

  it('should get cart action status', () => {
    store.overrideSelector(selectCartActionStatus, true);
    component.ngOnInit();

    expect(component.isCartAction).toBeTrue();
  });

  it('should navigate to back when click on back button', () => {
    const backButton = fixture.debugElement.query(By.css('#backButton'));
    backButton.nativeElement.click();

    expect(locationSpy.back).toHaveBeenCalled();
  });

  it('should buy books and save to my collections', () => {
    store.overrideSelector(selectBuyNowBook, buyNowItems);
    store.refreshState();
    component.buyNowForm.patchValue({
      name: 'abc',
      phone: '(111) 111-1111',
      email: 'abc@gmail.com',
      address: 'Hyd',
    });
    component.ngOnInit();
    fixture.detectChanges();

    component.buyNow();

    expect(store.dispatch).toHaveBeenCalled();
  });

  it('should accept only numbers', () => {
    const allowOnlyNumbersSpy = spyOn(component, 'allowOnlyNumbers');

    const phoneNumber = fixture.debugElement.query(By.css('#phoneNumber'));
    phoneNumber.nativeElement.value = '11111111';
    phoneNumber.nativeElement.dispatchEvent(new Event('keydown'));

    expect(allowOnlyNumbersSpy).toHaveBeenCalled();
  });
});
