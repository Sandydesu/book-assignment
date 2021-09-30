import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomeMaterialModule } from '@app/material-module';
import { SharedModule } from '@shared/shared.module';

import {
  selectBooksList,
  selectBooksLoadingStatus,
  selectErrorMessage,
  selectSearchKey,
} from '@store/selectors';

import { ListComponent } from './list.component';

xdescribe('BookListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let store: MockStore;
  let mockSelectBooksList;
  let mockBooksLoadingStatus;
  let mockSelectErrorMessage;
  let mockSelectSearchKey;

  const initialState = { load: false, error: '', books: [], searchKey: '' };

  const books = require('src/assets/books.json');
  const mockRouter = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        SharedModule,
        FlexLayoutModule,
        CustomeMaterialModule,
      ],
      declarations: [ListComponent],
      providers: [
        provideMockStore({ initialState }),
        { provide: Router, useValue: mockRouter },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    mockBooksLoadingStatus = store.overrideSelector(
      selectBooksLoadingStatus,
      true
    );
    mockSelectErrorMessage = store.overrideSelector(selectErrorMessage, '');
    mockSelectSearchKey = store.overrideSelector(selectSearchKey, 'A');
    mockSelectBooksList = store.overrideSelector(selectBooksList, books);
    fixture.detectChanges();
    spyOn(store, 'dispatch').and.callFake(() => {});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
