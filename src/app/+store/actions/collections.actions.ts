import { createAction, props } from '@ngrx/store';

import { MyCollection } from '@app/core/models/collection.model';

import {
  COLLECTIONS_ADD,
  COLLECTIONS_ADD_SUCCESS,
  COLLECTION_GET,
} from '../constants/collections.constants';

export const collectionAdd = createAction(
  COLLECTIONS_ADD,
  props<{ collection: MyCollection }>()
);

export const collectionAddedSuccess = createAction(
  COLLECTIONS_ADD_SUCCESS,
  props<{ collections: MyCollection[] }>()
);

export const getCollection = createAction(COLLECTION_GET);
