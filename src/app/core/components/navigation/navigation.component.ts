import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  selectCartItemsCount,
  selectMyCollectionsCount,
} from '@store/selectors';

import * as ROUTER_URLS from '@core/constants/router.constants';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  router_urls = ROUTER_URLS;
  cartCount$ = this.store.select(selectCartItemsCount);
  collectionsCount$ = this.store.select(selectMyCollectionsCount);
  constructor(private store: Store) {}
}
