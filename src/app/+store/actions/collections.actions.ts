import { createAction, props } from '@ngrx/store';

import { MyCollection } from '@app/core/models/collection.model';

import {
  COLLECTIONS_ADD,
  COLLECTIONS_ADDED,
  COLLECTION_GET,
} from '../constants/collections.constants';

export const collectionAdd = createAction(
  COLLECTIONS_ADD,
  props<{ collection: MyCollection; isCartAction: boolean }>()
);

export const collectionAddedSuccess = createAction(
  COLLECTIONS_ADDED,
  props<{ collections: MyCollection[] }>()
);

export const getCollection = createAction(COLLECTION_GET);
