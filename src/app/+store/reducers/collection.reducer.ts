import { Action, createReducer, on } from '@ngrx/store';

import { MyCollection } from '@core/models';

import { collectionAddedSuccess } from '@store/actions';

export interface CollectionReducerState {
  mycollections: MyCollection[];
}

const initialState = {
  mycollections: [],
};

const reducer = createReducer<CollectionReducerState>(
  initialState,
  on(
    collectionAddedSuccess,
    (state, { collections }): CollectionReducerState => {
      return {
        ...state,
        mycollections: collections,
      };
    }
  )
);

export function collectionReducer(
  state: CollectionReducerState | undefined,
  action: Action
) {
  return reducer(state, action);
}
