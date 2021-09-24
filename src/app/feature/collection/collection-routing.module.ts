import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared/shared.module';

import { CollectionComponent } from './collection.component';
import { MyCollectionComponent } from './components/my-collection/my-collection.component';

const routes: Routes = [
  {
    path: 'my-collections',
    component: MyCollectionComponent,
  },
  { path: '**', redirectTo: 'my-collections' },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
  ],
  declarations: [MyCollectionComponent, CollectionComponent],
})
export class CollectionRoutingModule {}
