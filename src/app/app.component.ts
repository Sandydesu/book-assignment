import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { load } from '@store/actions/page-load.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(load());
  }
}
