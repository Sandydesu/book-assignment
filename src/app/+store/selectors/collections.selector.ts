import { createSelector, createFeatureSelector } from '@ngrx/store';

import { CollectionReducerState } from '@store/reducers/collection.reducer';
import { AppState, bookStore, collectionFeatureKey } from '@store/reducers';

const selectFeature = createFeatureSelector<AppState>(bookStore);

const selectCollection = createSelector(
  selectFeature,
  (state) => state[collectionFeatureKey]
);

export const selectMyCollections = createSelector(
  selectCollection,
  (state: CollectionReducerState) => state.mycollections
);

export const selectMyCollectionsCount = createSelector(
  selectCollection,
  (state: CollectionReducerState) => state.mycollections.length
);
