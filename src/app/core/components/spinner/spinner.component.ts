import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SpinnerService } from '@core/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent implements OnInit, OnDestroy {
  isLoading = false;

  unSubscribe$ = new Subject();

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.spinnerService.showSpinner
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe((isLoading) => (this.isLoading = isLoading));
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
