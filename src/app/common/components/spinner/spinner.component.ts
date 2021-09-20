import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SpinnerService } from '@app/common/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
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

  ngOnDestroy() {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
