import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { loadingBooks } from '@store/actions';

import { selectSearchKey } from '@store/selectors';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an event when click on search button', () => {
    component.searchTerm = 'A';

    const searchButton = fixture.debugElement.query(By.css('#searchButton'));
    searchButton.nativeElement.click();

    expect(store.dispatch).toHaveBeenCalledWith(
      loadingBooks({ bookName: 'A' })
    );
  });

  it('should display search value in search box', () => {
    store.overrideSelector(selectSearchKey, 'B');
    store.refreshState();
    component.ngOnInit();

    expect(component.searchTerm).toEqual('B');
  });
});
