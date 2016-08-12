import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {SignUpComponent} from './signup.component';
import {SignInComponent} from './signin.component';
import {LogoutComponent} from './logout.component';
@Component({
    selector: 'my-auth',
    directives: [ROUTER_DIRECTIVES],
    styles: [`
       .router-link-active {
          color : #555;
          cursor : default;
          background-color : #fff;
          border : 1px solid #ddd;
          border-bottom-color: transparent
       }
    `],
    template: `
      <header class="row spacing">
      <nav class="col-md-8 col-md-offset-2">
         <ul class="nav nav-tabs">
             <li><a [routerLink]="['Signup']">Sign up</a></li>
             <li><a [routerLink]="['Signin']">Sign in</a></li>
             <li><a [routerLink]="['Logout']">Logout</a></li>
         </ul>
      </nav>
      </header>
      <div class="row spacing">
       <router-outlet></router-outlet>       
      </div>     
    `
})
@RouteConfig([
        {path: '/signup', name: 'Signup', component: SignUpComponent, useAsDefault: true},
        {path: '/signin', name: 'Signin', component: SignInComponent},
        {path: '/logout', name: 'Logout', component: LogoutComponent},
    ]
)
export class AuthenticationComponent {

}