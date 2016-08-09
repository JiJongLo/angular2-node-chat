import {Component} from 'angular2/core';
import {MessageListComponent} from './messages/message-list.component';
import {MessageInputComponent} from './messages/message-input.component';
@Component({
    selector: 'my-app',
    directives : [MessageListComponent , MessageInputComponent],
    template: `
    <div class="row">
      <my-message-input></my-message-input>
    </div>
    <div class="row">
       <my-message-list></my-message-list>
     </div>
       `
})
export class AppComponent {
   
}