import { Component } from '@angular/core';
import * as ROUTER_URLS from '@core/constants/router.constants';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  router_urls = ROUTER_URLS;
}
