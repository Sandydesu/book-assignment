import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as ROUTER_URLS from '@core/constants/router.constants';
import { selectCartItemsCount } from '@store/selectors/cart.selector';
import { selectMyCollectionsCount } from '@store/selectors/collections.selector';

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
