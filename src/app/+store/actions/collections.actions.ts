import { createAction, props } from '@ngrx/store';

import { MyCollection } from '@core/models';

import {
  ADD_TO_COLLECTION,
  COLLECTIONS_ADDED,
  GET_MY_COLLECTIONS,
} from '@store/constants';

export const addToCollection = createAction(
  ADD_TO_COLLECTION,
  props<{ collection: MyCollection; isCartAction: boolean }>()
);

export const collectionAddedSuccess = createAction(
  COLLECTIONS_ADDED,
  props<{ collections: MyCollection[] }>()
);

export const getMyCollections = createAction(GET_MY_COLLECTIONS);
