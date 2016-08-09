import  { Component } from 'angular2/core';
import {Message} from './message';
import {MessageComponent} from './message.component';
@Component({
    selector : 'my-message-list',
    directives : [MessageComponent],
    template : `
     <section class="col-md-8 col-md-offset-2">
          <my-message *ngFor="#message of messages" [message] = "message" (editClicked) = "message.content = $event"></my-message>
       </section>
     `
})
export class MessageListComponent {
    messages: Message[] = [
        new Message('A new message', null , 'Pidor '),
        new Message('Second message', null , 'Fjdslfjlfjaf;ld '),
        new Message('Third message', null , 'Bla bla;ld ')
    ]
}