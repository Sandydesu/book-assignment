import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomeMaterialModule } from '@app/material-module';
import { SharedModule } from '@shared/shared.module';

import { CartComponent } from './cart.component';
import { BuyNowComponent, CartListComponent } from './pages';

const routes: Routes = [
  {
    path: 'buy-now',
    component: BuyNowComponent,
  },
  {
    path: 'cart-list',
    component: CartListComponent,
  },
  { path: '**', redirectTo: 'cart-list' },
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CustomeMaterialModule,
    SharedModule,
  ],
  declarations: [CartComponent, BuyNowComponent, CartListComponent],
})
export class CartRoutingModule {}
