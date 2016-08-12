import  {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from "angular2/common";

@Component({
    selector : 'signup-component',
    template : `
     <section class="col-md-8 col-md-offset-2">
         <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
           <div class="form-group">
             <label for="firstName">First Name</label>
             <input [ngFormControl]="myForm.find('firstName')" type="text" id="firstName" class="form-control">
           </div>
             <div class="form-group">
             <label for="lastName">Last Name</label>
             <input type="text"  [ngFormControl]="myForm.find('lastName')" id="lastName" class="form-control">
           </div>
             <div class="form-group">
             <label for="email">Mail</label>
             <input type="email"  [ngFormControl]="myForm.find('email')" id="email" class="form-control">
           </div>
             <div class="form-group">
             <label for="password">Password</label>
             <input type="password" [ngFormControl]="myForm.find('password')" id="password" class="form-control">
           </div>
           <button type="submit" class="btn btn-form" [disabled]="!myForm.valid">Sign Up</button>
         </form>
       </section>
     `
})
export class SignUpComponent implements OnInit{
    myForm: ControlGroup;
    constructor(private _fb : FormBuilder){}
    onSubmit(){
        console.log(this.myForm.value)
    }
    ngOnInit(){
       this.myForm = this._fb.group({
           firstName : ['', Validators.required],
           lastName : ['', Validators.required],
           email : ['', Validators.required],
           password : ['', Validators.required],
       })
    }
}