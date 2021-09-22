import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomeMaterialModule } from '@app/material-module';

import { ItemDetailsComponent } from '@shared/components/item-details/item-details.component';

import { MorePipe } from '@shared/pipes/more.pipe';
import { PhonePipe } from '@shared/pipes/phone.pipe';

@NgModule({
  declarations: [MorePipe, PhonePipe, ItemDetailsComponent],
  imports: [CommonModule, CustomeMaterialModule],
  exports: [MorePipe, PhonePipe, ItemDetailsComponent],
})
export class SharedModule {}
