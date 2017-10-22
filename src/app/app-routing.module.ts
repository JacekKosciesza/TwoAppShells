import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppShell1Component } from './app-shell-1';
import { AppShell2Component } from './app-shell-2';
import { Page1Component } from './page-1';
import { Page2Component } from './page-2';
import { Page5Component } from './page-5';

const routes: Routes = [
  {
    path: '',
    component: AppShell1Component,
    children: [
      { path: 'page-1', component: Page1Component },
      { path: 'page-2', component: Page2Component },
      { path: 'feature', loadChildren: './feature.module#FeatureModule' },
      { path: 'page-4', loadChildren: './page4.module#Page4Module' },
      {
        path: '',
        redirectTo: '/page-1',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '',
    component: AppShell2Component,
    children: [
      { path: 'page-5', component: Page5Component },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
