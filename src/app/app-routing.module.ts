import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('@book/book.module').then((m) => m.BookModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('@cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'collection',
    loadChildren: () =>
      import('@collection/collection.module').then((m) => m.CollectionModule),
  },
  { path: '**', redirectTo: 'books' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
