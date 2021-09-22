import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomeMaterialModule } from '@app/material-module';
import { SharedModule } from '@shared/shared.module';

import { BuyNowComponent } from './pages/buy-now/buy-now.component';
import { CartComponent } from './cart.component';

const routes: Routes = [
  {
    path: 'buy-now',
    component: BuyNowComponent,
  },
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
  declarations: [CartComponent, BuyNowComponent],
})
export class CartRoutingModule {}
