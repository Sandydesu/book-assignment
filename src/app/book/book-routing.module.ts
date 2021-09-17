import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { CustomeMaterialModule } from '@app/material-module';

import { SearchComponent } from './components/search/search.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './book.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
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
  declarations: [SearchComponent, BookListComponent, BookComponent],
  exports: [SearchComponent, BookListComponent, BookComponent],
})
export class BookRoutingModule {}
