import { createAction } from '@ngrx/store';

import { PAGE_LOAD } from '@store/constants';

export const loadCartAndCollections = createAction(PAGE_LOAD);
