import  { Component } from 'angular2/core';
import {Message} from './message';
@Component({
    selector : 'my-message-input',
    template : `
     <section class="col-md-8 col-md-offset-2">
      <div class="form-group">
        <label for="content">Content</label>
        <input type="text" #input id="content">
        <button  type="submit" class="btn btn-primary" (click)="onCreate(input.value)">Send message</button>
      </div>
      </section>
     `
})
export class MessageInputComponent {
  onCreate(content : string) {
      const message : Message = new Message(content, null , 'Dummy')
  }
}