import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppShell1Component } from './app-shell-1';
import { AppShell2Component } from './app-shell-2';
import { Page1Component } from './page-1';
import { Page2Component } from './page-2';
import { Page5Component } from './page-5';

@NgModule({
  declarations: [
    AppComponent,
    AppShell1Component,
    AppShell2Component,
    Page1Component,
    Page2Component,
    Page5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
