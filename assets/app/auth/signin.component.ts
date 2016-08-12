import  {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from "angular2/common";

@Component({
    selector: 'signin-component',
    template: `
     <section class="col-md-8 col-md-offset-2">
        <form [ngFormModel]="SignIn" (ngSubmit)="onSubmit()">          
             <div class="form-group">
             <label for="email">Mail</label>
             <input type="email" [ngFormControl]="SignIn.find('email')" id="email" class="form-control">
           </div>
             <div class="form-group">
             <label for="password">Password</label>
             <input type="password"  [ngFormControl]="SignIn.find('password')" id="password" class="form-control">
           </div>
           <button type="submit" [disabled]="!SignIn.valid" class="btn btn-form">Sign Up</button>
         </form>
     </section>
     `
})
export class SignInComponent implements OnInit {
    SignIn:ControlGroup;

    constructor(private _fb:FormBuilder) {
    }

    onSubmit() {
        console.log(this.SignIn.value)
    }

    ngOnInit() {
        this.SignIn = this._fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        })
    }
}