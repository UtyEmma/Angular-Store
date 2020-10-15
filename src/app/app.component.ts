import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="nav-brand text-secondary" [routerLink]="['/welcome']">{{pageTitle}}</a>
      <ul class="nav nav-pills">
        <li><a class="nav-link" [routerLink]="['/welcome']">Home</a></li>
        <li><a class="nav-link btn btn-primary" [routerLink]="['/products']">Product</a></li>
      </ul>
    </nav>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
    `
})

export class AppComponent {
  pageTitle: string = 'UtyEmma';
}
