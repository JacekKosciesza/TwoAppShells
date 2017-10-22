import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h1>App Shell 1</h1>
    <form>
      <input id="state" type="checkbox">
      <label for="state">State maintained while switching between 'App Shell 1' pages</label>
    </form>
    <router-outlet></router-outlet>
  `
})
export class AppShell1Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
