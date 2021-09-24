import { createAction } from '@ngrx/store';

import { LOAD } from '@store/constants/page-load.constants';

export const load = createAction(LOAD);
