import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable()
export class SpinnerService {
  showSpinner = new Subject<boolean>();
}
