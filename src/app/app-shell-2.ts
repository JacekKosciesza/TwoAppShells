import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h1>App Shell 2</h1>
    <router-outlet></router-outlet>
  `
})

export class AppShell2Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}
