import  {Component, OnInit} from 'angular2/core';
import {Message} from './message';
import {MessageService} from './message.service';
import {ErrorService} from '../errors/error.service';
@Component({
    selector : 'my-message-input',
    template : `
     <section class="col-md-8 col-md-offset-2">
     <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
      <div class="form-group">
        <label for="content">Content</label>
        <input type="text" ngControl="content" class="form-control" id="content" #input [ngModel]="message?.content">
        <button  type="submit" class="btn btn-primary">{{ !message ? 'Send message' : 'Save Message' }}</button>
         <button class="btn btn-danger" (click)="onCancel()" *ngIf="message">Cancel</button>
      </div>
     </form>     
      </section>
     `
})
export class MessageInputComponent implements OnInit {
  constructor(private _messageService: MessageService, private _errorService: ErrorService){}

    message:Message = null;

  onSubmit(form:any){

      if (this.message) {
          this.message.content = form.content;
          this._messageService.updateMessage(this.message).subscribe(
              data => console.log(data),
              error => this._errorService.handleError(error)
          );
          this.message = null;
      }
      else {
          const message:Message = new Message(form.content, null, 'Dummy');
          this._messageService.addMessage(message)
              .subscribe(
                  data => {
                      this._messageService.messages.push(data)
                  },
                  error => this._errorService.handleError(error)
              )
      }
  }

    ngOnInit() {
        this._messageService.messageIsEdit.subscribe(
            message => {
                this.message = message;
            }
        )
  }

    onCancel() {
        this.message = null;
    }
}