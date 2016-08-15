import  {Component, OnInit} from 'angular2/core';
import  {Router} from 'angular2/router';
import {FormBuilder, ControlGroup, Validators} from "angular2/common";
import {AuthService} from "./auth.service";
import {User} from './user';

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

    constructor(private _fb:FormBuilder, private _authService:AuthService, private _router:Router) {
    }

    onSubmit() {
        const user = new User(this.SignIn.value.email, this.SignIn.value.password);
        this._authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this._router.navigateByUrl('/')
                }
            );
    }

    ngOnInit() {
        this.SignIn = this._fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        })
    }
}