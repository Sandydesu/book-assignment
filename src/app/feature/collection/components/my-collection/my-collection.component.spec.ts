import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';

import { CustomeMaterialModule } from '@app/material-module';
import { SharedModule } from '@shared/shared.module';

import { selectMyCollections } from '@store/selectors';

import { MyCollectionComponent } from './my-collection.component';

describe('MyCollectionComponent', () => {
  let component: MyCollectionComponent;
  let fixture: ComponentFixture<MyCollectionComponent>;
  let store: MockStore;

  const myCollections = require('src/assets/collections.json');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCollectionComponent],
      imports: [CustomeMaterialModule, FlexLayoutModule, SharedModule],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCollectionComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    store.overrideSelector(selectMyCollections, myCollections);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify my collection details', () => {
    const personalDetails = fixture.debugElement.query(
      By.css('.person-details')
    );

    expect(personalDetails.nativeElement.innerText).toContain('abc');
    expect(personalDetails.nativeElement.innerText).toContain('abc@gmail.com');
    expect(personalDetails.nativeElement.innerText).toContain('(111) 111-1111');
  });
});
