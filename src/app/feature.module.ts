import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page3Component } from './page-3';

const routes: Routes = [
  {
    path: 'page-3',
    component: Page3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}

@NgModule({
  imports: [FeatureRoutingModule],
  exports: [],
  declarations: [Page3Component],
  providers: []
})
export class FeatureModule {}
