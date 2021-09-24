import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomeMaterialModule } from '@app/material-module';

import { ItemDetailsComponent } from '@shared/components';

import { MorePipe, PhonePipe } from '@shared/pipes';

@NgModule({
  declarations: [MorePipe, PhonePipe, ItemDetailsComponent],
  imports: [CommonModule, CustomeMaterialModule],
  exports: [MorePipe, PhonePipe, ItemDetailsComponent],
})
export class SharedModule {}
