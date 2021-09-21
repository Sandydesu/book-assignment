import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCollectionComponent } from './components/my-collection/my-collection.component';
const routes: Routes = [
  {
    path: '',
    component: MyCollectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [MyCollectionComponent],
  exports: [MyCollectionComponent]
})
export class CollectionRoutingModule { }
