import  { Component } from 'angular2/core';
import {Message} from './message';
import {MessageService} from './message.service';
@Component({
    selector : 'my-message-input',
    template : `
     <section class="col-md-8 col-md-offset-2">
     <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
      <div class="form-group">
        <label for="content">Content</label>
        <input type="text" ngControl="content" class="form-control" id="content" #input>
        <button  type="submit" class="btn btn-primary" (click)="onCreate(input.value)">Send message</button>
      </div>
     </form>     
      </section>
     `
})
export class MessageInputComponent {
  constructor(private _messageService: MessageService){}
  onSubmit(form:any){
      const message = new Message(form.content, null , 'Dummy')
  }
  onCreate(content : string) {
      const message : Message = new Message(content, null , 'Dummy');
      this._messageService.addMessage(message)
          .subscribe(
              data => {
                  this._messageService.messages.push(data)
              },
              error => console.log(error)
          )
  }
}