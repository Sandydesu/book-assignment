import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { load } from '@store/actions/page-load.actions';
import { loadCart } from '@store/actions/cart.actions';
import { getCollection } from '@store/actions/collections.actions';

@Injectable()
export class PageLoadEffects {
  loadCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(load),
      mergeMap(() => {
        return of(loadCart());
      })
    );
  });
  loadCollection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(load),
      mergeMap(() => {
        return of(getCollection());
      })
    );
  });

  constructor(private actions$: Actions) {}
}
