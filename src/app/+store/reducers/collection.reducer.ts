import { Action, createReducer, on } from '@ngrx/store';

import { MyCollection } from '@core/models/collection.model';

import { collectionAddedSuccess } from '../actions/collections.actions';

export interface CollectionReducerState {
  mycollections: MyCollection[];
  load: boolean;
}

const initialState = {
  mycollections: [],
  load: false,
};

const reducer = createReducer<CollectionReducerState>(
  initialState,
  on(
    collectionAddedSuccess,
    (state, { collections }): CollectionReducerState => {
      return {
        ...state,
        mycollections: collections,
        load: true,
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
