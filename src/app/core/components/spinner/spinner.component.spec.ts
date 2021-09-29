import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerService } from '@core/services';
import { Subject } from 'rxjs';

import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;
  const mockSpinnerService = jasmine.createSpyObj('SpinnerService', ['']);
  mockSpinnerService.showSpinner = new Subject();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinnerComponent],
      providers: [{ provide: SpinnerService, useValues: mockSpinnerService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
