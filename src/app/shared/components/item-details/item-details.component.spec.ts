import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { CustomeMaterialModule } from '@app/material-module';
import { SharedModule } from '@shared/shared.module';

import { ItemDetailsComponent } from './item-details.component';

describe('ItemDetailsComponent', () => {
  let component: ItemDetailsComponent;
  let fixture: ComponentFixture<ItemDetailsComponent>;

  const books = require('src/assets/books.json');

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        CustomeMaterialModule,
        SharedModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsComponent);
    component = fixture.componentInstance;
    component.book = { ...books[0] };
    component.fullDetails = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify book details', () => {
    const cardTitle = fixture.debugElement.query(By.css('mat-card-title'));
    const authors = fixture.debugElement.query(By.css('mat-card-subtitle'));
    const publisher = fixture.debugElement.query(By.css('#publisher'));
    const pageCount = fixture.debugElement.query(By.css('#pageCount'));
    const language = fixture.debugElement.query(By.css('#language'));
    const publishDate = fixture.debugElement.query(By.css('#publishDate'));

    expect(cardTitle.nativeElement.innerText).toEqual(
      books[0].volumeInfo.title
    );
    expect(authors.nativeElement.innerText).toEqual(
      books[0].volumeInfo.authors.join(',')
    );
    expect(publisher.nativeElement.innerText).toContain(
      books[0].volumeInfo.publisher
    );
    expect(pageCount.nativeElement.innerText).toContain(
      books[0].volumeInfo.pageCount
    );
    expect(language.nativeElement.innerText).toContain(
      books[0].volumeInfo.language
    );
    expect(publishDate.nativeElement.innerText).toContain(
      books[0].volumeInfo.publishedDate
    );
  });
});
