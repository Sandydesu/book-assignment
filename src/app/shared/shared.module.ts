import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorePipe } from '@shared/pipes/more.pipe';

@NgModule({
  declarations: [MorePipe],
  imports: [CommonModule],
  exports: [MorePipe],
})
export class SharedModule {}
