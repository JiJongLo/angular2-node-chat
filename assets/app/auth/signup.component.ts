import  {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators, Control} from "angular2/common";
import {User} from "./user";
import {AuthService} from "./auth.service";
import {ErrorService} from '../errors/error.service';

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

    constructor(private _fb:FormBuilder, private _authService:AuthService, private _errorService: ErrorService) {
    }
    onSubmit(){
        const user = new User(this.myForm.value.email, this.myForm.value.password,
            this.myForm.value.firstName, this.myForm.value.lastName);
        this._authService.signup(user).subscribe(
            data => console.log(data),
            error => this._errorService.handleError(error)
        )
    }
    ngOnInit(){
       this.myForm = this._fb.group({
           firstName : ['', Validators.required],
           lastName : ['', Validators.required],
           email: ['', Validators.compose([
               Validators.required,
               this.isMail
           ])],
           password : ['', Validators.required],
       })
    }

    private isMail(control:Control):{[s:string]:boolean} {
        if (!/[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\./.test(control.value)) {
            return {invalidMail: true}
        }
    }
}