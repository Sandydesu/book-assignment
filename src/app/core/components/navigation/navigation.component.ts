import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as ROUTER_URLS from '@core/constants/router.constants';
import { selectCartItemsCount } from '@app/+store/selectors/cart.selector';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  router_urls = ROUTER_URLS;
  count$ = this.store.select(selectCartItemsCount);
  constructor(private store: Store) {}
}
