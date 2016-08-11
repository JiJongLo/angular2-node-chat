import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeaderComponent} from './header.component';
import {MessagesComponent} from './messages/messages.component';
import {AuthenticationComponent} from './auth/autontication.component';
@Component({
    selector: 'my-app',
    directives: [HeaderComponent, ROUTER_DIRECTIVES],
    template: `
      <div class="container">
      <my-header> </my-header>
      <router-outlet></router-outlet>  
      </div>       
       `
})

@RouteConfig([
        {path: '/', name: 'Messages', component: MessagesComponent, useAsDefault: true},
        {path: '/auth', name: 'Auth', component: AuthenticationComponent}
    ]
)
export class AppComponent {
   
}