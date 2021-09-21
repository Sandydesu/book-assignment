import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { CustomeMaterialModule } from '@app/material-module';

import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { BookComponent } from './book.component';

import { BookSearchComponent } from './containers/book-search/book-search.component';
import { BookDetailsComponent } from './containers/book-details/book-details.component';

import { MorePipe } from './common/pipes/more.pipe';

const routes: Routes = [
  {
    path: 'search',
    component: BookSearchComponent,
  },
  {
    path: 'details',
    component: BookDetailsComponent,
  },
  { path: '**', redirectTo: 'search' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomeMaterialModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  declarations: [
    SearchComponent,
    ListComponent,
    BookComponent,
    BookSearchComponent,
    BookDetailsComponent,
    MorePipe,
  ],
})
export class BookRoutingModule {}
