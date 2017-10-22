import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page4Component } from './page-4';

const routes: Routes = [
  {
    path: '',
    component: Page4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page4RoutingModule {}

@NgModule({
  imports: [Page4RoutingModule],
  exports: [],
  declarations: [Page4Component],
  providers: []
})
export class Page4Module {}
