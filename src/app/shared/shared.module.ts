import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorePipe } from '@shared/pipes/more.pipe';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  declarations: [MorePipe, PhonePipe],
  imports: [CommonModule],
  exports: [MorePipe, PhonePipe],
})
export class SharedModule {}
