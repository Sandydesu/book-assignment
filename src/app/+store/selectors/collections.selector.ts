import { createSelector, createFeatureSelector } from '@ngrx/store';

import { CollectionReducerState } from '@store/reducers/collection.reducer';
import { AppState, bookStore, collectionFeatureKey } from '@store/reducers';

export const selectFeature = createFeatureSelector<AppState>(bookStore);

export const selectCollection = createSelector(
  selectFeature,
  (state) => state[collectionFeatureKey]
);

export const selectMyCollections = createSelector(
  selectCollection,
  (state: CollectionReducerState) => state.mycollections
);

export const selectCollectionLoadStatus = createSelector(
  selectCollection,
  (state: CollectionReducerState) => state.load
);
