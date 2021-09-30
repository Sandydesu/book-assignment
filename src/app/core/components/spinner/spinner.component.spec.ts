import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomeMaterialModule } from '@app/material-module';

import { SpinnerService } from '@core/services';

import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;
  let service: SpinnerService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CustomeMaterialModule],
      declarations: [SpinnerComponent],
      providers: [SpinnerService],
    }).compileComponents();

    service = TestBed.inject(SpinnerService);
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display spinner', () => {
    service.showSpinner.next(true);
    expect(component.isLoading).toBe(true);
  });

  it('should not display spinner', () => {
    service.showSpinner.next(false);
    expect(component.isLoading).toBe(false);
  });

  afterEach(() => {
    fixture.destroy();
  });
});
