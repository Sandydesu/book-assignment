import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  getMyCollections,
  loadCart,
  loadCartAndCollections,
} from '@store/actions';

@Injectable()
export class PageLoadEffects {
  loadCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCartAndCollections),
      mergeMap(() => {
        return of(loadCart());
      })
    );
  });
  loadCollection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCartAndCollections),
      mergeMap(() => {
        return of(getMyCollections());
      })
    );
  });

  constructor(private actions$: Actions) {}
}
