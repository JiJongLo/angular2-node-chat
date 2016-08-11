import {Component} from 'angular2/core';
import {SignUpComponent} from './signup.component';
@Component({
    selector: 'my-auth',
    directives : [SignUpComponent],
    template: `
      <h1>Auth</h1>
      <signup-component></signup-component>
    `
})

export class AuthenticationComponent {

}