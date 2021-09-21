import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { CustomeMaterialModule } from '@app/material-module';
import { SharedModule } from '@shared/shared.module';

import { SearchComponent, ListComponent } from './components';

import { BookComponent } from './book.component';

import { BookSearchComponent, BookDetailsComponent } from './pages';

const routes: Routes = [
  {
    path: 'search',
    component: BookSearchComponent,
  },
  {
    path: 'details/:id',
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
    SharedModule,
  ],
  declarations: [
    SearchComponent,
    ListComponent,
    BookComponent,
    BookSearchComponent,
    BookDetailsComponent,
  ],
})
export class BookRoutingModule { }
