import { Component } from '@angular/core';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';
import { HomeComponent } from './+home';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-mobile-app',
  template: `
  <h1 *shellNoRender>
    {{title}}
  </h1>
  <a [routerLink]="['/']" *shellNoRender>HOME</a>
  <router-outlet *shellNoRender></router-outlet>
  `,
  styles: [],
  directives: [...ROUTER_DIRECTIVES, ...APP_SHELL_DIRECTIVES],
  providers: [...ROUTER_PROVIDERS]
})
@Routes([
  {path: '/', component: HomeComponent}
])
export class AppComponent {
  title = 'App';
}
